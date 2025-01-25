import { NextPage } from "next";
import IntroSection from "./sections/IntroSection";
import HowItWorksSection from "./sections/HowItWorksSection";
import FeaturesPitch from "./sections/FeaturesPitch";
import Features from "./sections/Features";
import Community from "./sections/Community";
import CallToAction from "./sections/CallToAction";
import HeroSection from "./sections/HeroSection";

interface Props {}

const Shoppers: NextPage<Props> = ({}) => {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <HowItWorksSection />
      <FeaturesPitch />
      <Features />
      <Community />
      <CallToAction />
    </>
  );
};

export default Shoppers;
