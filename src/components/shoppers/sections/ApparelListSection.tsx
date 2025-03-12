import React, { useEffect, useState } from 'react';
import { Apparel } from '@/types';
import ApparelCard from '../cards/ApparelCard';
import ApparelLoading from './ApparelLoading';

interface ApparelListSectionProps {
    headerTitle: string;
    apparels: Apparel[] | undefined;
    loading: boolean;
}

const ApparelListSection: React.FC<ApparelListSectionProps> = ({ headerTitle, apparels, loading }) => {
    const [isLoading, setIsLoading] = useState(loading);

    useEffect(() => {
        setIsLoading(loading);
    }, [loading]);

    return (
        <div className="px-[1.4rem] sm:px-[6.25rem]">
            <div className="flex flex-col gap-[30px]">
                <h2 className="text-xl sm:text-2xl font-bold text-center self-start">{headerTitle}</h2>
                {isLoading ? (
                    <ApparelLoading />
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {apparels?.map((apparel) => (
                            <ApparelCard key={apparel._id} apparel={apparel} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ApparelListSection;
