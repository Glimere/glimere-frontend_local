import React from 'react'
import glimerenew1 from '../assets/images/glimerenew1.svg'


export default function Signup(props) {
    return (
        <>
        

            <div className={`w-full flex flex-col items-center px-[40px] duration-300 ${props.isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex flex-col items-center ">
                    <img src={glimerenew1} alt="" className='w-[50px] mb-[20px]' />
                    <h1 className=' font-bold text-[22px] mb-[30px]'>Create an Account</h1>

                </div>




                <div className="w-full">
                    <div className="w-full flex flex-row">
                        <div className="sm:col-span-3 mb-4 mr-5 flex-[1]">
                            <div className="mt-2">
                                <input required type="text" value={props.registerUser.firstname} name="firstname" placeholder='First Name' autoComplete="name" className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm  ring-black placeholder:text-gray-400 ring-[1px] focus:ring-[#9d5c0d] sm:text-sm sm:leading-6 bg-[#FFF7E9]"
                                    onChange={props.handleUserChange}
                                ></input>
                            </div>
                        </div>

                        <div className="sm:col-span-3 mb-4 flex-[1]">
                            <div className="mt-2">
                                <input required type="text" value={props.registerUser.lastname} name="lastname" placeholder='Last Name' autoComplete="name" className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm  ring-black placeholder:text-gray-400 ring-[1px] focus:ring-[#9d5c0d] sm:text-sm sm:leading-6 bg-[#FFF7E9]"
                                    onChange={props.handleUserChange}
                                ></input>
                            </div>
                        </div>
                    </div>

                    <div className="sm:col-span-4 mb-[22px]">
                        <div className="mt-2">
                            <input required name="email" value={props.registerUser.email} placeholder='Email' type="email" autoComplete="email" className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm  ring-black placeholder:text-gray-400 ring-[1px] focus:ring-[#9d5c0d] sm:text-sm sm:leading-6 bg-[#FFF7E9]"
                                onChange={props.handleUserChange}
                            ></input>
                        </div>
                    </div>

                    <div className="sm:col-span-4 mb-[22px]">
                        <div className="mt-2">
                            <input required name="password" value={props.registerUser.password} placeholder='New Password' type="password" autoComplete="password" className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm  ring-black placeholder:text-gray-400 ring-[1px] focus:ring-[#9d5c0d] sm:text-sm sm:leading-6 bg-[#FFF7E9]"
                                onChange={props.handleUserChange}
                            ></input>
                        </div>
                    </div>

                    <div className="sm:col-span-4 mb-[22px]">
                        <div className="mt-2">
                            <input required name="confirmPassword"
                                value={props.confirmPassword}
                                placeholder='Confirm Password' type="password" autoComplete="confirm-password" className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm  ring-black placeholder:text-gray-400 ring-[1px] focus:ring-[#9d5c0d] sm:text-sm sm:leading-6 bg-[#FFF7E9]"
                                onChange={props.handleConfirmPassword}
                            ></input>
                            <p className=' text-red-700 text-[12px] mt-[5px]'>{props.error}</p>
                        </div>
                    </div>

                    <div className="flex justify-end my-[10px]">
                        <a href="" className='text-[14px]'>Forgot Password</a>
                    </div>

                </div>
                <div className="w-full mt-6 flex flex-col items-center justify-center gap-x-6">
                    <button type="submit" className="rounded-md w-full bg-primary-100 px-24 py-2 text-sm font-semibold text-white shadow-sm duration-150 hover:bg-[#9d5c0d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={props.signUp}
                    >Sign Up</button>
                    <div className="flex flex-row mt-[20px]">
                        <p className='text-[14px] mr-[5px]'>Already have an Account?</p>
                        <p className='text-[14px] text-[#ed7534] cursor-pointer'
                            onClick={() => {
                                props.setIsVisible(false)
                                // setIsCardVisible(false)
                            }}
                        >Sign In</p>
                    </div>
                </div>
            </div>
        </>
    )
}
