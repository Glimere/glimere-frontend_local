import { constants } from "../global-components/constants";
import { useState, useEffect } from "react";
import axios from "axios";
import { RxArrowTopRight } from 'react-icons/rx'
import { Carousel } from "@material-tailwind/react";
import Slider from 'react-slick';
import { ProductCard } from "../components/ProductCard";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import clothRack from '../assets/images/cloth-rack.png'
import { useSelector, useDispatch } from "react-redux";
import { selectAllApparels, getApparelsStatus, getApparelsError, fetchApparels } from "../slice/apparelSlice";
import { selectAllAds, getAdsError, getAdsStatus, fetchAds } from "../slice/adSlice";
import { selectAllCarousels, getCarouselError, getCarouselStatus, fetchCarousels } from "../slice/carouselSlice";
import { selectAllUsers, getUserError, getUserStatus } from "../slice/userSlice";

export default function Home() {

  const dispatch = useDispatch()
  const apparels = useSelector(selectAllApparels)
  const apparelStatus = useSelector(getApparelsStatus)
  const apparelError = useSelector(getApparelsError)

  const ads = useSelector(selectAllAds)
  const adsStatus = useSelector(getAdsStatus)
  const adsError = useSelector(getAdsError)

  const carousels = useSelector(selectAllCarousels)
  const carouselStatus = useSelector(getCarouselStatus)
  const carouselError = useSelector(getCarouselError)

  const userss = useSelector(selectAllUsers)

console.log('userss', userss)
  const [user, setUser] = useState({});
  const [adsUrl1, setAdsUrl1] = useState('')
  const [adsUrl2, setAdsUrl2] = useState('')


  useEffect(() => {

    console.log('apparelStatus', apparelStatus)
    if (apparelStatus === "idle") {
      dispatch(fetchApparels())
    }
    console.log('apparels', apparels)

    if (adsStatus === "idle") {
      dispatch(fetchAds())
    }


    if (carouselStatus === "idle") {
      dispatch(fetchCarousels())
    }

  }, [dispatch, apparelStatus, adsStatus, carouselStatus])

  useEffect(() => {
    // Set the URLs for the ads
    setAdsUrl1(constants.url + ads[0]?.attributes.adsimg.data.attributes.url);
    setAdsUrl2(constants.url + ads[1]?.attributes.adsimg.data.attributes.url);
  }, [ads]);



  const settings = {
    dots: false,
    infinite: true,
    speed: 5000, // Duration of slide transition in milliseconds
    autoplay: true,
    autoplaySpeed: 3000, // Time between slide transitions in milliseconds
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <div className="w-full h-[100vh] flex flex-row overflow-hidden">
        <div className="h-full w-full flex flex-row">

          <div className="flex-[2.5] w-[25%] bg-black pt-[80px] ">


          </div>
          <div className="bg-[#fff8ea] h-full flex-[5] w-[50%] -z-10">

            <Slider {...settings} className="rounded-xl">
              {carousels?.map((carousel, id) => {
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


            </Slider>




          </div>

          <div className="flex-[2.5] w-[25%] flex flex-col justify-end bg-[#f7d08a]">

          </div>
        </div>

        <div className="absolute flex flex-row w-full h-[100vh] overflow-hidden">


          <div className="flex-[2.2] w-[25%] pt-[80px] ">
            <div className="pb-[40px]">
              <h1 className="text-[30px] text-white pl-[40px] mt-[50px]" style={{ fontFamily: "Edensor" }}>Your</h1>
              <h1 className="text-[90px] text-white pl-[40px]" style={{ fontFamily: "Edensor" }}>Fashion,</h1>
            </div>
            {/* {console.log('url', constants.url + ads[0].attributes.adsimg.data.attributes.url)} */}

            <div className="h-[350px] w-[350px] flex justify-center items-center rounded-full ml-[40px] bg-[#f7d08a]">


              <div className="h-[300px] w-[300px] bg-cover bg-center bg-no-repeat rounded-full bg-white"
                style={{ backgroundImage: `url(${adsUrl1})` }}
              ></div>

              <div className="h-[400px] w-[400px] pt-[20px] pr-[20px] absolute flex justify-end">
                <Link className="h-[100px] w-[100px]">
                  <div className="h-[100px] w-[100px] rounded-full flex justify-center items-center bg-white p-[20px]">
                    <h1 style={{ fontFamily: "Edensor" }} className="text-[20px] text-center font-bold">50% Off</h1>
                  </div>
                </Link>
              </div>
            </div>

          </div>

          <div className="flex-[1] w-[25%] flex flex-col justify-end ">
            <div className="h-[250px] w-[250px]  flex justify-center items-center rounded-full bg-[#000000]">

              <Link>
                <div className="h-[200px] w-[200px] bg-cover bg-center bg-no-repeat rounded-full bg-white"
                  style={{ backgroundImage: `url(${adsUrl2})` }}
                ></div>
              </Link>



            </div>

            <div className="">
              <h1 className="text-[30px] text-right pr-[40px] text-black" style={{ fontFamily: "Edensor" }}>Your</h1>
              <h1 className="text-[80px] text-right text-black pr-[40px] mb-[50px]" style={{ fontFamily: "Edensor" }}> Style</h1>
            </div>
          </div>

        </div>

      </div>

      <div className="w-full h-[100vh] bg-[#e2912e] flex flex-row p-[50px]">
        {ads?.map((ad) => {
          return (
            <div key={ad.id} className="h-full w-[400px]  bg-cover bg-center bg-no-repeat transition-transform transform-gpu hover:scale-105 mx-[20px]"
              style={{ backgroundImage: `url(${constants.url}${ad.attributes.adsimg.data.attributes.url})` }}
            >
              <div className="h-full w-full flex justify-center items-center duration-300 bg-[#0000007c] hover:bg-[#000000bd]">
                <div className="h-[200px] w-[200px]">
                  <h1 className="text-[30px] text-white font-semibold mb-[50px]" style={{ fontFamily: "Edensor" }}>{ad.attributes.heading}</h1>
                  <p className="text-[15px] text-white">{ad.attributes.info}</p>
                </div>
              </div>
            </div>
          )
        })}

      </div>

      <div className="w-full grid grid-cols-4 gap-2 p-[50px] bg-[#FFF7E9]">
        {apparels.map((apparel) => (
          <ProductCard key={apparel.id} apparel={apparel} />
        ))}
      </div>


      <div className="flex items-center h-[70vh] pl-[80px]">

        <div className="w-[60%]">
          <h2 className="text-[#9d5c0d] text-[30px] mb-4 " style={{ fontFamily: "Edensor" }}>Subscribe to our Newsletter</h2>
          <p className="mt-[20px] text-[13px]">Don't miss out on the opportunity to elevate your fashion game and stay connected with Glimere. Subscribe now and embrace the world of style and luxury!</p>
          <form className="flex mt-[30px]">
            <input type="email" placeholder="Enter your email" className="bg-[#FFF7E9] w-[300px] placeholder:text-[#e2912e] placeholder:text-[13px] px-4 py-2 rounded-l focus:outline-none" />
            <button type="submit" className="bg-[#e2912e] text-white px-4 py-2 rounded-r hover:bg-[#f7aa4c] focus:outline-none ml-[20px]">Subscribe</button>
          </form>
        </div>

        <div className="h-full flex flex-col justify-end items-end">
          <img src={clothRack} alt="" className="w-[400px]" />
        </div>

      </div>


      <Footer />

    </>
  )
}
