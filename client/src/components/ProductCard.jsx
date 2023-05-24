import { StarRating } from "./StarRating";
import { constants } from "../auth/constants";
import { Link } from "react-router-dom";

export const ProductCard = ({ apparel }) => {
  return (
    <Link to={`/view-product/${apparel.attributes.productid}`} state={apparel}>
    <div className="max-w-[240px] rounded overflow-hidden">
      <div
        className="w-full h-[200px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${constants.url}${apparel.attributes.imageUrl.data[0].attributes.url})` }}
        alt={apparel.attributes.name}
      ></div>
      <div className="flex flex-col px-6 py-4 pb-8 bg-white">
        <div className="font-bold text-[15px] mb-2">{apparel.attributes.name}</div>
        <span className="text-gray-600 text-sm">${apparel.attributes.price}</span>
        {/* <p className="text-gray-700 text-base">{apparel.attributes.desc}</p> */}
        
      </div>
   
    </div>
    </Link>
  );
};