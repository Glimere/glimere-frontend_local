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
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import SliderPageIndicator from "./slideIndicator";

interface ProductCarouselCardProps {
  apparel: Apparel;
  selectedCurrent: () => number;
  parentIndex: number;
}

const ProductCarouselCard: NextPage<ProductCarouselCardProps> = ({
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
      <motion.div
        className="duration-100"
        animate={{
          scale: parentIndex !== selectedCurrent() ? 0.7 : 1,
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative flex h-[70vh] flex-row items-center justify-between sm:h-[30rem]">
          {parentIndex !== selectedCurrent() ? (
            <div className="absolute z-[4] h-full w-full"></div>
          ) : null}
          <AnimatePresence>
            {parentIndex === selectedCurrent() ? (
              <>
                <div className="absolute right-0 z-[3] h-full">
                  <SliderPageIndicator
                    totalCount={count}
                    current={current}
                    direction="vertical"
                  />
                </div>
              </>
            ) : null}
          </AnimatePresence>
          <Link href={`/shoppers/${apparel._id}`}>
            <Carousel
              opts={{
                align: "start",
              }}
              orientation={undefined}
              className="z-[1] w-full max-w-full"
              setApi={setApi}
            >
              <CarouselContent className="-mt-1 h-[70vh] sm:h-[30rem]">
                {apparel.apparel_images.map((img, index) => (
                  <CarouselItem key={index} className="md:basis-1/1 pt-1">
                    <div className="p-1">
                      <Card className="border-none bg-transparent shadow-none">
                        <CardContent className="flex items-center justify-center p-0">
                          <div className="h-[65vh] sm:h-[28rem]">
                            <Image
                              src={renderImageUrl(img.url)}
                              alt={img.name}
                              width={800}
                              height={800}
                              className="h-full object-cover"
                              priority
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default ProductCarouselCard;
