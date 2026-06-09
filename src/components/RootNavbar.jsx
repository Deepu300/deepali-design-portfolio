"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar/Navbar";

const RootNavbar = ({ isOpen, setIsOpen }) => {
  const pathname = usePathname();
  const hideNavbar = pathname?.startsWith("/work");

  return <Navbar isOpen={isOpen} setIsOpen={setIsOpen} hidden={hideNavbar} />;
};

export default RootNavbar;
