"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { ThemeProvider } from 'next-themes'

const Provider = ({ children, ...props }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);


  const newElement = React.cloneElement(children[0], {
    isOpen: isOpen,
    setIsOpen: () => {
      setIsOpen(!isOpen);
    },
  });

  return (
    <ThemeProvider storageKey = 'portfolio-theme' defaultTheme="light" forcedTheme={children[1].theme || null}>
      {newElement}
      {isOpen ? (
        <></>
      ) : pathname == "/work" ? (
        children[1]
      ) : (
        children.slice(1, 3)
      )}
    </ThemeProvider>
  );
};

export default Provider;
