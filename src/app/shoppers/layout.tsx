"use client";

import GradientBg from "@/components/gradient/gradientBg";
import ShoppersNav from "@/components/nav/ShoppersNav";
import ShoppersProvider from "@/components/ShoppersProvider";
import ProtectedRoute from "@/utils/ProtectedRoutes";





export default function DemoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const restrictedPaths = ["/shoppers/checkout", "/account", "/notification"];

  return (
    <ShoppersProvider>
      <div className="flex w-full justify-center bg-alabaster overflow-x-hidden">
        <div className="relative max-w-[1440px] bg-alabaster w-full">
          <GradientBg />
          <ShoppersNav />
          <ProtectedRoute restrictedPaths={restrictedPaths} root="/shoppers">
            {children}
          </ProtectedRoute>
        </div>
      </div>
    </ShoppersProvider>
  );
}