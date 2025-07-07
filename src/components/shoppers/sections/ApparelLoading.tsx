import React from "react";

const  ApparelLoading: React.FC = () => {
  return (
    <div className="animate-pulse px-[1.4rem] sm:px-[6.25rem]">
      <div className="flex flex-col gap-[20px]"></div>
      <div className="flex flex-row items-center justify-between">
        <div className="h-6 w-32 rounded bg-gray-300"></div>
        <div className="flex flex-row items-center gap-[10px]">
          <div className="h-6 w-16 rounded bg-gray-300"></div>
          <div className="h-[25px] w-[25px] rounded-full bg-gray-300"></div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-row overflow-hidden">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="basis-1/3 pl-4 md:basis-1/5 lg:basis-1/6"
            >
              <div className="h-48 rounded bg-gray-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApparelLoading;
