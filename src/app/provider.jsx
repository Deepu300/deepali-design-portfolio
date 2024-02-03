"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

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
    <>
      {newElement}
      {isOpen ? (
        <></>
      ) : pathname == "/work" ? (
        children[1]
      ) : (
        children.slice(1, 3)
      )}
    </>
  );
};

export default Provider;
