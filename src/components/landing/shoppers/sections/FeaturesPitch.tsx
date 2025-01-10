import Creators from "../../../../../public/images/landing/creators.svg";
import Platform from "../../../../../public/images/landing/platform.svg";

export default function FeaturesPitch() {
  return (
    <>
      <div className="bg-white pl-[8.44rem] py-[80px] flex flex-row justify-between gap-[30px]">
        <div className="h-[35rem]">
          <Creators />
        </div>

        <div className="flex flex-col gap-[30px] w-[48rem]">
          <Platform />
          <div className="w-[70%]">
            <p className="text-[1.6rem]">
              Our User Friendly Platform allows you to explore unique styles and
              skills from top Fashion Creators around the world
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
