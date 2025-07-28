import { useWindowWidth } from "@/hooks/useWindowsWidth";
import React from "react";

const ApparelLoading: React.FC = () => {
  const {isDesktop} = useWindowWidth();
  return (
    <div className="animate-pulse w-full">
      {/* <div className="flex flex-col gap-[20px]"></div>
      <div className="flex flex-row items-center justify-between">
        <div className="h-6 w-32 rounded bg-gray-300"></div>
        <div className="flex flex-row items-center gap-[10px]">
          <div className="h-6 w-16 rounded bg-gray-300"></div>
          <div className="h-[25px] w-[25px] rounded-full bg-gray-300"></div>
        </div>
      </div> */}
      <div className="w-full">
        <div className="flex flex-row gap-4 overflow-hidden">
          {[...Array(isDesktop ? 6 : 2)].map((_, index) => (
            <div key={index} className="flex flex-1 flex-col items-center gap-3">
              {" "}
              <div
                key={index}
                className="w-full basis-1/3 md:basis-1/5 lg:basis-1/6"
              >
                <div className="h-44 w-full animate-pulse rounded bg-transparent-white-300 shadow-sm"></div>
              </div>
              <div className="h-4 w-[80%] animate-pulse rounded-full bg-transparent-white-300 shadow-sm"></div>
              <div className="flex w-[60%] items-center gap-2">
                <div className="h-4 flex-grow animate-pulse rounded-full bg-transparent-white-300 shadow-sm"></div>
                <div className="h-4 w-4 animate-pulse rounded-full bg-transparent-white-300 shadow-sm"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApparelLoading;
