"use client";

import "./home-hero.css";

export default function HomeHero() {
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
      <iframe
        className="home-hero__iframe"
        src="/pond/index.html"
        title="Animated koi pond — Hi, I'm Deepali"
        loading="eager"
      />
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
