import Image from "next/image";
import Link from "next/link";



import AnimatedSVG from "../../AnimatedCreatorsSvg";


export default function FeaturesPitchCreators() {
  const Discord =
    "https://res.cloudinary.com/dwnvlaitr/image/upload/v1747449128/discord_hkhii2.svg";

  return (
    <div className="flex justify-center w-full">
      <div className="flex max-w-[1440px] flex-col items-center justify-center gap-[80px] overflow-hidden bg-light px-[1.4rem] py-[80px] sm:px-[8.44rem] lg:flex-row">
        <div className="h-[39.5rem] w-[21.5rem] scale-75 sm:scale-100">
          <AnimatedSVG />
        </div>

        <div className="flex flex-col justify-center gap-[30px] w-[50%] sm:w-auto">
          <div className="flex flex-col items-center gap-[50px] sm:items-start">
            <div className="">
              <p className="text-center text-[1.9rem] font-bold leading-tight md:text-[2.9rem] lg:text-left lg:text-[4rem]">
                Join our community.{" "}
                <span className="text-primary-100">Share ideas</span>,
                <span className="text-primary-100"> collaborate</span>, and{" "}
                <span className="text-primary-100">learn</span> together.
              </p>
            </div>

            <Link
              href="https://discord.gg/zSMSJymv"
              className="self-auto md:self-center lg:self-start"
            >
              <div className="flex cursor-pointer flex-row gap-[20px] rounded-full bg-[#3f49b9] px-[2rem] py-[0.5rem] text-light duration-100 hover:bg-[#3f49b9] sm:gap-[40px] sm:px-[4rem]">
                <p className="self-center whitespace-nowrap text-center text-[1rem] font-bold sm:text-[1.8rem]">
                  Join Community
                </p>
                <div className="relative aspect-square w-[40px]">
                  <Image
                    src={Discord}
                    alt="Discord Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}