"use client";

import { useEffect, useState } from "react";
import NavbarDropdown from "@/components/nav/NavbarDropdown";
import GlimereLogo from "../../../public/images/Glimere-Logo.svg";
import Link from "next/link";
import { Button } from "../ui/button";

// Define the prop types
interface LandingNavProps {
  setOpen: (open: boolean) => void;
  setPage: (page: string) => void;
  page: string;
}

const LandingNav: React.FC<LandingNavProps> = ({ setOpen, setPage, page }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  const creatorsPath = page === "creators";

  const handleOpen = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleScrollPos = (): void => {

      const currentScrollPos = typeof window !== "undefined" ? window.scrollY : 0

      if (currentScrollPos > scrollPos) {
        setIsOpen(false);
      }

      setScrollPos(currentScrollPos);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScrollPos);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScrollPos);
      }
    };
  }, [scrollPos]);

  return (
    <nav className="absolute w-full h-[80px] px-[25px] sm:px-[5.75rem] sm:p-0 flex items-center">
      <div className="container mx-auto max-w-[1344px]">
        <div className="h-16 md:h-20 md:py-6 flex items-center justify-between z-20 relative">
          {/* Icon */}
          <div className="flex flex-row items-center">
            <Link href="/">
              <GlimereLogo className={`h-[40px] block text-primary-100`} />
            </Link>
          </div>

          {/* Menu */}
          <div className={`flex flex-row w-[230px] items-center justify-center duration-200 ${isOpen ? "opacity-0" : "opacity-100"}`}>
            <div className="flex flex-row gap-[20px] sm:gap-[50px]">
              <div
                className={`hover:border-gray-400 duration-150 ${!creatorsPath ? "border-primary-100" : "border-transparent"
                  } border-solid border-b-[3px]`}
              >
                <p
                  className={`text-dark-100 text-[14px] sm:text-[15px] font-medium cursor-pointer`}
                  onClick={() => setPage("shoppers")}
                >
                  Shoppers
                </p>
              </div>
              <div
                className={`hover:border-gray-400 duration-150 ${creatorsPath ? "border-primary-100" : "border-transparent"
                  } border-solid border-b-[3px]`}
              >
                <p
                  className={`text-dark-100 text-[14px] sm:text-[15px] font-medium cursor-pointer`}
                  onClick={() => setPage("creators")}
                >
                  Fashion Creators
                </p>
              </div>
            </div>
          </div>

          {/* Hamburger */}
          <div
            onClick={handleOpen}
            className={`${isOpen ? "open" : ""
              } flex flex-col items-center w-fit gap-[7px] cursor-pointer md:hidden z-20`}
          >
            <span
              className={`transition-all duration-500 ease-in-out h-[2px] w-5 ${isOpen ? "bg-primary-100" : "bg-black"
                } rounded-full`}
            ></span>
            <span
              className={`transition-all duration-500 ease-in-out h-[2px] w-4 ${isOpen ? "bg-primary-100" : "bg-black"
                } rounded-full`}
            ></span>
            <span
              className={`transition-all duration-500 ease-in-out h-[2px] w-5 ${isOpen ? "bg-primary-100" : "bg-black"
                } rounded-full`}
            ></span>
          </div>

          {/* Button */}
          <div className="hidden md:flex md:gap-4 lg:gap-[25px] items-center text-sm lg:text-base font-medium">
            <Link
              href="/shoppers"
              className={`${!creatorsPath ? "visible" : "hidden"}`}
            >
              <Button
                className={`text-dark-100 ${"border-black"} bg-transparent hover:bg-black duration-150 hover:text-white border-solid border-[1px] md:py-2.5 py-3.5 px-[25px] rounded-[10px]`}
              >
                Start Shopping
              </Button>
            </Link>

            <Link
              href="auth/creators/login"
              className={`${creatorsPath ? "visible" : "hidden"}`}
            >
              <Button
                className={`text-dark-100 ${"border-black"} bg-transparent hover:bg-black duration-150 hover:text-white border-solid border-[1px] md:py-2.5 py-3.5 px-[25px] rounded-[10px]`}
              >
                Sell on Glimere
              </Button>
            </Link>
          </div>
        </div>

        {/* Navbar Menu (Mobile) */}
        <NavbarDropdown isOpen={isOpen} modalToggle={setOpen} />
      </div>
    </nav>
  );
};

export default LandingNav;
