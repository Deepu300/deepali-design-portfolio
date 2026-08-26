"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import "./falling-petals.css";

const PETAL_SRCS = [
  "/images/petals/petal-1.png",
  "/images/petals/petal-2.png",
  "/images/petals/petal-3.png",
  "/images/petals/petal-4.png",
];

const FALL_MS = 9000;
const FADE_MS = 1800;
const PETAL_COUNT = 28;
const SNOW_COUNT = 56;

function isNightMode() {
  return (
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("dark")
  );
}

function flakeMotion(range) {
  const duration = 7.5 + Math.random() * 3.5;
  return {
    duration,
    delay: -(Math.random() * duration),
    drift: (Math.random() - 0.5) * range,
    spin: (Math.random() > 0.5 ? 1 : -1) * (40 + Math.random() * 90),
    sway: 18 + Math.random() * 36,
    fall: 108 + Math.random() * 28,
  };
}

function makePetals() {
  return Array.from({ length: PETAL_COUNT }, (_, i) => {
    const motion = flakeMotion(160);
    return {
      id: `${Date.now()}-${i}`,
      kind: "petal",
      src: PETAL_SRCS[i % PETAL_SRCS.length],
      left: `${4 + Math.random() * 92}%`,
      size: 18 + Math.random() * 26,
      opacity: 0.7 + Math.random() * 0.3,
      ...motion,
      spin: (Math.random() > 0.5 ? 1 : -1) * (100 + Math.random() * 220),
      sway: 28 + Math.random() * 44,
    };
  });
}

function makeSnow() {
  return Array.from({ length: SNOW_COUNT }, (_, i) => {
    const crystal = i % 8 === 0;
    const motion = flakeMotion(crystal ? 90 : 70);
    return {
      id: `${Date.now()}-s${i}`,
      kind: crystal ? "crystal" : "dot",
      left: `${1 + Math.random() * 98}%`,
      size: crystal ? 9 + Math.random() * 9 : 2.5 + Math.random() * 5.5,
      opacity: crystal ? 0.55 + Math.random() * 0.3 : 0.45 + Math.random() * 0.45,
      blur: crystal ? 0 : Math.random() * 0.6,
      ...motion,
      spin: crystal
        ? (Math.random() > 0.5 ? 1 : -1) * (80 + Math.random() * 140)
        : (Math.random() > 0.5 ? 1 : -1) * (12 + Math.random() * 28),
    };
  });
}

function Snowflake({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.15" strokeLinecap="round">
        <path d="M8 1.2v13.6M1.2 8h13.6M3.1 3.1l9.8 9.8M12.9 3.1l-9.8 9.8" />
        <path d="M8 3.1l1.15-1.6M8 3.1l-1.15-1.6M8 12.9l1.15 1.6M8 12.9l-1.15 1.6" />
      </g>
    </svg>
  );
}

export default function FallingPetals() {
  const [petals, setPetals] = useState(null);
  const [fading, setFading] = useState(false);
  const [night, setNight] = useState(false);
  const timers = useRef([]);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  const start = useCallback(() => {
    clearTimers();
    const snowing = isNightMode();
    setNight(snowing);
    setFading(false);
    setPetals(snowing ? makeSnow() : makePetals());

    timers.current.push(
      setTimeout(() => setFading(true), FALL_MS),
      setTimeout(() => {
        setPetals(null);
        setFading(false);
      }, FALL_MS + FADE_MS)
    );
  }, []);

  useEffect(() => {
    const onFall = () => start();
    window.addEventListener("petal-fall", onFall);

    if (typeof window !== "undefined" && window.location.hash === "#projects") {
      const t = setTimeout(start, 120);
      timers.current.push(t);
    }

    return () => {
      window.removeEventListener("petal-fall", onFall);
      clearTimers();
    };
  }, [start]);

  if (!petals) return null;

  return (
    <div
      className={`falling-petals${night ? " falling-petals--snow" : ""}${
        fading ? " is-fading" : ""
      }`}
      aria-hidden="true"
    >
      {petals.map((p) => {
        const style = {
          left: p.left,
          width: p.size,
          height: p.kind === "petal" ? "auto" : p.size,
          opacity: p.opacity,
          animationDuration: `${p.duration}s`,
          animationDelay: `${p.delay}s`,
          "--drift": p.drift,
          "--spin": p.spin,
          "--sway": p.sway,
          "--fall": p.fall,
          filter:
            p.kind === "dot" && p.blur
              ? `blur(${p.blur}px)`
              : undefined,
        };

        if (p.kind === "petal") {
          return (
            <img
              key={p.id}
              src={p.src}
              alt=""
              className="falling-petals__petal"
              style={style}
            />
          );
        }

        if (p.kind === "crystal") {
          return (
            <span key={p.id} className="falling-petals__snow falling-petals__snow--crystal" style={style}>
              <Snowflake size={p.size} />
            </span>
          );
        }

        return <span key={p.id} className="falling-petals__snow" style={style} />;
      })}
    </div>
  );
}

export function triggerPetalFall() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("petal-fall"));
  }
}
