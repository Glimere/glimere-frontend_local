import {ReactComponent as GlimereSweet} from '../assets/images/glimere-sweet.svg'
import {ReactComponent as GlimereLogo} from '../assets/images/glimereLogo.svg'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import {BiSearch} from "react-icons/bi"
import { AiOutlineHeart } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { CgProfile } from 'react-icons/cg'
import { Link } from 'react-router-dom'
import { logout } from '../pages/api/logout'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectAllUsers, getUserStatus, fetchUsers } from '../slice/userSlice';
import { useNavigate } from 'react-router-dom'


const user = JSON.parse(localStorage.getItem('user'))
console.log('user', user)

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

const menCategories = [
  "T-shirts",
  "Jeans",
  "Sweaters",
  "Shorts",
  "Activewear",
  "Formalwear",
  "Outerwear",
  "Underwear",
  "Swimwear",
  "Socks",
  "Hats",
  "Watches",
  "Belts",
  "Bags",
  "Sunglasses",
  "Ties",
  "Grooming",
  "Sport Shoes",
  "Boots",
  "Sandals",
];

const womenCategories = [
  "Dresses",
  "Tops",
  "Skirts",
  "Pants",
  "Leggings",
  "Jumpsuits",
  "Blouses",
  "Sweaters",
  "Coats",
  "Lingerie",
  "Swimwear",
  "Handbags",
  "Shoes",
  "Jewelry",
  "Accessories",
  "Beauty",
  "Hats",
  "Scarves",
  "Gloves",
  "Watches",
];

const kidsCategories = [
  "Tops",
  "Bottoms",
  "Dresses",
  "Pajamas",
  "Outerwear",
  "Activewear",
  "Swimwear",
  "Shoes",
  "Accessories",
  "Toys",
  "Books",
  "School Supplies",
  "Baby Gear",
  "Diapers",
  "Strollers",
  "Car Seats",
  "Nursery",
  "Bath & Skincare",
  "Feeding",
  "Safety",
];

