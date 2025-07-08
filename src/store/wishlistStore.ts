import apiClient from "@/api/client/apiClient";
import { getJwt } from "@/lib/cookie";
import { ApiResponse, Apparel, Wishlist } from "@/types";
import axios from "axios";
import { toast } from "sonner";
import { create } from "zustand";
import { persist } from "zustand/middleware";

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
          toast.error("Please log in to add items to your wishlist.");
          return;
        }

        const previousWishlist = get().wishlist;
        const optimisticApparels = previousWishlist?.apparels
          ? [...previousWishlist.apparels, { _id: apparelId } as Apparel]
          : [{ _id: apparelId } as Apparel];

        // Optimistically update state
        set({
          wishlist: {
            ...previousWishlist,
            _id: previousWishlist?._id || "",
            userId: previousWishlist?.userId || "",
            apparels: optimisticApparels,
            createdAt: previousWishlist?.createdAt || new Date().toISOString(),
          },
        });

        try {
          const { data }: { data: ApiResponse } = await apiClient.post(
            `/api/wishlist/add`,
            { apparelId },
            {
              headers: { Authorization: `Bearer ${token}` },
            },
          );

          if (data.status === "success") {
            set({ wishlist: data.data });
            toast.success("Item added to wishlist successfully.");
          } else {
            // Revert optimistic update
            set({ wishlist: previousWishlist });
            toast.error(data.message || "Failed to add item to wishlist.");
          }
        } catch (error) {
          // Revert optimistic update
          set({ wishlist: previousWishlist });
          toast.error("Failed to add item to wishlist. Please try again.");
        }
      },

      removeFromWishlist: async (apparelId: string) => {
        const token = await getJwt();
        if (!token) {
          toast.error("Please log in to remove items from your wishlist.");
          return;
        }

        const previousWishlist = get().wishlist;
        const optimisticApparels =
          previousWishlist?.apparels?.filter(
            (item) => item._id !== apparelId,
          ) || [];

        // Optimistically update state
        set({
          wishlist: previousWishlist
            ? { ...previousWishlist, apparels: optimisticApparels }
            : null,
        });

        try {
          const { data }: { data: ApiResponse } = await apiClient.delete(
            `/api/wishlist/remove/${apparelId}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            },
          );

          if (data.status === "success") {
            set({ wishlist: data.data });
            toast.success("Item removed from wishlist successfully.");
          } else {
            // Revert optimistic update
            set({ wishlist: previousWishlist });
            toast.error(data.message || "Failed to remove item from wishlist.");
          }
        } catch (error) {
          // Revert optimistic update
          set({ wishlist: previousWishlist });
          toast.error("Failed to remove item from wishlist. Please try again.");
        }
      },

      getWishlist: async () => {
        const token = await getJwt();
        if (!token) {
          toast.error("Please log in to view your wishlist.");
          return;
        }

        try {
          const { data }: { data: ApiResponse } = await apiClient.get(
            `/api/wishlist/me`,
            {
              headers: { Authorization: `Bearer ${token}` },
            },
          );

          if (data.status === "success") {
            set({ wishlist: data.data });
          } else {
            toast.error(data.message || "Failed to fetch wishlist.");
          }
        } catch (error) {
          toast.error("Failed to fetch wishlist. Please try again.");
        }
      },

      synchronizeWishlist: async () => {
        const token = await getJwt();
        if (!token) {
          toast.error("Please log in to synchronize your wishlist.");
          return;
        }

        try {
          const { data }: { data: ApiResponse } = await apiClient.get(
            `/api/wishlist/me`,
            {
              headers: { Authorization: `Bearer ${token}` },
            },
          );

          if (data.status === "success") {
            const localWishlist = get().wishlist;
            if (!localWishlist) {
              set({ wishlist: data.data });
              return;
            }

            // Merge local and server apparels, removing duplicates
            const mergedApparels = Array.from(
              new Map(
                [
                  ...(localWishlist.apparels || []),
                  ...(data.data.apparels || []),
                ].map((item) => [item._id, item]),
              ).values(),
            );

            set({
              wishlist: {
                ...data.data,
                apparels: mergedApparels,
              },
            });
            toast.success("Wishlist synchronized successfully.");
          } else {
            toast.error(data.message || "Failed to synchronize wishlist.");
          }
        } catch (error) {
          toast.error("Failed to synchronize wishlist. Please try again.");
        }
      },
    }),
    {
      name: "wishlist-storage",
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
