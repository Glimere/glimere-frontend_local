import Like from '@/components/apparel/Like';
import { Card, CardContent } from '@/components/ui/card'
import { Apparel, Brand } from '@/types'
import { CirclePlus } from 'lucide-react';
import { NextPage } from 'next'
import Image from 'next/image'
import { useState } from 'react';
import { usePrice } from '@/utils/usePrice';

interface Props {
    apparel: Apparel;
}

const ApparelCard: NextPage<Props> = ({ apparel }) => {

    const { formatPrice } = usePrice();

    return (
        <div className="">
            <Card className='bg-transparent overflow-visible shadow-none border-none'>
                <CardContent className="relative p-0 flex items-center justify-center overflow-hidden">
                    <div className="absolute top-4 right-4 scale-75 z-[3]">
                        <Like apparelId={apparel._id} />
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <div className="h-[240px] w-full overflow-hidden bg-light rounded-[10px]">
                            <Image
                                src={apparel.apparel_images[0].url}
                                alt={apparel.apparel_name}
                                height={150}
                                width={150}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col gap-[7px] items-center h-[100px]">
                            <h3 className="font-semibold text-center">{apparel.apparel_name}</h3>

                            <div className="flex flex-row gap-[10px] items-center">
                                <span className="text-sm font-normal mt-1">{formatPrice(apparel.apparel_price)}</span>
                                <CirclePlus className='w-[20px]' />
                            </div>
                        </div>
                    </div>


                </CardContent>
            </Card>
        </div>
    )
}

export default ApparelCard