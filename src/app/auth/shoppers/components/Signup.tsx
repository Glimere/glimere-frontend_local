"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { registerUser } from "@/utils/authService";
import { Eye, EyeClosed } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

import GlimereLogo from "../../../../../public/images/Glimere-Logo.svg";

const SignupPage: React.FC = () => {
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
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const router = useRouter();

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
        toast.error("Passwords do not match");
        return;
      }

      if (
        registerUserDetails.firstname &&
        registerUserDetails.lastname &&
        registerUserDetails.email &&
        registerUserDetails.password
      ) {
        await registerUser(data);
        toast.success("Account created successfully!");
        // Optionally reset form
        setregisterUserDetailsDetails(initialregisterUserDetails);
        setConfirmPassword("");
        router.push("/auth/shoppers/login");
      } else {
        toast.error("Please fill all required fields");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
        toast.error(error.message);
      } else {
        setError("An unknown error occurred");
        toast.error("An unknown error occurred");
      }
    }
  };

  return (
    <Card
      className={`flex h-full w-full flex-col items-center justify-center gap-[20px] rounded-[20px] bg-transparent-white-300 px-[30px] backdrop-blur-md duration-300 sm:p-[40px]`}
    >
      <div className="flex w-full flex-col items-center gap-[20px]">
        <div className="flex flex-col items-center gap-[20px]">
          <div className="h-[40px] w-[40px]">
            <GlimereLogo className="text-primary-100" />
          </div>
          <h1 className="text-[22px] font-bold">Create an Account</h1>
        </div>

        <div className="flex w-full flex-col gap-[10px]">
          <div className="flex w-full flex-row">
            <div className="mr-5 flex-[1] sm:col-span-3">
              <div className="">
                <Input
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
                <Input
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
              <Input
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
              <Input
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
            <div className="relative">
              <Input
                required
                name="password"
                value={registerUserDetails.password}
                placeholder="New Password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                className="block w-full rounded-md border-0 bg-white px-4 py-1.5 pr-10 text-black shadow-sm duration-200 placeholder:text-gray-400 hover:bg-gray-100 focus:ring-[#9d5c0d] sm:text-sm sm:leading-6"
                onChange={handleUserChange}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-[21px] -translate-y-1/2 scale-75 text-sm text-gray-500"
              >
                {showPassword ? <EyeClosed /> : <Eye />}
              </button>
            </div>
          </div>

          <div className="sm:col-span-4">
            <div className="relative">
              <Input
                required
                name="confirmPassword"
                value={confirmPassword}
                placeholder="Confirm Password"
                type={showConfirmPassword ? "text" : "password"}
                autoComplete="new-password"
                className="block w-full rounded-md border-0 bg-white px-4 py-1.5 pr-10 text-black shadow-sm duration-200 placeholder:text-gray-400 hover:bg-gray-100 focus:ring-[#9d5c0d] sm:text-sm sm:leading-6"
                onChange={handleConfirmPassword}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-2 top-[21px] -translate-y-1/2 scale-75 text-sm text-gray-500"
              >
                {showConfirmPassword ? <EyeClosed /> : <Eye />}
              </button>
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
            <p className="cursor-pointer text-[14px] text-[#ed7534]">Sign In</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SignupPage;
