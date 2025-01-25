"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import CoverBg from "@/components/gradient/coverBg";
import HowItWorksCustom1 from "../../../../../public/images/landing/creators/how-it-works-custom-creators-one.svg";
import HowItWorksCustom2 from "../../../../../public/images/landing/creators/how-it-works-custom-creators-two.svg";
import HowItWorksCustom3 from "../../../../../public/images/landing/creators/how-it-works-custom-creators-three.svg";
import HowItWorksCustom4 from "../../../../../public/images/landing/creators/how-it-works-custom-creators-four.svg";
import HowItWorksReady1 from "../../../../../public/images/landing/creators/how-it-works-ready-creators-one.svg";
import HowItWorksReady2 from "../../../../../public/images/landing/creators/how-it-works-ready-creators-two.svg";
import HowItWorksReady3 from "../../../../../public/images/landing/creators/how-it-works-ready-creators-three.svg";

const stepsData = [
  {
    tab: 0,
    steps: [
      {
        title: "Design",
        description:
          "Create your unique design by collaborating with our in-house team or discover designs made by our in-house design team that aligns with your skills. Could be image upload or illustration.",
        Component: HowItWorksCustom1,
        reverse: false,
      },
      {
        title: "Upload",
        description:
          "Showcase your unique designs on your Glimere storefront.",
        Component: HowItWorksCustom2,
        reverse: true,
      },
      {
        title: "Sell",
        description:
          "Connect with customers and receive orders directly through your Glimere storefront or your personal website or build a trending fashion product and attract customers.",
        Component: HowItWorksCustom3,
        reverse: false,
      },
      {
        title: "Fulfill",
        description:
          "Focus on your creative magic while Glimere takes care of packaging, payments, and shipping. You get paid your set price for your service.",
        Component: HowItWorksCustom4,
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
          "Customize your chosen design with your preferred fabric, color, and fit.",
        Component: HowItWorksReady1,
        reverse: true,
      },
      {
        title: "Visualize Your Fit",
        description:
          "Experience your apparel in 3D to visualize the look and even try-on.",
        Component: HowItWorksReady2,
        reverse: false,
      },
      {
        title: "Checkout and Delivery",
        description:
          "Complete your purchase and track your order to your doorstep.",
        Component: HowItWorksReady3,
        reverse: true,
      },
    ],
  },
];

export default function HowItWorksSectionCreators() {
  const [tab, setTab] = useState(0);

  return (
    <div className="relative bg-alabaster overflow-hidden flex flex-col gap-[100px] py-[50px] sm:py-[80px]">
      <div className="absolute top-0 w-full h-[426px] bg-body-gradient rotate-180 z-[2]"></div>
      <CoverBg />
      <div className="flex flex-col gap-[20px] z-[2] items-center px-[1.4rem] sm:px-[6.25rem]">
        <h1 className="text-[2rem] sm:text-[3.357rem] text-dark font-[700]">
          How It Works
        </h1>
        <div className="flex flex-row w-[230px] items-center justify-center">
          <div className="flex flex-row gap-[20px] sm:gap-[50px]">
            {["Custom-made", "Ready-made"].map((label, index) => (
              <div
                key={index}
                className={`hover:border-gray-400 duration-150 ${
                  tab === index ? "border-primary-100" : "border-transparent"
                } border-solid border-b-[3px]`}
              >
                <p
                  className="text-dark-100 text-[14px] sm:text-[15px] font-medium cursor-pointer"
                  onClick={() => setTab(index)}
                >
                  {label}
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
            className={`flex flex-col ${
              step.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
            } gap-[6.25rem] items-center mb-[40px]`}
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-[34.1875rem] h-[20rem] sm:h-[26.625rem]">
              <step.Component className="scale-50 sm:scale-100"/>
            </div>
            <div className="flex flex-col gap-[20px]">
              <h2 className="text-[2.375rem] text-dark font-[800]">
                {step.title}
              </h2>
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
