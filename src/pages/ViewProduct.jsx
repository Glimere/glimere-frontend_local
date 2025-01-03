import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useInView } from 'react-intersection-observer';
import { constants } from '../global-components/constants';
import { IoIosAdd } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import { AiOutlineHeart } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { BiMessageAltDetail } from 'react-icons/bi'
import { SlArrowLeft } from 'react-icons/sl'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import VerticalCarousel from '../components/VerticalCarousel';
import { ApparelRating } from '../components/ApparelRating';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAllApparels } from '../slice/apparels/apparelSlice';
import { selectWishlist } from '../slice/wishList/wishListSlice';
import { addWish } from '../slice/wishList/wishListSlice';
import CheckoutSummary from '../components/CheckoutSummary';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { useDispatch } from 'react-redux';
import { addItem } from '../slice/cart/cartSlice';
import { addToCart } from '../slice/cart/cartSlice';
import ProductSection from '../components/ProductSection';
import { selectAllUsers, selectLoggedInUser } from '../slice/users/userSlice';
import { AverageRating } from '../components/AverageRating';
import { globalPrice } from '../global-components/globalPrice';
import ApparelList from '../components/ApparelList';


export default function ViewProduct() {

  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()
  const { ref: ref, inView: inView } = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin: "0px 0px 0px 0px",
    delay: "0"
  });

  console.log('inView', inView)

  const apparels = useSelector(selectAllApparels)
  const [quantity, setQuantity] = useState(1)
  const [apparelSize, setApparelSize] = useState('M')
  const [apparel, setApparel] = useState(location.state)
  const [IsSticky, setIsSticky] = useState(true)
  const [selectedColors, setSelectedColors] = useState([apparel?.attributes?.colors?.data[0]?.attributes?.name])
  

  const wishlist = useSelector(selectWishlist)
  const user = useSelector(selectAllUsers)
  const loggedinUser = useSelector(selectLoggedInUser)

  function getRatingsFromJson(jsonData) {
    if (!jsonData || !Array.isArray(jsonData)) {
      return []; // Return an empty array if the input is invalid
    }

    // Extract ratings from each item in the JSON data
    const ratings = jsonData.map((rating) => rating.attributes.rating);

    // Flatten the array of ratings
    return ratings.flat();
  }

  const isWishlistChecked = (id) => {
    return wishlist.some((item) => item.id === id)
  }
  
  console.log('apparel', apparel)
  console.log('user', user)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const offset = window.scrollY;
  //     if (offset < 750) {
  //       setIsSticky(true);
  //     } else {
  //       setIsSticky(false);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  const handleColorChange = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((s) => s !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
    console.log("selectedColors", selectedColors);
  };



  return (
    <>
      <div className="w-full  bg-white-100 relative ">
        <div className='h-full sm:h-[100vh] flex flex-col sm:flex-row pt-[80px] w-full z-[5]'>

          <div className="mt-[80px] ml-[30px] absolute top-0 left-0">
            <div className="h-[50px] w-[50px] flex justify-center items-center rounded-full bg-[#FFF7E9] cursor-pointer z-20 relative"
              onClick={() => navigate(-1)}
            >
              <SlArrowLeft className="text-[#ED7534] text-[20px]" />
            </div>

          </div>

          <div className="flex-[5.5] flex">
            <div className="h-[93vh] sm:h-full pt-[35px] sm:pt-0 pb-[1px] sm:pb-0 w-full overflow-hidden items-center">
              <VerticalCarousel images={apparel.attributes.apparel_imgs.data} />
            </div>
          </div>


          <div className={`w-full sm:w-[45%] h-[90vh] sm:h-[100vh] flex flex-row right-0 bottom-0 ${inView ? "relative sm:absolute" : "relative sm:fixed"}  z-[10]`}>
          {/* <div className="w-full h-[70px] bg-[#f7d08a]"></div> */}
          <div className="w-full h-full pt-[40px] sm:pt-[80px] bg-[#FFF7E9] ">
            <div className="w-full h-full px-[40px] sm:px-[50px] pb-[50px] pt-[20px] flex flex-col  justify-between">
              <div className="">
                <h1 className="text-[30px]">{apparel.attributes.apparel_name}</h1>
                <div className="flex flex-row items-center mt-[10px]">
                <AverageRating ratings={getRatingsFromJson(apparel.attributes.ratings.data)} loading={false} />
                  <div className="border-b border-gray-400 border-dotted ml-[30px]">
                    <p className='text-[11px] text-gray-400'>Delivery Info</p>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="flex flex-row mt-[10px] h-[40px] items-center">
                  <h1 className="text-[20px] text-[#ED7534]">{globalPrice(apparel.attributes.apparel_price)}</h1>
                  <div className="border-b border-gray-400 border-dotted ml-[30px]">
                    <p className='text-[11px] text-gray-400'>Delivery Info</p>
                  </div>
                </div>
              </div>
              <div className="">
                <p className="text-[14px] font-bold text-dark-100">{apparel.attributes.brands.data[0].attributes.name}</p>
                <p className="text-[12px] mt-[10px]">{apparel.attributes.desc}</p>
              </div>

              <hr className='bg-primary-100 border-none h-[1px]' />

              <div className="w-full">
                <div className="flex flex-wrap gap-[3px]">
                  {apparel?.attributes?.colors?.data?.map((color, id) => (
                    <div key={color.id} className={`flex h-[40px] w-[40px] p-[3px] hover:p-[4px] justify-center items-center ${selectedColors.includes(color.id) ? "bg-[#ffcaad]" : ""} border-[1px] border-[#ED7534] hover:border-[1px] rounded-full cursor-pointer duration-100`}
                      onClick={() => { handleColorChange(color.id) }}
                    >
                      <div className={`flex h-full w-full justify-center items-center ${`bg-[${color.attributes.code}]`} rounded-full`}>
                        {/* <p className='text-[10px] text-white-100'>{apparel.attributes.color[0]}</p> */}
                      </div>
                    </div>
                  ))}

                  {/* <div className="flex justify-center space-x-2">
          <input id="nativeColorPicker1" type="color" value="#6590D5" />
          <button
            id="burronNativeColor"
            type="button"
            className="inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white-100 shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg">
            Button
          </button>
        </div> */}

                </div>

              </div>

              <div className="flex flex-row gap-[20px] flex-wrap">

                <div className="flex flex-row items-center">
                  {/* <p className='text-[12px] text-[#ED7534] mr-[3px]'>SIZE: </p> */}
                  {apparel?.attributes?.sizes?.data?.map((size, id) => {
                    return (
                      <div key={id} className={`px-[12px] py-[8px] rounded-full flex flex-row justify-center items-center ${apparelSize == size.attributes.short_name ? "bg-primary-100 text-white-100" : "bg-[#ffffff] text-dark-100"}  cursor-pointer mr-[8px]`}
                        onClick={() => setApparelSize(size?.attributes?.short_name)}
                      >
                        <p className="text-[9px]">{size?.attributes?.short_name}</p>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="flex flex-row items-center justify-between">
                {/* <p className='text-[11px] flex-[1]'>Enjoy a special discount when you add up to three items to your cart!</p> */}
                <div className="flex flex-row justify-center items-center p-[10px] h-[50px] w-[150px] bg-primary-100 cursor-pointer"
                onClick={() => {
                  dispatch(addToCart({
                    item: {
                        quantity: 1,
                        image_url: apparel.attributes.apparel_imgs.data[0].attributes.url,
                        products: apparel.id,
                        users_permissions_users: user.id
                    }, jwt: loggedinUser.jwt
                }
                ))
                  // dispatch(addItem({
                  //   id: apparel.id,
                  //           name: apparel.attributes.name,
                  //           price: apparel.attributes.price,
                  //           desc: apparel.attributes.desc,
                  //           colors: apparel.attributes.colors,
                  //           imageUrl: apparel.attributes.imageUrl.data[0].attributes.url,
                  //           material: apparel.attributes.material,
                  //           discount: apparel.attributes.discount,
                  //           gender: apparel.attributes.gender,
                  //           quantity: quantity
                  // }))
                }}
                >
                  <div className="flex flex-row">
                    <p className='text-white-100 text-[13px] mr-[3px]'>ADD TO CART</p>
                    <IoIosAdd className="w-[20px] h-[20px] text-white-100" />
                  </div>
                </div>
                <div className="cursor-pointer"
                onClick={() => dispatch(addWish(apparel))}
                >
                  {isWishlistChecked(apparel.id) ? <AiFillHeart className={`w-[25px] text-[40px] text-[#be7f2d] ml-[20px]`} /> :
                <AiOutlineHeart className={`w-[25px] text-[40px] text-[#be7f2d] ml-[20px]`} />}
                </div>
                
              </div>
            </div>
          </div>
          {/* <div className="relative pt-[80px] h-full bg-white-100">
            <CheckoutSummary />
          </div> */}

        </div>



          <div className="flex-[4.5] -z-50 hidden sm:block"></div>
        </div>


        <div className="flex flex-col sm:flex-row w-full pt-[20px] pb-[60px]">
          <div className="flex flex-col flex-[5.5] px-[40px] sm:px-[60px]">
            <div className="w-full">
              {/* <hr /> */}
              <h1 className='text-[23px] font-medium text-[#ED7534]'>Description</h1>
              <hr />
            </div>
            <div className="w-full mt-[20px]">
              <p className="text-[12px]">Introducing the XYZ Fashion Black Gown: A captivating masterpiece that exudes elegance and sophistication. This stunning black gown features intricate hand-embroidered embellishments, a flattering silhouette, and a touch of shimmer. Perfect for special occasions, it embraces timeless style and showcases impeccable craftsmanship. Elevate your look with XYZ Fashion&rsquo;s Exquisite Black Gown and make a lasting impression.</p>
            </div>

            <div className="mt-[40px]">
              <div className="container mx-auto">
                <div className="flex flex-col gap-6">
                  <div className="lg:col-span-2">


                    {/* <!-- Product Variations --> */}
                    <div className="mb-4">
                      <label htmlFor="variation" className="text-lg font-semibold">Variations:</label>
                      <select id="variation" name="variation" className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500">
                        <option value="variation1">Variation 1</option>
                        <option value="variation2">Variation 2</option>
                        <option value="variation3">Variation 3</option>
                      </select>
                    </div>



                    {/* <!-- Comments Section --> */}
                    <div>
                      <div className="w-full mb-[15px]">
                        {/* <hr /> */}
                        <h1 className='text-[23px] font-medium text-[#ED7534]'>Reviews</h1>
                        <hr />
                      </div>
                      <div className='flex flex-col '>
                        {apparel.attributes.ratings.data.map(rating => (

                          <div className="flex flex-col mb-[20px]">
                          <div className="flex flex-row items-center mb-[15px]">
                            <div className='h-[40px] w-[40px] mr-[10px] rounded-full bg-gray-200 '></div>
                            <div className="flex flex-col">
                              <h1 className='text-[12px] font-medium mb-[5px]'>{rating.attributes.user_name}</h1>
                              <ApparelRating rating={rating.attributes.rating} />
                            </div>

                          </div>

                          <p className="text-gray-700">{rating.attributes.comment}</p>
                        </div>
                        ))}
                        
                        
                      </div>
                    </div>
                    <div className="p-4 bg-white-100 shadow rounded-lg flex-col">
                      <h2 className="text-[20px] font-semibold mb-[20px]">Seller</h2>
                      <div className="flex items-center">
                        <div className="h-[45px] w-[45px] rounded-full bg-gray-200 mr-[20px]"></div>
                        <div className="w-full flex justify-between items-center">
                          <p className="text-gray-700">XYZ Fashion Store</p>
                          <div className="flex flex-row w-[50px] justify-between">
                            <BsFillTelephoneFill className="text-[#ED7534] text-[20px] mr-[10px]" />
                            <BiMessageAltDetail className="text-[#ED7534] text-[26px]" />

                          </div>
                        </div>
                      </div>
                      {/* <!-- Seller Information --> */}

                    </div>
                  </div>

                  {/* <!-- Similar Apparels --> */}



                </div>
              </div>
            </div>



          </div>
          <div className="w-[45%] -z-50"></div>
        </div>
      </div>

      <div ref={ref} className="">
        <div className='w-full] py-[5vh] bg-[#ffefd1]'>
          <h2 className="text-lg font-semibold pl-[30px] mb-4">Similar Apparels</h2>
          <ProductSection  apparels={apparels} />
        </div>
        <ApparelList headerType="single" headerTitle="More Styles" apparels={apparels} />

        <Newsletter />
        <Footer />
      </div>

    </>
  )
}
