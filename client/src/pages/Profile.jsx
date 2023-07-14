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


export default function Profile() {

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const user = useSelector(selectAllUsers)
  const userStatus = useSelector(getUserStatus)
  // const userError = useSelector(getUserError)


  const [tab, setTab] = useState(1)

  const { isAuthenticated } = useContext(AuthContext);
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
    <div className='w-full h-[100vh] flex'>
      {/* <div>Username: {username}</div>
      <div>Email: {email}</div>
      <button onClick={handleLogout}>Logout</button> */}
      <div className="flex-[1] bg-[#FFF7E9] pt-[80px] px-[40px] flex flex-col items-center">
        <div className="h-[250px] w-[170px] flex justify-center items-center bg-white rounded-full">
          <AiOutlineUser className={`text-[80px] text-[#e7c291]`}/>
        </div>
        <div className="w-full flex flex-col items-center">
          <h1 className="text-[21px] text-[#be7f2d] mt-[30px]" style={{fontFamily: "Edensor"}}>{username}</h1>
          <p className='text-[12px]'>fashionista</p>

          <div className="w-full mt-[40px] h-[100px]">
             <p className='text-[14px] mb-[10px]'>Style</p>
          <div className="w-full pt-[20px] flex content-normal border-[#ED7534] border-solid border-t">
            <button className="py-[4px] px-[9px] flex justify-center items-center text-[10px] text-white bg-[#ED7534] rounded-full mr-[5px]">Retro</button>
            <button className="py-[4px] px-[9px] flex justify-center items-center text-[10px] text-white bg-[#ED7534] rounded-full mr-[5px]">Vintage</button>
            <button className="py-[4px] px-[9px] flex justify-center items-center text-[10px] text-[#ED7534] border-[#ED7534] border-solid border rounded-full mr-[5px]">Add Style
            <IoIosAdd className="text-[13px] ml-[5px]"/>
            </button>
          </div>
          </div>
         
        </div>
        <div className="py-[8px] px-[15px] flex justify-center items-center text-[10px]  text-[#ED7534] border-[#ED7534] border-solid border rounded-full mt-[20px] cursor-pointer duration-300 hover:bg-[#ffe9c3]"
        onClick={handleLogout}>Sign Out</div>

      </div>
      <div className="flex-[2] pt-[80px]">
        <div className="w-full h-[70px] flex px-[50px]">
          <div className={`flex-1 w-full h-[50px] hover:border-[#ffe0cf] border-solid border-b text-[12px] ${tab == 1 ? "border-[#ED7534]" : "border-transparent"} flex justify-center items-center cursor-pointer duration-300`}
          onClick={() => setTab(1)}
          >Likes</div>
          <div className={`flex-1 w-full h-[50px] hover:border-[#ffe0cf] border-solid border-b text-[12px] ${tab == 2 ? "border-[#ED7534]" : "border-transparent"} flex justify-center items-center cursor-pointer duration-300`}
          onClick={() => setTab(2)}
          >Orders</div>
          <div className={`flex-1 w-full h-[50px] hover:border-[#ffe0cf] border-solid border-b text-[12px] ${tab == 3 ? "border-[#ED7534]" : "border-transparent"} flex justify-center items-center cursor-pointer duration-300`}
          onClick={() => setTab(3)}
          >Account</div>
          <div className={`flex-1 w-full h-[50px] hover:border-[#ffe0cf] border-solid border-b text-[12px] ${tab == 4 ? "border-[#ED7534]" : "border-transparent"} flex justify-center items-center cursor-pointer duration-300`}
          onClick={() => setTab(4)}
          >Settings</div>

        </div>

        <div className={`w-full h-[467px] grid grid-cols-4 gap-2 p-[50px] bg-red-300 ${tab == 1 ? "block" : "hidden"}`}>
        {/* {apparels.map((apparel) => (
          <ProductCard key={apparel.id} apparel={apparel} />
        ))} */}
        </div>
        <div className={`w-full h-[467px] p-[50px] bg-blue-300 ${tab == 2 ? "block" : "hidden"}`}>

        </div>
        <div className={`w-full h-[467px] p-[50px] bg-yellow-300 ${tab == 3 ? "block" : "hidden"}`}>

        </div>
        <div className={`w-full h-[467px] p-[50px] bg-green-300 ${tab == 4 ? "block" : "hidden"}`}>

        </div>
      </div>
    </div>

    <Footer/>

    </>
    
  );
};

