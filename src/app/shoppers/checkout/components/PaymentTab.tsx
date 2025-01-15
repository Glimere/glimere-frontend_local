"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Google from "../../../../../public/images/google.svg";
import Card from "../../../../../public/images/card.svg";
import Bank from "../../../../../public/images/bank.svg";

const PaymentTab = () => {
  const [selectedTab, setSelectedTab] = useState<
    "card" | "googlepay" | "banktransfer"
  >("card");

  const tabOptions: Array<"card" | "googlepay" | "banktransfer"> = [
    "card",
    "googlepay",
    "banktransfer",
  ];

  const tabContent: {
    [key in "card" | "googlepay" | "banktransfer"]: JSX.Element;
  } = {
    card: (
      <motion.div
        key="card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col gap-4"
      >
        <div className="flex w-full h-full flex-col gap-2">
          <label className="font-semibold text-sm">Card Number</label>
          <input
            type="text"
            placeholder="1264 1234 1234 1234"
            className="border rounded-md p-3"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-sm">Expiry (MM/YY)</label>
            <input
              type="text"
              placeholder="MM/YY"
              className="border rounded-md p-3"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-sm">CVC</label>
            <input
              type="text"
              placeholder="CVC"
              className="border rounded-md p-3"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="billing-same" />
          <label htmlFor="billing-same" className="text-sm">
            Billing is the same as shipping information
          </label>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          By providing your card information, you allow Shop Name to charge your
          card for future payments in accordance with the terms.
        </p>
        <Button className="w-full bg-primary-100 mt-4">Pay Now</Button>
      </motion.div>
    ),
    googlepay: (
      <motion.div
        key="googlepay"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center gap-4"
      >
        <p className="text-gray-600 text-center">
          Use Google Pay for a seamless checkout experience.
        </p>
        <Button className="w-full bg-primary-100">Pay with Google Pay</Button>
      </motion.div>
    ),
    banktransfer: (
      <motion.div
        key="banktransfer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center gap-4"
      >
        <p className="text-gray-600 text-center">
          Use bank transfer to pay directly from your bank account.
        </p>
        <Button className="w-full bg-primary-100">Get Bank Details</Button>
      </motion.div>
    ),
  };

  return (
    <>
      <div className="">
        {" "}
        <h1 className="text-2xl font-bold my-6 ml-2">Payment</h1>
        <div className="flex flex-col gap-6 p-6 bg-transparent-white-200 rounded-[15px] overflow-hidden shadow-sm">
          <div className="flex justify-between gap-4">
            {tabOptions.map((tab: "card" | "googlepay" | "banktransfer") => (
              <div
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`cursor-pointer flex-1 text-center p-3 rounded-lg transition-all border-solid border-[2px] duration-300 ${
                  selectedTab === tab
                    ? "bg-transparent-white-300 text-dark border-primary-100"
                    : "bg-gray-100 text-dark"
                }`}
              >
                {tab === "card" && (
                  <div className="flex flex-col gap-[10px] items-start">
                    <Card />
                    <p className="">Card</p>
                  </div>
                )}
                {tab === "googlepay" && (
                  <div className="flex flex-col gap-[10px] items-start">
                    <Google />
                    <p className="">Google Pay</p>
                  </div>
                )}
                {tab === "banktransfer" && (
                  <div className="flex flex-col gap-[10px] items-start">
                    <Bank />
                    <p className="">Bank Transfer</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-4">{tabContent[selectedTab]}</div>
        </div>
      </div>
    </>
  );
};

export default PaymentTab;
