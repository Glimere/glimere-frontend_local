import { renderImageUrl } from "@/hooks/useRenderImageUrl";
import { useCartStore } from "@/store/cartStore";
import type { Apparel } from "@/types";
import { Plus } from "lucide-react";
import { NextPage } from "next";
import Image from "next/image";



import { Button } from "../ui/button";
import Like from "./Like";
import Rating from "./Rating";


interface Props {
  apparel: Apparel;
}

const ApparelDetails: NextPage<Props> = ({ apparel }) => {

  const { addItem } = useCartStore();

  return (
    <>
      <div className="pl-4 md:pl-[2.5rem] lg:pl-[5.75rem] absolute left-0 z-[3] flex h-full w-[38%] flex-col justify-center">
        <div className="flex w-full flex-col gap-[1rem]">
          <div className="flex flex-row items-start gap-[20px]">
            <div className="md-[80%] sm:w-[100%]">
              <h1 className="text-[2.3rem] font-[600] text-dark">
                {apparel.apparel_name}
              </h1>
            </div>
            <div className="mt-[14px]">
              <Like apparelId={apparel._id} />
            </div>
          </div>

          <div className="flex flex-row items-center gap-[10px]">
            <div className="h-[2rem] w-[2rem] overflow-hidden rounded-full border border-solid border-primary-100 bg-white p-[5px]">
              <Image
                src={renderImageUrl(apparel.brand.logo.url)}
                height={200}
                width={200}
                alt={apparel.brand.logo.name}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="text-[1rem] font-[500] text-dark">
              {apparel.brand.name}
            </p>
          </div>
          <div className="flex flex-col gap-[1rem]">
            <div className="min-h-[5rem] w-[90%]">
              <p className="text-[1rem] text-dark">{apparel.apparel_desc}</p>
            </div>

            <Rating
              rating={apparel.average_rating}
              reviews={apparel.total_reviews}
            />
            <div className="flex flex-col gap-[10px]">
              {apparel.materials.map((material, index) => (
                <div key={index}>
                  <p className="text-[1rem] font-semibold">{material.type}</p>

                  <div className="flex flex-row items-center gap-[5px]">
                    <div
                      className={`h-[2rem] w-[2rem] rounded-full`}
                      style={{
                        backgroundImage: `url(${renderImageUrl(material.textures.patternFile.url)})`,
                      }}
                    ></div>{" "}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button
            className="mt-[20px] flex flex-row items-center self-start rounded-full"
            onClick={() =>
              addItem({
                apparel: {
                  ...apparel,
                },
                selected_sizes: [apparel.sizing_type],
                selected_colors: [apparel.materials[0].colorVariants[0]],
                selected_materials: [apparel.materials[0]],
                quantity: 1,
                _id: `${apparel._id}`,
              })
            }
          >
            <Plus />
            <p className="">Add To Cart</p>
          </Button>
        </div>
      </div>
    </>
  );
};

export default ApparelDetails;