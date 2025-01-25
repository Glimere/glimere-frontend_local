import FeaturesBg from "@/components/gradient/featuresBg";
import FeatureOneImage from "../../../../../public/images/landing/features-one-image.svg";
import FeatureTwoImage from "../../../../../public/images/landing/features-two-image.svg";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <>
      <div className="bg-alabaster relative overflow-hidden flex flex-col md:gap-[100px] lg:gap-[30px] px-[1.4rem] sm:px-[6.25rem] py-[50px] sm:py-[80px]">
        <FeaturesBg />
        <motion.div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-[30px] z-[2]  md:mr-[-10%]"
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          <div className="scale-50 sm:scale-100 h-[400px] sm:h-auto">
            <FeatureOneImage  
            // className="h-full w-full" 
            // preserveAspectRatio="xMidYMid meet" 
            // viewBox="0 0 585 585"
            />
          </div>

          <div className="">
            <h2 className="text-[2rem] sm:text-[3.75rem] font-[600]">
              Immersive Shopping Experience
            </h2>
            <div className="w-[60%]">
              <p className="text-[1.125rem]">
                We’re shaping the future by connecting buyers and consumers with
                the best that African fashion has to offer.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div className="flex flex-col lg:flex-row items-center justify-between gap-[80px] z-[2]  md:mr-[-10%]"
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          <div className="scale-50 sm:scale-100 h-[400px] sm:h-auto">
            <FeatureTwoImage />
          </div>

          <div className="">
            <h2 className="text-[2rem] sm:text-[3.75rem] font-[600]">
              Customize Color from available materials
            </h2>
            <div className="w-[60%]">
              <p className="text-[1.125rem]">
                We’re shaping the future by connecting buyers and consumers with
                the best that African fashion has to offer.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
