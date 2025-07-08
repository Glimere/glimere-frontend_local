import { renderImageUrl } from "@/hooks/useRenderImageUrl";
import { useCartStore } from "@/store/cartStore";
import { usePrice } from "@/utils/usePrice";
import { NextPage } from "next";
import Image from "next/image";

const CheckoutPreview: NextPage = () => {
  const { cart } = useCartStore();

  const totalPrice = () => {
    let total = 0;
    cart?.items.forEach((item) => {
      total += item.apparel.apparel_price * item.quantity;
    });
    return total.toFixed(2);
  };

  const { formatPrice } = usePrice();

  return (
    <>
      <div className="flex flex-col gap-[20px]">
        <div className="flex flex-col gap-[10px]">
          {cart?.items.map((cartItem) => (
            <div
              key={cartItem.apparel._id}
              className="flex flex-col gap-[1.56rem] rounded-[1.6rem] bg-transparent-white-100 p-[1.56rem] backdrop-blur-md"
            >
              <div className="">
                <div className="">
                  <p className="text-[1.2rem] font-[600]">
                    {cartItem.apparel.apparel_name}
                  </p>
                </div>
                <p className="text-[0.875rem] font-[900]">
                  {formatPrice(cartItem.apparel.apparel_price)}
                </p>
              </div>
              <div className="h-[4.5rem] w-[4.5rem]">
                <Image
                  height={200}
                  width={200}
                  alt={cartItem.apparel.apparel_images[0].name}
                  src={renderImageUrl(cartItem.apparel.apparel_images[0].url)}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-[5px] rounded-[1.6rem] bg-transparent-white-100 p-[1.56rem] backdrop-blur-md">
          <p className="text-[1.4rem] font-semibold text-primary-100">
            {formatPrice(JSON.parse(totalPrice()))}
          </p>
        </div>
      </div>
    </>
  );
};

export default CheckoutPreview;
