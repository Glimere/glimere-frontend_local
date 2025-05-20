"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import CoverBg from "@/components/gradient/coverBg";
import Image from "next/image";

const HowItWorksCustom1 = "https://res.cloudinary.com/dwnvlaitr/image/upload/v1747449143/how-it-works-custom-one_wqm9mb.svg";
const HowItWorksCustom2 = "https://res.cloudinary.com/dwnvlaitr/image/upload/v1747449143/how-it-works-custom-two_yyaayg.svg";
const HowItWorksCustom3 = "https://res.cloudinary.com/dwnvlaitr/image/upload/v1747449140/how-it-works-custom-three_pddacj.svg";
const HowItWorksCustom4 = "https://res.cloudinary.com/dwnvlaitr/image/upload/v1747449139/how-it-works-custom-four_ipqvne.svg";
const HowItWorksReady1 = "https://res.cloudinary.com/dwnvlaitr/image/upload/v1747449143/how-it-works-ready-one_hcolmz.svg";
const HowItWorksReady2 = "https://res.cloudinary.com/dwnvlaitr/image/upload/v1747449143/how-it-works-ready-two_dao3tm.svg";
const HowItWorksReady3 = "https://res.cloudinary.com/dwnvlaitr/image/upload/v1747449147/how-it-works-ready-three_ikqebi.svg";

const stepsData = [
  {
    tab: 0,
    steps: [
      {
        title: "Choose Your Design",
        description: "Browse our extensive collection of designs or work with a designer to create a truly unique piece.",
        imageUrl: HowItWorksCustom1,
        reverse: false,
      },
      {
        title: "Personalize Your Style",
        description: "Customize your chosen design with your preferred fabric, color, and fit.",
        imageUrl: HowItWorksCustom2,
        reverse: true,
      },
      {
        title: "Visualize your fit",
        description: "Experience your design in 3D to visualize the final product.",
        imageUrl: HowItWorksCustom3,
        reverse: false,
      },
      {
        title: "Order and Delivery",
        description: "Place your order and track your garment’s journey from design to delivery.",
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
        description: "Discover ready-made garments that match your style and preference.",
        imageUrl: HowItWorksReady1,
        reverse: true,
      },
      {
        title: "Visualize Your Fit",
        description: "Experience your apparel in 3D to visualize the look and even try-on.",
        imageUrl: HowItWorksReady2,
        reverse: false,
      },
      {
        title: "Checkout and Delivery",
        description: "Complete your purchase and track your order to your doorstep.",
        imageUrl: HowItWorksReady3,
        reverse: true,
      },
    ],
  },
];

export default function HowItWorksSection() {
  const [tab, setTab] = useState(0);

  return (
    <div className="relative bg-alabaster overflow-hidden flex flex-col gap-[0px] sm:gap-[100px] py-[50px] sm:py-[80px]">
      <div className="absolute top-0 w-full h-[426px] bg-body-gradient rotate-180 z-[2]"></div>
      <CoverBg />
      <div className="flex flex-col gap-[20px] z-[2] items-center px-[1.4rem] sm:px-[6.25rem]">
        <h1 className="text-[2rem] sm:text-[3.357rem] text-dark font-[700]">How It Works</h1>
        <div className="flex flex-row w-[230px] items-center justify-center">
          <div className="flex flex-row gap-[20px] sm:gap-[50px]">
            {stepsData.map((_, index) => (
              <div
                key={index}
                className={`hover:border-gray-400 duration-150 ${tab === index ? "border-primary-100" : "border-transparent"} border-solid border-b-[3px]`}
              >
                <p
                  className="text-dark-100 text-[14px] sm:text-[15px] font-medium cursor-pointer"
                  onClick={() => setTab(index)}
                >
                  {index === 0 ? "Custom-made" : "Ready-made"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="z-[2] px-[1.4rem] sm:px-[6.25rem]">
        {stepsData[tab].steps.map((step, idx) => (
          <motion.div
            key={idx}
            className={`flex flex-col ${step.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-0 sm:gap-[6.25rem] items-center mb-[40px]`}
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex-1 relative w-[44.1875rem] h-[26rem] sm:h-[29.625rem]">
              <Image
                src={step.imageUrl}
                alt={step.title}
                fill
                className="object-contain scale-50 sm:scale-100 h-fit"
              />
            </div>
            <div className="flex-1 flex flex-col gap-[20px]">
              <h2 className="text-[2.375rem] text-dark font-[800]">{step.title}</h2>
              <p className="text-[1.1rem] sm:text-[1.5rem] text-dark font-[400] leading-[1.5rem] sm:leading-[1.875rem]">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
