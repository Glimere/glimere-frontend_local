import { constants } from "../global-components/constants";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineHeart } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'
import { selectAllUsers } from '../slice/users/userSlice';
import { useEffect, useState } from "react";
import { AverageRating } from "./AverageRating";
import { addWish } from "../slice/wishList/wishListSlice";
import { selectWishlist } from "../slice/wishList/wishListSlice";
import { globalPrice } from "../global-components/globalPrice";




export const ProductCard = (props) => {

  const dispatch = useDispatch()
  const user = useSelector(selectAllUsers)
  const wishlist = useSelector(selectWishlist)

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

  return (
    <>
      {props.apparel.map((apparel) => (
        <div className={` ${props.viewToggle ? "w-full h-[180px]" : "w-full h-[295px]"}  relative duration-150 ${props.loading ? "bg-gray-100 animate-pulse" : ""}   rounded-[10px] overflow-hidden`} key={apparel.id}>
          <Link to={`/view-product/${apparel.id}`} state={apparel}>
            <div className={`h-full w-full p-[15px] border-[1px] border-solid border-gray-200 rounded-[10px] flex ${props.viewToggle ? "flex-row gap-[18px]" : "flex-col"}  items-center justify-center`}>
              {/* <div className="h-full w-full"></div> */}
              <div
                className={`w-full h-full rounded-[5px] ${props.viewToggle ? "flex-[1]" : "flex-[3]"} duration-150 bg-cover bg-center bg-no-repeat z-[2] relative ${props.loading ? "invisible" : "visible"} `}
                style={{ backgroundImage: `url(${constants.url}${apparel.attributes.apparel_imgs.data[0].attributes.url})` }}
                alt={apparel.attributes.apparel_name}
              ></div>

              <div className={`w-full ${props.viewToggle ? "flex-[3]" : "flex-[1]"} flex flex-col py-[19px] duration-150 ${props.loading ? "bg-gray-50 animate-pulse" : "bg-white-100"}  z-[2] relative`}>
                <p className={`font-bold text-[10px] ${props.loading ? "invisible" : "visible"} duration-150`}>{apparel.attributes.brands.data[0].attributes.name}</p>
                <div className={`text-[12px] mb-[5px] ${props.loading ? "invisible" : "visible"} duration-150`}>{apparel.attributes.apparel_name}</div>
                <div className={`flex flex-row justify-between rounded-[5px] ${props.loading ? "bg-gray-300 animate-pulse" : ""} duration-150`}>
                  <div className="h-full ">
                    <div className="flex flex-row gap-[10px]">
                      <span className={`${apparel.attributes.is_discounted == true ? "text-gray-300 line-through" : ""} text-[0.8rem] sm:text-[12px] text-sm mb-[5px] ${props.loading ? "invisible" : "visible"} duration-150`}>{globalPrice(apparel.attributes.apparel_price)}</span>
                    <span className={`text-gray-600 line-through ${apparel.attributes.is_discounted === false ? "hidden" : ""} text-[0.8rem] sm:text-[12px] text-sm mb-[5px] ${props.loading ? "invisible" : "visible"} duration-150`}>{globalPrice(apparel.attributes.discounted_price)}</span>
                    </div>
                    <AverageRating ratings={getRatingsFromJson(apparel.attributes.ratings.data)} loading={props.loading} />

                  </div>
                  <div className="h-full flex items-center">

                  </div>
                </div>

              </div>

            </div>
          </Link>
          <div className={`h-[30px] w-[30px] rounded-full bg-[#ffffff] absolute top-[9%] right-[9%] flex justify-center items-center cursor-pointer z-10 ${props.loading ? "invisible" : "visible"} duration-150`}
            onClick={() => dispatch(addWish(apparel))}
          >{isWishlistChecked(apparel.id) ?
            <AiFillHeart className={`text-[20px] text-[#ED7534]`}
            />
            :
            <AiOutlineHeart className={`text-[20px] text-[#ED7534]`}
            />}
          </div>
        </div>
      ))}
    </>

  );
};