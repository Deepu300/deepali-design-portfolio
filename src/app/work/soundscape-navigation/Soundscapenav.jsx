"use client";

import React, { useEffect, useState, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "./SoundscapeNav.module.css"; // Adjust import path to map your Next repository structural architecture

export default function SoundscapeNav() {
  const [activeSection, setActiveSection] = useState("");
  const revealElementsRef = useRef([]);

  // Handles smooth compilation mapping for scroll transformation layout boxes
  const addToRevealRefs = (el) => {
    if (el && !revealElementsRef.current.includes(el)) {
      revealElementsRef.current.push(el);
    }
  };

  useEffect(() => {
    // 1. Intersection Observer layout hook configuration
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.revealIn);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    revealElementsRef.current.forEach((el, i) => {
      if (el) {
        el.style.transitionDelay = `${(i % 4) * 55}ms`;
        io.observe(el);
      }
    });

    // 2. Active Header tracking context sync pipeline
    const handleScroll = () => {
      const strategicSections = ["problem", "research", "solution", "impact"];
      let currentSelectionId = "";

      strategicSections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const boundingRectangle = element.getBoundingClientRect();
          if (boundingRectangle.top < 200) {
            currentSelectionId = id;
          }
        }
      });

      setActiveSection(currentSelectionId);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.bodyContainer}>
      <Head>
        <title>Soundscape Navigation — Deepali Babuta</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400&family=Outfit:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <nav className={styles.nav}>
        <div className={styles.wrapWide}>
          <div className={styles.navWrap}>
            <Link href="/" className={styles.brand}>
              Deepali<span>.</span>
            </Link>
            <div className={styles.navlinks}>
              <a
                href="#problem"
                className={activeSection === "problem" ? styles.active : ""}
              >
                Problem
              </a>
              <a
                href="#research"
                className={activeSection === "research" ? styles.active : ""}
              >
                Research
              </a>
              <a
                href="#solution"
                className={activeSection === "solution" ? styles.active : ""}
              >
                Solution
              </a>
              <a
                href="#impact"
                className={activeSection === "impact" ? styles.active : ""}
              >
                Impact
              </a>
              <a href="#">Resume</a>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION MODULE */}
      <header className={styles.hero}>
        <div className={styles.wrap}>
          <h1 ref={addToRevealRefs} className={styles.reveal}>
            Navigation you <em>hear</em>, not just stare at.
          </h1>
          <p ref={addToRevealRefs} className={`${styles.sub} ${styles.reveal}`}>
            A mindful audio layer for Google Maps that lets people walk a city
            by ear — staying present, rebuilding their sense of direction, and
            finally looking up from the blue dot.
          </p>
          <div
            ref={addToRevealRefs}
            className={`${styles.facts} ${styles.reveal}`}
          >
            <div>
              <span>My Role</span>
              <strong>UX Research & Design</strong>
            </div>
            <div>
              <span>Timeline</span>
              <strong>End-to-end concept</strong>
            </div>
            <div>
              <span>Platform</span>
              <strong>iOS · Walking Nav</strong>
            </div>
            <div>
              <span>Scope</span>
              <strong>Research → Hi-Fi Prototype</strong>
            </div>
          </div>
          <div
            ref={addToRevealRefs}
            className={`${styles.reveal}`}
            style={{ padding: "2.5rem 0" }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                paddingTop: "56.25%",
                borderRadius: "1.5rem",
                overflow: "hidden",
                boxShadow: "0 24px 80px rgba(0, 0, 0, 0.12)",
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/sjoTtDyHt4w"
                title="Soundscape Navigation video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* OVERVIEW SUMMARY GRID */}
      <div className={styles.wrap} style={{ paddingBottom: "30px" }}>
        <div
          ref={addToRevealRefs}
          className={`${styles.summary} ${styles.reveal}`}
        >
          <h2>The 30-second version</h2>
          <div className={styles.sgrid}>
            <div className={styles.cell}>
              <h3>The Problem</h3>
              <p>
                Constant turn-by-turn guidance weakens spatial memory and keeps
                eyes locked to a screen.
              </p>
            </div>
            <div className={styles.cell}>
              <h3>The Gap</h3>
              <p>
                Maps is visual-first. Its audio is purely functional — no layer
                that builds awareness of place.
              </p>
            </div>
            <div className={styles.cell}>
              <h3>The Solution</h3>
              <p>
                Soundscape Mode: four audio profiles guiding by landmark,
                ambience, and haptics.
              </p>
            </div>
            <div className={styles.cell}>
              <h3>The Impact</h3>
              <p>
                Reduced screen-checking in testing; reframed navigation from
                optimizing to exploring.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 01 PROBLEM FOCUS STATEMENT */}
      <section id="problem" className={styles.section}>
        <div className={styles.wrap}>
          <div
            ref={addToRevealRefs}
            className={`${styles.secNum} ${styles.reveal}`}
          >
            01 — The Problem
          </div>
          <h2
            ref={addToRevealRefs}
            className={`${styles.secH} ${styles.reveal}`}
          >
            We outsourced our sense of direction to a blue dot.
          </h2>
          <p
            ref={addToRevealRefs}
            className={`${styles.secBody} ${styles.reveal}`}
          >
            Maps have guided human movement for millennia — people read
            landscapes and built their own internal compass. GPS does that work
            for us now, and the convenience has a cost. Research links constant
            turn-by-turn guidance to{" "}
            <strong>weakened spatial memory and wayfinding skills</strong>{" "}
            (Fabrikant, 2024). Visual-first maps flatten a city into a line on a
            screen, leaving no room for the textures, rhythms, and sounds that
            help people orient, feel present, and connect to where they are.
          </p>
          <div
            ref={addToRevealRefs}
            className={`${styles.stats} ${styles.reveal}`}
          >
            <div className={styles.stat}>
              <div className={styles.n}>21M+</div>
              <p>
                U.S. Google Maps downloads in 2023 — the default way millions
                navigate every day.
              </p>
            </div>
            <div className={styles.stat}>
              <div className={styles.n}>~50×</div>
              <p>
                Times per month the average person opens Google Maps. The
                behavior is constant.
              </p>
            </div>
            <div className={styles.stat}>
              <div className={styles.n}>75%</div>
              <p>
                Of surveyed users rely on GPS even for places they already know
                — the dependency is total.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 02 DETAILED UX RESEARCH MATRIX */}
      <section className={`${styles.band} ${styles.bandSage}`} id="research">
        <div className={styles.wrap}>
          <div
            ref={addToRevealRefs}
            className={`${styles.secNum} ${styles.reveal}`}
          >
            02 — Research
          </div>
          <h2
            ref={addToRevealRefs}
            className={`${styles.secH} ${styles.reveal}`}
          >
            I asked people how they actually find their way.
          </h2>
          <p
            ref={addToRevealRefs}
            className={`${styles.secBody} ${styles.reveal}`}
          >
            A competitive teardown of Maps, Waze, and Apple Maps plus a user
            survey surfaced one consistent friction: people don't trust the
            screen, yet can't look away from it. Three findings shaped
            everything that followed.
          </p>
          <div className={styles.insights}>
            <div
              ref={addToRevealRefs}
              className={`${styles.icard} ${styles.reveal}`}
            >
              <div className={styles.ico}>🧭</div>
              <div className={styles.big}>83% struggle to orient</div>
              <p>
                Users need time to calibrate. The blue dot feels misleading when
                they're trying to figure out which way to face.
              </p>
            </div>
            <div
              ref={addToRevealRefs}
              className={`${styles.icard} ${styles.reveal}`}
            >
              <div className={styles.ico}>🏛️</div>
              <div className={styles.big}>50% navigate by landmark</div>
              <p>
                When phone-free, people orient by buildings, parks, and
                storefronts — not street names or compass directions.
              </p>
            </div>
            <div
              ref={addToRevealRefs}
              className={`${styles.icard} ${styles.reveal}`}
            >
              <div className={styles.ico}>📡</div>
              <div className={styles.big}>58% lose trust offline</div>
              <p>
                Without signal, users fall back to paper maps or screenshots.
                The app abandons them when they need it most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* USER PERSONA QUOTE BANNER */}
      <section className={`${styles.band} ${styles.bandNavy}`}>
        <div className={styles.wrap}>
          <div
            ref={addToRevealRefs}
            className={`${styles.quote} ${styles.reveal}`}
          >
            <blockquote>
              "I just want to confidently say I know where I'm going, without
              looking down at my phone every other minute."
            </blockquote>
            <cite>Maya, 24 — Everyday Urban Navigator · Primary Persona</cite>
          </div>
        </div>
      </section>

      {/* 03 CORE GAP DIAGNOSIS MAP */}
      <section id="gap" className={styles.section}>
        <div className={styles.wrap}>
          <div
            ref={addToRevealRefs}
            className={`${styles.secNum} ${styles.reveal}`}
          >
            03 — The Gap
          </div>
          <h2
            ref={addToRevealRefs}
            className={`${styles.secH} ${styles.reveal}`}
          >
            Maps had a voice. It didn't have an audio layer that built
            awareness.
          </h2>
          <p
            ref={addToRevealRefs}
            className={`${styles.secBody} ${styles.reveal}`}
          >
            Existing voice nav is purely functional — "turn left in 400 feet."
            It never helps you understand <strong>where</strong> you are.
            Synthesizing the research, the real problem wasn't accuracy. It was{" "}
            <strong>presence</strong>. That gap framed the brief:
          </p>
          <div className={styles.ba}>
            <div
              ref={addToRevealRefs}
              className={`${styles.col} ${styles.before} ${styles.reveal}`}
            >
              <h4>What existed</h4>
              <ul>
                <li>Screen-dependent, visual-first navigation</li>
                <li>Voice limited to turn cues and distances</li>
                <li>No sense of surroundings or local context</li>
                <li>Degrades sharply in low-signal areas</li>
                <li>Cluttered with pins, reviews, and prompts</li>
              </ul>
            </div>
            <div
              ref={addToRevealRefs}
              className={`${styles.col} ${styles.after} ${styles.reveal}`}
            >
              <h4>The opportunity</h4>
              <ul>
                <li>Navigate without blind dependence on the screen</li>
                <li>Use audio to teach the environment, not just direct</li>
                <li>Anchor to landmarks the way people naturally do</li>
                <li>Build confidence and mental mapping over time</li>
                <li>Stay calm, ambient, and out of the way</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 04 SYSTEM SOLUTION MODULE */}
      <section className={`${styles.band} ${styles.bandTan}`} id="solution">
        <div className={styles.wrap}>
          <div
            ref={addToRevealRefs}
            className={`${styles.secNum} ${styles.reveal}`}
          >
            04 — The Solution
          </div>
          <h2
            ref={addToRevealRefs}
            className={`${styles.secH} ${styles.reveal}`}
          >
            Soundscape Mode: walk by ear, not just by screen.
          </h2>
          <p
            ref={addToRevealRefs}
            className={`${styles.secBody} ${styles.reveal}`}
            style={{ color: "#4a4434" }}
          >
            <strong style={{ color: "var(--navy)" }}>
              A subtle audio layer for walking navigation.
            </strong>{" "}
            With the phone in your pocket, you follow the route by ear and stay
            present in the neighborhood. One size never fit how differently
            people navigate — so it ships as four switchable modes, each built
            on a research finding.
          </p>
          <div className={styles.modes}>
            <div
              ref={addToRevealRefs}
              className={`${styles.mode} ${styles.reveal}`}
            >
              <div className={styles.top}>
                <div className={styles.md}>🔉</div>
                <div>
                  <span className={styles.lab}>Mode 01</span>
                  <h4>Minimal</h4>
                </div>
              </div>
              <p>
                Low-key audio with only essential turn and transition cues.
                Keeps you oriented without overload — a subtle assistant, not a
                constant narrator.
              </p>
            </div>
            <div
              ref={addToRevealRefs}
              className={`${styles.mode} ${styles.reveal}`}
            >
              <div className={styles.top}>
                <div className={styles.md}>🏛️</div>
                <div>
                  <span className={styles.lab}>Mode 02</span>
                  <h4>Landmark</h4>
                </div>
              </div>
              <p>
                Turn-based guidance anchored to real places — "face the park,"
                "look for the museum entrance." Built directly on the 50% who
                navigate by landmark.
              </p>
            </div>
            <div
              ref={addToRevealRefs}
              className={`${styles.mode} ${styles.reveal}`}
            >
              <div className={styles.top}>
                <div className={styles.md}>🌆</div>
                <div>
                  <span className={styles.lab}>Mode 03</span>
                  <h4>Immersive</h4>
                </div>
              </div>
              <p>
                Ambient sound and short narratives about each place and the life
                around it. Reframes a walk from optimization into exploration.
              </p>
            </div>
            <div
              ref={addToRevealRefs}
              className={`${styles.mode} ${styles.reveal}`}
            >
              <div className={styles.top}>
                <div className={styles.md}>♿</div>
                <div>
                  <span className={styles.lab}>Mode 04</span>
                  <h4>Accessible</h4>
                </div>
              </div>
              <p>
                High-contrast audio, visuals, and haptics for clearer
                orientation — stronger cues, haptic-first navigation,
                hearing-aid-friendly output.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 05 STRATEGIC TIMELINE PROCESS STACK */}
      <section id="process" className={styles.section}>
        <div className={styles.wrap}>
          <div
            ref={addToRevealRefs}
            className={`${styles.secNum} ${styles.reveal}`}
          >
            05 — How I Got There
          </div>
          <h2
            ref={addToRevealRefs}
            className={`${styles.secH} ${styles.reveal}`}
          >
            From a debate about audio to four validated modes.
          </h2>
          <div className={styles.phases}>
            <div
              ref={addToRevealRefs}
              className={`${styles.phase} ${styles.reveal}`}
            >
              <div>
                <span className={styles.pn}>01</span>
                <div className={styles.ph}>Reframe</div>
              </div>
              <div>
                <h4>Reframed the question</h4>
                <p>
                  The team split 50/50 on whether audio was even wanted. The
                  insight: it wasn't audio that was the problem — it was the{" "}
                  <em>kind</em> of audio. That pivot pointed straight at
                  soundscapes.
                </p>
              </div>
            </div>
            <div
              ref={addToRevealRefs}
              className={`${styles.phase} ${styles.reveal}`}
            >
              <div>
                <span className={styles.pn}>02</span>
                <div className={styles.ph}>Map</div>
              </div>
              <div>
                <h4>Mapped the user flow</h4>
                <p>
                  Charted where Soundscape launches inside existing walking nav,
                  so it felt like a native Maps capability rather than a bolt-on
                  feature.
                </p>
              </div>
            </div>
            <div
              ref={addToRevealRefs}
              className={`${styles.phase} ${styles.reveal}`}
            >
              <div>
                <span className={styles.pn}>03</span>
                <div className={styles.ph}>Prototype</div>
              </div>
              <div>
                <h4>Mid-fidelity exploration</h4>
                <p>
                  Prototyped the core surfaces — landmark cards, settings, the
                  upcoming-landmark list, and a mini audio player — to
                  pressure-test the model before polish.
                </p>
              </div>
            </div>
            <div
              ref={addToRevealRefs}
              className={`${styles.phase} ${styles.reveal}`}
            >
              <div>
                <span className={styles.pn}>04</span>
                <div className={styles.ph}>Test</div>
              </div>
              <div>
                <h4>Hi-fi & usability testing</h4>
                <p>
                  Built all four modes in Google's visual language and ran
                  task-based testing on real sidewalks to see whether people
                  could tell modes apart and actually look up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06 CRITICAL MEASURED IMPACT BOXES */}
      <section className={`${styles.band} ${styles.bandCream2}`} id="impact">
        <div className={styles.wrap}>
          <div
            ref={addToRevealRefs}
            className={`${styles.secNum} ${styles.reveal}`}
          >
            06 — Impact
          </div>
          <h2
            ref={addToRevealRefs}
            className={`${styles.secH} ${styles.reveal}`}
          >
            It changed how people held the phone — and how they thought about
            the walk.
          </h2>
          <p
            ref={addToRevealRefs}
            className={`${styles.secBody} ${styles.reveal}`}
          >
            As a concept project, impact splits into what testing proved and
            what the feature is positioned to deliver at scale.
          </p>
          <div className={styles.impact}>
            <div
              ref={addToRevealRefs}
              className={`${styles.ibox} ${styles.proven} ${styles.reveal}`}
            >
              <span className={styles.tag}>Proven in testing</span>
              <div className={styles.h}>Less screen-checking</div>
              <p>
                Landmark Mode measurably reduced how often participants looked
                at their screens during navigation tasks.
              </p>
            </div>
            <div
              ref={addToRevealRefs}
              className={`${styles.ibox} ${styles.proven} ${styles.reveal}`}
            >
              <span className={styles.tag}>Proven in testing</span>
              <div className={styles.h}>All 4 modes legible</div>
              <p>
                Users confidently differentiated every mode during task
                observation and found the headphone entry point intuitive to
                locate.
              </p>
            </div>
            <div
              ref={addToRevealRefs}
              className={`${styles.ibox} ${styles.proj} ${styles.reveal}`}
            >
              <span className={styles.tag}>Projected at scale</span>
              <div className={styles.h}>Exploration, not optimization</div>
              <p>
                Immersive Mode reframed navigation as exploring a place rather
                than racing through it — a new emotional value for Maps'
                most-used surface.
              </p>
            </div>
            <div
              ref={addToRevealRefs}
              className={`${styles.ibox} ${styles.proj} ${styles.reveal}`}
            >
              <span className={styles.tag}>Projected at scale</span>
              <div className={styles.h}>Accessibility-first</div>
              <p>
                A dedicated Accessible Mode opens confident walking nav to
                low-vision and hard-of-hearing users underserved by visual-first
                maps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 07 DESIGN REFLECTIONS AND NEXT STEPS */}
      <section id="learnings" className={styles.section}>
        <div className={styles.wrap}>
          <div
            ref={addToRevealRefs}
            className={`${styles.secNum} ${styles.reveal}`}
          >
            07 — Reflections
          </div>
          <h2
            ref={addToRevealRefs}
            className={`${styles.secH} ${styles.reveal}`}
          >
            What I learned, and what I'd do next.
          </h2>
          <div className={styles.learn}>
            <div
              ref={addToRevealRefs}
              className={`${styles.lcard} ${styles.reveal}`}
            >
              <h4>Pacing is a feature</h4>
              <p>
                Testing flagged cue pacing and onboarding previews as the next
                refinement. Audio UX lives or dies on rhythm, not just content.
              </p>
            </div>
            <div
              ref={addToRevealRefs}
              className={`${styles.lcard} ${styles.reveal}`}
            >
              <h4>Design with, not for</h4>
              <p>
                Accessible Mode needs to be built alongside the users who'll
                rely on it — co-design, not assumption. That's the priority for
                the next round.
              </p>
            </div>
            <div
              ref={addToRevealRefs}
              className={`${styles.lcard} ${styles.reveal}`}
            >
              <h4>Prove the long game</h4>
              <p>
                The real bet is spatial memory recovering over time. I'd
                instrument KPIs and longitudinal surveys to test whether
                wayfinding confidence grows.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.wrap}>
          <div className={styles.big}>
            Reimagining navigation so we form lasting connections to the places
            we move through.
          </div>
          <p>
            Soundscape Navigation was an exercise in designing for presence —
            proving the most-used screen in someone's pocket can teach them to
            look up.
          </p>
          <div className={styles.fcredit}>
            <span>Soundscape Navigation · Deepali Babuta</span>
            <span>Concept project · Not affiliated with Google</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
