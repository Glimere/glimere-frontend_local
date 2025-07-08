"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useWindowWidth } from "@/hooks/useWindowsWidth";
import useApparelStore from "@/store/apparelStore";
import type { Apparel } from "@/types";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "../ui/carousel copy";
import CarouselSkeletonLoader from "../skeletons/CarouselSkeletonLoader";
import NameSwitcher from "./NameSwitcher";
import ProductCarouselCard from "./ProductCarouselCard";

export default function ProductCarousel() {
  const { data, loading, fetchData } = useApparelStore((state) => ({
    data: state.data,
    loading: state.loading,
    error: state.error,
    fetchData: state.fetchData,
  }));

  const plugin = useRef(Autoplay({ delay: 9000, stopOnInteraction: true }));
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [count, setCount] = useState(0);

  const { windowWidth } = useWindowWidth();

  useEffect(() => {
    if (data === undefined) {
      fetchData(); // Initial fetch when component mounts
    }
  }, [fetchData]);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const getSelectedCurrent = (): number => {
    if (windowWidth >= 1024) {
      return current + 1; // Large screens
    } else if (windowWidth >= 768) {
      return current; // Medium screens
    } else if (windowWidth >= 640) {
      return current; // Small screens or default
    } else {
      return current - 1;
    }
  };

  return (
    <div
      className={`flex h-full w-full flex-row items-center overflow-hidden ${
        windowWidth <= 640 ? "scale-100" : "scale-[1.20]"
      }`}
    >
      {loading ? (
        <CarouselSkeletonLoader />
      ) : (
        <>
          <div className="absolute flex h-full w-full items-center justify-center">
            <div className="ml-[-71%] sm:ml-[-19%] z-10 rotate-90">
              <NameSwitcher
              apparels={data?.data}
              selectedCurrent={() => getSelectedCurrent()}
            /> 
            </div>
           
          </div>
          <Carousel
            plugins={[plugin.current]}
            className="group relative w-full max-w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            setApi={setApi}
          >
            <CarouselContent>
              {data?.data?.map((apparel: Apparel, index: number) => (
                <CarouselItem
                  key={index}
                  className={`duration-300 sm:basis-1/3 md:basis-1/3 lg:basis-1/5 ${
                    index === getSelectedCurrent() ? "" : ""
                  }`}
                >
                  <div className="p-1">
                    <Card className="border-none bg-transparent shadow-none">
                      <CardContent className="flex aspect-square items-center justify-center p-0">
                        <ProductCarouselCard
                          apparel={apparel}
                          selectedCurrent={() => getSelectedCurrent()}
                          parentIndex={index}
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute z-[6] sm:z-0 sm:left-[35%] left-[30%] opacity-0 duration-300 group-hover:opacity-100" />
            <CarouselNext className="absolute z-[6] sm:z-0 sm:right-[35%] right-[30%] opacity-0 duration-300 group-hover:opacity-100" />
          </Carousel>
        </>
      )}
    </div>
  );
}
