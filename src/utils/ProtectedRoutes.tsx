"use client";

import useUserStore from "@/store/userStore";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface ProtectedRouteProps {
  children: React.ReactNode;
  restrictedPaths: string[];
  root: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  restrictedPaths,
  root,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated, initialize } = useUserStore();
  const [isInitialized, setIsInitialized] = useState(false);
  const hasInitialized = useRef(false); // Track if initialize has been called

  useEffect(() => {
    const init = async () => {
      // Prevent duplicate initialization in Strict Mode
      if (hasInitialized.current) return;
      hasInitialized.current = true;

      try {
        await initialize();
        setIsInitialized(true);
      } catch (error) {
        console.error("Initialization failed:", error);
        setIsInitialized(true); // Set initialized even on error to avoid infinite loading
      }
    };
    init();
  }, [initialize]);

  useEffect(() => {
    if (
      isInitialized &&
      restrictedPaths.includes(pathname) &&
      !isAuthenticated
    ) {
      router.replace(root); // Redirect if unauthenticated
    }
  }, [isInitialized, isAuthenticated, restrictedPaths, pathname, router]);

  if (!isInitialized) {
    return null; // Show nothing until initialization is complete
  }

  return <>{children}</>;
};

export default ProtectedRoute;
