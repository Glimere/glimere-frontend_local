import React, { useEffect, useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { AiOutlineArrowRight } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { constants } from '../global-components/constants';
import { removeItem, resetCart } from '../slice/cart/cartSlice';
import { useDispatch } from 'react-redux';
import { selectCart } from '../slice/cart/cartSlice';
import CheckoutSummary from '../components/CheckoutSummary';
import ProductCounter from '../components/ProductCounter';
import ProductColor from '../components/ProductColor';
import { selectAllUsers } from '../slice/users/userSlice';
import axios from 'axios';
import { deleteCart } from '../slice/cart/cartSlice';
import { selectLoggedInUser } from '../slice/users/userSlice';

export default function Cart(props) {

  const dispatch = useDispatch();
  const cart = useSelector(selectCart)
  const jwt = useSelector(selectLoggedInUser).jwt

  console.log('cart', cart)


  const totalPrice = () => {
    let total = 0;
    cart.map((items) => items.data.attributes.products.data.forEach((item) => total += item.attributes.price * items.data.attributes.quantity))
    return total.toFixed(2);
  }
  let NGNaira = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  });

  console.log('cart', cart)

  return (
    <div className="flex flex-row">
      <div className={`w-full flex-[8] duration-300 bg-white px-[15px] sm:px-[60px] pb-[40px] pt-[80px]`}
      >
        <div className="w-full h-full flex flex-col pb-[20px]">

          {cart.length == 0 ? <div className='h-full w-full flex justify-center items-center'>
            <div className="flex flex-col justify-center px-[35px]">
              <h1 className='text-[#9d5c0d] text-[18px] font-bold text-center '>Oops! It looks like your cart is currently empty.</h1>
              <p className='mt-[10px] text-[12px] text-center '>But fear not, your fashion journey is just a click away</p>
            </div>
          </div>
            :
            <div className="flex flex-col gap-[12px]">
              <div className="w-full pt-[0px] sm:pt-[20px] flex flex-col h-full">
                <h1 className='text-[20px] font-bold mb-[30px]'>Shopping Cart</h1>

                <div className="flex flex-col gap-[20px] justify-between">
                  {cart.map((items, id) => (
                    <div key={items.data.id} className="w-full h-[250px] flex flex-row gap-[20px] p-[30px] items-center justify-between relative border-[1px] border-solid border-gray-200 rounded-[10px] duration-150 overflow-hidden]">
                      <div className="flex-[2] h-full rounded-[10px] w-[70px] bg-cover bg-center bg-no-repeat bg-black"
                        style={{ backgroundImage: `url(${constants.url}${items.data.attributes.image_url})` }}
                      >
                      </div>

                      {items.data.attributes.products.data.map((item) => (
                        <div key={item.id} className="flex-[6.5] h-full py-[20px] flex flex-col justify-between gap-[5px]">
                          <h1 className='text-[13px] font-semibold'>{item.attributes.name}</h1>
                          <p className='text-[10px]'>{item.attributes.desc}</p>
                          {/* <ProductColor colors={item} /> */}
                          <span className=''>{items.data.attributes.quantity} x {item.attributes.price}</span>
                          <ProductCounter item={items}/>
                        </div>
                      ))}
                      <button type='button' className="flex-[i] cursor-pointer"
                        onClick={() => {
                          console.log("Delete button clicked");
                          dispatch(deleteCart({id:items.data.id, jwt:jwt}));
                          }}>
                        <FaTrash className={`text-[15px] text-red-600 duration-200 `} />
                      </button>
                    </div>
                  ))}
                </div>

              </div>


            </div>}



        </div>

      </div>

      <div className="flex-[3.7] bg-gray-100 pb-[40px] pt-[80px]">

        <CheckoutSummary totalPrice={totalPrice()} cart={cart} />

      </div>
    </div>

  )
}



{/* <div className="w-full flex px-[20px] flex-row justify-between items-center">
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
</div> */}