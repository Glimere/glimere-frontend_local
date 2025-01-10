import GradientBg from "@/components/gradient/gradientBg";
import Image from "next/image";
export default function HeroSection() {
  return (
    <div className="relative h-[70vh] sm:h-[110vh] sm:min-h-[100vh] bg-white-200 bg-cover bg-center bg-no-repeat w-full flex flex-row items-end overflow-hidden">
      <GradientBg />
      <div className="relative w-full flex flex-col items-center justify-end">
        <div className="z-[4] relative mb-[15px]">
          <h1 className="text-[45px] sm:text-[8.1vw] text-center text-dark-100 leading-[8vw] mb-[20px] font-[600] sm:font-semibold">
            <span className="text-primary-100">Shop</span> Fashion, From
            <br></br>Designer to <span className="text-primary-100">Door</span>
          </h1>
        </div>
        <div className="absolute bottom-0 w-full h-[426px] bg-hero-gradient z-[5]"></div>
        <div className="h-[20%] w-full mt-[-7.5%] z-[6]">
          <Image
            height={2000}
            width={2000}
            alt="Background Image"
            src="/images/landing/background/backgroundImg.png"
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
