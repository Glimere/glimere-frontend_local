import { NextPage } from "next";
import HeroSectionCreators from "./sections/HeroSection";
import IntroSectionCreators from "./sections/IntroSection";
import HowItWorksSectionCreators from "./sections/HowItWorksSection";
import FeaturesPitchCreators from "./sections/FeaturesPitch";
import CallToActionCreators from "./sections/CallToAction";
import FeaturesCreators from "./sections/Features";

const Creators: NextPage = () => {
  return (
    <>
      <HeroSectionCreators />
      <IntroSectionCreators />
      <FeaturesCreators />
      <HowItWorksSectionCreators />
      <FeaturesPitchCreators />
      <CallToActionCreators />
    </>
  );
};

export default Creators;
