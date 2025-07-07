"use client";

import CheckoutSummary from "@/components/cart/checkoutSummary";
import QuantityUpdater from "@/components/cart/quantityUpdater";
import { Button } from "@/components/ui/button";
import { renderImageUrl } from "@/hooks/useRenderImageUrl";
import { useCartStore } from "@/store/cartStore";
import useUserStore from "@/store/userStore";
import { usePrice } from "@/utils/usePrice";
import { Trash2 } from "lucide-react";
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/navigation";



import EmptyBag from "../../../../public/images/empty-bag.svg";


const Cart: NextPage = () => {
  const { cart, removeItem } = useCartStore();
  const { isAuthenticated } = useUserStore();
  const router = useRouter();

  const { formatPrice } = usePrice();

  return (
    <>
      <div className="relative min-h-screen w-full py-[80px] pt-[110px] sm:px-[5.75rem] sm:pt-[80px]">
        <div className="relative z-[4] flex w-full flex-row gap-[40px]">
          <div className="flex flex-[5] flex-col gap-[20px] pt-[20px]">
            <div className="flex flex-row items-center justify-between px-[1.4rem] sm:px-0">
              <div className="flex flex-row items-center gap-[50px]">
                <h1 className="text-[2rem] font-bold">Shopping Bag</h1>
                <p className="font-semibold text-primary-100">
                  {cart?.items.length || 0} Items
                </p>
              </div>
            </div>

            {cart?.items.length == 0 || cart == null ? (
              <>
                <div className="flex flex-col items-center justify-center bg-transparent-white-100 p-[1.4rem] sm:rounded-[1.6rem] sm:p-[2rem]">
                  <div className="text-center">
                    {/* Empty Bag Icon */}
                    <EmptyBag className="mx-auto h-[150px] w-[150px] text-gray-400" />
                    {/* Friendly Message */}
                    <p className="mt-4 text-[20px] text-gray-600">
                      Your shopping bag is empty.
                    </p>
                    <p className="mt-2 text-[16px] text-gray-500">
                      Looks like you haven&rsquo;t added anything yet.
                      Let&rsquo;s go shopping!
                    </p>
                    {/* Button to Start Shopping */}
                    <Button
                      className="hover:bg-primary-200 mt-6 rounded-full bg-primary-100 px-8 py-3 text-white"
                      onClick={() => router.push("/shoppers")} // Redirect to the homepage or shopping page
                    >
                      Start Shopping
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex flex-col gap-[1.56rem] bg-transparent-white-100 p-[1.4rem] sm:rounded-[1.6rem] sm:p-[2rem]">
                {cart?.items.map((cartItem) => (
                  <div
                    key={cartItem._id}
                    className="flex h-[150px] flex-grow flex-col items-center justify-between rounded-[0.9rem] bg-transparent-white-200 p-[1rem] sm:h-[200px] sm:flex-row"
                  >
                    <div className="flex h-full w-full flex-row gap-[20px]">
                      <div className="h-full w-[8rem] overflow-hidden rounded-[10px]">
                        <Image
                          height={200}
                          width={200}
                          alt={cartItem.apparel.apparel_name}
                          src={renderImageUrl(
                            cartItem.apparel.apparel_images[0].url,
                          )}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="gsp-[10px] flex w-full flex-col justify-between">
                        <div className="flex w-full flex-col gap-[10px]">
                          <div className="">
                            <div className="">
                              <p className="text-[0.9rem] font-[600] sm:text-[1.2rem]">
                                {cartItem.apparel.apparel_name}
                              </p>
                            </div>
                            <div className="flex flex-col gap-[10px] text-gray-500">
                              <div className="flex flex-row gap-[10px]">
                                <div className="flex flex-row gap-[3px] text-[14px]">
                                  {" "}
                                  Color:{" "}
                                  {cartItem.selected_colors.map(
                                    (color, index) => (
                                      <p key={index} className="">
                                        {color.name},
                                      </p>
                                    ),
                                  )}
                                </div>
                                <div className="flex flex-row gap-[3px] text-[14px]">
                                  Size:{" "}
                                  {cartItem.selected_sizes.map(
                                    (size, index) => (
                                      <p key={index} className="">
                                        {size.short_name},
                                      </p>
                                    ),
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>

                          <p className="text-[1.2rem] font-[900] sm:text-[1.5rem]">
                            {formatPrice(cartItem.apparel.apparel_price)}
                          </p>
                        </div>

                        <div className="flex flex-row justify-between">
                          <QuantityUpdater cartItem={cartItem} />
                          <div
                            className="flex cursor-pointer flex-row items-center gap-[5px] self-end p-1 text-red-500 hover:bg-gray-100"
                            onClick={() => removeItem(cartItem?.apparel?._id)}
                          >
                            <Trash2 className="w-[17px]" />
                            <p className="hidden text-[14px] sm:block">
                              Remove
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {isAuthenticated ? (
              <>
                <Button
                  className="hover:bg-primary-200 mx-[1.4rem] mt-6 block rounded-full bg-primary-100 px-8 py-3 text-white sm:hidden"
                  onClick={() => router.push("/auth/shoppers")} // Redirect to the homepage or shopping page
                >
                  Checkout {`(`}
                  {formatPrice(cart?.total_price)}
                  {`)`}
                </Button>
              </>
            ) : (
              <>
                <Button
                  className="hover:bg-primary-200 mx-[1.4rem] block rounded-full bg-primary-100 px-8 py-3 text-white sm:hidden"
                  onClick={() => router.push("auth/shoppers/login")} // Redirect to the homepage or shopping page
                >
                  Login
                </Button>
              </>
            )}
          </div>

          <div className="mx-[1.4rem] hidden flex-[2] sm:block">
            <CheckoutSummary />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;