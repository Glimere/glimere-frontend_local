import apiClient from "@/api/client/apiClient";
import { getJwt } from "@/lib/cookie";
import type { ApiResponse, CartItem } from "@/types";
import axios from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartData {
  _id: string;
  user: string;
  items: CartItem[];
  total_price: number;
  total_items: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  version: number; // Added for versioning
}

interface PendingChange {
  action: "add" | "remove" | "update";
  apparelId: string;
  quantity?: number;
  timestamp: string;
}

interface CartState {
  cart: CartData | null;
  pendingChanges: PendingChange[];
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
      pendingChanges: [], // Store offline changes

      addItem: async (item: CartItem) => {
        const token = await getJwt();
        if (!token) {
          console.warn("User not authenticated. Adding item locally.");
        }

        const currentCart: CartData = get().cart || {
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

        const existingItem = currentCart.items.find(
          (cartItem) => cartItem.apparel._id === item.apparel._id,
        );

        if (existingItem) {
          existingItem.quantity += item.quantity;
        } else {
          currentCart.items.push({
            ...item,
            lastModified: new Date().toISOString(),
          });
        }

        currentCart.total_items = currentCart.items.reduce(
          (total, item) => total + item.quantity,
          0,
        );
        currentCart.total_price = currentCart.items.reduce(
          (total, item) => total + item.quantity * item.apparel.apparel_price,
          0,
        );
        currentCart.version += 1;

        set({ cart: { ...currentCart } });

        if (!token) {
          get().queueChange({
            action: "add",
            apparelId: item.apparel._id,
            quantity: item.quantity,
            timestamp: new Date().toISOString(),
          });
          return;
        }

        try {
          await apiClient.post(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart/add`,
            {
              apparelId: item.apparel._id,
              quantity: item.quantity,
              version: currentCart.version,
            },
            {
              headers: { Authorization: `Bearer ${token}` },
            },
          );
          await get().processPendingChanges();
        } catch (error: any) {
          if (error.code === "ERR_NETWORK") {
            get().queueChange({
              action: "add",
              apparelId: item.apparel._id,
              quantity: item.quantity,
              timestamp: new Date().toISOString(),
            });
          } else if (error.response?.status === 409) {
            await get().synchronizeCart();
          } else {
            console.error("Failed to add item to API", error);
          }
        }
      },

      removeItem: async (id: string) => {
        const token = await getJwt();
        if (!token) {
          console.warn("User not authenticated. Removing item locally.");
        }

        const currentCart = get().cart;
        if (!currentCart) {
          console.warn("Cart data is not available.");
          return;
        }

        currentCart.items = currentCart.items.filter(
          (item) => item.apparel._id !== id,
        );
        currentCart.total_items = currentCart.items.reduce(
          (total, item) => total + item.quantity,
          0,
        );
        currentCart.total_price = currentCart.items.reduce(
          (total, item) => total + item.quantity * item.apparel.apparel_price,
          0,
        );
        currentCart.version += 1;

        set({ cart: { ...currentCart } });

        if (!token) {
          get().queueChange({
            action: "remove",
            apparelId: id,
            timestamp: new Date().toISOString(),
          });
          return;
        }

        try {
          await apiClient.delete(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart/remove/${id}`,
            {
              headers: { Authorization: `Bearer ${token}` },
              data: { version: currentCart.version },
            },
          );
          await get().processPendingChanges();
        } catch (error: any) {
          if (error.code === "ERR_NETWORK") {
            get().queueChange({
              action: "remove",
              apparelId: id,
              timestamp: new Date().toISOString(),
            });
          } else if (error.response?.status === 409) {
            await get().synchronizeCart();
          } else {
            console.error("Failed to remove item from API", error);
          }
        }
      },

      removeItems: async (apparelIds: string[]) => {
        const token = await getJwt();
        if (!token) {
          console.warn("User not authenticated. Removing items locally.");
        }

        const currentCart = get().cart;
        if (!currentCart) {
          console.warn("Cart data is not available.");
          return;
        }

        currentCart.items = currentCart.items.filter(
          (item) => !apparelIds.includes(item.apparel._id),
        );
        currentCart.total_items = currentCart.items.reduce(
          (total, item) => total + item.quantity,
          0,
        );
        currentCart.total_price = currentCart.items.reduce(
          (total, item) => total + item.quantity * item.apparel.apparel_price,
          0,
        );
        currentCart.version += 1;

        set({ cart: { ...currentCart } });

        if (!token) {
          apparelIds.forEach((id) =>
            get().queueChange({
              action: "remove",
              apparelId: id,
              timestamp: new Date().toISOString(),
            }),
          );
          return;
        }

        try {
          await apiClient.post(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart/remove-multiple`,
            { apparelIds, version: currentCart.version },
            {
              headers: { Authorization: `Bearer ${token}` },
            },
          );
          await get().processPendingChanges();
        } catch (error: any) {
          if (error.code === "ERR_NETWORK") {
            apparelIds.forEach((id) =>
              get().queueChange({
                action: "remove",
                apparelId: id,
                timestamp: new Date().toISOString(),
              }),
            );
          } else if (error.response?.status === 409) {
            await get().synchronizeCart();
          } else {
            console.error("Failed to remove items from API", error);
          }
        }
      },

      updateQuantity: async (apparelId: string, quantity: number) => {
        const token = await getJwt();
        if (!token) {
          console.warn("User not authenticated. Updating quantity locally.");
        }

        const currentCart = get().cart;
        if (!currentCart) {
          console.warn("Cart data is not available.");
          return;
        }

        const itemToUpdate = currentCart.items.find(
          (item) => item.apparel._id === apparelId,
        );
        if (itemToUpdate) {
          itemToUpdate.quantity = quantity;
          itemToUpdate.lastModified = new Date().toISOString();
        }
        currentCart.total_items = currentCart.items.reduce(
          (total, item) => total + item.quantity,
          0,
        );
        currentCart.total_price = currentCart.items.reduce(
          (total, item) => total + item.quantity * item.apparel.apparel_price,
          0,
        );
        currentCart.version += 1;

        set({ cart: { ...currentCart } });

        if (!token) {
          get().queueChange({
            action: "update",
            apparelId,
            quantity,
            timestamp: new Date().toISOString(),
          });
          return;
        }

        try {
          await apiClient.post(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart/update`,
            { apparelId, quantity, version: currentCart.version },
            {
              headers: { Authorization: `Bearer ${token}` },
            },
          );
          await get().processPendingChanges();
        } catch (error: any) {
          if (error.code === "ERR_NETWORK") {
            get().queueChange({
              action: "update",
              apparelId,
              quantity,
              timestamp: new Date().toISOString(),
            });
          } else if (error.response?.status === 409) {
            await get().synchronizeCart();
          } else {
            console.error("Failed to update item quantity in API", error);
          }
        }
      },

      getCart: async () => {
        const token = await getJwt();
        if (!token) {
          console.warn("User not authenticated. Cannot fetch cart.");
          return;
        }

        try {
          const response = await apiClient.get<ApiResponse>(`/api/cart`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          set({ cart: response.data.data });
          await get().processPendingChanges();
        } catch (error) {
          console.error("Failed to fetch cart from API", error);
        }
      },

      synchronizeCart: async () => {
        const token = await getJwt();
        if (!token) {
          console.warn("User not authenticated. Cannot synchronize cart.");
          return;
        }

        const localCart = get().cart;
        try {
          const response = await apiClient.get<ApiResponse>(`/api/cart`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          const serverCart = response.data.data;

          if (!localCart) {
            set({ cart: serverCart });
            await get().processPendingChanges();
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
              version: serverCart.version + 1,
            };

            set({ cart: reconciledCart });

            await apiClient.post(
              `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart/sync`,
              { cart: reconciledCart },
              {
                headers: { Authorization: `Bearer ${token}` },
              },
            );
          } else {
            await apiClient.post(
              `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart/sync`,
              { cart: localCart },
              {
                headers: { Authorization: `Bearer ${token}` },
              },
            );
            set({ cart: localCart });
          }

          await get().processPendingChanges();
        } catch (error: any) {
          console.error("Failed to synchronize cart with API", error);
        }
      },

      queueChange: (change: PendingChange) => {
        set((state) => ({
          pendingChanges: [...state.pendingChanges, change],
        }));
      },

      processPendingChanges: async () => {
        const token = await getJwt();
        if (!token) return;

        const pendingChanges = get().pendingChanges;
        if (pendingChanges.length === 0) return;

        const sortedChanges = pendingChanges.sort(
          (a, b) =>
            new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime(),
        );

        for (const change of sortedChanges) {
          try {
            if (change.action === "add") {
              await apiClient.post(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart/add`,
                {
                  apparelId: change.apparelId,
                  quantity: change.quantity,
                  version: get().cart?.version,
                },
                {
                  headers: { Authorization: `Bearer ${token}` },
                },
              );
            } else if (change.action === "remove") {
              await apiClient.delete(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart/remove/${change.apparelId}`,
                {
                  headers: { Authorization: `Bearer ${token}` },
                  data: { version: get().cart?.version },
                },
              );
            } else if (change.action === "update") {
              await apiClient.post(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart/update`,
                {
                  apparelId: change.apparelId,
                  quantity: change.quantity,
                  version: get().cart?.version,
                },
                {
                  headers: { Authorization: `Bearer ${token}` },
                },
              );
            }
          } catch (error: any) {
            if (error.response?.status === 409) {
              await get().synchronizeCart();
              return;
            }
            console.error(`Failed to process change: ${change.action}`, error);
            return;
          }
        }

        set({ pendingChanges: [] });
      },
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
