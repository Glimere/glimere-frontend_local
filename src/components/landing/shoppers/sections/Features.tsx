import FeaturesBg from "@/components/gradient/featuresBg";
import { motion } from "framer-motion";
import Image from "next/image";

const FeatureOneImage =
  "https://res.cloudinary.com/dwnvlaitr/image/upload/v1747449132/features-one-image_pqgnjr.svg";
const FeatureTwoImage =
  "https://res.cloudinary.com/dwnvlaitr/image/upload/v1747449136/features-two-image_lbl1ud.svg";

export default function Features() {
  return (
    <div className="relative flex w-full justify-center overflow-hidden bg-alabaster px-[1.4rem] py-[50px] sm:px-[6.25rem] sm:py-[80px]">
      <FeaturesBg />
      <div className="flex w-full max-w-[1440px] flex-col gap-[90px] md:gap-[100px] lg:gap-[30px]">
        <motion.div
          className="z-[2] flex flex-col items-center justify-between gap-[30px] md:mr-[-10%] lg:flex-row-reverse"
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative h-[20rem] w-[20rem] scale-[.8] sm:h-[34rem] sm:w-[73rem] sm:scale-100">
            <Image
              src={FeatureOneImage}
              alt="Immersive Shopping Experience"
              fill
              className="object-contain sm:ml-[-103px]"
            />
          </div>

          <div className="flex flex-col gap-[20px]">
            <h2 className="text-[2rem] font-[600] sm:text-[3.75rem]">
              Immersive Shopping
              <br />
              Experience
            </h2>
            <div className="w-full sm:w-[60%]">
              <p className="text-[1.2rem]">
                Our cutting-edge 3D visualization technology allows you to
                visualize your dream garment in 360 degrees, try it on
                virtually, and see how it looks from every angle before you buy.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="z-[2] flex flex-col items-center justify-between gap-[30px] sm:gap-[80px] md:mr-[-10%] lg:flex-row"
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative h-[20rem] w-[20rem] sm:h-[34rem] sm:w-[34rem] sm:scale-100">
            <Image
              src={FeatureTwoImage}
              alt="Customize Color from available materials"
              fill
              className="object-contain"
            />
          </div>

          <div className="flex flex-col gap-[20px]">
            <h2 className="text-[2rem] font-[600] sm:text-[3.75rem]">
              Customize Color from available materials
            </h2>
            <div className="w-full sm:w-[60%]">
              <p className="text-[1.2rem]">
                Choose from a wide range of fabrics, colors, and textures to
                create a truly unique and personalized piece that reflects your
                individual style.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
