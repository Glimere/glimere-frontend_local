import Image from "next/image";





export default function IntroSection() {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[1440px] max-h-[800px] relative flex h-auto w-full flex-col-reverse gap-[30px] bg-light px-[1.4rem] py-[50px] sm:h-[100vh] sm:flex-row sm:px-[6.25rem] sm:py-[80px]">
        <div className="flex h-full w-full flex-col items-start justify-center sm:flex-[1]">
          <div className="w-[90%] text-left sm:w-[90%]">
            <h1 className="text-dark-100 text-[30px] font-bold sm:text-[54px] sm:font-semibold">
              Your Style, Reimagined With Tech.
            </h1>
          </div>
          <div className="mt-[20px] w-[100%] text-left sm:w-[100%]">
            <p className="text-dark-100 text-[18px]">
              Experience the future of fashion, where technology meets
              creativity. Discover a world of unique styles, from custom-made
              pieces tailored to your exact measurements to a curated selection
              of ready-to-wear trends. With 3D visualization, you can see how
              your chosen design will look on you before you buy.
            </p>
          </div>
        </div>
        <div className="bg-black-100 h-[300px] overflow-hidden rounded-[30px] bg-cover bg-center bg-no-repeat sm:h-auto sm:flex-[1]">
          <Image
            src="https://res.cloudinary.com/dwnvlaitr/image/upload/v1747449135/glimere-easy-of-use_glkg4j.png"
            height={1000}
            width={1000}
            alt="Glimere easy of use"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}