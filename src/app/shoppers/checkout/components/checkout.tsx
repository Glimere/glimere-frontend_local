"use client";

import StepsIndicator from "@/components/checkout/stepsIndicator";
import { NextPage } from "next";
import { useState } from "react";
import CheckoutBody from "./checkoutBody";
import CheckoutPreview from "@/components/checkout/CheckoutPreview";
import GoBack from "@/components/GoBack";

interface Props {}

const Checkout: NextPage<Props> = ({}) => {
  const [checkoutTabSwitch, setCheckoutTabSwitch] = useState(1);

  return (
    <>
      <div className="relative flex flex-col gap-[10px] py-[80px] z-[4] sm:px-[5.75rem] ">
      <GoBack text="Continue Shopping"/>
        <StepsIndicator
          checkoutTabSwitch={checkoutTabSwitch}
          setCheckoutTabSwitch={setCheckoutTabSwitch}
        />
        <div className="flex flex-row gap-[20px]">
          <CheckoutBody
            checkoutTabSwitch={checkoutTabSwitch}
            setCheckoutTabSwitch={setCheckoutTabSwitch}
          />
          <div className="flex-[3]">
            <CheckoutPreview />
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
