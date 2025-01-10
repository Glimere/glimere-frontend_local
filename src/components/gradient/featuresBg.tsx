export default function FeaturesBg() {
  return (
    <div className="absolute w-full h-full top-0 flex justify-center z-[1]">
      <div className="relative w-full  h-full">
        <div className="absolute blur-[80px] rounded-full h-[485px] w-[485px] bg-palePink top-0 right-0"></div>
        <div className="absolute blur-[80px] rounded-full h-[284px] w-[284px] bg-beige top-[0] right-[15%]"></div>

        <div className="absolute blur-[80px] rounded-full h-[485px] w-[485px] bg-beige top-[50%] left-0"></div>
        <div className="absolute blur-[80px] rounded-full h-[284px] w-[284px] bg-palePink top-[40%] left-[15%]"></div>

        <div className="absolute blur-[80px] rounded-full h-[485px] w-[485px] bg-beige top-[80%] left-0"></div>
        <div className="absolute blur-[80px] rounded-full h-[284px] w-[284px] bg-palePink top-[700%] left-[15%]"></div>
      </div>
    </div>
  );
}
