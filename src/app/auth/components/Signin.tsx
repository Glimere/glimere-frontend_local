"use client";

import { Button } from "@/components/ui/button";
import { auth, googleProvider } from "@/config/firebase"; // Ensure correct paths
import useUserStore from "@/store/userStore";
import { loginUser } from "@/utils/authService";
import { signInWithPopup } from "firebase/auth";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import facebookImg from "../../../../public/images/facebook.png";
import GlimereLogo from "../../../../public/images/Glimere-Logo.svg"; // Ensure the asset path is correct

import googleImg from "../../../../public/images/google.png";
import { Card } from "@/components/ui/card";

interface SigninPageProps {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}

const SigninPage: React.FC<SigninPageProps> = (props: SigninPageProps) => {
  const initialUser = { identifier: "", password: "" };
  const [userDetails, setUserDetails] = useState(initialUser);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { setAuthToken, fetchUser } = useUserStore();
  const [error, setError] = useState("");

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setUserDetails((currentUser) => ({ ...currentUser, [name]: value }));
  };

  const handleLogin = async () => {
    const data = {
      email: userDetails.identifier,
      password: userDetails.password,
    };

    try {
      setLoading(true);
      const response = await loginUser(data);
      setAuthToken(response.data.token);
      fetchUser();
      if (
        response.data.role === "admin" ||
        response.data.role === "super_admin"
      ) router.push("/admin");
      else if (response.data.role === "creator") router.push("/creators");
      else router.push("/shoppers");
      setLoading(false);
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      if (auth.currentUser) {
        localStorage.setItem("hasFetchedCartData", "false");
        router.push("/shoppers");
      }
    } catch (error: unknown) {
      setError(
        error instanceof Error ? error.message : "An unknown error occurred",
      );
    }
  };
  return (
    <div
      className={`sm:w-[50%] sm:flex-[1] sm:p-[40px] ${
        props.isVisible ? "w-[0%] flex-[0] overflow-hidden p-0" : "w-full"
      } flex flex-col items-center justify-center`}
    >
      <Card
        className={`flex h-full w-full flex-col items-center justify-center gap-[20px] backdrop-blur-xl bg-transparent-white-200/80 border border-transparent-white-300 shadow-2xl rounded-2xl overflow-hidden px-[30px] duration-300 sm:p-[40px] ${
          props.isVisible ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="flex w-full flex-col items-center gap-[20px]">
          <div className="flex flex-col items-center gap-[20px]">
            <div className="h-[40px] w-[40px]">
              <GlimereLogo className="text-primary-100" />
            </div>
            <h1 className="text-[22px] font-bold">Welcome Back</h1>
          </div>

          <div className="w-full">
            <input
              type="email"
              name="identifier"
              placeholder="Email"
              value={userDetails.identifier}
              onChange={handleChange}
              className="block w-full rounded-md border-0 bg-white px-4 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={userDetails.password}
              onChange={handleChange}
              className="mt-4 block w-full rounded-md border-0 bg-white px-4 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400"
            />
            <div className="mt-[10px] flex justify-end">
              <a href="#" className="text-[14px]">
                Forgot Password
              </a>
            </div>
            <p className="mt-[5px] text-[12px] text-red-700">{error}</p>
          </div>

          <div className="flex w-full flex-col gap-[10px]">
            <Button
              onClick={handleLogin}
              disabled={loading}
              className={`w-full rounded-md bg-primary-100 py-2 text-white`}
            >
              {loading ? (
                <Loader2 className="animate-spin text-white" />
              ) : (
                <>Login</>
              )}
            </Button>

            <div className="flex w-full flex-row items-center">
              <hr className="flex-[1]" />
              <p className="flex-[1] text-center text-[14px]">or signin with</p>
              <hr className="flex-[1]" />
            </div>
            <div className="mb-[15px] flex w-full justify-center">
              <div className="flex flex-row gap-[20px]">
                <Button
                  className="flex w-[120px] cursor-pointer items-center justify-center rounded-[5px] border-solid bg-white py-[10px] text-black shadow-sm duration-200 hover:bg-gray-100"
                  onClick={signInWithGoogle}
                >
                  <div className="flex flex-row items-center">
                    <Image
                      src={googleImg}
                      alt="Google"
                      className="mr-[10px] h-[16px] w-[16px]"
                    />
                    <h2 className="mt-1 text-[14px]">Google</h2>
                  </div>
                </Button>
                <Button className="flex w-[120px] cursor-pointer items-center justify-center rounded-[5px] border-solid bg-white py-[10px] text-black shadow-sm duration-200 hover:bg-gray-100">
                  <div className="flex flex-row items-center">
                    <Image
                      src={facebookImg}
                      alt="Facebook"
                      className="mr-[5px] w-[20px]"
                    />
                    <h2 className="mt-1 text-[14px]">Facebook</h2>
                  </div>
                </Button>
              </div>
            </div>
          </div>

          <div className="text-[14px]">
            Don’t have an account?{" "}
            <span
              className="cursor-pointer text-[#ed7534]"
              onClick={() => props.setIsVisible(true)}
            >
              Sign Up
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SigninPage;
