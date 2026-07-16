"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";

/**
 * Global scroll-reveal via AOS (already a project dependency).
 * Opt in with: data-aos="fade-up"  (+ optional data-aos-delay="100")
 * Skip above-the-fold heroes — omit data-aos there.
 */
export default function AOSWrapper() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      document.documentElement.classList.add("reduce-motion");
      document.documentElement.classList.remove("aos-ready");
      return;
    }

    document.documentElement.classList.remove("reduce-motion");
    document.documentElement.classList.add("aos-ready");

    AOS.init({
      duration: 550,
      easing: "ease-out",
      once: true,
      offset: 80,
      delay: 0,
    });

    // Next.js client navigations need a refresh so new nodes are observed
    requestAnimationFrame(() => {
      AOS.refreshHard();
    });
  }, [pathname]);

  return null;
}
