import { constants } from "../global-components/constants";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectAllAds } from "../slice/ads/adSlice";
import { selectAllApparels } from "../slice/apparels/apparelSlice";
import { selectAllUsers } from "../slice/users/userSlice";
import { selectAllCarousels } from "../slice/carousel/carouselSlice";
import { selectAllBrands } from "../slice/brand/brandSlice";
import { selectAllSubcategory } from "../slice/subCategory/subCategorySlice";
import { fetchUsers, getUserStatus } from "../slice/users/userSlice";
import { selectCart } from "../slice/cart/cartSlice";
import Carousel from "../components/Carousel";
import ProductDisplay from "../components/ProductDisplay";
import Categories from "../components/Categories";
import ProductSession from "../components/ProductSession";
import BrandSession from "../components/BrandSession";
import FeaturedSession from "../components/FeaturedSession";
import CarouselSession from "../components/CarouselSession";
import CollectionSession from "../components/CollectionSession";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addItem } from "../slice/cart/cartSlice";
import { addMultipleItems } from "../slice/cart/cartSlice";




export default function Home() {

  const dispatch = useDispatch()

  const apparels = useSelector(selectAllApparels)

  const ads = useSelector(selectAllAds)

  const carousels = useSelector(selectAllCarousels)

  const users = useSelector(selectAllUsers)
  const userStatus = useSelector(getUserStatus)

  const cart = useSelector(selectCart)

  const [adsUrl, setAdsUrl] = useState({})

console.log('userStatus', userStatus)
  console.log('users', users)
  console.log('cart', cart)

  // if (users !== {} && users !== undefined && users !== null) {
  //   localStorage.removeItem('user')
  //   console.log('localstorage user removed')
  // }


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
      <div className="w-full h-[45vh] sm:h-[100vh] flex flex-row overflow-hidden">
        <Carousel carousels={carousels} />
      </div>
      <div className="">

        {/* <ProductDisplay adsUrl={adsUrl} /> */}

        <ProductSession headerType="view" headerTitle="Latest Trends" type="normal" />
        <ProductSession headerTitle="Latest Trend" headerType="view" type="trending" />
        <CarouselSession headerTitle="" headerType="" />
        <ProductSession headerTitle="Flash Sales" type="special" headerType="timeline" />
        <FeaturedSession headerTitle="" type="featured" headerType="" />
        <BrandSession headerTitle="Top Brands" headerType="view" />
        <CollectionSession headerTitle="Featured Collections" headerType="view" />



        {/* <div className="w-full grid grid-cols-4 gap-2 p-[50px] bg-[#FFF7E9]">
        {apparels.map((apparel) => (
          <ProductCard key={apparel.id} apparel={apparel} />
        ))}
      </div> */}

      </div>


    </>
  )
}
