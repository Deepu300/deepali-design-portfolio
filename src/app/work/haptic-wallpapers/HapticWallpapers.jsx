"use client";

import React, { useEffect, useState, useRef } from "react";
import Head from "next/head";
import styles from "./HapticWallpapers.module.css";

const PIVOTAL_ROWS = [
  {
    from: "Sharp textures caused anxiety",
    to: "Ramp vibration intensity gradually",
  },
  {
    from: "Water felt universally soothing",
    to: "Texture-based, soothing haptics",
  },
  {
    from: "Negative feelings lingered 2–3 min",
    to: "Feedback that persists for a few moments",
  },
  {
    from: "Past experience colored each touch",
    to: "Custom, personal haptic feedback",
  },
  {
    from: "Each texture evoked a distinct emotion",
    to: "Different haptics for different purposes",
  },
  {
    from: "The buzz felt jarring, not gentle",
    to: "Non-intrusive, comfortable feedback",
  },
];

const MATERIALS = [
  { e: "💧", label: "Water" },
  { e: "🌿", label: "Grass" },
  { e: "🫧", label: "Slime" },
  { e: "🧸", label: "Fur" },
  { e: "🪡", label: "Acupressure mat" },
  { e: "😴", label: "Eye mask" },
  { e: "🎧", label: "Noise-cancelling headphones" },
];

