"use client";

import ProductCarousel from "@/components/carousel/ProductCarousel";
import CurrentOrder from "@/components/creators/CurrentOrder";
import ProductNumbersCard from "@/components/creators/ProductNumbersCard";
import RecentSalesCard from "@/components/creators/RecentSalesCard";
import SalesChartCard from "@/components/creators/SalesChartCard";
import ApparelListSection from "@/components/shoppers/sections/ApparelListSection";
import ApparelSection from "@/components/shoppers/sections/ApparelSection";
import useUserStore from "@/store/userStore";


export default function Dashboard() {
  const { isAuthenticated } = useUserStore();

  console.log("isAuthenticated", isAuthenticated);
  return (
    <main className="flex flex-1 flex-col gap-[50px] sm:gap-[70px]">
      <div className="flex flex-col">
        <div className="flex flex-col gap-[37px] sm:flex-row md:px-[5.75rem] md:py-8">
          <SalesChartCard />
          <ProductNumbersCard />
        </div>

        <div className="flex flex-col gap-4 sm:flex-row md:gap-8 md:px-[5.75rem] md:py-8">
          <RecentSalesCard />
          <CurrentOrder />
        </div>
      </div>

      <ProductCarousel />
      <ApparelSection
        headerTitle="Trending Styles"
        apparels={[]}
        loading={false}
      />
      <ApparelListSection
        headerTitle="Top Selling"
        apparels={[]}
        loading={false}
      />
    </main>
  );
}