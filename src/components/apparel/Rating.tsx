import { reviewsData } from "@/data/reviewsData";

interface RatingProps {
  rating: number;
  reviews: number;
}

const Rating: React.FC<RatingProps> = ({ rating, reviews }) => {
  const roundedRating = Math.round(rating);

  return (
    <div className="flex flex-row gap-[5px] items-center">
      <svg
        className="scale-100"
        width="16"
        height="15"
        viewBox="0 0 16 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
          style={{ fill: "#FBB56C" }}
        />
      </svg>
      <p className="text-dark text-[13px] mt-[5px]"><span className="font-bold">{roundedRating}.0</span>{" "}({reviews} Reviews)</p>
    </div>
  );
};

export default Rating;
