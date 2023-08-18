import { ReactComponent as GlimereSweet } from '../assets/images/glimere-sweet.svg'
import { ReactComponent as GlimereLogo } from '../assets/images/glimereLogo.svg'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { BiSearch } from "react-icons/bi"
import { AiOutlineHeart } from 'react-icons/ai'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { Link, useNavigate } from 'react-router-dom'
import logout from '../auth/logout'
import { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectAllUsers, getUserError, getUserStatus, selectLoggedInUser, updateUsers, fetchUsers } from '../slice/users/userSlice'
import { selectAllApparels, getApparelsStatus, getApparelsError } from '../slice/apparels/apparelSlice'
import { useLocation } from 'react-router-dom'
import { BiStore } from 'react-icons/bi'




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

  const location = useLocation()

  const [menuVisible, setMenuVisible] = useState(false)
  const [card, setCard] = useState(0)
  const [menuToggle, setMenuToggle] = useState(false)
  const [isSticky, setIsSticky] = useState(false);
  const [searchSelected, setSearchSelected] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [logoColor, setLogoColor] = useState("");
  // const [toggleCategory, setToggleCategory] = useState(false);
  // const [apparel, setapparel] = useState([]);
  const [suggestions, setSuggestions] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate()
  const dispatch = useDispatch()


  const user = useSelector(selectAllUsers)
  const userStatus = useSelector(getUserStatus)

