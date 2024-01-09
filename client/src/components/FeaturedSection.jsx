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
import SessionHeader from './SessionHeader';


export default function FeaturedSession(props) {


    const [apparel, setApparel] = useState([])

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



    return (
        <>

            <div className={`my-[30px] px-[18px] sm:px-[60px] pt-0 w-full`}>
                <div className="w-full">
                <SessionHeader type={props.headerType} title={props.headerTitle} />


                    <Swiper
                        spaceBetween={20}
                        slidesPerView={3}
                        centeredSlides={false}
                        slidesPerGroupSkip={3}
                        grabCursor={false}
                        keyboard={{
                            enabled: true,
                        }}
                        breakpoints={{
                            769: {
                                slidesPerView: 3,
                                slidesPerGroup: 3,
                            },
                        }}
                        scrollbar={false}
                        navigation={true}
                        pagination={false}
                        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                        className="mySwiper"
                    >



                        {apparel.map((apparel, id) => (
                            <SwiperSlide key={id}>
                                <div className="relative rounded-[5px]">
                                    <Link to={`/view-product/${apparel.attributes.productid}`} state={apparel}>
                                        <div className="h-[200px] rounded-[10px] overflow-hidden hover:shadow-lg duration-200">
                                            <div
                                                className="h-full w-full bg-cover bg-center bg-no-repeat z-[2] relative"
                                                style={{ backgroundImage: `url(${constants.url}${apparel.attributes.imageUrl.data[0].attributes.url})` }}
                                                alt={apparel.attributes.name}
                                            >
                                                <div className="bg-[#00000044] h-full w-full p-[15px] sm:p-[30px] flex justify-start items-center">
                                                    <div className="flex flex-col py-4 pb-8 z-[2] relative">
                                                        <div className="text-white-100 font-bold text-[13px] mb-2">{apparel.attributes.name}</div>
                                                        <span className="text-white-100 text-[10px] text-sm">${apparel.attributes.price}</span>
                                                        {/* <p className="text-gray-700 text-base">{apparel.attributes.desc}</p> */}

                                                    </div>
                                                </div>


                                            </div>


                                        </div>
                                    </Link>
                                </div>

                            </SwiperSlide>
                        ))}

                    </Swiper >
                </div>
            </div>
        </>
    )
}
