"use client";
import { avigeaFont } from "@/utils/fonts";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion as m } from "framer-motion";

const Project = ({ data }) => {
  const ISSERVER = typeof window === "undefined";

  const [isActive, setIsActive] = useState(false);
  const [isHovered, setHovered] = useState(false);

  useEffect(() => {
    setIsActive(localStorage.hasOwnProperty(data.id));
  }, []);
  const setLike = (val) => {
    val && !ISSERVER
      ? localStorage.setItem(data.id, "")
      : localStorage.removeItem(data.id);
  };

  return (
    <div className="relative flex flex-col w-full p-5 md:w-1/2 md:p-6 lg:p-10 project-card">
      <div className="relative project-image" data-aos="fade-in">
        <img
          src={`/${data.thumbnail[0]}`}
          className="w-full rounded-xl md:rounded-3xl"
        />
        <m.img
          src={`/${data.thumbnail[1]}`}
          className="absolute top-0 z-10 w-full rounded-xl md:rounded-3xl"
          initial="hidden"
          whileHover="visible"
          onTouchStart={() => setHovered(true)}
          onTouchEnd={() => setHovered(false)}
          animate={isHovered ? "visible" : ""}
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
            },
          }}
        />
      </div>
      <div
        className={`project-item project-title ${avigeaFont.className} text-xl pt-6 pb-3 lg:text-4xl`}
      >
        {data.projectTitle}
      </div>

      <div className="pb-3 text-xs project-item grow md:text-xl project-desc">
        <p>{data.projectDesc}</p>
      </div>

      <div className="flex items-center justify-between project-itemmt-8 project-btns">
        <Link
          href={data.link}
          target={data.link.includes("behance") ? "_blank" : ""}
        >
          <div className="px-8 py-1 text-sm md:text-xl rounded-3xl view h-min w-min">
            View
          </div>
        </Link>
        <div
          className={isActive ? "active like " : "like cursor-pointer"}
          onClick={() => {
            setIsActive(!isActive);
            setLike(!isActive);
          }}
        ></div>
      </div>
    </div>
  );
};

export default Project;
