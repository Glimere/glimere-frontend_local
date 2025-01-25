import Image from "next/image";

export default function IntroSectionCreators() {
  return (
    <>
      <div className="h-auto sm:h-[100vh] bg-light w-full gap-[40px] relative flex flex-col sm:flex-row py-[50px] sm:py-[80px] px-[1.4rem] sm:px-[6.25rem]">
        <div className="sm:flex-[1] h-[300px] sm:h-auto bg-black-100 bg-cover bg-center bg-no-repeat rounded-[30px] overflow-hidden">
          <Image
            src="/images/landing/creators/creatorCreating.png"
            height={1000}
            width={1000}
            alt="Glimere easy of use"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="sm:flex-[1] flex flex-col h-full w-full items-start justify-center ">
          <div className="w-[90%] sm:w-[90%] text-left">
            <h1 className="text-dark-100 text-[30px] sm:text-[54px] font-bold sm:font-semibold">
              <span className="text-primary-100">Focus on Creating</span>, We
              Handle the Rest
            </h1>
          </div>
          <div className="w-[100%] sm:w-[100%] mt-[20px] text-left">
            <p className="text-dark-100 text-[18px]">
              Focus on your creativity, not the complexities of running a
              fashion business. Glimere simplifies the entire selling process,
              from order fulfillment to payment processing.
            </p>
          </div>
        </div>
      </div>
      <div className="h-auto sm:h-[100vh] bg-light w-full gap-[40px] relative flex flex-col-reverse sm:flex-row py-[50px] sm:py-[80px] px-[1.4rem] sm:px-[6.25rem]">
        <div className="sm:flex-[1] flex flex-col h-full w-full items-start justify-center ">
          <div className="w-[90%] sm:w-[90%] text-left">
            <h1 className="text-dark-100 text-[30px] sm:text-[54px] font-bold sm:font-semibold">
              <span className="text-primary-100">Guess What!</span> You Set Your
              Own Price!
            </h1>
          </div>
          <div className="w-[100%] sm:w-[100%] mt-[20px] text-left">
            <p className="text-dark-100 text-[18px]">
              Express your unique vision without limitations. Glimere empowers
              you to design freely and express your creativity on your own
              terms. You also have the freedom to set your own prices.
            </p>
          </div>
        </div>
        <div className="sm:flex-[1] h-[300px] sm:h-auto bg-black-100 bg-cover bg-center bg-no-repeat rounded-[30px] overflow-hidden">
          <Image
            src="/images/landing/creators/designerPlanning.png"
            height={1000}
            width={1000}
            alt="Glimere easy of use"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
}
