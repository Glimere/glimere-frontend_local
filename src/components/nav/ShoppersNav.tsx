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
import { CheckCircle, ChevronDown, XCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useJwt } from "@/hooks/useJwt";

import { NotificationDropdown } from "../shoppers/NotificationDropdown";
import { Input } from "../ui/input";

interface Notification {
  id: string;
  heading: string;
  message: string;
  type: "warning" | "info" | "success" | "error"; // Notification types
  isRead: boolean; // Flag to check if notification is new
}

const notifications: Notification[] = [
  {
    id: "1",
    heading: "New Order Placed",
    message: "You have a new order from John Doe.",
    type: "success",
    isRead: true,
  },
  {
    id: "2",
    heading: "Payment Failed",
    message: "Your payment attempt was unsuccessful.",
    type: "error",
    isRead: true,
  },
  {
    id: "3",
    heading: "Discount Offer",
    message: "Special discount on selected items just for you!",
    type: "info",
    isRead: false,
  },
  {
    id: "4",
    heading: "Product Back in Stock",
    message: "The item you wanted is now back in stock.",
    type: "success",
    isRead: false,
  },
];

const ShoppersNav: React.FC = () => {
  const { cart } = useCartStore();
  const { user, isAuthenticated } = useUserStore();

  const [isHydrated, setIsHydrated] = useState(false);
  const jwt = useJwt();

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    console.log("user", user);
    console.log("isAuthenticated", isAuthenticated);
  }, [user, isAuthenticated]);

  if (!isHydrated) return null;

  return (
    <nav className="absolute w-full h-[80px] px-[25px] sm:px-[5.75rem] sm:p-0 flex items-center">
      <div className="container mx-auto max-w-[1344px]">
        <div className="h-16 md:h-20 md:py-6 flex items-center justify-between z-20 relative">
          <div className="flex flex-row items-center justify-center">
            <Link href="/shoppers">
              <GlimereLogo
                className={`h-[40px] block text-primary-100 cursor-pointer`}
              />
            </Link>
          </div>

          <div className="flex flex-row items-center gap-[20px]">
            <div className="relative flex flex-row items-center justify-between rounded-full gap-[10px] px-[20px] py-[7px] bg-transparent-white-300">
              <Search
                className={`block hover:fill-primary-100 duration-150 cursor-pointer`}
              />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none"
              ></input>
            </div>
            <div className="relative flex flex-row items-center justify-center rounded-full">
              <NotificationDropdown>
                <div>
                  <Notification
                    className={`block hover:fill-primary-100 duration-150 mt-[4px]`}
                  />
                  {/* Add a dot to indicate new notifications */}
                  {notifications.some((notif) => notif.isRead) && (
                    <span className="absolute top-0 right-0 block w-2.5 h-2.5 bg-red-500 rounded-full"></span>
                  )}
                </div>
              </NotificationDropdown>
            </div>

            <div className="relative flex flex-row items-center justify-center rounded-full">
              {cart?.items.length === 0 || cart === null ? (
                <></>
              ) : (
                <div className="absolute top-0 right-0 bg-primary-100 rounded-full h-[10px] w-[10px]"></div>
              )}
              <Link href="/shoppers/cart">
                <ShoppingBag
                  className={`block hover:fill-primary-100 duration-150 cursor-pointer`}
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
