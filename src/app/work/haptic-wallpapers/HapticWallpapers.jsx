"use client";

import React, { useEffect, useState, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "./HapticWallpapers.module.css"; // Verify this match path fits your project architecture

export default function HapticWallpapers() {
  const [activeSection, setActiveSection] = useState("");
  const [rippleActive, setRippleActive] = useState(false);
  const revealElementsRef = useRef([]);

  // Setup refs handler target array tracking for smooth scroll entry tracking
  const addToRevealRefs = (el) => {
    if (el && !revealElementsRef.current.includes(el)) {
      revealElementsRef.current.push(el);
    }
  };

  // Click handler to reboot animation keyframes sequence smoothly
  const triggerDisplayRipple = () => {
    setRippleActive(false);
    setTimeout(() => {
      setRippleActive(true);
    }, 10);
  };

  useEffect(() => {
    // 1. Setup IntersectionObserver lifecycle tracking for layout entry animation
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

    // 2. Continuous tracking configuration for navigation linkage highlighting
    const handleScroll = () => {
      const targetSections = [
        "problem",
        "experiment",
        "bridge",
        "solution",
        "impact",
      ];
      let currentSelection = "";

      targetSections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < 200) {
            currentSelection = id;
          }
        }
      });

      setActiveSection(currentSelection);
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
        <title>Haptic Wallpapers — Deepali Babuta</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700&family=Outfit:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <nav className={styles.nav}>
        <div className={styles.wrapWide}>
          <div className={styles.navWrap}>
            <Link href="/" className={styles.brand}>
              Deepali.
            </Link>
            <div className={styles.navlinks}>
              <a
                href="#problem"
                className={activeSection === "problem" ? styles.active : ""}
              >
                Problem
              </a>
              <a
                href="#experiment"
                className={activeSection === "experiment" ? styles.active : ""}
              >
                Experiment
              </a>
              <a
                href="#bridge"
                className={activeSection === "bridge" ? styles.active : ""}
              >
                Bridging
              </a>
              <a
                href="#solution"
                className={activeSection === "solution" ? styles.active : ""}
              >
                Solutions
              </a>
              <a
                href="#impact"
                className={activeSection === "impact" ? styles.active : ""}
              >
                Impact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION BLOCK */}
      <header className={styles.hero}>
        <div className={styles.wrap}>
          <h1>Haptic Wallpapers</h1>
          <p className={styles.sub}>
            Reimagining haptic feedback by learning from how people emotionally
            react to real-world textures — designing touch that's joyful, not
            just functional.
          </p>
        </div>
      </header>

      <div className={styles.wrap}>
        <div
          ref={addToRevealRefs}
          className={`${styles.facts} ${styles.reveal}`}
        >
          <div>
            <span>Role</span>
            <strong>UX Research & Concept Design</strong>
          </div>
          <div>
            <span>Method</span>
            <strong>Lab experiment · Interviews</strong>
          </div>
          <div>
            <span>Partner</span>
            <strong>Dept. of Psychology, DU</strong>
          </div>
          <div>
            <span>Outcome</span>
            <strong>4 Concepts</strong>
          </div>
        </div>
      </div>

      {/* 01 UNDERSTANDING TACTILE SENSATIONS */}
      <section id="touch" className={styles.section}>
        <div className={styles.wrap}>
          <div
            ref={addToRevealRefs}
            className={`${styles.ghead} ${styles.reveal}`}
          >
            Understanding Tactile Sensations
          </div>
          <p
            ref={addToRevealRefs}
            className={`${styles.secBody} ${styles.reveal}`}
          >
            Human touch communicates beyond words — it carries emotion and
            intent. A single touch travels to the brain, generates an emotional
            response, and decodes a kind of secret message.{" "}
            <strong>That chain is what I wanted technology to learn.</strong>
          </p>
          <div
            ref={addToRevealRefs}
            className={`${styles.flow} ${styles.reveal}`}
          >
            <div className={styles.step}>
              <div className={styles.e}>✋</div>
              <h4>Human touch</h4>
              <p>Skin meets a texture in the real world.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.e}>🧠</div>
              <h4>Signal to brain</h4>
              <p>The sensation travels and is processed.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.e}>💗</div>
              <h4>Emotional response</h4>
              <p>A feeling is generated — calm, joy, unease.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.e}>✉️</div>
              <h4>Decoded meaning</h4>
              <p>Touch becomes a message we understand.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 02 HAPTIC FEEDBACK IN TECHNOLOGY */}
      <section id="tech" className={styles.section}>
        <div className={styles.wrap}>
          <div
            ref={addToRevealRefs}
            className={`${styles.ghead} ${styles.reveal}`}
          >
            Your device can touch you back
          </div>
          <p
            ref={addToRevealRefs}
            className={`${styles.secBody} ${styles.reveal}`}
          >
            Haptic technology uses touch and vibration to communicate sensations
            to a user. We already accept it in small doses, in two familiar
            places:
          </p>
          <div className={styles.twocol}>
            <div
              ref={addToRevealRefs}
              className={`${styles.box} ${styles.reveal}`}
            >
              <div className={styles.e}>🎮</div>
              <h4>A controller vibrating</h4>
              <p>
                Game controllers rumble to make a moment land — the most
                immersive haptics most people feel.
              </p>
            </div>
            <div
              ref={addToRevealRefs}
              className={`${styles.box} ${styles.reveal}`}
            >
              <div className={styles.e}>📱</div>
              <h4>A button-click on glass</h4>
              <p>
                A phone screen mimics the sensation of pressing a physical
                button — useful, but purely mechanical.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 THE LIMITATION MODULE */}
      <section id="problem" className={styles.section}>
        <div className={styles.wrap}>
          <div
            ref={addToRevealRefs}
            className={`${styles.ghead} ${styles.reveal}`}
          >
            The Limitation
          </div>
          <p
            ref={addToRevealRefs}
            className={`${styles.secBody} ${styles.reveal}`}
          >
            As a Microsoft article notes, today's tactile offerings are mostly
            limited to buzz — vibrations from internal motors nested inside the
            device. <strong>It notifies, then it's gone.</strong> Compared to
            visuals that grab attention and audio that engages, touch is treated
            as the lowest-bandwidth afterthought — and AR/VR is already far
            ahead of the phone in your pocket.
          </p>
        </div>
      </section>

      {/* 04 USER PERSPECTIVES GRID */}
      <section id="voices" className={styles.section}>
        <div className={styles.wrap}>
          <div
            ref={addToRevealRefs}
            className={`${styles.ghead} ${styles.reveal}`}
          >
            User Perspectives
          </div>
          <p
            ref={addToRevealRefs}
            className={`${styles.secBody} ${styles.reveal}`}
          >
            After collecting qualitative data on haptic feedback and its usage,
            the verdict was consistent — functional, fleeting, and occasionally
            irritating.
          </p>
          <div className={styles.voices}>
            <div
              ref={addToRevealRefs}
              className={`${styles.voice} ${styles.reveal}`}
            >
              <p>
                "It's not something that sparks joy — it's just functional, to
                some extent."
              </p>
              <span>On everyday phone haptics</span>
            </div>
            <div
              ref={addToRevealRefs}
              className={`${styles.voice} ${styles.reveal}`}
            >
              <p>
                "Haptics makes me feel anxious sometimes, because of the sudden
                buzz."
              </p>
              <span>On abrupt feedback</span>
            </div>
            <div
              ref={addToRevealRefs}
              className={`${styles.voice} ${styles.reveal}`}
            >
              <p>
                "It doesn't have a long-lasting impact — it's there to notify,
                then it's gone."
              </p>
              <span>On memorability</span>
            </div>
            <div
              ref={addToRevealRefs}
              className={`${styles.voice} ${styles.reveal}`}
            >
              <p>
                "Immersive in games, but in phones it's limited to just
                awareness."
              </p>
              <span>On the AR/VR gap</span>
            </div>
          </div>
        </div>
      </section>

      {/* 05 4-MINUTE TYPE EXPERIMENT METRIC BAR CHART */}
      <section id="typeexp" className={styles.section}>
        <div className={styles.wrap}>
          <div
            ref={addToRevealRefs}
            className={`${styles.ghead} ${styles.reveal}`}
          >
            The 4-Minute Type Experiment
          </div>
          <p
            ref={addToRevealRefs}
            className={`${styles.secBody} ${styles.reveal}`}
          >
            I tracked how people felt about typing haptics across a four-minute
            session, in four phases. Feedback that started neutral drifted
            toward negative — the buzz that helps at first begins to grate.
          </p>
          <div
            ref={addToRevealRefs}
            className={`${styles.typeexp} ${styles.reveal}`}
          >
            <div className={styles.legend}>
              <span>
                <i className={styles.pos}></i>Positive
              </span>
              <span>
                <i className={styles.neu}></i>Neutral
              </span>
              <span>
                <i className={styles.neg}></i>Negative
              </span>
            </div>
            <div className={styles.bars}>
              <div className={styles.barcol}>
                <div
                  className={`${styles.seg} ${styles.pos}`}
                  style={{ height: "30%" }}
                ></div>
                <div
                  className={`${styles.seg} ${styles.neu}`}
                  style={{ height: "50%" }}
                ></div>
                <div
                  className={`${styles.seg} ${styles.neg}`}
                  style={{ height: "20%" }}
                ></div>
                <div className={styles.lab}>Phase 1</div>
              </div>
              <div className={styles.barcol}>
                <div
                  className={`${styles.seg} ${styles.pos}`}
                  style={{ height: "22%" }}
                ></div>
                <div
                  className={`${styles.seg} ${styles.neu}`}
                  style={{ height: "45%" }}
                ></div>
                <div
                  className={`${styles.seg} ${styles.neg}`}
                  style={{ height: "33%" }}
                ></div>
                <div className={styles.lab}>Phase 2</div>
              </div>
              <div className={styles.barcol}>
                <div
                  className={`${styles.seg} ${styles.pos}`}
                  style={{ height: "15%" }}
                ></div>
                <div
                  className={`${styles.seg} ${styles.neu}`}
                  style={{ height: "40%" }}
                ></div>
                <div
                  className={`${styles.seg} ${styles.neg}`}
                  style={{ height: "45%" }}
                ></div>
                <div className={styles.lab}>Phase 3</div>
              </div>
              <div className={styles.barcol}>
                <div
                  className={`${styles.seg} ${styles.pos}`}
                  style={{ height: "10%" }}
                ></div>
                <div
                  className={`${styles.seg} ${styles.neu}`}
                  style={{ height: "32%" }}
                ></div>
                <div
                  className={`${styles.seg} ${styles.neg}`}
                  style={{ height: "58%" }}
                ></div>
                <div className={styles.lab}>Phase 4</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06 PROBLEM STATEMENT COVER BLOCK */}
      <section className={styles.section}>
        <div className={styles.wrap}>
          <div
            ref={addToRevealRefs}
            className={`${styles.pstatement} ${styles.reveal}`}
          >
            <div className={styles.lbl}>Problem Statement</div>
            <h2>
              How might we enhance haptic feedback in standard devices to create
              joyful, real-life, user-friendly experiences?
            </h2>
          </div>
        </div>
      </section>

      {/* 07 FEELOSOPHY QUEST SETUP */}
      <section id="experiment" className={styles.section}>
        <div className={styles.wrap}>
          <div
            ref={addToRevealRefs}
            className={`${styles.ghead} ${styles.reveal}`}
          >
            Feelosophy Quest: Mapping Emotions Across Textures
          </div>
          <p
            ref={addToRevealRefs}
            className={`${styles.secBody} ${styles.reveal}`}
          >
            To improve tactile feedback, I first had to understand touch in the
            real world. So I designed an experiment — conducted under Dr. Dinesh
            Chhabra in the Psychology department at Delhi University — to
            explore the emotions different textures evoke, without any visual or
            auditory influence.
          </p>
          <p
            ref={addToRevealRefs}
            className={`${styles.secBody} ${styles.reveal}`}
            style={{ marginTop: "18px" }}
          >
            <strong>The setup:</strong> participants wore an eye mask and
            noise-cancelling headphones, touched each material, and rated the
            intensity on a 0–5 Likert scale while I logged facial and behavioral
            responses.
          </p>
          <div
            ref={addToRevealRefs}
            className={`${styles.materials} ${styles.reveal}`}
          >
            <span className={styles.mat}>
              <span className={styles.e}>💧</span>Water
            </span>
            <span className={styles.mat}>
              <span className={styles.e}>🌿</span>Grass
            </span>
            <span className={styles.mat}>
              <span className={styles.e}>🫧</span>Slime
            </span>
            <span className={styles.mat}>
              <span className={styles.e}>🧸</span>Fur
            </span>
            <span className={styles.mat}>
              <span className={styles.e}>🪡</span>Acupressure mat
            </span>
            <span className={styles.mat}>
              <span className={styles.e}>😴</span>Eye mask
            </span>
            <span className={styles.mat}>
              <span className={styles.e}>🎧</span>Noise-cancelling headphones
            </span>
          </div>
        </div>
      </section>

      {/* KEY RESEARCH INSIGHTS MODULE */}
      <section id="insights" className={styles.section}>
        <div className={styles.wrap}>
          <div
            ref={addToRevealRefs}
            className={`${styles.ghead} ${styles.gheadSmall} ${styles.reveal}`}
          >
            Key Insights from the Experiment
          </div>
          <div className={styles.insights}>
            <div
              ref={addToRevealRefs}
              className={`${styles.icard} ${styles.reveal}`}
            >
              <div className={styles.ico}>💧</div>
              <div className={styles.big}>Water soothed everyone</div>
              <p>
                Water was universally calming across all participants — a
                reliable anchor for gentle, positive feedback.
              </p>
            </div>
            <div
              ref={addToRevealRefs}
              className={`${styles.icard} ${styles.reveal}`}
            >
              <div className={styles.ico}>🪡</div>
              <div className={styles.big}>95% disliked the mat</div>
              <p>
                The acupressure mat triggered negative emotion in nearly
                everyone. Sharp, abrupt textures read as a threat.
              </p>
            </div>
            <div
              ref={addToRevealRefs}
              className={`${styles.icard} ${styles.reveal}`}
            >
              <div className={styles.ico}>⏱️</div>
              <div className={styles.big}>The feeling lingered 2–3 min</div>
              <p>
                Unlike a phone buzz, sharp-texture discomfort persisted — proof
                touch can leave a lasting impression.
              </p>
            </div>
          </div>
          <ul
            ref={addToRevealRefs}
            className={`${styles.keylist} ${styles.reveal}`}
          >
            <li>
              <b>1</b>Various emotions were linked to distinct tactile
              sensations.
            </li>
            <li>
              <b>2</b>Abrupt contact with sharp textures induced anxiety and
              negative responses.
            </li>
            <li>
              <b>3</b>Previous encounters with specific textures influenced
              subsequent interactions.
            </li>
            <li>
              <b>4</b>Participants experienced a heightened intensity of
              negative emotions.
            </li>
          </ul>
        </div>
      </section>

      {/* 08 BRIDGING THE GAP SECTION BANNER */}
      <div className={styles.bandwrap}>
        <div className={styles.wrap}>
          <div
            ref={addToRevealRefs}
            className={`${styles.banner} ${styles.reveal}`}
          >
            <h2>Bridging the Gap</h2>
          </div>
        </div>
        <div className={styles.wrap} id="bridge" style={{ marginTop: "40px" }}>
          <p
            ref={addToRevealRefs}
            className={`${styles.secBody} ${styles.reveal}`}
            style={{ maxWidth: "70ch" }}
          >
            This step was crucial: translating real-life insights into feedback
            a device can actually produce. Each finding became a principle to
            design against.
          </p>
          <div
            ref={addToRevealRefs}
            className={`${styles.bridge} ${styles.reveal}`}
            style={{ marginTop: "24px" }}
          >
            <div className={styles.brow}>
              <div className={styles.from}>Sharp textures caused anxiety</div>
              <div className={styles.arrow}>→</div>
              <div className={styles.to}>
                Gradual increase in vibration intensity
              </div>
            </div>
            <div className={styles.brow}>
              <div className={styles.from}>Water felt universally soothing</div>
              <div className={styles.arrow}>→</div>
              <div className={styles.to}>Texture-based, soothing haptics</div>
            </div>
            <div className={styles.brow}>
              <div className={styles.from}>
                Negative feelings lingered 2–3 min
              </div>
              <div className={styles.arrow}>→</div>
              <div className={styles.to}>
                Feedback that persists for a few moments
              </div>
            </div>
            <div className={styles.brow}>
              <div className={styles.from}>
                Past experience colored each touch
              </div>
              <div className={styles.arrow}>→</div>
              <div className={styles.to}>Custom, personal haptic feedback</div>
            </div>
            <div className={styles.brow}>
              <div className={styles.from}>
                Each texture evoked a distinct emotion
              </div>
              <div className={styles.arrow}>→</div>
              <div className={styles.to}>
                Different haptics for different purposes
              </div>
            </div>
            <div className={styles.brow}>
              <div className={styles.from}>
                The buzz felt jarring, not gentle
              </div>
              <div className={styles.arrow}>→</div>
              <div className={styles.to}>
                Non-intrusive, comfortable feedback
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 09 PROPOSED SOLUTIONS & DYNAMIC INTERACTION PREVIEW MODULE */}
      <div className={styles.bandwrap} id="solution">
        <div className={styles.wrap}>
          <div
            ref={addToRevealRefs}
            className={`${styles.banner} ${styles.reveal}`}
          >
            <h2>Solutions</h2>
          </div>
        </div>
        <div className={styles.wrap} style={{ marginTop: "8px" }}>
          <div
            ref={addToRevealRefs}
            className={`${styles.feature} ${styles.reveal}`}
          >
            <div>
              <span className={styles.tag}>Solution 01</span>
              <h3>Interactive Haptic Wallpapers</h3>
              <p>
                Dynamic backgrounds that respond to touch and gesture,
                generating feedback that simulates real textures — water
                rippling under a fingertip, grass brushing past. Built on the
                texture-emotion map, the wallpaper turns an idle screen into a
                calming, multisensory surface instead of a static image.
              </p>
            </div>

            {/* Click to trigger dynamic ripple loops using react state sync hooks */}
            <div
              className={`${styles.phone} ${rippleActive ? styles.phoneActive : ""}`}
              onClick={triggerDisplayRipple}
            >
              <div className={styles.screen}>
                <div className={`${styles.ripple} ${styles.r3}`}></div>
                <div className={`${styles.ripple} ${styles.r2}`}></div>
                <div className={`${styles.ripple} ${styles.r1}`}></div>
                <div className={styles.touch}></div>
                <div className={styles.pl}>Tap to feel the water</div>
              </div>
            </div>
          </div>

          <div className={styles.concepts}>
            <div
              ref={addToRevealRefs}
              className={`${styles.concept} ${styles.reveal}`}
            >
              <div className={styles.ce}>🎚️</div>
              <div className={styles.cn}>Solution 02</div>
              <h4>Customized Haptics</h4>
              <p>
                Personal haptic ringtones — tailor the intensity, frequency, and
                pattern of vibration alerts to your own preference.
              </p>
            </div>
            <div
              ref={addToRevealRefs}
              className={`${styles.concept} ${styles.reveal}`}
            >
              <div className={styles.ce}>⏳</div>
              <div className={styles.cn}>Solution 03</div>
              <h4>Progress as Intensity</h4>
              <p>
                Loading and downloads map progress to vibration strength,
                ramping up to a distinct burst when the task completes.
              </p>
            </div>
            <div
              ref={addToRevealRefs}
              className={`${styles.concept} ${styles.reveal}`}
            >
              <div className={styles.ce}>🧠</div>
              <div className={styles.cn}>Solution 04</div>
              <h4>Adaptive Response</h4>
              <p>
                Algorithms tune feedback to behavior, preference, and
                environment — softer in quiet moments, clearer when needed.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 10 DESIGN IMPACT REVIEWS MATRIX */}
      <div className={styles.bandwrap} id="impact">
        <div className={styles.wrap}>
          <div
            ref={addToRevealRefs}
            className={`${styles.banner} ${styles.reveal}`}
          >
            <h2>Impact</h2>
          </div>
        </div>
        <div className={styles.wrap}>
          <div className={styles.impact}>
            <div
              ref={addToRevealRefs}
              className={`${styles.ibox} ${styles.reveal}`}
            >
              <div className={styles.e}>✨</div>
              <h4>Enhanced User Experience</h4>
              <p>
                Moving touch from pure notification to emotional engagement —
                interactions that feel considered, not mechanical.
              </p>
            </div>
            <div
              ref={addToRevealRefs}
              className={`${styles.ibox} ${styles.reveal}`}
            >
              <div className={styles.e}>🤝</div>
              <h4>Deeper Connection</h4>
              <p>
                Feedback that resonates builds a more present, joyful
                relationship with everyday devices.
              </p>
            </div>
            <div
              ref={addToRevealRefs}
              className={`${styles.ibox} ${styles.reveal}`}
            >
              <div className={styles.e}>📚</div>
              <h4>Learning and Development</h4>
              <p>
                A reusable texture-emotion map that other designers can build on
                — research that outlives the project.
              </p>
            </div>
            <div
              ref={addToRevealRefs}
              className={`${styles.ibox} ${styles.reveal}`}
            >
              <div className={styles.e}>🧩</div>
              <h4>Sensory Integration for ASD</h4>
              <p>
                Customizable, soothing, non-intrusive feedback opens
                accessibility uses for sensory-sensitive users.
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles.wrap}>
          <div className={styles.big}>
            Designing feedback that resonates — touch that's joyful, not just
            functional.
          </div>
          <p>
            A heartfelt thanks to the Adobe Design team, and to the Department
            of Psychology, Delhi University.
          </p>
          <div className={styles.fcredit}>
            <span>Haptic Wallpapers · Deepali Babuta</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
