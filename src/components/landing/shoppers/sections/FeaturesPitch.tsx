import AnimatedSVG from "../../AnimatedCreatorsSvg";


export default function FeaturesPitch() {
  return (
    <div className="flex w-full justify-center">
      <div className="max-w-[1440px] w-full bg-light flex flex-col items-center justify-center gap-[70px] overflow-hidden px-[1.4rem] py-[80px] sm:px-[8.44rem] lg:flex-row">
        <div className="h-[39.5rem] w-[21.5rem] scale-75 sm:scale-100">
          <AnimatedSVG />
        </div>

        <div className="w-[30%] sm:w-auto">
          <p className="text-center text-[1.9rem] font-bold leading-tight sm:text-[4rem] md:text-[2.9rem] lg:text-left">
            Explore unique <span className="text-primary-100">styles</span> and
            <span className="text-primary-100"> skills</span> from top Fashion
            Creators around the world
          </p>
        </div>
      </div>
    </div>
  );
}