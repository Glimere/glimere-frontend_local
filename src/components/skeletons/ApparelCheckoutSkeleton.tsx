export const ApparelCheckoutSkeleton = () => {
  return (
    <div className="absolute right-0 z-[3] flex h-full w-[30%] flex-col justify-center pr-4 md:pr-[2.5rem] lg:pr-[5.75rem]">
      <div className="flex flex-col gap-[1.56rem]">
        {/* First Card: Apparel Info */}
        <div className="flex flex-col gap-[1.56rem] rounded-[1.6rem] bg-transparent-white-100 p-[1.56rem] backdrop-blur-md">
          {/* Apparel Type and Name */}
          <div>
            <div className="mb-2 h-4 w-1/4 animate-pulse rounded bg-white"></div>
            <div className="h-6 w-1/2 animate-pulse rounded bg-white"></div>
            <div className="mt-2 h-4 w-1/3 animate-pulse rounded bg-white"></div>
          </div>
          {/* Image */}
          <div className="h-[4.5rem] w-[4.5rem] animate-pulse rounded bg-white"></div>
          {/* Materials */}
          <div>
            <div className="mb-2 h-4 w-1/4 animate-pulse rounded bg-white"></div>
            <div className="flex flex-col gap-1">
              {[...Array(2)].map((_, i) => (
                <div
                  key={i}
                  className="h-4 w-1/3 animate-pulse rounded bg-white"
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Second Card: Price and Checkout */}
        <div className="flex flex-col gap-[5px] rounded-[1.6rem] bg-transparent-white-100 p-[1.56rem] backdrop-blur-md">
          <div className="h-6 w-1/3 animate-pulse rounded bg-white"></div>
          <div className="h-10 w-full animate-pulse rounded-full bg-white"></div>
        </div>
      </div>
    </div>
  );
};
