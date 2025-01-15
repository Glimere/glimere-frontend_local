"use client";

import StepsIndicator from "@/components/checkout/stepsIndicator";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import CheckoutBody from "./checkoutBody";
import CheckoutPreview from "@/components/checkout/CheckoutPreview";
import GoBack from "@/components/GoBack";
import { Button } from "@/components/ui/button";
import { AnimatePresence } from "framer-motion";
import { useShippingAddressStore } from "@/store/shippingStore";
import { useJwt } from "@/hooks/useJwt";
import { useCartStore } from "@/store/cartStore";
import useOrderStore from "@/store/orderStore";

interface Props {}

const Checkout: NextPage<Props> = ({}) => {
  const [checkoutTabSwitch, setCheckoutTabSwitch] = useState(1);
  const { getAddresses } = useShippingAddressStore();
  const { cart } = useCartStore();
  const { setTotalItems, setTotalPrice, addItemsToSelectedOrder, selectedOrder } =
    useOrderStore();

  const jwt = useJwt();
  useEffect(() => {
    if (jwt) {
      getAddresses(jwt);
      if (cart?.items) {
        addItemsToSelectedOrder(cart.items);
      }
      setTotalPrice(cart?.total_price ?? 0);
      setTotalItems(cart?.total_items ?? 0);
    }
  }, [getAddresses, jwt]);

  const handleCheckoutAction = () => {
    if (checkoutTabSwitch < 3) {
      setCheckoutTabSwitch(checkoutTabSwitch + 1);
    } else {
      console.log("Checkout process completed, submitting order...");
    }
  };

  const handleBackAction = () => {
    if (checkoutTabSwitch > 1) {
      setCheckoutTabSwitch(checkoutTabSwitch - 1);
    }
  };

  const getProceedButtonText = () => {
    switch (checkoutTabSwitch) {
      case 1:
        return "Proceed to Confirmation";
      case 2:
        return "Proceed to Payment";
      case 3:
        return "Complete Checkout";
      default:
        return "Proceed";
    }
  };

  const isEmpty = Object.values(selectedOrder.shipping_address).every(value => value === "");

console.log('isEmpty', isEmpty)
  return (
    <>
      <div className="relative flex flex-col gap-[10px] py-[80px] z-[4] sm:px-[5.75rem]">
        <GoBack text="Continue Shopping" />
        <StepsIndicator checkoutTabSwitch={checkoutTabSwitch} />
        <div className="flex flex-row gap-[20px]">
          <div className="rounded-[1.6rem] bg-transparent-white-100 p-[2rem] flex-[7] min-h-[104vh] flex flex-col gap-[20px] justify-between">
            <AnimatePresence mode="wait">
              <CheckoutBody checkoutTabSwitch={checkoutTabSwitch} />
            </AnimatePresence>
            <div className="w-full flex justify-between">
              <Button
                onClick={handleBackAction}
                className={`self-start ${
                  checkoutTabSwitch === 1
                    ? "opacity-50 pointer-events-none"
                    : ""
                }`}
              >
                Back
              </Button>

              {checkoutTabSwitch == 3 ? (
                <></>
              ) : (
                <Button
                  onClick={handleCheckoutAction}
                  className="self-end bg-primary-100"
                  disabled={isEmpty}
                >
                  {getProceedButtonText()}
                </Button>
              )}
            </div>
          </div>

          <div className="flex-[3]">
            <CheckoutPreview />
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
