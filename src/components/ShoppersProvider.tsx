"use client";

import { useJwt } from "@/hooks/useJwt";
import { useBrandStore } from "@/store/brandStore";
import { useCartStore } from "@/store/cartStore";
import useNotificationStore from "@/store/notificationStore";
import useUserStore from "@/store/userStore";
import { useWishlistStore } from "@/store/wishlistStore";
import { useCallback, useEffect, useRef } from "react";
import { toast } from "sonner";

// Utility to debounce a function
const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export default function ShoppersProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { fetchBrands } = useBrandStore();
  const { getWishlist } = useWishlistStore();
  const { getNotifications } = useNotificationStore();
  const { initialize, isAuthenticated } = useUserStore();
  const {
    getCart,
    synchronizeCart,
    processPendingChanges,
    cart,
    pendingChanges,
  } = useCartStore();
  const jwt = useJwt();
  const isProcessingRef = useRef(false);
  const lastSyncedRef = useRef<number | null>(null); // Timestamp of last sync

  // Debounced sync function
  const debouncedSyncCart = useCallback(
    debounce(async () => {
      if (isProcessingRef.current || !isAuthenticated || !navigator.onLine) {
        if (!navigator.onLine && pendingChanges.length > 0) {
          toast.info(
            "You're offline. Cart changes will sync when you're back online.",
            {
              id: `offline-${Date.now()}`,
              description: "Your cart changes have been saved locally.",
            },
          );
        }
        return;
      }

      // Check sync conditions inside the function
      const hasRecentSync =
        lastSyncedRef.current &&
        Date.now() - lastSyncedRef.current < 5 * 60 * 1000; // 5 minutes
      const hasPendingChanges = pendingChanges.length > 0;
      const cartIsOutdated =
        !cart ||
        new Date(cart.updatedAt) < new Date(Date.now() - 10 * 60 * 1000); // Cart older than 10 minutes

      if (hasRecentSync && !hasPendingChanges && !cartIsOutdated) {
        console.log(
          `[${new Date().toISOString()}] Skipping sync: recent=${hasRecentSync}, pending=${hasPendingChanges}, outdated=${cartIsOutdated}`,
        );
        return;
      }

      isProcessingRef.current = true;
      try {
        await getCart();
        await synchronizeCart();
        await processPendingChanges();
        lastSyncedRef.current = Date.now();
        if (hasPendingChanges) {
          toast.success("Cart Synced", {
            id: `sync-success-${Date.now()}`,
            description: "Your cart has been successfully synchronized.",
          });
        }
      } catch (error) {
        console.error("Failed to sync cart:", error);
        toast.error("Failed to sync cart", {
          id: `sync-error-${Date.now()}`,
          description: "Please try again later.",
        });
      } finally {
        isProcessingRef.current = false;
      }
    }, 1000), // 1-second debounce
    [isAuthenticated, getCart, synchronizeCart, processPendingChanges], // Removed cart, pendingChanges
  );

  useEffect(() => {
    if (jwt) {
      initialize();
    }
  }, [jwt, initialize]);

  useEffect(() => {
    const fetchData = async () => {
      await Promise.allSettled([
        getCart(), // Fetch cart first to initialize version
        getWishlist(),
        fetchBrands(),
        getNotifications(),
      ]);

      // Trigger sync if authenticated and online
      if (isAuthenticated && navigator.onLine) {
        debouncedSyncCart();
      }
    };
    fetchData();
  }, [
    getCart,
    getWishlist,
    fetchBrands,
    getNotifications,
    isAuthenticated,
    debouncedSyncCart,
  ]);

  useEffect(() => {
    const handleOnline = () => {
      if (isAuthenticated && navigator.onLine) {
        debouncedSyncCart(); // Sync on network recovery if authenticated
      }
    };

    window.addEventListener("online", handleOnline);
    return () => {
      window.removeEventListener("online", handleOnline);
    };
  }, [isAuthenticated, debouncedSyncCart]);

  return <>{children}</>;
}
