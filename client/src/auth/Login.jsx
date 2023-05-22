import React, {useState, useEffect} from 'react'
import glimerenew1 from  '../assets/images/glimerenew1.svg'
import facebook from '../assets/images/facebook.png'
import google from '../assets/images/google.png'
import axios from 'axios'
import {toast} from 'react-toastify';
import { setCookie } from 'nookies'
import { useNavigate } from 'react-router-dom'
import { constants } from './constants'
// import dotenv from 'dotenv';


export default function Login() {
  
  const navigate = useNavigate();
  // dotenv.config()
  const initialUser = {
    identifier: '',
    password: ''
  }

  const initialRegisterUser = {
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  }

  const [isVisible, setIsVisible] = useState(false)
  const [isCardVisible, setIsCardVisible] = useState(false)
  const [user, setUser] = useState(initialUser)
  const [registerUser, setRegisterUser] = useState(initialRegisterUser)
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState("")

const handleChange = ({target}) => {
  const {name, value} = target
  setUser((currentUser) => ({
    ...currentUser, 
    [name]: value
}))
console.log('user', user)
}


const handleLogin = async () => {
  const url = `${constants.url}/api/auth/local`
  try{
    if(user.identifier && user.password) {
    const res = await axios.post(url, user)

    localStorage.setItem('user', JSON.stringify(res.data));

    // setCookie({ res }, 'jwt', res.data.jwt, {
    //   httpOnly: true,
    //   secure: import.meta.env.MODE  !== 'development',
    //   maxAge: 30 * 24 * 60 * 60,
    //   path: '/',
    // });

    // res.status(200).end();
console.log('res.user.confirmed', res.data.user.confirmed)
    if (res.data.user.confirmed == true) {
      navigate('/'); // Replace '/' with the actual route of your homepage
    }

    }
  } catch (error){
    console.log('error', error)
    res.status(400).send(e.response.data.message[0].messages[0]);
    toast.error(error.message, {
      hideProgressBar: true
    })
    // if (error.response && error.response.data && error.response.data.message) {
    //   console.log(error.response.data.message[0].messages[0]);
    // }
  }
}

const handleUserChange = ({target}) => {
  const {name, value} = target
    setRegisterUser((currentUser) => ({
      ...currentUser, 
      [name]: value
  }))
  console.log('user', registerUser)
}

const handleConfirmPassword = ({ target }) => {
  const { value } = target;
  setConfirmPassword(value);

  if (registerUser.password !== value) {
    setError("Passwords do not match");
  } else {
    setError("");
  }
  console.log('confirmPassword', confirmPassword);
};


const signUp = async () => {

  if (registerUser.password !== confirmPassword) {
    setError("Passwords do not match");
    return;
  }

  const data = {
    username: registerUser.firstname + " " + registerUser.lastname,
    firstname: registerUser.firstname,
    lastname: registerUser.lastname,
    email: registerUser.email,
    password: registerUser.password
  }

   const url = `${constants.url}/api/auth/local/register`

   try {
    if(registerUser.firstname && registerUser.lastname && registerUser.email && registerUser.password) {
          const res = await axios.post(url, data)

      setCookie({ res }, 'jwt', res.data.jwt, {
      httpOnly: true,
      secure: import.meta.env.MODE !== 'development',
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });
     res.status(200).end();
    }
    
  } catch (e) {
    console.log('e.message', e.message)
    res.status(400).send(e.response.data.message[0].messages[0]);
    toast.error(e.message, {
          hideProgressBar: true
        })
  }

  // try{
  //   if(registerUser.firstname && registerUser.lastname && registerUser.email && registerUser.password) {
  //   const res = await axios.post(url, data,
  //     {
  //       headers: {
  //         Authorization: `Bearer ${import.meta.env.VITE_GLIMERE_TOKEN}`,
  //       }
  //     },)
  //   console.log('res', res)
  //   }
  // } catch (error){
  //   toast.error(error.message, {
  //     hideProgressBar: true
  //   })
  // }
  setRegisterUser({
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  })

  setConfirmPassword('')

  setIsVisible(false)
}

  return (
    <>
     <div className="w-full h-[100vh]">
      <div className={`absolute h-full z-10 w-[50%] bg-[#ed7534] duration-700 ease-in-out card ${isVisible ? 'ml-[50%]' : 'mr-[50%]'}`}></div>
        <div className="w-full h-full flex">
          <div className="flex-[1] w-[50%] p-[50px] flex flex-col items-center">
          <div className={`w-full flex flex-col items-center px-[40px] duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex flex-col items-center ">
              <img src={glimerenew1} alt="" className='w-[50px] mb-[20px]'/>
              <h1 className=' font-bold text-[22px] mb-[30px]'>Create an Account</h1>

            </div>
            
            


            <div className="w-full">
              <div className="w-full flex flex-row"> 
              <div className="sm:col-span-3 mb-4 mr-5 flex-[1]">
                <div className="mt-2">
                  <input required type="text" value={registerUser.firstname} name="firstname" placeholder='First Name' autoComplete="name" className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm  ring-gray-300 placeholder:text-gray-400 ring-[1px] focus:ring-[#9d5c0d] sm:text-sm sm:leading-6"
                  onChange={handleUserChange}
                  ></input>
                </div>
              </div>

              <div className="sm:col-span-3 mb-4 flex-[1]">
                <div className="mt-2">
                  <input required type="text" value={registerUser.lastname} name="lastname" placeholder='Last Name' autoComplete="name" className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm  ring-gray-300 placeholder:text-gray-400 ring-[1px] focus:ring-[#9d5c0d] sm:text-sm sm:leading-6"
                  onChange={handleUserChange}
                  ></input>
                </div>
              </div>
            </div> 

            <div className="sm:col-span-4 mb-[22px]">
                <div className="mt-2">
                  <input required name="email" value={registerUser.email} placeholder='Email' type="email" autoComplete="email" className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm  ring-gray-300 placeholder:text-gray-400 ring-[1px] focus:ring-[#9d5c0d] sm:text-sm sm:leading-6"
                  onChange={handleUserChange}
                  ></input>
                </div>
              </div>

              <div className="sm:col-span-4 mb-[22px]">
                <div className="mt-2">
                  <input required name="password" value={registerUser.password} placeholder='New Password' type="password" autoComplete="password" className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm  ring-gray-300 placeholder:text-gray-400 ring-[1px] focus:ring-[#9d5c0d] sm:text-sm sm:leading-6"
                  onChange={handleUserChange}
                  ></input>
                </div>
              </div>

              <div className="sm:col-span-4 mb-[22px]">
                <div className="mt-2">
                  <input required name="confirmPassword" 
                  value={confirmPassword}
                  placeholder='Confirm Password' type="password" autoComplete="confirm-password" className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm  ring-gray-300 placeholder:text-gray-400 ring-[1px] focus:ring-[#9d5c0d] sm:text-sm sm:leading-6"
                  onChange={handleConfirmPassword}
                  ></input>
                  <p className=' text-red-700 text-[12px] mt-[5px]'>{error}</p>
                </div>
              </div>

            <div className="flex justify-end my-[10px]">
              <a href="" className='text-[14px]'>Forgot Password</a>
            </div>
           
            </div> 
            <div className="w-full mt-6 flex flex-col items-center justify-center gap-x-6">
              <button type="submit" className="rounded-md w-full bg-[#ed7534] px-24 py-2 text-sm font-semibold text-white shadow-sm duration-150 hover:bg-[#9d5c0d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={signUp}
              >Sign Up</button>
              <div className="flex flex-row mt-[20px]">
              <p className='text-[14px] mr-[5px]'>Already have an Account?</p>
              <p className='text-[14px] text-[#ed7534] cursor-pointer'
              onClick={() => {
                setIsVisible(false)
                // setIsCardVisible(false)
              }}
              >Sign In</p>
              </div>
            </div>
            </div>
          </div>
            


         
          <div className="flex-[1] w-[50%] p-[50px] flex flex-col justify-center">
          <div className={`w-full flex flex-col items-center px-[40px] duration-300 ${isVisible ? 'opacity-0' : 'opacity-100'}`}>
            <div className="flex flex-col items-center ">
              <img src={glimerenew1} alt="" className='w-[50px] mb-[20px]'/>
              <h1 className=' font-bold text-[22px] '>Welcome Back</h1>
              <p className='mb-[15px] text-[14px]'>Sign in with</p>
            </div>
            <div className="flex  w-full justify-center mb-[15px]">

              <div className="flex flex-row">
              <div className="flex items-center justify-center border-[1px] border-solid border-gray-300 rounded-[5px] w-[160px] py-[15px] mr-[10px]">
                  <div className="flex flex-row items-center">
                    <img src={google} alt="" className='w-[20px] h-[20px] mr-[10px]'/>
                    <h2 className='text-[14px]'>Google</h2>
                  </div>
              </div>

              <div className="flex items-center justify-center border-[1px] border-solid border-gray-300 rounded-[5px] w-[160px] py-[15px] ml-[10px]">
                  <div className="flex flex-row items-center">
                    <img src={facebook} alt="" className='w-[24px] mr-[5px]'/>
                    <h2 className='text-[14px]'>Facebook</h2>
                  </div>
              </div>
              </div>
              
            </div>
            <div className="flex flex-row w-full items-center mb-[15px]">
              <hr  className='flex-[1]'/>
              <div className="flex-[1] flex flex-row justify-center items-center">
                <p className='text-[14px]'>or with email</p>
              </div>
              <hr  className='flex-[1]'/>
            </div>


            <div className="w-full">
            <div className="sm:col-span-3 mb-4">
              <div className="mt-2">
                <input required type="email" name="identifier" placeholder='Email' value={user.identifier} id="email" autoComplete="email" className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm  ring-gray-300 placeholder:text-gray-400 ring-[1px] focus:ring-[#9d5c0d] sm:text-sm sm:leading-6"
                onChange={handleChange}
                ></input>
              </div>
            </div>

            <div className="sm:col-span-4">
              <div className="mt-2">
                <input required id="password" name="password" placeholder='Password' value={user.password} type="password" autoComplete="password" className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm  ring-gray-300 placeholder:text-gray-400 ring-[1px] focus:ring-[#9d5c0d] sm:text-sm sm:leading-6"
                onChange={handleChange}
                ></input>
              </div>
            </div>
           <div className="flex justify-end my-[10px]">
            <a href="" className='text-[14px]'>Forgot Password</a>
           </div>
           
            </div> 
            <div className="w-full mt-6 flex flex-col items-center justify-center gap-x-6">
              <button type="submit" className="rounded-md w-full bg-[#ed7534] px-24 py-2 text-sm font-semibold text-white shadow-sm duration-150 hover:bg-[#9d5c0d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleLogin}
              >Login</button>
              <div className="flex flex-row mt-[20px]">
                <p className='text-[14px] mr-[5px]'>Don't have an Account?</p>
                <p className='text-[14px] cursor-pointer text-[#ed7534]'
                onClick={() => {
                  setIsVisible(true)
                  setIsCardVisible(true)
                }}
                >Sign Up</p>
              </div>
            </div>
            </div>
          </div>
            
            
        </div>
     </div>
    </>
  )
}

export const getServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx)
  let user = null;

  if (cookies?.jwt) {
    try {
      const { data } = await axios.get('http://localhost:1337/users/me', {
        headers: {
          Authorization:
            `Bearer ${cookies.jwt}`,
          },
      });
      user = data;
    } catch (e) {
      console.log(e);
    }
  }

  if (user) {
    return {
      redirect: {
        permanent: false,
        destination: '/profile'
      }
    }
  }

  return {
    props: {}
  }
}
