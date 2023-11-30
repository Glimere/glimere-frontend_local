import React from 'react'
import LandingNav from '../components/LandingNav'
import creatorsBg from "../assets/images/creatorsBg.jpg"
import career1 from "../assets/images/career1.jpg"
import career6 from "../assets/images/career6.jpg"
import career4 from "../assets/images/career4.jpg"
import career5 from "../assets/images/career5.jpg"
import career9 from "../assets/images/career9.jpg"


export default function Creators() {
  return (
    <>
      <LandingNav />

      <div className='h-[80vh] sm:h-[100vh] bg-[#FEE7D3] bg-cover bg-center bg-no-repeat w-full px-[40px] sm:px-[100px] pt-[80px] pb-[30px] relative flex flex-row items-center'
      // style={{ backgroundImage: `url(${creatorsBg})` }}
      >

        <div className="sm:flex-[1] h-full flex flex-col justify-center">
          <div className="w-[90%] mb-[15px]">
            <h1 className="text-[40px] sm:text-[70px] text-left text-[#5f4420] mb-[20px] head-font" >We believe in your talent</h1>
          </div>

          <div className="w-[70%] ">
            <h1 className="text-[15px] sm:text-[18px] text-left text-black font-normal">Join us as we build a brighter future for african fashion, one creator at a time</h1>
          </div>
          <div className="">
            <button className="text-white bg-black md:py-2.5 py-3.5 px-[25px] rounded-[10px] font-bold mt-[20px]">
              Get Started
            </button>
          </div>

        </div>



        <div className="sm:min-h-[400px] h-[500px] w-[500px] bg-transparent overflow-hidden rounded-[100px] bg-landingImg sm:bg-none bg-cover flex flex-col justify-end flex-[0.5] sm:flex-[1]">
          {/* <img src={landingImg} alt="" className='hidden sm:block px-[10px] pt-[10px] sm:px-[30px] sm:pt-[30px]' /> */}
        </div>

      </div>


      <div className="h-auto sm:h-[100vh] bg-black-100 w-full relative flex flex-col-reverse sm:flex-row-reverse">
        <div className="flex-[1] h-full px-[40px] sm:pl-[4rem] pb-[40px] sm:pb-[0px] flex flex-col justify-center">
          <div className="w-[100%] sm:w-[90%] mb-[15px]">
            <h1 className="text-[35px] sm:text-[50px] text-left text-black head-font" >Empower Your Fashion Dreams</h1>
          </div>
          <div className="w-[90%] sm:w-[70%] ">
            <h1 className="text-[15px] text-left text-black">We are committed to empowering fashion creators like you to showcase your unique designs, connect with a global audience, and achieve your fashion aspirations. Our platform provides the tools, resources, and opportunities you need to thrive in the dynamic world of fashion.</h1>
          </div>
        </div>

        <div className="flex-[1] h-[360px] sm:h-auto sm:flex-[1] flex flex-col p-[40px] sm:p-[4rem]">
          <div className="flex-[1] h-[30%] w-full bg-white rounded-tl-[150px] rounded-tr-[150px] overflow-hidden">
            <img src={career6} alt="" className="w-full" />
          </div>
          <div className="flex-[1] h-[30%] flex flex-row">
            <div className="w-full bg-[#585123] flex-[1]  rounded-tl-[150px] relative overflow-hidden">
            </div>
            <div className="w-full bg-[#fdff92] flex-[1] rounded-tr-[150px] overflow-hidden">
            </div>
            <div className="w-full h-full bg-white flex-[1] rounded-bl-[150px]  rounded-br-[150px] rounded-tr-[150px] rounded-tl-[150px] overflow-hidden">
              <img src={career4} alt="" className="w-full" />
            </div>
          </div>
          <div className="flex-[1] h-[30%] flex flex-row">
            <div className="w-full h-full bg-white flex-[1]  rounded-bl-[150px]  rounded-br-[150px] overflow-hidden">
              <img src={career5} alt="" className="w-full" />
            </div>
            <div className="w-full h-full bg-primary-100 flex-[1]  rounded-bl-[150px] overflow-hidden">
              <img src={career9} alt="" className="w-full" />
            </div>
            <div className="w-full bg-[#EEC170] flex-[1]  rounded-br-[150px] overflow-hidden">
            </div>
          </div>


        </div>
      </div>

      <div className="h-auto sm:h-[100vh] bg-secondary-200 w-full gap-[20px] relative flex flex-col-reverse sm:flex-row py-[50px] sm:py-[80px] px-[40px] sm:px-[4rem]"
                style={{ backgroundImage: `url(${window.innerWidth >= 768 ? creatorsBg : {}})` }}

      >


        <div className='sm:flex-[1] flex flex-col h-full w-full items-start justify-center '>
          <div className="w-[90%] sm:w-[90%] text-left">
            <h1 className="text-black text-[30px] sm:text-[60px] head-font">The Future of African Fashion is Here</h1>

          </div>
          <div className="w-[100%] sm:w-[60%] mt-[20px] text-left">
            <p className="text-black text-[18px]">We’re shaping the future by connecting buyers and consumers with the best that African fashion has to offer.</p>
          </div>
        </div>
        <div className="sm:flex-[1] h-[300px] sm:h-auto bg-black-100 rounded-[20px] bg-cover bg-center bg-no-repeat "
                style={{ backgroundImage: `url(${window.innerWidth >= 768 ? {}:creatorsBg  })` }}

        >
        </div>
      </div>



    </>
  )
}
