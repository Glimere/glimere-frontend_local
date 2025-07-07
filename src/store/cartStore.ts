import apiClient from "@/api/client/apiClient";
import { getJwt } from "@/lib/cookie";
import type { ApiResponse, CartData, CartItem, PendingChange } from "@/types";
import axios from "axios";
import { toast } from "sonner";
import { create } from "zustand";
import { persist } from "zustand/middleware";

// Utility to debounce a function
const debounce = <T extends (...args: any[]) => Promise<void>>(
  func: T,
  wait: number,
): ((...args: Parameters<T>) => Promise<void>) => {
  let timeout: NodeJS.Timeout | null = null;
  return async (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    return new Promise<void>((resolve, reject) => {
      timeout = setTimeout(async () => {
        try {
          await func(...args);
          resolve();
        } catch (err) {
          reject(err);
        }
      }, wait);
    });
  };
};

interface CartState {
  cart: CartData | null;
  pendingChanges: PendingChange[];
  isProcessing: boolean;
  addItem: (item: CartItem) => Promise<void>;
  removeItem: (id: string) => Promise<void>;
  removeItems: (ids: string[]) => Promise<void>;
  updateQuantity: (id: string, quantity: number) => Promise<void>;
  getCart: () => Promise<void>;
  synchronizeCart: () => Promise<void>;
  queueChange: (change: PendingChange) => void;
  processPendingChanges: () => Promise<void>;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: null,
      pendingChanges: [],
      isProcessing: false,

      addItem: debounce(async (item: CartItem) => {
        if (get().isProcessing) return;
        set({ isProcessing: true });
        const token = await getJwt();

        // Fetch latest cart to ensure version match
        if (token) {
          try {
            await get().getCart();
          } catch (error) {
            console.error(
              "Failed to fetch latest cart before adding item",
              error,
            );
            toast.error("Failed to Fetch Cart", {
              id: `fetch-add-error-${Date.now()}`,
              description: "Unable to fetch latest cart. Item not added.",
            });
            set({ isProcessing: false });
            return;
          }
        }

        const currentCart = get().cart;

        // Optimistic update without incrementing version
        const updatedCart: CartData = currentCart
          ? { ...currentCart }
          : {
              _id: "",
              user: "",
              createdAt: "",
              updatedAt: "",
              __v: 0,
              version: 0,
              items: [],
              total_items: 0,
              total_price: 0,
            };

        const existingItem = updatedCart.items.find(
          (cartItem) => cartItem.apparel._id === item.apparel._id,
        );

        if (existingItem) {
          existingItem.quantity += item.quantity;
          existingItem.lastModified = new Date().toISOString();
        } else {
          updatedCart.items.push({
            ...item,
            lastModified: new Date().toISOString(),
          });
        }

        updatedCart.total_items = updatedCart.items.reduce(
          (total, item) => total + item.quantity,
          0,
        );
        updatedCart.total_price = updatedCart.items.reduce(
          (total, item) => total + item.quantity * item.apparel.apparel_price,
          0,
        );

        set({ cart: updatedCart });
        toast.success("Item Added Locally", {
          id: `add-local-${Date.now()}`,
          description: "Item added to your local cart.",
        });

        if (!token) {
          console.warn("User not authenticated. Queuing item addition.");
          get().queueChange({
            action: "add",
            apparelId: item.apparel._id,
            quantity: item.quantity,
            selected_sizes: item.selected_sizes,
            selected_materials: item.selected_materials,
            selected_colors: item.selected_colors,
            timestamp: new Date().toISOString(),
          });
          toast.info("You're offline or not logged in", {
            id: `add-offline-${Date.now()}`,
            description:
              "Item queued for sync when you're online and logged in.",
          });
          set({ isProcessing: false });
          return;
        }

        try {
          const response = await apiClient.post<ApiResponse>(
            `/api/cart/add`,
            {
              apparelId: item.apparel._id,
              quantity: item.quantity,
              selected_sizes: item.selected_sizes,
              selected_materials: item.selected_materials,
              selected_colors: item.selected_colors,
              version: get().cart?.version ?? 0,
            },
            {
              headers: { Authorization: `Bearer ${token}` },
            },
          );

          if (response.data.status === "success") {
            set({ cart: response.data.data });
            await get().processPendingChanges();
            toast.success("Item Added", {
              id: `add-success-${Date.now()}`,
              description: "Item successfully added to your cart.",
            });
          }
        } catch (error: any) {
          if (axios.isAxiosError(error) && error.response?.status === 409) {
            set({ cart: error.response.data.data.cart });
            toast.error("Cart Version Conflict", {
              id: `add-conflict-${Date.now()}`,
              description:
                "Cart version mismatch. Latest cart loaded, please try again.",
            });
          } else if (error.code === "ERR_NETWORK") {
            get().queueChange({
              action: "add",
              apparelId: item.apparel._id,
              quantity: item.quantity,
              selected_sizes: item.selected_sizes,
              selected_materials: item.selected_materials,
              selected_colors: item.selected_colors,
              timestamp: new Date().toISOString(),
            });
            toast.info("You're offline", {
              id: `add-offline-${Date.now()}`,
              description: "Item queued for sync when you're online.",
            });
          } else {
            console.error("Failed to add item to cart", error);
            toast.error("Failed to Add Item", {
              id: `add-error-${Date.now()}`,
              description: "Unable to add item to cart. Please try again.",
            });
          }
        } finally {
          set({ isProcessing: false });
        }
      }, 500),

