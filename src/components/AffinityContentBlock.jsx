import React from "react";

const AffinityContentBlock = ({
  title,
  points,
  backgroundColor = "bg-white",
}) => {
  return (
    <div className="w-3/4 lg:w-1/4 p-6" data-aos="fade-in">
      <p className="text-center font-semibold mb-4 text-xl">{title}</p>
      <div
        className={`border-2 border-gray-900 min-h-[494px] py-8 px-4 ${backgroundColor}`}
      >
        <ul className="list-disc space-y-2 px-4 text-base font-bold">
          {points.map((point, index) => (
            <li key={index} className="text-gray-900">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AffinityContentBlock;
