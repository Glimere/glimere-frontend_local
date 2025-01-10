import { NextPage } from "next";
import { useState } from "react";
import { ArrowRight } from "lucide-react"; // Lucide icons

interface Props {
  checkoutTabSwitch: number;
  setCheckoutTabSwitch: any;
}

const StepsIndicator: NextPage<Props> = ({
  checkoutTabSwitch,
  setCheckoutTabSwitch,
}) => {
  const steps = ["Shipping", "Payment", "Confirm"];
  return (
    <div className="w-full h-[70px] flex justify-center items-center">
      <div className="w-[50%] flex flex-row justify-between">
        {steps.map((step, index) => (
          <>
            <div
              key={index}
              className="flex-[1] flex justify-center items-center"
            >
              <div className="flex flex-row">
                <div
                  className={`h-[20px] w-[20px] mr-[10px] flex justify-center items-center rounded-full border-[1px] border-solid border-black ${
                    checkoutTabSwitch == index + 1
                      ? "bg-primary-100 text-white"
                      : "text-dark"
                  }`}
                  onClick={() => setCheckoutTabSwitch(index + 1)}
                >
                  <p className="text-[10px]">{index + 1}</p>
                </div>
                <h1>{step}</h1>
              </div>
            </div>{" "}
            {index == 2 ? (
              <></>
            ) : (
              <ArrowRight className="w-[20px] h-[20px] text-[#ED7534] cursor-pointer" />
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default StepsIndicator;
