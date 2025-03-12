import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Apparel } from "@/types";

interface NameSwitcherProps {
  apparels: Apparel[];
  selectedCurrent: () => number;
}

export default function NameSwitcher({ apparels, selectedCurrent }: NameSwitcherProps) {
  return (
    <div
      className="z-[3] min-w-[400px] max-w-[500px] overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {apparels?.map((apparel, index) =>
          selectedCurrent() === index ? (
            <motion.div
              key={apparel.apparel_name} // Unique key to track changes
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="text-center text-[1.8rem] mix-blend-difference">
                {apparel.apparel_name}
              </h1>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>
    </div>
  );
}
