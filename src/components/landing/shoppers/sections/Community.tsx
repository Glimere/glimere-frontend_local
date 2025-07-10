import Image from "next/image";
import Link from "next/link";

export default function Community() {
  return (
    <>
      <div className="flex w-full justify-center">
        <div className="flex max-w-[1440px] flex-col gap-[30px] bg-light px-[1.4rem] py-[50px] sm:px-[6.25rem] sm:py-[80px]">
          <div
            className="relative flex h-[36.625rem] w-full flex-row items-end justify-between overflow-hidden rounded-[1.5625rem] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(https://res.cloudinary.com/dwnvlaitr/image/upload/v1747761925/community_ostquz.jpg)`,
            }}
          >
            <div className="z-[2] flex flex-col gap-[20px] p-[1rem] sm:p-[4rem]">
              <h1 className="text-[2rem] font-[600] text-white sm:text-[3.375rem]">
                Join Our Fashion Community
              </h1>
              <p className="text-[1rem] text-white sm:text-[1.5625rem]">
                Connect with other fashion enthusiasts, share your style
                inspiration, and discover exclusive offers and trends. Be part
                of the Glimere community and experience the joy of unique
                fashion together.
              </p>
              <Link
                href="https://discord.gg/zSMSJymv"
                className="self-auto sm:self-start"
              >
                <div className="flex cursor-pointer flex-row items-center justify-center rounded-full bg-light px-[2rem] py-[0.5rem] text-[#5865F2] duration-100 hover:bg-[#3f49b9] hover:text-light sm:gap-[40px] sm:px-[4rem]">
                  <div className="flex items-center gap-[20px] self-center">
                    <p className="self-center text-center text-[1.2rem] font-bold sm:text-[1.8rem]">
                      Join Community
                    </p>
                    <div className="relative h-[40px] w-[40px]">
                      <Image
                        src="https://res.cloudinary.com/dwnvlaitr/image/upload/v1747449128/discord_hkhii2.svg"
                        alt="Discord Icon"
                        fill={true}
                        className="fill-[#5865F2] object-contain hover:fill-white"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="absolute bottom-0 z-[1] h-[100vw] w-full bg-black-gradient"></div>
          </div>
        </div>
      </div>
    </>
  );
}
