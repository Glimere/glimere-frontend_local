import LandingNav from '../components/LandingNav'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import success from '../assets/images/success.png'
import models from "../assets/images/models.png"
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import YoutubeVideo from '../components/YoutubeVideo';
import YoutubeVideoSmall from '../components/YoutubeVideoSmall';
import materialOne from "../assets/images/materialOne.png"
import materialTwo from "../assets/images/materialTwo.png"
import materialThree from "../assets/images/materialThree.png"
import googles from '../assets/images/googles.png'
import headset from '../assets/images/headset.png'
import samples from '../assets/images/samples.png'
import thread from '../assets/images/thread.png'
import toolsPack from '../assets/images/toolsPack.png'
import Bubble from '../components/Bubble';
import InfiniteSlider from './InfiniteSlider';
import { Canvas } from '@react-three/fiber';
import Model from '../components/Model';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from '@react-three/fiber';
import royalDressglf from "../assets/3D/Royal_Clothes_Model-v2.glb"
import Backdrop from "../assets/images/assortment-abstract-design-elements.jpg"
import { slideImages } from '../components/slideImages';
import { reviewsData } from '../components/reviewsData';

export default function Landing() {

  // const ambientLight = new AmbientLight(0x404040);




  const [open, setOpen] = useState(false)
  const [formState, setFormState] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(false)
  const [play, setPlay] = useState(false)
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isInteracting, setIsInteracting] = useState(false);

  const canvasRef = useRef(null)
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


  const DURATION = 30000;
  const ROWS = 1;
  const TAGS_PER_ROW = 16;

  const REVIEW_DURATION = 50000;
  const REVIEW_ROWS = 2;
  const REVIEW_TAGS_PER_ROW = 10;

  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const shuffle = (arr) => [...arr].sort(() => .5 - Math.random());

  

  const gltf = useLoader(
    GLTFLoader,
    royalDressglf
  )

  const handleInteractionStart = () => {
    setIsInteracting(true);
  };

  const handleInteractionEnd = () => {
    setIsInteracting(false);
  };


  return (
    <>
      <LandingNav />

      <div className='h-[60vh] sm:h-[100vh] bg-secondary-100 bg-cover bg-center bg-no-repeat w-full relative flex flex-row items-center'
      // style={{ backgroundImage: `url(${glimereBg})` }}
      >
        <div className="absolute h-full w-full flex justify-center items-end">
          {/* <Bubble classes="h-[60px] sm:h-[80px]  w-[60px] sm:w-[80px] hover:h-[100px] hover:w-[100px] top-[26%] sm:top-[20%] left-[10%] sm:left-[15%]" img={img1} />
          <Bubble classes="h-[40px] sm:h-[60px]  w-[40px] sm:w-[60px] hover:h-[80px] hover:w-[80px] top-[46%] sm:top-[40%] left-[7%]" img={img2} />
          <Bubble classes="h-[80px] sm:h-[100px] w-[80px]  sm:w-[100px] hover:h-[120px] hover:w-[120px] top-[19%] sm:top-[80%] left-[55%] sm:left-[10%]" img={img3} />
          <Bubble classes="h-[40px] sm:h-[60px]  w-[40px] sm:w-[60px] hover:h-[80px] hover:w-[80px] top-[31%] sm:top-[25%] right-[10%] sm:right-[20%]" img={img4} />
          <Bubble classes="h-[70px] sm:h-[90px]  w-[70px] sm:w-[90px] hover:h-[110px] hover:w-[110px] top-[46%] sm:top-[55%] right-[10%]" img={img5} />
          <Bubble classes="h-[60px] sm:h-[80px]  w-[60px] sm:w-[80px] hover:h-[100px] hover:w-[100px] top-[19%] sm:top-[75%] right-[53%] sm:right-[21%]" img={img6} /> */}
          {/* <img src={landingCover} alt="" className='w-[700px] sm:w-[500px] mb-[-30px] sm:mb-[-200px]' /> */}
        </div>

        <div className="h-full w-full flex flex-col items-center justify-end px-[40px] sm:px-[100px] pt-[80px] pb-[30px]">

          <div className="w-[340px] sm:w-[750px] z-[4] relative mb-[15px]">

            <h1 className="text-[40px] sm:text-[80px] text-center text-black mb-[20px] head-font">Shop Exclusive Custom made Fashion</h1>

          </div>

          <div className='z-[4] border-solid border-[1px] border-black relative py-[5px] sm:py-[10px] px-[25px] sm:px-[50px] rounded-full font-medium text-[15px] text-black'>
            Featuring Top Fashion Creators
          </div>

        </div>


      </div>

      <div className="h-[80vh] sm:h-[100vh] bg-secondary-200 w-full relative flex flex-col-reverse sm:flex-row py-[60px] sm:py-[80px] px-[40px] sm:px-[4rem]">


        <div className='flex-[1] flex flex-col h-full w-full items-start justify-center '>
          <div className="w-[90%] sm:w-[90%] text-left">
            <h1 className="text-black text-[30px] sm:text-[60px] head-font">The Future of African Fashion is Here</h1>

          </div>
          <div className="w-[100%] sm:w-[60%] mt-[20px] text-left">
            <p className="text-black text-[18px]">We’re shaping the future by connecting buyers and consumers with the best that African fashion has to offer.</p>
          </div>
        </div>
        <div className="flex-[1] bg-black-100 rounded-[20px] bg-cover bg-center bg-no-repeat "
          style={{ backgroundImage: `url(${models})` }}

        >
        </div>
      </div>

      <div className="h-[100vh] w-full bg-secondary-100 bg-cover bg-center bg-no-repeat"
      // style={{ backgroundImage: `url(${models})` }}
      >
        <div className="h-full w-full relative">
          <img className=" absolute duration-150  w-[20px] sm:w-[40px]  hover:w-[60px] top-[30%] sm:top-[17%] left-[15%] sm:left-[15%]" src={thread} />
          <img className=" absolute duration-150  w-[40px] sm:w-[60px] hover:w-[80px] rotate-12 top-[70%] sm:top-[40%] left-[7%]" src={samples} />
          <img className=" absolute duration-150  w-[80px]  sm:w-[100px]  hover:w-[120px] top-[19%] sm:top-[75%] left-[55%] sm:left-[10%]" src={materialTwo} />
          <img className=" absolute duration-150  w-[60px] sm:w-[80px] hover:w-[100px] top-[31%] sm:top-[14%] right-[10%] sm:right-[20%]" src={headset} />
          <img className=" absolute duration-150  w-[70px] sm:w-[90px]  hover:w-[110px] rotate-12 top-[70%] sm:top-[40%] right-[10%]" src={materialThree} />
          <img className=" absolute duration-150  w-[60px] sm:w-[80px]  hover:w-[100px] top-[19%] sm:top-[75%] right-[53%] sm:right-[21%]" src={toolsPack} />
          <div className="h-full w-full flex justify-center items-center">
            <div className="w-[340px] sm:w-[750px]">
              <h1 className="text-[40px] mt-[100px] sm:mt-0 sm:text-[60px] text-center head-font">We focus on technology to build a more sustainable solution</h1>
            </div>
          </div>
        </div>

      </div>

      <div className="h-[100vh] sm:h-[140vh] bg-secondary-200 py-[50px]">
        <div className="h-full w-full flex flex-col gap-[50px] justify-center items-center">
          <div className="w-full sm:w-[60%] flex  px-[40px] justify-start sm:justify-center items-center">
            <h1 className='text-left sm:text-center text-[30px] head-font'>Our User Friendly Platform allows you to explore unique styles from top Fashion Creators</h1>
          </div>
          <div className="w-[80%] sm:w-[73%] h-[400px] sm:h-[420px] p-[40px] overflow-hidden bg-[#fff7db] rounded-[30px] ">

            {[...new Array(ROWS)].map((_, i) => (
              <InfiniteSlider
                key={i}
                duration={random(DURATION - 5000, DURATION + 5000)}
                reverse={i % 2}
                isHovered={isHovered} // Pass the isHovered state
                className="gap-[100px] h-full"
              >
                {shuffle(slideImages).slice(0, TAGS_PER_ROW).map((images, id) => (
                  <div
                    key={id}
                    className=" h-full w-[150px] bg-cover bg-center bg-no-repeat flex flex-col justify-between items-center pt-[10px] sm:pt-[20px]"
                  >
                    <img className='peer hover:scale-125 duration-300' src={images.image} height="300" alt="" />
                    <div className="w-[5px] peer-hover:w-full h-[5px] peer-hover:h-[50px] bg-black peer-hover:bg-[#0000002a] peer-hover:blur-sm duration-500 rounded-[50%]"></div>
                  </div>
                ))}
              </InfiniteSlider>
            ))}



          </div>
        </div>
      </div>

      <div className="h-[160vh] sm:h-[150vh] bg-secondary-100 py-[50px]">
        <div className="h-full w-full flex flex-col gap-[30px] justify-center items-center">
          <div className="w-full sm:w-[60%] flex px-[40px] justify-start sm:justify-center items-center">
            <h1 className='text-left sm:text-center text-[35px] sm:text-[40px] head-font'>With an interactive and immersive 3D Experience</h1>
          </div>
          <div className="w-[100%] sm:w-[73%] h-[1000px] p-[20px] flex justify-center items-center relative">

            <div className="loading-indicator absolute">
              {isLoading ? <p>Loading model...</p> : null}
            </div>

            <div className="w-[90%] sm:w-[80%] h-full rounded-[30px] overflow-hidden bg-[#ffe9b8] relative pt-[30px] bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${Backdrop})` }}

            >

              <div className="absolute h-[70%] w-full flex justify-between items-center p-[20px] sm:p-[50px]">
                <div className="h-full flex flex-col p-[10px] rounded-[10px] gap-[20px]">

                </div>
                <div className="flex flex-col gap-[30px] z-[10]">
                  <div className="h-[40px] w-[40px] flex justify-center items-center cursor-pointer bg-[#ed7534] rounded-full">
                    <div className="h-[20px] w-[20px] hover:h-[30px] hover:w-[30px] duration-150 rounded-full bg-[#fef8e9]"></div>
                  </div>
                  <div className="h-[40px] w-[40px] flex justify-center items-center cursor-pointer bg-[#ffc588] rounded-full">
                    <div className="h-[20px] w-[20px] hover:h-[30px] hover:w-[30px] duration-150 rounded-full bg-[black]"></div>
                  </div>
                  <div className="h-[40px] w-[40px] flex justify-center items-center cursor-pointer bg-[#772f1a] rounded-full">
                    <div className="h-[20px] w-[20px] hover:h-[30px] hover:w-[30px] duration-150 rounded-full bg-[white]"></div>
                  </div>
                </div>
              </div>

              <Canvas ref={canvasRef} camera={{ position: [0, 1, 5] }} shadows
                onMouseDown={handleInteractionStart}
                onTouchStart={handleInteractionStart}
                onMouseUp={handleInteractionEnd}
                onTouchEnd={handleInteractionEnd}
              >
                <Model gltf={gltf} initialScale={1} canvasRef={canvasRef} setIsLoading={setIsLoading} isInteracting={isInteracting} />
              </Canvas>
            </div>


          </div>

          <div className="w-full sm:w-[60%] flex  px-[40px] justify-start sm:justify-center items-center">
            <p className="text-[18px] text-center">Preview items in realistic 3D environment, visualize texture, size and real time-look.</p>
          </div>
        </div>
      </div>

      <div className="h-[80vh] sm:h-[100vh] bg-secondary-200 w-full relative flex flex-col-reverse sm:flex-row py-[60px] sm:py-[80px] px-[40px] sm:px-[4rem]"
      >


        <div className='flex-[1] flex flex-col h-full w-full items-start justify-center '>
          <div className="w-[90%] sm:w-[90%] text-left">
            <h1 className="text-black text-[30px] sm:text-[60px] head-font">Experience Custom-Made Freedom</h1>

          </div>
          <div className="w-[100%] sm:w-[60%] mt-[20px] text-left">
            <p className="text-black text-[18px]">Make custom requests from skilled fashion creators in seconds and have them made and delivered to you in few days </p>
          </div>
        </div>
        <div className="flex-[1] bg-black-100 rounded-[20px]"
                style={{ backgroundImage: `url(${models})` }}

        >
        </div>
      </div>

      <div className="h-[80vh] sm:h-[100vh] bg-secondary-100 w-full relative flex justify-center items-center">
        <div className="flex flex-col-reverse gap-[20px] sm:flex-row w-[65%]">
          <div className="h-[300px] w-[450px] flex-[1.8] bg-white rounded-[10px]"></div>
          <div className="flex-1 flex flex-col gap-[20px] h-[300px]">
            <div className="w-full h-[100px] bg-white rounded-[10px]"></div>
            <div className="w-full h-[100px] bg-white rounded-[10px]"></div>
            <div className="w-full h-[100px] bg-white rounded-[10px]"></div>
          </div>
        </div>
      </div>

      <div className="h-[100vh] bg-black flex flex-col gap-[50px] items-center py-[50px]">
        <div className="w-full flex flex-col gap-[40px]">
            {[...new Array(REVIEW_ROWS)].map((_, i) => (
              <InfiniteSlider
              key={1}
              duration={random(REVIEW_DURATION - 5000, REVIEW_DURATION + 5000)}
              reverse={i % 2}
              isHovered={isHovered} // Pass the isHovered state
              className="gap-[40px] h-full"
              >
               {shuffle(reviewsData).slice(0, REVIEW_TAGS_PER_ROW).map((data, id) => (
                  <div
                    key={id}
                    className="flex flex-col h-[200px] w-[350px] bg-[#313131] rounded-[20px] duration-300"
                  >
                    <div className="flex-[1] flex flex-row gap-[20px] items-center pt-[20px] px-[25px]">
                      <div className="bg-gray-200 h-[40px] w-[40px] rounded-full"></div>
                      <div className="text-white text-[]">{data.user.name}</div>
                    </div>
                    <div className="flex-[3] text-white px-[25px] py-[20px]">{data.comment}</div>

                  </div>
                ))}
              </InfiniteSlider>
            ))}
        </div>

        <p className="text-[30px] font-semibold text-white">Hear What People Are Saying About Us</p>
      </div>


      <div ref={playref} className="container bg-black-100 max-w-full flex justify-center items-center">
        {/* Other content */}
        <div className="hidden sm:block my-[70px]">
          <YoutubeVideo onReady={onReady} />
        </div>
        <div className="block sm:hidden my-[70px]">
          <YoutubeVideoSmall onReady={onReady} />
        </div>
        {/* Other content */}
      </div>


      <div ref={elementRef} className="h-[60vh] bg-black-100 w-full px-[40px] sm:px-[4rem] relative flex flex-col sm:flex-row">
        <div className="flex items-center">
          <div className="">
            <h1 className=" text-[40px] text-black sm:text-[70px] mb-[30px] head-font">Ready to slay the fashion game?</h1>
            <div className="w-[90%] sm:w-[70%]">
              <p className='text-[15px] sm:text-[19px] text-black mb-[30px]'>Get in line with Glimere&rsquo;s waitlist and join the fashion revolution!</p>
            </div>

            <button className='px-[40px] py-[12px] bg-primary-100 duration-150 hover:bg-[#9d5c0d] flex justify-center items-center text-white text-[15px] rounded-[10px] cursor-pointer'
              onClick={() => { setOpen(true) }}
            >
              Join Now!
            </button>

          </div>
        </div>

      </div>

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
                            <h1 className="text-[35px] text-center head-font">Thank you for your interest in Glimere</h1>
                            <img src={success} alt="" className='w-[250px] mt-[40px]' />
                          </div>
                        </div>
                        : <form

                          name="contact" action='/contact' method="POST">
                          <input type="hidden" name="form-name" value="contact" />

                          <div className="border-b border-gray-900/10 pb-4">
                            <h2 className="text-[40px] font-semibold  text-[#9d5c0d] head-font">Get Early Access to Glimere&rsquo;s Exclusive App!</h2>
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
                                  <option value="Fashionista" className='checked:bg-[#ffb590] checked:text-black'>Fashionista</option>
                                  <option value="Fashion Blogger/Influencer" className='checked:bg-[#ffb590] checked:text-black'>Fashion Blogger/Influencer</option>
                                  <option value="Fashion Designer" className='checked:bg-[#ffb590] checked:text-black'>Fashion Designer</option>
                                  <option value="Fashion Stylist" className='checked:bg-[#ffb590] checked:text-black'>Fashion Stylist</option>
                                  <option value="Fashion Retailer" className='checked:bg-[#ffb590] checked:text-black'>Fashion Retailer</option>
                                  <option value="Fashion Buyer" className='checked:bg-[#ffb590] checked:text-black'>Fashion Buyer</option>
                                  <option value="Fashion Journalist" className='checked:bg-[#ffb590] checked:text-black'>Fashion Journalist</option>
                                  <option value="Fashion Photographer" className='checked:bg-[#ffb590] checked:text-black'>Fashion Photographer</option>
                                  <option value="Fashion Model" className='checked:bg-[#ffb590] checked:text-black'>Fashion Model</option>
                                  <option value="Fashion Consultant" className='checked:bg-[#ffb590] checked:text-black'>Fashion Consultant</option>
                                  <option value="Fashion Entrepreneur" className='checked:bg-[#ffb590] checked:text-black'>Fashion Entrepreneur</option>
                                  <option value="Fashion Marketer" className='checked:bg-[#ffb590] checked:text-black'>Fashion Marketer</option>
                                  <option value="Fashion Educator" className='checked:bg-[#ffb590] checked:text-black'>Fashion Educator</option>
                                  <option value="Fashion Event Planner" className='checked:bg-[#ffb590] checked:text-black'>Fashion Event Planner</option>
                                  <option value="Fashion PR/Publicist" className='checked:bg-[#ffb590] checked:text-black'>Fashion PR/Publicist</option>
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
                            <button type="submit" className="rounded-md bg-primary-100 px-24 py-2 text-sm font-semibold text-black shadow-sm duration-150 hover:bg-[#9d5c0d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">I&rsquo;m in!</button>
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
