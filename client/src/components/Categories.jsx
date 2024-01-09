import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import CountdownTimer from './CountdownTimer';
import CarouselCatergories from './CarouselCatergories';
import gucci from "./../assets/images/gucci.png"
import { FiArrowRight } from "react-icons/fi";
import { AiOutlineHeart } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'
import { IoIosAdd } from "react-icons/io";
import { useDispatch } from 'react-redux';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import { constants } from '../global-components/constants';
import { Link } from 'react-router-dom';
import { addItem } from '../slice/cart/cartSlice';
import { addWish } from '../slice/wishList/wishListSlice';
import { selectWishlist } from '../slice/wishList/wishListSlice';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { addToCart } from '../slice/cart/cartSlice';
import { selectAllUsers } from '../slice/users/userSlice';

export default function Categories(props) {

  const dispatch = useDispatch()

  const [contentType, setContentType] = useState(props.contentType)
  const [headerType, setHeaderType] = useState(props.headerType)
  const [headerTitle, setHeaderTitle] = useState(props.headerTitle)
  const [carousels, setCarousels] = useState([])
  const [data, setData] = useState([])
  const [apparel, setApparel] = useState([])
  const [cartItem, setCartItem] = useState([])

  const wishlist = useSelector(selectWishlist)
  const user = useSelector(selectAllUsers)




  useEffect(() => {
    const fetchApparels = async () => {
      try {
        const response = await axios.get(`${constants.url}/api/apparels?populate=*&[filters][type][$eq]=${props.type}`);
        // console.log('response.data', response.data)
        setApparel(response.data.data)
      } catch (error) {
        console.log(error);
      }
    }

    fetchApparels()
    if (props.carousels || props.data) {

      setCarousels(props.carousels)
      setData(props.data)

    }
  }, [props.carousels, props.data, props.type])

  const isWishlistChecked = (id) => {
    return wishlist.some((item) => item.id === id)
  }


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



          {apparel?.map((apparel, id) => (
            <SwiperSlide key={id}>
              <div className="relative rounded-[10px] p-[15px] duration-200  border-gray-200 border-solid border-[1px]">
                <div className="rounded h-[38vh] sm:h-[57vh]">
                  <div className="group overflow-hidden relative">
                    <Link to={`/view-product/${apparel.attributes.productid}`} state={apparel}>

                      <div className="h-[25vh] sm:h-[40vh] rounded-[5px] overflow-hidden duration-200 w-full relative">
                        <div
                          className="h-full w-full  absolute bg-cover bg-center bg-no-repeat z-[2] group-hover:z-[3]"
                          style={{ backgroundImage: `url(${constants?.url}${apparel?.attributes?.imageUrl?.data[1]?.attributes.url})` }}
                          alt={apparel.attributes.name}
                        ></div>
                        <div
                          className="h-full w-full absolute bg-cover bg-center bg-no-repeat z-[2]"
                          style={{ backgroundImage: `url(${constants?.url}${apparel?.attributes?.imageUrl?.data[0]?.attributes.url})` }}
                          alt={apparel.attributes.name}
                        ></div>
                      </div>

                      <div className="h-[7vh] sm:h-[10vh] flex flex-col p-[10px] pb-[10px] bg-white z-[2] relative">
                        <div className="font-bold text-[10px] sm:text-[13px] sm:mb-2">{apparel.attributes.name}</div>
                        <div className="flex flex-row gap-[10px]">
                          <span className="text-gray-300 line-through text-[0.8rem] sm:text-[12px]">${apparel.attributes.oldPrice}</span>
                          <span className="text-gray-600 text-[0.8rem] sm:text-[12px]">${apparel.attributes.price}</span>
                        </div>
                      </div>
                    </Link>

                    <div className="group-hover:flex hidden justify-between items-center z-40 mt-[10px] px-[10px]">
                      <div className="flex flex-row justify-center items-center p-[10px] h-[30px] w-[100px] bg-primary-100 cursor-pointer"
                        onClick={() => {
                          dispatch(addToCart({
                            quantity: 1,
                            products: apparel.id,
                            users_permissions_users: user.id
                          }))
                          // dispatch(addItem({
                          //   id: apparel.id,
                          //   name: apparel.attributes.name,
                          //   price: apparel.attributes.price,
                          //   desc: apparel.attributes.desc,
                          //   colors: apparel.attributes.colors,
                          //   imageUrl: apparel.attributes.imageUrl.data[0].attributes.url,
                          //   material: apparel.attributes.material,
                          //   discount: apparel.attributes.discount,
                          //   gender: apparel.attributes.gender,
                          //   quantity: 1
                          // }))
                        }}
                      >
                        <div className="flex flex-row">
                          <p className='text-white-100 text-center text-[8px] sm:text-[9px]'>ADD TO CART</p>
                          <IoIosAdd className="text-[15px] text-white-100" />
                        </div>
                      </div>
                      <div className="cursor-pointer"
                      onClick={() => dispatch(addWish(apparel))}
                      >
                        {isWishlistChecked(apparel.id) ? <AiFillHeart className={`w-[25px] text-[23px] sm:text-[30px] text-[#be7f2d] ml-[20px]`} /> :
                        <AiOutlineHeart className={`w-[25px] text-[23px] sm:text-[30px] text-[#be7f2d] ml-[20px]`} />
                        }
                      </div>
                    </div>
                    {/* <p className="text-gray-700 text-base">{apparel.attributes.desc}</p> */}



                    {apparel.attributes.isNew == true ? <div className="h-[20px] w-[50px] rounded-[3px] absolute top-[10px] left-[10px] bg-primary-100 flex justify-center items-center z-[10]">
                      <p className='text-white-100 font-bold text-[10px]'>New</p>
                    </div> : ""}
                  </div>
                </div>


              </div>

            </SwiperSlide>
          ))}

        </Swiper > : ""
        }

        {
          contentType === "featured" ? <Swiper
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
                            <div className="text-white-100 font-bold text-[13px] mb-2">{apparel.attributes.name}</div>
                            <span className="text-white-100 text-[10px] text-sm">${apparel.attributes.price}</span>
                            {/* <p className="text-gray-700 text-base">{apparel.attributes.desc}</p> */}

                          </div>
                        </div>


                      </div>


                    </div>
                  </Link>
                </div>

              </SwiperSlide>
            ))}

          </Swiper> : ""
        }
      </>
    )
  }


  // const headingContent = contentType.charAt(0).toUpperCase() + contentType.slice(1);

  return (
    <>
      <div className={`bg-[${props.color}] ${contentType !== "carousel" && contentType !== "featured" ? "px-[18px] sm:px-[55px] py-[30px]" : "px-[18px] sm:px-[60px] pt-0"} ${contentType === "featured" ? " my-[30px]" : ""} w-full`}>
        <div className="w-full">
          {headerType === "timeline" ?

            <div className="flex justify-between items-center mb-[20px] bg-primary-100 px-[20px] py-[10px] rounded-[5px]">
              <div className="flex-[7] max-[727px]:flex-[7] max-[1050px]:flex-[8] flex flex-col sm:flex-row sm:justify-between ">
                <div className="flex items-center">
                  <img src={gucci} alt="" className='w-[15px] sm:w-[30px] mr-[15px]' />
                  <h1 className='text-[14px] sm:text-[18px] text-white-100 font-semibold'>{headerTitle}</h1>
                </div>
                <CountdownTimer headerType={headerType} />
              </div>
              <div className="flex-[2] sm:flex-[3] flex justify-end">
                <button className="bg-transparent rounded-md text-[12px] sm:text-[14px] text-white-100">View All</button>
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
              ? data.slice(0, 6).map((collection, id) => (
                <div className="relative " key={collection.id}>
                  <div className="w-[105px] sm:w-[230px]  h-[140px] sm:h-[270px] overflow-hidden">

                    <Link to={`/view-collection/${collection.id}`} state={collection}>
                      <div className="h-[80%] w-full p-[15px] border-[1px] border-solid border-gray-200 rounded-[10px]">
                        <div
                        className="w-full h-full bg-cover bg-center bg-no-repeat z-[2] relative p-[10px] sm:p-[25px] rounded-[5px] flex items-end"
                        // style={{ backgroundImage: `url(${constants.url}${collection.attributes.imageUrl.data[0].attributes.url})` }}
                        alt={collection.attributes.title}
                      >
                        <div className="w-full h-[25%] py-[10px] p-0 sm:px-[15px] flex flex-row justify-between items-center bg-white rounded-[8px] z-[2] relative">
                          <h1 className='text-[11px] sm:text-[15px] font-bold'>{collection.attributes.title}</h1>
                          <FiArrowRight className="text-[11px] sm:text-[15px] ml-[5px]" />
                        </div>
                      </div>
                      </div>

                    </Link>
                  </div>
                </div>)) : ""
            }</div>



          <div className="w-full flex flex-wrap gap-[12px]">
            {contentType === "brand" ?
              data.slice(0, 8).map((brand, id) => (
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

          {contentType !== "carousel" ? notCarousel(apparel) : ""}

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
