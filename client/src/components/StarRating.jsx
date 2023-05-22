import { FaStar } from 'react-icons/fa';

export const StarRating = ({ rating }) => {
    const roundedRating = Math.round(rating);

    return (
      <div className='flex flex-row mt-[15px]'>
        {Array.from({ length: 5 }, (_, index) => (
          <FaStar key={index} color={index < roundedRating ? '#ed7534' : '#C4C4C4'} />
        ))}
      </div>
    );
  };