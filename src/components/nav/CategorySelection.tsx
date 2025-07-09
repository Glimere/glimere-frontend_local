import useHandleSearch from "@/hooks/useHandleSearch";
import { renderImageUrl } from "@/hooks/useRenderImageUrl";
import { MainCategory, SubCategory } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";





interface CategorySelectionProps {
  subcategories: SubCategory[];
  categories: MainCategory[];
  loading: boolean;
  subcategoryLoading: boolean;
}

const SkeletonLoader = () => (
  <motion.div
    className="flex flex-col items-center gap-2 p-2 text-center"
    animate={{ opacity: [0.5, 1, 0.5] }}
    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
  >
    <div className="h-16 w-full rounded-md bg-secondary-200"></div>
    <span className="h-3 w-16 rounded bg-secondary-200 text-xs"></span>
  </motion.div>
);

export default function CategorySelection({
  subcategories,
  subcategoryLoading,
  categories,
  loading,
}: CategorySelectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<MainCategory | null>(null);
  const [filteredSubcategories, setFilteredSubcategories] = useState<SubCategory[]>([]);

  const { handleSearch } = useHandleSearch();

  useEffect(() => {
    if (categories.length > 0 && !selectedCategory) {
      setSelectedCategory(categories[0]);
    }
  }, [categories, selectedCategory]);

  useEffect(() => {
    if (selectedCategory && subcategories) {
      const filtered = subcategories.filter(
        (subcategory) => subcategory.main_category._id === selectedCategory._id
      );
      setFilteredSubcategories(filtered);
    } else {
      setFilteredSubcategories([]);
    }
  }, [selectedCategory, subcategories]);

  const handleCategoryHover = (category: MainCategory) => {
    setSelectedCategory(category);
  };

  const isLoading = loading || subcategoryLoading;

  // Animation variants for sidebar categories
  const categoryVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.3, ease: "easeOut" },
    }),
  };

  // Animation variants for subcategory grid items
  const subcategoryVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.05, duration: 0.3, ease: "easeOut" },
    }),
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      className="flex h-full w-full flex-row overflow-hidden rounded-lg shadow-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Sidebar: Category List */}
      <nav className="w-64 flex-shrink-0 bg-transparent-white-300 p-6 text-light">
        {loading ? (
          <div className="grid grid-cols-1 gap-3">
            {Array.from({ length: 5 }).map((_, index) => (
              <SkeletonLoader key={index} />
            ))}
          </div>
        ) : (
          <ul className="space-y-2">
            {categories.map((category, index) => (
              <motion.li
                key={category._id}
                title={category.name}
                custom={index}
                variants={categoryVariants}
                initial="hidden"
                animate="visible"
                className={`cursor-pointer rounded-md p-3 text-sm font-medium transition-all duration-200 ${
                  selectedCategory?._id === category._id
                    ? "bg-primary-100 text-light"
                    : "text-dark hover:scale-105 hover:bg-secondary-200 hover:text-dark"
                } focus:outline-none focus:ring-2 focus:ring-primary-100`}
                onMouseEnter={() => handleCategoryHover(category)}
                onClick={() => handleCategoryHover(category)}
                tabIndex={0}
                role="button"
                aria-current={
                  selectedCategory?._id === category._id ? "true" : "false"
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleCategoryHover(category);
                  }
                }}
              >
                {category.name}
              </motion.li>
            ))}
          </ul>
        )}
      </nav>
      {/* Main Content: Subcategory Grid */}
      <div className="w-[500px] flex-1 p-6">
        {isLoading ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {Array.from({ length: 10 }).map((_, index) => (
              <SkeletonLoader key={index} />
            ))}
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
              key={selectedCategory?._id || "empty"} // Key ensures animation on category change
            >
              {filteredSubcategories.length > 0 ? (
                filteredSubcategories.map((subcategory, index) => (
                  <motion.div
                    key={subcategory._id}
                    custom={index}
                    variants={subcategoryVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="flex cursor-pointer flex-col items-center gap-2 rounded-md p-2 text-center transition-all duration-200 hover:bg-transparent-white-300 hover:shadow-sm"
                    onClick={() =>
                      handleSearch(subcategory.name, "subcategory")
                    }
                    role="button"
                    tabIndex={0}
                    aria-label={`Select subcategory ${subcategory.name}`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        handleSearch(subcategory.name, "subcategory");
                      }
                    }}
                  >
                    <div className="h-16 w-full overflow-hidden rounded-md bg-secondary-200">
                      <Image
                        height={64}
                        width={64}
                        src={renderImageUrl("/placeholder.png")}
                        alt={subcategory.name}
                        className="h-full w-full object-cover"
                        priority={false}
                      />
                    </div>
                    <span className="text-xs font-medium text-dark">
                      {subcategory.name}
                    </span>
                  </motion.div>
                ))
              ) : (
                <motion.p
                  className="col-span-full text-center text-sm text-dark"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  No subcategories available for this category.
                </motion.p>
              )}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </motion.div>
  );
}