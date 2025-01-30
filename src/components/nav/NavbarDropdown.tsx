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
                } pt-[75.55px] md:hidden bg-light absolute top-0 left-0 w-full h-screen text-center transition-all duration-500 ease-in-out p-5 z-10`}
        >
            <div className="relative h-full w-full">
                <GradientBg />
                <div className="flex flex-col gap-16 mt-16">
                    <div className="flex flex-col gap-8 items-center text-white-100">
                        <a className="w-fit" href="#">
                            <p className="navlink active-navlink">Product</p>
                        </a>
                        <a className="w-fit" href="#">
                            <p className="navlink">Solutions</p>
                        </a>
                        <a className="w-fit" href="#">
                            <p className="navlink">Pricing</p>
                        </a>
                        <a className="w-fit" href="#">
                            <p className="navlink">Resources</p>
                        </a>
                        <a className="w-fit" href="#">
                            <p className="navlink">Customers</p>
                        </a>
                    </div>
                    <div className="flex flex-col gap-8">
                        <Link href="/auth">
                            <p className="underline text-white-100 py-3.5 border border-black">
                                Create an Account
                            </p>
                        </Link>
                        <Link href="/shoppers">
                            <button
                                className="py-3.5 border border-primary-100 w-full text-white-100 bg-primary-100 font-medium"
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