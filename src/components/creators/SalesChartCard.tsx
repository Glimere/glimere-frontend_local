"use client";

import AreaChart from "@/components/areaChart";
import Currency from "@/components/currancy";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";

import { Button } from "../ui/button";

export default function SalesChartCard() {
  const router = useRouter();
  return (
    <Card
      x-chunk="dashboard-01-chunk-0"
      className="flex h-[342px] flex-1 flex-col rounded-[22px] bg-primary-100"
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-light">
          Monthly Sales
        </CardTitle>
      </CardHeader>
      <div className="flex flex-grow flex-col items-start justify-between p-6 pt-0">
        <div className="text-2xl font-semibold text-light">
          <Currency value={200000} />
        </div>
        <div className="w-full">
          <AreaChart />
        </div>
        <Button
          size="sm"
          variant="secondary"
          className="self-end bg-secondary-100 text-dark"
          onClick={() => router.push("/creators/metrics")}
        >
          View More
        </Button>
      </div>
    </Card>
  );
}
