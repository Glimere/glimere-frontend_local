"use client";

import Like from "@/components/apparel/Like";
import { Card, CardContent } from "@/components/ui/card";
import { renderImageUrl } from "@/hooks/useRenderImageUrl";
import { useCartStore } from "@/store/cartStore";
import { Apparel } from "@/types";
import { usePrice } from "@/utils/usePrice";
import { CircleCheck, CirclePlus } from "lucide-react";
import Image from "next/image";

interface Props {
  apparel: Apparel;
}

const ApparelCard: React.FC<Props> = ({ apparel }) => {
  const { addItem, cart } = useCartStore();
  const { formatPrice } = usePrice();

  // Derive `isInCart` directly from Zustand store
  const isInCart = cart?.items.some((item) => item?.apparel?._id === apparel?._id) ?? false;

  const handleAddToCart = () => {
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
    <div>
      <Card className="overflow-visible border-none bg-transparent shadow-none">
        <CardContent className="relative flex items-center justify-center overflow-hidden p-0">
          {/* Like Button */}
          <div className="absolute right-4 top-4 z-[3] scale-75">
            <Like apparelId={apparel?._id} />
          </div>

          {/* Image */}
          <div className="flex flex-col gap-[10px]">
            <div className="h-[240px] w-full overflow-hidden rounded-[10px] bg-light">
              <Image
                src={renderImageUrl(apparel?.apparel_images?.[0]?.url)}
                alt={apparel?.apparel_name || "Apparel Image"}
                height={240}
                width={240}
                className="h-full w-full object-cover"
                priority
              />
            </div>

            {/* Name & Price */}
            <div className="flex h-[100px] flex-col items-center gap-[7px]">
              <h3 className="text-center font-semibold">{apparel?.apparel_name}</h3>

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
    </div>
  );
};

export default ApparelCard;
