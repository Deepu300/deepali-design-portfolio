"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import "./home-hero.css";

export default function HomeHero() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const isNight = mounted && resolvedTheme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const nightFrame = document.querySelector(".home-hero__iframe--night");
    nightFrame?.contentWindow?.postMessage("resize-scene", "*");
  }, [isNight]);

  const scrollToFooter = (event) => {
    event.preventDefault();
    const footer = document.getElementById("footer");
    if (!footer) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    footer.scrollIntoView({
      behavior: prefersReduced ? "auto" : "smooth",
      block: "end",
    });
  };

  return (
    <section className="home-hero" aria-label="Introduction">
      <div className="home-hero__stage">
        <iframe
          className="home-hero__iframe home-hero__iframe--day"
          src="/pond/index.html"
          title="Animated koi pond — Hi, I'm Deepali"
          loading="eager"
        />
        <iframe
          className="home-hero__iframe home-hero__iframe--night"
          src="/rain/index.html?v=9"
          title="Animated rainy night — Hi, I'm Deepali"
          loading="eager"
        />
        <button
          type="button"
          className="home-hero__theme"
          aria-label={isNight ? "Switch to day mode" : "Switch to night mode"}
          aria-pressed={isNight}
          onClick={() => setTheme(isNight ? "light" : "dark")}
        >
          {isNight ? (
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
              <circle cx="7.5" cy="7.5" r="3.1" stroke="currentColor" strokeWidth="1.2" />
              <path
                d="M7.5 1.2v1.4M7.5 12.4v1.4M1.2 7.5h1.4M12.4 7.5h1.4M3.05 3.05l1 1M10.95 10.95l1 1M3.05 11.95l1-1M10.95 4.05l1-1"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M12.2 8.35A5.35 5.35 0 0 1 5.65 1.8 5.4 5.4 0 1 0 12.2 8.35Z"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>
      <div className="home-hero__intro">
        <p>
          Masters at{" "}
          <a
            href="https://www.nyu.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            NYU
          </a>
        </p>
        <p>
          Prev.{" "}
          <a
            href="https://www.adobe.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Adobe
          </a>
          {" | "}
          <a
            href="https://www.bosch.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bosch
          </a>
          {" | "}
          <a
            href="https://www.hdfcbank.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            HDFC Bank
          </a>
        </p>
        <a
          href="#footer"
          className="home-hero__contact"
          onClick={scrollToFooter}
        >
          Contact
        </a>
      </div>
    </section>
  );
}
