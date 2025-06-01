import ImageSlider from "@/components/ImageSlider";
import SignupPage from "../components/Signup";


  const imageUrls = [
  'https://res.cloudinary.com/dwnvlaitr/image/upload/v1748636358/Showcase_Scene_0_b6rpgg.png',
  'https://res.cloudinary.com/dwnvlaitr/image/upload/v1748636358/Showcase_Scene_1_jlruig.png',
  'https://res.cloudinary.com/dwnvlaitr/image/upload/v1748635969/Showcase_Scene_2_uyg86a.png',
  // "https://res.cloudinary.com/dwnvlaitr/image/upload/v1748635955/Showcase_Scene_3_wjhqgg.png",
  // "https://res.cloudinary.com/dwnvlaitr/image/upload/v1748635979/Showcase_Scene_4_dtmcp3.png",
  // "https://res.cloudinary.com/dwnvlaitr/image/upload/v1748635983/Showcase_Scene_5_n6spo6.png",
  "https://res.cloudinary.com/dwnvlaitr/image/upload/v1748635964/Showcase_Scene_6_gzleqk.png",
  "https://res.cloudinary.com/dwnvlaitr/image/upload/v1748636332/Showcase_Scene_7_yerjym.png",
];

export default function AuthPage() {
  return (
    <div className="relative flex h-[100vh] w-full flex-row items-center justify-center overflow-hidden p-5">
      <div
        className={`relative z-[2] flex h-full flex-grow items-center justify-center overflow-hidden rounded-[20px] bg-alabaster bg-cover bg-center bg-no-repeat duration-500 ease-in-out sm:flex`}
      >
        <ImageSlider images={imageUrls} interval={3000} />
       
      </div>

      <div className="absolute z-[3] flex h-[500px] w-[400px] flex-row items-center justify-center">
        <SignupPage />
      </div>
    </div>
  );
}
