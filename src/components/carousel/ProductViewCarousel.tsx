"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import type { Apparel } from "@/types";
import Image from "next/image";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import SliderPageIndicator from "./slideIndicator";
import { MoveRight } from "lucide-react";
import { MoveLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface ProductViewCarouselProps {
  apparel: Apparel;
  selectedCurrent?: () => number;
  parentIndex?: number;
}

const ProductViewCarousel: NextPage<ProductViewCarouselProps> = ({
  apparel,
  selectedCurrent,
  parentIndex,
}) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

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

  return (
    <>
      {" "}
      <AnimatePresence>
        <motion.div
          className="duration-100 flex flex-row justify-center h-full pt-[110px]"
          animate={{
            scale:
              selectedCurrent && parentIndex !== selectedCurrent() ? 0.7 : 1,
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative max-w-[39rem] min-w-[25rem] h-full flex flex-col items-center">
            <div className="absolute z-[2] left-[10%] h-full">
              <SliderPageIndicator
                totalCount={count}
                current={current}
                direction="vertical"
              />
            </div>
            <Carousel
              opts={{
                align: "start",
              }}
              orientation="vertical"
              className="w-full h-full max-w-[24rem] z-[1]"
              setApi={setApi}
            >
              <CarouselContent className="-mt-1 h-[32rem]">
                {apparel.apparel_images.map((img, index: number) => (
                  <CarouselItem key={index} className="pt-1 md:basis-1/1">
                    <div className="p-1 h-full">
                      <Card className="bg-transparent shadow-none border-none h-full">
                        <CardContent className="flex items-center justify-center p-0 h-full">
                          <div className="h-full">
                            <Image
                              src={img.url}
                              alt={img.name}
                              width={800}
                              height={800}
                              className="object-cover h-full"
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute flex flex-col gap-[20px] bottom-[20%] right-[10%] z-[5]">
                <CarouselPrevious className="-translate-y-1/2 " />
                <CarouselNext className="-translate-y-1/2" />
              </div>
            </Carousel>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default ProductViewCarousel;
