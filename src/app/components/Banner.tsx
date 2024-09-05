import { ArrowUpRight, PhoneCall } from "lucide-react";
import React from "react";

const Banner = () => {
  return (
    <div className="h-[65vh] w-[100%] pb-[4rem] pt-[4rem] md:pt-[4rem] bg-fixed bg-parallax bg-no-repeat bg-cover bg-center opacity-80">
      <div className="text-center items-center">
        <h1 className="text-center text-white text-[30px] sm:text-[35px] md:text-[45px] font-bold ">
          Work With Us
        </h1>
        <p className="text-center text-white text-[14px] sm:text-[20px] md:text-[24px] font-semibold ">
          We would happy to hear project and interset in our services so reach
          us.
        </p>
        <div className="mt-4">
          <button className="text-center h-[170px] w-[170px] hover:-translate-y-[6px] rounded-full hover:bg-[#f18720] transition-all duration-200 text-[14px] sm:text-[16px] font-semibold bg-transparent border  hover:border-[#f18720] text-white">
            <a href="/" target="_blank" rel="noopener noreferrer">
              Call To Action
            </a>
            
          </button>
        </div>
      </div>
      {/* <h1 className="text-[28px] md:text-[56px] text-[#eeb84b] leading-tight md:leading-[1.3] font-bold">
        Your Digital
        <br /> Growth Partner
      </h1>
       */}
    </div>
  );
};

export default Banner;
