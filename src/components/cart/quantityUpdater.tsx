import { useCartStore } from "@/store/cartStore";
import { CartItem } from "@/types";

import { NextPage } from "next";

interface Props {
  cartItem: CartItem;
}

const QuantityUpdater: NextPage<Props> = ({ cartItem }) => {
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  return (
    <div className="hidden sm:flex flex-row gap-[20px] items-center">
      <p className="text-[14px]">Qty:</p>
      <div className="flex flex-row items-center gap-[10px]">
        <span
          className="text-[20px] cursor-pointer"
          onClick={() => updateQuantity(cartItem.apparel._id, cartItem.quantity - 1)}
        >
          -
        </span>
        <input
          type="text"
          value={cartItem.quantity}
          className="border-[1px] outline-none w-[30px] text-center text-[10px]"
          onChange={(e) => updateQuantity(cartItem.apparel._id, Number(e.target.value))}
        />
        <span
          className="text-[20px] cursor-pointer"
          onClick={() => updateQuantity(cartItem.apparel._id, cartItem.quantity + 1)}
        >
          +
        </span>
      </div>
    </div>
  );
};

export default QuantityUpdater;
