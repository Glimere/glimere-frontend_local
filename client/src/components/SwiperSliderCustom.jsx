import React from 'react'
// import Slider from 'react-slick';


export default function SwiperSliderCustom({ Children,  breakpoints, spaceBetween, slidesPerView, centeredSlides, slidesPerGroupSkip, grabCursor} ) {

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
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        centeredSlides={centeredSlides}
        slidesPerGroupSkip={slidesPerGroupSkip}
        grabCursor={grabCursor}
        keyboard={{
            enabled: true,
        }}
        breakpoints={breakpoints}
        scrollbar={false}
        navigation={true}
        pagination={false}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
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
