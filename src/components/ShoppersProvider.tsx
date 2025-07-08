"use client";

import { useJwt } from "@/hooks/useJwt";
import { useBrandStore } from "@/store/brandStore";
import { useCartStore } from "@/store/cartStore";
import useNotificationStore from "@/store/notificationStore";
import useUserStore from "@/store/userStore";
import { useWishlistStore } from "@/store/wishlistStore";
import { useCallback, useEffect, useMemo, useRef } from "react";
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
  const { fetchBrands, brands } = useBrandStore();
  const { getWishlist, wishlist } = useWishlistStore();
  const { getNotifications, notifications } = useNotificationStore();
  const { initialize, isAuthenticated, user } = useUserStore();
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
  const hasFetchedRef = useRef({
    cart: false,
    wishlist: false,
    brands: false,
    notifications: false,
  }); // Track initial fetches

  // Memoize jwt to stabilize reference
  const stableJwt = useMemo(() => jwt, [jwt]);

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
        if (!cart && !hasFetchedRef.current.cart) {
          await getCart();
          hasFetchedRef.current.cart = true;
        }
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
    }, 1000),
    [isAuthenticated, getCart, synchronizeCart, processPendingChanges],
  );

  useEffect(() => {
    if (stableJwt && !user) {
      initialize();
    }
  }, [stableJwt, initialize, user]);

  useEffect(() => {
    const fetchData = async () => {
      console.log(
        `[${new Date().toISOString()}] Fetching data: isAuthenticated=${isAuthenticated}`,
      );
      const promises = [];

      // Only fetch if store is empty and not yet fetched
      if (!cart && !hasFetchedRef.current.cart) {
        promises.push(getCart());
        hasFetchedRef.current.cart = true;
      }
      if (!wishlist?.apparels?.length && !hasFetchedRef.current.wishlist) {
        promises.push(getWishlist());
        hasFetchedRef.current.wishlist = true;
      }
      if (!brands?.length && !hasFetchedRef.current.brands) {
        promises.push(fetchBrands());
        hasFetchedRef.current.brands = true;
      }
      if (!notifications?.length && !hasFetchedRef.current.notifications) {
        promises.push(getNotifications());
        hasFetchedRef.current.notifications = true;
      }

      if (promises.length > 0) {
        console.log(
          `[${new Date().toISOString()}] Running promises: ${promises.length}`,
        );
        await Promise.allSettled(promises);
      }

      // Trigger sync if authenticated and online
      if (isAuthenticated && navigator.onLine) {
        debouncedSyncCart();
      }
    };

    if (isAuthenticated) {
      fetchData();
    }
  }, [
    isAuthenticated,
    getCart,
    getWishlist,
    fetchBrands,
    getNotifications,
    debouncedSyncCart,
  ]); // Removed cart, wishlist, brands, notifications

  useEffect(() => {
    const handleOnline = () => {
      if (isAuthenticated && navigator.onLine) {
        debouncedSyncCart(); // Sync on network recovery
      }
    };

    window.addEventListener("online", handleOnline);
    return () => {
      window.removeEventListener("online", handleOnline);
    };
  }, [isAuthenticated, debouncedSyncCart]);

  return <>{children}</>;
}
