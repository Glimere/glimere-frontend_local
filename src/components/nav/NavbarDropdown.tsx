import Link from "next/link";

import GradientBg from "../gradient/gradientBg";

interface NavbarDropdownProps {
  isOpen: boolean;
  modalToggle: (state: boolean) => void;
}

export default function NavbarDropdown({
  isOpen,
  modalToggle,
}: NavbarDropdownProps) {
  return (
    <div
      className={`${
        isOpen ? "translate-y-0" : "-translate-y-full"
      } absolute left-0 top-0 z-10 h-screen w-full bg-transparent-white-200 text-center backdrop-blur-md transition-all duration-500 ease-in-out md:hidden`}
    >
      <div className="relative h-full w-full overflow-hidden p-5 pt-[75.55px]">
        <GradientBg />
        <div className="relative z-[4] mt-16 flex flex-col gap-16">
          <div className="text-white-100 flex flex-col items-center gap-8">
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
          <div className="flex flex-col gap-8">
            <Link href="/auth/shoppers">
              <p className="text-white-100 rounded-full border border-dark py-3.5 font-medium">
                Create an Account
              </p>
            </Link>
            <Link href="/shoppers">
              <button
                className="w-full rounded-full border border-primary-100 bg-primary-100 py-3.5 font-medium text-light"
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
