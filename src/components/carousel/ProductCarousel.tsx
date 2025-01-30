"use client";

import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  CarouselContent,
  Carousel,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "../ui/carousel copy";
import useApparelStore from "@/store/apparelStore";
import type { Apparel } from "@/types";
import ProductCarouselCard from "./ProductCarouselCard";
import CarouselSkeletonLoader from "./CarouselSkeletonLoader";

export default function ProductCarousel() {
  const { data, loading, fetchData } = useApparelStore((state) => ({
    data: state.data,
    loading: state.loading,
    error: state.error,
    fetchData: state.fetchData,
  }));

  const plugin = useRef(Autoplay({ delay: 9000, stopOnInteraction: true }));
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (data === undefined) {
      fetchData(); // Initial fetch when component mounts
    }
  }, [fetchData]);

  useEffect(() => {
    // Only update `windowWidth` on the client side
    const updateWindowWidth = () => {
      setWindowWidth(typeof window !== "undefined" ? window.innerWidth : 0);
    };

    updateWindowWidth(); // Set initial width
    if (typeof window !== "undefined") {
      window.addEventListener("resize", updateWindowWidth);

    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", updateWindowWidth);
      }
    };
  }, []);

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
      className={`h-full w-full flex flex-row items-center overflow-hidden ${windowWidth <= 640 ? "scale-100" : " scale-[1.20]"
        }`}
    >
      {loading ? (
        <CarouselSkeletonLoader />
      ) : (
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-full group"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          setApi={setApi}
        >
          <CarouselContent>
            {data?.data?.map((apparel: Apparel, index: number) => (
              <CarouselItem
                key={index}
                className={`sm:basis-1/3 md:basis-1/3 lg:basis-1/5 duration-300 ${index === getSelectedCurrent() ? "" : ""
                  }`}
              >
                <div className="p-1">
                  <Card className="bg-transparent shadow-none border-none">
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
          <CarouselPrevious className="absolute left-[36%] duration-300 opacity-0 group-hover:opacity-100" />
          <CarouselNext className="absolute right-[36%] duration-300 opacity-0 group-hover:opacity-100" />
        </Carousel>
      )}
    </div>
  );
}
