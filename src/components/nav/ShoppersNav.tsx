"use client";

import useFetch from "@/hooks/useFetch";
import { useWindowWidth } from "@/hooks/useWindowsWidth";
import { useCartStore } from "@/store/cartStore";
import useNotificationStore from "@/store/notificationStore";
import useUserStore from "@/store/userStore";
import {
  ApiResponse,
  categoryResponse,
  MainCategory,
  SubCategory,
  subcategoryResponse,
} from "@/types";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import GlimereLogo from "../../../public/images/Glimere-Logo.svg";
import Notification from "../../../public/images/notification.svg";
import ShoppingBag from "../../../public/images/shopping-bag.svg";
import User from "../../../public/images/user.svg";
import { NotificationDropdown } from "../shoppers/NotificationDropdown";
import ShoppersSearch from "../shoppers/search/ShoppersSearch";
import { UserDropdownMenu } from "../shoppers/UserdropdownMenu";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { NavigationMenu } from "../ui/navigation-menu copy";
import CategorySelection from "./CategorySelection";
import ShoppersSideBar from "./ShoppersSidebar";

interface Notification {
  id: string;
  heading: string;
  message: string;
  type: "warning" | "info" | "success" | "error";
  isRead: boolean;
}

const ShoppersNav: React.FC = () => {
  const { cart } = useCartStore();
  const { user, isAuthenticated } = useUserStore();
  const pathname = usePathname();
  const router = useRouter();
  const [showSearch, setShowSearch] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const { notifications } = useNotificationStore();
  const { isDesktop } = useWindowWidth();

  const { data: categories, loading: subcategoryLoading } =
    useFetch<categoryResponse>(`/main_category`);
  const { data: subcategories, loading } =
    useFetch<subcategoryResponse>(`/sub_category`);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    console.log("user", user);
    console.log("isAuthenticated", isAuthenticated);
  }, [user, isAuthenticated]);

  if (!isHydrated) return null;

  const userContent = (
    <div className="group relative flex cursor-pointer flex-row items-center gap-2 duration-200">
      <User className="block h-6 w-6 duration-150 group-hover:fill-primary-100" />
      {isDesktop && (
        <>
          <p className="mt-1 hidden text-base font-medium group-hover:text-primary-100 md:block">
            {isAuthenticated ? `Hi, ${user?.first_name || "User"}` : "Account"}
          </p>
          <ChevronDown className="hidden h-5 w-5 md:block" />
        </>
      )}
    </div>
  );

  return (
    <>
      <nav className="absolute z-[1000] mt-3 flex w-full flex-col items-center px-[25px] sm:mt-0 sm:h-[80px] sm:p-0 sm:px-[5.75rem]">
        <div className="container mx-auto max-w-[1344px] rounded-full bg-transparent-white-100 px-3 backdrop-blur-md sm:rounded-none sm:bg-transparent sm:px-0 sm:backdrop-blur-none">
          <div className="relative z-20 flex h-16 items-center justify-between md:h-20 md:py-6">
            <div className="flex flex-row items-center justify-center gap-[20px]">
              {isDesktop ? (
                <></>
              ) : (
                <ShoppersSideBar categories={categories?.data ?? []}>
                  <Menu />
                </ShoppersSideBar>
              )}
              <Link href="/shoppers">
                <GlimereLogo className={`cursor-pointer text-primary-100`} />
              </Link>

              {isDesktop ? (
                <NavigationMenu>
                  <NavigationMenuList className="flex flex-row items-center justify-between gap-6 rounded-[15px]">
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="rounded-full bg-transparent-white-300 text-dark">
                        ALL CATEGORIES
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="h-full">
                        <CategorySelection
                          subcategories={subcategories?.data ?? []}
                          subcategoryLoading={subcategoryLoading}
                          categories={categories?.data ?? []}
                          loading={loading}
                        />
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              ) : (
                <></>
              )}
            </div>

            <div className="flex flex-row items-center gap-[20px]">
              {isDesktop ? (
                <ShoppersSearch className="hidden sm:flex" />
              ) : (
                <div className="" onClick={() => setShowSearch(true)}>
                  <Search />
                </div>
              )}
              <div className="relative flex flex-row items-center justify-center rounded-full">
                <NotificationDropdown>
                  <div>
                    <Notification
                      className={`mt-[4px] block duration-150 hover:fill-primary-100`}
                    />
                    {notifications?.some((notif) => !notif?.isRead) && (
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
              {isDesktop ? (
                <UserDropdownMenu>{userContent}</UserDropdownMenu>
              ) : (
                <div
                  className="flex items-center"
                  onClick={() =>
                    router.push(
                      isAuthenticated
                        ? "/shoppers/account"
                        : "/auth/shoppers/login",
                    )
                  }
                >
                  {userContent}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      {showSearch && (
        <div className="fixed z-[9999999999] h-screen w-full gap-[15px] bg-transparent-white-200 px-[20px] pt-[20px] backdrop-blur-md sm:hidden">
          <div className="flex w-full items-center gap-2 self-start">
            <div className="p-1" onClick={() => setShowSearch(false)}>
              <X />
            </div>
            <ShoppersSearch
              isMobile
              className="flex-1"
              onSearch={() => setShowSearch(false)} // Close mobile search on submit
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ShoppersNav;
