import Image from "next/image";

export default function IntroSectionCreators() {
  return (
    <>
      <div className="relative flex h-auto w-full flex-col gap-[40px] bg-light px-[1.4rem] py-[50px] sm:h-[100vh] sm:flex-row sm:px-[6.25rem] sm:py-[80px]">
        <div className="bg-black-100 h-[300px] overflow-hidden rounded-[30px] bg-cover bg-center bg-no-repeat sm:h-auto sm:flex-[1]">
          <Image
            src="https://res.cloudinary.com/dwnvlaitr/image/upload/v1747449159/creatorCreating_cnfkgz.png"
            height={1000}
            width={1000}
            alt="Glimere easy of use"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex h-full w-full flex-col items-start justify-center sm:flex-[1]">
          <div className="w-[90%] text-left sm:w-[90%]">
            <h1 className="text-dark-100 text-[30px] font-bold sm:text-[54px] sm:font-semibold">
              <span className="text-primary-100">Focus on Creating</span>, We
              Handle the Rest
            </h1>
          </div>
          <div className="mt-[20px] w-[100%] text-left sm:w-[100%]">
            <p className="text-dark-100 text-[18px]">
              Focus on your creativity, not the complexities of running a
              fashion business. Glimere simplifies the entire selling process,
              from order fulfillment to payment processing.
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex h-auto w-full flex-col-reverse gap-[40px] bg-light px-[1.4rem] py-[50px] sm:h-[100vh] sm:flex-row sm:px-[6.25rem] sm:py-[80px]">
        <div className="flex h-full w-full flex-col items-start justify-center sm:flex-[1]">
          <div className="w-[90%] text-left sm:w-[90%]">
            <h1 className="text-dark-100 text-[30px] font-bold sm:text-[54px] sm:font-semibold">
              <span className="text-primary-100">Guess What!</span> You Set Your
              Own Price!
            </h1>
          </div>
          <div className="mt-[20px] w-[100%] text-left sm:w-[100%]">
            <p className="text-dark-100 text-[18px]">
              Express your unique vision without limitations. Glimere empowers
              you to design freely and express your creativity on your own
              terms. You also have the freedom to set your own prices.
            </p>
          </div>
        </div>
        <div className="bg-black-100 h-[300px] overflow-hidden rounded-[30px] bg-cover bg-center bg-no-repeat sm:h-auto sm:flex-[1]">
          <Image
            src="https://res.cloudinary.com/dwnvlaitr/image/upload/v1747449160/designerPlanning_r4dhrf.png"
            height={1000}
            width={1000}
            alt="Glimere easy of use"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </>
  );
}
