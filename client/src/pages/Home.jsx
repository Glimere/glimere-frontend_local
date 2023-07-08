import { constants } from "../global-components/constants";
import { useState, useEffect } from "react";
import axios from "axios";
import { RxArrowTopRight } from 'react-icons/rx'
import { ProductCard } from "../components/ProductCard";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { selectAllApparels, getApparelsStatus, getApparelsError, fetchApparels } from "../slice/apparelSlice";
import { selectAllAds, getAdsError, getAdsStatus, fetchAds } from "../slice/adSlice";
import { selectAllCarousels, getCarouselError, getCarouselStatus, fetchCarousels } from "../slice/carouselSlice";
import { selectAllUsers, getUserError, getUserStatus } from "../slice/userSlice";
import Carousel from "../components/Carousel";
import ProductDisplay from "./ProductDisplay";
import Categories from "../components/Categories";
import Newsletter from "../components/Newsletter";



// import '@coreui/coreui/dist/css/coreui.min.css'

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
  const [adsUrl, setAdsUrl] = useState({})




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
    setAdsUrl({
      adsUrl1: constants.url + ads[0]?.attributes.adsimg.data.attributes.url,
      adsHeading1: ads[0]?.attributes.heading,
      adsTrigger1: ads[0]?.attributes.trigger,
      adsNumber1: ads[0]?.attributes.carouselid,
      adsUrl2: constants.url + ads[1]?.attributes.adsimg.data.attributes.url,
      adsHeading2: ads[1]?.attributes.heading,
      adsTrigger2: ads[1]?.attributes.trigger,
      adsNumber2: ads[1]?.attributes.carouselid,
      adsUrl3: constants.url + ads[2]?.attributes.adsimg.data.attributes.url,
      adsHeading3: ads[2]?.attributes.heading,
      adsTrigger3: ads[2]?.attributes.trigger,
      adsNumber3: ads[2]?.attributes.carouselid,
      adsUrl4: constants.url + ads[0]?.attributes.adsimg.data.attributes.url,
      adsHeading4: ads[0]?.attributes.heading,
      adsTrigger4: ads[0]?.attributes.trigger,
      adsNumber4: ads[0]?.attributes.carouselid,
    })
  }, [ads]);

  // console.log('adsUrl.adsHeading', adsUrl.adsHeading)

  return (
    <>
      <div className="w-full h-[100vh] flex flex-row overflow-hidden">
        <Carousel carousels={carousels} />
      </div>
      <div className="px-[80px] py-[40px]">
        <ProductDisplay adsUrl={adsUrl} />
        <Categories data={apparels} carousels={carousels} contentType="featured" />
        <Categories data={apparels} carousels={carousels} contentType="apparel" headerType="view"  color="#ffffff"/>
        <Categories data={apparels} carousels={carousels} contentType="carousel"  color="#FFF7E9"/>
        <Categories data={apparels} carousels={carousels} contentType="apparel" headerType="timeline"  color="#ffffff"/>
        <Categories data={apparels} carousels={carousels} contentType="brand" headerType="view" color="#FFF7E9"/>
        <Categories data={apparels} carousels={carousels} contentType="collection" headerType="view" color="#FFF7E9"/>



        {/* <div className="w-full grid grid-cols-4 gap-2 p-[50px] bg-[#FFF7E9]">
        {apparels.map((apparel) => (
          <ProductCard key={apparel.id} apparel={apparel} />
        ))}
      </div> */}

      </div>
      <Newsletter />

      <Footer />

    </>
  )
}
