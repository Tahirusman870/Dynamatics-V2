import { ArrowDownToLine, CirclePlay, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="bg-[#b4b3b3] pb-[4rem] pt-[4rem] md:pt-[4rem]">
      <p className=" mb-[2rem] w-[90%] md:w-[70%] mx-auto text-[20px] md:text-[26px] font-semibold md:leading-[2rem] leading-[2rem] text-[#ffffff]">
        Forge cutting-edge solutions for entrepreneurs, startups, and
        enterprises in partnership with a top-tier technology development
        company.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 w-[95%] mx-auto gap-[0.5rem]">       
        <div
          // data-aos="fade-right"
          // data-aos-delay="300"
          className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative right-[-2rem]"
        >
          <Image
            src="/images/office.jpg"
            alt="office"
            width={500}
            height={500}
            className="relative z-[11] w-[150%] h-[140%] object-contain rounded-xl"
          />
        </div>

        <div className=" mt-[4rem] mb-[2rem] mx-auto w-[100%] z-[11] ml-10 mr-0 p-0">
          <p className="text-[14px] md:text-[16px] text-justify text-slate-100 ">
            Avancera Solutions delivers customized digital solutions leveraging
            cutting-edge technology. Specializing in software development, web
            design, automation, and branding, we integrate AI and digital
            analytics for informed decision-making.
            <br /> Our expertise optimizes online presence, enhances sales
            through data-driven strategies, and streamlines operations for
            maximum efficiency in the digital landscape.
            <br /> Focused on digital branding and strategic optimization, we
            ensure your online presence resonates profoundly. Leveraging
            advanced technology, we execute impactful campaigns, expanding your
            brand's reach and engagement.
            <br /> From captivating website design to optimized content and
            strategic automation, we stand as your dedicated partners in
            achieving unparalleled success in the digital realm.and engagement.
            Whether you need a captivating website, optimized content, or
            strategic business automation, we are your dedicated partners in
            achieving unparalleled success in the digital realm.
          </p>
        </div>

        <div
          // data-aos="fade-right"
          // data-aos-delay="300"
          className="lg:w-[400px] lg:h-[400px] w-[300px] h-[300px] relative right-[-4rem]"
        >
          <Image
            src="/images/office-1.jpg"
            alt="Tahir Usman"
            width={500}
            height={500}
            className="relative z-[11] mt-[-4rem] w-[80%] h-[80%] object-contain rounded-xl"
          />
          {/* <div className="absolute w-[100%] h-[95%] z-[10] bg-[#f18720] top-[3.2rem] right-[-2.4rem]"></div>
          <div className="absolute w-[100%] h-[95%] z-[10] bg-blue-500 top-[2.2rem] right-[-1.2rem]"></div> */}
        </div>
      </div>
      <div className="flex-col sm:flex sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center items-center">
        <button className=" text-start h-[170px] w-[170px] hover:-translate-y-[6px] rounded-full hover:bg-[#f18720] transition-all duration-200 text-[12px] sm:text-[14px] font-semibold bg-[#b4b3b3] border  hover:border-[#f18720] text-white flex items-center justify-center">
          <a href="/" target="_blank" rel="noopener noreferrer">
            Explore Us
          </a>
          <ArrowUpRight className="w-[1.6rem] h-[1.7rem] text-white" />
        </button>
      </div>
    </div>
  );
};

export default About;
