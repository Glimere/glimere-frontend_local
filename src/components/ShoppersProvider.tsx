// app/providers/StoreInitializer.tsx
"use client";

import { useEffect } from "react";
import { useJwt } from "@/hooks/useJwt";
import { useBrandStore } from "@/store/brandStore";
import { useCartStore } from "@/store/cartStore";
import useNotificationStore from "@/store/notificationStore";
import useUserStore from "@/store/userStore";
import { useWishlistStore } from "@/store/wishlistStore";

export default function ShoppersProvider({ children }: { children: React.ReactNode }) {
  const { fetchBrands } = useBrandStore();
  const { getWishlist } = useWishlistStore();
  const { getNotifications } = useNotificationStore();
  const { initialize, isAuthenticated } = useUserStore();
  const { getCart, synchronizeCart } = useCartStore();
  const jwt = useJwt();

  useEffect(() => {
    if (jwt) {
      initialize();
    }
  }, [jwt]);

  useEffect(() => {
    const fetchData = async () => {
      await Promise.allSettled([
        getWishlist(),
        fetchBrands(),
        getNotifications(),
        getCart(),
      ]);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      synchronizeCart();
    }
  }, [isAuthenticated]);

  return <>{children}</>;
}
