import { constants } from "../auth/constants";
import { useState, useEffect } from "react";
import axios from "axios";
import { RxArrowTopRight } from 'react-icons/rx'
import { Carousel } from "@material-tailwind/react";
import Slider from 'react-slick';
import { ProductCard } from "../components/ProductCard";
import { Link } from "react-router-dom";


export default function Home() {

  const [user, setUser] = useState({});
  const [apparels, setApparels] = useState([]);
  const [ads, setAds] = useState([])
  const [carousels, setCarousels] = useState([])
  const [adsUrl1, setAdsUrl1] = useState('')
  const [adsUrl2, setAdsUrl2] = useState('')

  const jwt = localStorage.getItem('user').jwt



  // console.log('jwt', jwt)
  useEffect(() => {

    const fetchApparels = async () => {
      try {
        const { data } = await axios.get(`${constants.url}/api/apparels?populate=*`, {
          // headers: {
          //   Authorization: `Bearer ${jwt}`,
          // },
        });
        setApparels(data.data);
      } catch (e) {
        console.log(e);
      }
    }

    const fetchAds = async () => {
      try {
        const { data } = await axios.get(`${constants.url}/api/ads-cards?populate=*`, {
          // headers: {
          //   Authorization: `Bearer ${jwt}`,
          // },
        });

        const adsUrl1 = constants.url + data.data[0].attributes.adsimg.data.attributes.url
        const adsUrl2 = constants.url + data.data[1].attributes.adsimg.data.attributes.url
        setAdsUrl1(adsUrl1)
        setAdsUrl2(adsUrl2)

        setAds(data.data);
      } catch (e) {
        console.log(e);
      }
    }

    const fetchCarousels = async () => {
      try {
        const { data } = await axios.get(`${constants.url}/api/carousels?populate=*`, {
          // headers: {
          //   Authorization: `Bearer ${jwt}`,
          // },
        });
        setCarousels(data.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchApparels()
    fetchAds()
    fetchCarousels()

  }, [])

  console.log('ads', ads)
  console.log('apparels', apparels)
  console.log('carousel', carousels)
  console.log('adsUrl1', adsUrl1)
  console.log('adsUrl2', adsUrl2)



  const settings = {
    dots: false,
    infinite: true,
    speed: 5000, // Duration of slide transition in milliseconds
    autoplay: true,
    autoplaySpeed: 3000, // Time between slide transitions in milliseconds
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  // const slide = document.getElementsByClassName('slick-slide')

  // const slideAttribute = slide.getAttribute('data-index');

  // console.log('slideAttribute', slideAttribute)


  // console.log('ads', ads[0].attributes.adsimg.data.attributes.url)
  return (
    <>
      <div className="w-full h-[100vh] flex flex-row overflow-hidden">
        <div className="h-full w-full flex flex-row">

        <div className="flex-[2.5] w-[25%] bg-black pt-[80px] ">
          
        
        </div>
        <div className="bg-[#fff8ea] h-full flex-[5] w-[50%] -z-10">

          <Slider {...settings} className="rounded-xl">
          {carousels?.map((carousel, id) => {
            return (
              
              <div key={id} className="h-[100vh] w-full">
              {carousel.attributes.carouselimg.data.map((img, id) => {
                return (
                  <div key={id} className={`h-full w-full bg-cover bg-center bg-no-repeat p-[10px] mr-[2px]`}
                  style={{ backgroundImage: `url(${constants.url}${img.attributes.url})` }}
                ></div>
                )
              })
                }
            </div>
            
            )
          })}
            
            
          </Slider>


        

        </div>
        
        <div className="flex-[2.5] w-[25%] flex flex-col justify-end bg-[#f7d08a]">
       
                
        {/* <div className="flex-[4] pl-[30px] pt-[70px]">
            <h1 className="text-[20px]">Your Fashion, Your Statement.</h1>
          </div>
          <div className="flex-[6] flex flex-col">
            {ads?.map((ad) => {
              return (
                <div key={ad.id} className={`h-full w-full ${ad.attributes.type == 'photo' ? 'bg-cover bg-center bg-no-repeat' : 'bg-none'} p-[10px] mr-[2px]`}
                  style={{ backgroundImage: `url(${constants.url}${ad.attributes.adsimg.data.attributes.url})` }}
                >
                  <div className="flex flex-col items-end">
                    <div className="h-[32px] w-[32px] rounded-full flex flex-row justify-center items-center bg-[#ffffff] cursor-pointer">
                      <RxArrowTopRight className='w-[22px] text-black' />
                    </div>

                    <h1 className=""></h1>
                  </div>
                  <div className=""></div>
                </div>
              )

            })

            }
            </div> */}
            </div>
      </div>

      <div className="absolute flex flex-row w-full h-[100vh] overflow-hidden">
        

          <div className="flex-[2.2] w-[25%] pt-[80px] ">
          <div className="pb-[40px]">
            <h1 className="text-[30px] text-white pl-[40px] mt-[50px]">Your</h1>
          <h1 className="text-[90px] text-white pl-[40px]">Fashion,</h1>
          </div>
          {/* {console.log('url', constants.url + ads[0].attributes.adsimg.data.attributes.url)} */}

          <div className="h-[350px] w-[350px] flex justify-center items-center rounded-full ml-[40px] bg-[#f7d08a]">
       
                
                  <div className="h-[300px] w-[300px] bg-cover bg-center bg-no-repeat rounded-full bg-white"
                  style={{ backgroundImage: `url(${adsUrl1})` }}
                  ></div>
                
         <div className="h-[400px] w-[400px] pt-[20px] pr-[20px] absolute flex justify-end">
          <Link className="h-[100px] w-[100px]">
            <div className="h-[100px] w-[100px] rounded-full bg-white p-[30px]"></div>
            </Link>
         </div>
          </div>
        
        </div>

<div className="flex-[1] w-[25%] flex flex-col justify-end ">
          <div className="h-[250px] w-[250px]  flex justify-center items-center rounded-full bg-[#000000]">
        
                <Link>
                 <div className="h-[200px] w-[200px] bg-cover bg-center bg-no-repeat rounded-full bg-white"
                 style={{ backgroundImage: `url(${adsUrl2})` }}
                 ></div>
                </Link>
                
          
         
          </div>

          <div className="">
            <h1 className="text-[30px] text-right pr-[40px] text-black">Your</h1>
            <h1 className="text-[80px] text-right text-black pr-[40px] mb-[50px]"> Style</h1>
          </div>
          </div>

      </div>

      </div>

      <div className="w-full h-[100vh] bg-[#e2912e] flex flex-row p-[50px]">
          {ads?.map((ad) => {
            return (
              <div className="h-full w-[400px]  bg-cover bg-center bg-no-repeat transition-transform transform-gpu hover:scale-105 mx-[20px]"
              style={{ backgroundImage: `url(${constants.url}${ad.attributes.adsimg.data.attributes.url})` }}
              >
                <div className="h-full w-full flex justify-center items-center duration-300 bg-[#0000007c] hover:bg-[#000000bd]">
                  <div className="h-[200px] w-[200px]">
                    <h1 className="text-[30px] text-white font-semibold mb-[50px]">{ad.attributes.heading}</h1>
                    <p className="text-[15px] text-white">{ad.attributes.info}</p>
                  </div>
                </div>
              </div>
            )
          })}
        
      </div>

      <div className="w-full grid grid-cols-4 gap-2 p-[50px] bg-[#FFF7E9]">
        {apparels.map((apparel) => (
          <ProductCard key={apparel.id} apparel={apparel} />
        ))}
      </div>

      <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="flex flex-col md:flex-row items-center">
          <img src="/logo.png" alt="Brand Logo" className="w-16 h-16 mb-4 md:mb-0" />
          <h1 className="text-xl font-semibold ml-2">Glimere</h1>
        </div>
        <nav className="flex flex-wrap justify-center md:justify-start">
          <a href="/" className="text-gray-300 hover:text-white mr-4 mb-2">Home</a>
          <a href="/shop" className="text-gray-300 hover:text-white mr-4 mb-2">Shop</a>
          <a href="/about" className="text-gray-300 hover:text-white mr-4 mb-2">About</a>
          <a href="/contact" className="text-gray-300 hover:text-white mr-4 mb-2">Contact</a>
          <a href="/blog" className="text-gray-300 hover:text-white mr-4 mb-2">Blog</a>
        </nav>
        <div className="flex items-center justify-center md:justify-start">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white mr-4">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white mr-4">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white mr-4">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
      <div className="bg-gray-800 mt-8 py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between">
          <div className="text-gray-300 text-sm mb-2 md:mb-0">© 2023 Glimere. All rights reserved.</div>
          <nav className="flex flex-wrap justify-center md:justify-end">
            <a href="/privacy-policy" className="text-gray-300 hover:text-white mr-4 mb-2">Privacy Policy</a>
            <a href="/terms-of-use" className="text-gray-300 hover:text-white mr-4 mb-2">Terms of Use</a>
            <a href="/return-policy" className="text-gray-300 hover:text-white mr-4 mb-2">Return Policy</a>
            <a href="/sitemap" className="text-gray-300 hover:text-white mr-4 mb-2">Site Map</a>
          </nav>
        </div>
      </div>
    </footer>
    </>
  )
}