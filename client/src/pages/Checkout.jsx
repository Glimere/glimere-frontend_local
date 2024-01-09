import React, { useState } from 'react'
import CheckoutSummary from '../components/CheckoutSummary'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoIosAdd } from "react-icons/io";
import { useSelector } from 'react-redux';
import { selectCart } from '../slice/cart/cartSlice';




export default function Checkout() {
    const [toggleEdit, setToggleEdit] = useState(false)
    const [checkoutTabSwitch, setCheckoutTabSwitch] = useState(1)

    const cart = useSelector(selectCart)

    const totalPrice = () => {
        let total = 0;
        cart.forEach((item) => {
          total += item.price * item.quantity;
        })
        return total.toFixed(2);
      }

    console.log('checkoutTabSwitch', checkoutTabSwitch)

    return (
        <div className="pt-[80px] bg-white">

            <div className="w-full h-[70px] flex justify-center items-center bg-[#fff3e2]">
                <div className="w-[50%] flex flex-row justify-between">
                    <div className="flex-[1] flex justify-center items-center">
                        <div className="flex flex-row">
                            <div className="h-[20px] w-[20px] mr-[10px] flex justify-center items-center rounded-full border-[1px] border-solid border-black"
                            onClick={()=> {setCheckoutTabSwitch(1)}}
                            >
                                <p className='text-[10px]'>1</p>
                            </div>
                            <h1>Shipping</h1>
                        </div>
                    </div>

                    <MdOutlineKeyboardArrowRight className="w-[20px] h-[20px] text-[#ED7534] cursor-pointer" />


                    <div className="flex-[1] flex justify-center items-center">
                        <div className="flex flex-row">
                            <div className="h-[20px] w-[20px] mr-[10px] flex justify-center items-center rounded-full border-[1px] border-solid border-black"
                            onClick={()=> {setCheckoutTabSwitch(2)}}
                            >
                                <p className='text-[10px]'>2</p>
                            </div>
                            <h1>Payment</h1>
                        </div>
                    </div>

                    <MdOutlineKeyboardArrowRight className="w-[20px] h-[20px] text-[#ED7534] cursor-pointer" />


                    <div className="flex-[1] flex justify-center items-center">
                        <div className="flex flex-row">
                            <div className="h-[20px] w-[20px] mr-[10px] flex justify-center items-center rounded-full border-[1px] border-solid border-black"
                            onClick={()=> {setCheckoutTabSwitch(3)}}
                            >
                                <p className='text-[10px]'>3</p>
                            </div>
                            <h1>Confirm</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-[80vh] px-[60px] ">

                <div className={`w-full h-full flex-row ${checkoutTabSwitch === 1 ? "flex" : "hidden"} bg-white gap-[50px]`}>
                    <div className="flex-[7] bg-white">
                        {toggleEdit ? <div className="w-full h-full bg-white p-[40px]">
                            <div className="flex flex-row justify-center items-center p-[10px] h-[50px] w-[150px] bg-primary-100 cursor-pointer"
                            
                            onClick={()=>{setToggleEdit(false)}}>
                                <div className="flex flex-row">
                                    <p className='text-white-100 text-[13px] mr-[3px]'>ADD TO CART</p>
                                    <IoIosAdd className="w-[20px] h-[20px] text-white-100" />
                                </div>

                            </div>
                        </div> : <div className="w-full h-full bg-white pb-[40px]">
                            <h1 className='text-[20px] font-bold my-[20px]'>Choose Shipping Address</h1>
                            <div className="h-[80%] w-full grid grid-cols-2 grid-rows-2 gap-[20px]">

                                <div className="flex flex-col justify-between border-[1px] border-solid border-gray-200 rounded-[10px] p-[20px] cursor-pointer hover:bg-[#fff8ee] duration-150"
                                    onClick={() => { setToggleEdit(true) }}
                                >
                                    <div className="flex flex-row justify-between items-center mb-[20px]">
                                        <h1>Family House</h1>
                                        <FiEdit2 className="w-[20px] h-[20px] text-[#ED7534] cursor-pointer" />

                                    </div>
                                    <div className="flex flex-col">
                                        <span>John Doe</span>
                                        <span>Plot 11, Block K, Alaba Layout</span>
                                        <span>Akure, Ondo State, Nigeria.</span>
                                        <span>+860 994 4400</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-center border-[1px] border-solid border-gray-200 rounded-[10px] p-[20px] cursor-pointer hover:bg-[#fff8ee] duration-150"
                                    onClick={() => { setToggleEdit(true) }}
                                >
                                    <div className="flex flex-row justify-center  items-center">
                                        <h1 className='mr-[5px] text-center'>Add new address</h1>
                                        <IoAddCircleOutline className="w-[20px] h-[20px] text-[50px] text-[#ED7534] cursor-pointer" />

                                    </div>
                                </div>

                            </div>
                        </div>}


                    </div>

                    <div className="flex-[3]">
                    <CheckoutSummary totalPrice={totalPrice()} cart={cart} />

                    </div>
                </div>



                <div className={`w-full h-full ${checkoutTabSwitch === 2 ? "flex" : "hidden"} flex-row bg-white gap-[50px]`}>
                    <div className="flex-[7] bg-white">
                        <div className="w-full h-full bg-white pb-[40px]">
                            <h1 className='text-[20px] font-bold my-[20px]'>Payment</h1>
                            {/* <div className="h-[80%] w-full grid grid-cols-2 grid-rows-2 gap-[20px]">

                                <div className="flex flex-col justify-between border-[1px] border-solid border-gray-200 rounded-[10px] p-[20px] cursor-pointer hover:bg-[#fff8ee] duration-150">
                                    <div className="flex flex-row justify-between items-center mb-[20px]">
                                        <h1>Family House</h1>
                                        <FiEdit2 className="w-[20px] h-[20px] text-[#ED7534] cursor-pointer" />

                                    </div>
                                    <div className="flex flex-col">
                                        <span>John Doe</span>
                                        <span>Plot 11, Block K, Alaba Layout</span>
                                        <span>Akure, Ondo State, Nigeria.</span>
                                        <span>+860 994 4400</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-center border-[1px] border-solid border-gray-200 rounded-[10px] p-[20px] cursor-pointer hover:bg-[#fff8ee] duration-150">
                                    <div className="flex flex-row justify-center  items-center">
                                        <h1 className='mr-[5px] text-center'>Add new address</h1>
                                        <IoAddCircleOutline className="w-[20px] h-[20px] text-[50px] text-[#ED7534] cursor-pointer" />

                                    </div>
                                </div>

                            </div> */}
                        </div>
                    </div>

                    <div className="flex-[3]">
                    <CheckoutSummary totalPrice={totalPrice()} cart={cart} />

                    </div>
                </div>






                <div className={`w-full h-full ${checkoutTabSwitch === 3 ? "flex " : "hidden"} flex-row bg-white gap-[50px]`}>
                    <div className="flex-[7] bg-white">
                        <div className="w-full h-full bg-white pb-[40px]">
                            <h1 className='text-[20px] font-bold my-[20px]'>Confirm</h1>
                            {/* <div className="h-[80%] w-full grid grid-cols-2 grid-rows-2 gap-[20px]">

                                <div className="flex flex-col justify-between border-[1px] border-solid border-gray-200 rounded-[10px] p-[20px] cursor-pointer hover:bg-[#fff8ee] duration-150">
                                    <div className="flex flex-row justify-between items-center mb-[20px]">
                                        <h1>Family House</h1>
                                        <FiEdit2 className="w-[20px] h-[20px] text-[#ED7534] cursor-pointer" />

                                    </div>
                                    <div className="flex flex-col">
                                        <span>John Doe</span>
                                        <span>Plot 11, Block K, Alaba Layout</span>
                                        <span>Akure, Ondo State, Nigeria.</span>
                                        <span>+860 994 4400</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-center border-[1px] border-solid border-gray-200 rounded-[10px] p-[20px] cursor-pointer hover:bg-[#fff8ee] duration-150">
                                    <div className="flex flex-row justify-center  items-center">
                                        <h1 className='mr-[5px] text-center'>Add new address</h1>
                                        <IoAddCircleOutline className="w-[20px] h-[20px] text-[50px] text-[#ED7534] cursor-pointer" />

                                    </div>
                                </div>

                            </div> */}
                        </div>
                    </div>

                    <div className="flex-[3]">
                    <CheckoutSummary totalPrice={totalPrice()} cart={cart} />

                    </div>
                </div>



            </div>

        </div>
    )
}
