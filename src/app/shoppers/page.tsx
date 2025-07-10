"use client";

import ProductCarousel from "@/components/carousel/ProductCarousel";
import Footer from "@/components/Footer";
import ApparelListSection from "@/components/shoppers/sections/ApparelListSection";
import ApparelSection from "@/components/shoppers/sections/ApparelSection";
import BrandSection from "@/components/shoppers/sections/BrandSection";
import useFetch from "@/hooks/useFetch";
import { useBrandStore } from "@/store/brandStore";
import { ApparelsData } from "@/types";

export default function ShoppersPage() {
  const {
    data: apparelTrending,
    error: apparelTrendingError,
    loading: apparelTrendingLoading,
  } = useFetch<ApparelsData>(`/apparels/trending`);
  const {
    data: apparelNew,
    error: apparelNewError,
    loading: apparelNewLoading,
  } = useFetch<ApparelsData>(`/apparels/new`);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    data: apparelSelling,
    loading: apparelSellingLoading,
    error: apparelSellingError,
  } = useFetch<ApparelsData>(`/apparels/top-selling`);
  const { brands } = useBrandStore();

  const isTrending404 = apparelTrendingError?.status === 404;
  const isNew404 = apparelNewError?.status === 404;
  const isSelling404 = apparelSellingError?.status === 404;

  return (
    <div className="relative z-[3]">
      <div className="flex flex-col gap-[40px] pt-[110px]">
        <ProductCarousel />
        {brands.length == 0 ? (
          <></>
        ) : (
          <BrandSection
            headerTitle="Official Brands"
            itemCount={8}
            brands={brands}
          />
        )}

        {/* Render Trending Section only if it's not 404 */}
        {!isTrending404 && (
          <ApparelSection
            headerTitle="Trending Styles"
            apparels={apparelTrending?.data}
            loading={apparelTrendingLoading}
          />
        )}

        {/* Render New Section only if it's not 404 */}
        {!isNew404 && (
          <ApparelSection
            headerTitle="New Ins"
            apparels={apparelNew?.data}
            loading={apparelNewLoading}
          />
        )}

        {/* Render Top Selling Section only if it's not 404 */}
        {!isSelling404 && (
          <ApparelListSection
            headerTitle="Top Selling"
            apparels={apparelSelling?.data}
            loading={apparelSellingLoading}
          />
        )}
        <Footer />
      </div>
    </div>
  );
}
