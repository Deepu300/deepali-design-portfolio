"use client";

import Navbar from "./Navbar/Navbar";

const RootNavbar = ({ isOpen, setIsOpen }) => {
  return <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />;
};

export default RootNavbar;
