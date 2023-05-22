import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { constants } from '../auth/constants'
import { IoIosAdd } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import VerticalCarousel from './VerticalCarousel';


export default function ViewProduct() {
    
    const location = useLocation()

    const [quantity, setQuantity] = useState(1)
    const [apparelSize, setApparelSize] = useState('M')

    const [apparel, setApparel] = useState(location.state)
    console.log('apparel', apparel)
  return (
    <div className='h-[100vh] flex flex-row pt-[80px] w-full relative z-[5]'>

        <div className="w-[43%] h-[430px] flex flex-col bg-[#FFF7E9] right-0 bottom-0 fixed -z-10">
          <div className="w-full h-[70px] bg-[#f7d08a]"></div>
          <div className="w-full h-full p-[45px] flex flex-col  justify-between">
            <div className="">
              <p className="text-[12px] text-gray-400">{apparel.attributes.brand}</p>
            <div className="flex flex-row justify-between mt-[10px]">
            <h1 className="text-[20px]">{apparel.attributes.name}</h1>
            <h1 className="text-[20px] text-[#ED7534]">${apparel.attributes.price}</h1>
            </div>
            </div>
            

            <p className="text-[12px] mt-[20px]">{apparel.attributes.desc}</p>

            <div className="flex flex-row justify-between my-[20px]">
              <div className="flex-[1] flex flex-row items-center">
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

              <div className="flex-[1] flex flex-row items-center">
              <p className='text-[12px] text-[#ED7534] mr-[3px]'>QUANTITY: </p>
              <div className="flex flex-row items-center justify-right w-full">
                <div className="flex-[1] h-[25px] w-[25px] rounded-full flex justify-center items-center"
                onClick={() => setQuantity(quantity - 1)}
                >
                <IoMdArrowDropleft className="w-[20px] h-[20px] text-[#ED7534] cursor-pointer" />
                </div>

                <div className="">
                  <div className="flex-[1] px-[13px] py-[8px] text-[12px] rounded-full flex justify-center items-center bg-gray-200">{quantity}</div>
                </div>

                <div className="flex-[1] h-[25px] w-[25px] rounded-full flex justify-center items-center"
                onClick={() => setQuantity(quantity + 1)}
                >
                <IoMdArrowDropright className="w-[20px] h-[20px] text-[#ED7534] cursor-pointer" />
                </div>
                
              </div>

              </div>
            </div>

            <div className="flex flex-row justify-between">
              <p className='text-[11px] flex-[1]'>Enjoy a special discount when you add up to three items to your cart!</p>
              <div className="flex-[1] flex flex-row justify-center items-center p-[10px] h-[50px] w-full bg-[#ED7534] ml-[20px] cursor-pointer">
                <div className="flex flex-row">
                   <p className='text-white text-[13px] mr-[3px]'>ADD TO CART</p>
                <IoIosAdd className="w-[20px] h-[20px] text-white" />
                </div>
               
              </div>
            </div>
          </div>
        </div>


        <div className="flex-[5.7] flex">
          <div className="h-[87vh] w-full overflow-hidden items-center">
            <VerticalCarousel images={apparel.attributes.imageUrl.data} />
          </div>
        </div>
        <div className="flex-[4.3] -z-50"></div>
    </div>
  )
}
 