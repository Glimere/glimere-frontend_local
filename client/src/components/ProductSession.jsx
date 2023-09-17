import React, { useState, useEffect } from 'react'
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { constants } from '../global-components/constants';
import { addToCart } from '../slice/cart/cartSlice';
import { addWish } from '../slice/wishList/wishListSlice';
import { selectAllUsers, selectLoggedInUser } from '../slice/users/userSlice';
import { selectWishlist } from '../slice/wishList/wishListSlice';
import { IoIosAdd } from "react-icons/io";
import { AiOutlineHeart } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'
import SessionHeader from './SessionHeader';


export default function ProductSession(props) {

    const dispatch = useDispatch()

    const [apparel, setApparel] = useState([])

    const wishlist = useSelector(selectWishlist)
    const user = useSelector(selectAllUsers)
    const jwt = useSelector(selectLoggedInUser).jwt

    useEffect(() => {
        const fetchApparels = async () => {
            try {
                const response = await axios.get(`${constants.url}/api/apparels?populate=*&[filters][type][$eq]=${props.type}`);
                // console.log('response.data', response.data)
                setApparel(response.data.data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchApparels()
    }, [props.type])


    const isWishlistChecked = (id) => {
        return wishlist.some((item) => item.id === id)
    }

    return (
        <>

            <div className={`bg-white px-[18px] sm:px-[55px] py-[30px]  w-full`}>
                <div className="w-full">
                    <SessionHeader type={props.headerType} title={props.headerTitle} />

                    <Swiper
                        spaceBetween={5}
                        slidesPerView={2}
                        centeredSlides={false}
                        slidesPerGroupSkip={2}
                        grabCursor={false}
                        keyboard={{
                            enabled: true,
                        }}
                        breakpoints={{
                            769: {
                                slidesPerView: 3,
                                slidesPerGroup: 3,
                                spaceBetween: 5,
                            },
                            972: {
                                slidesPerView: 4,
                                slidesPerGroup: 4,
                                spaceBetween: 10,
                            },
                            1127: {
                                slidesPerView: 5,
                                slidesPerGroup: 5,
                                spaceBetween: 15,
                            }

                        }}
                        scrollbar={false}
                        navigation={true}
                        pagination={false}
                        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                        className="mySwiper"
                    >



                        {apparel?.map((apparel, id) => (
                            <SwiperSlide key={id}>
                                <div className="relative rounded-[10px] p-[15px] duration-200  border-gray-200 border-solid border-[1px]">
                                    <div className="rounded h-[38vh] sm:h-[57vh]">
                                        <div className="group overflow-hidden relative">
                                            <Link to={`/view-product/${apparel.attributes.productid}`} state={apparel}>

                                                <div className="h-[25vh] sm:h-[40vh] rounded-[5px] overflow-hidden duration-200 w-full relative">
                                                    <div
                                                        className="h-full w-full  absolute bg-cover bg-center bg-no-repeat z-[2] group-hover:z-[3]"
                                                        style={{ backgroundImage: `url(${constants?.url}${apparel?.attributes?.imageUrl?.data[1]?.attributes.url})` }}
                                                        alt={apparel.attributes.name}
                                                    ></div>
                                                    <div
                                                        className="h-full w-full absolute bg-cover bg-center bg-no-repeat z-[2]"
                                                        style={{ backgroundImage: `url(${constants?.url}${apparel?.attributes?.imageUrl?.data[0]?.attributes.url})` }}
                                                        alt={apparel.attributes.name}
                                                    ></div>
                                                </div>

                                                <div className="h-[7vh] sm:h-[10vh] flex flex-col p-[10px] pb-[10px] bg-white z-[2] relative">
                                                    <div className="font-bold text-[10px] sm:text-[13px] sm:mb-2">{apparel.attributes.name}</div>
                                                    <div className="flex flex-row gap-[10px]">
                                                        <span className="text-gray-300 line-through text-[0.8rem] sm:text-[12px]">${apparel.attributes.oldPrice}</span>
                                                        <span className="text-gray-600 text-[0.8rem] sm:text-[12px]">${apparel.attributes.price}</span>
                                                    </div>
                                                </div>
                                            </Link>

                                            <div className="group-hover:flex hidden justify-between items-center z-40 mt-[10px] px-[10px]">
                                                <div className="flex flex-row justify-center items-center p-[10px] h-[30px] w-[100px] bg-[#ED7534] cursor-pointer"
                                                    onClick={() => {
                                                        dispatch(addToCart({
                                                            item: {
                                                                quantity: 1,
                                                                image_url: apparel.attributes.imageUrl.data[0].attributes.url,
                                                                products: apparel.id,
                                                                users_permissions_users: user.id
                                                            }, jwt: jwt
                                                        }
                                                        ))
                                                    }}
                                                >
                                                    <div className="flex flex-row">
                                                        <p className='text-white text-center text-[8px] sm:text-[9px]'>ADD TO CART</p>
                                                        <IoIosAdd className="text-[15px] text-white" />
                                                    </div>
                                                </div>
                                                <div className="cursor-pointer"
                                                    onClick={() => dispatch(addWish(apparel))}
                                                >
                                                    {isWishlistChecked(apparel.id) ? <AiFillHeart className={`w-[25px] text-[23px] sm:text-[30px] text-[#be7f2d] ml-[20px]`} /> :
                                                        <AiOutlineHeart className={`w-[25px] text-[23px] sm:text-[30px] text-[#be7f2d] ml-[20px]`} />
                                                    }
                                                </div>
                                            </div>
                                            {/* <p className="text-gray-700 text-base">{apparel.attributes.desc}</p> */}



                                            {apparel.attributes.isNew == true ? <div className="h-[20px] w-[50px] rounded-[3px] absolute top-[10px] left-[10px] bg-[#ED7534] flex justify-center items-center z-[10]">
                                                <p className='text-white font-bold text-[10px]'>New</p>
                                            </div> : ""}
                                        </div>
                                    </div>


                                </div>

                            </SwiperSlide>
                        ))}

                    </Swiper >
                </div>
            </div>
        </>
    )
}
