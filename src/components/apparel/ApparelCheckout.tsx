import { renderImageUrl } from "@/hooks/useRenderImageUrl";
import useUserStore from "@/store/userStore";
import type { Apparel } from "@/types";
import { usePrice } from "@/utils/usePrice";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";



import { Button } from "../ui/button";


interface Props {
  apparel: Apparel;
}

const ApparelCheckout: NextPage<Props> = ({ apparel }) => {
  function capitalizeFirstLetter(string: string) {
    if (!string) return string; // handle empty strings
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const { formatPrice } = usePrice();
  const { isAuthenticated } = useUserStore();

  return (
    <>
      <div className="justify-center pr-4 absolute right-0 z-[3] flex h-full w-[30%] flex-col md:pr-[2.5rem] lg:pr-[5.75rem]">
        <div className="flex flex-col gap-[1.56rem]">
          <div className="flex flex-col gap-[1.56rem] rounded-[1.6rem] bg-transparent-white-200 p-[1.56rem] backdrop-blur-md">
            <div className="">
              <div className="">
                <h1 className="text-[0.8rem] font-[700] text-primary-100">
                  {capitalizeFirstLetter(apparel.apparel_type)}
                </h1>
                <p className="text-[1.2rem] font-[600]">
                  {apparel.apparel_name}
                </p>
              </div>
              <p className="text-[0.875rem] font-[900]">
                {formatPrice(apparel.apparel_price)}
              </p>
            </div>
            <div className="h-[4.5rem] w-[4.5rem]">
              <Image
                height={200}
                width={200}
                alt={apparel.apparel_images[0].name}
                src={renderImageUrl(apparel.apparel_images[0].url)}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="">
              <h1 className="text-[0.8rem] font-[700] text-primary-100">
                Materials
              </h1>
              <div className="flex flex-col">
                {apparel.materials.map((material) => (
                  <p
                    key={material._id}
                    className="text-[0.9rem] font-[500] text-dark"
                  >
                    {material.type}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[5px] rounded-[1.6rem] bg-transparent-white-200 p-[1.56rem] backdrop-blur-md">
            <p className="text-[1.4rem] font-[400]">
              {formatPrice(apparel.apparel_price)}
            </p>
            <Link
              href={isAuthenticated ? "/shoppers/checkout" : "/auth/shoppers"}
            >
              <Button className="rounded-full bg-primary-100">Checkout</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApparelCheckout;