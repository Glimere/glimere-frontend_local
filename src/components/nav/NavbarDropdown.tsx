import Link from 'next/link';
import GradientBg from '../gradient/gradientBg';

interface NavbarDropdownProps {
    isOpen: boolean;
    modalToggle: (state: boolean) => void;
}

export default function NavbarDropdown({ isOpen, modalToggle }: NavbarDropdownProps) {
    return (
        <div
            className={`${isOpen ? "translate-y-0" : "-translate-y-full"
                } md:hidden bg-transparent-white-200 backdrop-blur-md absolute top-0 left-0 w-full h-screen text-center transition-all duration-500 ease-in-out z-10`}
        >
            <div className="relative h-full w-full overflow-hidden p-5 pt-[75.55px] ">
                <GradientBg />
                <div className="relative flex flex-col gap-16 mt-16 z-[4]">
                    <div className="flex flex-col gap-8 items-center text-white-100">
                        <a className="w-fit" href="#">
                            <p className="navlink active-navlink">Product</p>
                        </a>
                        <a className="w-fit" href="#">
                            <p className="navlink">Solutions</p>
                        </a>
                        <a className="w-fit" href="#">
                            <p className="navlink">Resources</p>
                        </a>
                    </div>
                    <div className="flex flex-col gap-8 ">
                        <Link href="/auth">
                            <p className="text-white-100 py-3.5 border border-dark rounded-full font-medium">
                                Create an Account
                            </p>
                        </Link>
                        <Link href="/shoppers">
                            <button
                                className="py-3.5 border rounded-full border-primary-100 w-full text-light bg-primary-100 font-medium"
                                onClick={() => modalToggle(true)}
                            >
                                Start Shopping
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
}