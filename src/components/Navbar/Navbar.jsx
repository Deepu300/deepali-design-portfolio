"use client";

import { avigeaFont } from "@/utils/fonts";
import { navList } from "@/constants/nav";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./navbar.css";
import { motion as m } from "framer-motion";

const Navbar = ({ isOpen, setIsOpen }) => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav
      className={`max-w-screen-2xl w-11/12 flex items-center justify-between m-auto pt-6 pb-2 md:pt-12 md:pb-6 relative`}
    >
      <div className={`${avigeaFont.className} brand-logo md:text-4xl text-lg`}>
        <Link href="/">Deepali.</Link>
      </div>

      <ul className={`nav-list hidden md:flex gap-7`}>
        {navList.map((link, idx) => (
          <Link
            href={link.path}
            key={idx}
            target={link.path.includes("https") ? "_blank" : ""}
          >
            <li
              style={
                pathname.split("/").includes(link.activeScreen)
                  ? { backgroundColor: `${link.color}` }
                  : {}
              }
              className={`nav-list__item px-8 py-1 rounded-3xl md:text-lg`}
            >
              {link.title}
            </li>
          </Link>
        ))}
      </ul>

      <div
        className="flex ham-btn md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {!isOpen ? (
          <div className="ham-burger-open">
            <svg
              width="24"
              height="19"
              viewBox="0 0 24 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.4373 1.37695H0.450195"
                stroke="var(--secondary-color)"
                strokeWidth="1.76824"
              />
              <path
                d="M23.4373 17.2915H0.450195"
                stroke="var(--secondary-color)"
                strokeWidth="1.76824"
              />
            </svg>
          </div>
        ) : (
          <div className="ham-burger-close">
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 1L1 18"
                stroke="var(--secondary-color)"
                stroke-width="1.76824"
              />
              <path
                d="M19 18L1 1"
                stroke="var(--secondary-color)"
                stroke-width="1.76824"
              />
            </svg>
          </div>
        )}
      </div>

      {isOpen && (
        <m.ul
          className={`nav-list-mobile md:hidden absolute top-16 h-full w-full flex flex-col items-center gap-10 pt-12 ${avigeaFont.className}`}
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          exit={{ height: 0 }}
          transition={{ duration: 5 }}
        >
          <Link href={"/"} onClick={() => setIsOpen(false)}>
            <div className="text-4xl nav-list__item">Home</div>
          </Link>
          {navList.map((link, idx) => (
            <Link
              href={link.path}
              key={idx}
              target={link.path.includes("https") ? "_blank" : ""}
              onClick={() => setIsOpen(false)}
            >
              <li className={`nav-list__item text-4xl`}>
                {idx == 0 ? "Projects" : link.title}
              </li>
            </Link>
          ))}
        </m.ul>
      )}
    </nav>
  );
};

export default Navbar;
