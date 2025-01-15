import { NextPage } from "next";

interface Props {}

const CarouselSkeletonLoader: NextPage<Props> = ({}) => {
  return (
    <>
      <div className="flex flex-row items-center gap-[50px] w-full h-[90vh] pt-[50px] pb-[90px]">
        <div className="h-full animate-pulse bg-transparent-white-300 flex-1 rounded-[150px] scale-[.80]"></div>
        <div className="h-full animate-pulse bg-transparent-white-300 flex-1 rounded-[150px] scale-[.80]"></div>
        <div className="h-full animate-pulse bg-transparent-white-300 flex-1 rounded-[150px]"></div>
        <div className="h-full animate-pulse bg-transparent-white-300 flex-1 rounded-[150px] scale-[.80]"></div>
        <div className="h-full animate-pulse bg-transparent-white-300 flex-1 rounded-[150px] scale-[.80]"></div>
      </div>
    </>
  );
};

export default CarouselSkeletonLoader;
