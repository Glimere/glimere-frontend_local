"use client";

import { useState } from "react";

import SignupPage from "./components/Signup";
import SigninPage from "./components/Signin";


export default function AuthPage() {


  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="w-full h-[100vh] z-[3]">
      <div
        className={`absolute h-full p-6 sm:flex hidden bg-cover bg-center bg-no-repeat z-10 w-[50%] duration-500 ease-in-out card ${isVisible ? "ml-[50%]" : "mr-[50%]"
          }`}
      ></div>
      <div className="w-full h-full flex flex-row lg:px-[6.8rem]">
        {/* Signup Section */}
        <div
          className={`sm:flex-[1] sm:w-[50%] sm:p-[40px] ${isVisible ? "w-full" : "overflow-hidden w-[0%] p-0 flex-[0]"
            } flex flex-col justify-center items-center`}
        >
          <SignupPage
            isVisible={isVisible}
            setIsVisible={setIsVisible}
          />
        </div>

        {/* Login Section */}
        <SigninPage
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        />
      </div>
    </div>
  );
}
