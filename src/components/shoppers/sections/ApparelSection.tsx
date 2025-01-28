import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { ArrowRight, CirclePlus } from 'lucide-react';
import ApparelCard from '../cards/ApparelCard';
import useFetch from '@/hooks/useFetch';
import { Apparel, ApparelData } from '@/types';

interface ApparelSectionProps {
    headerTitle: string;
    apparels: Apparel[] | undefined;
}

const ApparelSection: React.FC<ApparelSectionProps> = ({ headerTitle, apparels }) => {

    return (
        <div className="px-[1.4rem] sm:px-[6.25rem]">

            <div className="flex flex-col gap-[20px]">
                <div className="flex flex-row justify-between items-center">
                    <h2 className="text-xl sm:text-2xl  font-bold text-centerself-start">{headerTitle}</h2>
                    <div className="flex flex-row gap-[10px] items-center">
                        <span className='font-bold'>See More</span>
                        <div className="h-[25px] w-[25px] rounded-full bg-primary-100 flex justify-center items-center">
                            <ArrowRight className='text-light w-[17px]' />
                        </div>
                    </div>

                </div>

                <div className="w-full">
                    <Carousel className="w-full max-w-full">
                        <CarouselContent className="-ml-1">
                            {apparels?.map((apparel) => (
                                <CarouselItem key={apparel._id} className="pl-4 basis-1/2 md:basis-1/4 lg:basis-1/5">
                                    <ApparelCard apparel={apparel} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>

        </div>
    );


};

export default ApparelSection;