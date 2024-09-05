import React from "react";
import { motion } from "framer-motion";
import OtherInfo from "./OtherInfo";
import { Github } from 'lucide-react';
import { IoMdBookmark } from "react-icons/io";
import { Data, CurrentSlideData } from "../Portfolio";

type Props = {
  transitionData: Data;
  currentSlideData: CurrentSlideData;
};

function SlideInfo({ transitionData, currentSlideData }: Props) {
  return (
    <>
      <motion.span layout className=" mb-2 h-1 w-5 rounded-full bg-white" />
      <OtherInfo
        data={transitionData ? transitionData : currentSlideData.data}
      />
      <motion.div layout className=" mt-5 flex items-center gap-3">
        <button
          className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-yellow-500 text-xs  transition 
            duration-300 ease-in-out hover:opacity-80 "
        >
          <Github className=" text-[40px]" />
        </button>
        <button
          className=" w-fit rounded-full border-[1px] border-[#ffffff8f] px-8 py-3 text-[16px] font-thin transition duration-300 
            ease-in-out hover:bg-white hover:text-black "
        ><a href="https://www.flo-ride.co/" target="_blank" rel="noopener noreferrer">Live Demo</a>
          
        </button>
      </motion.div>
    </>
  );
}

export default SlideInfo;