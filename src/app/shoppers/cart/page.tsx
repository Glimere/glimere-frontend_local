"use client";

import { NextPage } from "next";
import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
import { usePrice } from "@/utils/usePrice";
import QuantityUpdater from "@/components/cart/quantityUpdater";
import { Button } from "@/components/ui/button";
import EmptyBag from "../../../../public/images/empty-bag.svg";
import CheckoutSummary from "@/components/cart/checkoutSummary";
import { useRouter } from "next/navigation";
import useUserStore from "@/store/userStore";
import { Trash2 } from "lucide-react";

const Cart: NextPage = () => {
  const { cart, removeItem } = useCartStore();
  const { isAuthenticated } = useUserStore();
  const router = useRouter();


  const { formatPrice } = usePrice();

  return (
    <>
      <div className="relative py-[80px] sm:pt-[80px] pt-[110px] w-full sm:px-[5.75rem] min-h-screen">
        <div className="flex flex-row gap-[40px] z-[4] w-full relative">
          <div className="flex-[5] flex flex-col gap-[20px] pt-[20px]">

            <div className="flex flex-row justify-between items-center  px-[1.4rem] sm:px-0">
              <div className="flex flex-row items-center gap-[50px]">
                <h1 className="text-[2rem] font-bold">Shopping Bag</h1>
                <p className="text-primary-100 font-semibold">
                  {cart?.items.length || 0} Items
                </p>
              </div>
            </div>


            {cart?.items.length == 0 || cart == null ? (
              <>
                <div className="sm:rounded-[1.6rem] bg-transparent-white-100 flex flex-col justify-center items-center p-[1.4rem] sm:p-[2rem]">
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
              <div className="sm:rounded-[1.6rem] bg-transparent-white-100 flex flex-col gap-[1.56rem]  p-[1.4rem] sm:p-[2rem]">
                {cart?.items.map((cartItem) => (

                  <div key={cartItem._id} className="flex-grow h-[150px] sm:h-[200px] bg-transparent-white-200 p-[1rem] rounded-[0.9rem] flex flex-col sm:flex-row items-center justify-between">
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


                      <div className="flex flex-col justify-between gsp-[10px] w-full">
                        <div className="flex flex-col gap-[10px] w-full">
                          <div className="">
                            <div className="">
                              <p className="text-[1.2rem] font-[600]">
                                {cartItem.apparel.apparel_name}
                              </p>
                            </div>
                            <div className="text-gray-500 flex flex-col gap-[10px]">
                              <div className="flex flex-row gap-[10px]">
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
                            </div>
                          </div>

                          <p className="text-[1.5rem] font-[900]">
                            {formatPrice(cartItem.apparel.apparel_price)}
                          </p>
                        </div>

                        <div className="flex flex-row justify-between">
                          <QuantityUpdater cartItem={cartItem} />
                          <div className="text-red-500 self-end p-1 flex flex-row items-center gap-[5px] cursor-pointer hover:bg-gray-100"
                            onClick={() => removeItem(cartItem?.apparel?._id)}
                          >
                            <Trash2 className="w-[17px]" />
                            <p className="sm:block hidden text-[14px]">Remove</p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>


                ))}
              </div>
            )}

            {isAuthenticated
              ? <>
                <Button
                  className="block sm:hidden mt-6 bg-primary-100 text-white px-8 py-3 rounded-full hover:bg-primary-200 mx-[1.4rem]"
                  onClick={() => router.push("/auth")} // Redirect to the homepage or shopping page
                >
                  Checkout {`(`}{formatPrice(cart?.total_price)}{`)`}
                </Button>
              </>
              : <>
                <Button
                  className="block sm:hidden bg-primary-100 text-white px-8 py-3 rounded-full hover:bg-primary-200 mx-[1.4rem]"
                  onClick={() => router.push("/auth")} // Redirect to the homepage or shopping page
                >
                  Login
                </Button>
              </>}

          </div>

          <div className="hidden sm:block flex-[2] mx-[1.4rem]">
            <CheckoutSummary />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
