import Link from "next/link";
import Platform from "../../../../../public/images/landing/creators/connectCreators.svg";
import Discord from "../../../../../public/images/landing/discord.svg";
import AnimatedSVG from "../../AnimatedCreatorsSvg";

export default function FeaturesPitchCreators() {
  return (
    <>
      <div className="bg-light px-[1.4rem] sm:px-[8.44rem] py-[80px] flex flex-col lg:flex-row items-center justify-between gap-[60px] overflow-hidden">
        <div className="h-[39.5rem] w-[21.5rem] scale-75 sm:scale-100">
          <AnimatedSVG />
        </div>

        <div className="flex flex-col gap-[30px] justify-center">
          <div className="flex flex-col gap-[50px] items-center sm:items-start">
            <div className="">
              <p className="text-[1.9rem] md:text-[2.9rem] text-center lg:text-left lg:text-[4rem] leading-tight font-bold">
                Join our community. <span className="text-primary-100">Share ideas</span>,
                <span className="text-primary-100">collaborate</span>, and <span className="text-primary-100">learn</span> together.
              </p>
            </div>


            <Link href="https://discord.gg/zSMSJymv" className="self-auto md:self-center lg:self-start">
              <div className="bg-[#3f49b9] hover:bg-[#3f49b9] text-light duration-100 cursor-pointer gap-[20px] sm:gap-[40px] rounded-full py-[0.5rem] px-[2rem] sm:px-[4rem] flex flex-row">
                <p className="text-[1rem] sm:text-[1.8rem] self-center font-bold text-center ">
                  Join Community
                </p>
                <div className="w-[40px]">
                  <Discord className="sm:w-auto w-full h-full" viewBox="0 0 57 57" preserveAspectRatio="xMidYMid meet" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
