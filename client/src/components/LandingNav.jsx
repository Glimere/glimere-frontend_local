import { useEffect, useState } from "react";
import NavbarDropdown from "../global-components/NavbarDropdown";
import { ReactComponent as GlimereSweet } from "../assets/images/glimere-primary.svg"
import { ReactComponent as GlimereLogo } from "../assets/images/glimerenew.svg"
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function LandingNav() {

    const location = useLocation()

    const [isOpen, setIsOpen] = useState(false);
    const [scrollPos, setScrollPos] = useState(0);

    const creatorsPath = location.pathname == "/creators" ? true : false
    const navLogoColor = location.pathname == "/" ? "#000000" : "#000000"


    const handleOpen = () => setIsOpen((prev) => !prev);

    const handleScrollPos = () => {
        const currentScrollPos = window.scrollY

        if (currentScrollPos > scrollPos) {
            setIsOpen(false)
        }

        setScrollPos(currentScrollPos)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScrollPos)

        return () => {
            window.removeEventListener("scroll", handleScrollPos)
        }
    }, [scrollPos]);

    return (
        <nav className="absolute w-full h-[80px] px-[25px] sm:px-[40px] sm:p-0 flex items-center">
            <div className="container mx-auto max-w-[1344px]">
                <div className="h-16 md:h-20 md:py-6 flex items-center justify-between z-20 relative">
                    {/* Icon */}
                    <div className="flex flex-row items-center">
                        <GlimereLogo style={{ color: navLogoColor }} height="35" className={`h-[40px] block`} />
                        {/* <GlimereSweet style={{ color: "#ed7534" }} height="35" className={`w-[120px] hidden sm:block`} /> */}
                    </div>


                    

                    {/* Menu */}
                    <div className="flex flex-row w-[230px] items-center justify-center">
                        <div className="flex flex-row gap-[20px] sm:gap-[50px]">
                            <div className={`hover:border-gray-400 duration-150 ${!creatorsPath ? "border-black" : "border-transparent"} border-solid border-b-[3px]`}>
                                <Link to="/" className="">
                                    <p className="text-black text-[14px] sm:text-[16px] cursor-pointer">Shoppers</p>
                                </Link>
                            </div>
                            <div className={`hover:border-gray-400 duration-150 ${creatorsPath ? "border-black" : "border-transparent"} border-solid border-b-[3px]`}>
                                <Link to="/creators" className="">
                                    <p className="text-black text-[14px] sm:text-[16px] cursor-pointer">Fashion Creators</p>
                                </Link>
                            </div>
                        </div>


                    </div>


                    {/* Hamburger */}
                    <div
                        onClick={handleOpen}
                        className={`${isOpen ? "open" : ""} flex flex-col items-center w-fit gap-[7px] cursor-pointer md:hidden z-20`}
                    >
                        <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-black rounded-full"></span>
                        <span className="transition-all duration-500 ease-in-out h-[2px] w-4 bg-black rounded-full"></span>
                        <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-black rounded-full"></span>
                    </div>

                    {/* Button */}
                    <div className="hidden md:flex md:gap-4 lg:gap-[25px] items-center text-sm lg:text-base font-body font-medium">
                        <Link to="/login" className={`${!creatorsPath ? "visible" : "hidden"}`}>
                            <button className={`text-black ${"border-black"} hover:bg-black duration-150 hover:text-white border-solid border-[1px] md:py-2.5 py-3.5 px-[25px] rounded-[10px]`}>
                                Get Started
                            </button>
                        </Link>



                        <Link to="/register" className={`${creatorsPath ? "visible" : "hidden"}`}>
                            <button className={`text-black ${"border-black"} hover:bg-black duration-150 hover:text-white border-solid border-[1px] md:py-2.5 py-3.5 px-[25px] rounded-[10px]`}>
                                Sell on Glimere
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Navbar Menu (Mobile) */}
                <NavbarDropdown isOpen={isOpen} />
            </div>
        </nav>
    );
}
