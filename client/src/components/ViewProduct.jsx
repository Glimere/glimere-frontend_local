import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { constants } from '../global-components/constants';
import { IoIosAdd } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import { AiOutlineHeart } from 'react-icons/ai'
import { SlArrowLeft } from 'react-icons/sl'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import VerticalCarousel from './VerticalCarousel';
import { StarRating } from './StarRating';
import { useNavigate } from 'react-router-dom';


export default function ViewProduct() {

  const navigate = useNavigate()
  const location = useLocation()
  const [quantity, setQuantity] = useState(1)
  const [apparelSize, setApparelSize] = useState('M')
  const [apparel, setApparel] = useState(location.state)
  console.log('apparel', apparel)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);


  return (
    <div className="w-full  bg-white relative">
      <div className='h-[100vh] flex flex-row pt-[80px] w-full relative z-[5]'>

        <div className="mt-[80px] ml-[30px] absolute top-0 left-0">
          <div className="h-[50px] w-[50px] flex justify-center items-center rounded-full bg-[#FFF7E9] cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <SlArrowLeft className="text-[#ED7534] text-[20px]" />
          </div>

        </div>


        <div className="w-[50%] h-full  flex flex-row right-0 bottom-0 fixed -z-10">
          {/* <div className="w-full h-[70px] bg-[#f7d08a]"></div> */}
          <div className="w-[60%] h-full pt-[80px] bg-[#FFF7E9] ">
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

              <div className="flex flex-row justify-between">
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

              <div className="flex flex-row items-center">
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


          <div className="relative w-[40%] h-full bg-white">

            {/* <div className="h-full w-full bg-white ring-gray-400  shadow-[inset_0px_0px_30px_#f7f7f7]"></div> */}
          </div>
        </div>
        

        <div className="flex-[4] flex">
          <div className="h-[87vh] w-full overflow-hidden items-center">
            <VerticalCarousel images={apparel.attributes.imageUrl.data} />
          </div>
        </div>
        <div className="flex-[4.3] -z-50"></div>
      </div>


      <div className="w-full h-[800px]">
        <div className="flex-[4] flex bg-[#FFF7E9]">

        </div>
        <div className="flex-[4.3] -z-50"></div>
      </div>
    </div>
  )
}
