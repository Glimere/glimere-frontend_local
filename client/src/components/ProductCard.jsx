import { constants } from "../global-components/constants";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineHeart } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'
import { selectAllUsers } from '../slice/users/userSlice';
import { useEffect, useState } from "react";
import { StarRating } from "./StarRating";
import { addWish } from "../slice/wishList/wishListSlice";
import { selectWishlist } from "../slice/wishList/wishListSlice";




export const ProductCard = (props) => {

  const dispatch = useDispatch()
  const user = useSelector(selectAllUsers)
  const wishlist = useSelector(selectWishlist)


  const isWishlistChecked = (id) => {
    return wishlist.some((item) => item.id === id)
  }

  return (
    <>
      {props.apparel.map((apparel) => (
        <div className={` ${props.viewToggle ? "w-full" : "w-full"} h-[280px] relative duration-150 ${props.loading ? "bg-gray-100 animate-pulse" : ""}   rounded-[10px] overflow-hidden`} key={apparel.attributes.productid}>
          <Link to={`/view-product/${apparel.attributes.productid}`} state={apparel}>
            <div className={`h-full w-full flex ${props.viewToggle ? "flex-row" : "flex-col"}  items-center justify-center`}>
              <div
                className={`w-full h-full ${props.viewToggle ? "flex-[1]" : "flex-[3]"} duration-150 bg-cover bg-center bg-no-repeat z-[2] relative ${props.loading ? "invisible" : "visible"} `}
                style={{ backgroundImage: `url(${constants.url}${apparel.attributes.imageUrl.data[0].attributes.url})` }}
                alt={apparel.attributes.name}
              ></div>

              <div className={`w-full ${props.viewToggle ? "flex-[3]" : "flex-[1]"} flex flex-col p-[15px] pb-[19px] duration-150 ${props.loading ? "bg-gray-50 animate-pulse" : "bg-white"}  z-[2] relative`}>
                <p className={`font-bold text-[10px] ${props.loading ? "invisible" : "visible"} duration-150`}>{apparel.attributes.brand}</p>
                <div className={`text-[12px] mb-[5px] ${props.loading ? "invisible" : "visible"} duration-150`}>{apparel.attributes.name}</div>
                <div className={`flex flex-row justify-between rounded-[5px] ${props.loading ? "bg-gray-300 animate-pulse" : ""} duration-150`}>
                  <div className="h-full">
                    <span className={`text-[#9D5C0D] text-[14px] font-medium text-sm mb-[5px] ${props.loading ? "invisible" : "visible"} duration-150`}>${apparel.attributes.price}</span>
                    <StarRating rating={apparel.attributes.rating} loading={props.loading} />
                  </div>
                  <div className="h-full flex items-center">

                  </div>
                </div>

              </div>

            </div>
          </Link>
          <div className={`h-[30px] w-[30px] rounded-full bg-[#ffffff] absolute bottom-3 right-3 flex justify-center items-center cursor-pointer z-10 ${props.loading ? "invisible" : "visible"} duration-150`}
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