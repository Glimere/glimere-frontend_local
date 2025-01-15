import React from "react";
import Image from "next/image";
import GlimereLogo from "../../../../public/images/glimerenew1.svg"; // Ensure the asset path is correct
import { Button } from "@/components/ui/button";

interface RegisterUser {
  firstname: string;
  lastname: string;
  phone_number: string;
  email: string;
  password: string;
}

interface SignupPageProps {
  isVisible: boolean;
  registerUser: RegisterUser;
  confirmPassword: string;
  error: string;
  handleUserChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleConfirmPassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  signUp: () => void;
  setIsVisible: (isVisible: boolean) => void;
}

export default function SignupPage(props: SignupPageProps) {
  return (
    <div
      className={`w-full h-full rounded-[20px] bg-transparent-white-200 flex flex-col items-center justify-center gap-[20px] sm:p-[40px] px-[30px] duration-300 ${
        props.isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-col items-center gap-[20px] w-full">
        <div className="flex flex-col items-center gap-[20px]">
        <div className="w-[40px] h-[40px]">
          <GlimereLogo className="text-primary-100" />
        </div>
        <h1 className="font-bold text-[22px]">Create an Account</h1>
      </div>

      <div className="w-full flex flex-col gap-[20px]">
        <div className="w-full flex flex-row">
          <div className="sm:col-span-3 mr-5 flex-[1]">
            <div className="">
              <input
                required
                type="text"
                value={props.registerUser.firstname}
                name="firstname"
                placeholder="First Name"
                autoComplete="name"
                className="block w-full rounded-md border-0 py-1.5 px-4 shadow-sm placeholder:text-gray-400 focus:ring-[#9d5c0d] sm:text-sm sm:leading-6 bg-white text-black hover:bg-gray-100 duration-200"
                onChange={props.handleUserChange}
              />
            </div>
          </div>

          <div className="sm:col-span-3 flex-[1]">
            <div className="">
              <input
                required
                type="text"
                value={props.registerUser.lastname}
                name="lastname"
                placeholder="Last Name"
                autoComplete="name"
                className="block w-full rounded-md border-0 py-1.5 px-4 shadow-sm placeholder:text-gray-400 focus:ring-[#9d5c0d] sm:text-sm sm:leading-6 bg-white text-black hover:bg-gray-100 duration-200"
                onChange={props.handleUserChange}
              />
            </div>
          </div>
        </div>

        <div className="sm:col-span-4">
          <div className="">
            <input
              required
              name="email"
              value={props.registerUser.email}
              placeholder="Email"
              type="email"
              autoComplete="email"
              className="block w-full rounded-md border-0 py-1.5 px-4 shadow-sm placeholder:text-gray-400 focus:ring-[#9d5c0d] sm:text-sm sm:leading-6 bg-white text-black hover:bg-gray-100 duration-200"
              onChange={props.handleUserChange}
            />
          </div>
        </div>

        <div className="sm:col-span-4">
          <div className="">
            <input
              required
              name="phone_number"
              value={props.registerUser.phone_number}
              placeholder="Phone"
              type="phone_number"
              autoComplete="phone_number"
              className="block w-full rounded-md border-0 py-1.5 px-4 shadow-sm placeholder:text-gray-400 focus:ring-[#9d5c0d] sm:text-sm sm:leading-6 bg-white text-black hover:bg-gray-100 duration-200"
              onChange={props.handleUserChange}
            />
          </div>
        </div>

        <div className="sm:col-span-4">
          <div className="">
            <input
              required
              name="password"
              value={props.registerUser.password}
              placeholder="New Password"
              type="password"
              autoComplete="password"
              className="block w-full rounded-md border-0 py-1.5 px-4 shadow-sm placeholder:text-gray-400 focus:ring-[#9d5c0d] sm:text-sm sm:leading-6 bg-white text-black hover:bg-gray-100 duration-200"
              onChange={props.handleUserChange}
            />
          </div>
        </div>

        <div className="sm:col-span-4">
          <div className="">
            <input
              required
              name="confirmPassword"
              value={props.confirmPassword}
              placeholder="Confirm Password"
              type="password"
              autoComplete="confirm-password"
              className="block w-full rounded-md border-0 py-1.5 px-4 shadow-sm placeholder:text-gray-400 focus:ring-[#9d5c0d] sm:text-sm sm:leading-6 bg-white text-black hover:bg-gray-100 duration-200"
              onChange={props.handleConfirmPassword}
            />
            <p className="text-red-700 text-[12px] mt-[5px]">{props.error}</p>
          </div>
        </div>

      </div>

      <div className="w-full flex flex-col items-center justify-center gap-x-6">
        <Button
          type="submit"
          className="rounded-md w-full bg-primary-100  px-24 py-2 text-sm font-semibold text-white shadow-sm duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={props.signUp}
        >
          Sign Up
        </Button>
        <div className="flex flex-row mt-[20px]">
          <p className="text-[14px] mr-[5px]">Already have an Account?</p>
          <p
            className="text-[14px] text-[#ed7534] cursor-pointer"
            onClick={() => {
              props.setIsVisible(false);
            }}
          >
            Sign In
          </p>
        </div>
      </div>
      </div>
      
    </div>
  );
}
