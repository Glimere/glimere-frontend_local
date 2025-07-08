"use client";

import { useCartStore } from "@/store/cartStore";
import useNotificationStore from "@/store/notificationStore";
import useUserStore from "@/store/userStore";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import GlimereLogo from "../../../public/images/Glimere-Logo.svg";
import Notification from "../../../public/images/notification.svg";
import Search from "../../../public/images/search.svg";
import ShoppingBag from "../../../public/images/shopping-bag.svg";
import User from "../../../public/images/user.svg";
import { NotificationDropdown } from "../shoppers/NotificationDropdown";
import { UserDropdownMenu } from "../shoppers/UserdropdownMenu";

interface Notification {
  id: string;
  heading: string;
  message: string;
  type: "warning" | "info" | "success" | "error"; // Notification types
  isRead: boolean;
}

const ALLOWED_SEARCH_ROUTES = ["/shoppers/:id"];

const ShoppersNav: React.FC = () => {
  const { cart } = useCartStore();
  const { user, isAuthenticated } = useUserStore();
  const pathname = usePathname();

  const [isHydrated, setIsHydrated] = useState(false);

  const { notifications } = useNotificationStore();

  const showSearch = ALLOWED_SEARCH_ROUTES.includes(pathname);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    console.log("user", user);
    console.log("isAuthenticated", isAuthenticated);
  }, [user, isAuthenticated]);

  if (!isHydrated) return null;

  return (
    <nav className="absolute z-[1000] mt-3 flex w-full flex-col items-center px-[25px] sm:mt-0 sm:h-[80px] sm:p-0 sm:px-[5.75rem]">
      <div className="container mx-auto max-w-[1344px] rounded-full bg-transparent-white-100 sm:bg-transparent px-3 backdrop-blur-md sm:backdrop-blur-none sm:rounded-none sm:px-0">
        <div className="relative z-20 flex h-16 items-center justify-between md:h-20 md:py-6">
          <div className="flex flex-row items-center justify-center">
            <Link href="/shoppers">
              <GlimereLogo className={`cursor-pointer text-primary-100`} />
            </Link>
          </div>

          <div className="flex flex-row items-center gap-[20px]">
            <div className="relative hidden flex-row items-center justify-between gap-[10px] rounded-full bg-transparent-white-300 px-[20px] py-[7px] backdrop-blur-md sm:flex">
              <Search
                className={`block cursor-pointer duration-150 hover:fill-primary-100`}
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
                    className={`mt-[4px] block duration-150 hover:fill-primary-100`}
                  />
                  {/* Add a dot to indicate new notifications */}
                  {notifications?.some((notif) => notif?.isRead) && (
                    <span className="absolute right-0 top-0 block h-2.5 w-2.5 rounded-full bg-red-500"></span>
                  )}
                </div>
              </NotificationDropdown>
            </div>

            <div className="relative flex flex-row items-center justify-center rounded-full">
              {cart?.items.length === 0 || cart === null ? (
                <></>
              ) : (
                <div className="absolute right-0 top-0 h-[10px] w-[10px] rounded-full bg-primary-100"></div>
              )}
              <Link href="/shoppers/cart">
                <ShoppingBag
                  className={`block cursor-pointer duration-150 hover:fill-primary-100`}
                />
              </Link>
            </div>
            {isAuthenticated == false ? (
              <UserDropdownMenu>
                <div className="group relative flex cursor-pointer flex-row items-center gap-[10px] duration-200">
                  <User
                    className={`block duration-150 group-hover:fill-primary-100`}
                  />

                  <p className="mt-1 hidden text-[16px] font-medium group-hover:text-primary-100 md:block">
                    Account
                  </p>
                  <ChevronDown className="hidden md:block" />
                </div>
              </UserDropdownMenu>
            ) : (
              <UserDropdownMenu>
                <div className="group relative flex cursor-pointer flex-row items-center gap-[10px] duration-200">
                  <User
                    className={`block duration-150 group-hover:fill-primary-100`}
                  />

                  <p className="mt-1 hidden text-[16px] font-medium group-hover:text-primary-100 sm:block">
                    Hi, <span>{user?.first_name}</span>
                  </p>

                  <ChevronDown />
                </div>
              </UserDropdownMenu>
            )}
          </div>
        </div>
      </div>
      {showSearch && (
        <div className="relative flex w-full grow flex-row items-center gap-[15px] rounded-full bg-transparent-white-300 px-[20px] py-[3px] backdrop-blur-md sm:hidden">
          <Search
            className={`block scale-75 cursor-pointer duration-150 hover:fill-primary-100`}
          />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none"
          ></input>
        </div>
      )}
    </nav>
  );
};

export default ShoppersNav;
