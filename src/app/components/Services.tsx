import { ArrowDownToLine, ArrowUpRight, CirclePlay } from "lucide-react";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="bg-[#1b1b1b] pb-[4rem] pt-[4rem] md:pt-[4rem]">
      <div className="flex-row lg:grid lg:grid-cols-6 gap-4 w-[85%] mx-auto items-center">
        <div className="col-start-1 col-span-2">
          <h1 className="text-[17px] md:text-[20px] font-bold capitalize text-[#f18720]">
            Services
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize font-bold text-blue-500 ">
            Solutions We <span className="text-blue-500">Provide</span>
          </h2>
        </div>
        <div className="col-start-3 col-span-3">
          <p className="text-[14px] md:text-[16px] text-slate-100 ">
            Elevate your online presence with our comprehensive technology
            solutions, spanning strategic brand development, cutting-edge web
            development, seamless business automation, and targeted branding
            services.
            <br />
            <span>
              We craft immersive experiences, drive digital growth, and enhance
              your business impact in the digital landscape. Partner with us to
              transform your vision into a compelling online reality.
            </span>
          </p>
        </div>
        <div className="col-end-7 col-span-1 ...">
          <button className=" text-start h-[170px] w-[170px] hover:-translate-y-[15px] rounded-full hover:bg-[#f18720] transition-all duration-200 text-[12px] sm:text-[14px] font-semibold bg-[#1b1b1b] border  hover:border-[#1b1b1b] text-white flex items-center justify-center">
            <a href="/" target="_blank" rel="noopener noreferrer">
              View
              <br />
              All Services
            </a>
            <ArrowUpRight className="w-[1.6rem] h-[1.7rem] text-white" />
          </button>
        </div>
        <div className="col-start-1 col-span-2">
          <Image
            src="/images/about.jpg"
            alt="Tahir Usman"
            width={200}
            height={200}
            className=""
          />
        </div>
        {/* Web Development */}
        <div className="grid col-start-3 col-span-7 md:flex items-center border-t-2 pt-8">
          <h1 className="text-[18px] md:text-[20px] font-semibold text-[#f18720]">
            01
          </h1>
          <h2 className="text-[18px] md:text-[20px] capitalize font-bold ml-10 text-white ">
            Web Development
          </h2>
          <p className="text-[12px] md:text-[14px] mr-5 text-slate-200 ml-[3rem]">
            We use a client-centric approach to deploy web development solutions
            that fit your business environment and probide a high-preformance,
            secure, resposive brand presence.
          </p>
          <button className=" hover:-translate-y-[2px] px-[1rem] md:px-[2rem] py-[0.5rem] md:py-[1rem]  transition-all duration-200 text-[14px] sm:text-[16px] font-bold  flex items-center space-x-2">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <ArrowUpRight
                data-aos="zoom-in"
                data-aos-delay="300"
                className="w-[4rem] h-[4rem] text-white"
              />
            </a>
          </button>
        </div>

        {/* Mobile Application Development */}
        <div className="col-start-1 col-span-2"></div>
        <div className="grid col-start-3 col-span-7 md:flex items-center border-t-2 pt-8 pb-5">
          <h1 className="text-[18px] md:text-[20px] font-semibold text-[#f18720]">
            02
          </h1>
          <h2 className="text-[18px] md:text-[20px] capitalize font-bold ml-10 text-white ">
            Mobile Application Development
          </h2>
          <p className="text-[12px] md:text-[15px] mr-5 text-slate-200 ml-[3rem]">
            We use a robust application environments to develop meaningful
            interactions and matually beneficial connections between a brand and
            its audience through digital touchpoints.
          </p>
          <button className=" hover:-translate-x-1.5 px-[1rem] md:px-[2rem] py-[0.5rem] md:py-[1rem]  transition-all duration-200 text-[14px] sm:text-[16px] font-bold  flex items-center space-x-2">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <ArrowUpRight
                data-aos="zoom-in"
                data-aos-delay="300"
                className="w-[4rem] h-[4rem] text-white"
              />
            </a>
          </button>
        </div>

        {/* Brand And Creatives */}
        <div className="col-start-1 col-span-2"></div>
        <div className="grid col-start-3 col-span-7 md:flex items-center border-t-2 pt-8 pb-5">
          <h1 className="text-[18px] md:text-[20px] font-semibold text-[#f18720]">
            03
          </h1>
          <h2 className="text-[18px] md:text-[20px] capitalize font-bold ml-10 text-white ">
            Brand And Creatives
          </h2>
          <p className="text-[12px] md:text-[14px] mr-5 text-slate-200 ml-[5.5rem]">
            Our impactful and customer-focused designs enhance your brand
            presence and help you srant out in a crowded degital space.
          </p>
          <button className=" hover:-translate-y-[2px] px-[1rem] md:px-[2rem] py-[0.5rem] md:py-[1rem]  transition-all duration-200 text-[14px] sm:text-[16px] font-bold  flex items-center space-x-2">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <ArrowUpRight
                data-aos="zoom-in"
                data-aos-delay="300"
                className="w-[4rem] h-[4rem] text-white"
              />
            </a>
          </button>
        </div>

        {/* SEO & Social Media Marketing */}
        <div className="col-start-1 col-span-2"></div>
        <div className="grid col-start-3 col-span-7 md:flex items-center border-t-2 pt-8 pb-5">
          <h1 className="text-[18px] md:text-[20px] font-semibold text-[#f18720]">
            04
          </h1>
          <h2 className="text-[18px] md:text-[20px] capitalize font-bold ml-10 text-white ">
            Social Media Marketing
          </h2>
          <p className="text-[12px] md:text-[14px] mr-5 text-slate-200 ml-[5rem]">
            We excel at decoding customer insights and use analytics dashboards
            to strengthen your online presence to enhance customer retention and
            sales.
          </p>
          <button className=" hover:-translate-y-[2px] px-[1rem] md:px-[2rem] py-[0.5rem] md:py-[1rem]  transition-all duration-200 text-[14px] sm:text-[16px] font-bold  flex items-center space-x-2">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <ArrowUpRight
                data-aos="zoom-in"
                data-aos-delay="300"
                className="w-[4rem] h-[4rem] text-white"
              />
            </a>
          </button>
        </div>

        {/* E-Mail Marketing */}
        <div className="col-start-1 col-span-2"></div>
        <div className="grid col-start-3 col-span-7 md:flex items-center border-t-2 pt-8 pb-5">
          <h1 className="text-[18px] md:text-[20px] font-semibold text-[#f18720]">
            05
          </h1>
          <h2 className="text-[18px] md:text-[20px] capitalize font-bold ml-10 text-white ">
            E-Mail Marketing
          </h2>
          <p className="text-[12px] md:text-[14px] mr-5 text-slate-200 ml-[5rem]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
            facilis qui eligendi soluta accusamus! Repellat nulla voluptas rerum
            deserunt possimus. Sit, accusamus!
          </p>
          <button className=" hover:-translate-y-[2px] px-[1rem] md:px-[2rem] py-[0.5rem] md:py-[1rem]  transition-all duration-200 text-[14px] sm:text-[16px] font-bold  flex items-center space-x-2">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <ArrowUpRight
                data-aos="zoom-in"
                data-aos-delay="300"
                className="w-[4rem] h-[4rem] text-white"
              />
            </a>
          </button>
        </div>

        {/* Data Analytics */}
        <div className="col-start-1 col-span-2"></div>
        <div className="grid col-start-3 col-span-7 md:flex items-center border-t-2 pt-8 pb-8 border-b-2">
          <h1 className="text-[18px] md:text-[20px] font-semibold text-[#f18720]">
            06
          </h1>
          <h2 className="text-[18px] md:text-[20px] capitalize font-bold ml-10 text-white ">
            Data Analytics Dashboard
          </h2>
          <p className="text-[12px] md:text-[14px] mr-5 text-slate-200 ml-[4.7rem]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
            expedita tempore, commodi non quisquam officia iusto vel nulla unde
            saepe officiis nisi!
          </p>
          <button className=" hover:-translate-y-[2px] px-[1rem] md:px-[2rem] py-[0.5rem] md:py-[1rem]  transition-all duration-200 text-[14px] sm:text-[16px] font-bold  flex items-center space-x-2">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <ArrowUpRight
                data-aos="zoom-in"
                data-aos-delay="300"
                className="w-[4rem] h-[4rem] text-white"
              />
            </a>
          </button>
        </div>
      </div>

      {/* <div className="w-[85%] mx-auto  pt-[2rem]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] items-center">
        <div className="">
          <h1 className="text-[17px] md:text-[20px] font-bold capitalize text-[#f18720]">
            Services
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[1.5rem] font-bold text-blue-500 ">
            Solutions We <span className="text-blue-500">Provide</span>
          </h2>
        </div>
        <div className="w-[140%]">
          <p className="text-[14px] md:text-[16px] text-justify text-slate-100 ">
            Elevate your online presence with our comprehensive technology
            solutions, spanning strategic brand development, cutting-edge web
            development, seamless business automation, and targeted branding
            services.
            <br />
            <span>
              We craft immersive experiences, drive digital growth, and enhance
              your business impact in the digital landscape. Partner with us to
              transform your vision into a compelling online reality.
            </span>
          </p>
        </div>
        <div className="flex-col sm:flex sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-end">
          <button className=" text-start h-[190px] w-[190px] hover:-translate-y-[6px] rounded-full hover:bg-[#f18720] transition-all duration-200 text-[12px] sm:text-[14px] font-semibold bg-[#b4b3b3] border  hover:border-[#f18720] text-white flex items-center justify-center">
            <a href="/" target="_blank" rel="noopener noreferrer">
              View
              <br />
              All Services
            </a>
            <ArrowUpRight className="w-[1.6rem] h-[1.7rem] text-white" />
          </button>
        </div>
        <div data-aos="fade-left" data-aos-delay="300" className="">
          <Image
            src="/images/about.jpg"
            alt="Tahir Usman"
            width={200}
            height={200}
            className=""
          />
        </div>
        <div className="flex items-center col-span-2 w-[85%]">
          <h1 className="text-[18px] md:text-[22px] font-bold text-[#f18720]">
            01
          </h1>
          <h2 className="text-[18px] md:text-[22px] capitalize font-bold ml-10 mr-5 text-white ">
            Web Development
          </h2>
          <p className="text-[12px] md:text-[14px] text-justify mr-5 text-slate-200">
            We use a client-centric approacj to deploy web development solutions
            that fit your business environment and probide a high-preformance,
            secure, resposive brand presence.
          </p>
          <button className=" hover:-translate-y-[2px] px-[1rem] md:px-[2rem] py-[0.5rem] md:py-[1rem]  transition-all duration-200 text-[14px] sm:text-[16px] font-bold  flex items-center space-x-2">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <ArrowUpRight className="w-[4rem] h-[4rem] text-white" />
            </a>
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default About;
