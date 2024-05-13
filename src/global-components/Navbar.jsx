import { ReactComponent as GlimereSweet } from '../assets/images/glimereLogo.svg'
import { ReactComponent as GlimereLogo } from '../assets/images/glimereLogo.svg'
import { ReactComponent as FashionQueue } from '../assets/images/fashionQueue.svg'
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
import { selectAllCategory } from '../slice/main-category/mainCategorySlice'
import { selectAllSubcategory } from '../slice/sub-category/subCategorySlice'
import { selectAllApparelType } from '../slice/apparel-type/apparelTypeSlice'
import { constants } from './constants'
import { selectCart } from '../slice/cart/cartSlice'
import axios from 'axios'
import { addMultipleItems } from '../slice/cart/cartSlice'
import { auth } from '../config/firebase'




// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

export default function Navbar() {

  const location = useLocation()
  const isAuthenticated = auth.currentUser != null
console.log('auth.currentUser', auth.currentUser)

  const [menuVisible, setMenuVisible] = useState(false)
  const [card, setCard] = useState(0)
  const [menuToggle, setMenuToggle] = useState(false)
  const [isSticky, setIsSticky] = useState(false);
  const [searchSelected, setSearchSelected] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [logoColor, setLogoColor] = useState("");
  const [suggestions, setSuggestions] = useState();
  const [currentApparelType, setCurrentApparelType] = useState("Men")
  // const [loggedIn, setLoggedIn] = useState(false);


  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(selectAllUsers)
  const userStatus = useSelector(getUserStatus)
  const apparels = useSelector(selectAllApparels)
  const apparelsStatus = useSelector(getApparelsStatus)
  const apparelsError = useSelector(getApparelsError)
  const category = useSelector(selectAllCategory)
  const subCategory = useSelector(selectAllSubcategory)
  const cart = useSelector(selectCart)
  const apparelType = useSelector(selectAllApparelType)
  const loggedinUser = useSelector(selectLoggedInUser)


  const navMenu = [
    { name: 'My Account' },
    { name: 'Orders' },
    { name: 'Wishlist' },
    { name: 'Settings' },
  ]

  // useEffect(() => {
  //   // Check if the cart data has already been fetched
  //   const hasFetchedCartData = JSON.parse(localStorage.getItem("hasFetchedCartData"))

  //   if (loggedinUser?.user?.confirmed === true && userStatus === "idle" && hasFetchedCartData !== true) {
  //     dispatch(fetchUsers(loggedinUser.jwt));
  //   }
  // }, [userStatus, dispatch, loggedinUser]);

  // useEffect(() => {
  //   const hasFetchedCartData = JSON.parse(localStorage.getItem("hasFetchedCartData"))
  //   if (user && user.carts && user.carts.length > 0 && hasFetchedCartData !== true && cart.length === 0) {
  //     const fetchCartData = async () => {
  //       try {
  //         const cartItemIds = user.carts.map((item) => item.id);
  //         const cartData = [];
  //         const uniqueItemIds = new Set();

  //         for (const itemId of cartItemIds) {
  //           const response = await axios.get(
  //             `${constants.url}/api/carts/${itemId}?populate=products`,
  //             {
  //               headers: {
  //                 Authorization: `Bearer ${loggedinUser.jwt}`,
  //               },
  //             }
  //           );

  //           const itemData = response.data;

  //           // Check if the item ID is not already in the Set
  //           if (!uniqueItemIds.has(itemData.data.id)) {
  //             cartData.push(itemData);
  //             uniqueItemIds.add(itemData.data.id); // Add the item ID to the Set
  //           }
  //         }

  //         dispatch(addMultipleItems(cartData));
  //         console.log('cart items added');

  //         // Set the flag to indicate that cart data has been fetched
  //         localStorage.setItem("hasFetchedCartData", "true");
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };

  //     fetchCartData();
  //   }
  // }, [user, dispatch, loggedinUser, cart]);

  const pageLocation = location.pathname.split('/')[1] !== "shop"
  // console.log('pageLocation', pageLocation)

  const searchRef = useRef(null);

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

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const initialSearch = {
    search: '',
  }

  const handleSearch = (e) => {
    e.preventDefault()
    setSuggestions(apparels.filter((item) => item.attributes.apparel_name.toLowerCase().includes(searchInput.toLowerCase())))
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
    if (isSticky) {
      setLogoColor("#ed7534")
    } else if (pageLocation !== "") {
      setLogoColor("#ed7534")
    } else {
      setLogoColor("#ffffff")
    }
  }, [isSticky, pageLocation])


  return (
    <>
      <div className={`navbar w-full duration-300 ${isSticky ? 'sticky' : ''} z-50 relative`}>
        {/* <div className={`absolute w-full  ${menuVisible ? "min-h-[450px] h-[450px]" : "h-[0px]"} overflow-hidden ${menuVisible && pageLocation == "search" ? "bg-[#FFF7E9]" : "bg-white-100"}  duration-300`}
          onMouseLeave={() => {
            setMenuVisible(false)
            setCard(0)
            setSearchSelected(false)
          }}
        >
          <div className="flex flex-col">
            <div className="flex sm:hidden flex-row flex-[1] pt-[90px] px-[20px]">
           
            </div>
            <div className="flex-[3]">
              {category?.map((category) => (
                <div key={category.id} className="flex flex-row">
                  <div className={`flex-[2.7] sm:flex-[2] grid-cols-3 gap-2 w-full ${card == category.id ? "grid" : "hidden"} pt-[20px] sm:pt-[120px] px-[20px] pb-[50px] sm:px-[100px]`}>
                    {category?.attributes?.subcategories?.data?.map((subcategory) => (
                      <Link key={subcategory.id} to={`/view-collection/${subcategory.id}`} state={subcategory}>
                        <p

                          className="py-[1px] px-[3px] text-[12px] text-left font-medium text-gray-500 rounded hover:text-dark-100 cursor-pointer"
                          onClick={() => {
                            setMenuVisible(false)
                          }}
                        >
                          {subcategory.attributes.title}
                        </p>
                      </Link>

                    ))}
                  </div>
                  <div className={`flex-[1.2] pt-[20px] sm:pt-[90px] pb-[50px] pr-[20px] sm:pr-[60px] ${card == category.id ? "grid" : "hidden"} h-full`}>
                    <div className="h-[320px] w-full rounded-[10px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${constants.url}${category.attributes.img.data.attributes.url})` }}>

                    </div>
                  </div>
                </div>


              ))}

            </div>
          </div>



        </div> */}


        <div className={`w-full h-[80px] px-[25px] sm:px-[60px] duration-300 flex flex-row ${isSticky ? ' bg-white-100 shadow-sm' : 'bg-transparent'} absolute z-10`}>

          <div className="flex-[1] sm:flex-[2.18] py-[12px] hidden sm:flex flex-row items-center justify-between">
            <div className="flex flex-row items-center">
              <Link to="/shop">
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
                      // setMenuVisible(!menuVisible)
                      setCard(1)
                    }}
                  >
                    <AiOutlineMenu className={`w-[20px] h-[20px]  text-dark-100"  group-hover:relative`} />
                  </div>

                  {apparelType?.map((type) => (
                    <div key={type.id} className={`peer  ${searchSelected && currentApparelType !== type.attributes.name ? "h-[15px] w-[15px]" : "h-[40px] px-[15px]"} hidden sm:flex flex-col gap-[1px] justify-center items-center mr-[8px] rounded-full ${card == type.id ? " text-dark-100" : " text-dark-100"} duration-300 cursor-pointer`}
                      onClick={() => {
                        setCurrentApparelType(type.attributes.name)
                      }}
                    >
                      <p className={`text-[12px] ${searchSelected && currentApparelType !== type.attributes.name ? "hidden" : "block"}`}>{type.attributes.name}</p>
                      <div className={`w-full h-[2px]  ${currentApparelType === type.attributes.name ? "bg-dark-200" : ""}`}></div>
                    </div>
                  ))}


                  <div ref={searchRef} className={`group h-[40px] border-[1px] border-solid border-dark-100 ${searchSelected ? "w-full bg-white-100" : "w-[120px] "} ${searchInput !== '' ? "w-full bg-white-100" : "hover:w-full "} peer-hover:w-full  ${menuVisible ? "bg-[#f3f3f3be]" : ""} duration-200 sm:duration-500 ease-linear rounded-full mr-0 sm:mr-[20px] relative flex flex-row justify-center  px-[20px]`}>
                    <div className={`w-full max-h-[400px] absolute rounded-[20px] z-[-1] ${searchSelected || searchInput !== '' ? " bg-white-100 shadow-md" : "bg-transparent "} pt-[40px] overflow-hidden`}>
                      {searchInput !== '' && suggestions?.slice(0, 6)?.map((item) => (<div className="hover:bg-[#0000001a] w-full px-[30px] " key={item.id}>
                        <Link to={`/search`} state={item.attributes.apparel_name}
                          onClick={() => {
                            resetSearch()
                            setSearchInput(item.attributes.apparel_name)
                          }}
                        >
                          <div className="w-full h-[40px] flex justify-start items-center"
                          >
                            <p className="text-[12px] text-dark-100">{item.attributes.apparel_name}</p>
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
          <div className="flex-[1.7] sm:flex-[2.18] flex flex-row items-center justify-end"
          // onMouseLeave={() => { setMenuToggle(false) }}
          >
            <div className="flex flex-row justify-end w-full sm:mr-0">
              <div className="flex flex-row w-full justify-end">
                <div className={`h-[50px] w-[70px] ${user?.role?.type === "seller" ? "sm:w-[150px]" : "sm:w-[180px]"} flex flex-row gap-[5px] justify-between items-center rounded-bl-[20px]`}>

                  {user?.role?.type === "seller"
                    ?
                    <Link to="/market">
                      <div className={`py-[9px] px-[5px] duration-150 flex flex-row justify-center items-center border-dark-100 border-solid hover:border-b cursor-pointer`}>
                        <BiStore className={`text-[18px] sm:text-[16px] text-dark-100 `} />
                        <p className={`text-[12px] ml-[5px] hidden sm:block text-dark-100`}>My Store</p>
                      </div>
                    </Link>
                    :
                    <Link to="/cart">
                      <div className={`py-[9px] px-[5px] pr-[10px] duration-150 relative flex flex-row justify-center items-center border-dark-100 border-solid hover:border-b cursor-pointer`}

                      >
                        {cart.length != 0 ? <div className="h-[15px] w-[15px] rounded-full absolute top-0 right-[0px] bg-primary-100 flex justify-center items-center">
                          <p className='text-[8px] text-white-100'>{cart.length}</p>
                        </div> : null}
                        <FashionQueue style={{ color: "#171715" }} height="20" className={`text-[18px] sm:text-[16px] text-dark-100 `} />

                        <p className={`text-[12px] ml-[7px] hidden sm:block text-dark-100`}>My Fashion Queue</p>

                      </div>
                    </Link>
                  }






                  <div className={`peer ${menuVisible || isSticky || pageLocation || menuToggle ? "border-black" : "border-[#be7f2d]"} border-solid hover:border-b cursor-pointer`}
                    onClick={() => setMenuToggle(!menuToggle)}

                  >
                    <CgProfile className={`text-[20px] sm:m-[0px] sm:text-[24px] text-dark-100 duration-200 `} />
                  </div>


                </div>
              </div>

            </div>

          </div>
        </div>

        <div className={`absolute right-0 overflow-hidden ${menuToggle ? "min-h-[280px] sm:min-h-[300px] " : "max-h-[0px]"} w-[60%] m:w-[45%] min-[1127px]:w-[350px] sm:w-[300px] duration-300 bg-[#ffe9b8]`}
        >
          <div className="w-full h-full flex flex-col pt-[90px] ">

            <div className="flex justify-center items-center h-[50px]">
              <p className='text-dark-100 font-bold text-[13px]'>support - <span className="text-[12px] font-bold ">0-220993-32093</span> </p>
            </div>

            {isAuthenticated ?
              <div className="">
                {navMenu.map((item, id) => (
                  <Link key={id} to="/profile" state={id}>
                    <div className="flex justify-center items-center h-[60px] hover:bg-[#fff7e7]"
                      onClick={() => setMenuToggle(false)}
                    ><p className='text-[#772F1A]'>{item.name}</p></div>
                  </Link>
                ))}
                <Link>
                  <div className="flex justify-center items-center h-[60px] hover:bg-[#ffa777] bg-[#ffbf9d] duration-150"
                    onClick={handleLogout}
                  >
                    <p className='text-[#772F1A]'>Logout</p>
                  </div>
                </Link>
              </div> :
              <Link to="/login">
                <div className="flex justify-center items-center h-[60px] bg-[#fff7e7]">
                  Login
                </div>
              </Link>



            }



          </div>

        </div>


      </div >

    </>
  )
}