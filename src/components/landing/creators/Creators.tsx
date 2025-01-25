import { NextPage } from "next";
import HeroSectionCreators from "./sections/HeroSection";
import IntroSectionCreators from "./sections/IntroSection";
import HowItWorksSectionCreators from "./sections/HowItWorksSection";
import FeaturesPitchCreators from "./sections/FeaturesPitch";
import CommunityCreators from "./sections/Community";
import CallToActionCreators from "./sections/CallToAction";
import FeaturesCreators from "./sections/Features";
import Footer from "../LandingFooter";

interface Props {}

const Creators: NextPage<Props> = ({}) => {
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
