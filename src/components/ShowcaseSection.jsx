import React, { useEffect, useRef, useState } from 'react'
import { constants } from '../global-components/constants'
import { AverageRating } from './AverageRating'
import { HiArrowLongRight } from "react-icons/hi2";
import { HiArrowLongLeft } from "react-icons/hi2";
import { useSelector } from 'react-redux';
import { selectAllBrands } from '../slice/brand/brandSlice';
import { isDesktop } from '../global-components/isDesktop';
import useFetch from '../global-components/useFetch';

export default function ShowcaseSection({ apparels }) {

  const [currentSelection, setCurrentSelection] = useState(2)
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(0);


  const touchThreshold = 50; // Adjust this threshold as needed
  const touchRef = useRef(null);
  let intervalId;

  const brands = useSelector(selectAllBrands);

  const VirtualApparel = [
    // ...apparels.slice(-2),
    // ...apparels,
    // ...apparels,
    // ...apparels,
    // ...apparels.slice(0, 3),
  ];

  const intervalDuration = currentSelection !== 2 || currentSelection != VirtualApparel?.length - 3 ? 4000 : 1;

  useEffect(() => {
    startAutoScroll();

    return () => clearInterval(intervalId);
  }, [isHovered, apparels?.length]);



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
        prevSelection === VirtualApparel?.length - 3 ? 2 : prevSelection + 1
      );
      setTouchStart(currentX);
    } else if (deltaX < -touchThreshold) {
      setCurrentSelection((prevSelection) =>
        prevSelection === 2 ? VirtualApparel?.length - 3 : prevSelection - 1
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
          prevSelection === VirtualApparel?.length - 3 ? 2 : prevSelection + 1
        );
      }, intervalDuration);
    }
  };

  const handleMouseSwipe = (direction) => {
    if (direction === 'left') {
      setCurrentSelection((prevSelection) =>
        prevSelection === 2 ? VirtualApparel?.length - 3 : prevSelection - 1
      );
    } else {
      setCurrentSelection((prevSelection) =>
        prevSelection === VirtualApparel?.length - 3 ? 2 : prevSelection + 1
      );
    }
  };

  function calculateTranslateX(currentSelection, arrayLength) {
    const translatePercentage = ((27.5) / (arrayLength * (0.283 - ((arrayLength - 6) * 0.000417)))) * currentSelection //6
    return `translateX(-${translatePercentage}%)`;
  }




  return (
    <div className='pt-[80px] w-full h-full'>
      <div className="h-[100%] w-full overflow-hidden">

        <div className="absolute top-0 h-[80vh] sm:h-full w-full flex justify-center items-center ">
          <div className="flex flex-row justify-between items-center h-[70%] sm:h-[75%] w-[50%] sm:w-[22%] mt-[20px] rounded-full bg-white-100">
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

        <div className="flex flex-row h-[95%] items-center ml-[27.5%] sm:ml-[35.5%]"

          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          ref={touchRef}
          style={{
            width: `${VirtualApparel?.length * (isDesktop ? 25 : 40)}%`,
            // transform: `translateX(-${(17 * currentSelection) - (currentSelection)}%)`,
            transform: calculateTranslateX(currentSelection, VirtualApparel?.length),
            transition: currentSelection == 2 || currentSelection === VirtualApparel?.length - 3 ? "" : "ease-in",
            transitionDuration: currentSelection == 2 || currentSelection === VirtualApparel?.length - 3 ? "" : "600ms"
          }}
        >
          {VirtualApparel?.map((apparel, id) => (
            <div key={id} className={`${currentSelection === id ? "w-[50%] sm:w-[30%]" : "w-[40%] sm:w-[25%]"} flex flex-col justify-center items-center gap-[8px]`}>

              <div className={` ${currentSelection === id ? "h-[30px] sm:h-[50px] w-[30px] sm:w-[50px] bg-white-100 border-solid border-[1px] border-primary-100 duration-[600ms] bg-cover bg-center bg-no-repeat shadow-md" : "bg-transparent h-[10px] sm:h-[20px] w-[10px] sm:w-[20px]"}  rounded-full `}
                style={{ backgroundImage: `url(${constants.url}${apparel.attributes.brands.data[0].attributes.logo.data.attributes.url})` }}

              ></div>
              {apparel?.attributes?.apparel_imgs?.data?.map(img => (
                <img key={img.id} src={`${constants.url}${img.attributes.url}`} className={`${currentSelection === id ? "w-[210px] sm:w-[210px] duration-[600ms] ease-in" : "w-[120px] sm:w-[150px] duration-[600ms] ease-in"} cursor-pointer ${currentSelection !== 2 || currentSelection != VirtualApparel?.length - 3 ? "" : "duration-0"}`}
                  onClick={() => setCurrentSelection(id)}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => {
                    setIsHovered(false);
                    startAutoScroll();
                  }}
                />
              ))}

              <div className="flex flex-col justify-center items-center">
                <p className={`${currentSelection === id ? "text-[14px] opacity-100" : "text-[10px] opacity-0"} duration-500 text-center`}>{apparel.attributes.apparel_name}</p>
                <div className={`${currentSelection === id ? " opacity-100" : "opacity-0"} duration-500`}>
                  <AverageRating ratings={getRatingsFromJson(apparel.attributes.ratings.data)} loading={false} />

                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

    </div>
  )
}
