import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import CountdownTimer from './CountdownTimer';
import CarouselCatergories from './CarouselCatergories';
import gucci from "./../assets/images/gucci.png"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import { constants } from '../global-components/constants';
import { Link } from 'react-router-dom';

export default function Categories(props) {

  const [contentType, setContentType] = useState(props.contentType)
  const [headerType, setHeaderType] = useState(props.headerType)
  const [carousels, setCarousels] = useState()

  useEffect(() => {
    if (props.carousels) {

      setCarousels(props.carousels)


    }
  }, [props.carousels])

  const notCarousel = (apparel) => {
    return (
      <>
        {contentType === "apparel" ? <Swiper
          slidesPerView={4}
          centeredSlides={false}
          slidesPerGroupSkip={4}
          grabCursor={false}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            769: {
              slidesPerView: 6,
              slidesPerGroup: 6,
            },
          }}
          scrollbar={false}
          navigation={true}
          pagination={false}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className="mySwiper"
        >



          {props.data.map((apparel, id) => (
            <SwiperSlide key={id}>
              <div className="relative pr-[20px]">
                <Link to={`/view-product/${apparel.attributes.productid}`} state={apparel}>
                  <div className=" rounded overflow-hidden">
                    <div
                      className="h-[30vh] w-full bg-cover bg-center bg-no-repeat z-[2] relative"
                      style={{ backgroundImage: `url(${constants.url}${apparel.attributes.imageUrl.data[0].attributes.url})` }}
                      alt={apparel.attributes.name}
                    >


                    </div>
                    <div className="h-[15vh] flex flex-col py-4 pb-8 bg-white z-[2] relative">
                      <div className="font-bold text-[13px] mb-2">{apparel.attributes.name}</div>
                      <span className="text-gray-600 text-[10px] text-sm">${apparel.attributes.price}</span>
                      {/* <p className="text-gray-700 text-base">{apparel.attributes.desc}</p> */}

                    </div>

                  </div>
                </Link>
              </div>

            </SwiperSlide>
          ))}

        </Swiper> : ""}

        {contentType === "featured" ? <Swiper
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

          {props.data.map((apparel, id) => (
            <SwiperSlide key={id}>
              <div className="relative pr-[20px]">
                <Link to={`/view-product/${apparel.attributes.productid}`} state={apparel}>
                  <div className="h-[250px] rounded-[10px] overflow-hidden">
                    <div
                      className="h-full w-full bg-cover bg-center bg-no-repeat z-[2] relative  p-[40px]"
                      style={{ backgroundImage: `url(${constants.url}${apparel.attributes.imageUrl.data[0].attributes.url})` }}
                      alt={apparel.attributes.name}
                    >

                      <div className="h-[15vh] flex flex-col py-4 pb-8 z-[2] relative">
                        <div className="font-bold text-[13px] mb-2">{apparel.attributes.name}</div>
                        <span className="text-gray-600 text-[10px] text-sm">${apparel.attributes.price}</span>
                        {/* <p className="text-gray-700 text-base">{apparel.attributes.desc}</p> */}

                      </div>
                    </div>


                  </div>
                </Link>
              </div>

            </SwiperSlide>
          ))}

        </Swiper> : ""}
      </>
    )
  }


  const headingContent = contentType.charAt(0).toUpperCase() + contentType.slice(1);

  return (
    <>
      <div className={`bg-[${props.color}] ${contentType === "apparel" ? "px-[40px] pb-[40px] pt-[1px] mt-[20px]" : ""} ${contentType === "featured" ? "pt-[20px]" : ""} w-full`}>
        <div className="w-full">
          {headerType === "timeline" ?

            <div className="flex justify-between items-center mb-[20px] bg-[#ED7534] px-[20px] py-[10px] mt-[30px]">
              <div className="flex items-center">
                <img src={gucci} alt="" className='w-[45px] mr-[15px]' />
                <h1 className='text-[20px] text-white font-semibold'>Featured {headingContent}</h1>
              </div>

              <CountdownTimer headerType={headerType} />
              <button className="bg-transparent rounded-md text-white">View All</button>
            </div>
            : headerType === "single" ?
              <div className="flex justify-center items-center mb-[20px] mt-[30px]">
                <h1 className='text-[25px] font-semibold'>Featured {headingContent}</h1>
              </div>
              : headerType === "view" ? <div className="flex justify-between items-center mb-[20px] mt-[30px]">
                <h1 className='text-[25px] font-semibold'>Featured {headingContent}</h1>
                <button className="bg-transparent rounded-md">View All</button>
              </div> : ""
          }

          <div className="w-full flex flex-wrap">
            {contentType === "collection"
              ? props.data.map((apparel, id) => (<div className="relative">
                <div className="w-[150px] h-[170px] m-[10px] rounded-[10px] overflow-hidden">

                  <Link to={`/view-product/${apparel.attributes.productid}`} state={apparel}>
                    <div
                      className="h-[80%] w-full bg-cover bg-center bg-no-repeat z-[2] relative"
                      style={{ backgroundImage: `url(${constants.url}${apparel.attributes.imageUrl.data[0].attributes.url})` }}
                      alt={apparel.attributes.name}
                    >
                    </div>
                    <div className="w-full h-[20%] flex flex-col justify-center items-center px-6 py-4 pb-8 bg-white z-[2] relative">
                      <h1 className='text-[15px] font-bold'>{apparel.attributes.category}</h1>
                    </div>
                  </Link>
                </div>
              </div>)) : ""
            }</div>



          <div className="w-full flex flex-wrap">
            {contentType === "brand" ?
              props.data.map((apparel, id) => (
                <div className="h-[150px] w-[150px] relative mr-[15px]">
                  <Link to={`/view-product/${apparel.attributes.productid}`} state={apparel}>
                    <div
                      className="h-full w-full m-[10px] bg-cover bg-center bg-no-repeat z-[2] relative rounded-full"
                      style={{ backgroundImage: `url(${constants.url}${apparel.attributes.imageUrl.data[0].attributes.url})` }}
                      alt={apparel.attributes.name}
                    >
                      <div className=" flex justify-center items-center  h-full w-full bg-[#00000044] rounded-full">
                        <h1 className='text-white text-[15px] font-bold'>{apparel.attributes.brand}</h1>

                      </div>

                    </div>

                  </Link>
                </div>))

              : ""}
          </div>

          {contentType !== "carousel" ? notCarousel(props.data) : ""}

          {contentType === "carousel" ? <div className="relative">
            <div className=" rounded overflow-hidden  mt-[30px]">
              <CarouselCatergories carousels={props.carousels} />
            </div>
          </div> : ""
          }

        </div>
      </div>
    </>
  )
}
