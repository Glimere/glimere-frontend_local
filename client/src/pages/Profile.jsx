import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../auth/Auth';
import { useContext } from 'react';
import logout from '../auth/logout';
import { constants } from '../global-components/constants';
import Footer from '../components/Footer';
import { AiOutlineUser } from 'react-icons/ai'
import { IoIosAdd } from 'react-icons/io'
import { ProductCard } from '../components/ProductCard';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllUsers, getUserStatus, fetchUsers } from '../slice/users/userSlice';
import { BsFillStarFill } from 'react-icons/bs'
import { HiDotsHorizontal } from 'react-icons/hi'




export default function Profile() {

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const user = useSelector(selectAllUsers)
  const userStatus = useSelector(getUserStatus)
  // const userError = useSelector(getUserError)


  const [tab, setTab] = useState(1)
  const [togglemenu, settogglemenu] = useState(false)

  // const { isAuthenticated } = useContext(AuthContext);
  // const navigate = useNavigate();

  // useEffect(() => {

  //   console.log('userStatus', userStatus)
  //   if (userStatus === "idle") {

  //     dispatch(fetchUsers(users.jwt))

  //   } 
  // }, [navigate, userStatus, dispatch]);

  console.log('user', user)

  const { email, username } = user;

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <>
      <div className='w-full  flex'>
        {/* <div>Username: {username}</div>
      <div>Email: {email}</div>
      <button onClick={handleLogout}>Logout</button> */}
        <div className="flex-[1] bg-white pt-[80px] pb-[60px] px-[40px] flex flex-col items-start">
          <div className="w-full py-[20px]">
            <div className="flex flex-row items-center mb-[5px]">
              <h1 className="text-[18px] font-bold text-[#be7f2d] mr-[10px]">5.0</h1>
              <BsFillStarFill className={`text-[18px] text-black`} />
            </div>
            <hr />
            <p className='text-[13px] mt-[5px]'>Rated by <span className='font-bold'>2M+ Users</span></p>

          </div>
          <div className="flex flex-row w-full">
            <div className=" flex-[2]">
              <div className="h-[250px] w-[250px] flex justify-center items-center bg-[#fff9ee] rounded-full mt-[10px]">
                <AiOutlineUser className={`text-[80px] text-[#e7c291]`} />
              </div>
            </div>

            <div className="flex flex-[1] flex-row justify-end relative">
              <div className="h-[40px] w-[40px] flex justify-center items-center rounded-[7px] hover:bg-[#FFF7E9] duration-75"
              onClick={() => settogglemenu(!togglemenu)}
              >
                <HiDotsHorizontal className={`text-[20px] text-black`} />
              </div>

              <div className={`h-[240px] w-[180px] shadow-md absolute right-0 top-[50px] p-[20px] ${togglemenu ? "block" : "hidden" }`}>
                <div className="py-[8px] px-[15px] flex justify-center items-center text-[10px]  text-[#ED7534] border-[#ED7534] border-solid border rounded-full mt-[20px] cursor-pointer duration-300 hover:bg-[#ffe9c3]"
                  onClick={handleLogout}>
                  Sign Out
                </div>

              </div>
            </div>
          </div>

          <div className="w-full flex flex-col items-start">
            <h1 className="text-[21px] font-bold text-[#be7f2d] mt-[30px]" >{username}</h1>
            <p className='text-[12px]'>fashionista</p>

            <div className="w-full mt-[40px] h-[100px]">
              <div className="w-full pt-[20px] flex content-normal ">
                <button className="h-[100px] w-[150px] py-[4px] px-[9px] flex justify-center items-center text-[15px] text-[#ED7534] bg-[#FFF7E9] border-[#ffbf9d] border-solid border rounded-[10px] mr-[5px]">Retro</button>
                <button className="h-[100px] w-[150px] py-[4px] px-[9px] flex justify-center items-center text-[15px] text-[#ED7534] bg-[#FFF7E9] border-[#ffbf9d] border-solid border rounded-[10px] mr-[5px]">Vintage</button>
                <button className="h-[100px] w-[150px] py-[4px] px-[9px] flex justify-center items-center text-[15px] text-[#ED7534] border-[#ffbf9d] border-solid border rounded-[10px] mr-[5px]">Add Style
                  <IoIosAdd className="text-[13px] ml-[5px]" />
                </button>
              </div>
            </div>

          </div>

        </div>

        <div className="flex-[1.2] bg-[#FFF7E9] pt-[80px]">
          <div className="w-full h-[70px] flex px-[50px]">
            <div className={`flex-1 w-full h-[50px] hover:border-[#ffe0cf] border-solid border-b text-[12px] ${tab == 1 ? "border-[#ED7534]" : "border-transparent"} flex justify-center items-center cursor-pointer duration-300`}
              onClick={() => setTab(1)}
            >Orders</div>
            <div className={`flex-1 w-full h-[50px] hover:border-[#ffe0cf] border-solid border-b text-[12px] ${tab == 2 ? "border-[#ED7534]" : "border-transparent"} flex justify-center items-center cursor-pointer duration-300`}
              onClick={() => setTab(2)}
            >Account</div>
            <div className={`flex-1 w-full h-[50px] hover:border-[#ffe0cf] border-solid border-b text-[12px] ${tab == 3 ? "border-[#ED7534]" : "border-transparent"} flex justify-center items-center cursor-pointer duration-300`}
              onClick={() => setTab(3)}
            >Settings</div>

          </div>

          <div className={`w-full h-[467px] p-[50px]  ${tab == 1? "block" : "hidden"}`}>

          </div>
          <div className={`w-full h-[467px] p-[50px]  ${tab == 2 ? "block" : "hidden"}`}>

          </div>
          <div className={`w-full h-[467px] p-[50px]  ${tab == 3 ? "block" : "hidden"}`}>

          </div>
        </div>
      </div>


    </>

  );
}

