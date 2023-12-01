import {useRef, Fragment, useEffect, useState } from "react";
import Shoppers from './Shoppers'
import Creators from './Creators'
import NavbarDropdown from "../global-components/NavbarDropdown";
import { ReactComponent as GlimereSweet } from "../assets/images/glimere-primary.svg"
import { ReactComponent as GlimereLogo } from "../assets/images/glimerenew.svg"
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Dialog, Transition } from '@headlessui/react'

export default function Landing() {

  const [play, setPlay] = useState(false)
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isInteracting, setIsInteracting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [formState, setFormState] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(false)
  const [open, setOpen] = useState(false)
  const [page, setPage] = useState(1)


  const location = useLocation()

    const [isOpen, setIsOpen] = useState(false);
    const [scrollPos, setScrollPos] = useState(0);

    const creatorsPath = page == 2 ? true : false

    const navLogoColor = location.pathname == "/" && isOpen ? "#ffffff" : "#000000"

    const cancelButtonRef = useRef(null)

    const handleOpen = () => setIsOpen((prev) => !prev);

    const handleScrollPos = () => {
        const currentScrollPos = window.scrollY

        if (currentScrollPos > scrollPos) {
            setIsOpen(false)
        }

        setScrollPos(currentScrollPos)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScrollPos)

        return () => {
            window.removeEventListener("scroll", handleScrollPos)
        }
    }, [scrollPos]);

     
    const canvasRef = useRef(null)
  
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
  
    const handleInteractionStart = () => {
      setIsInteracting(true);
    };
  
    const handleInteractionEnd = () => {
      setIsInteracting(false);
    };
  
    const handleSwitchModel = () => {
      const nextIndex = (currentIndex + 1) % modelData.length;
      setCurrentIndex(nextIndex);
    };
  

  return (
    <>
      <nav className="absolute w-full h-[80px] px-[25px] sm:px-[40px] sm:p-0 flex items-center">
            <div className="container mx-auto max-w-[1344px]">
                <div className="h-16 md:h-20 md:py-6 flex items-center justify-between z-20 relative">
                    {/* Icon */}
                    <div className="flex flex-row items-center">
                        <GlimereLogo style={{ color: navLogoColor }} height="35" className={`h-[40px] block`} />
                        {/* <GlimereSweet style={{ color: "#ed7534" }} height="35" className={`w-[120px] hidden sm:block`} /> */}
                    </div>


                    

                    {/* Menu */}
                    <div className="flex flex-row w-[230px] items-center justify-center">
                        <div className="flex flex-row gap-[20px] sm:gap-[50px]">
                            <div className={`hover:border-gray-400 duration-150 ${!creatorsPath ? "border-black" : "border-transparent"} border-solid border-b-[3px]`}>
                                    <p className={`text-black text-[14px] sm:text-[16px] cursor-pointer`}
                                    onClick={()=> {setPage(1)}}
                                    >Shoppers</p>
                            </div>
                            <div className={`hover:border-gray-400 duration-150 ${creatorsPath ? "border-black" : "border-transparent"} border-solid border-b-[3px]`}>
                                    <p className={`text-black text-[14px] sm:text-[16px] cursor-pointer`}
                                    onClick={()=> {setPage(2)}}
                                    >Fashion Creators</p>
                            </div>
                        </div>


                    </div>


                    {/* Hamburger */}
                    <div
                        onClick={handleOpen}
                        className={`${isOpen ? "open" : ""} flex flex-col items-center w-fit gap-[7px] cursor-pointer md:hidden z-20`}
                    >
                        <span className={`transition-all duration-500 ease-in-out h-[2px] w-5 ${isOpen ? "bg-white" : "bg-black"} rounded-full`}></span>
                        <span className={`transition-all duration-500 ease-in-out h-[2px] w-4 ${isOpen ? "bg-white" : "bg-black"} rounded-full`}></span>
                        <span className={`transition-all duration-500 ease-in-out h-[2px] w-5 ${isOpen ? "bg-white" : "bg-black"} rounded-full`}></span>
                    </div>

                    {/* Button */}
                    <div className="hidden md:flex md:gap-4 lg:gap-[25px] items-center text-sm lg:text-base font-body font-medium">
                        <Link to="/login" className={`${!creatorsPath ? "visible" : "hidden"}`}>
                            <button className={`text-black ${"border-black"} hover:bg-black duration-150 hover:text-white border-solid border-[1px] md:py-2.5 py-3.5 px-[25px] rounded-[10px]`}>
                                Get Started
                            </button>
                        </Link>



                        <Link to="/register" className={`${creatorsPath ? "visible" : "hidden"}`}>
                            <button className={`text-black ${"border-black"} hover:bg-black duration-150 hover:text-white border-solid border-[1px] md:py-2.5 py-3.5 px-[25px] rounded-[10px]`}>
                                Sell on Glimere
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Navbar Menu (Mobile) */}
                <NavbarDropdown isOpen={isOpen} modalToggle={setOpen} />
            </div>
        </nav>

        {page === 1 ? 
        <Shoppers
        setSubmitted={setSubmitted}
        setOpen={setOpen}
        /> 
        : 
        <Creators 
        setOpen={setOpen}
        />}
      

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-[20]" initialFocus={cancelButtonRef} onClose={setOpen}>
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
                                <legend className="text-sm leading-6 text-gray-600">How will you like to use Glimere?</legend>
                                <select id="fashionClass" name="fashionClass" multiple className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-[#f7a477] focus:outline-none focus:ring-[#ed7534] focus:border-[#ed7534] sm:text-sm rounded-md">
                                  <option value="" disabled defaultValue={"none"}>Select your user class...</option>
                                  <option value="Buying Fashion" className='checked:bg-[#ffb590] checked:text-black'>Buying Fashion</option>
                                  <option value="Creating Fashion" className='checked:bg-[#ffb590] checked:text-black'>Creating Fashion</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                                    <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" />
                                  </svg>
                                </div>
                              </div>




                              <fieldset>
                                <legend className='text-sm leading-6 text-gray-600'>Will you be interested in Glimere's beta testing</legend>
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
                            <button type="submit" className="rounded-md bg-primary-100 px-24 py-2 text-sm font-semibold text-black shadow-sm duration-150 hover:bg-[#9d5c0d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-white">I&rsquo;m in!</button>
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
