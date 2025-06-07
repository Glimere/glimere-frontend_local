"use client";

import { useEffect } from "react";
import { useJwt } from "@/hooks/useJwt";
import useUserStore from "@/store/userStore";

export default function CreatorsProvider({ children }: { children: React.ReactNode }) {
  const { initialize} = useUserStore();
  const jwt = useJwt();

  useEffect(() => {
    if (jwt) {
      initialize();
    }
  }, [jwt]);

  return <>{children}</>;
}
