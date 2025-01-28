"use client";

import { useEffect } from "react";
import useUserStore from "@/store/userStore";
import { useBrandStore } from "@/store/brandStore";
import { useWishlistStore } from "@/store/wishlistStore";
import ProductCarousel from "@/components/carousel/ProductCarousel";
import BrandSection from "@/components/shoppers/sections/BrandSection";
import ApparelSection from "@/components/shoppers/sections/ApparelSection";
import useFetch from "@/hooks/useFetch";
import { ApparelsData } from "@/types";
import ApparelListSection from "@/components/shoppers/sections/ApparelListSection";
import useNotificationStore from "@/store/notificationStore";
import Footer from "@/components/Footer";

export default function ShoppersPage() {
  const { data: apparelTrending, error: apparelTrendingError } = useFetch<ApparelsData>(
    `/apparels/trending`
  );
  const { data: apparelNew, error: apparelNewError } = useFetch<ApparelsData>(
    `/apparels/new`
  );

  const { data: apparelSelling, loading: apparelSellingLoading, error: apparelSellingError } = useFetch<ApparelsData>(
    `/apparels/top-selling`
  );
  const { brands, fetchBrands } = useBrandStore();
  const { getWishlist } = useWishlistStore();
  const { getNotifications } = useNotificationStore();
  const initialize = useUserStore((state) => state.initialize);

  useEffect(() => {
    getWishlist();
    fetchBrands();
    initialize();
    getNotifications();
  }, [fetchBrands, getWishlist, initialize, getNotifications]);

  const isTrending404 = apparelTrendingError?.status === 404;
  const isNew404 = apparelNewError?.status === 404;
  const isSelling404 = apparelSellingError?.status === 404;

  return (
    <div className="relative h-screen z-[3]">
      <div className="pt-[80px] flex flex-col gap-[40px]">
        <ProductCarousel />
        <BrandSection headerTitle="Official Brands" itemCount={8} brands={brands} />

        {/* Render Trending Section only if it's not 404 */}
        {!isTrending404 && (
          <ApparelSection headerTitle="Trending Styles" apparels={apparelTrending?.data} />
        )}

        {/* Render New Section only if it's not 404 */}
        {!isNew404 && (
          <ApparelSection headerTitle="New Ins" apparels={apparelNew?.data} />
        )}

        {/* Render Top Selling Section only if it's not 404 */}
        {!isSelling404 && (
          <ApparelListSection headerTitle="Top Selling" apparels={apparelSelling?.data} />
        )}
         <Footer />
      </div>
    </div>
  );
}
