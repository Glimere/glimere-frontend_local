import type { Apparel } from "@/types";
import { NextPage } from "next";
import Image from "next/image";
import { usePrice } from "@/utils/usePrice";
import { Button } from "../ui/button";
import Link from "next/link";
import useUserStore from "@/store/userStore";

interface Props {
  apparel: Apparel;
}

const ApparelCheckout: NextPage<Props> = ({ apparel }) => {
  function capitalizeFirstLetter(string: string) {
    if (!string) return string; // handle empty strings
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const { formatPrice } = usePrice();
  const { isAuthenticated } = useUserStore()

  return (
    <>
      <div className="absolute right-0 h-full flex flex-col justify-center sm:pr-[5.75rem] z-[3]">
        <div className="flex flex-col gap-[1.56rem] min-w-[18.125rem]">
          <div className="rounded-[1.6rem] bg-transparent-white-100 flex flex-col gap-[1.56rem] p-[1.56rem]">
            <div className="">
              <div className="">
                <h1 className="text-[0.8rem] text-primary-100 font-[700]">
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
                src={apparel.apparel_images[0].url}
                className="object-cover h-full w-full"
              />
            </div>
            <div className="">
              <h1 className="text-[0.8rem] text-primary-100 font-[700]">
                Materials
              </h1>
              <div className="flex flex-col">
                {apparel.materials.map((material) => (
                  <p
                    key={material._id}
                    className="text-dark text-[0.9rem] font-[500]"
                  >
                    {material.type}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-[1.6rem] bg-transparent-white-100 p-[1.56rem] flex flex-col gap-[5px]">
            <p className="text-[1.4rem] font-[400]">
              {formatPrice(apparel.apparel_price)}
            </p>
            <Link href={isAuthenticated ? "/shoppers/checkout" : "/auth"}>
              <Button className="bg-primary-100 rounded-full">Checkout</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApparelCheckout;
