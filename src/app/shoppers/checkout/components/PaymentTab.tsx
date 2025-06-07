"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import useOrderStore from "@/store/orderStore";
import useUserStore from "@/store/userStore";
import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { toast } from "sonner";



import Bank from "../../../../../public/images/bank.svg";
import Card from "../../../../../public/images/card.svg";


const paymentOptions = {
  bank: {
    name: "Bank",
    availability: true,
  },
  banktransfer: {
    name: "Bank Transfer",
    availability: true,
  },
  card: {
    name: "Card",
    availability: false,
    message:
      "We apologize for the inconvenience, but card payments are temporarily unavailable. Kindly select an alternative payment method. Thank you for your understanding!",
  },
};

const PaymentTab = () => {
  const [selectedTab, setSelectedTab] = useState<
    "bank" | "banktransfer" | "card"
  >("bank");
  interface Bank {
    id: string;
    code: string;
    name: string;
  }

  const [banks, setBanks] = useState<Bank[]>([]);
  const [selectedBankCode, setSelectedBankCode] = useState<string>("");
  const [accountNumber, setAccountNumber] = useState<string>("");
  const [isPayDisabled, setIsPayDisabled] = useState(true);

  const { user } = useUserStore();
  const { selectedOrder } = useOrderStore();

  useEffect(() => {
    // Fetch list of banks
    const fetchBanks = async () => {
      try {
        const response = await fetch(
          `https://api.paystack.co/bank?country=${user?.address.country.toLowerCase()}&pay_with_bank=true`
        );
        const data = await response.json();
        setBanks(data.data || []);
      } catch (error) {
        console.error("Failed to fetch banks", error);
      }
    };

    fetchBanks();
  }, [user?.address.country]);

  useEffect(() => {
    // Enable pay button only if all fields are filled
    setIsPayDisabled(!(selectedBankCode && accountNumber.length >= 10));
  }, [selectedBankCode, accountNumber]);

  const handlePayment = async () => {
    const payload = {
      email: user?.email,
      amount:
        Math.round(
          selectedOrder.total_price +
          (selectedOrder.selected_city.fee === 0
            ? selectedOrder?.shipping_fee
            : selectedOrder.selected_city.fee)
        ) * 100, // Convert to kobo
      bank: {
        code: selectedBankCode,
        account_number: accountNumber,
      },
    };

    try {
      const response = await axios.post(
        "https://api.paystack.co/charge",
        payload,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TEST_PAYSTACK_SECRET_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        const { status, message, data } = response.data;

        if (status && data?.status === "open_url") {
          toast.success("Payment Initiated", {
            description: message
          });

          if (typeof window != 'undefined') {
            window.open(data.url, "_blank");
          }
          
        } else {
          toast.error("Payment Failed", {
            description: message,
          });
        }
      } else {
        toast.error("Payment Failed", {
          description: response.data.message,
        });
      }
    } catch (error) {
      console.error("Payment failed", error);
      toast.error("Error", {
        description: "An error occurred while processing the payment.",
      });
    }
  };

  const tabOptions: Array<"card" | "bank" | "banktransfer"> = [
    "bank",
    "banktransfer",
    "card",
  ];

  const tabContent: {
    [key in "bank" | "banktransfer" | "card"]: JSX.Element;
  } = {
    bank: (
      <motion.div
        key="bank"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col gap-4"
      >
        <p className="text-gray-600 text-center">Pay with your bank account.</p>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-sm">Select Bank</label>
          <Select onValueChange={setSelectedBankCode}>
            <SelectTrigger className="border rounded-md p-3">
              <SelectValue placeholder="Choose a bank" />
            </SelectTrigger>
            <SelectContent>
              {banks.map((bank) => (
                <SelectItem key={bank.id} value={bank.code}>
                  {bank.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {selectedBankCode && (
          <div className="flex flex-col gap-2">
            <Label className="font-semibold text-sm">Account Number</Label>
            <Input
              type="text"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              placeholder="Enter your account number"
              className="border rounded-md p-3"
            />
          </div>
        )}
        <Button
          className="w-full bg-primary-100 mt-4"
          disabled={isPayDisabled}
          onClick={handlePayment}
        >
          Pay Now
        </Button>
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
    card: (
      <motion.div
        key="card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col gap-4"
      >
        {paymentOptions.card.availability ? (
          <>
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
              By providing your card information, you allow Shop Name to charge
              your card for future payments in accordance with the terms.
            </p>
            <Button className="w-full bg-primary-100 mt-4">Pay Now</Button>
          </>
        ) : (
          <p className="text-red-600 text-center">
            {paymentOptions.card.message}
          </p>
        )}
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
            {tabOptions.map((tab: "bank" | "banktransfer" | "card") => (
              <div
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`cursor-pointer flex-1 text-center p-3 rounded-lg transition-all border-solid border-[2px] duration-300 ${selectedTab === tab
                    ? "bg-transparent-white-300 text-dark border-primary-100"
                    : "bg-gray-100 text-dark"
                  }`}
              >
                {tab === "bank" && (
                  <div className="flex flex-col gap-[10px] items-start">
                    <Bank />
                    <p className="">Bank</p>
                  </div>
                )}
                {tab === "banktransfer" && (
                  <div className="flex flex-col gap-[10px] items-start">
                    <Bank />
                    <p className="">Bank Transfer</p>
                  </div>
                )}
                {tab === "card" && (
                  <div className="flex flex-col gap-[10px] items-start">
                    <Card />
                    <p className="">Card</p>
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