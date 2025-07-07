import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Brand } from "@/types";
import React from "react";

import BrandCard from "../cards/BrandCard";

interface BrandSectionProps {
  headerTitle: string;
  itemCount: number;
  brands: Brand[];
}

const BrandSection: React.FC<BrandSectionProps> = ({
  headerTitle,
  itemCount,
  brands,
}) => {
  return (
    <div className="flex flex-col gap-[20px] bg-transparent-white-100 p-3 sm:px-[6.25rem]">
      <h2 className="text-center text-xl font-bold sm:text-2xl">
        {headerTitle}
      </h2>

      <Carousel className="w-full max-w-full">
        <CarouselContent className="-ml-1">
          {brands.map((brand, id) => {
            if (id <= itemCount - 1) {
              return (
                <CarouselItem
                  key={brand._id}
                  className="basis-1/3 md:basis-1/6 pl-3 lg:basis-1/7"
                >
                  <BrandCard brand={brand} />
                </CarouselItem>
              );
            }
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default BrandSection;
