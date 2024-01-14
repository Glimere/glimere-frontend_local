import React from 'react'
import creatorsBg from "../assets/images/creatorsBg.jpg"
import career6 from "../assets/images/career6.jpg"
import career4 from "../assets/images/career4.jpg"
import career5 from "../assets/images/career5.jpg"
import career9 from "../assets/images/career9.jpg"
import illustration from "../assets/images/illustration.png"
import creatorsPromptImg from "../assets/images/creatorsPromptImg.png"
import landingImg from "../assets/images/landingImg.png"
import { isDesktop } from '../global-components/isDesktop'



export default function Creators({ setOpen }) {


  return (
    <>
      <div className='h-[70vh] sm:h-[100vh] bg-[#FEE7D3] w-full px-[40px] sm:px-[100px] pt-[80px] pb-[30px] relative flex flex-row items-center bg-cover bg-center bg-no-repeat'
                      style={{ backgroundImage: `url(${landingImg})` }}

      >

        <div className=" h-full flex flex-col justify-end items-center">
          <div className="sm:w-[90%] mb-[15px]">
            <h1 className="text-[45px] sm:text-[80px] text-center text-dark-100 font-bold sm:font-semibold" >Create Authentic Custom Made Fashion</h1>
          </div>

          <div className="w-[70%] flex items-center justify-center">
            <h1 className="text-[15px] sm:text-[25px] text-center text-dark-100 font-normal">Join us as we build a brighter future for african fashion, one creator at a time</h1>
          </div>
          <div className="flex items-center justify-centermt mt-[20px]">
            <button className="text-white-100 bg-black duration-150 hover:bg-[#772f1a] md:py-2.5 py-3.5 px-[25px] rounded-[10px] font-bold mt-[20px]"
              onClick={() => { setOpen(true) }}
            >
              Get Started
            </button>
          </div>

        </div>


      </div>


      <div className="h-auto sm:h-[100vh] bg-black-100 w-full relative flex flex-col-reverse sm:flex-row-reverse py-[40px] sm:py-0">
        <div className="flex-[1] h-full px-[40px] sm:pl-[4rem] pb-[40px] sm:pb-[0px] flex flex-col justify-center">
          <div className="w-[100%] sm:w-[90%] mb-[15px]">
            <h1 className="text-[35px] sm:text-[50px] text-left text-dark-100 font-bold sm:font-semibold" >Empower Your Fashion Dreams</h1>
          </div>
          <div className="w-[90%] sm:w-[70%] mt-[30px]">
            <h1 className="text-[18px] text-left text-dark-100">We are committed to empowering fashion creators like you to showcase your unique designs, connect with a global audience, and achieve your fashion aspirations. Our platform provides the tools, resources, and opportunities you need to thrive in the dynamic world of fashion.</h1>
          </div>
        </div>

        <div className="flex-[1] h-[360px] sm:h-auto sm:flex-[1] flex flex-col p-[40px] sm:p-[4rem]">
          <div className="flex-[1] h-[30%] w-full bg-white-100 rounded-tl-[150px] rounded-tr-[150px] overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${career6})` }}

          >
          </div>

          <div className="flex-[1] h-[30%] flex flex-row">
            <div className="w-full bg-[#585123] flex-[1]  rounded-tl-[150px] relative overflow-hidden">
            </div>
            <div className="w-full bg-[#fdff92] flex-[1] rounded-tr-[150px] overflow-hidden">
            </div>
            <div className="w-full h-full bg-white-100 flex-[1] bg-cover bg-center bg-no-repeat rounded-bl-[150px]  rounded-br-[150px] rounded-tr-[150px] rounded-tl-[150px] overflow-hidden"
              style={{ backgroundImage: `url(${career4})` }}

            >
            </div>
          </div>

          <div className="flex-[1] h-[30%] flex flex-row">
            <div className="w-full h-full bg-white-100 flex-[1] bg-cover bg-center bg-no-repeat  rounded-bl-[150px]  rounded-br-[150px] overflow-hidden"
              style={{ backgroundImage: `url(${career5})` }}
            >

            </div>
            <div className="w-full h-full bg-primary-100 flex-[1] bg-cover bg-center bg-no-repeat  rounded-bl-[150px] overflow-hidden"
              style={{ backgroundImage: `url(${career9})` }}
            >

            </div>
            <div className="w-full bg-[#EEC170] flex-[1]  rounded-br-[150px] overflow-hidden">
            </div>
          </div>


        </div>
      </div>

      <div className="h-auto sm:h-[100vh] bg-secondary-200 w-full gap-[20px] relative flex flex-col-reverse sm:flex-row py-[80px] sm:py-[80px] px-[40px] sm:px-[4rem]  bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${isDesktop ? creatorsBg : {}})` }}

      >


        <div className='sm:flex-[1] flex flex-col h-full w-full items-start justify-center '>
          <div className="w-[90%] sm:w-[90%] text-left">
            <h1 className="text-[#772f1a] text-[30px] sm:text-[55px] font-bold sm:font-semibold">Know your worth, Reclaim Your Value</h1>

          </div>
          <div className="w-[100%] sm:w-[60%] mt-[30px] text-left">
            <p className="text-dark-100 text-[18px]">Your creativity and expertise deserve to be recognized and compensated fairly. At Glimere, we help you to <span className='font-bold'>establish a strong brand, price strategically, and build a sustainable business</span>. Together, let's redefine the value of fashion creators.</p>
          </div>
        </div>
        <div className="sm:flex-[1] h-[300px] sm:h-auto bg-black-100 rounded-[20px] bg-cover bg-center bg-no-repeat "
          style={{ backgroundImage: `url(${isDesktop ? {} : creatorsBg})` }}

        >
        </div>
      </div>

      <div className="h-auto sm:h-[100vh] bg-[#FEE7D3] flex justify-center items-center py-[80px] sm:py-[80px] px-[40px] sm:px-[4rem] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${creatorsPromptImg})` }}

      >

        <div className="flex flex-col justify-center items-center gap-[15px]"
        
        >

          <div className="w-[80%]">
            <h1 className="text-[35px] text-dark-100 sm:text-[60px] mb-[30px] font-bold sm:font-semibold text-center">
            Start Creating Custom-made Apparels
          </h1>
          </div>
          
          <div className="flex justify-center">
            <button className="text-white-100 text-[20px] bg-black md:py-[10px] py-3.5 px-[30px] rounded-[10px] font-bold mt-[20px]"
              onClick={() => { setOpen(true) }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

    </>
  )
}
