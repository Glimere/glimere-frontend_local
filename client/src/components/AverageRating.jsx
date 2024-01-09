import { FaStar } from 'react-icons/fa';

export const AverageRating = ({ ratings, loading }) => {


  if (!ratings || ratings.length === 0) {
    return (<div className={`flex flex-row ${loading ? "invisible" : "visible"} duration-150`}>
      {Array.from({ length: 5 }, (_, index) => (
        <FaStar key={index} color={index < 0 ? '#ed7534' : '#C4C4C4'} />
      ))}
    </div>)
  }

  const sum = ratings.reduce((acc, rating) => acc + rating, 0);
  const average = sum / ratings.length;



  const roundedRating = Math.round(average * 100) / 100;

  return (
    <div className={`flex flex-row ${loading ? "invisible" : "visible"} duration-150`}>
      {Array.from({ length: 5 }, (_, index) => (
        <FaStar key={index} color={index < roundedRating ? '#ed7534' : '#C4C4C4'} />
      ))}
    </div>
  );
};