export default function CoverBg() {
  return (
    <div className="absolute w-full h-full top-0 flex justify-center z-[1]">
      <div className="relative w-full  h-full">
        <div className="absolute blur-[80px] rounded-full h-[485px] w-[485px] bg-palePink top-0 left-0"></div>
        <div className="absolute blur-[80px] rounded-full h-[485px] w-[485px] bg-beige top-[70%] right-0"></div>
        <div className="absolute blur-[80px] rounded-full h-[284px] w-[284px] bg-palePink top-[35%] left-[15%]"></div>
        <div className="absolute blur-[80px] rounded-full h-[284px] w-[284px] bg-palePink top-[60%] right-[15%]"></div>
        <div className="absolute blur-[80px] rounded-full h-[284px] w-[284px] bg-palePink top-[80%] left-[5%]"></div>
        <div className="absolute blur-[80px] rounded-full bg-beige h-[338px] w-[338px] top-[5%] right-[10%]"></div>
      </div>
    </div>
  );
}
