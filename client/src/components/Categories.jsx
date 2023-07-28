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
  const [headerTitle, setHeaderTitle] = useState(props.headerTitle)
  const [carousels, setCarousels] = useState([])
  const [apparels, setApparels] = useState([])

  useEffect(() => {
    if (props.carousels || props.data) {

      setCarousels(props.carousels)
      setApparels(props.data)

    }
  }, [props.carousels, props.data])

  const notCarousel = (apparel) => {
    return (
      <>
        {contentType === "apparel" ? <Swiper
          spaceBetween={5}
          slidesPerView={3}
          centeredSlides={false}
          slidesPerGroupSkip={3}
          grabCursor={false}
          keyboard={{
            enabled: true,
          }}
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



          {apparels.map((apparel, id) => (
            <SwiperSlide key={id}>
              <div className="relative rounded-[5px] p-[5px] border-transparent duration-200 hover:border-[#ffdcb1] border-solid border-[1px]">
                <Link to={`/view-product/${apparel.attributes.productid}`} state={apparel}>
                  <div className="shadow-sm rounded overflow-hidden">
                    <div
                      className="h-[16vh] sm:h-[30vh] duration-200 w-full bg-cover bg-center bg-no-repeat z-[2] relative"
                      style={{ backgroundImage: `url(${constants.url}${apparel.attributes.imageUrl.data[0].attributes.url})` }}
                      alt={apparel.attributes.name}
                    >


                    </div>
                    <div className="h-[9.5vh] sm:h-[15vh] flex flex-col p-[10px] pb-8 bg-white z-[2] relative">
                      <div className="font-bold text-[10px] sm:text-[13px] sm:mb-2">{apparel.attributes.name}</div>
                      <span className="text-gray-600 text-[0.8rem] sm:text-[12px]">${apparel.attributes.price}</span>
                      {/* <p className="text-gray-700 text-base">{apparel.attributes.desc}</p> */}

                    </div>

                  </div>
                </Link>
              </div>

            </SwiperSlide>
          ))}

        </Swiper> : ""}

        {contentType === "featured" ? <Swiper
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
                      className="h-full w-full bg-cover bg-center bg-no-repeat z-[2] relative  p-[30px] flex justify-start items-center"
                      style={{ backgroundImage: `url(${constants.url}${apparel.attributes.imageUrl.data[0].attributes.url})` }}
                      alt={apparel.attributes.name}
                    >

                      <div className="flex flex-col py-4 pb-8 z-[2] relative">
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
      <div className={`bg-[${props.color}] ${contentType !== "carousel" && contentType !== "featured" ? "px-[18px] sm:px-[55px] pb-[35px]  pt-[30px]" : "px-[18px] sm:px-[60px] pt-0"} ${contentType === "featured" ? " my-[30px]" : ""} w-full`}>
        <div className="w-full">
          {headerType === "timeline" ?

            <div className="flex justify-between items-center mb-[20px] bg-[#ED7534] px-[20px] py-[10px] rounded-[5px]">
              <div className="flex-[7] max-[727px]:flex-[7] max-[1050px]:flex-[8] flex flex-col sm:flex-row sm:justify-between ">
                <div className="flex items-center">
                  <img src={gucci} alt="" className='w-[15px] sm:w-[30px] mr-[15px]' />
                  <h1 className='text-[14px] sm:text-[18px] text-white font-semibold'>{headerTitle}</h1>
                </div>
                <CountdownTimer headerType={headerType} />
              </div>
              <div className="flex-[2] sm:flex-[3] flex justify-end">
                <button className="bg-transparent rounded-md text-[12px] sm:text-[14px] text-white">View All</button>
              </div>
            </div>

            : headerType === "single" ?
              <div className="flex justify-center items-center mb-[20px]">
                <h1 className='text-[14px] sm:text-[20px] font-bold'>{headerTitle}</h1>
              </div>

              : headerType === "view" ? <div className="flex justify-between items-center mb-[20px]">
                <h1 className='text-[14px] sm:text-[20px] font-bold'>{headerTitle}</h1>
                <button className="bg-transparent rounded-md text-[12px] sm:text-[14px]">View All</button>
              </div> : ""
          }

          <div className="w-full flex gap-[25px] flex-wrap">
            {contentType === "collection"
              ? apparels.map((apparel, id) => (
                <div className="relative" key={id}>
                  <div className="w-[150px] h-[170px] overflow-hidden">

                    <Link to={`/view-product/${apparel.attributes.productid}`} state={apparel}>
                      <div
                        className="h-[80%] w-full bg-cover bg-center bg-no-repeat z-[2] relative  rounded-[10px]"
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



          <div className="w-full flex flex-wrap gap-[25px]">
            {contentType === "brand" ?
              apparels.map((apparel, id) => (
                <div className="h-[150px] w-[150px] relative" key={id}>
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

          {contentType !== "carousel" ? notCarousel(apparels) : ""}

          {contentType === "carousel" ? <div className="relative">
            <div className="rounded-[10px] overflow-hidden  mt-[30px] mb-[30px]">
              <CarouselCatergories carousels={props.carousels} />
            </div>
          </div> : ""
          }

        </div>
      </div>
    </>
  )
}
