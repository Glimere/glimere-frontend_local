"use client";

import GradientBg from "@/components/gradient/gradientBg";
import ShoppersNav from "@/components/nav/ShoppersNav";
import { useJwt } from "@/hooks/useJwt";
import useUserStore from "@/store/userStore";
import { useEffect } from "react";

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

  return (
    <div className="relative overflow-hidden bg-alabaster">
      <GradientBg />
      <ShoppersNav />
      {/* <Navbar/> */}
      {children}
    </div>
  );
}
