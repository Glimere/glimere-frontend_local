import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../auth/Auth';
import { useContext } from 'react';
import logout from '../auth/logout';
import { constants } from '../global-components/constants';
import Footer from '../components/Footer';
import { AiOutlineUser } from 'react-icons/ai'
import { FiArrowRight } from 'react-icons/fi'

import { RiDeleteBin4Line } from 'react-icons/ri'
import { IoIosAdd } from 'react-icons/io'
import { ProductCard } from '../components/ProductCard';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllUsers, getUserStatus, fetchUsers } from '../slice/users/userSlice';
import { BsFillStarFill } from 'react-icons/bs'
import { HiDotsHorizontal } from 'react-icons/hi'
import { selectWishlist } from '../slice/wishList/wishListSlice';
import { selectCart } from '../slice/cart/cartSlice';
import { FiEdit2 } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'
import { addWish } from '../slice/wishList/wishListSlice';





export default function Profile() {

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const user = useSelector(selectAllUsers)
  const userStatus = useSelector(getUserStatus)
  const wishlist = useSelector(selectWishlist)
  const cart = useSelector(selectCart)
  console.log('cart', cart)
  // const userError = useSelector(getUserError)

  console.log('wishlist', wishlist)

  const [tab, setTab] = useState(0)
  const [togglemenu, settogglemenu] = useState(false)

  const tabs = [
    { "tabName": "My Account" },
    { "tabName": "Orders" },
    { "tabName": "Wishlist" },
    { "tabName": "Settings" },
  ]

  console.log('user', user)

  const isWishlistChecked = (id) => {
    return wishlist.some((item) => item.id === id)
  }

  const { email, username } = user;

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <>
      <div className='w-full flex flex-col sm:flex-row'>
        <div className="flex-[1] bg-white pt-[80px] pb-[60px] pl-[20px] px-[40px] flex flex-col items-start">
          <div className="w-full pl-[20px] py-[20px]">
            <div className="flex flex-row items-center mb-[5px]">
              <h1 className="text-[18px] font-bold text-[#be7f2d] mr-[10px]">5.0</h1>
              <BsFillStarFill className={`text-[18px] text-black`} />
            </div>
            <hr />
            <p className='text-[13px] mt-[5px]'>Rated by <span className='font-bold'>2M+ Users</span></p>

          </div>

          <div className="flex flex-col w-full">
            {tabs.map((tabs, id) => (
              <div key={id} className={`w-full h-[50px] pl-[20px] hover:bg-[#fcfcfc] border-solid border-b text-[12px] ${tab == id ? "bg-[#e7e7e7]" : "border-transparent"} flex items-center cursor-pointer duration-300`}
                onClick={() => setTab(id)}
              >{tabs.tabName}</div>
            ))}

            <div className={`w-full h-[50px] pl-[20px] hover:bg-[#fcfcfc] border-solid border-b text-[12px] flex items-center cursor-pointer duration-300`}
              onClick={handleLogout}
            >Log out</div>


          </div>



        </div>

        <div className="flex-[2.5] bg-[#fcfcfc] pt-[40px] sm:pt-[80px]">
          <div className={`w-full h-full p-[50px] flex flex-col gap-[20px] ${tab == 0 ? "block" : "hidden"}`}>

            <div className="flex flex-row gap-[20px]">

              <div className="h-[170px] w-full  rounded-[10px] p-[20px] border-[1px] border-gray-200 border-solid">
                <h1 className='text-[20px] mb-[20px] text-gray-500'>{user.username}</h1>
                <p className='text-[11px] '>{user.email}</p>
              </div>

              <div className="flex h-[170px] flex-col justify-between w-full border-[1px] border-solid border-gray-200 rounded-[10px] p-[20px] cursor-pointer hover:bg-[#fff8ee] duration-150"
              // onClick={() => { setToggleEdit(true) }}
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


            </div>

            <div className="flex flex-row gap-[20px]">

              <div className="h-[170px] flex flex-col w-full  rounded-[10px] p-[20px] border-[1px] border-gray-200 border-solid">
                <div className="flex flex-row justify-between items-center mb-[20px]">
                  <h1>Payment Method</h1>
                  <FiEdit2 className="w-[20px] h-[20px] text-[#ED7534] cursor-pointer" />

                </div>

                <div className="flex flex-col">
                  <div className="flex items-center space-x-2">
                    <svg className="w-8 h-8 text-[#ED7534]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <p className="text-gray-600">**** **** **** 1234</p>
                  </div>
                  <div className="mt-3">
                    <p className="text-sm text-gray-500">Expires: 08/23</p>
                    <p className="text-sm text-gray-500">Name: John Doe</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`w-full h-full flex flex-col gap-[15px] p-[50px]  ${tab == 1 ? "block" : "hidden"}`}>
            {cart.map((item) => (
              <div key={item.id} className="w-full h-[160px] p-[20px] flex flex-row gap-[20px] border-[1px] border-solid border-gray-200 rounded-[10px]">
                <div className="h-full w-[100px] bg-[#ffe0cf] bg-cover bg-center bg-no-repeat  rounded-[5px]"
                  style={{ backgroundImage: `url(${constants.url}${item.imageUrl})` }}
                ></div>
                <div className="h-full w-full flex flex-row justify-between">
                  <div className="w-full">
                    <h2 className="text-[15px] font-semibold mb-3">Order #83358085045-40</h2>
                    <p className="text-gray-600 text-[12px]">Date: 30-05-2020</p>
                    <p className="text-gray-600 text-[12px]">Total: $45</p>
                    <p className="text-gray-600 text-[12px]">Status: completed</p>
                  </div>

                  <button className="block  text-black border-[1px] border-solid border-black w-[150px] h-[40px] py-2 px-4 rounded hover:bg-[#fff8ee] focus:outline-none focus:ring-2 focus:ring-[#ED7534]">
                    View Details
                  </button>
                </div>

              </div>
            ))}
          </div>

          <div className={`w-full rounded-[10px] p-[15px] sm:p-[50px] flex flex-col gap-[15px]  ${tab == 2 ? "grid" : "hidden"}`}>
            {wishlist.map((apparel) => (
              <div className={`  h-[160px] w-full p-[20px] relative border-[1px] border-solid border-gray-200 rounded-[10px] duration-150 overflow-hidden`} key={apparel.attributes.productid}>
                <div className={`h-full w-full flex flex-row  items-center justify-center`}>
                  <div
                    className={`h-full w-[100px] bg-[#ffe0cf] bg-cover bg-center bg-no-repeat  rounded-[5px]`}
                    style={{ backgroundImage: `url(${constants.url}${apparel.attributes.imageUrl.data[0].attributes.url})` }}
                    alt={apparel.attributes.name}
                  ></div>

                  <div className={`w-full h-full flex flex-row justify-between p-[15px]  duration-150  z-[2] relative`}>
                    <div className="flex flex-col justify-between">

                      <div className="flex flex-col">
                        {apparel.attributes.brands.data.map((brand, id) => (
                          <p key={id} className={`font-bold text-[10px] text-black duration-150`}>{brand.attributes.name}</p>
                        ))}
                        <p className={`text-[12px] mb-[5px] text-black  duration-150`}>{apparel.attributes.name}</p>

                      </div>


                      <div className="flex flex-row gap-[10px]">
                        <span className="text-gray-300 line-through text-[0.8rem] sm:text-[12px]">${apparel.attributes.oldPrice}</span>
                        <span className="text-gray-600 text-[0.8rem] sm:text-[12px]">${apparel.attributes.price}</span>
                      </div>
                    </div>

                    <div className="flex flex-col justify-between items-end">
                      <button className="block  text-black border-[1px] border-solid border-black w-[150px] h-[40px] py-2 px-4 rounded hover:bg-[#fff8ee] focus:outline-none focus:ring-2 focus:ring-[#ED7534]">
                        Buy Now
                      </button>

                      <div className={`h-[30px] w-[30px] rounded-full bg-[#ffffff] bottom-3 right-3 flex justify-center items-center cursor-pointer z-10  duration-150`}
                        onClick={() => dispatch(addWish(apparel))}
                      >
                        <RiDeleteBin4Line className={`text-[20px] text-[#ED7534]`}
                        />

                      </div>

                    </div>



                  </div>

                </div>

              </div>
            ))}
          </div>
          <div className={`w-full h-full p-[50px]  ${tab == 3 ? "block" : "hidden"}`}>
            <div className="flex flex-col w-full">
              <div className="flex flex-col w-full gap-[15px]">
                <div className="flex flex-row w-full justify-between items-center border-[1px] border-solid border-gray-200 rounded-[10px] p-[20px] cursor-pointer hover:bg-[#fff8ee] duration-150">
                  <div className="flex flex-col">
                    <h1 className='font-medium text-[20px]'>{user.username}</h1>
                    <p>{user.email}</p>
                  </div>
                  <FiEdit2 className="w-[20px] h-[20px] text-[#ED7534] cursor-pointer" />

                </div>
                <div className="flex flex-row gap-[20px]">
                  {/* Email Subscriptions Card */}
                  <div className="flex flex-col w-full justify-between border-[1px] border-solid border-gray-200 rounded-[10px] p-[20px] cursor-pointer hover:bg-[#fff8ee] duration-150">
                    <div className="flex flex-row justify-between items-center mb-[20px]">
                      <h2 className="text-lg font-semibold">Email Subscriptions</h2>
                      <FiEdit2 className="w-[20px] h-[20px] text-[#ED7534] cursor-pointer" />
                    </div>
                    <div className="flex flex-col">
                      <p className='mb-[10px]'>You are Suscribed</p>
                      <svg className="w-8 h-8 text-[#ED7534]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>



                  {/* Language and Region Card */}
                  <div className="flex flex-col justify-between w-full border-[1px] border-solid border-gray-200 rounded-[10px] p-[20px] cursor-pointer hover:bg-[#fff8ee] duration-150">
                    <div className="flex flex-row justify-between items-center mb-[20px]">
                      <h2 className="text-lg font-semibold">Language and Region</h2>
                      <FiEdit2 className="w-[20px] h-[20px] text-[#ED7534] cursor-pointer" />
                    </div>
                    <div className="flex flex-col">
                      <span className='font-medium'>English</span>
                      <span>United States</span>
                    </div>
                  </div>
                </div>


                <hr className='my-[20px]' />

                <div className="flex flex-row gap-[20px]">
                  {/* Returns and Refunds Card */}
                  <div className="flex flex-col justify-between w-full border-[1px] border-solid border-gray-200 rounded-[10px] p-[20px] cursor-pointer hover:bg-[#fff8ee] duration-150">
                    <div className="flex flex-row justify-between items-center mb-[20px]">
                      <h2 className="text-lg font-semibold">Returns and Refunds</h2>
                      <FiArrowRight className="text-gray-600 ml-2" />
                    </div>
                    <div className="flex flex-col">
                      <p>Learn about our returns and refunds policy.</p>
                    </div>
                  </div>


                  {/* Subscription Management Card */}
                  <div className="flex flex-col justify-between w-full border-[1px] border-solid border-gray-200 rounded-[10px] p-[20px] cursor-pointer hover:bg-[#fff8ee] duration-150">
                    <div className="flex flex-row justify-between items-center mb-[20px]">
                      <h2 className="text-lg font-semibold">Subscription Management</h2>
                      <FiArrowRight className="text-gray-600 ml-2" />
                    </div>
                    <div className="flex flex-col">
                      <p>Manage your subscription preferences.</p>
                    </div>
                  </div>

                </div>


                {/* Terms and Conditions Card */}
                <div className="flex flex-row gap-[20px]">

                  <div className="flex flex-col justify-between w-full border-[1px] border-solid border-gray-200 rounded-[10px] p-[20px] cursor-pointer hover:bg-[#fff8ee] duration-150">
                    <div className="flex flex-row justify-between items-center mb-[20px]">
                      <h2 className="text-lg font-semibold">Terms and Conditions</h2>
                      <FiArrowRight className="text-gray-600 ml-2" />
                    </div>
                    <div className="flex flex-col">
                      <p>Read our terms and conditions.</p>
                    </div>
                  </div>

                  {/* Help and Support Card */}
                  <div className="flex flex-col justify-between w-full border-[1px] border-solid border-gray-200 rounded-[10px] p-[20px] cursor-pointer hover:bg-[#fff8ee] duration-150">
                    <div className="flex flex-row justify-between items-center mb-[20px]">
                      <h2 className="text-lg font-semibold">Help and Support</h2>
                      <FiArrowRight className="text-gray-600 ml-2" />
                    </div>
                    <div className="flex flex-col">
                      <p>Contact us for assistance and support.</p>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>


    </>

  );
}

