"use client";

import GradientBg from "@/components/gradient/gradientBg";
import ShoppersNav from "@/components/nav/ShoppersNav";
import { useJwt } from "@/hooks/useJwt";
import { useBrandStore } from "@/store/brandStore";
import { useCartStore } from "@/store/cartStore";
import useNotificationStore from "@/store/notificationStore";
import useUserStore from "@/store/userStore";
import { useWishlistStore } from "@/store/wishlistStore";
import ProtectedRoute from "@/utils/ProtectedRoutes";
import { useEffect } from "react";

export default function DemoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { fetchBrands } = useBrandStore();
  const { getWishlist } = useWishlistStore();
  const { getNotifications } = useNotificationStore();
  const { initialize, isAuthenticated } = useUserStore();
  const { getCart, synchronizeCart } = useCartStore();
  const jwt = useJwt();

  // Fetch user data only when jwt is available
  useEffect(() => {
    if (jwt) {
      initialize();
    }
  }, [jwt]);

  // Fetch general store data (brands, wishlist, notifications, cart)
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

  // Synchronize cart only after user is authenticated
  useEffect(() => {
    if (isAuthenticated) {
      synchronizeCart();
    }
  }, [isAuthenticated]);

  const restrictedPaths = ["/shoppers/checkout", "/account", "/notification"];

  return (
    <div className="relative overflow-x-hidden bg-alabaster">
      <GradientBg />
      <ShoppersNav />
      <ProtectedRoute restrictedPaths={restrictedPaths}>
        {children}
      </ProtectedRoute>
    </div>
  );
}
