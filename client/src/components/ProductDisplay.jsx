import React from 'react'
import { constants } from '../global-components/constants'

export default function ProductDisplay(props) {
  // let adsUrl
  let adsUrl = props.adsUrl
  return (
    <>
      <div className="w-full h-[70vh] mb-[30px] px-[25px] sm:px-[60px] sm:h-[90vh] bg-[#FFF7E9] grid grid-rows-6 sm:grid-rows-4 grid-cols-4 sm:grid-cols-3 grid-flow-col gap-3 sm:gap-5">


        <div className="row-span-2 col-span-2 sm:col-auto bg-cover bg-center bg-no-repeat "
          style={{ backgroundImage: `url(${adsUrl.adsUrl1})` }}
        >
          <div className="p-[20px] sm:p-[30px] h-full w-full bg-[#00000057] flex justify-start items-center ">
            <div className="w-[100%] sm:w-[70%]">
              <p className='text-[10px] sm:text-[12px] text-white mb-[5px]'>{adsUrl.adsHeading1}</p>
              <h1 className='text-[12px] sm:text-[18px] text-white font-bold'>{adsUrl.adsTrigger1}</h1>
              <p className='text-white text-[12px] sm:text-[15px]'>From $<span>{adsUrl.adsNumber1}.99</span></p>
              <button className='px-[20px] py-[7px] bg-[#9D5C0D] text-white rounded-full mt-[10px]'>Explore</button>
            </div>
          </div>
        </div>

        <div className="flex justify-start items-center row-span-2 col-span-2 sm:col-auto col-start-1 sm:col-start-2 bg-cover bg-center bg-no-repeat "
          style={{ backgroundImage: `url(${adsUrl.adsUrl2})` }}
        >
          <div className="p-[20px] sm:p-[30px] h-full w-full bg-[#00000057] flex justify-start items-center ">
            <div className="w-[100%] sm:w-[70%]">
              <p className='text-[10px] sm:text-[12px] text-white mb-[5px]'>{adsUrl.adsHeading2}</p>
              <h1 className='text-[12px] sm:text-[18px] text-white font-bold'>{adsUrl.adsTrigger2}</h1>
              <p className='text-white text-[12px] sm:text-[15px]'>From $<span>{adsUrl.adsNumber2}.99</span></p>
              <button className='px-[20px] py-[7px] bg-white rounded-full mt-[10px]'>Shop Now</button>
            </div>
          </div>
        </div>

        <div className="flex justify-end items-center col-span-2 sm:col-auto row-span-4 sm:row-span-full col-start-3 bg-cover bg-center bg-no-repeat "
          style={{ backgroundImage: `url(${adsUrl.adsUrl3})` }}
        >
          <div className="p-[20px] sm:p-[30px] h-full w-full bg-[#00000057] flex justify-start items-center ">
            <div className="w-[100%] sm:w-[70%]">
              <p className='text-[10px] sm:text-[12px] text-white mb-[5px]'>{adsUrl.adsHeading3}</p>
              <h1 className='text-[15px] sm:text-[18px] text-white font-bold'>{adsUrl.adsTrigger3}</h1>
              <p className='text-white text-[15px]'>From $<span>{adsUrl.adsNumber3}.99</span></p>
              <button className='px-[20px] py-[7px] bg-white rounded-full mt-[10px]'>Shop Now</button>
            </div>
          </div>
        </div>

        <div className="flex justify-end items-center col-span-full sm:col-span-2 row-span-2 sm:row-span-2 row-start-5 sm:row-start-3 col-start-1 sm:col-start-1 bg-cover bg-center bg-no-repeat "
          style={{ backgroundImage: `url(${adsUrl.adsUrl4})` }}
        >
          <div className="p-[20px] sm:p-[30px] h-full w-full bg-[#00000057] flex justify-start items-center ">
            <div className="w-[100%] sm:w-[70%]">
              <p className='text-[10px] sm:text-[12px] text-white mb-[5px]'>{adsUrl.adsHeading4}</p>
              <h1 className='text-[15px] sm:text-[18px] text-white font-bold'>{adsUrl.adsTrigger4}</h1>
              <p className='text-white text-[15px]'>From $<span>{adsUrl.adsNumber4}.99</span></p>
              <button className='px-[20px] py-[7px] bg-[#9D5C0D] text-white rounded-full mt-[10px]'>Shop Now</button>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}
