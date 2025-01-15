"use client";

import { NextPage } from "next";
import { motion } from "framer-motion";
import ShippingTab from "./ShippingTab";
import PaymentTab from "./PaymentTab";
import ConfirmTab from "./ConfirmTab";

interface Props {
  checkoutTabSwitch: number;
}

const CheckoutBody: NextPage<Props> = ({ checkoutTabSwitch }) => {
  // Calculate the translateX based on the current tab switch
  const translateX = `${-(checkoutTabSwitch - 1) * 34}%`;

  return (
    <div className="min-h-[18rem] overflow-hidden">
      <div
        className="flex flex-row gap-[20px] w-[300%] transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(${translateX})` }}
      >
        {/* Tab Structure: 100% width for each tab */}
        <div
          className={`w-[33%] flex-shrink-0 duration-500 ${
            checkoutTabSwitch == 1 ? " opacity-100" : "opacity-0"
          }`}
        >
          <ShippingTab />
        </div>

        <div
          className={`w-[33%] flex-shrink-0 duration-500 ${
            checkoutTabSwitch == 2 ? " opacity-100" : "opacity-0"
          }`}
        >
          <ConfirmTab />
        </div>
        <div
          className={`w-[33%] flex-shrink-0 duration-500 ${
            checkoutTabSwitch == 3 ? " opacity-100" : "opacity-0"
          }`}
        >
          <PaymentTab />
        </div>
      </div>
    </div>
  );
};

export default CheckoutBody;
