import React from "react";
import TextAnimation from "./ui/TextAnimation";
import { MousePointerClick} from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="pb-[2rem] pt-[8rem] md:pt-[8rem] h-[100%] mx-auto max-w-auto relative px-6 lg:px-20 w-[100%] flex items-center justify-center">
      <div className="absolute h-full w-full bg-[#2030362f] top-0 bottom-0 z-10"></div>
      <video
        src="/videos/coding.mp4"
        muted
        autoPlay
        loop
        className="absolute h-full w-full top-0 bottom-0 object-cover"
      ></video>
      <div className="flex flex-col w-full h-max pt-12 lg:pt-10 pb-4 justify-center m-auto z-20">
        <h1
          data-aos="fade-left"
          data-aos-delay="100"
          className=" transition-all  text-[28px] md:text-[60px] text-slate-200 leading-tight md:leading-[1.3] font-Kanit font-semibold"
        >
          Powerful Digital
          <br /> Solutions With{" "}
          <span className="text-[#eeb84b] ">Dynamatics</span>
        </h1>
        <div data-aos="fade-left" data-aos-delay="300">
          <TextAnimation />
        </div>

        <h2
          data-aos="fade-left"
          data-aos-delay="500"
          className="h-[100%] w-[100%] grid grid-cols-1 mx-auto mt-4 mb-2 font-Kanit text-slate-200 text-[14px] md:text-[16px]"
        >
          Boost Your Online Presence with Future-Ready Technology Solutions,
          <br />
          Combined with Software Development, Branding, and Data-Driven
          <br />
          Marketing Strategies.
        </h2>
        <Link href="#About" data-aos="fade-left" data-aos-delay="700">
          <MousePointerClick className="text-[#eeb84b] h-[150px] w-[150px] md:h-[200px] md:w-[200px] stroke-1 opacity-30 " />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
