"use client"

import { Apparel } from '@/types';
import { NextPage } from 'next'
import React, { useState } from "react";
import useMeasure from "react-use-measure";
import {
  useDragControls,
  useMotionValue,
  useAnimate,
  motion,
} from "framer-motion";

interface Props {
  apparel: Apparel;
}

const ApparelDrawer: NextPage<Props> = ({ apparel }) => {
  const [open, setOpen] = useState(false);
  const controls = useDragControls()

  return (
    <>
    {/* <div className=""></div> */}
      <motion.div className='absolute h-[200vh] w-full top-[100vh] rounded-t-[20px] bg-transparent-white-200 backdrop-blur-md shadow-sm z-[2000]'>
        <div className="h-full w-full relative">
          <motion.div drag dragControls={controls} style={{ touchAction: "none" }} className="absolute top-0 h-[60px] w-full bg-primary-100 rounded-t-[20px]"></motion.div>
        </div>
      </motion.div>
    </>

  );
};

export default ApparelDrawer;