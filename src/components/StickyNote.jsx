import React from "react";

export default function StickyNote({ classes, content }) {
  return (
    <div
      className={`sticky-note p-2 bg-pastel-green w-full lg:w-40 h-auto text-xs lg:absolute min-h-36 ${classes}`}
      data-aos="fade-in"
    >
      <p>{content}</p>
    </div>
  );
}
