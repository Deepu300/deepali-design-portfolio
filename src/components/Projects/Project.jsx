"use client";
import { avigeaFont } from "@/utils/fonts";
import Link from "next/link";
import { useState } from "react";
import { motion as m } from "framer-motion";

const Project = ({ data }) => {
  const [src, setSrc] = useState(data.thumbnail[0]);
  return (
    <div className="relative p-5 md:p-10 project-card before:content-[''] after:content-[''] before:absolute after:absolute">
      <div className="relative project-image">
        <img
          src={`/${data.thumbnail[0]}`}
          className="rounded-xl md:rounded-3xl"
        />
        <m.img
          src={`/${data.thumbnail[1]}`}
          className="absolute top-0 z-10 ounded-xl md:rounded-3xl"
          initial="hidden"
          whileHover="visible"
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
      <div className="flex flex-col project-details">
        <div className="project-details__wrapper">
          <div
            className={`project-title ${avigeaFont.className} text-xl mt-6 mb-3 md:text-4xl md:mt-12 md:mb-8`}
          >
            {data.projectTitle}
          </div>
          <div className="text-xs md:text-xl project-desc">
            {data.projectDesc}
          </div>
        </div>
        <div className="mt-8 project-btns">
          <div className="px-8 py-1 text-sm md:text-xl rounded-3xl view w-min">
            <Link href={data.link}>View</Link>
          </div>
          <div className="like"></div>
        </div>
      </div>
    </div>
  );
};

export default Project;
