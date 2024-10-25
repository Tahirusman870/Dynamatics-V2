import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <div className="fixed w-[100%] top-0 z-[10000] ">
      <div className="flex items-center justify-between w-[85%] mx-auto h-[100%] ">
        <Link
          href="/"
          className="flex-[0.7] cursor-pointer "
        >
          <Image
            src="/logo/logo.png"
            width={400}
            height={400}
            alt="Icon"
            className="h-[6rem] w-[11rem] md:h-[5.5rem] md:w-[11rem]"
          />
        </Link>
        <Link href="/WhoWeAre" className="nav-link">
          WHO WE ARE
        </Link>
        <Link href="/ServicePage" className="nav-link">
          SERVICES
        </Link>
        <Link href="#" className="nav-link">
          CASE STUDIES
        </Link>
        <Link href="#" className="nav-link">
          CAREERS
        </Link>
        <Link href="/ContactUs" className="nav-link">
          CONTACT US
        </Link>
        <div onClick={openNav}>
          <Menu className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-white hover:text-[#eeb84b]" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
