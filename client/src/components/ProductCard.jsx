import { StarRating } from "./StarRating";
import { constants } from "../global-components/constants";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../slice/likeSlice";
import { AiOutlineHeart } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'
import { selectAllUsers } from '../slice/userSlice';
import { useEffect, useState } from "react";




export const ProductCard = ({ apparel }) => {

  const dispatch = useDispatch()
  const user = useSelector(selectAllUsers)
  const [itemId, setItemId] = useState(apparel.attributes.productid);
  const likedItems = useSelector((state) => state.likes[itemId] || []);
  // const userStatus = useSelector(getUserStatus)


  // useEffect(() => {
   
  //   console.log('userStatus', userStatus)
  //   if (userStatus === "idle") {
  //           dispatch(fetchUsers())
  //   } 
  // }, [userStatus, dispatch]);
  
console.log('user', user)
// console.log('itemId', itemId)
  const handleLike = () => {
    if (isLiked(itemId)) {
      dispatch(removeItem({ userId: user.id, itemId: itemId }));
    } else {
      dispatch(addItem({  userId: user.id, itemId: itemId }));
    }
  };

  // console.log('likedItems', likedItems)

  const isLiked = (itemId) => {
    return likedItems.includes(itemId);
  };

  return (
    <div className="w-[180px] relative">
      <Link to={`/view-product/${apparel.attributes.productid}`} state={apparel}>
    <div className="max-w-[180px] rounded overflow-hidden">
      <div
        className="w-full h-[140px] bg-cover bg-center bg-no-repeat z-[2] relative"
        style={{ backgroundImage: `url(${constants.url}${apparel.attributes.imageUrl.data[0].attributes.url})` }}
        alt={apparel.attributes.name}
      >
        

      </div>
      <div className="flex flex-col px-6 py-4 pb-8 bg-white z-[2] relative">
        <div className="font-bold text-[15px] mb-2">{apparel.attributes.name}</div>
        <span className="text-gray-600 text-sm">${apparel.attributes.price}</span>
        {/* <p className="text-gray-700 text-base">{apparel.attributes.desc}</p> */}
        
      </div>
  
    </div>
    </Link>
    <div className="h-[30px] w-[30px] rounded-full bg-[#ffffffb0] absolute top-2 right-2 flex justify-center items-center cursor-pointer z-10" 
        onClick={handleLike}
        >
          {isLiked(apparel.attributes.productid) ? <AiOutlineHeart className="text-[18px] text-[#ED7534]"/> :
          <AiFillHeart className="text-[18px] text-[#ED7534]"/>}
        </div>
    </div>
    
  );
};