      getCart: async () => {
        if (get().isProcessing) return;
        set({ isProcessing: true });
        const token = await getJwt();
        if (!token) {
          console.warn("User not authenticated. Cannot fetch cart.");
          toast.info("Not Logged In", {
            id: `fetch-offline-${Date.now()}`,
            description: "Please log in to fetch your cart.",
          });
          set({ isProcessing: false });
          return;
        }

        try {
          const response = await apiClient.get<ApiResponse>(`/api/cart`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (response.data.status === "success") {
            set({ cart: response.data.data });
            toast.success("Cart Fetched", {
              id: `fetch-success-${Date.now()}`,
              description: "Your cart has been loaded from the server.",
            });
            await get().processPendingChanges();
          }
        } catch (error) {
          console.error("Failed to fetch cart from API", error);
          toast.error("Failed to Fetch Cart", {
            id: `fetch-error-${Date.now()}`,
            description: "Unable to load cart. Please try again.",
          });
        } finally {
          set({ isProcessing: false });
        }
      },

      synchronizeCart: debounce(async () => {
        if (get().isProcessing) return;
        set({ isProcessing: true });
        const token = await getJwt();
        if (!token) {
          console.warn("User not authenticated. Cannot synchronize cart.");
          toast.info("Not Logged In", {
            id: `sync-offline-${Date.now()}`,
            description: "Please log in to sync your cart.",
          });
          set({ isProcessing: false });
          return;
        }

        const localCart = get().cart;
        try {
          const response = await apiClient.get<ApiResponse>(`/api/cart`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (response.data.status !== "success") {
            throw new Error(response.data.message);
          }
          const serverCart = response.data.data;

          if (!localCart) {
            set({ cart: serverCart });
            toast.success("Cart Initialized", {
              id: `sync-init-${Date.now()}`,
              description: "Your cart has been initialized from the server.",
            });
            await get().processPendingChanges();
            set({ isProcessing: false });
            return;
          }

          if (serverCart.version > localCart.version) {
            const reconciledItems = [...serverCart.items];

            for (const localItem of localCart.items) {
              const serverItemIndex = reconciledItems.findIndex(
                (item) => item.apparel._id === localItem.apparel._id,
              );

              if (serverItemIndex > -1) {
                const serverItem = reconciledItems[serverItemIndex];
                const localModified = new Date(
                  localItem.lastModified || localCart.updatedAt,
                );
                const serverModified = new Date(
                  serverItem.lastModified || serverCart.updatedAt,
                );

                if (localModified > serverModified) {
                  reconciledItems[serverItemIndex] = localItem;
                }
              } else {
                reconciledItems.push(localItem);
              }
            }

            const totalItems = reconciledItems.reduce(
              (sum, item) => sum + item.quantity,
              0,
            );
            const totalPrice = reconciledItems.reduce(
              (sum, item) => sum + item.quantity * item.apparel.apparel_price,
              0,
            );

            const reconciledCart: CartData = {
              ...serverCart,
              items: reconciledItems,
              total_items: totalItems,
              total_price: totalPrice,
              version: serverCart.version, // Use server version
            };

            set({ cart: reconciledCart });
            toast.info("Cart Reconciled Locally", {
              id: `sync-reconcile-${Date.now()}`,
              description: "Local cart updated with server changes.",
            });

            const syncResponse = await apiClient.post<ApiResponse>(
              `/api/cart/sync`,
              { cart: reconciledCart },
              {
                headers: { Authorization: `Bearer ${token}` },
              },
            );
            if (syncResponse.data.status === "success") {
              set({ cart: syncResponse.data.data });
              toast.success("Cart Synced", {
                id: `sync-success-${Date.now()}`,
                description: "Your cart has been synchronized with the server.",
              });
              await get().processPendingChanges();
            }
          } else {
            const syncResponse = await apiClient.post<ApiResponse>(
              `/api/cart/sync`,
              { cart: localCart },
              {
                headers: { Authorization: `Bearer ${token}` },
              },
            );
            if (syncResponse.data.status === "success") {
              set({ cart: syncResponse.data.data });
              toast.success("Cart Synced", {
                id: `sync-success-${Date.now()}`,
                description: "Your cart has been synchronized with the server.",
              });
              await get().processPendingChanges();
            }
          }
        } catch (error: any) {
          if (axios.isAxiosError(error) && error.response?.status === 409) {
            set({ cart: error.response.data.data.cart });
            toast.error("Cart Version Conflict", {
              id: `sync-conflict-${Date.now()}`,
              description:
                "Cart version mismatch. Latest cart loaded, please try again.",
            });
          } else {
            console.error("Failed to synchronize cart with API", error);
            toast.error("Failed to Sync Cart", {
              id: `sync-error-${Date.now()}`,
              description: "Unable to sync cart. Please try again.",
            });
          }
        } finally {
          set({ isProcessing: false });
        }
      }, 1000),

      queueChange: (change: PendingChange) => {
        set((state) => ({
          pendingChanges: [...state.pendingChanges, change],
        }));
        toast.info("Change Queued", {
          id: `queue-${Date.now()}`,
          description: `Cart ${change.action} action queued for sync.`,
        });
      },

      processPendingChanges: async () => {
        if (get().isProcessing) return;
        set({ isProcessing: true });
        const token = await getJwt();
        if (!token) {
          toast.info("Not Logged In", {
            id: `process-offline-${Date.now()}`,
            description: "Please log in to process queued cart changes.",
          });
          set({ isProcessing: false });
          return;
        }

        const pendingChanges = get().pendingChanges;
        if (pendingChanges.length === 0) {
          set({ isProcessing: false });
          return;
        }

        // Fetch latest cart to ensure version match
        try {
          await get().getCart();
        } catch (error) {
          console.error(
            "Failed to fetch latest cart before processing changes",
            error,
          );
          toast.error("Failed to Fetch Cart", {
            id: `fetch-process-error-${Date.now()}`,
            description: "Unable to fetch latest cart. Changes not processed.",
          });
          set({ isProcessing: false });
          return;
        }

        const sortedChanges = pendingChanges.sort(
          (a, b) =>
            new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime(),
        );

        while (sortedChanges.length > 0) {
          const change = sortedChanges[0];
          try {
            if (change.action === "add") {
              const response = await apiClient.post<ApiResponse>(
                `/api/cart/add`,
                {
                  apparelId: change.apparelId,
                  quantity: change.quantity,
                  selected_sizes: change.selected_sizes,
                  selected_materials: change.selected_materials,
                  selected_colors: change.selected_colors,
                  version: get().cart?.version ?? 0,
                },
                {
                  headers: { Authorization: `Bearer ${token}` },
                },
              );
              if (response.data.status === "success") {
                set({ cart: response.data.data });
                toast.success("Change Applied", {
                  id: `change-add-${Date.now()}`,
                  description: "Queued item added to cart.",
                });
                sortedChanges.shift();
                set({ pendingChanges: sortedChanges });
              }
            } else if (change.action === "remove") {
              const apparelIds = change.apparelId.split(",");
              const response = await apiClient.post<ApiResponse>(
                `/api/cart/remove-multiple`,
                { apparelIds, version: get().cart?.version ?? 0 },
                {
                  headers: { Authorization: `Bearer ${token}` },
                },
              );
              if (response.data.status === "success") {
                set({ cart: response.data.data });
                toast.success("Change Applied", {
                  id: `change-remove-${Date.now()}`,
                  description: "Queued items removed from cart.",
                });
                sortedChanges.shift();
                set({ pendingChanges: sortedChanges });
              }
            } else if (change.action === "update") {
              const response = await apiClient.post<ApiResponse>(
                `/api/cart/update`,
                {
                  apparelId: change.apparelId,
                  quantity: change.quantity,
                  version: get().cart?.version ?? 0,
                },
                {
                  headers: { Authorization: `Bearer ${token}` },
                },
              );
              if (response.data.status === "success") {
                set({ cart: response.data.data });
                toast.success("Change Applied", {
                  id: `change-update-${Date.now()}`,
                  description: "Queued item quantity updated.",
                });
                sortedChanges.shift();
                set({ pendingChanges: sortedChanges });
              }
            }
          } catch (error: any) {
            if (axios.isAxiosError(error) && error.response?.status === 409) {
              set({ cart: error.response.data.data.cart });
              toast.error("Cart Version Conflict", {
                id: `change-conflict-${Date.now()}`,
                description:
                  "Cart version mismatch. Latest cart loaded, please try again.",
              });
              set({ pendingChanges: sortedChanges, isProcessing: false });
              return;
            } else {
              console.error(
                `Failed to process change: ${change.action}`,
                error,
              );
              toast.error(`Failed to Process ${change.action} Change`, {
                id: `change-error-${Date.now()}`,
                description: `Unable to process ${change.action} change. Please try again.`,
              });
              set({ pendingChanges: sortedChanges, isProcessing: false });
              return;
            }
          }
        }

        set({ pendingChanges: [], isProcessing: false });
        toast.success("Changes Synced", {
          id: `changes-synced-${Date.now()}`,
          description: "All queued cart changes have been applied.",
        });
      },

      removeItem: debounce(async (apparelId: string) => {
        if (get().isProcessing) return;
        set({ isProcessing: true });
        const token = await getJwt();

        // Fetch latest cart to ensure version match
        if (token) {
          try {
            await get().getCart();
          } catch (error) {
            console.error(
              "Failed to fetch latest cart before removing item",
              error,
            );
            toast.error("Failed to Fetch Cart", {
              id: `fetch-remove-error-${Date.now()}`,
              description: "Unable to fetch latest cart. Item not removed.",
            });
            set({ isProcessing: false });
            return;
          }
        }

        const currentCart = get().cart;

        // Optimistic update without incrementing version
        if (currentCart) {
          const updatedCart = { ...currentCart };
          updatedCart.items = updatedCart.items.filter(
            (item) => item.apparel._id !== apparelId,
          );
          updatedCart.total_items = updatedCart.items.reduce(
            (total, item) => total + item.quantity,
            0,
          );
          updatedCart.total_price = updatedCart.items.reduce(
            (total, item) => total + item.quantity * item.apparel.apparel_price,
            0,
          );
          set({ cart: updatedCart });
          toast.success("Item Removed Locally", {
            id: `remove-local-${Date.now()}`,
            description: "Item removed from your local cart.",
          });
        }

        if (!token) {
          console.warn("User not authenticated. Queuing item removal.");
          get().queueChange({
            action: "remove",
            apparelId,
            timestamp: new Date().toISOString(),
          });
          toast.info("You're offline or not logged in", {
            id: `remove-offline-${Date.now()}`,
            description:
              "Item removal queued for sync when you're online and logged in.",
          });
          set({ isProcessing: false });
          return;
        }

        try {
          const response = await apiClient.delete<ApiResponse>(
            `/api/cart/remove/${apparelId}`,
            {
              headers: { Authorization: `Bearer ${token}` },
              data: { version: get().cart?.version ?? 0 },
            },
          );
          if (response.data.status === "success") {
            set({ cart: response.data.data });
            await get().processPendingChanges();
            toast.success("Item Removed", {
              id: `remove-success-${Date.now()}`,
              description: "Item successfully removed from your cart.",
            });
          }
        } catch (error: any) {
          if (axios.isAxiosError(error) && error.response?.status === 409) {
            set({ cart: error.response.data.data.cart });
            toast.error("Cart Version Conflict", {
              id: `remove-conflict-${Date.now()}`,
              description:
                "Cart version mismatch. Latest cart loaded, please try again.",
            });
          } else {
            console.error("Failed to remove item from cart", error);
            toast.error("Failed to Remove Item", {
              id: `remove-error-${Date.now()}`,
              description: "Unable to remove item from cart. Please try again.",
            });
          }
        } finally {
          set({ isProcessing: false });
        }
      }, 500),

      removeItems: debounce(async (apparelIds: string[]) => {
        if (get().isProcessing) return;
        set({ isProcessing: true });
        const token = await getJwt();

        // Fetch latest cart to ensure version match
        if (token) {
          try {
            await get().getCart();
          } catch (error) {
            console.error(
              "Failed to fetch latest cart before removing items",
              error,
            );
            toast.error("Failed to Fetch Cart", {
              id: `fetch-remove-items-error-${Date.now()}`,
              description: "Unable to fetch latest cart. Items not removed.",
            });
            set({ isProcessing: false });
            return;
          }
        }

        const currentCart = get().cart;

        // Optimistic update without incrementing version
        if (currentCart) {
          const updatedCart = { ...currentCart };
          updatedCart.items = updatedCart.items.filter(
            (item) => !apparelIds.includes(item.apparel._id),
          );
          updatedCart.total_items = updatedCart.items.reduce(
            (total, item) => total + item.quantity,
            0,
          );
          updatedCart.total_price = updatedCart.items.reduce(
            (total, item) => total + item.quantity * item.apparel.apparel_price,
            0,
          );
          set({ cart: updatedCart });
          toast.success("Items Removed Locally", {
            id: `remove-items-local-${Date.now()}`,
            description: "Items removed from your local cart.",
          });
        }

        if (!token) {
          console.warn("User not authenticated. Queuing items removal.");
          get().queueChange({
            action: "remove",
            apparelId: apparelIds.join(","),
            timestamp: new Date().toISOString(),
          });
          toast.info("You're offline or not logged in", {
            id: `remove-items-offline-${Date.now()}`,
            description:
              "Items removal queued for sync when you're online and logged in.",
          });
          set({ isProcessing: false });
          return;
        }

        try {
          const response = await apiClient.post<ApiResponse>(
            `/api/cart/remove-multiple`,
            { apparelIds, version: get().cart?.version ?? 0 },
            {
              headers: { Authorization: `Bearer ${token}` },
            },
          );
          if (response.data.status === "success") {
            set({ cart: response.data.data });
            await get().processPendingChanges();
            toast.success("Items Removed", {
              id: `remove-items-success-${Date.now()}`,
              description: "Items successfully removed from your cart.",
            });
          }
        } catch (error: any) {
          if (axios.isAxiosError(error) && error.response?.status === 409) {
            set({ cart: error.response.data.data.cart });
            toast.error("Cart Version Conflict", {
              id: `remove-items-conflict-${Date.now()}`,
              description:
                "Cart version mismatch. Latest cart loaded, please try again.",
            });
          } else {
            console.error("Failed to remove items from cart", error);
            toast.error("Failed to Remove Items", {
              id: `remove-items-error-${Date.now()}`,
              description:
                "Unable to remove items from cart. Please try again.",
            });
          }
        } finally {
          set({ isProcessing: false });
        }
      }, 500),

      updateQuantity: debounce(async (apparelId: string, quantity: number) => {
        if (get().isProcessing) return;
        set({ isProcessing: true });
        const token = await getJwt();

        // Fetch latest cart to ensure version match
        if (token) {
          try {
            await get().getCart();
          } catch (error) {
            console.error(
              "Failed to fetch latest cart before updating quantity",
              error,
            );
            toast.error("Failed to Fetch Cart", {
              id: `fetch-update-error-${Date.now()}`,
              description: "Unable to fetch latest cart. Quantity not updated.",
            });
            set({ isProcessing: false });
            return;
          }
        }

        const currentCart = get().cart;

        // Optimistic update without incrementing version
        if (currentCart) {
          const updatedCart = { ...currentCart };
          const item = updatedCart.items.find(
            (item) => item.apparel._id === apparelId,
          );
          if (item) {
            item.quantity = quantity;
            item.lastModified = new Date().toISOString();
            updatedCart.total_items = updatedCart.items.reduce(
              (total, item) => total + item.quantity,
              0,
            );
            updatedCart.total_price = updatedCart.items.reduce(
              (total, item) =>
                total + item.quantity * item.apparel.apparel_price,
              0,
            );
            set({ cart: updatedCart });
            toast.success("Quantity Updated Locally", {
              id: `update-local-${Date.now()}`,
              description: "Item quantity updated in your local cart.",
            });
          } else {
            toast.error("Item Not Found", {
              id: `update-error-${Date.now()}`,
              description: "The item to update was not found in your cart.",
            });
            set({ isProcessing: false });
            return;
          }
        }

        if (!token) {
          console.warn("User not authenticated. Queuing quantity update.");
          get().queueChange({
            action: "update",
            apparelId,
            quantity,
            timestamp: new Date().toISOString(),
          });
          toast.info("You're offline or not logged in", {
            id: `update-offline-${Date.now()}`,
            description:
              "Quantity update queued for sync when you're online and logged in.",
          });
          set({ isProcessing: false });
          return;
        }

        try {
          const response = await apiClient.post<ApiResponse>(
            `/api/cart/update`,
            { apparelId, quantity, version: get().cart?.version ?? 0 },
            {
              headers: { Authorization: `Bearer ${token}` },
            },
          );
          if (response.data.status === "success") {
            set({ cart: response.data.data });
            await get().processPendingChanges();
            toast.success("Quantity Updated", {
              id: `update-success-${Date.now()}`,
              description: "Item quantity updated in your cart.",
            });
          }
        } catch (error: any) {
          if (axios.isAxiosError(error) && error.response?.status === 409) {
            set({ cart: error.response.data.data.cart });
            toast.error("Cart Version Conflict", {
              id: `update-conflict-${Date.now()}`,
              description:
                "Cart version mismatch. Latest cart loaded, please try again.",
            });
          } else {
            console.error("Failed to update item quantity", error);
            toast.error("Failed to Update Quantity", {
              id: `update-error-${Date.now()}`,
              description: "Unable to update item quantity. Please try again.",
            });
          }
        } finally {
          set({ isProcessing: false });
        }
      }, 500),
    }),
    {
      name: "cart-storage",
      storage: {
        getItem: (name) => {
          const item = localStorage.getItem(name);
          return item ? JSON.parse(item) : null;
        },
        setItem: (name, value) =>
          localStorage.setItem(name, JSON.stringify(value)),
        removeItem: (name) => localStorage.removeItem(name),
      },
    },
  ),
);
