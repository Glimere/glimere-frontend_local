// pages/onboarding.tsx
"use client";

import { useCreatorStore } from "@/store/creatorStore";
import { motion } from "framer-motion";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step5 from "./components/Step5";
import Step6 from "./components/Step6";
import Step7 from "./components/Step7";
import GradientBg from "@/components/gradient/gradientBg";

const steps = [
  Step1,
  Step2,
  Step3,
  Step4,
  Step5,
  Step6,
  Step7,
];

const Onboarding: React.FC = () => {
  const { step } = useCreatorStore();

  const CurrentStep = steps[step - 1];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center"
    >
      <CurrentStep />
    </motion.div>
  );
};

export default Onboarding;
