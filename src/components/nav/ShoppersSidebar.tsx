"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import useHandleSearch from "@/hooks/useHandleSearch";
import { MainCategory } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useState } from "react";



import GlimereLogo from "../../../public/images/Glimere-Logo.svg";


interface UserSideBarProps {
  children: React.ReactNode;
  categories: MainCategory[];
}

const ShoppersSideBar: React.FC<UserSideBarProps> = ({ children, categories }) => {
  const { handleSearch } = useHandleSearch();
  const [open, setOpen] = useState(false);

  // Animation variants for list items
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3, ease: "easeOut" },
    }),
  };

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4 } },
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild onClick={() => setOpen(true)}>
        {children}
      </SheetTrigger>
      <SheetContent
        side="left"
        className=" z-[999999] w-80 overflow-y-auto bg-transparent-white-300 backdrop-blur-md p-0 text-dark"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SheetHeader className="p-6">
            <SheetTitle>
              <div className="flex flex-row items-center gap-2">
                <GlimereLogo className={`cursor-pointer text-primary-100`} />
              </div>
            </SheetTitle>
          </SheetHeader>
          <hr className="border-alabaster/20" />
          <div className="flex flex-col gap-6 p-6 text-sm">
            {/* Need Help Section */}
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="flex flex-row items-center justify-between">
                <span className="font-semibold text-dark">NEED HELP</span>
                <ChevronRight className="h-5 w-5 text-primary-100" />
              </div>
            </motion.div>
            <hr className="border-alabaster/20" />

            {/* Account Section */}
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="flex flex-row items-center justify-between">
                <span className="font-semibold text-dark">
                  MY GLIMERE ACCOUNT
                </span>
                <ChevronRight className="h-5 w-5 text-primary-100" />
              </div>
              <ul className="mt-3 flex flex-col gap-3">
                {[
                  "Orders",
                  "Inbox",
                  "Pending Reviews",
                  "Voucher",
                  "Wishlist",
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    custom={index}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    className="cursor-pointer text-dark/70 transition-all duration-200 hover:pl-2 hover:text-primary-100"
                    role="button"
                    tabIndex={0}
                    aria-label={item}
                    onClick={() => setOpen(false)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        setOpen(false);
                      }
                    }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <hr className="border-alabaster/20" />

            {/* Categories Section */}
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="flex flex-row items-center justify-between">
                <h3 className="font-semibold text-dark">OUR CATEGORIES</h3>
                <span
                  className="cursor-pointer text-primary-100 hover:underline"
                  onClick={() => {
                    handleSearch("");
                    setOpen(false);
                  }}
                >
                  See All
                </span>
              </div>
              <ul className="mt-3 flex flex-col gap-3">
                {categories.map((category, index) => (
                  <motion.li
                    key={category._id}
                    custom={index}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    className="cursor-pointer text-dark/70 transition-all duration-200 hover:pl-2 hover:text-primary-100"
                    role="button"
                    tabIndex={0}
                    aria-label={`Select category ${category.name}`}
                    onClick={() => {
                      handleSearch(category.name);
                      setOpen(false);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        handleSearch(category.name);
                        setOpen(false);
                      }
                    }}
                  >
                    {category.name}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <hr className="border-alabaster/20" />

            {/* Services Section */}
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="flex flex-row items-center justify-between">
                <h3 className="font-semibold text-dark">OUR SERVICES</h3>
                <span
                  className="cursor-pointer text-primary-100 hover:underline"
                  onClick={() => setOpen(false)}
                >
                  See All
                </span>
              </div>
              <ul className="mt-3 flex flex-col gap-3">
                {["Sell on Glimere", "Service Center", "Contact us"].map(
                  (item, index) => (
                    <motion.li
                      key={item}
                      custom={index}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      className="cursor-pointer text-dark/70 transition-all duration-200 hover:pl-2 hover:text-primary-100"
                      role="button"
                      tabIndex={0}
                      aria-label={item}
                      onClick={() => setOpen(false)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          setOpen(false);
                        }
                      }}
                    >
                      {item}
                    </motion.li>
                  ),
                )}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppersSideBar;