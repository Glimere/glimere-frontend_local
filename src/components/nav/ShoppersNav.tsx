"use client";

import NavbarDropdown from "@/components/nav/NavbarDropdown";
import GlimereLogo from "../../../public/images/glimerenew.svg";
import ShoppingBag from "../../../public/images/shopping-bag.svg";
import User from "../../../public/images/user.svg";
import Search from "../../../public/images/search.svg";
import Notification from "../../../public/images/notification.svg";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import useUserStore from "@/store/userStore";
import { UserDropdownMenu } from "../shoppers/UserdropdownMenu";
import { getJwt } from "@/lib/cookie";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { useJwt } from "@/hooks/useJwt";

const ShoppersNav: React.FC = () => {
  const { cart } = useCartStore();
  const { user, isAuthenticated } = useUserStore();

  const [isHydrated, setIsHydrated] = useState(false);
  const jwt = useJwt()

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    console.log("user", user);
    console.log("isAuthenticated", isAuthenticated)
 
  }, [user, isAuthenticated]);

  if (!isHydrated) return null;

  return (
    <nav className="absolute w-full h-[80px] px-[25px] sm:px-[5.75rem] sm:p-0 flex items-center">
      <div className="container mx-auto max-w-[1344px]">
        <div className="h-16 md:h-20 md:py-6 flex items-center justify-between z-20 relative">
          <div className="flex flex-row items-center justify-center">
            <Link href="/shoppers">
              <GlimereLogo className={`h-[40px] block text-primary-100`} />
            </Link>
          </div>

          <div className="flex flex-row items-center gap-[20px]">
            <div className="relative flex flex-row items-center justify-center rounded-full">
              <Link href="/shoppers/cart">
                <Search
                  className={`block hover:fill-primary-100 duration-150 mt-[4px]`}
                />
              </Link>
            </div>
            <div className="relative flex flex-row items-center justify-center rounded-full">
              <Notification
                className={`block hover:fill-primary-100 duration-150 mt-[4px]`}
              />
            </div>
            <div className="relative flex flex-row items-center justify-center rounded-full">
              {cart?.items.length === 0 || cart === null ? (
                <></>
              ) : (
                <div className="absolute top-0 right-0 bg-primary-100 rounded-full h-[10px] w-[10px]"></div>
              )}
              <Link href="/shoppers/cart">
                <ShoppingBag
                  className={`block hover:fill-primary-100 duration-150`}
                />
              </Link>
            </div>
            {isAuthenticated == false ? (
              <UserDropdownMenu>
                <div className="group cursor-pointer duration-200 relative flex flex-row items-center gap-[10px]">
                  <User
                    className={`block group-hover:fill-primary-100 duration-150`}
                  />

                  <p className="text-[16px] group-hover:text-primary-100 mt-1 font-medium">
                    Account
                  </p>
                  <ChevronDown />
                </div>
              </UserDropdownMenu>
            ) : (
              <UserDropdownMenu>
                <div className="group cursor-pointer duration-200 relative flex flex-row items-center gap-[10px]">
                  <User
                    className={`block group-hover:fill-primary-100 duration-150`}
                  />

                  <p className="text-[16px] group-hover:text-primary-100 mt-1 font-medium">
                    Hi, <span>{user?.first_name}</span>
                  </p>

                  <ChevronDown />
                </div>
              </UserDropdownMenu>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ShoppersNav;
