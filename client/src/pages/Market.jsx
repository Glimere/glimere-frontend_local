import React from 'react'
import { selectAllCarousels } from '../slice/carousel/carouselSlice'
import Categories from '../components/Categories'
import { useSelector } from 'react-redux'
import { AiFillStar } from 'react-icons/ai'
import { HiLocationMarker } from 'react-icons/hi'




export default function Market() {

  const carousels = useSelector(selectAllCarousels)

  return (
    <div className='w-full bg-white flex flex-col gap-[20px] pb-[40px] pt-[80px]'>
      <Categories carousels={carousels} headerTitle="" contentType="carousel" headerType="" color="#FFF7E9" />

      <div className="w-full bg-white flex flex-col gap-20 sm:flex-row sm:flex-wrap sm:gap-6 px-[i5px] sm:px-[60px]">
        {/* First item */}
        <div className="flex flex-col flex-shrink-0 w-full sm:w-[calc(50%-12px)] border-[1px] border-solid border-gray-200 rounded-[10px] cursor-pointer transition duration-150">
          <div className="flex items-center justify-between mb-4 bg-gray-400 p-4 rounded-t-[10px]">
            <div className="h-[70px] w-[70px] rounded-full bg-gray-300 mb-[-40px] mt-[20px]"></div>
          </div>
          <div className="flex flex-row justify-between p-4">
            <div className="flex flex-col gap-[12px]">
              <h1 className="text-lg font-semibold">Family House</h1>
              <div className="flex flex-row">
                <HiLocationMarker className={`text-[20px] text-[#ED7534]`} />

                <span className=' ml-[5px]'>Akure, Ondo State, Nigeria.</span>
              </div>

              <div className="flex flex-wrap">
                <div className="px-[8px] py-[3px] text-[10px] bg-primary-100 text-white-100 text-center rounded-full">Shoes</div>
              </div>
            </div>
            <div className="flex flex-col justify-between items-end space-y-2">
              <div className="flex flex-row ">
                <AiFillStar className={`text-[20px] text-[#ED7534]`} />
                <p className='font-bold ml-[5px]'>4.8</p>
              </div>

              <div className="flex flex-row pr-[18px]">
                <div className="h-[35px] w-[35px] bg-gray-200 border-[2px] border-solid border-gray-400 rounded-full mr-[-18px]"></div>
                <div className="h-[35px] w-[35px] bg-gray-200 border-[2px] border-solid border-gray-400 rounded-full mr-[-18px]"></div>
                <div className="h-[35px] w-[35px] bg-gray-200 border-[2px] border-solid border-gray-400 rounded-full mr-[-18px]"></div>
                <div className="h-[35px] w-[35px] bg-gray-200 border-[2px] border-solid border-gray-400 rounded-full mr-[-18px]"></div>
              </div>

            </div>

          </div>

        </div>

     
      </div>
    </div>
  )
}
