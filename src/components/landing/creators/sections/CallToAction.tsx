import GradientBg from "@/components/gradient/gradientBg";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CallToActionCreators() {
  const CtaImage1 =
    "https://res.cloudinary.com/dwnvlaitr/image/upload/v1747449131/cta-image-one_jf1n72.svg";
  const CtaImage2 =
    "https://res.cloudinary.com/dwnvlaitr/image/upload/v1747449129/cta-image-two_gts7ks.svg";
  return (
    <>
      <div className="relative flex h-[250px] flex-row items-center justify-center gap-[100px] overflow-hidden bg-alabaster px-[1.4rem] py-[50px] sm:h-[500px] sm:px-[6.25rem] sm:py-[80px]">
        <GradientBg />
        <div className="absolute top-0 z-[2] h-[426px] w-full rotate-180 bg-body-gradient"></div>
        <div className="absolute bottom-0 z-[2] h-[426px] w-full bg-body-gradient"></div>

        <div className="relative z-[4] flex flex-col items-center gap-[1rem]">
          <div className="flex w-full flex-row justify-center gap-[1rem] sm:gap-[2rem]">
            <div className="flex items-center gap-[1rem] self-center md:w-[17.2rem] md:gap-[1.2rem] lg:gap-[3rem]">
              <span className="whitespace-nowrap text-[1.5rem] font-[600] text-dark md:text-[2.9rem] lg:text-[5rem]">
                Beat the
              </span>
            </div>
            <div className="relative aspect-[364/97] w-[50%] lg:w-[40%]">
              <Image
                src={CtaImage1}
                alt="Call to Action Image 1"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="relative aspect-square w-[14%] lg:w-[10%]">
              <Image
                src={CtaImage2}
                alt="Call to Action Image 2"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="flex flex-row items-center gap-[1rem] md:gap-[1.2rem] lg:gap-[3rem]">
            <Link href="">
              {" "}
              <div className="flex cursor-pointer flex-row items-center gap-[9px] rounded-full bg-primary-100 px-[0.9rem] py-[0.7rem] text-light duration-150 hover:bg-dark sm:gap-[20px] md:px-[1.9rem] lg:px-[4rem] lg:py-[1.2rem]">
                <p className="text-[1rem] md:text-[1.5rem] lg:text-[2rem]">
                  Start selling
                </p>
                <MoveUpRight />
              </div>
            </Link>

            <span className="text-[1.5rem] font-[600] text-dark md:text-[2.9rem] lg:text-[5rem]">
              fashion game
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
