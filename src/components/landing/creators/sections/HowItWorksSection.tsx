"use client";

import CoverBg from "@/components/gradient/coverBg";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

// import HowItWorksCustom1 from "../../../../../public/images/landing/creators/how-it-works-custom-creators-one.svg";
// import HowItWorksCustom2 from "../../../../../public/images/landing/creators/how-it-works-custom-creators-two.svg";
// import HowItWorksCustom3 from "../../../../../public/images/landing/creators/how-it-works-custom-creators-three.svg";
// import HowItWorksCustom4 from "../../../../../public/images/landing/creators/how-it-works-custom-creators-four.svg";
// import HowItWorksReady1 from "../../../../../public/images/landing/creators/how-it-works-ready-creators-one.svg";
// import HowItWorksReady2 from "../../../../../public/images/landing/creators/how-it-works-ready-creators-two.svg";
// import HowItWorksReady3 from "../../../../../public/images/landing/creators/how-it-works-ready-creators-three.svg";

const HowItWorksCustom1 =
  "https://res.cloudinary.com/dwnvlaitr/image/upload/v1747449167/how-it-works-custom-creators-one_jzoiki.svg";
const HowItWorksCustom2 =
  "https://res.cloudinary.com/dwnvlaitr/image/upload/v1747449170/how-it-works-custom-creators-two_yracvl.svg";
const HowItWorksCustom3 =
  "https://res.cloudinary.com/dwnvlaitr/image/upload/v1747449169/how-it-works-custom-creators-three_a7k4gk.svg";
const HowItWorksCustom4 =
  "https://res.cloudinary.com/dwnvlaitr/image/upload/v1747449160/how-it-works-custom-creators-four_dyozep.svg";
const HowItWorksReady1 =
  "https://res.cloudinary.com/dwnvlaitr/image/upload/v1747449172/how-it-works-ready-creators-one_edmoxh.svg";
const HowItWorksReady2 =
  "https://res.cloudinary.com/dwnvlaitr/image/upload/v1747449172/how-it-works-ready-creators-two_dmxkbv.svg";
const HowItWorksReady3 =
  "https://res.cloudinary.com/dwnvlaitr/image/upload/v1747449172/how-it-works-ready-creators-three_joudf3.svg";

const stepsData = [
  {
    tab: 0,
    steps: [
      {
        title: "Design",
        description:
          "Create your unique design by collaborating with our in-house team or discover designs made by our in-house design team that aligns with your skills. Could be image upload or illustration.",
        imageUrl: HowItWorksCustom1,
        reverse: false,
      },
      {
        title: "Upload",
        description: "Showcase your unique designs on your Glimere storefront.",
        imageUrl: HowItWorksCustom2,
        reverse: true,
      },
      {
        title: "Sell",
        description:
          "Connect with customers and receive orders directly through your Glimere storefront or your personal website or build a trending fashion product and attract customers.",
        imageUrl: HowItWorksCustom3,
        reverse: false,
      },
      {
        title: "Fulfill",
        description:
          "Focus on your creative magic while Glimere takes care of packaging, payments, and shipping. You get paid your set price for your service.",
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
          "Customize your chosen design with your preferred fabric, color, and fit.",
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

export default function HowItWorksSectionCreators() {
  const [tab, setTab] = useState(0);

  return (
    <div className="relative flex flex-col gap-[100px] overflow-hidden bg-alabaster py-[50px] sm:py-[80px]">
      <div className="absolute top-0 z-[2] h-[426px] w-full rotate-180 bg-body-gradient"></div>
      <CoverBg />
      <div className="z-[2] flex flex-col items-center gap-[20px] px-[1.4rem] sm:px-[6.25rem]">
        <h1 className="text-[2rem] font-[700] text-dark sm:text-[3.357rem]">
          How It Works
        </h1>
        <div className="flex w-[230px] flex-row items-center justify-center">
          <div className="flex flex-row gap-[20px] sm:gap-[50px]">
            {["Custom-made", "Ready-made"].map((label, index) => (
              <div
                key={index}
                className={`duration-150 hover:border-gray-400 ${
                  tab === index ? "border-primary-100" : "border-transparent"
                } border-b-[3px] border-solid`}
              >
                <p
                  className="text-dark-100 cursor-pointer text-[14px] font-medium sm:text-[15px]"
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
            } mb-[40px] items-center gap-0 sm:gap-[6.25rem]`}
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex-1 relative h-[20rem] w-[106.1875rem] sm:h-[26.625rem]">
              <Image
                src={step.imageUrl}
                alt={step.title}
                fill
                className="scale-50 object-contain sm:scale-100"
              />
            </div>
            <div className="flex-1 flex flex-col gap-[20px]">
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
  );
}
