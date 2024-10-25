"use client";
import MobileNav from "./demos/MobileNav";
import Nav from "./demos/Nav";
import React, { Profiler, useEffect, useState } from "react";

const Header = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);
  return (
    <div className="overflow-x-hidden ">
      <MobileNav nav={nav} closeNav={closeNav} />
      <Nav openNav={openNav} />
    </div>
  );
};

export default Header;
