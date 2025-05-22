"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";

import { Button } from "../ui/button";

export default function ProductNumbersCard() {
  const router = useRouter();
  return (
    <Card
      x-chunk="dashboard-01-chunk-1"
      className="flex h-[342px] flex-1 flex-col rounded-[22px] bg-transparent-white-100"
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Monthly Sales</CardTitle>
      </CardHeader>
      <div className="relative flex flex-grow flex-col items-center justify-center p-6">
        <div className="mt-9 flex flex-grow flex-row gap-[40px]">
          <div className="flex flex-col">
            <p className="text-[12px] font-bold text-dark">Total Products</p>
            <span className="text-[48px] font-bold text-primary-100">1000</span>
          </div>
          <div className="flex flex-col">
            <p className="text-[12px] font-bold text-dark">Numbers Sold</p>
            <span className="text-[48px] font-bold text-primary-100">200</span>
          </div>
        </div>
        <Button
          size="sm"
          className="self-end bg-primary-100 text-secondary-100 hover:text-white"
          onClick={() => router.push("/creators/metrics")}
        >
          View More
        </Button>
      </div>
    </Card>
  );
}
