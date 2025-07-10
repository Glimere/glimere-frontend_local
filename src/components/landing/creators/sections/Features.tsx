export default function FeaturesCreators() {
  return (
    <div className="flex w-full justify-center">
      <div className="flex max-w-[1440px] flex-col gap-[30px] bg-light px-[1.4rem] py-[50px] sm:px-[6.25rem] sm:py-[80px]">
        <div
          className="relative flex h-[36.625rem] w-full flex-row items-end justify-between overflow-hidden rounded-[1.5625rem] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://res.cloudinary.com/dwnvlaitr/image/upload/v1747449128/creators_community_dluxar.jpg)`,
          }}
        >
          <div className="z-[2] flex flex-col gap-[20px] p-[1rem] sm:p-[4rem]">
            <h1 className="text-[2rem] font-[600] text-white sm:text-[3.375rem]">
              Sell Your Designs to the World
            </h1>
            <p className="text-[1rem] text-white sm:text-[1.5625rem]">
              We connects you with a global audience of fashion enthusiasts
              eager to discover unique and innovative styles. Showcase your
              creations and connect with customers worldwide, expanding your
              brand and influence beyond borders.
            </p>
          </div>
          <div className="absolute bottom-0 z-[1] h-[100vw] w-full bg-black-gradient"></div>
        </div>
      </div>
    </div>
  );
}
