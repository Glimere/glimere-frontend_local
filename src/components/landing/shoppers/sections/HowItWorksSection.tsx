"use client";

import HowItWorksCustom1 from "../../../../../public/images/landing/how-it-works-custom-one.svg";
import HowItWorksCustom2 from "../../../../../public/images/landing/how-it-works-custom-two.svg";
import HowItWorksCustom3 from "../../../../../public/images/landing/how-it-works-custom-three.svg";
import HowItWorksCustom4 from "../../../../../public/images/landing/how-it-works-custom-four.svg";
import HowItWorksReady1 from "../../../../../public/images/landing/how-it-works-ready-one.svg";
import HowItWorksReady2 from "../../../../../public/images/landing/how-it-works-ready-two.svg";
import HowItWorksReady3 from "../../../../../public/images/landing/how-it-works-ready-three.svg";

import { useState } from "react";
import CoverBg from "@/components/gradient/coverBg";

export default function HowItWorksSection() {
  const [tab, setTab] = useState(0);

  return (
    <>
      <div className="relative bg-alabaster overflow-hidden flex flex-col gap-[100px] justify-between items-center px-[40px] sm:px-[6.25rem] py-[50px] sm:py-[80px]">
        <div className="absolute top-0 w-full h-[426px] bg-body-gradient rotate-180 z-[2]"></div>
        <CoverBg />
        <div className="flex flex-col gap-[20px] z-[2] items-center">
          <h1 className="text-[3.357rem] text-dark font-[700] ">
            How It Works
          </h1>
          <div className="flex flex-row w-[230px] items-center justify-center">
            <div className="flex flex-row gap-[20px] sm:gap-[50px]">
              <div
                className={`hover:border-gray-400 duration-150 ${
                  tab === 0 ? "border-primary-100" : "border-transparent"
                } border-solid border-b-[3px]`}
              >
                <p
                  className={`text-dark-100 text-[14px] sm:text-[15px] font-medium cursor-pointer`}
                  onClick={() => setTab(0)}
                >
                  Custom-made
                </p>
              </div>
              <div
                className={`hover:border-gray-400 duration-150 ${
                  tab === 1 ? "border-primary-100" : "border-transparent"
                } border-solid border-b-[3px]`}
              >
                <p
                  className={`text-dark-100 text-[14px] sm:text-[15px] font-medium cursor-pointer`}
                  onClick={() => setTab(1)}
                >
                  Ready-made
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="z-[2]">
          <div
            className={`flex flex-col gap-[40px] ${
              tab === 0 ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-row gap-[6.25rem] items-center">
              <div className="w-[34.1875rem] h-[26.625rem]">
                <HowItWorksCustom1 />
              </div>

              <div className="flex flex-col gap-[20px]">
                <h2 className="text-[2.375rem] text-dark font-[800]">
                  Choose Your Design
                </h2>
                <p className="text-[1.5rem] text-dark font-[400] leading-[1.875rem]">
                  Browse our extensive collection of designs or work with a
                  designer to create a truly unique piece.
                </p>
              </div>
            </div>

            <div className="flex flex-row-reverse gap-[6.25rem] items-center">
              <div className="w-[34.1875rem] h-[26.625rem]">
                <HowItWorksCustom2 className="" />
              </div>

              <div className="flex flex-col gap-[20px] items-end">
                <h2 className="text-[2.375rem] text-dark font-[800] text-right">
                  Personalize Your Style
                </h2>
                <p className="text-[1.5rem] text-dark font-[400] leading-[1.875rem] text-right">
                  Customize your chosen design with your preferred fabric,
                  color, and fit.
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-[6.25rem] items-center">
              <div className="w-[34.1875rem] h-[26.625rem]">
                <HowItWorksCustom3 className="" />
              </div>

              <div className="flex flex-col gap-[20px]">
                <h2 className="text-[2.375rem] text-dark font-[800]">
                  Visualize your fit
                </h2>
                <p className="text-[1.5rem] text-dark font-[400] leading-[1.875rem]">
                  Experience your design in 3D to visualize the final product.
                </p>
              </div>
            </div>

            <div className="flex flex-row-reverse gap-[6.25rem] items-center">
              <div className="w-[34.1875rem] h-[26.625rem]">
                <HowItWorksCustom4 className="" />
              </div>

              <div className="flex flex-col gap-[20px] items-end">
                <h2 className="text-[2.375rem] text-dark font-[800] text-right">
                  Order and Delivery
                </h2>
                <p className="text-[1.5rem] text-dark font-[400] leading-[1.875rem] text-right">
                  Place your order and track your garment&rsquo;s journey from
                  design to delivery.
                </p>
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col gap-[40px] ${
              tab === 1 ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-row-reverse gap-[6.25rem] items-center">
              <div className="w-[34.1875rem] h-[26.625rem]">
                <HowItWorksReady1 className="" />
              </div>

              <div className="flex flex-col gap-[20px] items-end">
                <h2 className="text-[2.375rem] text-dark font-[800] text-right">
                  Browse Our Collection
                </h2>
                <p className="text-[1.5rem] text-dark font-[400] leading-[1.875rem] text-right">
                  Customize your chosen design with your preferred fabric,
                  color, and fit.
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-[6.25rem] items-center">
              <div className="w-[34.1875rem] h-[26.625rem]">
                <HowItWorksReady2 className="" />
              </div>

              <div className="flex flex-col gap-[20px]">
                <h2 className="text-[2.375rem] text-dark font-[800]">
                  Visualize Your Fit
                </h2>
                <p className="text-[1.5rem] text-dark font-[400] leading-[1.875rem]">
                  Experience your apparel in 3D to visualize the look and even
                  try-on.
                </p>
              </div>
            </div>

            <div className="flex flex-row-reverse gap-[6.25rem] items-center">
              <div className="w-[34.1875rem] h-[26.625rem]">
                <HowItWorksReady3 className="" />
              </div>

              <div className="flex flex-col gap-[20px] items-end">
                <h2 className="text-[2.375rem] text-dark font-[800] text-right">
                  Checkout and Delivery
                </h2>
                <p className="text-[1.5rem] text-dark font-[400] leading-[1.875rem] text-right">
                  Complete your purchase and track your order to your doorstep.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