export default function HapticWallpapers() {
  const [activeSection, setActiveSection] = useState("");
  const [rippleActive, setRippleActive] = useState(false);
  const uiVideoRef = useRef(null);
  const protoVideoRef = useRef(null);

  const triggerDisplayRipple = () => {
    setRippleActive(false);
    setTimeout(() => {
      setRippleActive(true);
    }, 10);
  };


  useEffect(() => {
    const handleScroll = () => {
      const targetSections = [
        "gap",
        "probe1",
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

    const kickAutoplay = (video) => {
      if (!video) return;
      video.muted = true;
      const playAttempt = video.play();
      if (playAttempt && typeof playAttempt.catch === "function") {
        playAttempt.catch(() => {});
      }
    };
    kickAutoplay(uiVideoRef.current);
    kickAutoplay(protoVideoRef.current);

    return () => {
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

      <nav className={styles.nav} aria-label="Case study sections">
        <div className={styles.wrapWide}>
          <div className={styles.navWrap}>
            <div className={styles.navlinks}>
              <a
                href="#gap"
                className={activeSection === "gap" ? styles.active : ""}
              >
                Gap
              </a>
              <a
                href="#probe1"
                className={activeSection === "probe1" ? styles.active : ""}
              >
                Probe 1
              </a>
              <a
                href="#experiment"
                className={activeSection === "experiment" ? styles.active : ""}
              >
                Probe 2
              </a>
              <a
                href="#bridge"
                className={activeSection === "bridge" ? styles.active : ""}
              >
                Pivotal
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
            </div>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className={styles.hero}>
        <div className={styles.wrap}>
          <h1>Haptic Wallpapers</h1>
          <p className={styles.sub}>
            Haptic Wallpapers turn your idle screen into something you can{" "}
            <em>feel</em>. Tap water and it ripples back under your finger.
            Built on a texture-to-emotion map from real lab research — so the
            feedback is calming <em>by design</em>, not just another buzz.
          </p>
        </div>
      </header>

      <div className={styles.wrap}>
        <div

          className={styles.facts} data-aos="fade-up"
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
            <strong>Dept. of Psychology, Delhi University</strong>
          </div>
          <div>
            <span>Outcome</span>
            <strong>A UI & haptics feeling-coded model</strong>
          </div>
        </div>

        {/* UI explaining video — autoplay muted loop like a GIF */}
        <div

          className={styles.mediaSlot} data-aos="fade-up"
        >
          <video
            ref={uiVideoRef}
            className={styles.mediaVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label="UI explaining video for Haptic Wallpapers"
          >
            <source src="/ui-explainer.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* THE GAP */}
      <section id="gap" className={styles.section}>
        <div className={styles.wrap}>
          <div

            className={styles.ghead} data-aos="fade-up"
          >
            THE GAP — Today&apos;s haptics notify you, then vanish.
          </div>
          <figure

            className={styles.gapCard} data-aos="fade-up"
          >
            <div className={styles.gapFrame}>
              <div className={styles.gapBadge}>
                Article by <span>Microsoft</span>
              </div>
              <img
                className={styles.gapBee}
                src="/gap-bee.png?v=3"
                alt=""
                aria-hidden="true"
              />
              <p className={styles.gapQuote}>
                Phones can render stunning visuals and rich audio. Touch got
                left behind. As Microsoft Research puts it, today&apos;s tactile
                feedback is mostly limited to buzz — vibrations from an internal
                motor that notify you and then disappear. It&apos;s touch
                reduced to a single, blunt signal.
              </p>
            </div>
            <figcaption>
              The gap, in Microsoft Research&apos;s own words.{" "}
              <a
                href="https://www.microsoft.com/en-us/research/blog/touching-virtual-microsoft-research-making-virtual-reality-tangible/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the full article →
              </a>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* HOW I WORKED — double diamond image */}
      <section className={styles.section}>
        <div className={styles.wrap}>
          <div

            className={styles.ghead} data-aos="fade-up"
          >
            How I worked — a double diamond
          </div>
          <figure

            className={styles.ddFigure} data-aos="fade-up"
          >
            <img
              src="/double-diamond-process.png?v=2"
              alt="Double diamond process: Research (Discover, Explore, Define) then Design (Develop, Test, Deliver, Listen), with eight numbered steps from empathize through designing the solution"
            />
          </figure>
        </div>
      </section>

      {/* RESEARCH · PROBE 1 */}
      <section id="probe1" className={styles.section}>
        <div className={styles.wrap}>
          <div

            className={styles.eyebrow} data-aos="fade-up"
          >
            Research · Probe 1
          </div>
          <div

            className={styles.ghead} data-aos="fade-up"
          >
            People don&apos;t just tolerate the buzz; it wears on them.
          </div>
          <figure

            className={styles.figure} data-aos="fade-up"
          >
            <img
              src="/research-probe-1-user-perspectives.png"
              alt="User perspectives on everyday phone haptics — quotes about feedback feeling functional, anxious, fleeting, and limited"
            />
          </figure>
          <p

            className={styles.secBody} data-aos="fade-up"
          >
            I started with how people actually feel about the haptics they
            already live with. Six participants, interviewed about everyday
            phone feedback. The verdict was consistent: functional, fleeting,
            and occasionally irritating.
          </p>

          <h3

            className={styles.subhead} data-aos="fade-up"
          >
            The 4-minute type experiment
          </h3>
          <figure

            className={styles.chartFigure} data-aos="fade-up"
          >
            <img
              src="/sentiment-curve-4min-experiment.png?v=2"
              alt="Sentiment curve across a four-minute typing haptics experiment, drifting from neutral toward negative"
            />
          </figure>
          <p

            className={styles.secBody} data-aos="fade-up"
          >
            Then I tracked how typing haptics felt across a four-minute session,
            in four phases. Sentiment that started <em>neutral</em> drifted
            steadily toward <em>negative</em> — the buzz that helps at first
            begins to grate.
          </p>
          <p

            className={`${styles.secBody} ${styles.callout}`} data-aos="fade-up"
          >
            <strong>
              That negative emotional state is exactly what I set out to target.
            </strong>
          </p>
        </div>
      </section>

      {/* PROBLEM STATEMENT */}
      <section className={styles.section}>
        <div className={styles.wrap}>
          <div

            className={styles.pstatement} data-aos="fade-up"
          >
            <div className={styles.lbl}>Problem Statement</div>
            <h2>
              How might we enhance haptic feedback in standard devices to create
              joyful, real-life, user-friendly experiences?
            </h2>
          </div>
        </div>
      </section>

      {/* RESEARCH · PROBE 2 — native responsive infographic */}
      <section id="experiment" className={styles.section}>
        <div className={styles.wrap}>
          <div

            className={styles.eyebrow} data-aos="fade-up"
          >
            Research · Probe 2
          </div>
          <div

            className={styles.ghead} data-aos="fade-up"
          >
            So I studied how real textures make people feel.
          </div>

          <div

            className={styles.probeIntro} data-aos="fade-up"
          >
            <div className={styles.probeCopy}>
              <p className={styles.secBody}>
                To improve tactile feedback, I first had to understand touch in
                the <em>real</em> world. So I designed an experiment — conducted
                under Dr. Dinesh Chhabra in the Psychology department at Delhi
                University — to explore the emotions different textures evoke,
                without any visual or auditory influence.
              </p>
              <p className={styles.secBody}>
                <strong>The setup:</strong> participants wore an eye mask and
                noise-cancelling headphones, touched each material, and rated
                the intensity on a 0–5 Likert scale while I logged facial and
                behavioral responses.
              </p>
              <div className={styles.materials}>
                {MATERIALS.map((m) => (
                  <span key={m.label} className={styles.mat}>
                    <span className={styles.e}>{m.e}</span>
                    {m.label}
                  </span>
                ))}
              </div>
            </div>

            <aside className={styles.creditCard}>
              <div className={styles.creditLbl}>Conducted under</div>
              <div className={styles.creditMentor}>
                <img
                  src="/dr-dinesh-chhabra.png"
                  alt="Portrait of Dr. Dinesh Chhabra"
                />
                <div>
                  <div className={styles.creditName}>Dr. Dinesh Chhabra</div>
                  <div className={styles.creditRole}>Dept. of Psychology</div>
                </div>
              </div>
              <img
                className={styles.creditVenue}
                src="/du-faculty-of-arts.png"
                alt="Faculty of Arts building, University of Delhi"
              />
              <div className={styles.creditCap}>
                Faculty of Arts, University of Delhi
              </div>
            </aside>
          </div>

          <h3

            className={styles.probeSec} data-aos="fade-up"
          >
            Inside the lab
          </h3>
          <div

            className={styles.labPhotos} data-aos="fade-up"
          >
            <figure className={styles.labFrame}>
              <img
                src="/experiment-materials.png"
                alt="Experiment materials: five textures plus eye mask and noise-cancelling headphones"
              />
              <figcaption>
                The apparatus — five textures, plus the tools that stripped away
                sight and sound.
              </figcaption>
            </figure>
            <figure className={styles.labFrame}>
              <img
                src="/experiment-lab-photos.png"
                alt="Participants touching textures while blindfolded and wearing noise-cancelling headphones"
              />
              <figcaption>
                Blindfolded and noise-cancelled, participants touched each
                texture while I logged the reaction —{" "}
                <strong>
                  catching the feeling before the mind could name it.
                </strong>
              </figcaption>
            </figure>
          </div>

          <h3

            className={styles.probeSec} data-aos="fade-up"
          >
            What the textures revealed
          </h3>
          <div

            className={styles.stats}
          >
            <div className={styles.stat} data-aos="fade-up" data-aos-delay="0">
              <div className={styles.statE}>💧</div>
              <div className={styles.statBig}>100%</div>
              <div className={styles.statT}>Water soothed everyone</div>
              <p>
                Universally calming across all participants — a reliable anchor
                for gentle, positive feedback.
              </p>
            </div>
            <div
              className={styles.stat}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className={styles.statE}>🪡</div>
              <div className={styles.statBig}>95%</div>
              <div className={styles.statT}>Disliked the acupressure mat</div>
              <p>
                Sharp, abrupt textures triggered negative emotion in nearly
                everyone — touch read as a threat.
              </p>
            </div>
            <div
              className={styles.stat}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className={styles.statE}>⏱️</div>
              <div className={styles.statBig}>
                2–3<span className={styles.statUnit}> min</span>
              </div>
              <div className={styles.statT}>The feeling lingered</div>
              <p>
                Unlike a fleeting phone buzz, sharp-texture discomfort persisted
                — proof touch leaves a mark.
              </p>
            </div>
          </div>

          <ul

            className={styles.keylist} data-aos="fade-up"
          >
            <li>
              <b>1</b>Distinct emotions mapped to distinct tactile sensations.
            </li>
            <li>
              <b>2</b>Abrupt contact with sharp textures induced anxiety.
            </li>
            <li>
              <b>3</b>Previous encounters with textures influenced subsequent
              interactions.
            </li>
            <li>
              <b>4</b>Participants experienced a heightened intensity of
              negative emotions.
            </li>
          </ul>
        </div>
      </section>

      {/* THE PIVOTAL MOVE — visual peak of the page */}
      <section id="bridge" className={styles.pivotal}>
        <div className={styles.wrap}>
          <div

            className={styles.pivotalEyebrow} data-aos="fade-up"
          >
            The pivotal move
          </div>
          <h2

            className={styles.pivotalHead} data-aos="fade-up"
          >
            Each finding became a design principle.
          </h2>
          <p

            className={styles.pivotalBody} data-aos="fade-up"
          >
            This was the crucial step: translating real-world touch into
            feedback a device can actually produce. Haptics <em>is</em> touch in
            the real world — so every insight from the texture study became a
            principle to design against.
          </p>
          <div

            className={styles.pivotalMap} data-aos="fade-up"
          >
            <div className={styles.pivotalLabels}>
              <span>What I found</span>
              <span>The principle it became</span>
            </div>
            {PIVOTAL_ROWS.map((row) => (
              <div key={row.from} className={styles.pivotalRow}>
                <div className={styles.pivotalFrom}>{row.from}</div>
                <div className={styles.pivotalArrow} aria-hidden="true">
                  →
                </div>
                <div className={styles.pivotalTo}>{row.to}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE SOLUTION */}
      <section id="solution" className={styles.section}>
        <div className={styles.wrap}>
          <div

            className={styles.ghead} data-aos="fade-up"
          >
            THE SOLUTION — Interactive Haptic Wallpapers
          </div>
          <figure

            className={styles.figure} data-aos="fade-up"
          >
            <img
              src="/solution-haptic-wallpapers.png"
              alt="Interactive Haptic Wallpapers concept — texture wallpapers responding to touch on a phone"
            />
          </figure>
          <p

            className={styles.secBody} data-aos="fade-up"
          >
            Dynamic backgrounds that respond to touch and gesture, generating
            feedback that simulates real textures — water rippling under a
            fingertip, grass brushing past. The idle screen becomes a calming,
            multisensory surface instead of a static image.
          </p>

          <div

            className={styles.feature} data-aos="fade-up"
          >
            <div>
              <h3 className={styles.subhead} style={{ marginTop: 0 }}>
                How the UI works
              </h3>
              <ol className={styles.uiSteps}>
                <li>A new feature living inside iPhone settings.</li>
                <li>Choose a texture — water, sand, concrete, or grass.</li>
                <li>
                  The texture wallpaper applies to your screen; swipe, tap, and
                  feel it.
                </li>
              </ol>
            </div>

            {/* TODO: drop water-ripple.gif into /public to replace the CSS ripple */}
            <div
              className={`${styles.phone} ${rippleActive ? styles.phoneActive : ""}`}
              onClick={triggerDisplayRipple}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  triggerDisplayRipple();
                }
              }}
              role="button"
              tabIndex={0}
              aria-label="Tap to feel the water"
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

          <h3

            className={styles.subhead} data-aos="fade-up"
          >
            I built a rough prototype to prove it wasn&apos;t just a poster.
          </h3>
          <p

            className={styles.secBody} data-aos="fade-up"
          >
            To check feasibility, I dug into the research on texture perception
            and found that the difference between textures is largely a
            difference in <em>vibration intensity</em>. So I coded a rough
            desktop prototype that adjusts existing vibration motors — and
            layers in sound — to fake the feel of concrete versus water. It
            worked well enough to prove the core bet.
          </p>

          {/* Prototype demo — autoplay muted loop like a GIF */}
          <div

            className={styles.mediaSlot} data-aos="fade-up"
          >
            <video
              ref={protoVideoRef}
              className={styles.mediaVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="Prototype demo video for Haptic Wallpapers"
            >
              <source src="/prototype-demo.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section id="impact" className={styles.bandwrap}>
        <div className={styles.wrap}>
          <div

            className={styles.banner} data-aos="fade-up"
          >
            <h2>IMPACT — What this concept proved, and what it leaves behind.</h2>
          </div>
          <div

            className={styles.impactList}
          >
            <div
              className={styles.impactItem}
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <h4>What it proved.</h4>
              <p>
                A rough prototype confirmed the core bet — varying vibration
                intensity alone can make one surface feel like water and another
                like concrete. The illusion holds.
              </p>
            </div>
            <div
              className={styles.impactItem}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h4>What it leaves behind.</h4>
              <p>
                A reusable texture-emotion map — six principles pulled straight
                from tactile research — that other designers can build feedback
                against.
              </p>
            </div>
            <div
              className={styles.impactItem}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h4>Where it could go.</h4>
              <p>
                Customizable, non-intrusive, soothing feedback has a genuine
                accessibility case for sensory-sensitive and ASD users.
              </p>
            </div>
          </div>

          <h3

            className={styles.subhead} data-aos="fade-up"
          >
            An honest caveat
          </h3>
          <p

            className={styles.secBody} data-aos="fade-up"
          >
            Six participants is a small sample. Before I&apos;d trust the
            texture-emotion map as a system, I&apos;d want to validate it at
            scale — and pressure-test whether the vibration illusion holds on
            production phone hardware, not just my desktop rig.
          </p>

          <h3

            className={styles.subhead} data-aos="fade-up"
          >
            Next steps
          </h3>
          <p

            className={styles.secBody} data-aos="fade-up"
          >
            Build a working mobile prototype, and go deeper into the mechanics
            of texture feedback itself.
          </p>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.wrap}>
          <div className={styles.big}>
            Designing feedback that resonates — touch that&apos;s joyful, not
            just functional.
          </div>
          <p>
            A heartfelt thanks to Prof. Dinesh Chhabra, my friends and
            participants, and the Department of Psychology, Delhi University.
          </p>
          <div className={styles.fcredit}>
            <span>Haptic Wallpapers · Deepali Babuta</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
