"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useUserStore from "@/store/userStore";
import { loginUser } from "@/utils/authService";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

import GlimereLogo from "../../../../../public/images/Glimere-Logo.svg";
import Link from "next/link";

export default function SigninCreator() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { setAuthToken, fetchUser } = useUserStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic client-side validation
    if (!email || !password) {
      toast.error("Please enter both email and password.");
      return;
    }

    try {
      setLoading(true);
      const response = await loginUser({ email, password });

      // Save token to local storage or context
      setAuthToken(response.data.token);
      fetchUser();

      toast.success("Login successful!");

      const role = response.data.role;
      if (role === "admin" || role === "super_admin") {
        router.push("/admin");
      } else {
        router.push("/creators");
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

  return (
    <div className="relative z-[3] w-full max-w-md">
      <Card className="overflow-hidden rounded-2xl border-none bg-transparent shadow-none">
        <CardHeader className="">
          <CardTitle className="flex items-center justify-center gap-4 text-center text-2xl font-semibold text-dark">
            <GlimereLogo className={`cursor-pointer text-primary-100`} />
            Creator Login
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-sm font-semibold uppercase tracking-wide text-dark"
              >
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                className="h-12 rounded-xl border-transparent-white-300 bg-gray-50 text-dark backdrop-blur-sm transition-all duration-300 placeholder:text-dark/50 focus:bg-transparent-white-200/70"
                required
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="text-sm font-semibold uppercase tracking-wide text-dark"
              >
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="h-12 rounded-xl border-transparent-white-300 bg-gray-50 pr-12 text-dark backdrop-blur-sm transition-all duration-300 placeholder:text-dark/50 focus:bg-transparent-white-200/70"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 transform text-dark/60 transition-colors hover:text-primary-100"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
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

            <Button
              type="submit"
              disabled={loading}
              className="hover:primary-100/90 flex w-full transform items-center justify-center gap-2 rounded-xl bg-primary-100 py-4 text-lg font-bold text-light shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              {loading ? "Logging in..." : "Enter Studio"}
              <ArrowRight className="h-5 w-5" />
            </Button>

            <div className="pt-4 text-center">
              <span className="text-dark/60">
                New creator?{" "}
                <Link
                  href="/auth/creators/signup"
                  className="font-semibold text-primary-100 transition-colors hover:text-primary-100/80"
                >
                  Join Glimere
                </Link>
              </span>
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="mt-6 text-center">
        <p className="text-xs text-dark/50">
          By signing in, you agree to our{" "}
          <a href="#" className="text-primary-100 hover:underline">
            Terms
          </a>{" "}
          and{" "}
          <a href="#" className="text-primary-100 hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}
