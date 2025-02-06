"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import type { Apparel } from "@/types";
import Image from "next/image";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import SliderPageIndicator from "./slideIndicator";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { renderImageUrl } from "@/hooks/useRenderImageUrl";

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
        <div className="relative h-[70vh] sm:h-[30rem] flex flex-row items-center justify-between">
          {parentIndex !== selectedCurrent() ? (
            <div className="absolute h-full w-full z-[4]"></div>
          ) : null}
          <AnimatePresence>
            {parentIndex === selectedCurrent() ? (
              <>
                <div
                  className={`absolute right-0 rotate-90 min-w-[400px] max-w-[500px] z-[3] mr-[30%] sm:mr-[18%] overflow-hidden ${
                    selectedCurrent === undefined ? "hidden" : ""
                  }`}
                >
                  <motion.div
                    className=""
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    transition={{
                      duration: 0.5,
                      exit: { duration: 0.2 },
                    }}
                  >
                    <h1 className="text-[1.8rem] text-center mix-blend-difference">
                      {apparel.apparel_name}
                    </h1>
                  </motion.div>
                </div>

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
              orientation="vertical"
              className="w-full max-w-full z-[1]"
              setApi={setApi}
            >
              <CarouselContent className="-mt-1 h-[70vh] sm:h-[30rem]">
                {apparel.apparel_images.map((img, index) => (
                  <CarouselItem key={index} className="pt-1 md:basis-1/1">
                    <div className="p-1">
                      <Card className="bg-transparent shadow-none border-none">
                        <CardContent className="flex items-center justify-center p-0">
                          <div className="h-[65vh] sm:h-[28rem]">
                            <Image
                              src={renderImageUrl(img.url)}
                              alt={img.name}
                              width={800}
                              height={800}
                              className="object-cover h-full"
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
