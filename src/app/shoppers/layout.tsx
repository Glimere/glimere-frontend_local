"use client";

import SboppersProvider from "@/components/ShoppersProvider";
import GradientBg from "@/components/gradient/gradientBg";
import ShoppersNav from "@/components/nav/ShoppersNav";
import ProtectedRoute from "@/utils/ProtectedRoutes";

export default function DemoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const restrictedPaths = ["/shoppers/checkout", "/account", "/notification"];

  return (
    <SboppersProvider>
      <div className="relative overflow-x-hidden bg-alabaster">
        <GradientBg />
        <ShoppersNav />
        <ProtectedRoute restrictedPaths={restrictedPaths} root="/shoppers">
          {children}
        </ProtectedRoute>
      </div>
    </SboppersProvider>
  );
}
