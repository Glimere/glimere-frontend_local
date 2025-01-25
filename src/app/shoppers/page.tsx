"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useJwt } from "@/hooks/useJwt";
import useUserStore from "@/store/userStore";
import useApparelStore from "@/store/apparelStore";
import { connectWebSocket, disconnectWebSocket } from "@/utils/websocket";
import SpinnerLoader from "@/components/loader/spinnerLoader";
import ProductCarousel from "@/components/carousel/ProductCarousel";
// const ProductCarousel = dynamic(() => import("@/components/carousel/ProductCarousel"));

export default function ShoppersPage() {
  const { startPolling, fetchData, data } = useApparelStore();
  const [isLoading, setIsLoading] = useState(true);
  const initialize = useUserStore((state) => state.initialize);



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


  useEffect(() => {
    initialize();
  }, [initialize]);

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
