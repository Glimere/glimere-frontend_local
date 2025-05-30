
export default function FeaturesCreators() {
  return (
    <>

      <div className="bg-light px-[1.4rem] sm:px-[6.25rem] py-[50px] sm:py-[80px] flex flex-col gap-[30px]">
        <div
          className="relative w-full flex flex-row items-end justify-between h-[36.625rem] rounded-[1.5625rem] bg-center bg-cover bg-no-repeat overflow-hidden"
          style={{ backgroundImage: `url(https://res.cloudinary.com/dwnvlaitr/image/upload/v1747449128/creators_community_dluxar.jpg)` }}
        >
          <div className="flex flex-col gap-[20px] z-[2] p-[1rem] sm:p-[4rem]">
            <h1 className="text-white text-[2rem] sm:text-[3.375rem] font-[600]">
              Sell Your Designs to the World
            </h1>
            <p className="text-white text-[1rem] sm:text-[1.5625rem]">
              We connects you with a global audience of fashion enthusiasts
              eager to discover unique and innovative styles. Showcase your
              creations and connect with customers worldwide, expanding your
              brand and influence beyond borders.
            </p>
          </div>
          <div className="absolute bottom-0 h-[100vw] w-full bg-black-gradient z-[1]"></div>
        </div>

      </div>
    </>
  );
}
