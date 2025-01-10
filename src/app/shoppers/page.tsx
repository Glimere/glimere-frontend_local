"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useJwt } from "@/hooks/useJwt";
import useUserStore from "@/store/userStore";
import useApparelStore from "@/store/apparelStore";
import { connectWebSocket, disconnectWebSocket } from "@/utils/websocket";
import SpinnerLoader from "@/components/loader/spinnerLoader";

const ProductCarousel = dynamic(() => import("@/components/carousel/ProductCarousel"));

export default function ShoppersPage() {
  const jwt = useJwt();
  const { startPolling, fetchData, data } = useApparelStore();
  const [isLoading, setIsLoading] = useState(true);



  // WebSocket connection
  useEffect(() => {
    connectWebSocket();
    return () => {
      disconnectWebSocket();
    };
  }, []);

  // Fallback polling every hour
  useEffect(() => {
    startPolling(3600000); // Poll every 1 hour
  }, [startPolling]);

  // Initial fetch for apparel data
  useEffect(() => {
    const loadData = async () => {
      try {
        await fetchData(); // Fetch data to populate the initial state
      } finally {
        setIsLoading(false); // Set loading to false once data is fetched
      }
    };
    loadData();
  }, [fetchData]);

  if (isLoading) {
    return <div className="relative h-screen z-[3]"><SpinnerLoader/></div>; // Display loading state
  }

  return (
    <div className="relative h-screen z-[3]">
      <div className="pt-[80px]">
        <ProductCarousel />
      </div>
    </div>
  );
}
