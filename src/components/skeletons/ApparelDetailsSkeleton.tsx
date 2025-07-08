export const ApparelDetailsSkeleton = () => {
  return (
    <div className="absolute left-0 z-[3] flex h-full w-[38%] flex-col justify-center pl-4 md:pl-[2.5rem] lg:pl-[5.75rem]">
      <div className="flex w-full flex-col gap-[1rem]">
        {/* Title and Like Button */}
        <div className="flex flex-row items-start gap-[20px]">
          <div className="md-[80%] sm:w-[100%]">
            <div className="h-10 w-3/4 animate-pulse rounded bg-white"></div>
          </div>
          <div className="mt-[14px]">
            <div className="h-6 w-6 animate-pulse rounded-full bg-white"></div>
          </div>
        </div>

        {/* Brand Logo and Name */}
        <div className="flex flex-row items-center gap-[10px]">
          <div className="h-[2rem] w-[2rem] animate-pulse rounded-full bg-white"></div>
          <div className="h-4 w-1/3 animate-pulse rounded bg-white"></div>
        </div>

        {/* Description */}
        <div className="flex flex-col gap-[1rem]">
          <div className="min-h-[5rem] w-[90%]">
            <div className="mb-2 h-4 w-full animate-pulse rounded bg-white"></div>
            <div className="h-4 w-3/4 animate-pulse rounded bg-white"></div>
          </div>

          {/* Rating */}
          <div className="flex flex-row gap-[5px]">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="h-5 w-5 animate-pulse rounded bg-white"
              ></div>
            ))}
          </div>

          {/* Materials */}
          <div className="flex flex-col gap-[10px]">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex flex-row items-center gap-[5px]">
                <div className="h-4 w-1/4 animate-pulse rounded bg-white"></div>
                <div className="h-[2rem] w-[2rem] animate-pulse rounded-full bg-white"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <div className="mt-[20px] h-10 w-32 animate-pulse rounded-full bg-white"></div>
      </div>
    </div>
  );
};
