"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { renderImageUrl } from "@/hooks/useRenderImageUrl";
import { Apparel, Material } from "@/types";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import ApparelLoading from "./ApparelLoading";

interface ApparelSectionProps {
  headerTitle: string;
  materials: Material[] | undefined;
  loading: boolean;
}

const MaterialSection: React.FC<ApparelSectionProps> = ({
  headerTitle,
  materials,
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
          <h2 className="text-center self-start text-xl font-bold sm:text-2xl">
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
                {materials?.map((material) => (
                  <CarouselItem
                    key={material._id}
                    className="basis-1/2 pl-4 md:basis-1/4 lg:basis-1/6"
                  >
                    <div className="p-1">
                      <Card className="aspect-square border-none bg-transparent shadow-none">
                        <CardContent className="flex flex-col items-center justify-center gap-3 p-0 h-full">
                          <div className="overflow-hidden rounded-md h-full">
                            <Image
                              src={renderImageUrl(
                                material.textures.thumbnail.url,
                              )}
                              alt={material.textures.name}
                              width={800}
                              height={800}
                              className="h-full object-cover"
                              priority
                            />
                          </div>
                          <span>{material.textures.name}</span>
                        </CardContent>
                      </Card>
                    </div>
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

export default MaterialSection;
