import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';
import { getJwt } from '@/lib/cookie';
import type { CartItem, ApiResponse, CartData } from '@/types';
import apiClient from '@/api/client/apiClient';

interface CartState {
  cart: CartData | null; // The cart is null initially or when no data is available
  addItem: (item: CartItem) => Promise<void>;
  removeItem: (id: string) => Promise<void>;
  removeItems: (ids: string[]) => Promise<void>;
  updateQuantity: (id: string, quantity: number) => Promise<void>;
  getCart: () => Promise<void>;
  synchronizeCart: () => Promise<void>;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: null, // Default state is null
      
      addItem: async (item: CartItem) => {
  const token = await getJwt(); // Retrieve token dynamically
  if (!token) {
    console.warn('User not authenticated. Cannot add item.');
    return;
  }

  const currentCart: CartData = get().cart || { _id: '', user: '', createdAt: '', updatedAt: '', __v: 0, items: [], total_items: 0, total_price: 0 };

  // Check if the item already exists in the cart
  const existingItem = currentCart.items.find((cartItem) => cartItem.apparel._id === item.apparel._id);

  if (existingItem) {
    // Update quantity if item already exists
    existingItem.quantity += item.quantity;
  } else {
    // Add new item to the cart
    currentCart.items.push(item);
  }

  // Update cart totals
  currentCart.total_items = currentCart.items.reduce((total, item) => total + item.quantity, 0);
  currentCart.total_price = currentCart.items.reduce(
    (total, item) => total + item.quantity * item.apparel.apparel_price,
    0
  );

  // Update Zustand state with the updated cart
  set({ cart: { ...currentCart } });

  try {
    // Send only {apparelId, quantity} to the backend API
    await apiClient.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart/add`,
      {
        apparelId: item.apparel._id,
        quantity: item.quantity,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  } catch (error) {
    console.error('Failed to add item to API', error);
  }
},

      
      removeItem: async (id: string) => {
        const token = await getJwt();
        if (!token) {
          console.warn('User not authenticated. Cannot remove item.');
          return;
        }

        const currentCart = get().cart;
        if (!currentCart) {
          console.warn('Cart data is not available.');
          return;
        }

        currentCart.items = currentCart.items.filter((item) => item.apparel._id !== id);
        currentCart.total_items = currentCart.items.reduce((total, item) => total + item.quantity, 0);
        currentCart.total_price = currentCart.items.reduce((total, item) => total + item.quantity * item.apparel.apparel_price, 0);
        set({ cart: { ...currentCart } });

        try {
          await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cart/remove/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
        } catch (error) {
          console.error('Failed to remove item from API', error);
        }
      },

      removeItems: async (apparelIds: string[]) => {
        const token = await getJwt();
        if (!token) {
          console.warn('User not authenticated. Cannot remove items.');
          return;
        }

        const currentCart = get().cart;
        if (!currentCart) {
          console.warn('Cart data is not available.');
          return;
        }

        currentCart.items = currentCart.items.filter((item) => !apparelIds.includes(item.apparel._id));
        currentCart.total_items = currentCart.items.reduce((total, item) => total + item.quantity, 0);
        currentCart.total_price = currentCart.items.reduce((total, item) => total + item.quantity * item.apparel.apparel_price, 0);
        set({ cart: { ...currentCart } });

        try {
          await apiClient.post(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart/remove-multiple`,
            { apparelIds: apparelIds },
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
        } catch (error) {
          console.error('Failed to remove items from API', error);
        }
      },

      updateQuantity: async (apparelId: string, quantity: number) => {
        const token = await getJwt();
        if (!token) {
          console.warn('User not authenticated. Cannot update quantity.');
          return;
        }

        const currentCart = get().cart;
        if (!currentCart) {
          console.warn('Cart data is not available.');
          return;
        }

        const itemToUpdate = currentCart.items.find((item) => item.apparel._id === apparelId);
        if (itemToUpdate) {
          itemToUpdate.quantity = quantity;
        }
        currentCart.total_items = currentCart.items.reduce((total, item) => total + item.quantity, 0);
        currentCart.total_price = currentCart.items.reduce((total, item) => total + item.quantity * item.apparel.apparel_price, 0);
        set({ cart: { ...currentCart } });

        try {
          await apiClient.post(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart/update`,
            { apparelId, quantity },
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
        } catch (error) {
          console.error('Failed to update item quantity in API', error);
        }
      },

      getCart: async () => {
        const token = await getJwt();
        if (!token) {
          console.warn('User not authenticated. Cannot fetch cart.');
          return;
        }

        try {
          const response = await apiClient.get<ApiResponse>(`/api/cart`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          set({ cart: response.data.data });
        } catch (error) {
          console.error('Failed to fetch cart from API', error);
        }
      },

      synchronizeCart: async () => {
        const token = await getJwt();
        if (!token) {
          console.warn('User not authenticated. Cannot synchronize cart.');
          return;
        }
      
        const localCart = get().cart;
      
        try {
          // Fetch the latest cart data from the API
          const response = await apiClient.get<ApiResponse>(`/api/cart`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          const apiCart = response.data.data;
      
          if (!localCart) {
            // If no local cart exists, use the API cart
            set({ cart: apiCart });
            return;
          }
      
          // Reconcile differences between local cart and API cart
          const reconciledItems = [...localCart.items];
      
          for (const apiItem of apiCart.items) {
            const localItemIndex = reconciledItems.findIndex(
              (item) => item.apparel._id === apiItem.apparel._id
            );
      
            if (localItemIndex > -1) {
              // If the item exists in both, take the higher quantity
              reconciledItems[localItemIndex].quantity = Math.max(
                reconciledItems[localItemIndex].quantity,
                apiItem.quantity
              );
            } else {
              // If the item exists in API cart but not local cart, add it
              reconciledItems.push(apiItem);
            }
          }
      
          // Update totals
          const totalItems = reconciledItems.reduce((sum, item) => sum + item.quantity, 0);
          const totalPrice = reconciledItems.reduce(
            (sum, item) => sum + item.quantity * item.apparel.apparel_price,
            0
          );
      
          const reconciledCart: CartData = {
            ...localCart,
            items: reconciledItems,
            total_items: totalItems,
            total_price: totalPrice,
          };
      
          // Sync the reconciled cart with the backend
          await apiClient.post(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart/sync`,
            { cart: reconciledCart },
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
      
          // Update Zustand state with the reconciled cart
          set({ cart: reconciledCart });
        } catch (error) {
          console.error('Failed to synchronize cart with API', error);
        }
      },
    }),
    {
      name: 'cart-storage',
      storage: {
        getItem: (name) => {
          const item = localStorage.getItem(name);
          return item ? JSON.parse(item) : null;
        },
        setItem: (name, value) => localStorage.setItem(name, JSON.stringify(value)),
        removeItem: (name) => localStorage.removeItem(name),
      },
    }
  )
);
