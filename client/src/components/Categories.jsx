import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import CountdownTimer from './CountdownTimer';
import CarouselCatergories from './CarouselCatergories';
import gucci from "./../assets/images/gucci.png"
import { FiArrowRight } from "react-icons/fi";


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
  const [data, setData] = useState([])

  useEffect(() => {
    if (props.carousels || props.data) {

      setCarousels(props.carousels)
      setData(props.data)

    }
  }, [props.carousels, props.data])

  const notCarousel = (apparel) => {
    return (
      <>
        {contentType === "apparel" ? <Swiper
          spaceBetween={5}
          slidesPerView={2}
          centeredSlides={false}
          slidesPerGroupSkip={2}
          grabCursor={false}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            769: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 5,
            },
            972: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 10,
            },
            1127: {
              slidesPerView: 5,
              slidesPerGroup: 5,
              spaceBetween: 15,
            }

          }}
          scrollbar={false}
          navigation={true}
          pagination={false}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className="mySwiper"
        >



          {data.map((apparel, id) => (
            <SwiperSlide key={id}>
              <div className="relative rounded-[5px] p-[5px] border-transparent duration-200 hover:border-[#ffdcb1] border-solid border-[1px]">
                <Link to={`/view-product/${apparel.attributes.productid}`} state={apparel}>
                  <div className="shadow-sm rounded overflow-hidden relative">
                    <div
                      className="h-[18vh] sm:h-[40vh] duration-200 w-full bg-cover bg-center bg-no-repeat z-[2] relative"
                      style={{ backgroundImage: `url(${constants.url}${apparel.attributes.imageUrl.data[0].attributes.url})` }}
                      alt={apparel.attributes.name}
                    >


                    </div>
                    <div className="h-[11.5vh] sm:h-[19vh] flex flex-col p-[10px] pb-8 bg-white z-[2] relative">
                      <div className="font-bold text-[10px] sm:text-[13px] sm:mb-2">{apparel.attributes.name}</div>
                      <div className="flex flex-row gap-[10px]">
                        <span className="text-gray-300 text-[0.8rem] sm:text-[12px]">${apparel.attributes.oldPrice}</span>
                        <span className="text-gray-600 text-[0.8rem] sm:text-[12px]">${apparel.attributes.price}</span>
                      </div>
                      {/* <p className="text-gray-700 text-base">{apparel.attributes.desc}</p> */}

                    </div>

                    {apparel.attributes.isNew == true ? <div className="h-[20px] w-[50px] rounded-[3px] absolute top-[10px] left-[10px] bg-[#FFF7E9] flex justify-center items-center z-[10]">
                      <p className='text-[#9d5c0d] text-[10px]'>New</p>
                    </div> : ""}
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
                      className="h-full w-full bg-cover bg-center bg-no-repeat z-[2] relative"
                      style={{ backgroundImage: `url(${constants.url}${apparel.attributes.imageUrl.data[0].attributes.url})` }}
                      alt={apparel.attributes.name}
                    >
                      <div className="bg-[#00000044] h-full w-full p-[15px] sm:p-[30px] flex justify-start items-center">
                        <div className="flex flex-col py-4 pb-8 z-[2] relative">
                          <div className="text-white font-bold text-[13px] mb-2">{apparel.attributes.name}</div>
                          <span className="text-white text-[10px] text-sm">${apparel.attributes.price}</span>
                          {/* <p className="text-gray-700 text-base">{apparel.attributes.desc}</p> */}

                        </div>
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


  // const headingContent = contentType.charAt(0).toUpperCase() + contentType.slice(1);

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

          <div className="w-full flex gap-[10px] sm:gap-[25px] flex-wrap">
            {contentType === "collection"
              ? data.map((apparel, id) => (
                <div className="relative" key={id}>
                  <div className="w-[105px] sm:w-[230px] h-[140px] sm:h-[270px] overflow-hidden">

                    <Link to={`/view-product/${apparel.attributes.productid}`} state={apparel}>
                      <div
                        className="h-[80%] w-full bg-cover bg-center bg-no-repeat z-[2] relative p-[10px] sm:p-[25px] rounded-[10px] flex items-end"
                        style={{ backgroundImage: `url(${constants.url}${apparel.attributes.imageUrl.data[0].attributes.url})` }}
                        alt={apparel.attributes.name}
                      >
                        <div className="w-full h-[25%] py-[10px] px-[15px] flex flex-row justify-between items-center bg-white rounded-[8px] z-[2] relative">
                          <h1 className='text-[11px] sm:text-[15px] font-bold'>{apparel.attributes.category}</h1>
                          <FiArrowRight className="text-[11px] sm:text-[15px] ml-[5px]" />
                        </div>
                      </div>

                    </Link>
                  </div>
                </div>)) : ""
            }</div>



          <div className="w-full flex flex-wrap gap-[12px]">
            {contentType === "brand" ?
              data.map((brand, id) => (
                <div className="h-[80px] sm:h-[130px] w-[105px] sm:w-[150px] relative" key={id}>
                  <Link to={`/view-product/${brand.attributes.productid}`} state={brand}>
                    <div
                      className="h-full w-full z-[2] relative rounded-full flex justify-center items-center"
                      // style={{ backgroundImage: `url(${constants.url}${brand.attributes.imageUrl.data[0].attributes.url})` }}
                      alt={brand.attributes.name}
                    >
                      <img src={constants.url + brand.attributes.logo.data.attributes.url} alt="" className="w-[80px] hover:w-[100px] duration-75 ease-out" />

                    </div>

                  </Link>
                </div>))

              : ""}
          </div>

          {contentType !== "carousel" ? notCarousel(data) : ""}

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
