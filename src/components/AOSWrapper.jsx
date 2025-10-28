"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function AOSWrapper() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // whether animation should happen only once
      easing: "ease-out-cubic",
    });
  }, []);

  return null;
}
