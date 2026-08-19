"use client";

import { navList } from "@/constants/nav";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./navbar.css";
import { motion as m } from "framer-motion";
import { triggerPetalFall } from "@/components/FallingPetals/FallingPetals";

const Navbar = ({ isOpen, setIsOpen }) => {
  const pathname = usePathname();

  const handleNavClick = (link) => {
    if (link.title === "Work") {
      triggerPetalFall();
    }
  };

  const isActive = (link) => {
    if (link.activeScreen === "work") {
      return (
        pathname === "/" ||
        pathname.startsWith("/work") ||
        pathname.includes("tool-properties")
      );
    }
    if (link.activeScreen === "play") {
      return pathname.startsWith("/play");
    }
    if (link.activeScreen === "about") {
      return pathname.startsWith("/about");
    }
    return false;
  };

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Primary">
        <Link href="/" className="brand">
          <span className="brand__dee">Dee</span>
          <img
            src="/images/lotus.png?v=2"
            alt=""
            className="brand__lotus"
            width={36}
            height={36}
            aria-hidden="true"
          />
          <span className="brand__role">Product Designer</span>
        </Link>

        <ul className="nav-list">
          {navList.map((link) => {
            const active = isActive(link);
            const external = link.path.includes("http");
            return (
              <li key={link.title}>
                <Link
                  href={link.path}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className={`nav-link${active ? " is-active" : ""}`}
                  aria-current={active ? "page" : undefined}
                  onClick={() => handleNavClick(link)}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          className="ham-btn"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={!!isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          {!isOpen ? (
            <svg width="24" height="19" viewBox="0 0 24 19" fill="none" aria-hidden="true">
              <path d="M23.4373 1.37695H0.450195" stroke="currentColor" strokeWidth="1.76824" />
              <path d="M23.4373 17.2915H0.450195" stroke="currentColor" strokeWidth="1.76824" />
            </svg>
          ) : (
            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" aria-hidden="true">
              <path d="M19 1L1 18" stroke="currentColor" strokeWidth="1.76824" />
              <path d="M19 18L1 1" stroke="currentColor" strokeWidth="1.76824" />
            </svg>
          )}
        </button>

        {isOpen && (
          <m.ul
            className="nav-list-mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
          >
            <Link href="/" onClick={() => setIsOpen(false)}>
              <li className="nav-list-mobile__item">Home</li>
            </Link>
            {navList.map((link) => (
              <Link
                href={link.path}
                key={link.title}
                target={link.path.includes("http") ? "_blank" : undefined}
                rel={link.path.includes("http") ? "noopener noreferrer" : undefined}
                onClick={() => {
                  handleNavClick(link);
                  setIsOpen(false);
                }}
              >
                <li className="nav-list-mobile__item">{link.title}</li>
              </Link>
            ))}
          </m.ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
