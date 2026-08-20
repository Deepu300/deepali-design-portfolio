"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "next-themes";

const Provider = ({ children, ...props }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const childArray = React.Children.toArray(children);
  const navbar = childArray[0];
  const footer = childArray[childArray.length - 1];
  const middle = childArray.slice(1, -1);

  const newElement = React.cloneElement(navbar, {
    isOpen,
    setIsOpen,
  });

  return (
    <ThemeProvider
      storageKey="portfolio-theme"
      defaultTheme="light"
      forcedTheme="light"
    >
      {newElement}
      {isOpen ? (
        <></>
      ) : pathname == "/adobe-internship-project" ? (
        middle[0]
      ) : (
        middle
      )}
      {footer}
    </ThemeProvider>
  );
};

export default Provider;
