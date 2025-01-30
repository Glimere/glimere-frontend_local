"use client"

import React, { useState } from "react";
import GlimereLogo from "../../../../public/images/glimerenew1.svg"; // Ensure the asset path is correct
import { Button } from "@/components/ui/button";
import { loginUser } from "@/utils/authService";
import useUserStore from "@/store/userStore";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { auth, googleProvider } from "@/config/firebase"; // Ensure correct paths
import { signInWithPopup } from "firebase/auth";
import googleImg from "../../../../public/images/google.png";
import facebookImg from "../../../../public/images/facebook.png";
import { Loader2 } from "lucide-react";


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
            router.push("/shoppers");
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
            setError(error instanceof Error ? error.message : "An unknown error occurred");
        }
    };
    return (
        <div
            className={`sm:flex-[1] sm:w-[50%] sm:p-[40px] ${props.isVisible ? "w-[0%] p-0 flex-[0] overflow-hidden" : "w-full"
                } flex flex-col justify-center items-center`}
        >
            <div
                className={`w-full h-full rounded-[20px] bg-transparent-white-200 flex flex-col items-center justify-center gap-[20px] sm:p-[40px] px-[30px] duration-300 ${props.isVisible ? "opacity-0" : "opacity-100"
                    }`}
            >
                <div className="flex flex-col items-center gap-[20px] w-full">
                    <div className="flex flex-col items-center gap-[20px]">
                        <div className="w-[40px] h-[40px]">
                            <GlimereLogo className="text-primary-100" />
                        </div>
                        <h1 className="font-bold text-[22px]">Welcome Back</h1>
                    </div>

                    <div className="w-full">
                        <input
                            type="email"
                            name="identifier"
                            placeholder="Email"
                            value={userDetails.identifier}
                            onChange={handleChange}
                            className="block w-full rounded-md bg-white shadow-sm border-0 py-1.5 px-4 placeholder:text-gray-400 text-gray-900"
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={userDetails.password}
                            onChange={handleChange}
                            className="block w-full rounded-md bg-white shadow-sm border-0 py-1.5 px-4 placeholder:text-gray-400 text-gray-900 mt-4"
                        />
                        <div className="flex justify-end mt-[10px]">
                            <a href="#" className="text-[14px]">
                                Forgot Password
                            </a>
                        </div>
                        <p className="text-red-700 text-[12px] mt-[5px]">{error}</p>
                    </div>

                    <div className="flex flex-col gap-[10px] w-full">
                        <Button
                            onClick={handleLogin}
                            disabled={loading}
                            className={`w-full bg-primary-100 text-white py-2 rounded-md`}
                        >
                            {loading ? (
                                <Loader2 className="animate-spin text-white" />
                            ) : (
                                <>Login</>
                            )}
                        </Button>

                        <div className="flex flex-row w-full items-center">
                            <hr className="flex-[1]" />
                            <p className="text-[14px] text-center flex-[1]">
                                or signin with
                            </p>
                            <hr className="flex-[1]" />
                        </div>
                        <div className="flex w-full justify-center mb-[15px]">
                            <div className="flex flex-row gap-[20px]">
                                <Button
                                    className="flex items-center justify-center bg-white shadow-sm text-black hover:bg-gray-100 duration-200 border-solid rounded-[5px] w-[120px] py-[10px] cursor-pointer"
                                    onClick={signInWithGoogle}
                                >
                                    <div className="flex flex-row items-center">
                                        <Image
                                            src={googleImg}
                                            alt="Google"
                                            className="w-[16px] h-[16px] mr-[10px]"
                                        />
                                        <h2 className="text-[14px] mt-1">Google</h2>
                                    </div>
                                </Button>
                                <Button className="flex items-center justify-center bg-white shadow-sm text-black hover:bg-gray-100 duration-200 border-solid rounded-[5px] w-[120px] py-[10px] cursor-pointer">
                                    <div className="flex flex-row items-center">
                                        <Image
                                            src={facebookImg}
                                            alt="Facebook"
                                            className="w-[20px] mr-[5px]"
                                        />
                                        <h2 className="text-[14px] mt-1">Facebook</h2>
                                    </div>
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="text-[14px]">
                        Don’t have an account?{" "}
                        <span
                            className="text-[#ed7534] cursor-pointer"
                            onClick={() => props.setIsVisible(true)}
                        >
                            Sign Up
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SigninPage;  