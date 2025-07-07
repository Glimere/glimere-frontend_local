import { Card } from "@/components/ui/card";
import { renderImageUrl } from "@/hooks/useRenderImageUrl";
import { Brand } from "@/types";
import { NextPage } from "next";
import Image from "next/image";

interface Props {
  brand: Brand;
}

const BrandCard: NextPage<Props> = ({ brand }) => {
  return (
    <Card
      key={brand._id}
      className="relative flex h-[100px] flex-col items-center justify-between overflow-hidden rounded-[18px]"
    >
      <Image
        src={renderImageUrl(brand?.coverImage?.url)}
        alt={brand?.name}
        height={150}
        width={150}
        className="absolute h-full w-full object-cover"
      />
      <div className="h-full w-full p-2 flex justify-start">
        <div className="z-[3] h-[25px] w-[25px] self-start overflow-hidden rounded-full shadow-md">
        <Image
          src={renderImageUrl(brand.logo.url)}
          alt={brand.name}
          height={150}
          width={150}
          className="w-full object-cover"
        />
      </div> 
      </div>
     
    </Card>
  );
};

export default BrandCard;
