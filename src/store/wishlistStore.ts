import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';
import { getJwt } from '@/lib/cookie';
import { Apparel } from '@/types';
import { ApiResponse } from '@/types';

export interface Wishlist {
  _id: string;
  userId: string;
  apparels: Apparel[];
  createdAt: string;
}

interface WishlistStore {
  wishlist: Wishlist | null;
  addToWishlist: (apparelId: string) => Promise<void>;
  removeFromWishlist: (apparelId: string) => Promise<void>;
  getWishlist: () => Promise<void>;
  synchronizeWishlist: () => Promise<void>;
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      wishlist: null,

      addToWishlist: async (apparelId: string) => {
        const token = await getJwt();
        if (!token) {
          console.warn('User not authenticated. Cannot add to wishlist.');
          return;
        }

        try {
          const { data }: { data: ApiResponse } = await axios.post(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/wishlist/add`,
            { apparelId },
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );

          if (data.status === 'success' && data?.data?.apparel) {
            set((state) => {
              const updatedApparels = state.wishlist?.apparels || [];
              return {
                wishlist: {
                  ...state.wishlist,
                  _id: state.wishlist?._id || '',
                  userId: state.wishlist?.userId || '',
                  apparels: [...updatedApparels, data.data.apparel],
                  createdAt: state.wishlist?.createdAt || new Date().toISOString(),
                },
              };
            });
          } else {
            console.error('Failed to add item to wishlist:', data.message);
          }
        } catch (error) {
          console.error('Failed to add item to wishlist:', error);
        }
      },

      removeFromWishlist: async (apparelId: string) => {
        const token = await getJwt();
        if (!token) {
          console.warn('User not authenticated. Cannot remove from wishlist.');
          return;
        }

        try {
          const { data }: { data: ApiResponse } = await axios.delete(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/wishlist/remove/${apparelId}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );

          if (data.status === 'success') {
            set((state) => ({
              wishlist: state.wishlist
                ? {
                    ...state.wishlist,
                    apparels: state.wishlist.apparels.filter(
                      (item) => item._id !== apparelId
                    ),
                  }
                : null,
            }));
          } else {
            console.error('Failed to remove item from wishlist:', data.message);
          }
        } catch (error) {
          console.error('Failed to remove item from wishlist:', error);
        }
      },

      getWishlist: async () => {
        const token = await getJwt();
        if (!token) {
          console.warn('User not authenticated. Cannot fetch wishlist.');
          return;
        }

        try {
          const { data }: { data: ApiResponse } = await axios.get(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/wishlist/me`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );

          if (data.status === 'success') {
            set({ wishlist: data.data });
          } else {
            console.error('Failed to fetch wishlist:', data.message);
          }
        } catch (error) {
          console.error('Failed to fetch wishlist:', error);
        }
      },

      synchronizeWishlist: async () => {
        const token = await getJwt();
        if (!token) {
          console.warn('User not authenticated. Cannot synchronize wishlist.');
          return;
        }

        const localWishlist = get().wishlist;

        try {
          // Fetch the latest wishlist data from the API
          const response = await axios.get<ApiResponse>(`${process.env.NEXT_PUBLIC_BASE_URL}/api/wishlist/me`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          const apiWishlist = response.data.data;

          if (!localWishlist) {
            // If no local wishlist exists, use the API wishlist
            set({ wishlist: apiWishlist });
            return;
          }

          // Reconcile differences between local wishlist and API wishlist
          const reconciledApparels = [...localWishlist.apparels];

          for (const apiItem of apiWishlist.apparels) {
            const localItemIndex = reconciledApparels.findIndex(
              (item) => item._id === apiItem._id
            );

            if (localItemIndex === -1) {
              // If the item exists in API wishlist but not local wishlist, add it
              reconciledApparels.push(apiItem);
            }
          }

          // Update the wishlist with reconciled apparels
          set({ wishlist: { ...localWishlist, apparels: reconciledApparels } });

        } catch (error) {
          console.error('Failed to synchronize wishlist with API', error);
        }
      },
    }),
    {
      name: 'wishlist-storage',
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
