import GradientBg from "@/components/gradient/gradientBg";
import Image from "next/image";





export default function HeroSection() {
  return (
    <div className="bg-white-200 relative flex h-[400px] w-full flex-row items-end justify-center overflow-hidden bg-cover bg-center bg-no-repeat lg:h-[110vh]">
      <GradientBg />
      <div className="w-full max-w-[1440px]">
        <div className="relative flex w-full flex-col items-center justify-end">
          <div className="relative z-[4] mb-[15px]">
            <h1 className="text-dark-100 mb-[20px] text-center text-[10vw] font-[600] leading-[12vw] sm:text-[8.1vw] sm:font-semibold sm:leading-[8vw]">
              <span className="text-primary-100">Shop</span> Fashion, From
              <br></br>Designer to{" "}
              <span className="text-primary-100">Door</span>
            </h1>
          </div>
          <div className="absolute bottom-0 z-[5] h-[85%] w-full bg-hero-gradient"></div>
          <div className="z-[6] mt-[-7.5%] h-[20%] w-full">
            <Image
              height={1000}
              width={1000}
              alt="Background Image"
              src="https://res.cloudinary.com/dwnvlaitr/image/upload/v1747449196/backgroundImg_bqcs2u.png"
              className="w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}