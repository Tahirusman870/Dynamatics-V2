import React from "react";
import TextAnimation from "./TextAnimation";
import { MousePointerClick, ArrowBigDown } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="pb-[2rem] pt-[8rem] md:pt-[8rem] h-[100%]  mx-auto max-w-auto relative px-6 lg:px-20 w-[100%] flex items-center justify-center">
      <div className="absolute h-full w-full bg-[#2f6a7f2f] top-0  bottom-0 z-10"></div>
      <video
        src="/videos/coding.mp4"
        muted
        autoPlay
        loop
        className="absolute h-full w-full top-0 bottom-0 object-cover"
      ></video>
      <div className="w-full h-max pt-12 lg:pt-10 pb-4 lg:mb- flex flex-col justify-center m-auto z-20">
        <h1 className="text-[28px] md:text-[56px] text-slate-200 leading-tight md:leading-[1.3] font-bold">
          Powerful Digital<br/> Solutions With Dynamatics
        </h1>
        {/* <div className="h-10"> */}
        <TextAnimation />
        {/* </div> */}
        <h2 className="h-[100%] w-[100%] md:w-[40%] grid grid-cols-1 mx-auto mt-6 mb-2 items-center text-slate-300 text-[14px] md:text-[16px]">
          Boost Your Online Presence with Future-Ready Technology Solutions,
          Combined with Software Development, Branding, and Data-Driven
          Marketing Strategies.
        </h2>
          <MousePointerClick className="text-white h-[150px] w-[150px] md:h-[200px] md:w-[200px] stroke-1 opacity-30 "/>
      </div>
    </section>
  );
};

export default Hero;
