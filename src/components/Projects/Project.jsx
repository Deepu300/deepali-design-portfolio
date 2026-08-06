"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion as m } from "framer-motion";

const Project = ({ data }) => {
  const ISSERVER = typeof window === "undefined";

  const [isActive, setIsActive] = useState(false);
  const [isHovered, setHovered] = useState(false);
  const [heartAnim, setHeartAnim] = useState(null); // "burst" | "unlike" | null
  const heartBusy = useRef(false);
  const heartTimer = useRef(null);

  const colorMap = {
    1: { text: "#883737", bg: "#DEC2C2" },
    2: { text: "#556354", bg: "#BECFBC" },
    3: { text: "#714C8F", bg: "#714C8F" },
    4: { text: "#4D5F86", bg: "#BCCBEA" },
  };

  const getTagStyle = (tagObj) => {
    // Prefer explicit colors provided in project metadata.
    const text =
      tagObj.text ||
      (tagObj.colorId && colorMap[tagObj.colorId]?.text) ||
      "#252525";
    const bg =
      tagObj.bg ||
      (tagObj.colorId && colorMap[tagObj.colorId]?.bg) ||
      "#f2f2f2";
    const textColor = text === bg ? "#ffffff" : text;
    return { backgroundColor: bg, color: textColor };
  };

  useEffect(() => {
    setIsActive(localStorage.hasOwnProperty(data.id));
  }, [data.id]);

  const setLike = (val) => {
    if (ISSERVER) return;
    val ? localStorage.setItem(data.id, "") : localStorage.removeItem(data.id);
  };

  const clearHeartBusy = () => {
    setHeartAnim(null);
    heartBusy.current = false;
    if (heartTimer.current) {
      window.clearTimeout(heartTimer.current);
      heartTimer.current = null;
    }
  };

  const handleHeartClick = () => {
    if (heartBusy.current) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const next = !isActive;
    setIsActive(next);
    setLike(next);

    if (prefersReduced) {
      clearHeartBusy();
      return;
    }

    heartBusy.current = true;
    setHeartAnim(next ? "burst" : "unlike");

    if (heartTimer.current) window.clearTimeout(heartTimer.current);
    heartTimer.current = window.setTimeout(
      () => clearHeartBusy(),
      next ? 1000 : 450
    );
  };

  const handleHeartAnimEnd = (event) => {
    // Only clear when the sprite sheet animation finishes (not the scale pop).
    if (
      event.animationName !== "heart-bursts" &&
      event.animationName !== "heart-unburst"
    ) {
      return;
    }
    clearHeartBusy();
  };

  const heartClassName = [
    "like",
    "cursor-pointer",
    isActive ? "is-liked" : "",
    heartAnim === "burst" ? "is-bursting" : "",
    heartAnim === "unlike" ? "is-unliking" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="relative flex flex-col w-full p-5 md:w-1/2 md:p-6 lg:p-10 project-card">
      <div className="relative project-image" data-aos="fade-up">
        <img
          src={`/${data.thumbnail[0]}`}
          className="w-full h-full rounded-xl md:rounded-3xl"
        />
        <m.img
          src={`/${data.thumbnail[1]}`}
          className="absolute top-0 z-10 w-full h-full rounded-xl md:rounded-3xl"
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
      {data.tags?.length ? (
        <div className="project-item project-tags flex flex-wrap gap-2 pb-3">
          {data.tags.map((tag, idx) => (
            <span
              key={`${tag.label}-${idx}`}
              className="project-tag"
              style={getTagStyle(tag)}
            >
              {tag.label}
            </span>
          ))}
        </div>
      ) : null}

      <div className="project-item project-title font-afacad font-medium text-xl pt-2 pb-3 lg:text-4xl">
        {data.projectTitle}
      </div>

      <div className="pb-3 text-xs project-item grow md:text-xl project-desc">
        <p>{data.projectDesc}</p>
      </div>

      <div className="flex items-center justify-between project-itemmt-8 project-btns">
        {data.link.endsWith(".html") || data.link.includes("http") ? (
          <a
            href={data.link}
            target={
              data.link.includes("behance") || data.link.includes("http")
                ? "_blank"
                : undefined
            }
            rel={data.link.includes("http") ? "noopener noreferrer" : undefined}
          >
            <div className="px-8 py-1 text-sm md:text-xl rounded-3xl view h-min w-min">
              View
            </div>
          </a>
        ) : (
          <Link href={data.link}>
            <div className="px-8 py-1 text-sm md:text-xl rounded-3xl view h-min w-min">
              View
            </div>
          </Link>
        )}
        <div
          className={heartClassName}
          role="button"
          tabIndex={0}
          aria-label={isActive ? "Unlike project" : "Like project"}
          aria-pressed={isActive}
          onClick={handleHeartClick}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleHeartClick();
            }
          }}
          onAnimationEnd={handleHeartAnimEnd}
        />
      </div>
    </div>
  );
};

export default Project;
