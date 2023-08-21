import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { AiOutlineArrowRight } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { constants } from '../global-components/constants';
import { removeItem, resetCart } from '../slice/cart/cartSlice';
import { useDispatch } from 'react-redux';

export default function Cart(props) {

  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    props.cart.forEach((item) => {
      total += item.price * item.quantity;
    })
    return total.toFixed(2);
  }

  return (
    <div className={`absolute right-0 overflow-hidden ${props.menuToggle ? "min-h-[280px] max-h-[350px] sm:min-h-[300px] sm:max-h-[420px]" : "max-h-[0px]"} w-[45%] min-[1127px]:w-[350px] sm:w-[300px] duration-300 bg-[#ffe9b8]`}
    >
      <div className="w-full h-full flex flex-col pb-[20px]">

        {props.cart.length == 0 ? <div className='min-h-[320px] max-h-[350px] sm:min-h-[390px] sm:max-h-[420px] w-full flex justify-center items-center'>
          <div className="flex flex-col justify-center px-[35px]">
            <h1 className='text-[#9d5c0d] text-[18px] font-bold text-center '>Oops! It looks like your cart is currently empty.</h1>
            <p className='mt-[10px] text-[12px] text-center '>But fear not, your fashion journey is just a click away</p>
          </div>
        </div>
          :
          <div className="flex flex-col gap-[12px]">
            <div className="w-full pt-[100px] flex flex-col  max-h-[300px] overflow-y-scroll">

              {props.cart.map((item) => (
                <div key={item.id} className="w-full flex flex-row items-center justify-between px-[20px] py-[10px] gap-[10px] hover:bg-[#fff8ea]">
                  <div className="flex-[2.5] h-[90px] w-[70px] bg-cover bg-center bg-no-repeat bg-black"
                    style={{ backgroundImage: `url(${constants.url}${item.imageUrl})` }}
                  >
                  </div>
                  <div className="flex-[6.5] flex flex-col gap-[5px]">
                    <h1 className='text-[13px] font-semibold'>{item.name}</h1>
                    <p className='text-[10px]'>{item.desc}</p>
                    <span className=''>{item.quantity} x {item.price}</span>
                  </div>
                  <div className="flex-[i] cursor-pointer"
                  onClick={() => dispatch(removeItem(item.id))}
                  >
                    <FaTrash className={`text-[15px] text-red-600 duration-200 `} />
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full flex px-[20px] flex-row justify-between items-center">
              <h1>SUBTOTAL</h1>
              <span>${totalPrice()}</span>
            </div>

            <div className="w-full flex px-[20px] flex-row justify-between items-center">
              <div className="flex flex-row justify-center items-center p-[10px] h-[30px] w-[160px] bg-[#ED7534] cursor-pointer">
                <div className="flex flex-row gap-[4px]">
                  <p className='text-white text-center text-[9px]'>PROCEED TO CHECKOUT</p>
                  <AiOutlineArrowRight className="text-[12px] text-white" />
                </div>
              </div>

              <div className="flex justify-center items-center p-[10px] h-[30px] cursor-pointer"
              onClick={() => dispatch(resetCart())}
              >
                <p className='text-black text-center text-[12px]'>Clear Cart</p>
              </div>
            </div>
          </div>}



      </div>

    </div>
  )
}
