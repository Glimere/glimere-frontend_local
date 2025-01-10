"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import useUserStore from "@/store/userStore";
import { getJwt } from "@/lib/cookie";

function withAuth<P extends object>(WrappedComponent: React.ComponentType<P>) {
  const AuthenticatedComponent: React.FC<P> = (props) => {
    const router = useRouter();
    const { isAuthenticated, fetchUser } = useUserStore();

    useEffect(() => {
      const token = getJwt();

      // Redirect to login if no token exists
      if (!token) {
        router.replace("/login");
        return;
      }

      // Fetch user data if not authenticated
      if (!isAuthenticated) {
        fetchUser();
      }
    }, [isAuthenticated, fetchUser, router]);

    // Show nothing until authenticated
    if (!isAuthenticated) {
      return null;
    }

    // Render the wrapped component with props
    return React.createElement(WrappedComponent, props);
  };

  // Set a display name for debugging purposes
  AuthenticatedComponent.displayName = `WithAuth(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;

  return AuthenticatedComponent;
}

export default withAuth;
