import FeaturesBg from "@/components/gradient/featuresBg";
import FeatureOneImage from "../../../../../public/images/landing/features-one-image.svg";
import FeatureTwoImage from "../../../../../public/images/landing/features-two-image.svg";

export default function Features() {
  return (
    <>
      <div className="bg-alabaster relative overflow-hidden flex flex-col gap-[30px] px-[40px] sm:px-[6.25rem] py-[50px] sm:py-[80px]">
        <FeaturesBg />
        <div className="flex flex-row-reverse items-center justify-between gap-[30px] z-[2]">
          <div className="">
            <FeatureOneImage />
          </div>

          <div className="">
            <h2 className="text-[3.75rem] font-[600]">
              Immersive Shopping Experience
            </h2>
            <div className="w-[60%]">
              <p className="text-[1.125rem]">
                We’re shaping the future by connecting buyers and consumers with
                the best that African fashion has to offer.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between gap-[80px] z-[2]">
          <div className="">
            <FeatureTwoImage />
          </div>

          <div className="">
            <h2 className="text-[3.75rem] font-[600]">
              Customize Color from available materials
            </h2>
            <div className="w-[60%]">
              <p className="text-[1.125rem]">
                We’re shaping the future by connecting buyers and consumers with
                the best that African fashion has to offer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
