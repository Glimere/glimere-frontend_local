import React, { useState, useEffect } from 'react'
import { auth, db } from '../config/firebase.js'
import { doc, setDoc, getDoc } from "firebase/firestore";
import { googleProvider } from '../config/firebase.js'
import facebook from '../assets/images/facebook.png'
import glimerenew1 from '../assets/images/glimerenew1.svg'
import google from '../assets/images/google.png'
import loginImg from "../assets/images/login-img.jpg"
import axios from 'axios'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import { constants } from '../global-components/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, loginSuccess, fetchUsers } from '../slice/users/userSlice'
import Signup from './Signup'
import nookies from 'nookies'
import { useLocation } from 'react-router-dom'
import { fetchApparels } from '../slice/apparels/apparelSlice.js'
import { fetchAds } from '../slice/ads/adSlice.js'
import { fetchCarousels } from '../slice/carousel/carouselSlice.js'
import { fetchBrands } from '../slice/brand/brandSlice.js'
import { fetchCategory } from '../slice/main-category/mainCategorySlice.js'
import { fetchSubcategory } from '../slice/sub-category/subCategorySlice.js'
import { fetchSize } from '../slice/size/sizeSlice.js'
import { fetchColor } from '../slice/colors/colorSlice.js'
import { fetchApparelType } from '../slice/apparel-type/apparelTypeSlice.js'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'



