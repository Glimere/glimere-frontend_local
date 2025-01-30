"use client";

import GradientBg from "@/components/gradient/gradientBg";
import ShoppersNav from "@/components/nav/ShoppersNav";
import { useJwt } from "@/hooks/useJwt";
import useUserStore from "@/store/userStore";
import { useEffect } from "react";
import ProtectedRoute from "@/utils/ProtectedRoutes";

export default function DemoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jwt = useJwt();
  const { initialize } = useUserStore();
  // Initialize user store
  useEffect(() => {
    if (jwt) {
      initialize(); // Fetch user data on app load
    }
  }, [initialize, jwt]);

  const restrictedPaths = ["/shoppers/checkout", "/account", "/notification"];

  return (
    <div className="relative bg-alabaster overflow-x-hidden">
      <GradientBg />
      <ShoppersNav />
      <ProtectedRoute restrictedPaths={restrictedPaths}>
        {children}
      </ProtectedRoute>
     
    </div>
  );
}
