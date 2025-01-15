"use client"

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/store/cartStore';
import useUserStore from '@/store/userStore';
import useApparelStore from '@/store/apparelStore';

import ShoppingBag from "../../../public/images/shopping-bag.svg";
import User from "../../../public/images/user.svg";
import Notification from "../../../public/images/notification.svg";

import { Menu } from 'lucide-react';
import GlimereLogo from '../../../public/images/glimerenew1.svg';
import SearchBar from './SearchBar';

const Navbar: React.FC = () => {
  const router = useRouter();
  const [isSticky, setIsSticky] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [searchSelected, setSearchSelected] = useState(false);
  const cart = useCartStore((state) => state.cart);
  const user = useUserStore((state) => state.user);
  const { data } = useApparelStore();
  const isAuthenticated = Boolean(user);

  const handleScroll = () => {
    setIsSticky(window.pageYOffset > 200);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    useUserStore.getState().logout();
    router.push('/login');
  };

  return (
    <div className={`navbar w-full z-50 relative ${isSticky ? 'sticky bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/">
          <div>
            <GlimereLogo className="h-8" />
          </div>
        </Link>

        {/* Search Bar */}
        <div className="flex-[5] flex justify-center items-center sm:items-stretch w-full px-[12px] sm:px-[25px] pl-[0px] sm:pl-[60px] py-[22px]"
          onMouseLeave={() => setSearchSelected(false)}
        >
          <SearchBar
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            setSearchSelected={setSearchSelected}
          />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Link href="/cart">
              <div className="flex items-center">
                <ShoppingBag className="w-6 h-6 text-gray-600" />
                {(cart?.items?.length ?? 0) > 0 && (
                  <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">{cart?.items?.length}</span>
                )}
              </div>
            </Link>
          </div>
          {isAuthenticated ? (
            <div className="relative">
              <button onClick={() => setMenuVisible(!menuVisible)}>
                <User className="w-6 h-6 text-gray-600" />
              </button>
              {menuVisible && (
                <div className="absolute right-0 mt-2 bg-white shadow-md rounded-md w-40">
                  <Link href="/profile">
                    <div className="block px-4 py-2 hover:bg-gray-100">My Account</div>
                  </Link>
                  <Link href="/orders">
                    <div className="block px-4 py-2 hover:bg-gray-100">Orders</div>
                  </Link>
                  <button onClick={handleLogout} className="w-full text-left px-4 py-2 hover:bg-gray-100">
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link href="/login">
              <div className="text-gray-600">Login</div>
            </Link>
          )}
        </div>

        {/* Mobile Menu */}
        <button className="sm:hidden" onClick={() => setMenuVisible(!menuVisible)}>
          <Menu className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
