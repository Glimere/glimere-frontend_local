"use client";

import { NextPage } from "next";
import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
import { usePrice } from "@/utils/usePrice";
import QuantityUpdater from "@/components/cart/quantityUpdater";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import EmptyBag from "../../../../public/images/empty-bag.svg";
import CheckoutSummary from "@/components/cart/checkoutSummary";
import GoBack from "@/components/GoBack";
import { useRouter } from "next/navigation";

interface Props {}

const Cart: NextPage<Props> = ({}) => {
  const { cart, removeItems } = useCartStore();
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const router = useRouter();

  const handleSelect = (id: string) => {
    setSelectedIds((prevSelectedIds) =>
      prevSelectedIds.includes(id)
        ? prevSelectedIds.filter((selectedId) => selectedId !== id)
        : [...prevSelectedIds, id]
    );
  };

  const handleRemove = () => {
    removeItems(selectedIds);
    setSelectedIds([]);
  };

  const { formatPrice } = usePrice();

  return (
    <>
      <div className="relative py-[80px] w-full overflow-hidden sm:px-[5.75rem] min-h-screen">
        <div className="flex flex-row gap-[40px] z-[4] w-full relative">
          <div className="flex-[5] flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[40px]">
              <GoBack text="Continue Shopping"/>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-[50px]">
                  <h1 className="text-[2rem] font-bold">Shopping Bag</h1>
                  <p className="text-primary-100 font-semibold">
                    {cart?.items.length || 0} Items
                  </p>
                </div>
                {selectedIds.length > 0 && (
                  <Button
                    className="bg-red-500 text-white px-[0.7rem] h-[2rem]"
                    onClick={handleRemove}
                  >
                    Remove
                  </Button>
                )}
              </div>
            </div>

            {cart?.items.length == 0 || cart == null ? (
              <>
                <div className="rounded-[1.6rem] bg-transparent-100 flex flex-col justify-center items-center p-[2rem]">
                  <div className="text-center">
                    {/* Empty Bag Icon */}
                    <EmptyBag className="mx-auto h-[150px] w-[150px] text-gray-400" />
                    {/* Friendly Message */}
                    <p className="text-[20px] text-gray-600 mt-4">
                      Your shopping bag is empty.
                    </p>
                    <p className="text-[16px] text-gray-500 mt-2">
                      Looks like you haven&rsquo;t added anything yet.
                      Let&rsquo;s go shopping!
                    </p>
                    {/* Button to Start Shopping */}
                    <Button
                      className="mt-6 bg-primary-100 text-white px-8 py-3 rounded-full hover:bg-primary-200"
                      onClick={() => router.push("/shoppers")} // Redirect to the homepage or shopping page
                    >
                      Start Shopping
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="rounded-[1.6rem] bg-transparent-100 flex flex-col gap-[1.56rem] p-[2rem]">
                {cart?.items.map((cartItem) => (
                  <div
                    key={cartItem._id}
                    className="flex flex-row justify-between items-center gap-[20px]"
                  >
                    <div className="flex-grow h-[200px] bg-[#ffffff] p-[1rem] pr-[2rem] rounded-[0.9rem] flex flex-row items-center justify-between">
                      <div className="flex flex-row gap-[20px] w-full h-full">
                        <div className="h-full w-[8rem] rounded-[10px] overflow-hidden">
                          <Image
                            height={200}
                            width={200}
                            alt={cartItem.apparel.apparel_name}
                            src={cartItem.apparel.apparel_images[0].url}
                            className="object-cover h-full w-full"
                          />
                        </div>
                        <div className="">
                          <div className="">
                            <p className="text-[1.2rem] font-[600]">
                              {cartItem.apparel.apparel_name}
                            </p>
                          </div>
                          <div className="text-gray-500 flex flex-col gap-[20px]">
                            <div className="">
                              <div className="text-[14px] flex flex-row gap-[3px]">
                                {" "}
                                Color:{" "}
                                {cartItem.selected_colors.map(
                                  (color, index) => (
                                    <p key={index} className="">
                                      {color.name},
                                    </p>
                                  )
                                )}
                              </div>
                              <div className="text-[14px] flex flex-row gap-[3px]">
                                Size:{" "}
                                {cartItem.selected_sizes.map((size, index) => (
                                  <p key={index} className="">
                                    {size.short_name},
                                  </p>
                                ))}
                              </div>
                            </div>

                            <QuantityUpdater cartItem={cartItem} />
                          </div>
                        </div>
                      </div>

                      <p className="text-[1.5rem] font-[900]">
                        {formatPrice(cartItem.apparel.apparel_price)}
                      </p>
                    </div>

                    <Input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-primary-100 scale-75"
                      checked={selectedIds.includes(cartItem.apparel._id)}
                      onChange={() => handleSelect(cartItem.apparel._id)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex-[2]">
            <CheckoutSummary />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
