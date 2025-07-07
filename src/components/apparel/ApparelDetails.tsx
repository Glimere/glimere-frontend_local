import { NextPage } from "next";
import type { Apparel } from "@/types";
import Image from "next/image";
import Like from "./Like";
import Rating from "./Rating";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { renderImageUrl } from "@/hooks/useRenderImageUrl";

interface Props {
  apparel: Apparel;
}

const ApparelDetails: NextPage<Props> = ({ apparel }) => {

  const { addItem } = useCartStore();

  return (
    <>
      <div className="absolute h-full left-0 sm:pl-[5.75rem] z-[3] flex flex-col justify-center">
        <div className="flex flex-col gap-[1rem] w-[35%]">
          <div className="flex flex-row gap-[20px] items-center">
            <div className="md-[80%] sm:w-[100%]">
              <h1 className="text-[2.3rem] text-dark font-[600]">
                {apparel.apparel_name}
              </h1>
            </div>

            <Like apparelId={apparel._id} />
          </div>

          <div className="flex flex-row gap-[10px] items-center">
            <div className="h-[2rem] w-[2rem] p-[5px] bg-white rounded-full border border-solid border-primary-100 overflow-hidden">
              <Image
                src={renderImageUrl(apparel.brand.logo.url)}
                height={200}
                width={200}
                alt={apparel.brand.logo.name}
                className="object-cover h-full w-full"
              />
            </div>
            <p className="text-dark text-[1rem] font-[500]">
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
                  <p className="font-semibold text-[1rem]">{material.type}</p>

                  <div className="flex flex-row gap-[5px] items-center">
                    <div
                      className={`h-[2rem] w-[2rem] rounded-full`}
                      style={{
                        backgroundImage: `url(${material.textures.patternFile.url})`,
                      }}
                    ></div>{" "}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button
            className="flex flex-row items-center self-start rounded-full mt-[20px]"
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
