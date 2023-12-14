import React from 'react'
import { ReactComponent as GlimereLogo } from "../assets/images/glimerenew.svg"
import facebook from '../assets/images/facebook.svg'
import instagram from '../assets/images/instagram.svg'
import linkedin from '../assets/images/linkedin.svg'
import twitter from '../assets/images/twitter.svg'

export default function Footer() {
  return (
    <footer className="w-full bg-[#171715]">
      <div className="px-5 py-10 flex flex-col sm:px-10 lg:grid grid-cols-3 lg:gap-y-32">
        <div className="lg:col-span-1">
          <GlimereLogo style={{ color: "#ffffff" }} height="40" className={`w-[120px] hidden sm:block`} />

        </div>
        <div className="grid grid-cols-2 gap-9 font-body mb-[52px] md:grid-cols-4 lg:col-span-2 lg:mb-0">
          <div>
            <h6 className="mb-5 font-medium text-lg text-white">Features</h6>
            <div className="flex flex-col gap-4 text-[#a0775a] hover:text-[#e7ab80] text-sm">
              <a className="footer-link" href="#">
                Find a Patner
              </a>
              <a className="footer-link" href="#">
                Become a Patner
              </a>
              <a className="footer-link" href="#">
                Affiliates
              </a>
              <a className="footer-link" href="#">
                Patner Offers
              </a>
              <a className="footer-link" href="#">
                Store Examples
              </a>
            </div>
          </div>
          <div>
            <h6 className="mb-5 font-medium text-lg text-white">Company</h6>
            <div className="flex flex-col gap-4 text-[#a0775a] hover:text-[#e7ab80] text-sm duration-150">
              <a className="footer-link" href="#">
                Leaders
              </a>
              <a className="footer-link" href="#">
                About Us
              </a>
              <a className="footer-link" href="#">
                Careers
              </a>
              <a className="footer-link" href="#">
                Press
              </a>
              <a className="footer-link" href="#">
                Awards
              </a>
            </div>
          </div>
          <div>
            <h6 className="mb-5 font-medium text-lg text-white">Resources</h6>
            <div className="flex flex-col gap-4 text-[#a0775a] hover:text-[#e7ab80] text-sm duration-150">
              <a className="footer-link" href="#">
                Overview
              </a>
              <a className="footer-link" href="#">
                Articles
              </a>
              <a className="footer-link" href="#">
                Webinars
              </a>
              <a className="footer-link" href="#">
                Events
              </a>
              <a className="footer-link" href="#">
                Ecommerce
              </a>
            </div>
          </div>
          <div>
            <h6 className="mb-5 font-medium text-lg text-white">Get Help</h6>
            <div className="flex flex-col gap-4 text-[#a0775a] hover:text-[#e7ab80] text-sm duration-150">
              <a className="footer-link" href="#">
                Shopify Company
              </a>
              <a className="footer-link" href="#">
                Knowledge Base
              </a>
              <a className="footer-link" href="#">
                Videos Contact
              </a>
              <a className="footer-link" href="#">
                Tech Support
              </a>
              <a className="footer-link" href="#">
                API Documentation
              </a>
            </div>
          </div>
        </div>
        <div className="text-center lg:col-span-3 md:flex justify-between items-center">
          <div className="flex items-center justify-center gap-4 mb-4 order-2">
            <div className='flex mr-[20px] justify-center items-center h-[40px] w-[40px] cursor-pointer hover:bg-[#ca9728] duration-150 rounded-full'>
              <a href="https://web.facebook.com/Glimere" target="_blank" rel="noreferrer">
                <img src={facebook} alt="" className='w-[30px]' />
              </a>
            </div>
            <div className='flex mr-[20px] justify-center items-center h-[40px] w-[40px] cursor-pointer hover:bg-[#ca9728] duration-150 rounded-full'>
              <a href="https://twitter.com/glimereofficial" target="_blank" rel="noreferrer">
                <img src={twitter} alt="" className='w-[30px]' />
              </a>
            </div>
            <div className='flex mr-[20px] justify-center items-center h-[40px] w-[40px] cursor-pointer hover:bg-[#ca9728] duration-150 rounded-full'>
              <a href="https://www.instagram.com/glimereofficial/" target="_blank" rel="noreferrer">
                <img src={instagram} alt="" className='w-[30px]' />
              </a>
            </div>
            <div className='flex mr-[20px] justify-center items-center h-[40px] w-[40px] cursor-pointer hover:bg-[#ca9728] duration-150 rounded-full'>
              <a href="https://www.linkedin.com/company/glimere/" target="_blank" rel="noreferrer">
                <img src={linkedin} alt="" className='w-[30px]' />
              </a>
            </div>
          </div>
          <p className="font-body text-white font-medium order-1">
            © 2023 Glimere
          </p>
        </div>
      </div>
    </footer>
  )
}
