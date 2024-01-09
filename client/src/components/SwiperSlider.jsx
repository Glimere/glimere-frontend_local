import React from 'react'
// import Slider from 'react-slick';
import { Swiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function SwiperSlider({ Children }, settings) {
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

        {Children}

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
