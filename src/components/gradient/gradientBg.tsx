export default function GradientBg() {
  return (
    <div className="absolute w-full top-0 flex justify-center h-[700px] z-[1]">
      <div className="flex flex-row">
        <div className="flex flex-row items-end">
          <div className="blur-[80px] rounded-full h-[485px] w-[485px] bg-beige"></div>
          <div className="blur-[80px] rounded-full bg-palePink h-[272px] w-[272px]"></div>
        </div>
        <div className="flex flex-row items-start">
          <div className="blur-[80px] rounded-full bg-beige h-[223px] w-[223px] "></div>
          <div className="blur-[80px] rounded-full h-[520px] w-[520px] bg-palePink"></div>
        </div>
      </div>
    </div>
  );
}
