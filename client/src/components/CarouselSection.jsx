import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { constants } from '../global-components/constants'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import SectionHeader from './SectionHeader';
import { selectAllCarousels } from '../slice/carousel/carouselSlice';
import { useSelector } from 'react-redux';



export default function CarouselSession(props) {

    const carousels = useSelector(selectAllCarousels)

    return (
        <>
            <div className={`px-[18px] sm:px-[60px] pt-0 w-full`}>
                <div className="w-full">
                    <SectionHeader type={props.headerType} title={props.headerTitle} />

                    <div className="relative">
                        <div className="rounded-[10px] overflow-hidden  mt-[30px] mb-[30px]">
                            <Swiper
                                spaceBetween={30}
                                autoplay={{
                                    delay: 7000,
                                    disableOnInteraction: false,
                                }}
                                effect={'fade'}
                                navigation={true}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                                className="mySwiper"
                            >
                                {carousels?.map((carousel) => {
                                    return (
                                        <div key={carousel.id}>
                                            {carousel.attributes.carouselimg.data?.map((img) => {
                                                return (
                                                    <div key={img.id}>
                                                        <SwiperSlide key={img.id}>
                                                            <div className="relative w-full h-[32vh] sm:h-[50vh] overflow-hidden bg-center bg-no-repeat"
                                                                style={{ backgroundImage: `url(${constants.url}${img.attributes.url})` }}
                                                            >
                                                                <div className="bg-[#00000060] h-full w-full flex justify-start p-[40px] sm:p-[80px] items-center">
                                                                    <div className="">
                                                                        <p className='text-[9px] sm:text-[15px] text-white-100 mb-[10px]'>Deals and promotions</p>
                                                                        <h1 className='text-[23px] sm:text-[40px] text-white-100 font-bold'>{carousel.attributes.name}</h1>
                                                                        <p className='text-white-100 text-[12px] sm:text-[20px]'>From $<span>{img.id}.99</span></p>
                                                                        <button className='h-[40px] w-[100px] bg-white-100 rounded-full mt-[20px]'>Shop Now</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                    </div>

                                                )
                                            })
                                            }
                                        </div>
                                    )
                                })
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
