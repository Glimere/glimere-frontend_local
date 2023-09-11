import React,{useState} from 'react'
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";

export default function ProductCounter(props) {
    const [quantity, setQuantity] = useState(props.quantity)

  return (
    <div className="flex flex-row gap-[20px] flex-wrap">
                <div className="flex flex-row items-center w-[20%] mr-[30px]">
                  <p className='text-[12px] text-[#ED7534] mr-[3px]'>QTY: </p>
                  <div className="flex flex-row items-center justify-right w-full">
                    <div className="flex-[1] h-[25px] w-[25px] rounded-full flex justify-center items-center bg-[#FFF7E9]"
                      onClick={() => setQuantity(quantity - 1)}
                    >
                      <IoMdArrowDropleft className="w-[20px] h-[20px] text-[#ED7534] cursor-pointer" />
                    </div>

                    <div className="">
                      <div className="flex-[1] px-[12px] py-[7px] text-[12px] rounded-full flex justify-center items-center bg-white">{quantity}</div>
                    </div>

                    <div className="flex-[1] h-[25px] w-[25px] rounded-full flex justify-center items-center bg-[#FFF7E9]"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <IoMdArrowDropright className="w-[20px] h-[20px] text-[#ED7534] cursor-pointer" />
                    </div>
                  </div>
                </div>

              </div>
  )
}
