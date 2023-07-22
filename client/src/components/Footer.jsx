import React from 'react'
import { ReactComponent as GlimereSweet } from '../assets/images/glimere-sweet.svg'
import facebook from '../assets/images/facebook.svg'
import instagram from '../assets/images/instagram.svg'
import linkedin from '../assets/images/linkedin.svg'
import twitter from '../assets/images/twitter.svg'

export default function Footer() {
  return (
    <footer className="bg-[#9d5c0d] text-white h-[70vh] flex flex-col">
      <div className="flex-[5] px-[40px] sm:px-[60px] pb-[60px] sm:pb-[80px] pt-[50px] flex flex-col sm:flex-row">

        <div className="flex flex-row">
          <div className="flex-[1] container mx-auto flex flex-col justify-between">
            <div className="flex flex-col md:flex-row items-center">
              <GlimereSweet className={`text-white h-[40px]`} />
              {/* <h1 className="text-xl font-semibold ml-2">Glimere</h1> */}
            </div>

            <div className="col-span-1">
              <h3 className="text-[17px] font-bold mb-4" style={{ fontFamily: "Edensor" }}>Quick Links</h3>
              <ul className="list-none">
                <li className=""><a href="#" className="text-[11px]">Shop</a></li>
                <li className=""><a href="#" className="text-[11px]">About</a></li>
                <li className=""><a href="#" className="text-[11px]">Contact</a></li>
                <li className=""><a href="#" className="text-[11px]">Blog</a></li>
              </ul>
            </div>
          </div>


          <div className="flex-[1] flex flex-col justify-end">
            <div className="col-span-1">
              <h3 className="text-[17px] font-bold mb-4" style={{ fontFamily: "Edensor" }}>Customer Care</h3>
              <ul className="list-none">
                <li className=""><a href="#" className="text-[11px]">Track Your Order</a></li>
                <li className=""><a href="#" className="text-[11px]">Return/Exchange</a></li>
                <li className=""><a href="#" className="text-[11px]">Help Center</a></li>
                <li className=""><a href="#" className="text-[11px]">Shipping Policy</a></li>
              </ul>
            </div>
          </div>
        </div>


        <div className="flex flex-col">

          <div className="flex-[1] flex flex-col justify-end">
          <div className="col-span-1">
            <h3 className="text-[17px] font-bold mb-4" style={{ fontFamily: "Edensor" }}>Promotions</h3>
            <ul className="list-none">
              <li className=""><a href="#" className="text-[11px]">Promo Terms</a></li>
              <li className=""><a href="#" className="text-[11px]">Giveaways</a></li>
              <li className=""><a href="#" className="text-[11px]">Affiliate Program</a></li>
              <li className=""><a href="#" className="text-[11px]">Student Discount</a></li>
            </ul>
          </div>
        </div>

        <div className="flex-[1] flex flex-col justify-end">
          <div className="flex h-[40px] flex-row w-[80%] sm:w-[100%]">
            <div className='flex mr-[20px] justify-center items-center h-[40px] w-[40px] cursor-pointer hover:bg-[#ca9728] duration-150 rounded-full'>
              <a href="https://web.facebook.com/Glimere" target="_blank">
                <img src={facebook} alt="" className='w-[30px]' />
              </a>
            </div>
            <div className='flex mr-[20px] justify-center items-center h-[40px] w-[40px] cursor-pointer hover:bg-[#ca9728] duration-150 rounded-full'>
              <a href="https://twitter.com/glmere" target="_blank">
                <img src={twitter} alt="" className='w-[30px]' />
              </a>
            </div>
            <div className='flex mr-[20px] justify-center items-center h-[40px] w-[40px] cursor-pointer hover:bg-[#ca9728] duration-150 rounded-full'>
              <a href="https://www.instagram.com/glimereofficial/" target="_blank">
                <img src={instagram} alt="" className='w-[30px]' />
              </a>
            </div>
            <div className='flex mr-[20px] justify-center items-center h-[40px] w-[40px] cursor-pointer hover:bg-[#ca9728] duration-150 rounded-full'>
              <a href="https://www.linkedin.com/company/glimere/" target="_blank">
                <img src={linkedin} alt="" className='w-[30px]' />
              </a>
            </div>
          </div>
        </div>

        

        


        </div>


      </div>


      <div className="bg-[#c07820] py-4 flex-[1] flex justify-center items-center">
        <p className="text-[#ffe4b1] text-sm mb-2 md:mb-0">© 2023 Glimere. All rights reserved.</p>
      </div>

    </footer>
  )
}
