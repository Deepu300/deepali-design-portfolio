"use client";
import { avigeaFont } from "@/utils/fonts";
import Link from "next/link";
import { useState } from "react";
import { motion as m } from "framer-motion";

const Project = ({ data }) => {
  return (
    <div className="relative flex flex-col w-full p-5 md:w-1/2 md:p-10 project-card">
      <div className="relative project-image">
        <img
          src={`/${data.thumbnail[0]}`}
          className="w-full rounded-xl md:rounded-3xl"
        />
        <m.img
          src={`/${data.thumbnail[1]}`}
          className="absolute top-0 z-10 w-full ounded-xl md:rounded-3xl"
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
      {/* <div className="flex flex-col justify-between project-details"> */}
        <div
          className={`project-item project-title ${avigeaFont.className} text-xl pt-6 pb-3 lg:text-4xl`}
        >
          {data.projectTitle}
        </div>
        
        <div className="pb-3 text-xs project-item grow md:text-xl project-desc">
          <p>{data.projectDesc}</p>
        </div>

        <div className="project-itemmt-8 project-btns">
          <div className="px-8 py-1 text-sm md:text-xl rounded-3xl view w-min">
            <Link href={data.link}>View</Link>
          </div>
          <div className="like"></div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default Project;
