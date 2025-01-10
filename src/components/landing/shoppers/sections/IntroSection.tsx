import Image from "next/image";

export default function IntroSection() {
  return (
    <div className="h-auto sm:h-[100vh] bg-white w-full gap-[20px] relative flex flex-col-reverse sm:flex-row py-[50px] sm:py-[80px] px-[40px] sm:px-[6.25rem]">
                <div className="sm:flex-[1] flex flex-col h-full w-full items-start justify-center ">
                  <div className="w-[90%] sm:w-[90%] text-left">
                    <h1 className="text-dark-100 text-[30px] sm:text-[54px] font-bold sm:font-semibold">
                      Your Style, Reimagined With Tech.
                    </h1>
                  </div>
                  <div className="w-[100%] sm:w-[100%] mt-[20px] text-left">
                    <p className="text-dark-100 text-[18px]">
                      Experience the future of fashion, where technology meets
                      creativity. Discover a world of unique styles, from
                      custom-made pieces tailored to your exact measurements to a
                      curated selection of ready-to-wear trends. With 3D
                      visualization, you can see how your chosen design will look on
                      you before you buy.
                    </p>
                  </div>
                </div>
                <div className="sm:flex-[1] h-[300px] sm:h-auto bg-black-100 bg-cover bg-center bg-no-repeat rounded-[30px] overflow-hidden">
                  <Image
                    src="/images/landing/glimere-easy-of-use.png"
                    height={1000}
                    width={1000}
                    alt="Glimere easy of use"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
  )
}
