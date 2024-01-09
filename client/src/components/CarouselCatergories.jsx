import React from 'react'
// import Slider from 'react-slick';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';
import { constants } from '../global-components/constants'

import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';


export default function CarouselCatergories(props) {

  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 5000, // Duration of slide transition in milliseconds
  //   autoplay: true,
  //   autoplaySpeed: 3000, // Time between slide transitions in milliseconds
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  // };

  return (
    <>

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
        {props.carousels?.map((carousel) => {
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
                            <button className='h-[40px] w-[100px] bg-white rounded-full mt-[20px]'>Shop Now</button>
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
      {/* <Slider {...settings} className="rounded-xl">
            {props.carousels?.map((carousel, id) => {
              return (
                <div key={id} className="h-[100vh] w-full">
                  {carousel.attributes.carouselimg.data.map((img, id) => {
                    return (
                      <div key={id} className={`h-full w-full bg-cover bg-center bg-no-repeat p-[10px] mr-[2px]`}
                        style={{ backgroundImage: `url(${constants.url}${img.attributes.url})` }}
                      ></div>
                    )
                  })
                  }
                </div>

              )
            })}


            </Slider> */}

    </>
  )
}
