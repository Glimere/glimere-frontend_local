"use client";

import { Apparel } from "@/types";
import {
  motion,
  useAnimate,
  useDragControls,
  useMotionValue,
} from "framer-motion";
import { NextPage } from "next";
import React, { useState } from "react";
import useMeasure from "react-use-measure";

interface Props {
  apparel: Apparel;
}

const ApparelDrawer: NextPage<Props> = ({ apparel }) => {
  const [open, setOpen] = useState(false);
  const controls = useDragControls();

  return (
    <>
      {/* <div className=""></div> */}
      <motion.div className="absolute top-[100vh] z-[2000] h-[200vh] w-full rounded-t-[20px] bg-transparent-white-200 shadow-sm backdrop-blur-md">
        <div className="relative h-full w-full">
          <motion.div
            drag
            dragControls={controls}
            style={{ touchAction: "none" }}
            className="absolute top-0 h-[60px] w-full rounded-t-[20px] bg-primary-100"
          ></motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default ApparelDrawer;
