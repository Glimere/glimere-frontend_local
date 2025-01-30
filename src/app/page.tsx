import Home from "@/components/landing/Home";

export default function Page({ searchParams }: { searchParams: { fashion?: string } }) {
  const viewertype = searchParams.fashion || "shoppers";

  return <Home initialPage={viewertype} />;
}