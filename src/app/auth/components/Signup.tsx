"use client";

import { Button } from "@/components/ui/button";
import { registerUser } from "@/utils/authService";
import React, { useState } from "react";

import GlimereLogo from "../../../../public/images/Glimere-Logo.svg"; // Ensure the asset path is correct

interface SignupPageProps {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}

const SignupPage: React.FC<SignupPageProps> = (props: SignupPageProps) => {
  const initialregisterUserDetails = {
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    phone_number: "",
    password: "",
  };
  const [registerUserDetails, setregisterUserDetailsDetails] = useState(
    initialregisterUserDetails,
  );
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [role] = useState("user");

  const handleUserChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setregisterUserDetailsDetails((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  const handleConfirmPassword = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setConfirmPassword(value);
    setError(
      registerUserDetails.password !== value ? "Passwords do not match" : "",
    );
  };

  const signUp = async () => {
    const data = {
      first_name: registerUserDetails.firstname,
      last_name: registerUserDetails.lastname,
      email: registerUserDetails.email.toLowerCase(),
      password: registerUserDetails.password,
      phone_number: registerUserDetails.phone_number,
      role: role,
    };
    try {
      if (registerUserDetails.password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }

      if (
        registerUserDetails.firstname &&
        registerUserDetails.lastname &&
        registerUserDetails.email &&
        registerUserDetails.password
      ) {
        const response = await registerUser(data);
        if (response.data) {
          props.setIsVisible(false);
        }
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-[20px] rounded-[20px] bg-transparent-white-200 px-[30px] duration-300 sm:p-[40px] ${
        props.isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex w-full flex-col items-center gap-[20px]">
        <div className="flex flex-col items-center gap-[20px]">
          <div className="h-[40px] w-[40px]">
            <GlimereLogo className="text-primary-100" />
          </div>
          <h1 className="text-[22px] font-bold">Create an Account</h1>
        </div>

        <div className="flex w-full flex-col gap-[20px]">
          <div className="flex w-full flex-row">
            <div className="mr-5 flex-[1] sm:col-span-3">
              <div className="">
                <input
                  required
                  type="text"
                  value={registerUserDetails.firstname}
                  name="firstname"
                  placeholder="First Name"
                  autoComplete="name"
                  className="block w-full rounded-md border-0 bg-white px-4 py-1.5 text-black shadow-sm duration-200 placeholder:text-gray-400 hover:bg-gray-100 focus:ring-[#9d5c0d] sm:text-sm sm:leading-6"
                  onChange={handleUserChange}
                />
              </div>
            </div>

            <div className="flex-[1] sm:col-span-3">
              <div className="">
                <input
                  required
                  type="text"
                  value={registerUserDetails.lastname}
                  name="lastname"
                  placeholder="Last Name"
                  autoComplete="name"
                  className="block w-full rounded-md border-0 bg-white px-4 py-1.5 text-black shadow-sm duration-200 placeholder:text-gray-400 hover:bg-gray-100 focus:ring-[#9d5c0d] sm:text-sm sm:leading-6"
                  onChange={handleUserChange}
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-4">
            <div className="">
              <input
                required
                name="email"
                value={registerUserDetails.email}
                placeholder="Email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 bg-white px-4 py-1.5 text-black shadow-sm duration-200 placeholder:text-gray-400 hover:bg-gray-100 focus:ring-[#9d5c0d] sm:text-sm sm:leading-6"
                onChange={handleUserChange}
              />
            </div>
          </div>

          <div className="sm:col-span-4">
            <div className="">
              <input
                required
                name="phone_number"
                value={registerUserDetails.phone_number}
                placeholder="Phone"
                type="phone_number"
                autoComplete="phone_number"
                className="block w-full rounded-md border-0 bg-white px-4 py-1.5 text-black shadow-sm duration-200 placeholder:text-gray-400 hover:bg-gray-100 focus:ring-[#9d5c0d] sm:text-sm sm:leading-6"
                onChange={handleUserChange}
              />
            </div>
          </div>

          <div className="sm:col-span-4">
            <div className="">
              <input
                required
                name="password"
                value={registerUserDetails.password}
                placeholder="New Password"
                type="password"
                autoComplete="password"
                className="block w-full rounded-md border-0 bg-white px-4 py-1.5 text-black shadow-sm duration-200 placeholder:text-gray-400 hover:bg-gray-100 focus:ring-[#9d5c0d] sm:text-sm sm:leading-6"
                onChange={handleUserChange}
              />
            </div>
          </div>

          <div className="sm:col-span-4">
            <div className="">
              <input
                required
                name="confirmPassword"
                value={confirmPassword}
                placeholder="Confirm Password"
                type="password"
                autoComplete="confirm-password"
                className="block w-full rounded-md border-0 bg-white px-4 py-1.5 text-black shadow-sm duration-200 placeholder:text-gray-400 hover:bg-gray-100 focus:ring-[#9d5c0d] sm:text-sm sm:leading-6"
                onChange={handleConfirmPassword}
              />
              <p className="mt-[5px] text-[12px] text-red-700">{error}</p>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-x-6">
          <Button
            type="submit"
            className="w-full rounded-md bg-primary-100 px-24 py-2 text-sm font-semibold text-white shadow-sm duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={signUp}
          >
            Sign Up
          </Button>
          <div className="mt-[20px] flex flex-row">
            <p className="mr-[5px] text-[14px]">Already have an Account?</p>
            <p
              className="cursor-pointer text-[14px] text-[#ed7534]"
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
};

export default SignupPage;
