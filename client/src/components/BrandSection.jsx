import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight } from "react-icons/fi";
import SectionHeader from './SectionHeader';
import { constants } from '../global-components/constants';
import { selectAllBrands } from '../slice/brand/brandSlice';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

import { Keyboard, Navigation, Pagination, Scrollbar } from 'swiper/modules';

export default function BrandSection(props) {

    const brands = useSelector(selectAllBrands)

    return (
        <>
            <div className={`bg-white-100 px-[18px] sm:px-[55px] py-[30px]  w-full`}>
                <div className="w-full">
                    <SectionHeader type={props.headerType} title={props.headerTitle} />

                    <Swiper
                        spaceBetween={5}
                        slidesPerView={3}
                        centeredSlides={false}
                        slidesPerGroupSkip={3}
                        grabCursor={false}
                        breakpoints={{
                            769: {
                                slidesPerView: 4,
                                slidesPerGroup: 4,
                                spaceBetween: 5,
                            },
                            972: {
                                slidesPerView: 5,
                                slidesPerGroup: 5,
                                spaceBetween: 10,
                            },
                            1127: {
                                slidesPerView: 6,
                                slidesPerGroup: 6,
                                spaceBetween: 15,
                            }

                        }}
                        scrollbar={false}
                        navigation={true}
                        pagination={false}
                        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                        className="mySwiper"
                    >

                        <div className="w-full flex flex-wrap gap-[12px]">
                            {
                                brands.slice(0, 8).map((brand, id) => (
                                    <SwiperSlide key={brand.id}>
                                        <div className="h-[80px] sm:h-[130px] w-[105px] sm:w-[150px] relative" key={id}>
                                            <Link to={`/view-brand/${brand.id}`} state={brand}>
                                                <div
                                                    className="h-full w-full z-[2] relative rounded-full flex justify-center items-center"
                                                    // style={{ backgroundImage: `url(${constants.url}${brand.attributes.imageUrl.data[0].attributes.url})` }}
                                                    alt={brand.attributes.name}
                                                >
                                                    <img src={constants.url + brand.attributes.logo.data.attributes.url} alt="" className="w-[100px] hover:w-[120px] duration-75 ease-out" />

                                                </div>

                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                ))}
                        </div>

                    </Swiper>
                </div>
            </div>
        </>
    )
}