export default function Login() {

  const location = useLocation()
  const navigate = useNavigate();
  const dispatch = useDispatch()

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
  const [authType, setAuthType] = useState(location.state)
  const [isVisible, setIsVisible] = useState(authType === "signin" ? true : false)
  const [isCardVisible, setIsCardVisible] = useState(false)
  const [user, setUser] = useState(initialUser)
  const [registerUser, setRegisterUser] = useState(initialRegisterUser)
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState("")
  const [role, setRole] = useState("seller")



  const handleChange = ({ target }) => {
    const { name, value } = target
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value
    }))
    console.log('user', user)
  }


  const handleLogin = async () => {


    const url = `${constants.url}/api/auth/local`
    try {
      if (user.identifier && user.password) {
        await signInWithEmailAndPassword(auth, user.identifier, user.password)
        
        .then((creds) => {
                getDoc(doc(db, "users", creds.user.uid)).then((docSnap) => {
                    if (docSnap.exists()) {
                        switch (docSnap.data().role) {
                            case "seller":
                              console.log("seller");
                                navigate("/market");
                                break;
                            case "user":
                             console.log("user");
                                navigate("/shop");
                                break;
                        }
                    }
                });
            })

      }
    } catch (error) {
      console.log('error', error)
      toast.error(error.message, {
        hideProgressBar: true
      })

    }
  }

  const handleUserChange = ({ target }) => {
    const { name, value } = target
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

    try {
      if (registerUser.password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }

      const data = {
        blocked: false,
        confirmed: true,
        username: registerUser.firstname + " " + registerUser.lastname,
        firstname: registerUser.firstname,
        lastname: registerUser.lastname,
        email: registerUser.email.toLowerCase(),
        password: registerUser.password,
        role: role
      }

      // const url = `${constants.url}/api/auth/local/register`
      // console.log("url", url)

      if (registerUser.firstname && registerUser.lastname && registerUser.email && registerUser.password) {
        await createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((creds) =>
                setDoc(doc(db, "users", creds.user.uid), { role: role }),
            )
            .then(() => navigate("/shop"))
      }


      setRegisterUser({
        username: '',
        firstname: '',
        lastname: '',
        email: '',
        password: ''
      })

      setConfirmPassword('')

      setIsVisible(false)
    } catch (error) {
      setError(error.message)
      console.log(error.message)
    }


  }

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
      if (auth.currentUser != null) {
        // dispatch(loginSuccess(res.data))
        // dispatch(fetchUsers(res.data.jwt))
        // dispatch(fetchApparels())
        // dispatch(fetchAds())
        // dispatch(fetchCarousels())
        // dispatch(fetchBrands())
        // dispatch(fetchCategory())
        // dispatch(fetchSubcategory())
        // dispatch(fetchSize())
        // dispatch(fetchColor())
        // dispatch(fetchApparelType())

        localStorage.setItem("hasFetchedCartData", "false");
        navigate('/shop'); // Replace '/' with the actual route of your homepage
      }
    } catch (error) {
      setError(error)
      console.error(error)
    }
  }

  return (
    <>
      <div className="w-full h-[100vh]">
        <div className={`absolute h-full sm:flex hidden bg-cover bg-center bg-no-repeat z-10 w-[50%] bg-primary-100 duration-700 ease-in-out card ${isVisible ? 'ml-[50%]' : 'mr-[50%]'}`}
          style={{ backgroundImage: `url(${loginImg})` }}
        ></div>
        <div className="w-full h-full flex">

          <div className={`sm:flex-[1] sm:w-[50%] sm:p-[50px] ${isVisible ? "w-full" : "overflow-hidden w-[0%] p-0 flex-[0]"} flex flex-col justify-center`}>
            <Signup
              isVisible={isVisible}
              registerUser={registerUser}
              handleUserChange={handleUserChange}
              confirmPassword={confirmPassword}
              handleConfirmPassword={handleConfirmPassword}
              signUp={signUp}
              setIsVisible={setIsVisible}
              error={[error]}
              authType={authType}
            />
          </div>




          <div className={`sm:flex-[1] sm:w-[50%] sm:p-[50px] ${isVisible ? "w-[0%] p-0 flex-[0] overflow-hidden" : "w-full"} flex flex-col justify-center`}>
            <div className={`w-full flex flex-col items-center sm:px-[40px] px-[30px] duration-300 ${isVisible ? 'opacity-0' : 'opacity-100'}`}>
              <div className="flex flex-col items-center ">
                <img src={glimerenew1} alt="" className='w-[50px] mb-[20px]' />
                <h1 className=' font-bold text-[22px] '>Welcome Back</h1>
                <p className='mb-[15px] text-[14px]'>Sign in with</p>
              </div>
              <div className="flex  w-full justify-center mb-[15px]">

                <div className="flex flex-row gap-[20px]">

                  <div className="flex items-center justify-center border-[1px] bg-[#FFF7E9] border-solid border-black rounded-[5px] w-[120px] py-[10px] cursor-pointer"
                    onClick={signInWithGoogle}
                  >
                    <div className="flex flex-row items-center">
                      <img src={google} alt="" className='w-[20px] h-[20px] mr-[10px]' />
                      <h2 className='text-[14px]'>Google</h2>
                    </div>
                  </div>

                  <div className="flex items-center justify-center border-[1px] bg-[#FFF7E9] border-solid border-black rounded-[5px] w-[120px] py-[10px] cursor-pointer">
                    <div className="flex flex-row items-center">
                      <img src={facebook} alt="" className='w-[24px] mr-[5px]' />
                      <h2 className='text-[14px]'>Facebook</h2>
                    </div>
                  </div>
                </div>

              </div>
              <div className="flex flex-row w-full items-center mb-[15px]">
                <hr className='flex-[1]' />
                <div className="flex-[1] flex flex-row justify-center items-center">
                  <p className='text-[14px]'>or with email</p>
                </div>
                <hr className='flex-[1]' />
              </div>


              <div className="w-full">
                <div className="sm:col-span-3 mb-4">
                  <div className="mt-2">
                    <input required type="email" name="identifier" placeholder='Email' value={user.identifier} id="email" autoComplete="email" className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm  ring-black placeholder:text-gray-400 ring-[1px] focus:border-primary-100 focus:ring-primary-100 sm:text-sm sm:leading-6 bg-[#FFF7E9]"
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <div className="mt-2">
                    <input required id="password" name="password" placeholder='Password' value={user.password} type="password" autoComplete="password" className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm  ring-black placeholder:text-gray-400 ring-[1px] focus:border-primary-100 focus:ring-primary-100 sm:text-sm sm:leading-6 bg-[#FFF7E9]"
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>
                <div className="flex justify-end my-[10px]">
                  <a href="" className='text-[14px]'>Forgot Password</a>
                </div>

              </div>
              <div className="w-full mt-6 flex flex-col items-center justify-center gap-x-6">
                <button type="submit" className="rounded-md w-full bg-primary-100 px-24 py-2 text-sm font-semibold text-white-100 shadow-sm duration-150 hover:bg-[#9d5c0d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={handleLogin}
                >Login</button>
                <div className="flex flex-row mt-[20px]">
                  <p className='text-[14px] mr-[5px]'>Don&rsquo;t have an Account?</p>
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

// export const getServerSideProps = async (ctx) => {
//   const cookies = nookies.get(ctx)
//   let user = null;

//   if (cookies?.jwt) {
//     try {
//       const { data } = await axios.get('http://localhost:1337/users/me', {
//         headers: {
//           Authorization:
//             `Bearer ${cookies.jwt}`,
//         },
//       });
//       user = data;
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   if (user) {
//     return {
//       redirect: {
//         permanent: false,
//         destination: '/profile'
//       }
//     }
//   }

//   return {
//     props: {}
//   }
// }
