import Discord from "../../../../../public/images/landing/discord.svg";
import community from "../../../../../public/images/landing/community.png";
import Image from "next/image";

export default function Community() {
  return (
    <>
      <div className="bg-white px-[40px] sm:px-[6.25rem] py-[50px] sm:py-[80px] flex flex-col gap-[30px]">
        <div
          className="relative w-full flex flex-row items-end justify-between h-[36.625rem] rounded-[1.5625rem] p-[4rem] bg-center bg-cover bg-no-repeat overflow-hidden"
          style={{ backgroundImage: `url(${community.src})` }}
        >
          <div className="flex flex-col gap-[20px] z-[2]">
            <h1 className="text-white text-[3.375rem] font-[600]">
              Join Our Fashion Community
            </h1>
            <p className="text-white text-[1.5625rem]">
              We connects you with a global audience of fashion enthusiasts
              eager to discover unique and innovative styles. Showcase your
              creations and connect with customers worldwide, expanding your
              brand and influence beyond borders.
            </p>
          </div>
          <div className="absolute bottom-0 h-[20rem] w-full bg-black-gradient z-[1]"></div>
        </div>
        <div className="bg-[#5865F2] self-center gap-[40px] rounded-full py-[1.38rem] px-[5.75rem] flex flex-row">
          <h2 className="text-[2.625rem] font-[600] text-center text-white">
            Join Our Community
          </h2>
          <Discord />
        </div>
      </div>
    </>
  );
}
