import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useInView } from 'react-intersection-observer';
import { constants } from '../global-components/constants';
import { IoIosAdd } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import { AiOutlineHeart } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { BiMessageAltDetail } from 'react-icons/bi'
import { SlArrowLeft } from 'react-icons/sl'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import VerticalCarousel from './VerticalCarousel';
import { StarRating } from './StarRating';
import { useNavigate } from 'react-router-dom';
import Categories from './Categories';
import { useSelector } from 'react-redux';
import { selectAllApparels } from '../slice/apparels/apparelSlice';
import CheckoutSummary from './CheckoutSummary';
import Newsletter from './Newsletter';
import Footer from './Footer';


export default function ViewProduct() {

  const navigate = useNavigate()
  const location = useLocation()
  const { ref: ref, inView: inView } = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin: "0px 0px 0px 0px",
    delay: "0"
  });

  console.log('inView', inView)

  const apparels = useSelector(selectAllApparels)
  const [quantity, setQuantity] = useState(1)
  const [apparelSize, setApparelSize] = useState('M')
  const [apparel, setApparel] = useState(location.state)
  const [IsSticky, setIsSticky] = useState(true)
  const [selectedColors, setSelectedColors] = useState([apparel.attributes.color[0]])

  console.log('apparel', apparel)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const offset = window.scrollY;
  //     if (offset < 750) {
  //       setIsSticky(true);
  //     } else {
  //       setIsSticky(false);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  const handleColorChange = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((s) => s !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
    console.log("selectedColors", selectedColors);
  };



  return (
    <>
      <div className="w-full  bg-white relative">

        <div className={`w-[45%] h-[100vh] flex flex-row right-0 bottom-0 ${inView ? "absolute" : "fixed"}  z-[10]`}>
          {/* <div className="w-full h-[70px] bg-[#f7d08a]"></div> */}
          <div className="w-full h-full pt-[80px] bg-[#FFF7E9] ">
            <div className="w-full h-full px-[50px] pb-[50px] pt-[20px] flex flex-col  justify-between">
              <div className="">
                <h1 className="text-[30px]">{apparel.attributes.name}</h1>
                <div className="flex flex-row items-center mt-[10px]">
                  <StarRating rating={apparel.attributes.rating} />
                  <div className="border-b border-gray-400 border-dotted ml-[30px]">
                    <p className='text-[11px] text-gray-400'>Delivery Info</p>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="flex flex-row mt-[10px] h-[40px] items-center">
                  <h1 className="text-[20px] text-[#ED7534]">${apparel.attributes.price}</h1>
                  <div className="border-b border-gray-400 border-dotted ml-[30px]">
                    <p className='text-[11px] text-gray-400'>Delivery Info</p>
                  </div>
                </div>
              </div>
              <div className="">
                <p className="text-[14px] font-bold text-black">{apparel.attributes.brand}</p>
                <p className="text-[12px] mt-[10px]">{apparel.attributes.desc}</p>
              </div>

              <hr className='bg-[#ED7534] border-none h-[1px]' />

              <div className="w-full">
                <div className="flex flex-wrap gap-[3px]">
                  {apparel.attributes.color.map((color, id) => (
                    <div key={id} className={`flex h-[40px] w-[40px] p-[3px] hover:p-[4px] justify-center items-center ${selectedColors.includes(color) ? "bg-[#ffcaad]" : ""} border-[1px] border-[#ED7534] hover:border-[1px] rounded-full cursor-pointer duration-100`}
                      onClick={() => { handleColorChange(color) }}
                    >
                      <div className={`flex h-full w-full justify-center items-center ${color.toLowerCase() === "black" ? "bg-[#000000]" : color.toLowerCase() === "blue" ? "bg-blue-500" : ""} rounded-full`}>
                        {/* <p className='text-[10px] text-white'>{apparel.attributes.color[0]}</p> */}
                      </div>
                    </div>
                  ))}

                  {/* <div className="flex justify-center space-x-2">
          <input id="nativeColorPicker1" type="color" value="#6590D5" />
          <button
            id="burronNativeColor"
            type="button"
            className="inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg">
            Button
          </button>
        </div> */}

                </div>

              </div>

              <div className="flex flex-row gap-[20px] flex-wrap">
                <div className="flex flex-row items-center w-[50%] mr-[30px]">
                  <p className='text-[12px] text-[#ED7534] mr-[3px]'>QUANTITY: </p>
                  <div className="flex flex-row items-center justify-right w-full">
                    <div className="flex-[1] h-[25px] w-[25px] rounded-full flex justify-center items-center"
                      onClick={() => setQuantity(quantity - 1)}
                    >
                      <IoMdArrowDropleft className="w-[20px] h-[20px] text-[#ED7534] cursor-pointer" />
                    </div>

                    <div className="">
                      <div className="flex-[1] px-[12px] py-[7px] text-[12px] rounded-full flex justify-center items-center bg-white">{quantity}</div>
                    </div>

                    <div className="flex-[1] h-[25px] w-[25px] rounded-full flex justify-center items-center"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <IoMdArrowDropright className="w-[20px] h-[20px] text-[#ED7534] cursor-pointer" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-row items-center">
                  {/* <p className='text-[12px] text-[#ED7534] mr-[3px]'>SIZE: </p> */}
                  {apparel.attributes.size.map((size, id) => {
                    return (
                      <div key={id} className={`px-[12px] py-[8px] rounded-full flex flex-row justify-center items-center ${apparelSize == size ? "bg-[#ED7534] text-white" : "bg-[#ffffff] text-black"}  cursor-pointer mr-[8px]`}
                        onClick={() => setApparelSize(size)}
                      >
                        <p className="text-[9px]">{size}</p>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="flex flex-row items-center justify-between">
                {/* <p className='text-[11px] flex-[1]'>Enjoy a special discount when you add up to three items to your cart!</p> */}
                <div className="flex flex-row justify-center items-center p-[10px] h-[50px] w-[150px] bg-[#ED7534] cursor-pointer">
                  <div className="flex flex-row">
                    <p className='text-white text-[13px] mr-[3px]'>ADD TO CART</p>
                    <IoIosAdd className="w-[20px] h-[20px] text-white" />
                  </div>

                </div>
                <AiOutlineHeart className={`w-[25px] text-[40px] text-[#be7f2d] ml-[20px]`} />
              </div>
            </div>
          </div>
          <div className="relative pt-[80px] h-full bg-white">
            <CheckoutSummary />
          </div>


        </div>


        <div className='h-[100vh] flex flex-row pt-[80px] w-full relative z-[5]'>

          <div className="mt-[80px] ml-[30px] absolute top-0 left-0">
            <div className="h-[50px] w-[50px] flex justify-center items-center rounded-full bg-[#FFF7E9] cursor-pointer"
              onClick={() => navigate(-1)}
            >
              <SlArrowLeft className="text-[#ED7534] text-[20px]" />
            </div>

          </div>




          <div className="flex-[5.5] flex">
            <div className="h-[87vh] w-full overflow-hidden items-center">
              <VerticalCarousel images={apparel.attributes.imageUrl.data} />
            </div>
          </div>
          <div className="flex-[4.5] -z-50"></div>
        </div>


        <div className="flex flex-row w-full pt-[20px] pb-[60px]">
          <div className="flex flex-col flex-[5.5] px-[60px]">
            <div className="w-full">
              {/* <hr /> */}
              <h1 className='text-[23px] font-medium text-[#ED7534]'>Description</h1>
              <hr />
            </div>
            <div className="w-full mt-[20px]">
              <p className="text-[12px]">Introducing the XYZ Fashion Black Gown: A captivating masterpiece that exudes elegance and sophistication. This stunning black gown features intricate hand-embroidered embellishments, a flattering silhouette, and a touch of shimmer. Perfect for special occasions, it embraces timeless style and showcases impeccable craftsmanship. Elevate your look with XYZ Fashion's Exquisite Black Gown and make a lasting impression.</p>
            </div>

            <div className="mt-[40px]">
              <div className="container mx-auto">
                <div className="flex flex-col gap-6">
                  <div className="lg:col-span-2">


                    {/* <!-- Product Variations --> */}
                    <div className="mb-4">
                      <label htmlFor="variation" className="text-lg font-semibold">Variations:</label>
                      <select id="variation" name="variation" className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500">
                        <option value="variation1">Variation 1</option>
                        <option value="variation2">Variation 2</option>
                        <option value="variation3">Variation 3</option>
                      </select>
                    </div>



                    {/* <!-- Comments Section --> */}
                    <div>
                      <div className="w-full mb-[15px]">
                        {/* <hr /> */}
                        <h1 className='text-[23px] font-medium text-[#ED7534]'>Reviews</h1>
                        <hr />
                      </div>
                      <div className='flex flex-col '>
                        <div className="flex flex-col mb-[20px]">
                          <div className="flex flex-row items-center mb-[15px]">
                            <div className='h-[40px] w-[40px] mr-[10px] rounded-full bg-gray-200 '></div>
                            <div className="flex flex-col">
                              <h1 className='text-[12px] font-medium mb-[5px]'>Verra lessley</h1>
                              <StarRating rating={apparel.attributes.rating} />
                            </div>

                          </div>

                          <p className="text-gray-700">This product is amazing!</p>
                        </div>
                        <div className="flex flex-col mb-[20px]">
                          <div className="flex flex-row items-center mb-[15px]">
                            <div className='h-[40px] w-[40px] mr-[10px] rounded-full bg-gray-200 '></div>
                            <div className="flex flex-col">
                              <h1 className='text-[12px] font-medium mb-[5px]'>Verra lessley</h1>
                              <StarRating rating={apparel.attributes.rating} />
                            </div>

                          </div>

                          <p className="text-gray-700">Highly recommended. Great quality!</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-white shadow rounded-lg flex-col">
                      <h2 className="text-[20px] font-semibold mb-[20px]">Seller</h2>
                      <div className="flex items-center">
                        <div className="h-[45px] w-[45px] rounded-full bg-gray-200 mr-[20px]"></div>
                        <div className="w-full flex justify-between items-center">
                          <p className="text-gray-700">XYZ Fashion Store</p>
                          <div className="flex flex-row w-[50px] justify-between">
                            <BsFillTelephoneFill className="text-[#ED7534] text-[20px] mr-[10px]" />
                            <BiMessageAltDetail className="text-[#ED7534] text-[26px]" />

                          </div>
                        </div>
                      </div>
                      {/* <!-- Seller Information --> */}

                    </div>
                  </div>

                  {/* <!-- Similar Apparels --> */}



                </div>
              </div>
            </div>



          </div>
          <div className="w-[45%] -z-50"></div>
        </div>
      </div>

      <div ref={ref} className="">
        <div className='w-full h-[75vh] py-[5vh] px-[30px] bg-[#ffefd1]'>
          <h2 className="text-lg font-semibold pl-[30px] mb-4">Similar Apparels</h2>
          <Categories data={apparels} contentType="apparel" color="#ffffff" />
        </div>
        <Newsletter />
        <Footer />
      </div>

    </>
  )
}
