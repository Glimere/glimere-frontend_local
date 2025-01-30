import dynamic from "next/dynamic";
import SpinnerLoader from "@/components/loader/spinnerLoader";
import GradientBg from "@/components/gradient/gradientBg";

const Home = dynamic(() => import("@/components/landing/Home"), {
  ssr: false, // Render only on client-side
  loading: () => <div className="relative h-screen w-full overflow-hidden">
    <GradientBg />
    <SpinnerLoader />
  </div>,
});

export default function Page({ searchParams }: { searchParams: { fashion?: string } }) {
  const viewertype = searchParams.fashion || "shoppers";

  return <Home initialPage={viewertype} />;
}