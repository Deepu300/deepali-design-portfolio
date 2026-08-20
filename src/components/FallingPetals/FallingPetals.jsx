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
const COUNT = 28;

function makePetals() {
  return Array.from({ length: COUNT }, (_, i) => {
    const size = 18 + Math.random() * 26;
    const duration = 8 + Math.random() * 2;
    // Negative delay so petals start already mid-fall (continuous stream)
    const delay = -(Math.random() * duration);
    const drift = (Math.random() - 0.5) * 160;
    const spin = (Math.random() > 0.5 ? 1 : -1) * (100 + Math.random() * 220);
    const sway = 28 + Math.random() * 44;
    const fall = 105 + Math.random() * 30;
    return {
      id: `${Date.now()}-${i}`,
      src: PETAL_SRCS[i % PETAL_SRCS.length],
      left: `${4 + Math.random() * 92}%`,
      size,
      duration,
      delay,
      drift,
      spin,
      sway,
      fall,
      opacity: 0.7 + Math.random() * 0.3,
    };
  });
}

export default function FallingPetals() {
  const [petals, setPetals] = useState(null);
  const [fading, setFading] = useState(false);
  const timers = useRef([]);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  const start = useCallback(() => {
    clearTimers();
    setFading(false);
    setPetals(makePetals());

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
      className={`falling-petals${fading ? " is-fading" : ""}`}
      aria-hidden="true"
    >
      {petals.map((p) => (
        <img
          key={p.id}
          src={p.src}
          alt=""
          className="falling-petals__petal"
          style={{
            left: p.left,
            width: p.size,
            height: "auto",
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            "--drift": p.drift,
            "--spin": p.spin,
            "--sway": p.sway,
            "--fall": p.fall,
          }}
        />
      ))}
    </div>
  );
}

export function triggerPetalFall() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("petal-fall"));
  }
}
