import React, { useEffect } from 'react';
import BrandCard from '../cards/BrandCard';
import { Apparel, Brand } from '@/types';
import ApparelCard from '../cards/ApparelCard';

interface ApparelListSectionProps {
    headerTitle: string;
    apparels: Apparel[] | undefined;
}

const ApparelListSection: React.FC<ApparelListSectionProps> = ({ headerTitle, apparels }) => {

    return (
        <div className="px-[1.4rem] sm:px-[6.25rem]">
            <div className="flex flex-col gap-[30px]">
                <h2 className="text-xl sm:text-2xl  font-bold text-center self-start">{headerTitle}</h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {apparels?.map((apparel) => {
                        return (
                            <ApparelCard key={apparel._id} apparel={apparel} />
                        )

                    })}
                </div>
            </div>
        </div>
    );


};

export default ApparelListSection;
