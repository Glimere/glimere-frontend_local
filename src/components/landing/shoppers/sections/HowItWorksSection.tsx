"use client";

import CoverBg from "@/components/gradient/coverBg";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";





const HowItWorksCustom1 =
  "https://res.cloudinary.com/dwnvlaitr/image/upload/v1747449143/how-it-works-custom-one_wqm9mb.svg";
const HowItWorksCustom2 =
  "https://res.cloudinary.com/dwnvlaitr/image/upload/v1747449143/how-it-works-custom-two_yyaayg.svg";
const HowItWorksCustom3 =
  "https://res.cloudinary.com/dwnvlaitr/image/upload/v1747449140/how-it-works-custom-three_pddacj.svg";
const HowItWorksCustom4 =
  "https://res.cloudinary.com/dwnvlaitr/image/upload/v1747449139/how-it-works-custom-four_ipqvne.svg";
const HowItWorksReady1 =
  "https://res.cloudinary.com/dwnvlaitr/image/upload/v1747449143/how-it-works-ready-one_hcolmz.svg";
const HowItWorksReady2 =
  "https://res.cloudinary.com/dwnvlaitr/image/upload/v1747449143/how-it-works-ready-two_dao3tm.svg";
const HowItWorksReady3 =
  "https://res.cloudinary.com/dwnvlaitr/image/upload/v1747449147/how-it-works-ready-three_ikqebi.svg";

const stepsData = [
  {
    tab: 0,
    steps: [
      {
        title: "Choose Your Design",
        description:
          "Browse our extensive collection of designs or work with a designer to create a truly unique piece.",
        imageUrl: HowItWorksCustom1,
        reverse: false,
      },
      {
        title: "Personalize Your Style",
        description:
          "Customize your chosen design with your preferred fabric, color, and fit.",
        imageUrl: HowItWorksCustom2,
        reverse: true,
      },
      {
        title: "Visualize your fit",
        description:
          "Experience your design in 3D to visualize the final product.",
        imageUrl: HowItWorksCustom3,
        reverse: false,
      },
      {
        title: "Order and Delivery",
        description:
          "Place your order and track your garment’s journey from design to delivery.",
        imageUrl: HowItWorksCustom4,
        reverse: true,
      },
    ],
  },
  {
    tab: 1,
    steps: [
      {
        title: "Browse Our Collection",
        description:
          "Discover ready-made garments that match your style and preference.",
        imageUrl: HowItWorksReady1,
        reverse: true,
      },
      {
        title: "Visualize Your Fit",
        description:
          "Experience your apparel in 3D to visualize the look and even try-on.",
        imageUrl: HowItWorksReady2,
        reverse: false,
      },
      {
        title: "Checkout and Delivery",
        description:
          "Complete your purchase and track your order to your doorstep.",
        imageUrl: HowItWorksReady3,
        reverse: true,
      },
    ],
  },
];

export default function HowItWorksSection() {
  const [tab, setTab] = useState(0);

  return (
    <div className="relative flex justify-center w-full overflow-hidden py-[50px]sm:py-[80px] bg-alabaster">
      <div className="absolute top-0 z-[2] h-[426px] w-full rotate-180 bg-body-gradient"></div>
      <CoverBg />
      <div className="max-w-[1440px] w-full flex flex-col gap-[0px] sm:gap-[100px]">
        <div className="z-[2] flex flex-col items-center gap-[20px] px-[1.4rem] sm:px-[6.25rem]">
          <h1 className="text-[2rem] font-[700] text-dark sm:text-[3.357rem]">
            How It Works
          </h1>
          <div className="flex w-[230px] flex-row items-center justify-center">
            <div className="flex flex-row gap-[20px] sm:gap-[50px]">
              {stepsData.map((_, index) => (
                <div
                  key={index}
                  className={`duration-150 hover:border-gray-400 ${tab === index ? "border-primary-100" : "border-transparent"} border-b-[3px] border-solid`}
                >
                  <p
                    className="text-dark-100 cursor-pointer text-[14px] font-medium sm:text-[15px]"
                    onClick={() => setTab(index)}
                  >
                    {index === 0 ? "Custom-made" : "Ready-made"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="z-[2] flex flex-col gap-6 px-[1.4rem] sm:gap-12 sm:px-[6.25rem]">
          {stepsData[tab].steps.map((step, idx) => (
            <motion.div
              key={idx}
              className={`flex flex-col ${step.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} mb-[40px] items-center gap-0 sm:gap-[6.25rem]`}
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative flex h-[18rem] w-[50%] items-center justify-center">
                <div
                  className={`absolute h-[26rem] w-[44.1875rem] ${idx == 0 ? "sm:h-[21rem]" : "sm:h-[25rem]"} lg:flex-1`}
                >
                  <Image
                    src={step.imageUrl}
                    alt={step.title}
                    fill
                    className="h-fit scale-50 object-contain sm:scale-100"
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-[20px]">
                <h2 className="text-[2.375rem] font-[800] text-dark">
                  {step.title}
                </h2>
                <p className="text-[1.1rem] font-[400] leading-[1.5rem] text-dark sm:text-[1.5rem] sm:leading-[1.875rem]">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}