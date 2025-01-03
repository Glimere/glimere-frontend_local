import { FaStar } from 'react-icons/fa';

export const ApparelRating = ({ rating, loading }) => {
    const roundedRating = Math.round(rating);

    return (
      <div className={`flex flex-row ${loading ? "invisible" : "visible"} duration-150`}>
        {Array.from({ length: 5 }, (_, index) => (
          <FaStar key={index} color={index < roundedRating ? '#ed7534' : '#C4C4C4'} />
        ))}
      </div>
    );
  };