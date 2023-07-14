import { constants } from "../global-components/constants";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../slice/like/likeSlice";
import { AiOutlineHeart } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'
import { selectAllUsers } from '../slice/users/userSlice';
import { useEffect, useState } from "react";
import { StarRating } from "./StarRating";




export const ProductCard = ({ apparel }) => {

  const dispatch = useDispatch()
  const user = useSelector(selectAllUsers)
  const [toggleLike, setToggleLike] = useState();


  return (
    <>
      {apparel.map((apparel) => (
        <div className="w-[200px] h-[280px] relative bg-white rounded-[10px] overflow-hidden" key={apparel.attributes.productid}>
          <Link to={`/view-product/${apparel.attributes.productid}`} state={apparel}>
            <div className="h-full w-full flex flex-col items-center justify-center">
              <div
                className="w-full bg-cover bg-center bg-no-repeat z-[2] relative flex-[3]"
                style={{ backgroundImage: `url(${constants.url}${apparel.attributes.imageUrl.data[0].attributes.url})` }}
                alt={apparel.attributes.name}
              >


              </div>
              <div className="flex-[1] w-full flex flex-col p-[15px] pb-[19px] bg-white z-[2] relative">
                <p className="font-bold text-[10px]">{apparel.attributes.brand}</p>
                <div className="text-[12px] mb-[5px]">{apparel.attributes.name}</div>
                <div className="flex flex-row justify-between">
                  <div className="h-full">
                    <span className="text-[#9D5C0D] text-[14px] font-medium text-sm mb-[5px]">${apparel.attributes.price}</span>
                    <StarRating rating={apparel.attributes.rating} />
                  </div>
                  <div className="h-full flex items-center">

                  </div>
                </div>

              </div>

            </div>
          </Link>
          <div className="h-[30px] w-[30px] rounded-full bg-[#ffffff] absolute bottom-3 right-3 flex justify-center items-center cursor-pointer z-10"

          >{toggleLike == apparel.attributes.productid ?
            <AiFillHeart className="text-[20px] text-[#ED7534]"
              onClick={() => { setToggleLike() }}
            />
            :
            <AiOutlineHeart className={`text-[20px] text-[#ED7534]`}
              onClick={() => { setToggleLike(apparel.attributes.productid) }}
            />}
          </div>
        </div>
      ))}
    </>

  );
};