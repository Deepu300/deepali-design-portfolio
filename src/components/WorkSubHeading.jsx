import React from "react";

export default function WorkSubHeading({ headingText }) {
  return (
    <div className="flex flex-col gap-3 my-10" data-aos="fade-in">
      <div className="divider"></div>
      <img className="mx-auto" src="/illust-1.png" alt="" />
      <h2 className="text-center font-black text-4xl font-afacad">
        {headingText}
      </h2>
    </div>
  );
}
