"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { renderImageUrl } from "@/hooks/useRenderImageUrl";
import type { Apparel } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";
import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";

import SliderPageIndicator from "./slideIndicator";

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
          className="flex h-full flex-row justify-center pt-[110px] duration-100"
          animate={{
            scale:
              selectedCurrent && parentIndex !== selectedCurrent() ? 0.7 : 1,
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative flex h-full min-w-[25rem] max-w-[39rem] flex-col items-center">
            <div className="absolute left-[5%] z-[2] h-full sm:left-[1%]">
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
              className="relative z-[1] flex h-full w-full max-w-[24rem] flex-row items-center"
              setApi={setApi}
            >
              <CarouselContent className="-mt-1 h-[40rem] sm:h-[35rem]">
                {apparel.apparel_images.map((img, index: number) => (
                  <CarouselItem key={index} className="md:basis-1/1 pt-1">
                    <div className="h-full p-1">
                      <Card className="h-full border-none bg-transparent shadow-none">
                        <CardContent className="flex h-full items-center justify-center p-0">
                          <div className="h-full">
                            <Image
                              src={renderImageUrl(img.url)}
                              alt={img.name}
                              width={800}
                              height={800}
                              className="h-full object-cover"
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* <div className="absolute bottom-[5%] z-[10] flex w-full flex-row justify-center gap-[20px]">
                <div className="flex flex-row gap-[20px]">
                  <div
                    className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#ffffff91]"
                    onClick={() => api?.scrollPrev()}
                  >
                    <ChevronLeft className="w-[15px]"/>
                  </div>
                  <div
                    className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#ffffff91]"
                    onClick={() => api?.scrollNext()}
                  >
                    <ChevronRight className="w-[15px]"/>
                  </div>
                </div>
              </div> */}
            </Carousel>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default ProductViewCarousel;