const customizationsCategories = [
  "Embroidery",
  "Printing",
  "Patchwork",
  "Sequins",
  "Beadwork",
  "Stitching",
  "Painting",
  "Dyeing",
  "Fabric Manipulation",
  "Appliqué",
  "Embellishments",
  "Buttons",
  "Ribbons",
  "Trims",
  "Lace",
  "Patches",
  "Tassels",
  "Fringe",
  "Bows",
  "Ruffles",
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

  const [menuVisible, setMenuVisible] = useState(false)
  const [card, setCard] = useState(0)
  const [menuToggle, setMenuToggle] = useState(false)
  const [isSticky, setIsSticky] = useState(false);

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(selectAllUsers)
  const userStatus = useSelector(getUserStatus)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.pageYOffset;
      if (offset > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const handleLogout = async () => {
    await logout();
    navigate('/login')
  };


  return (
    <>
    <div className={`navbar w-full duration-300 ${isSticky ? 'sticky' : ''} z-50 relative`}>
      <div className={`absolute w-full  ${menuVisible ? "h-[390px]" : "h-[0px]"} overflow-hidden bg-white duration-300`}
    onMouseLeave={()=>{setMenuVisible(false)
    setCard(0)}}
    >

<div className={` grid-cols-3 gap-2 w-full ${card == 1 ? "grid" : "hidden"} pt-[120px] px-[200px]`}>
{menCategories.map((category, index) => (
        <p
          key={index}
          className="py-[1px] px-[3px] text-[12px] text-left text-gray-800 rounded hover:text-black cursor-pointer"
        >
          {category}
        </p>
      ))}
    </div>

    <div className={` grid-cols-3 gap-2 w-full ${card == 2 ? "grid" : "hidden"} pt-[120px] px-[200px]`}>
{womenCategories.map((category, index) => (
        <p
          key={index}
          className="py-[1px] px-[3px] text-[12px] text-left text-gray-800 rounded hover:text-black cursor-pointer"
        >
          {category}
        </p>
      ))}
    </div>

    <div className={` grid-cols-3 gap-2 w-full ${card == 3 ? "grid" : "hidden"} pt-[120px] px-[200px]`}>
{kidsCategories.map((category, index) => (
        <p
          key={index}
          className="py-[1px] px-[3px] text-[12px] text-left text-gray-800 rounded hover:text-black cursor-pointer"
        >
          {category}
        </p>
      ))}
    </div>

    <div className={` grid-cols-3 gap-2 w-full ${card == 4 ? "grid" : "hidden"} pt-[120px] px-[200px]`}>
{customizationsCategories.map((category, index) => (
        <p
          key={index}
          className="py-[1px] px-[3px] text-[12px] text-left text-gray-800 rounded hover:text-black cursor-pointer"
        >
          {category}
        </p>
      ))}
    </div>

    </div>
      <div className={`w-full h-[80px] px-[35px] duration-300 flex flex-row ${isSticky ? 'bg-white' : 'bg-transparent'} absolute z-10`}>
        
        <div className="flex-[2.18] py-[12px] flex flex-row items-center justify-between">
          {/* <img src={glimere} alt="" style={{ fill: '#ffffff' }} />
          <img src={glimereLogo} alt="" style={{ fill: 'white' }} /> */}
          <div className="flex flex-row items-center">
            <GlimereLogo style={{ color: '#ed7534' }} height="35" className={`mr-[10px] duration-300 ${isSticky ? 'text-[100px] block' : ' hidden '}`}/> 
          <GlimereSweet style={{ color: '#ed7534'}} height="35" className={`${isSticky ? 'hidden' : ''}`} />
          </div>
          
          
        </div>
        <div className="flex-[5] flex justify-center w-full px-[25px] pl-[40px] py-[22px]">
        <div className="h-full w-full flex justify-start items-center">
            <div className="flex flex-row items-center w-full">
              <div className="flex flex-row w-full">
                   <div className={`peer px-[15px] h-[40px] flex justify-center items-center mr-[8px] rounded-full ${card == 1 ? "bg-[#5e5e5ec2] text-white" : "bg-[#f8f8f8c2] text-black"} duration-150 cursor-pointer`}
                   onMouseEnter={()=>{setMenuVisible(true)
                  setCard(1)
                  }}
                   >
                  <p className='text-[12px]'>Men</p>
                </div>
               
                <div className={`peer px-[15px] h-[40px] flex justify-center items-center mr-[8px] rounded-full ${card == 2 ? "bg-[#5e5e5ec2] text-white" : "bg-[#f8f8f8c2] text-black"} duration-150 cursor-pointer`}
                onMouseEnter={()=>{setMenuVisible(true)
                setCard(2)
                }}
                >
                  <p className='text-[12px]'>Women</p>
                </div>
                <div className={`peer px-[15px] h-[40px] flex justify-center items-center mr-[8px] rounded-full ${card == 3 ? "bg-[#5e5e5ec2] text-white" : "bg-[#f8f8f8c2] text-black"} duration-150 cursor-pointer`}
                onMouseEnter={()=>{setMenuVisible(true)
                setCard(3)
                }}
                >
                  <p className='text-[12px]'>Kids</p>
                </div>
                <div className={`peer px-[15px] h-[40px] flex justify-center items-center mr-[8px] rounded-full ${card == 4 ? "bg-[#5e5e5ec2] text-white" : "bg-[#f8f8f8c2] text-black"} duration-150 cursor-pointer`}
                onMouseEnter={()=>{setMenuVisible(true)
                setCard(4)
              }}
                >
                  <p className='text-[12px]'>Customizations</p>
                </div>
              <div className={`group h-[40px] w-[60px] peer-hover:w-full hover:w-full ${menuVisible ? "bg-[#f3f3f3be]" : "bg-[#f8f8f8c2]"} duration-500 ease-linear overflow-hidden rounded-full mr-[20px] backdrop-blur-sm flex flex-row justify-center items-center px-[20px]`}>
              <BiSearch className='w-[20px] h-[20px] text-gray-500 group-hover:relative'/>
              
                <input type="text" className='w-full outline-none bg-transparent'/>
              </div>
              </div>
              
            </div>
          </div>
        </div>
        <div className="flex-[2.18] flex flex-row items-center justify-end"
        onMouseLeave={()=>{setMenuToggle(false)}}
        >
          <div className="flex flex-row justify-end w-full">
            <div className="flex flex-row w-[200px]">
             {/* <Corner className="w-[30px] h-[30px] fill-[#ed7534]"/> */}
            <div className="h-[50px] w-[200px] flex flex-row justify-between items-center rounded-bl-[20px]">
              <Link to="/likes">
                <div className={`py-[9px] px-[5px] duration-150 flex flex-row justify-center items-center ${menuVisible || isSticky ? "border-black" : "border-[#be7f2d]"} border-solid hover:border-b cursor-pointer`}>
              <AiOutlineHeart className={`w-[22px] ${menuVisible || isSticky ? "text-black" : "text-[#be7f2d]"} `}/>
              <p className='text-[12px] ml-[5px] text-[#684419]'>likes</p>
            </div>
              </Link>
            
              <Link to="/cart">
                <div className={`py-[9px] px-[5px] duration-150 flex flex-row justify-center items-center ${menuVisible || isSticky ? "border-black" : "border-[#be7f2d]"} border-solid hover:border-b cursor-pointer`}>
              <FiShoppingCart className={`w-[22px] ${menuVisible || isSticky ? "text-black" : "text-[#be7f2d]"} `}/>
              <p className='text-[12px] ml-[5px] text-[#684419]'>Cart</p>
            </div>
              </Link>
            
            <div className={`peer ${menuVisible || isSticky ? "border-black" : "border-[#be7f2d]"} border-solid hover:border-b cursor-pointer`}
            onMouseEnter={()=>{setMenuToggle(true)}}
            >
              <CgProfile className={` text-[24px] ${menuVisible || isSticky ? "text-black" : "text-[#be7f2d]"} duration-200 `}/>
            </div>
            </div>
          </div>

          </div>
          
        </div>
      </div>

      <div className={`absolute right-0 overflow-hidden ${menuToggle ? "h-[390px]" : "h-[0px]"} w-[25%] duration-300 bg-[#f7c467]`}
      onMouseLeave={()=>{setMenuToggle(false)}}
      >
        <div className="w-full h-full mt-[80px]"
        onMouseEnter={()=>{setMenuToggle(true)}}
        onMouseLeave={()=>{setMenuToggle(false)
        setMenuVisible(false)
        }}
        >
          <ul className='w-full h-[250px] flex flex-col justify-center'>
          <Link to="/orders" className='flex-1'>
            <li className='text-white h-full flex justify-center items-center hover:bg-[#fff0d7] hover:text-[#be7f2d] text-[13px]'>
            <p>Orders</p>
          </li>
          </Link>
          
          <Link to="/profile" className='flex-1'>
            <li className='text-white h-full flex justify-center items-center hover:bg-[#fff0d7] hover:text-[#be7f2d] text-[13px]'>
            <p>Profile</p>
          </li>
          </Link>
          
          {user ? <Link to="/" onClick={handleLogout} className='flex-1'>
            <li className='text-white h-full flex justify-center bg-[#e2912e] items-center hover:bg-[#fff0d7] hover:text-[#be7f2d] text-[13px]'>
            <p>Sign out</p>
          </li>
          </Link> :
          <Link to="/" className='flex-1'>
            <li className='text-white h-full flex justify-center bg-[#e2912e] items-center hover:bg-[#fff0d7] hover:text-[#be7f2d] text-[13px]'>
            <p>Sign in</p>
          </li>
          </Link>}
          
          
        </ul>
        </div>
        
      </div>
    </div>
    
    </>
  )
}