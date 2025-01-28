import React, { useEffect } from 'react';
import BrandCard from '../cards/BrandCard';
import { Brand } from '@/types';

interface BrandSectionProps {
  headerTitle: string;
  itemCount: number;
  brands: Brand[]
}

const BrandSection: React.FC<BrandSectionProps> = ({ headerTitle, itemCount, brands }) => {

  return (
    <div className="sm:px-[6.25rem]">
      <div className="p-6 bg-transparent-white-100 sm:rounded-[25px] flex flex-col gap-[20px]">
        <h2 className="text-xl sm:text-2xl font-bold text-center">{headerTitle}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {brands.map((brand, id) => {
            if (id <= (itemCount - 1)) {
              return (
                <BrandCard key={brand._id} brand={brand} />
              )
            }

          })}
        </div>
      </div>
    </div>
  );


};

export default BrandSection;
