import Discord from "../../../../../public/images/landing/discord.svg";
import community from "../../../../../public/images/landing/shoppers_community.png";
import Link from "next/link";

export default function Community() {
  return (
    <>
      <div className="bg-light px-[1.4rem] sm:px-[6.25rem] py-[50px] sm:py-[80px] flex flex-col gap-[30px]">
        <div
          className="relative w-full flex flex-row items-end justify-between h-[36.625rem] rounded-[1.5625rem] bg-center bg-cover bg-no-repeat overflow-hidden"
          style={{ backgroundImage: `url(${community.src})` }}
        >
          <div className="flex flex-col gap-[20px] z-[2] p-[1rem] sm:p-[4rem]">
            <h1 className="text-white text-[2rem] sm:text-[3.375rem] font-[600]">
              Join Our Fashion Community
            </h1>
            <p className="text-white text-[1rem] sm:text-[1.5625rem]">
              Connect with other fashion enthusiasts, share your style inspiration, and discover exclusive offers and trends. Be part of the Glimere community and experience the joy of unique fashion together.
            </p>
            <Link href="https://discord.gg/zSMSJymv" className="self-auto sm:self-start">
              <div className="bg-light hover:bg-[#3f49b9] text-[#5865F2] hover:text-light duration-100 cursor-pointer sm:gap-[40px] rounded-full py-[0.5rem] px-[2rem] sm:px-[4rem] flex flex-row items-center justify-center">
                <div className="flex gap-[20px] items-center self-center">
                  <p className="text-[1.2rem] sm:text-[1.8rem] self-center font-bold text-center ">
                  Join Community
                </p>
                <div className="w-[40px]">
                  <Discord className="sm:w-auto w-full h-full" viewBox="0 0 57 57" preserveAspectRatio="xMidYMid meet" />
                </div> 
                </div>
               
              </div>
            </Link>
          </div>
          <div className="absolute bottom-0 h-[100vw] w-full bg-black-gradient z-[1]"></div>
        </div>

      </div>
    </>
  );
}
