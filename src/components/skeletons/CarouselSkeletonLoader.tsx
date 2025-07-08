import { NextPage } from "next";

const CarouselSkeletonLoader: NextPage = () => {
  return (
    <>
      <div className="flex h-[90vh] w-full flex-row items-center gap-[50px] px-[50px] pb-[90px] pt-[50px] sm:px-0">
        <div className="hidden h-full flex-1 scale-[.80] animate-pulse rounded-[150px] bg-transparent-white-300 backdrop-blur-md sm:block"></div>
        <div className="hidden h-full flex-1 scale-[.80] animate-pulse rounded-[150px] bg-transparent-white-300 backdrop-blur-md md:block"></div>
        <div className="h-full flex-1 animate-pulse rounded-[150px] bg-transparent-white-300"></div>
        <div className="hidden h-full flex-1 scale-[.80] animate-pulse rounded-[150px] bg-transparent-white-300 backdrop-blur-md md:block"></div>
        <div className="hidden h-full flex-1 scale-[.80] animate-pulse rounded-[150px] bg-transparent-white-300 backdrop-blur-md sm:block"></div>
      </div>
    </>
  );
};

export default CarouselSkeletonLoader;
