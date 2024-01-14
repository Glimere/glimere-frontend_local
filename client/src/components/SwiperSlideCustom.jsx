import React from 'react'
import { SwiperSlide } from 'swiper/react'
export default function SwiperSlideCustom({ Children, key }) {
    return (
        <>

            <SwiperSlide key={key}>
                {Children}
            </SwiperSlide>

        </>
    )
}
