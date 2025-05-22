import ProductCarousel from "@/components/carousel/ProductCarousel";
import CurrentOrder from "@/components/creators/CurrentOrder";
import ProductNumbersCard from "@/components/creators/ProductNumbersCard";
import RecentSalesCard from "@/components/creators/RecentSalesCard";
import SalesChartCard from "@/components/creators/SalesChartCard";
import ApparelListSection from "@/components/shoppers/sections/ApparelListSection";
import ApparelSection from "@/components/shoppers/sections/ApparelSection";

export default function Dashboard() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:px-[5.75rem] md:py-8">
      <div className="flex flex-col sm:flex-row gap-[37px]">
        <SalesChartCard />
        <ProductNumbersCard />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 md:gap-8">
        <RecentSalesCard />
        <CurrentOrder />
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
