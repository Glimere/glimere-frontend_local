import React, { useEffect, useRef, useState } from 'react'
import { constants } from '../global-components/constants'
import { AverageRating } from './AverageRating'
import { HiArrowLongRight } from "react-icons/hi2";
import { HiArrowLongLeft } from "react-icons/hi2";
import { useSelector } from 'react-redux';
import { selectAllBrands } from '../slice/brand/brandSlice';
import useFetch from '../global-components/useFetch';

export default function ShowcaseSection({ apparels }) {

  const [currentSelection, setCurrentSelection] = useState(3)
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(0);


  const touchThreshold = 50; // Adjust this threshold as needed
  const touchRef = useRef(null);
  let intervalId;

  const brands = useSelector(selectAllBrands);

  const intervalDuration = 4000;

  useEffect(() => {
    startAutoScroll();

    return () => clearInterval(intervalId);
  }, [isHovered, apparels.length]);

  function calculateTranslateX(currentSelection, arrayLength) {
    // const translatePercentage = ((15 * (currentSelection - 0.2)) - currentSelection - 0.48 )
    const translatePercentage = (12.5 + 15) / (arrayLength * 0.283) * currentSelection
    return `translateX(-${translatePercentage}%)`;
  }

  function getRatingsFromJson(jsonData) {
    if (!jsonData || !Array.isArray(jsonData)) {
      return []; // Return an empty array if the input is invalid
    }

    // Extract ratings from each item in the JSON data
    const ratings = jsonData.map((rating) => rating.attributes.rating);

    // Flatten the array of ratings
    return ratings.flat();
  }

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
    clearInterval(intervalId); // Stop auto-scroll on touch start
  };

  const handleTouchMove = (e) => {
    const currentX = e.touches[0].clientX;
    const deltaX = touchStart - currentX;

    if (deltaX > touchThreshold) {
      setCurrentSelection((prevSelection) =>
        prevSelection === apparels.length - 1 ? 0 : prevSelection + 1
      );
      setTouchStart(currentX);
    } else if (deltaX < -touchThreshold) {
      setCurrentSelection((prevSelection) =>
        prevSelection === 0 ? apparels.length - 1 : prevSelection - 1
      );
      setTouchStart(currentX);
    }
  };

  const handleTouchEnd = () => {
    setTouchStart(0);
    startAutoScroll();
  };

  const startAutoScroll = () => {
    if (!isHovered) {
      intervalId = setInterval(() => {
        setCurrentSelection((prevSelection) =>
          prevSelection === apparels.length - 1 ? 0 : prevSelection + 1
        );
      }, intervalDuration);
    }
  };

  const handleMouseSwipe = (direction) => {
    if (direction === 'left') {
      setCurrentSelection((prevSelection) =>
        prevSelection === 0 ? apparels.length - 1 : prevSelection - 1
      );
    } else {
      setCurrentSelection((prevSelection) =>
        prevSelection === apparels.length - 1 ? 0 : prevSelection + 1
      );
    }
  };




  return (
    <div className='pt-[80px] w-full h-full'>
      <div className="h-[100%] w-full overflow-hidden">

        <div className="absolute top-0 h-full w-full flex justify-center items-center ">
          <div className="flex flex-row justify-between items-center h-[75%] w-[22%] mt-[20px] rounded-full bg-white-100">
            <div className="h-[50px] w-[50px] cursor-pointer z-[20] flex justify-center items-center"
              onClick={() => handleMouseSwipe('left')}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => {
                setIsHovered(false);
                startAutoScroll();
              }}
            >
              <HiArrowLongLeft className={`text-[18px] sm:text-[25px] text-dark-100 `} />
            </div>
            <div className="h-[50px] w-[50px] cursor-pointer z-[20] flex justify-center items-center"
              onClick={() => handleMouseSwipe('right')}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => {
                setIsHovered(false);
                startAutoScroll();
              }}
            >
              <HiArrowLongRight className={`text-[18px] sm:text-[25px] text-dark-100 `} />
            </div>
          </div>
        </div>

        <div className="flex flex-row h-[95%] items-center ml-[35.5%]"

          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          ref={touchRef}
          style={{
            width: `${apparels.length * 25}%`,
            // transform: `translateX(-${(17 * currentSelection) - (currentSelection)}%)`,
            transform: calculateTranslateX(currentSelection, apparels.length),
            transition: "ease-in",
            transitionDuration: "600ms"
          }}
        >
          {apparels.map((apparel, id) => (
            <div key={apparel.id} className={`${currentSelection === id ? "w-[30%]" : "w-[25%]"} flex flex-col justify-center items-center gap-[8px]`}>

              <div className={` ${currentSelection === id ? "h-[50px] w-[50px] bg-white-100 border-solid border-[1px] border-primary-100 duration-[600ms] bg-cover bg-center bg-no-repeat shadow-md" : "bg-transparent h-[20px] w-[20px]"}  rounded-full `}
                style={{ backgroundImage: `url(${constants.url}${apparel.attributes.brands.data[0].attributes.logo.data.attributes.url})` }}

              ></div>
              {apparel?.attributes?.apparel_imgs?.data?.map(img => (
                <img key={img.id} src={`${constants.url}${img.attributes.url}`} className={`${currentSelection === id ? "w-[210px] duration-[600ms] ease-in" : "w-[150px] duration-[600ms] ease-in"}`}
                onClick={()=> setCurrentSelection(id)}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => {
                    setIsHovered(false);
                    startAutoScroll();
                  }}
                />
              ))}

              <div className="flex flex-col justify-center items-center">
                <p className={`${currentSelection === id ? "text-[14px]" : "text-[10px]"}`}>{apparel.attributes.apparel_name}</p>
                <AverageRating ratings={getRatingsFromJson(apparel.attributes.ratings.data)} loading={false} />
              </div>

            </div>
          ))}
        </div>

      </div>

    </div>
  )
}
