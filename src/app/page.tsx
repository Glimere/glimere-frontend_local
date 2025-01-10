"use client";

import LandingNav from "@/components/nav/LandingNav";
import React, { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import success from "../../public/images/success.png";
import models from "../../public/images/models.png";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import landingImg from "../../public/images/landingImg.png";
import creatorsPromptImg from "../../public/images/creatorsPromptImg.png";
import InfiniteSlider from "@/components/landing/InfiniteSlider";
import { Canvas } from "@react-three/fiber";
import Model from "@/components/landing/Model";
import Backdrop from "../../public/images/assortment-abstract-design-elements.jpg";
import { slideImages } from "@/data/slideImages";
import { reviewsData } from "@/data/reviewsData";
import CaseStudySlide from "@/components/landing/CaseStudySlide";
import { modelData } from "@/data/modelData";
import Processlide from "@/components/landing/Processlide";
import Creators from "@/components/landing/Creators";
import { slide } from "@/types";
import HeroSection from "@/components/landing/shoppers/sections/HeroSection";
import IntroSection from "@/components/landing/shoppers/sections/IntroSection";
import HowItWorksSection from "@/components/landing/shoppers/sections/HowItWorksSection";
import FeaturesPitch from "@/components/landing/shoppers/sections/FeaturesPitch";
import Features from "@/components/landing/shoppers/sections/Features";
import Community from "@/components/landing/shoppers/sections/Community";
import CallToAction from "@/components/landing/shoppers/sections/CallToAction";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState("shoppers");
  const [submitted, setSubmitted] = useState(false);

  const cancelButtonRef = useRef(null);

  useEffect(() => {
    setSubmitted(false);
  }, [open]);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <LandingNav setOpen={setOpen} setPage={setPage} page={page} />

      {page === "shoppers" ? (
        <>
          <HeroSection />
          <IntroSection />
          <HowItWorksSection />
          <FeaturesPitch />
          <Features />
          <Community />
          <CallToAction />
        </>
      ) : page === "creators" ? (
        <Creators setOpen={setOpen} />
      ) : (
        ""
      )}
    </>
  );
}
