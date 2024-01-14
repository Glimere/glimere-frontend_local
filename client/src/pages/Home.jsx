import { constants } from "../global-components/constants";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectAllAds } from "../slice/ads/adSlice";
import { selectAllApparels } from "../slice/apparels/apparelSlice";
import { selectAllUsers } from "../slice/users/userSlice";
import { selectAllCarousels } from "../slice/carousel/carouselSlice";
import { selectAllBrands } from "../slice/brand/brandSlice";
import { selectAllSubcategory } from "../slice/sub-category/subCategorySlice";
import { fetchUsers, getUserStatus } from "../slice/users/userSlice";
import { selectCart } from "../slice/cart/cartSlice";
import ShowcaseSection from "../components/ShowcaseSection";
import ProductDisplay from "../components/ProductDisplay";
import ProductSection from "../components/ProductSection";
import BrandSection from "../components/BrandSection";
import FeaturedSession from "../components/FeaturedSection";
import CarouselSession from "../components/CarouselSection";
import CollectionSession from "../components/CollectionSection";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addItem } from "../slice/cart/cartSlice";
import { addMultipleItems } from "../slice/cart/cartSlice";
import ApparelList from "../components/ApparelList";




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
  console.log("apparels", apparels)

  // if (users !== {} && users !== undefined && users !== null) {
  //   localStorage.removeItem('user')
  //   console.log('localstorage user removed')
  // }



  // console.log('adsUrl.adsHeading', adsUrl.adsHeading)

  return (
    <>
      <div className="w-full h-[80vh] sm:h-[100vh] flex flex-row overflow-hidden">
        <ShowcaseSection apparels={apparels} />
      </div>
      <div className="">

        {/* <ProductDisplay adsUrl={adsUrl} /> */}
        <BrandSection headerTitle="Top Brands" headerType="view" />
        <ProductSection headerType="view" headerTitle="Latest Trends" apparels={apparels} />
        <ProductSection headerTitle="Trending Styles" headerType="view" apparels={apparels} />

        <ApparelList headerType="single" headerTitle="Featured Styles" apparels={apparels} />
        {/* <CarouselSession headerTitle="" headerType="" /> */}
        {/* <ProductSection headerTitle="Flash Sales" type="special" headerType="timeline" /> */}
        {/* <FeaturedSession headerTitle="" type="featured" headerType="" /> */}
        {/* <CollectionSession headerTitle="Featured Collections" headerType="view" /> */}



        {/* <div className="w-full grid grid-cols-4 gap-2 p-[50px] bg-[#FFF7E9]">
        {apparels.map((apparel) => (
          <ProductCard key={apparel.id} apparel={apparel} />
        ))}
      </div> */}

      </div>


    </>
  )
}
