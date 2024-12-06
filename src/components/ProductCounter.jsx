import React, { useState } from 'react'
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import { updateCart } from '../slice/cart/cartSlice';
import { useDispatch } from 'react-redux';
import { selectAllUsers, selectLoggedInUser } from '../slice/users/userSlice';
import { useSelector } from 'react-redux';

export default function ProductCounter(props) {


  const dispatch = useDispatch()
  const loggedinUser = useSelector(selectLoggedInUser)
const user = useSelector(selectAllUsers)

  return (
    <div className="flex flex-row gap-[20px] flex-wrap">
      <div className="flex flex-row items-center w-[20%] mr-[30px]">
        <p className='text-[12px] text-[#ED7534] mr-[3px]'>QTY: </p>
        <div className="flex flex-row items-center justify-right w-full">
          <div className="flex-[1] h-[25px] w-[25px] rounded-full flex justify-center items-center bg-[#FFF7E9]"
            onClick={() => {
              if (props.item.data.attributes.quantity > 1) {
                dispatch(updateCart({
                  newQuantity: { quantity: props.item.data.attributes.quantity - 1 },
                  jwt: loggedinUser.jwt,
                  itemId: props.item.data.id
                }))
            }
            }}
          >
            <IoMdArrowDropleft className="w-[20px] h-[20px] text-[#ED7534] cursor-pointer" />
          </div>

          <div className="">
            <div className="flex-[1] px-[12px] py-[7px] text-[12px] rounded-full flex justify-center items-center bg-white-100">{props.item.data.attributes.quantity}</div>
          </div>

          <div className="flex-[1] h-[25px] w-[25px] rounded-full flex justify-center items-center bg-[#FFF7E9]"
            onClick={() => {
              dispatch(updateCart({
                newQuantity: { quantity: props.item.data.attributes.quantity + 1 },
                jwt: loggedinUser.jwt,
                itemId: props.item.data.id
              }))
            }}
          >
            <IoMdArrowDropright className="w-[20px] h-[20px] text-[#ED7534] cursor-pointer" />
          </div>
        </div>
      </div>

    </div>
  )
}
