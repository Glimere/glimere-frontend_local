import LandingNav from '../components/LandingNav'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import landingImg from '../assets/images/glimere-landing.png'
// import * as THREE from 'three';=
import glimere from '../assets/images/glimere.svg'
import glimerenew from '../assets/images/glimerenew.svg'
import style from "../assets/images/style.jpg"
import career1 from "../assets/images/career1.jpg"
import career4 from "../assets/images/career4.jpg"
import career5 from "../assets/images/career5.jpg"
import career9 from "../assets/images/career9.jpg"
import community from "../assets/images/community.png"
import products from "../assets/images/products.png"
import inclusive from "../assets/images/inclusive.jpg"
import img6 from '../assets/images/img6.jpg'
import platform from '../assets/images/platform.png'
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'
import img4 from '../assets/images/img4.jpg'
import success from '../assets/images/success.png'
import tools from '../assets/images/tools.png'
import img5 from '../assets/images/img5.jpg'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import YoutubeVideo from '../components/YoutubeVideo';
import YoutubeVideoSmall from '../components/YoutubeVideoSmall';
import glimereBg from "../assets/images/glimereBg.jpg"
import landingCover from "../assets/images/landing-cover.png"
import Bubble from '../components/Bubble';

export default function Landing() {

  const [open, setOpen] = useState(false)
  const [formState, setFormState] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(false)
  const [play, setPlay] = useState(false)

  const cancelButtonRef = useRef(null)

  const playref = useRef(null)


  const onReady = (event) => {
    playref.current = event.target;
  }

  const elementRef = useRef(null);

  const handleButtonClick = () => {
    elementRef.current.scrollIntoView({ behavior: "smooth" });
  };



  useEffect(() => {
    setSubmitted(false)
  }, [open])




  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true)
  };




  return (
    <>
      <LandingNav />

      <div className='h-[88vh] sm:h-[100vh] bg-black-100 bg-cover bg-center bg-no-repeat w-full relative flex flex-row items-center'
      // style={{ backgroundImage: `url(${glimereBg})` }}
      >
        <div className="absolute h-full w-full flex justify-center items-end">
            <Bubble classes="h-[60px] sm:h-[80px]  w-[60px] sm:w-[80px] hover:h-[100px] hover:w-[100px] top-[26%] sm:top-[20%] left-[10%] sm:left-[15%]" img={img1}/>
            <Bubble classes="h-[40px] sm:h-[60px]  w-[40px] sm:w-[60px] hover:h-[80px] hover:w-[80px] top-[46%] sm:top-[40%] left-[7%]" img={img2}/>
            <Bubble classes="h-[80px] sm:h-[100px] w-[80px]  sm:w-[100px] hover:h-[120px] hover:w-[120px] top-[19%] sm:top-[80%] left-[55%] sm:left-[10%]" img={img3}/>
            <Bubble classes="h-[40px] sm:h-[60px]  w-[40px] sm:w-[60px] hover:h-[80px] hover:w-[80px] top-[31%] sm:top-[25%] right-[10%]" img={img4}/>
            <Bubble classes="h-[70px] sm:h-[90px]  w-[70px] sm:w-[90px] hover:h-[110px] hover:w-[110px] top-[46%] sm:top-[40%] right-[15%]" img={img5}/>
            <Bubble classes="h-[60px] sm:h-[80px]  w-[60px] sm:w-[80px] hover:h-[100px] hover:w-[100px] top-[19%] sm:top-[80%] right-[53%] sm:right-[10%]" img={img6}/>
          <img src={landingCover} alt="" className='w-[700px] sm:w-[500px] mb-[-30px] sm:mb-[-200px]' />
        </div>

        <div className="h-full w-full flex flex-col items-center justify-end px-[40px] sm:px-[100px] pt-[80px] pb-[30px]">
  
          <div className="w-[340px] sm:w-[800px] z-[4] relative mb-[15px]">
        
            <h1 className="text-[40px] hero-text sm:text-[60px] text-center text-white mb-[20px]" style={{ fontFamily: "Edensor" }}>Shop Ex<span className='hero-text text-transparent'>clusive</span> Custom made<span className='hero-text text-transparent'> Fashion</span></h1>

          </div>

        </div>


      </div>

      <div className="h-[100vh] bg-black-100 w-full relative flex flex-col sm:flex-row">
        <div className="bg-[#DDB9A3] w-full h-full flex sm:block items-center absolute">
          <img src={style} alt="" className='w-full' />
        </div>

        <div className='flex-[1] overflow-hidden z-10 flex flex-col items-start py-[60px] sm:py-[80px] pl-[40px] sm:pl-[4rem]'>

          <h1 className="text-white font-semibold text-[35px] sm:text-[40px]" style={{ fontFamily: "Edensor" }}>Unleash Your Style</h1>
          <div className="w-[70%] sm:w-[40%] mt-[20px] text-left">
            <p className="text-[#613e13]">Discover the fashion potential within you and let it shine</p>
          </div>
        </div>
        <div className="flex-[1] z-10 flex flex-col items-end justify-end py-[60px] sm:py-[80px] pr-[40px] sm:pr-[4rem]">
          <h1 className="text-white font-semibold text-[35px] sm:text-[40px]" style={{ fontFamily: "Edensor" }}>Express Yourself</h1>
          <div className="w-[70%] sm:w-[40%] mt-[20px] text-right">
            <p className="text-[#613e13]">Make a statement with your unique style</p>
          </div>
        </div>
      </div>
      <div className="h-[100vh] bg-black-100 w-full relative flex flex-col-reverse sm:flex-row-reverse">
        <div className="flex-[1] h-full px-[40px] sm:pl-[4rem] pb-[40px] sm:pb-[0px] flex flex-col justify-center">
          <div className="w-[100%] sm:w-[90%] mb-[15px]">
            <h1 className="text-[35px] sm:text-[50px] text-left text-[#9d5c0d] font-semibold" style={{ fontFamily: "Edensor" }}>Empower Yourself with Endless Opportunities</h1>
          </div>
          <div className="w-[90%] sm:w-[70%] ">
            <h1 className="text-[15px] text-left text-[#9d5c0d]">Unlock Limitless Career Opportunities with Glimere&rsquo;s job portal, featuring a wide range of positions in the fashion industry. From design to marketing, discover your dream job and take the next step in your career.</h1>
          </div>
        </div>

        <div className="flex-[1] h-[360px] sm:h-auto sm:flex-[1] flex flex-col p-[40px] sm:p-[4rem]">
          <div className="flex-[1] h-[30%] w-full bg-white rounded-tl-[150px] rounded-tr-[150px] overflow-hidden">
            <img src={career1} alt="" className="w-full" />
          </div>
          <div className="flex-[1] h-[30%] flex flex-row">
            <div className="w-full h-full bg-[#585123] flex-[1]  rounded-tl-[150px] relative overflow-hidden">
            </div>
            <div className="w-full h-full bg-[#fdff92] flex-[1] rounded-tr-[150px] overflow-hidden">
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
            <div className="w-full h-full bg-[#EEC170] flex-[1]  rounded-br-[150px] overflow-hidden">
            </div>
          </div>


        </div>
      </div>
      <div className="h-[100vh] bg-black-100 w-full relative flex flex-col sm:flex-row">
        <div className="flex-[1]">
          <div className="flex-[1] h-full px-[40px] sm:px-[4rem] flex flex-col justify-center">
            <div className="w-[]sm:w-[90%] mb-[15px]">
              <h1 className="text-[38px] sm:text-[50px] text-left text-white font-semibold" style={{ fontFamily: "Edensor" }}>Join a Thriving Fashion Community</h1>
            </div>
            <div className="w-[90%] sm:w-[70%] ">
              <h1 className="text-[15px] text-left text-white">Connect with like-minded individuals who share your passion for fashion. Collaborate with other creatives, exchange ideas, and share your work.</h1>
            </div>
          </div>
        </div>
        <div className="flex-[0.6] sm:flex-[1.9] flex items-end">
          <img src={community} alt="" className='w-full' />
        </div>

      </div>

      <div className="h-[100vh] bg-black-100 w-full relative flex flex-col sm:flex-row">
        <div className="flex-[1] h-[370px] sm:h-auto flex justify-center sm:items-end absolute sm:relative w-full sm:w-auto">
          <img src={products} alt="" className='h-full rotate-90 sm:rotate-0' />
        </div>

        <div className="flex-[1.3] mt-[300px] sm:mt-0">
          <div className="h-full sm:pl-[4rem] px-[40px] flex flex-col justify-center">
            <div className="w-[90%] mb-[15px]">
              <h1 className="text-[38px] sm:text-[50px] text-left text-[#9d5c0d] font-semibold" style={{ fontFamily: "Edensor" }}>Showcase Your Creativity and Skills</h1>
            </div>
            <div className="w-[70%] ">
              <h1 className="text-[15px] text-left text-[#9d5c0d]">Showcase your unique style with a stunning portfolio that captures your essence and creativity, and sets you apart in the fashion industry.</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[100vh] bg-black-100 w-full relative flex flex-col sm:flex-row-reverse">
        <div className="flex-[1] h-[370px] sm:h-auto flex justify-center sm:items-end sm:mr-[150px] absolute sm:relative w-full sm:w-auto">
          <img src={tools} alt="" className='h-full rotate-90 sm:rotate-0' />
        </div>

        <div className="flex-[1.1] mt-[300px] sm:mt-0">
          <div className="h-full sm:pl-[4rem] px-[40px] flex flex-col justify-center">
            <div className="w-[90%] mb-[15px]  pt-[30px] sm:pt-0">
              <h1 className="text-[38px] sm:text-[50px] text-left text-[#9d5c0d] font-semibold" style={{ fontFamily: "Edensor" }}>Get The Realistic Experience</h1>
            </div>
            <div className="w-[70%]">
              <h1 className="text-[15px] text-left text-[#9d5c0d]">Experience fashion like never before with Glimere&rsquo;s cutting-edge augmented reality tools. Our platform combines technology and style to provide an immersive and interactive fashion experience.</h1>
            </div>
          </div>
        </div>
      </div>


      <div className="h-[100vh] bg-[#332f2d] w-full relative flex flex-row-reverse">
        <div className="flex-[1] items-end hidden sm:flex">
          <img src={inclusive} alt="" className='h-full' />
        </div>

        <div className="flex-[1.3]">
          <div className="flex-[1] h-full px-[40px] sm:pl-[4rem] flex flex-col justify-center">
            <div className="w-full sm:w-[90%] mb-[40px]">
              <h1 className="text-[38px] sm:text-[50px] text-left text-white font-semibold" style={{ fontFamily: "Edensor" }}>We Value Inclusivity</h1>
            </div>
            <div className="w-full sm:w-[70%] ">
              <h1 className="text-[15px] text-left text-[#cec1ba]">At Glimere, we believe in a platform that welcomes everyone. We celebrate diversity and are committed to providing a safe and welcoming space for individuals from all walks of life.

                Our community is built on the foundation of respect and understanding, and we believe in creating a culture where everyone feels valued and empowered to express themselves freely and authentically.

                We encourage individuals to showcase their unique style and creativity, regardless of their race, gender, age, or background.</h1>
            </div>
          </div>
        </div>

      </div>


      <div className="h-[100vh] bg-black-100 w-full relative flex flex-col sm:flex-row pb-[190px] sm:pb-0 ">
        <div className='flex-[1] overflow-hidden z-10 flex flex-col items-start py-[0px] sm:py-[80px] px-[40px] sm:pl-[4rem]'>

          <h1 className="text-[#ffe9b8] font-semibold text-[35px] sm:text-[40px]" style={{ fontFamily: "Edensor" }}>Explore the Glimere Experience</h1>
          <div className="w-[90%] sm:w-[60%] mt-[20px] text-left">
            <p className="text-white">As a user-focused platform, Glimere is designed to make your fashion journey easy and enjoyable.</p>
          </div>
        </div>
        <div className="flex-[1] flex flex-col px-[80px] sm:px-[35%] absolute  h-full  justify-end">
          <img src={platform} alt="" className='w-full ' />

        </div>

        <div className="flex-[1] z-10 flex flex-col text-left sm:text-right items-start sm:items-end justify-start sm:justify-end py-[0px] sm:py-[80px] px-[40px] sm:pr-[4rem]">
          <h1 className="text-[#ffe9b8] font-semibold text-[35px] sm:text-[40px]" style={{ fontFamily: "Edensor" }}>Get the fashion feel</h1>
          <div className="w-[90%] sm:w-[60%] mt-[20px] text-left sm:text-right">
            <p className="text-white">Our design philosophy at Glimere is to create a user-friendly platform with a touch of fashionable flair and a modern concept.</p>
          </div>
        </div>
      </div>

      <div ref={playref} className="container bg-[#ffe9b8] max-w-full flex justify-center items-center">
        {/* Other content */}
        <div className="hidden sm:block my-[70px]">
          <YoutubeVideo onReady={onReady} />
        </div>
        <div className="block sm:hidden my-[70px]">
          <YoutubeVideoSmall onReady={onReady} />
        </div>
        {/* Other content */}
      </div>


      <div ref={elementRef} className="h-[100vh] bg-black-100 w-full px-[40px] sm:px-[4rem] relative flex flex-col-reverse sm:flex-row">
        <div className="flex-[1] flex items-center">
          <div className="">
            <h1 className="font-medium text-[40px] sm:text-[70px] mb-[30px]" style={{ fontFamily: "Edensor" }}>Ready to slay the fashion game?</h1>
            <div className="w-[90%] sm:w-[70%]">
              <p className='text-[15px] sm:text-[19px] mb-[30px]'>Get in line with Glimere&rsquo;s waitlist and join the fashion revolution!</p>
            </div>

            <button className='px-[40px] py-[12px] bg-primary-100 duration-150 hover:bg-[#9d5c0d] flex justify-center items-center text-white text-[15px] rounded-[10px] cursor-pointer'
              onClick={() => { setOpen(true) }}
            >
              Join Now!
            </button>

          </div>
        </div>

      </div>
      {/* 
      <div className="bg-[#4e2012] w-full h-[700px] sm:h-[400px] flex flex-col-reverse sm:flex-row pt-0">

        <div className="flex-[1] flex flex-col-reverse justify-center items-start">

          <div className="w-full flex-[1] bg-[#FFC588] flex flex-col items-center justify-center px-[40px]  py-[40px]">
            <h1 className="text-[40px] sm:text-[50px] text-left text-[#772f1a]" style={{ fontFamily: "Edensor" }}>Fashion for all,</h1> <br /> <p className='text-[20px] sm:text-[24px]' style={{ fontFamily: "Edensor" }}>Personalised and professional</p>
          </div>

          <div className="w-full flex-[1] flex flex-col sm:flex-row justify-center items-center px-[40px]  py-[40px]">
            <img src={glimerenew} alt="" className='w-[70px] sm:w-[40px]' />
            <img src={glimere1} alt="" className='w-[70px] sm:w-[100px] mt-[10px] sm:ml-[20px]' />
          </div>

        </div>

        <div className="flex-[1] bg-[#ffe9b8] flex flex-col p-[20px] items-center justify-center">

          <div className="pb-[40px]">
            <h3 className="text-[#945643] text-[45px] sm:text-[50px] font-semibold" style={{ fontFamily: "Edensor" }}>Let&rsquo;s Get social!</h3>

          </div>


          <div className="flex flex-row justify-between w-[80%] sm:w-[50%]">
            <div className='flex justify-center items-center cursor-pointer hover:bg-[#ca9728] duration-150 rounded-full'>
              <a href="https://web.facebook.com/Glimere" target="_blank" rel="noreferrer">
                <img src={facebook} alt="" className='w-[45px]' />
              </a>
            </div>
            <div className='flex justify-center items-center cursor-pointer hover:bg-[#ca9728] duration-150 rounded-full'>
              <a href="https://twitter.com/glmere" target="_blank" rel="noreferrer">
                <img src={twitter} alt="" className='w-[45px]' />
              </a>
            </div>
            <div className='flex justify-center items-center cursor-pointer hover:bg-[#ca9728] duration-150 rounded-full'>
              <a href="https://www.instagram.com/glimereofficial/" target="_blank" rel="noreferrer">
                <img src={instagram} alt="" className='w-[45px]' />
              </a>
            </div>
            <div className='flex justify-center items-center cursor-pointer hover:bg-[#ca9728] duration-150 rounded-full'>
              <a href="https://www.linkedin.com/company/glimere/" target="_blank" rel="noreferrer">
                <img src={linkedin} alt="" className='w-[45px]' />
              </a>
            </div>
            <div className='flex justify-center items-center cursor-pointer hover:bg-[#ca9728] duration-150 rounded-full'>
              <a href="https://www.youtube.com/channel/UCeJZsLwqBttjiaPdtoNnh6g" target="_blank" rel="noreferrer">
                <img src={youtube} alt="" className='w-[45px]' />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#772f1a] w-full h-[80px] border-t-[1px] border-[#ffe9b865] flex justify-center items-center">
        <h1 className='text-[#ffe9b8] text-[12px]'>© 2023 Glimere. All Rights Reserved.</h1>
      </div> */}



      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative max-h-[700px] p-4 overflow-y-visible transform overflow-hidden rounded-lg bg-[#fff5ee] text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-[#fff5ee] px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      {submitted ?
                        <div className='h-full w-full flex justify-center items-center'>
                          <div className="flex flex-col items-center">
                            <h1 className="text-[35px] text-center" style={{ fontFamily: "Edensor" }}>Thank you for your interest in Glimere</h1>
                            <img src={success} alt="" className='w-[250px] mt-[40px]' />
                          </div>
                        </div>
                        : <form

                          name="contact" action='/contact' method="POST">
                          <input type="hidden" name="form-name" value="contact" />

                          <div className="border-b border-gray-900/10 pb-4">
                            <h2 className="text-[40px] font-semibold  text-[#9d5c0d]" style={{ fontFamily: "Edensor" }}>Get Early Access to Glimere&rsquo;s Exclusive App!</h2>
                            <p className="mt-8 text-sm leading-6 text-gray-600">Thank you for your interest in Glimere! Your details will be used to inform you of our epic launch.</p>

                            <div className="mt-[20px] ">

                              <div className="sm:col-span-3 mb-4">
                                <div className="mt-2">
                                  <input required type="text" name="name" placeholder='Name'

                                    id="name" autoComplete="name" className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm  ring-gray-300 placeholder:text-gray-400 ring-[1px] focus:ring-[#9d5c0d] sm:text-sm sm:leading-6"

                                  ></input>
                                </div>
                              </div>

                              <div className="sm:col-span-4 mb-4">
                                <div className="mt-2">
                                  <input required id="email" name="email" placeholder='Email'
                                    // value={formState.email} 
                                    type="email" autoComplete="email" className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm  ring-gray-300 placeholder:text-gray-400 ring-[1px] focus:ring-[#9d5c0d] sm:text-sm sm:leading-6"
                                  ></input>
                                </div>
                              </div>

                              <div className="sm:col-span-4 mb-4">
                                <div className="mt-2">
                                  <input required id="country" name="country" placeholder='Country'
                                    type="text" autoComplete="country" className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm  ring-gray-300 placeholder:text-gray-400 ring-[1px] focus:ring-[#9d5c0d] sm:text-sm sm:leading-6"
                                  ></input>
                                </div>
                              </div>



                              <div className='relative mb-4'>
                                <legend className="text-sm leading-6 text-gray-600">What best describes your fashion role or interests?</legend>
                                <select id="fashionClass" name="fashionClass" multiple className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-[#f7a477] focus:outline-none focus:ring-[#ed7534] focus:border-[#ed7534] sm:text-sm rounded-md">
                                  <option value="" disabled selected>Select your fashion class...</option>
                                  <option value="Fashionista" className='checked:bg-[#ffb590] checked:text-white'>Fashionista</option>
                                  <option value="Fashion Blogger/Influencer" className='checked:bg-[#ffb590] checked:text-white'>Fashion Blogger/Influencer</option>
                                  <option value="Fashion Designer" className='checked:bg-[#ffb590] checked:text-white'>Fashion Designer</option>
                                  <option value="Fashion Stylist" className='checked:bg-[#ffb590] checked:text-white'>Fashion Stylist</option>
                                  <option value="Fashion Retailer" className='checked:bg-[#ffb590] checked:text-white'>Fashion Retailer</option>
                                  <option value="Fashion Buyer" className='checked:bg-[#ffb590] checked:text-white'>Fashion Buyer</option>
                                  <option value="Fashion Journalist" className='checked:bg-[#ffb590] checked:text-white'>Fashion Journalist</option>
                                  <option value="Fashion Photographer" className='checked:bg-[#ffb590] checked:text-white'>Fashion Photographer</option>
                                  <option value="Fashion Model" className='checked:bg-[#ffb590] checked:text-white'>Fashion Model</option>
                                  <option value="Fashion Consultant" className='checked:bg-[#ffb590] checked:text-white'>Fashion Consultant</option>
                                  <option value="Fashion Entrepreneur" className='checked:bg-[#ffb590] checked:text-white'>Fashion Entrepreneur</option>
                                  <option value="Fashion Marketer" className='checked:bg-[#ffb590] checked:text-white'>Fashion Marketer</option>
                                  <option value="Fashion Educator" className='checked:bg-[#ffb590] checked:text-white'>Fashion Educator</option>
                                  <option value="Fashion Event Planner" className='checked:bg-[#ffb590] checked:text-white'>Fashion Event Planner</option>
                                  <option value="Fashion PR/Publicist" className='checked:bg-[#ffb590] checked:text-white'>Fashion PR/Publicist</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                                    <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" />
                                  </svg>
                                </div>
                              </div>




                              <fieldset>
                                <legend className='text-sm leading-6 text-gray-600'>Will you be interested in Glimeres beta testing</legend>
                                <p>
                                  <label>
                                    <input type="radio" name="beta" id='beta' value="Yes" className='text-[#ed7534] checked:text-[#ed7534] focus:ring-2 focus:ring-transparent after:text-[#ed7534]' /> Yes
                                  </label>
                                </p>
                                <p>
                                  <label>
                                    <input type="radio" name="beta" id='beta' value="No" className='text-[#ed7534] checked:text-[#ed7534] focus:ring-2 focus:ring-transparent after:text-[#ed7534]' /> No
                                  </label>
                                </p>
                              </fieldset>

                            </div>
                          </div>
                          <div className="mt-6 flex items-center justify-center gap-x-6">
                            <button type="submit" className="rounded-md bg-primary-100 px-24 py-2 text-sm font-semibold text-white shadow-sm duration-150 hover:bg-[#9d5c0d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">I&rsquo;m in!</button>
                          </div>
                        </form>}

                    </div>
                  </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}
