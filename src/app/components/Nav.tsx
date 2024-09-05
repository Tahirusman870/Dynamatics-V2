import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <div className="fixed w-[100%] top-0 bg-[#302f2e] z-[10000] ">
      <div className="flex items-center justify-between w-[82%] mx-auto h-[100%] ">
        <Link
          href="#"
          className="flex-[0.7] cursor-pointer "
        >
          <Image
            src="/logo/dynamatics.png"
            width={500}
            height={500}
            alt="Icon"
            className="h-[6rem] md:h-[7.5rem] w-[11rem] md:w-[14rem]"
          />
        </Link>
        <Link href="/" className="nav-link">
          Who we are
        </Link>
        <Link href="#Whoweare" className="nav-link">
          Services
        </Link>
        <Link href="#Skills" className="nav-link">
          Case Studies
        </Link>
        <Link href="#Project" className="nav-link">
          Careers
        </Link>
        <Link href="#Contact" className="nav-link">
          Contact
        </Link>
        <div onClick={openNav}>
          <Menu className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-white hover:text-[#eeb84b]" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
