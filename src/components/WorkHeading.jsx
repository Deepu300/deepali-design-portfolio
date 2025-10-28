import React from "react";

export default function WorkHeading({ text, subText }) {
  return (
    <div className="max-w-4xl gap-10 flex flex-col py-20 mx-auto text-center">
      <h1 className="text-3xl md:text-5xl font-bold">{text}</h1>
      <p className="text-lg md:text-2xl font-light text-gray-500">{subText}</p>
    </div>
  );
}
