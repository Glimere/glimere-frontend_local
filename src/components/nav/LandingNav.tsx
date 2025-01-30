"use client";

import { useEffect, useState } from "react";
import NavbarDropdown from "@/components/nav/NavbarDropdown";
import GlimereLogo from "../../../public/images/glimerenew.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Define the prop types
interface LandingNavProps {
  setOpen: (open: boolean) => void;
  setPage: (page: string) => void;
  page: string;
}

const LandingNav: React.FC<LandingNavProps> = ({ setOpen, setPage, page }) => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  const creatorsPath = page === "creators";
  const navLogoColorClass =
    pathname === "/" && isOpen ? "text-white" : "text-[#ed7534]";
  const handleOpen = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleScrollPos = (): void => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > scrollPos) {
        setIsOpen(false);
      }

      setScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScrollPos);

    return () => {
      window.removeEventListener("scroll", handleScrollPos);
    };
  }, [scrollPos]);

  return (
    <nav className="absolute w-full h-[80px] px-[25px] sm:px-[5.75rem] sm:p-0 flex items-center">
      <div className="container mx-auto max-w-[1344px]">
        <div className="h-16 md:h-20 md:py-6 flex items-center justify-between z-20 relative">
          {/* Icon */}
          <div className="flex flex-row items-center">
            <Link href="/">
              <GlimereLogo className={`h-[40px] block ${navLogoColorClass}`} />
            </Link>
          </div>

          {/* Menu */}
          <div className="flex flex-row w-[230px] items-center justify-center">
            <div className="flex flex-row gap-[20px] sm:gap-[50px]">
              <div
                className={`hover:border-gray-400 duration-150 ${
                  !creatorsPath ? "border-primary-100" : "border-transparent"
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
                className={`hover:border-gray-400 duration-150 ${
                  creatorsPath ? "border-primary-100" : "border-transparent"
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
            className={`${
              isOpen ? "open" : ""
            } flex flex-col items-center w-fit gap-[7px] cursor-pointer md:hidden z-20`}
          >
            <span
              className={`transition-all duration-500 ease-in-out h-[2px] w-5 ${
                isOpen ? "bg-white-100" : "bg-black"
              } rounded-full`}
            ></span>
            <span
              className={`transition-all duration-500 ease-in-out h-[2px] w-4 ${
                isOpen ? "bg-white-100" : "bg-black"
              } rounded-full`}
            ></span>
            <span
              className={`transition-all duration-500 ease-in-out h-[2px] w-5 ${
                isOpen ? "bg-white-100" : "bg-black"
              } rounded-full`}
            ></span>
          </div>

          {/* Button */}
          <div className="hidden md:flex md:gap-4 lg:gap-[25px] items-center text-sm lg:text-base font-body font-medium">
            <Link
              href="/shoppers"
              className={`${!creatorsPath ? "visible" : "hidden"}`}
            >
              <button
                className={`text-dark-100 ${"border-black"} hover:bg-black duration-150 hover:text-white border-solid border-[1px] md:py-2.5 py-3.5 px-[25px] rounded-[10px]`}
              >
                Start Shopping
              </button>
            </Link>

            <Link
              href="/onboarding"
              className={`${creatorsPath ? "visible" : "hidden"}`}
            >
              <button
                className={`text-dark-100 ${"border-black"} hover:bg-black duration-150 hover:text-white border-solid border-[1px] md:py-2.5 py-3.5 px-[25px] rounded-[10px]`}
              >
                Sell on Glimere
              </button>
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
