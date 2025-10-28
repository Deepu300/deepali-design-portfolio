"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ImageStackSlideshow = () => {
  const images = [
    "/img1.jpg",
    "/img2.jpeg",
    "/img3.jpeg",
    "/img4.jpeg",
    "/img5.jpeg",
    "/img6.jpeg",
    "/img7.jpeg",
    "/img8.jpeg",
    "/img9.jpeg",
    "/img10.jpeg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div
      className="relative mx-auto w-[90vw] sm:w-[400px] md:w-[450px] lg:w-[500px] aspect-[2/3]"
      style={{ perspective: "1000px" }}
    >
      {images.map((src, index) => {
        const offset = (index - current + images.length) % images.length;
        const direction = index % 2 === 0 ? 1 : -1;
        const hidden = offset > 4;

        return (
          <motion.div
            key={index}
            layout
            initial={false}
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
            style={{
              zIndex: images.length - offset,
              pointerEvents: offset === 0 ? "auto" : "none",
            }}
            animate={{
              y: offset * 12,
              scale: 1 - offset * 0.04,
              opacity: hidden ? 0 : offset > 3 ? 0.1 : 1 - offset * 0.15,
              rotate:
                offset === 0 ? direction * 2 : direction * (2 + offset * 1.5),
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 18,
            }}
          >
            <div className="bg-white p-3 pb-10 rounded-xl shadow-2xl w-[80%] sm:w-[85%] md:w-[90%] lg:w-[350px] aspect-[3/4] flex items-center justify-center">
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover rounded-md"
                style={{ pointerEvents: "none", userSelect: "none" }}
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ImageStackSlideshow;
