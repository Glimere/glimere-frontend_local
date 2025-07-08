"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { auth, googleProvider } from "@/config/firebase"; // Ensure correct paths
import useUserStore from "@/store/userStore";
import { loginUser } from "@/utils/authService";
import { signInWithPopup } from "firebase/auth";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

import facebookImg from "../../../../../public/images/facebook.png";
import GlimereLogo from "../../../../../public/images/Glimere-Logo.svg"; // Ensure the asset path is correct

import googleImg from "../../../../../public/images/google.png";

const SigninPageShoppers: React.FC = () => {
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
      if (response.data.role === "seller") {
        toast.error("Please login with a valid user account");
        return;
      } else if (
        response.data.role === "admin" ||
        response.data.role === "super_admin"
      ) {
        router.push("/admin");
      } else {
        setAuthToken(response.data.token);
        fetchUser();
        toast.success("Login successful!");
        router.push("/shoppers");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Login Error:", error);

      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
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
    <div className={`flex w-full flex-col items-center justify-center`}>
      <div
        className={`flex h-full w-full flex-col items-center justify-center gap-[20px] border border-transparent-white-300 px-[30px] sm:p-[40px]`}
      >
        <div className="flex w-full flex-col items-center gap-[20px]">
          <div className="flex flex-col items-center gap-[20px]">
            <div className="h-[40px] w-[40px]">
              <GlimereLogo className="text-primary-100" />
            </div>
            <h1 className="text-[22px] font-bold">Welcome Back</h1>
          </div>
          <form className="w-full">
            <div className="w-full space-y-6">
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-semibold uppercase tracking-wide text-dark"
                >
                  Email Address
                </Label>
                <Input
                  type="email"
                  name="identifier"
                  placeholder="your.email@example.com"
                  value={userDetails.identifier}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 bg-gray-50 px-4 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-sm font-semibold uppercase tracking-wide text-dark"
                >
                  Password
                </Label>
                <Input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={userDetails.password}
                  onChange={handleChange}
                  className="mt-4 block w-full rounded-md border-0 bg-gray-50 px-4 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="group flex cursor-pointer items-center space-x-3">
                  <Checkbox />
                  <span className="text-dark/70 transition-colors group-hover:text-dark">
                    Remember me
                  </span>
                </label>
                <a
                  href="#"
                  className="font-semibold text-primary-100 transition-colors hover:text-primary-100/80"
                >
                  Forgot password?
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
                <p className="flex-[1] text-center text-[14px]">
                  or signin with
                </p>
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
          </form>

          <div className="text-[14px]">
            Don’t have an account?{" "}
            <span className="cursor-pointer text-[#ed7534]">Sign Up</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninPageShoppers;
