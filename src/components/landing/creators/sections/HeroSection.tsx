import GradientBg from "@/components/gradient/gradientBg";
import Image from "next/image";
export default function HeroSectionCreators() {
  return (
    <div className="relative h-[350px] lg:h-[110vh] bg-white-200 bg-cover bg-center bg-no-repeat w-full flex flex-row items-end overflow-hidden">
      <GradientBg />
      <div className="relative w-full flex flex-col items-center justify-end">
        <div className="z-[4] relative mb-[15px]">
          <h1 className="text-[10vw] sm:text-[8.1vw] text-center text-dark-100 leading-[12vw] sm:leading-[8vw] mb-[-10px] sm:mb-[-70px] font-[600] sm:font-semibold">
            <span className="text-primary-100">Create</span> Fashion,
            <br></br>On Your Terms
          </h1>
        </div>
        <div className="absolute bottom-0 w-full h-[85%] bg-hero-gradient z-[5]"></div>
        <div className="h-[20%] w-full mt-[-7.5%] z-[6]">
          <Image
            height={2000}
            width={2000}
            alt="Background Image"
            src="/images/landing/background/backgroundImgCreators.png"
            className="w-full object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