//   const cart = useSelector((state) => state.cart[user.id]);
// console.log('cart', cart)


  const apparels = useSelector(selectAllApparels)
  const apparelsStatus = useSelector(getApparelsStatus)
  const apparelsError = useSelector(getApparelsError)

  const pageLocation = location.pathname.split('/')[1]
  console.log('pageLocrion', pageLocation)

  const searchRef = useRef(null);
  useEffect(() => {
    setLoggedIn(localStorage.getItem('jwt') && localStorage.getItem('loggedin'))
  }, [loggedIn])

  useEffect(() => {
    navigate
  }, [loggedIn])


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

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  const handleLogout = async () => {
    await logout();
    navigate('/login')
  };

  const initialSearch = {
    search: '',
  }

  const handleSearch = (e) => {
    e.preventDefault()
    setSuggestions(apparels.filter((item) => item.attributes.name.toLowerCase().includes(searchInput.toLowerCase())))
  }

  const handleOutsideClick = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setSuggestions([]);
    }
  };

  const handleKeyPress = (event, result) => {

    if (event.key === 'Enter' && searchInput !== '') {
      event.preventDefault();
      navigateToSearchPage(result);
      resetSearch();
    }

  };

  const resetSearch = () => {
    if (searchInput !== '') {
      setSuggestions([])
      setSearchSelected(false)
      setMenuVisible(false)
    }
  }

  const navigateToSearchPage = (result) => {
    navigate(`/search`, { state: result });
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);


  useEffect(() => {
    if (menuVisible || isSticky) {
      setLogoColor("#ed7534")
    } else if (pageLocation !== "") {
      setLogoColor("#c07820")
    } else {
      setLogoColor("#ffffff")
    }
  }, [menuVisible, isSticky, pageLocation])

  return (
    <>
      <div className={`navbar w-full duration-300 ${isSticky ? 'sticky' : ''} z-50 relative`}>
        <div className={`absolute w-full  ${menuVisible ? "h-[390px]" : "h-[0px]"} overflow-hidden ${menuVisible && pageLocation == "search" ? "bg-[#FFF7E9]" : "bg-white"}  duration-300`}
          onMouseLeave={() => {
            setMenuVisible(false)
            setCard(0)
            setSearchSelected(false)
          }}
        >

          <div className={` grid-cols-3 gap-2 w-full ${card == 1 ? "grid" : "hidden"} pt-[120px] px-[80px] sm:px-[200px]`}>
            {menCategories.map((category, index) => (
              <p
                key={index}
                className="py-[1px] px-[3px] text-[12px] text-left text-gray-800 rounded hover:text-black cursor-pointer"
              >
                {category}
              </p>
            ))}
          </div>

          <div className={` grid-cols-3 gap-2 w-full ${card == 2 ? "grid" : "hidden"} pt-[120px] px-[80px] sm:px-[200px]`}>
            {womenCategories.map((category, index) => (
              <p
                key={index}
                className="py-[1px] px-[3px] text-[12px] text-left text-gray-800 rounded hover:text-black cursor-pointer"
              >
                {category}
              </p>
            ))}
          </div>

          <div className={` grid-cols-3 gap-2 w-full ${card == 3 ? "grid" : "hidden"} pt-[120px] px-[80px] sm:px-[200px]`}>
            {kidsCategories.map((category, index) => (
              <p
                key={index}
                className="py-[1px] px-[3px] text-[12px] text-left text-gray-800 rounded hover:text-black cursor-pointer"
              >
                {category}
              </p>
            ))}
          </div>

          <div className={` grid-cols-3 gap-2 w-full ${card == 4 ? "grid" : "hidden"} pt-[120px] px-[80px] sm:px-[200px]`}>
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


        <div className={`w-full h-[80px] px-[25px] sm:px-[60px] duration-300 flex flex-row ${isSticky ? 'bg-white shadow-sm' : 'bg-transparent'} absolute z-10`}>

          <div className="flex-[1] sm:flex-[2.18] py-[12px] hidden sm:flex flex-row items-center justify-between">
            <div className="flex flex-row items-center">
              <Link to="/">
                <GlimereLogo style={{ color: logoColor }} height="35" className={`mr-[10px] duration-300 ${isSticky ? 'text-[100px] block' : 'hidden'}`} />
                <GlimereSweet style={{ color: logoColor }} height="35" className={`${isSticky ? 'hidden' : 'hidden sm:block'}`} />
              </Link>

            </div>


          </div>
          <div className="flex-[5] flex justify-center items-center sm:items-stretch w-full px-[12px] sm:px-[25px] pl-[0px] sm:pl-[60px] py-[22px]"
            onMouseLeave={() => {
              setSearchSelected(false)
            }}
          >
            <div className="h-full w-full flex justify-start items-center">
              <div className="flex flex-row items-center w-full">
                <div className="flex flex-row items-center w-full">
                  <div className={`h-[35px] sm:hidden flex cursor-pointer justify-start items-center mr-[20px] rounded-full`}
                    onClick={() => {
                      setMenuVisible(!menuVisible)
                      setCard(1)
                    }}
                  >
                    <AiOutlineMenu className={`w-[20px] h-[20px]  ${menuVisible || isSticky || pageLocation ? " text-black" : "text-white "} group-hover:relative`} />
                  </div>
                  <div className={`peer  ${searchSelected ? "h-[15px] w-[15px]" : "h-[40px] px-[15px]"} hidden sm:flex justify-center items-center mr-[8px] rounded-full ${card == 1 ? "bg-[#5e5e5ec2] text-white" : "bg-[#f1f1f1c2] text-black"} duration-300 cursor-pointer`}
                    onMouseEnter={() => {
                      setMenuVisible(true)
                      setCard(1)
                    }}
                  >
                    <p className={`text-[12px] ${searchSelected ? "hidden" : "block"}`}>Men</p>
                  </div>

                  <div className={`peer  ${searchSelected ? "h-[15px] w-[15px]" : "h-[40px] px-[15px]"} hidden sm:flex justify-center items-center mr-[8px] rounded-full ${card == 2 ? "bg-[#5e5e5ec2] text-white" : "bg-[#f1f1f1c2] text-black"} duration-300 cursor-pointer`}
                    onMouseEnter={() => {
                      setMenuVisible(true)
                      setCard(2)
                    }}
                  >
                    <p className={`text-[12px] ${searchSelected ? "hidden" : "block"}`}>Women</p>
                  </div>
                  <div className={`peer  ${searchSelected ? "h-[15px] w-[15px]" : "h-[40px] px-[15px]"} hidden sm:flex justify-center items-center mr-[8px] rounded-full ${card == 3 ? "bg-[#5e5e5ec2] text-white" : "bg-[#f1f1f1c2] text-black"} duration-300 cursor-pointer`}
                    onMouseEnter={() => {
                      setMenuVisible(true)
                      setCard(3)
                    }}
                  >
                    <p className={`text-[12px] ${searchSelected ? "hidden" : "block"}`}>Kids</p>
                  </div>
                  <div className={`peer  ${searchSelected ? "h-[15px] w-[15px]" : "h-[40px] px-[15px]"} hidden sm:flex justify-center items-center mr-[8px] rounded-full ${card == 4 ? "bg-[#5e5e5ec2] text-white" : "bg-[#f1f1f1c2] text-black"} duration-300 cursor-pointer`}
                    onMouseEnter={() => {
                      setMenuVisible(true)
                      setCard(4)
                    }}
                  >
                    <p className={`text-[12px] ${searchSelected ? "hidden" : "block"}`}>Customizations</p>
                  </div>
                  <div ref={searchRef} className={`group h-[40px] ${searchSelected ? "w-full bg-white" : "w-[60px] "} ${searchInput !== '' ? "w-full bg-white" : "hover:w-full "} peer-hover:w-full  ${menuVisible ? "bg-[#f3f3f3be]" : "bg-[#f1f1f1c2]"} duration-200 sm:duration-500 ease-linear rounded-full mr-0 sm:mr-[20px] relative flex flex-row justify-center  px-[20px]`}>
                    <div className={`w-full max-h-[400px] absolute rounded-[20px] z-[-1] ${searchSelected || searchInput !== '' ? " bg-white shadow-md" : "bg-transparent "} pt-[40px] overflow-hidden`}>
                      {searchInput !== '' && suggestions.map((item) => (<div className="hover:bg-[#0000001a] w-full px-[30px] " key={item.id}>
                        <Link to={`/search`} state={item.attributes.name}
                          onClick={() => {
                            resetSearch()
                            setSearchInput(item.attributes.name)
                          }}
                        >
                          <div className="w-full h-[40px] flex justify-start items-center"
                          >
                            <p className="text-[12px] text-black">{item.attributes.name}</p>
                          </div>
                        </Link>
                      </div>))}
                    </div>
                    <div className="h-full w-[30px] flex justify-center items-center duration-150">
                      <BiSearch className='w-[20px] h-[20px] text-gray-500 group-hover:relative' />

                    </div>

                    <input type="text" placeholder='Search' value={searchInput} className='w-full outline-none bg-transparent pl-[10px]'
                      onChange={(e) => {
                        setSearchInput(e.target.value)
                        handleSearch(e)
                      }}
                      onClick={() => { setSearchSelected(true) }}
                      onKeyDown={(event) => {
                        handleKeyPress(event, searchInput)
                      }}
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="flex-[2.18] flex flex-row items-center justify-end"
            // onMouseLeave={() => { setMenuToggle(false) }}
          >
            <div className="flex flex-row justify-end w-full mr-[15px] sm:mr-0">
              <div className="flex flex-row w-full">
                <div className="h-[50px] w-[100px] sm:w-full flex flex-row gap-[5px] justify-between items-center rounded-bl-[20px]">
                  <Link to="/likes">
                    <div className={`py-[9px] px-[5px] duration-150 flex flex-row justify-center items-center ${menuVisible || isSticky || pageLocation || menuToggle ? "border-black" : "border-[#ffffff]"} border-solid hover:border-b cursor-pointer`}>
                      <BiStore className={`text-[18px] sm:text-[16px] ${menuVisible || isSticky || pageLocation || menuToggle ? "text-black" : "text-[#ffffff]"} `} />
                      <p className={`text-[12px] ml-[5px] hidden sm:block ${menuVisible || isSticky || pageLocation || menuToggle ? "text-[#684419]" : "text-[#ffffff]"}`}>Stores</p>
                    </div>
                  </Link>
                  <Link to="/likes">
                    <div className={`py-[9px] px-[5px] duration-150 flex flex-row justify-center items-center ${menuVisible || isSticky || pageLocation || menuToggle ? "border-black" : "border-[#ffffff]"} border-solid hover:border-b cursor-pointer`}>
                      <AiOutlineHeart className={`text-[18px] sm:text-[16px] ${menuVisible || isSticky || pageLocation || menuToggle ? "text-black" : "text-[#ffffff]"} `} />
                      <p className={`text-[12px] ml-[5px] hidden sm:block ${menuVisible || isSticky || pageLocation || menuToggle ? "text-[#684419]" : "text-[#ffffff]"}`}>Wishlist</p>
                    </div>
                  </Link>

                  <div className={`py-[9px] px-[5px] pr-[10px] duration-150 relative flex flex-row justify-center items-center ${menuVisible || isSticky || pageLocation || menuToggle ? "border-black" : "border-[#ffffff]"} border-solid hover:border-b cursor-pointer`}
                    onClick={() => setMenuToggle(!menuToggle)}

                  >
                    <FiShoppingCart className={`text-[18px] sm:text-[16px] ${menuVisible || isSticky || pageLocation || menuToggle ? "text-black" : "text-[#ffffff]"} `} />
                    {/* <p className={`text-[12px] ml-[5px] hidden sm:block ${menuVisible || isSticky || pageLocation ? "text-[#684419]" : "text-[#ffffff]"}`}>Cart</p> */}
                    <div className="h-[15px] w-[15px] rounded-full absolute top-0 right-[0px] bg-[#ed7534] flex justify-center items-center">
                      <p className='text-[8px] text-white'>5</p>
                    </div>
                  </div>

                  <Link to="">
                    <div className={`peer ${menuVisible || isSticky || pageLocation || menuToggle ? "border-black" : "border-[#be7f2d]"} border-solid hover:border-b cursor-pointer`}
                    >
                      <CgProfile className={`text-[20px] sm:m-[0px] sm:text-[24px] ${menuVisible || isSticky || pageLocation || menuToggle ? "text-black" : "text-[#ffffff]"} duration-200 `} />
                    </div>
                  </Link>

                </div>
              </div>

            </div>

          </div>
        </div>

        <div className={`absolute right-0 overflow-hidden ${menuToggle ? "h-[320px] sm:h-[390px]" : "h-[0px]"} w-[45%] min-[1127px]:w-[350px] sm:w-[300px] duration-300 bg-[#ffe9b8]`}
        >
          <div className="w-full h-full"
            // onMouseEnter={() => { setMenuToggle(true) }}
            onMouseLeave={() => {
              // setMenuToggle(false)
              setMenuVisible(false)
            }}
          >
          {/* {cart.length == 0 ? <div className='h-full w-full flex justify-center items-center'>
              <div className="">
                <p className='text-[#9d5c0d] text-[18px] font-bold'>Cart is empty</p>
              </div>
          </div> :

          cart.map((item, id) => (
            <div className="" key={id}></div>
          ))
          
          } */}
          </div>

        </div>
      </div>

    </>
  )
}