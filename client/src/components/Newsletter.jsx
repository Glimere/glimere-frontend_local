import React from 'react'
import clothRack from '../assets/images/cloth-rack.png'


export default function Newsletter() {
  return (
    <div className="flex justify-between items-center h-[70vh]  pl-[80px] pr-[50px] bg-white">

        <div className="w-[50%]">
          <h2 className="text-[#9d5c0d] text-[30px] mb-4 " style={{ fontFamily: "Edensor" }}>Subscribe to our Newsletter</h2>
          <p className="mt-[20px] text-[13px]">Don't miss out on the opportunity to elevate your fashion game and stay connected with Glimere. Subscribe now and embrace the world of style and luxury!</p>
          <form className="flex mt-[30px]">
            <input type="email" placeholder="Enter your email" className="bg-[#FFF7E9] w-[300px] placeholder:text-[#e2912e] placeholder:text-[13px] px-4 py-2 rounded-l focus:outline-none" />
            <button type="submit" className="bg-[#e2912e] text-white px-4 py-2 rounded-r hover:bg-[#f7aa4c] focus:outline-none ml-[20px]">Subscribe</button>
          </form>
        </div>

        <div className="h-full flex flex-col justify-end items-end">
          <img src={clothRack} alt="" className="w-[400px]" />
        </div>

      </div>
  )
}
