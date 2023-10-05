import React from 'react'
import LandingNav from '../components/LandingNav'
import creatorsBg from "../assets/images/creatorsBg.jpg"


export default function Creators() {
  return (
    <>
          <LandingNav />

          <div className='h-[100vh] bg-[#ffe9b8] bg-cover bg-center bg-no-repeat w-full px-[40px] sm:px-[100px] pt-[80px] pb-[30px] relative flex flex-row items-center'
        style={{ backgroundImage: `url(${creatorsBg})` }}
      >

        <div className="flex-[1] h-full flex flex-col justify-center">
          <div className="w-[90%] mb-[15px]">
            <h1 className="text-[28px] sm:text-[55px] text-left text-[#5f4420] mb-[20px]" style={{ fontFamily: "Edensor" }}>We believe in your talent</h1>
          </div>

          <div className="w-[70%] ">
            <h1 className="text-[15px] sm:text-[18px] text-left text-white font-normal">Join us as we build a brighter future for african fashion, one creator at a time</h1>
          </div>
          <div className="">
            <button className="text-white bg-black-200 md:py-2.5 py-3.5 px-[25px] rounded-[10px] font-bold mt-[20px]">
              Get Started
            </button>
          </div>

        </div>



        <div className="sm:min-h-[400px] h-[500px] w-[500px] bg-transparent overflow-hidden rounded-[100px] bg-landingImg sm:bg-none bg-cover flex flex-col justify-end flex-[0.5] sm:flex-[1]">
          {/* <img src={landingImg} alt="" className='hidden sm:block px-[10px] pt-[10px] sm:px-[30px] sm:pt-[30px]' /> */}
        </div>

      </div>

    </>
  )
}
