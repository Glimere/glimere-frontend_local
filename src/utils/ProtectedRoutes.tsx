"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import useUserStore from "@/store/userStore";

interface ProtectedRouteProps {
  children: React.ReactNode;
  restrictedPaths: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, restrictedPaths }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated, initialize } = useUserStore();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const init = async () => {
      await initialize();
      setIsInitialized(true);
    };
    init();
  }, [initialize]);

  useEffect(() => {
    if (isInitialized && restrictedPaths.includes(pathname) && !isAuthenticated) {
      router.replace("/shoppers"); // Redirect if unauthenticated
    }
  }, [isInitialized, isAuthenticated, restrictedPaths, pathname, router]);

  if (!isInitialized) {
    return null; // Show nothing until initialization is complete
  }

  return <>{children}</>;
};

export default ProtectedRoute;
