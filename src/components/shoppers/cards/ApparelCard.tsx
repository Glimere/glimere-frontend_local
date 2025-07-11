"use client";

import Like from "@/components/apparel/Like";
import { Card, CardContent } from "@/components/ui/card";
import { renderImageUrl } from "@/hooks/useRenderImageUrl";
import { useCartStore } from "@/store/cartStore";
import { Apparel } from "@/types";
import { usePrice } from "@/utils/usePrice";
import { Box, CircleCheck, CirclePlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Props {
  apparel: Apparel;
}

const ApparelCard: React.FC<Props> = ({ apparel }) => {
  const { addItem, cart } = useCartStore();
  const { formatPrice } = usePrice();

  const router = useRouter();
  const isInCart =
    cart?.items.some((item) => item?.apparel?._id === apparel?._id) ?? false;

  const handleAddToCart = () => {
    console.log("apparel", apparel);
    if (!apparel) return;

    const selectedMaterial = apparel?.materials?.[0];
    const selectedColor = selectedMaterial?.colorVariants?.[0];

    addItem({
      apparel,
      selected_sizes: [apparel?.sizing_type],
      selected_colors: selectedColor ? [selectedColor] : [],
      selected_materials: selectedMaterial ? [selectedMaterial] : [],
      quantity: 1,
      _id: apparel._id,
    });
  };

  return (
    <Card className="overflow-visible border-none bg-transparent shadow-none w-full">
      <CardContent className="relative flex items-center justify-center overflow-hidden p-0">
        {/* Image */}
        <div className="flex flex-col gap-[10px]">
          <div className="relative h-[240px] w-full cursor-pointer overflow-hidden rounded-[10px] bg-light">
            <div className="absolute right-4 top-4 z-[3] scale-75">
              <Like apparelId={apparel?._id} />
            </div>
            {apparel.models.length == 0 ? (
              <></>
            ) : (
              <div className="absolute bottom-2 right-2 z-[3] scale-75">
                <div className="rounded-full bg-black p-2">
                  <Box className="h-4 w-4 text-white" />
                </div>
              </div>
            )}
            <Image
              src={renderImageUrl(apparel?.apparel_images?.[0]?.url)}
              alt={apparel?.apparel_name || "Apparel Image"}
              height={240}
              width={240}
              className="h-full w-full object-cover"
              priority
              onClick={() => router.push(`/shoppers/${apparel._id}`)}
            />
          </div>

          {/* Name & Price */}
          <div className="flex h-[100px] flex-col items-center gap-[7px]">
            <h3 className="text-center font-semibold">
              {apparel?.apparel_name}
            </h3>

            <div className="flex flex-row items-center gap-[10px]">
              <span className="mt-1 text-sm font-normal">
                {formatPrice(apparel?.apparel_price)}
              </span>

              {/* Add to Cart Button */}
              <button onClick={handleAddToCart} className="focus:outline-none">
                {isInCart ? (
                  <CircleCheck className="w-[20px] text-green-600" />
                ) : (
                  <CirclePlus className="w-[20px] text-gray-600 hover:text-black" />
                )}
              </button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ApparelCard;
