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


export default function Carousel(props) {

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
                      <div className="h-full">
                        <div className="bg-[#00000060] absolute h-full w-full flex justify-start p-[25px] sm:p-[60px] items-center">
                          <div className="">
                            <p className='text-[10px] sm:text-[15px] text-white mb-[10px]'>Deals and promotions</p>
                            <h1 className='text-[23px] sm:text-[40px] text-white font-bold'>{carousel.attributes.name}</h1>
                            <p className='text-white text-[10px] sm:text-[20px]'>From $<span>{img.id}.99</span></p>
                            <button className='h-[25px] sm:h-[40px] w-[60px] text-[9px] sm:w-[100px] bg-white rounded-full mt-[20px]'>Shop Now</button>
                          </div>
                        </div>
                        {/* <div
                          className={`w-full h-full duration-150 bg-cover bg-center bg-no-repeat relative `}
                          style={{ backgroundImage: `url(${constants.url}${img.attributes.url})` }}
                        ></div> */}
                        <img src={`${constants.url}${img.attributes.url}`} className=''/>
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
