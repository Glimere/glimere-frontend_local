import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Apparel } from "@/types";
import { ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";

import ApparelCard from "../cards/ApparelCard";
import ApparelLoading from "./ApparelLoading";

interface ApparelSectionProps {
  headerTitle: string;
  apparels: Apparel[] | undefined;
  loading: boolean;
}

const ApparelSection: React.FC<ApparelSectionProps> = ({
  headerTitle,
  apparels,
  loading,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  return (
    <div className="px-[1.4rem] sm:px-[6.25rem]">
      <div className="flex flex-col gap-[20px]">
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-centerself-start text-xl font-bold sm:text-2xl">
            {headerTitle}
          </h2>
          <div className="flex flex-row items-center gap-[10px]">
            <span className="font-bold">See More</span>
            <div className="flex h-[25px] w-[25px] items-center justify-center rounded-full bg-primary-100">
              <ArrowRight className="w-[17px] text-light" />
            </div>
          </div>
        </div>

        <div className="w-full">
          {isLoading ? (
            <ApparelLoading />
          ) : (
            <Carousel className="w-full max-w-full">
              <CarouselContent className="-ml-1">
                {apparels?.map((apparel) => (
                  <CarouselItem
                    key={apparel._id}
                    className="basis-1/3 pl-4 md:basis-1/5 lg:basis-1/6"
                  >
                    <ApparelCard apparel={apparel} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApparelSection;
