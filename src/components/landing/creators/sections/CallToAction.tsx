import GradientBg from "@/components/gradient/gradientBg";
import CtaImage1 from "../../../../../public/images/landing/cta-image-one.svg";
import CtaImage2 from "../../../../../public/images/landing/cta-image-two.svg";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";

export default function CallToActionCreators() {
  return (
    <>
      <div className="relative h-[250px] sm:h-[500px] bg-alabaster overflow-hidden flex flex-row gap-[100px] justify-center items-center px-[1.4rem] sm:px-[6.25rem] py-[50px] sm:py-[80px]">
        <GradientBg />
        <div className="absolute top-0 w-full h-[426px] bg-body-gradient rotate-180 z-[2]"></div>
        <div className="absolute bottom-0 w-full h-[426px] bg-body-gradient z-[2]"></div>

        <div className="relative flex flex-col gap-[1rem] items-center z-[4]">

          <div className="flex flex-row justify-center w-full">


            <div className="flex flex-row gap-[1rem] md:gap-[1.2rem] lg:gap-[3rem] items-center self-center sm:w-auto w-[17.2rem]">
              <span className="text-[1.5rem] md:text-[2.9rem] lg:text-[5rem] text-dark font-[600]">Beat the</span>
              <div className="w-[45%] md:w-[50%] lg:w-auto">
                <CtaImage1 className="w-full h-full" preserveAspectRatio="xMidYMid meet" viewBox="0 0 364 97" />
              </div>
              <div className="w-[12%] md:w-[14%] lg:w-auto">
                <CtaImage2 className="w-full h-full" preserveAspectRatio="xMidYMid meet" viewBox="0 0 97 97" />
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-[1rem] md:gap-[1.2rem] lg:gap-[3rem] items-center">
            <Link href=""> <div className="py-[0.7rem] lg:py-[1.2rem] px-[0.9rem] md:px-[1.9rem] lg:px-[4rem] flex flex-row items-center gap-[9px] sm:gap-[20px] duration-150 hover:bg-dark cursor-pointer bg-primary-100 text-light rounded-full">
              <p className="text-[1rem] md:text-[1.5rem] lg:text-[2rem]">Start selling</p>
              <MoveUpRight />
            </div>
            </Link>

            <span className="text-[1.5rem] md:text-[2.9rem] lg:text-[5rem] text-dark font-[600]">
              fashion game
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
