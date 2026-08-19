"use client";

import "./home-hero.css";

export default function HomeHero() {
  return (
    <section className="home-hero" aria-label="Introduction">
      <iframe
        className="home-hero__iframe"
        src="/pond/index.html"
        title="Animated koi pond — Hi, I'm Deepali"
        loading="eager"
      />
    </section>
  );
}
