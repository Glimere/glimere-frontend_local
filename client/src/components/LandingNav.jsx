import { useEffect, useState } from "react";
import NavbarDropdown from "../global-components/NavbarDropdown";
import { ReactComponent as GlimereSweet } from "../assets/images/glimere.svg"
import { ReactComponent as GlimereLogo } from "../assets/images/glimerenew.svg"
import { Link } from "react-router-dom";

export default function LandingNav() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollPos, setScrollPos] = useState(0);

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
        <nav className="absolute w-full h-[80px] px-[40px] sm:p-0 flex items-center">
            <div className="container mx-auto max-w-[1344px]">
                <div className="h-16 md:h-20 md:py-6 lg:px-[50px] flex items-center justify-between z-20 relative">
                    {/* Icon */}
                    <div className="flex flex-row items-center">
                        <GlimereLogo style={{ color: "#ed7534" }} height="35" className={`h-[40px] block`} />
                        {/* <GlimereSweet style={{ color: "#ed7534" }} height="35" className={`w-[120px] hidden sm:block`} /> */}
                    </div>


                    {/* Hamburger */}
                    <div
                        onClick={handleOpen}
                        className={`${isOpen ? "open" : ""
                            } flex flex-col items-center w-fit gap-[7px] cursor-pointer md:hidden z-20`}
                    >
                        <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-black rounded-full"></span>
                        <span className="transition-all duration-500 ease-in-out h-[2px] w-4 bg-black rounded-full"></span>
                        <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-black rounded-full"></span>
                    </div>

                    {/* Menu */}


                    {/* Button */}
                    <div className="hidden md:flex md:gap-4 lg:gap-[25px] items-center text-sm lg:text-base font-head font-medium">
                        <Link to="/login" state="signin">
                            <p className="text-black-100 underline cursor-pointer">SignUp</p>
                        </Link>



                        <a href="#">
                            <button className="text-white bg-[#ED7534] md:py-2.5 py-3.5 px-[25px] rounded-[10px]">
                                Sell on Glimere
                            </button>
                        </a>
                    </div>
                </div>

                {/* Navbar Menu (Mobile) */}
                <NavbarDropdown isOpen={isOpen} />
            </div>
        </nav>
    );
}
