import Platform from "../../../../../public/images/landing/platform.svg";
import AnimatedSVG from "../../AnimatedCreatorsSvg";

export default function FeaturesPitch() {
  return (
    <>
      <div className="bg-light px-[1.4rem] sm:px-[8.44rem] py-[80px] flex flex-col lg:flex-row justify-between items-center gap-[60px] overflow-hidden">
        <div className="h-[39.5rem] w-[21.5rem] scale-75 sm:scale-100">
          <AnimatedSVG />
        </div>

        <div className="">
          <p className="text-[1.9rem] md:text-[2.9rem] text-center lg:text-left sm:text-[4rem] leading-tight font-bold">
            Explore unique <span className="text-primary-100">styles</span> and
            <span className="text-primary-100"> skills</span> from top Fashion Creators around the world
          </p>
        </div>
      </div>
    </>
  );
}
