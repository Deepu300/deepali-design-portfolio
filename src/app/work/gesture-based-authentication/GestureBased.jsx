"use client";

import React, { useEffect, useState, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "./GestureAuth.module.css"; // Update this path to where your styles are stored

export default function GestureBased() {
  const [activeSection, setActiveSection] = useState("");
  const revealElementsRef = useRef([]);

  // Setup refs collection for Intersection Observer
  const addToRevealRefs = (el) => {
    if (el && !revealElementsRef.current.includes(el)) {
      revealElementsRef.current.push(el);
    }
  };

  useEffect(() => {
    // 1. Intersection Observer logic for scroll animations
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

    // 2. Window Scroll logic for navigation highlight tracking
    const handleScroll = () => {
      const sectionIds = ["problem", "research", "solution", "impact"];
      let currentSection = "";

      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < 200) {
            currentSection = id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up observers and event listeners on unmount
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.bodyContainer}>
      <Head>
        <title>Gesture Authentication — Deepali Babuta</title>
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

      {/* HERO */}
      <header className={styles.hero}>
        <div className={styles.wrap}>
          <h1 ref={addToRevealRefs} className={styles.reveal}>
            Proving you're human with a <em>wave</em>, not a password.
          </h1>
          <p ref={addToRevealRefs} className={`${styles.sub} ${styles.reveal}`}>
            A gesture-based authentication system that replaces frustrating
            CAPTCHAs and 2FA with simple hand gestures — AI-driven,
            password-less security that feels human.
          </p>
          <div
            ref={addToRevealRefs}
            className={`${styles.facts} ${styles.reveal}`}
          >
            <div>
              <span>My Role</span>
              <strong>UX Research, Design & AI Model</strong>
            </div>
            <div>
              <span>Course</span>
              <strong>UX & AI · NYU</strong>
            </div>
            <div>
              <span>Scope</span>
              <strong>Research → Working Model</strong>
            </div>
            <div>
              <span>Tools</span>
              <strong>ML5.js · Figma</strong>
            </div>
          </div>
          <div
            ref={addToRevealRefs}
            className={`${styles.gstrip} ${styles.reveal}`}
            style={{ marginTop: "40px" }}
          >
            <img
              src="/images/gesture-based-authentication/cover.gif"
              alt="Gesture demo"
              style={{ width: "100%", maxWidth: "480px", borderRadius: "12px" }}
            />
          </div>
          <div
            ref={addToRevealRefs}
            className={`${styles.gstrip} ${styles.reveal}`}
          >
            <div className={styles.gchip}>
              <span className={styles.e}>✌️</span>
              <div className={styles.t}>Peace</div>
              <div className={styles.s}>Gesture 01</div>
            </div>
            <div className={styles.gchip}>
              <span className={styles.e}>👍</span>
              <div className={styles.t}>Thumbs Up</div>
              <div className={styles.s}>Gesture 02</div>
            </div>
            <div className={styles.gchip}>
              <span className={styles.e}>✋</span>
              <div className={styles.t}>Open Palm</div>
              <div className={styles.s}>Gesture 03</div>
            </div>
            <div className={styles.gchip}>
              <span className={styles.e}>👌</span>
              <div className={styles.t}>OK Sign</div>
              <div className={styles.s}>Gesture 04</div>
            </div>
          </div>
        </div>
      </header>

      {/* SUMMARY */}
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
                Passwords, CAPTCHAs, and 2FA make logging in exhausting —
                security that frustrates the people it protects.
              </p>
            </div>
            <div className={styles.cell}>
              <h3>The Gap</h3>
              <p>
                Every fix adds friction or fragility. Nothing proves you're
                human in a way that's fast, private, and human.
              </p>
            </div>
            <div className={styles.cell}>
              <h3>The Solution</h3>
              <p>
                GestureCAPTCHA: verify identity with intuitive hand gestures,
                recognized locally by on-device AI.
              </p>
            </div>
            <div className={styles.cell}>
              <h3>The Impact</h3>
              <p>
                A working ML model + a flow designed around five real user
                mental models around trust and consent.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* PROBLEM */}
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
            If security is meant to make us feel safe, why does it make us feel
            so frustrated?
          </h2>
          <p
            ref={addToRevealRefs}
            className={`${styles.secBody} ${styles.reveal}`}
          >
            We verify our identity constantly — work accounts, university
            portals, even recipe sites. Each time we hit the same gatekeepers:
            passwords, CAPTCHAs, and Two-Factor Authentication. Whether it's
            hunting for your phone to enter a six-digit code or squinting at a
            CAPTCHA that can't decide if there's a motorcycle in the image, the
            process feels exhausting.{" "}
            <strong>Security has become a chore we resent.</strong>
          </p>
          <div
            ref={addToRevealRefs}
            className={`${styles.stats} ${styles.reveal}`}
          >
            <div className={styles.stat}>
              <div className={styles.n}>90%</div>
              <p>
                Of users get frustrated by the elaborate, time-consuming process
                of logging into a simple website.
              </p>
            </div>
            <div className={styles.stat}>
              <div className={styles.n}>70%</div>
              <p>
                Of CAPTCHA attempts need a second try — and many users just
                close the browser and give up.
              </p>
            </div>
            <div className={styles.stat}>
              <div className={styles.n}>1 phone</div>
              <p>
                Lost or dead, and your entire digital life is locked — banking,
                social, even laundry machines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH */}
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
            I studied not just what failed, but how it made people feel.
          </h2>
          <p
            ref={addToRevealRefs}
            className={`${styles.secBody} ${styles.reveal}`}
          >
            I combined user interviews, sentiment analysis of Reddit forums, and
            observation studies during real login sessions. Affinity mapping the
            frustration surfaced five emerging themes — and one central tension.
          </p>
          <div className={styles.insights}>
            <div
              ref={addToRevealRefs}
              className={`${styles.icard} ${styles.reveal}`}
            >
              <div className={styles.ico}>🔁</div>
              <div className={styles.big}>Over-friction</div>
              <p>
                Repeated codes, frequent logouts, and "remember me" that never
                does turn logins into a constant chore.
              </p>
            </div>
            <div
              ref={addToRevealRefs}
              className={`${styles.icard} ${styles.reveal}`}
            >
              <div className={styles.ico}>📱</div>
              <div className={styles.big}>Device fragility</div>
              <p>
                A lost or dead phone locks people out of everything — 2FA ties
                identity to a single fragile object.
              </p>
            </div>
            <div
              ref={addToRevealRefs}
              className={`${styles.icard} ${styles.reveal}`}
            >
              <div className={styles.ico}>🤖</div>
              <div className={styles.big}>CAPTCHA distrust</div>
              <p>
                Seen as outdated and ineffective — and AI is making them harder
                for humans while easier for bots.
              </p>
            </div>
          </div>
          <p
            ref={addToRevealRefs}
            className={`${styles.secBody} ${styles.reveal}`}
            style={{
              marginTop: "40px",
              color: "var(--navy)",
              fontFamily: "var(--display)",
              fontStyle: "italic",
              fontSize: "22px",
              maxWidth: "34ch",
            }}
          >
            The core tension: convenience vs. security. Users want strong
            protection but hate friction — especially when it feels irrelevant.
          </p>
        </div>
      </section>

      {/* COGNITIVE OFFLOADING */}
      <section className={`${styles.band} ${styles.bandNavy}`}>
        <div className={styles.wrap}>
          <div
            ref={addToRevealRefs}
            className={`${styles.quote} ${styles.reveal}`}
          >
            <blockquote>
              "AI's role becomes one of contextual intelligence — learning when
              to trust, while humans stay in charge of final consent."
            </blockquote>
            <cite>Insight from my Cognitive Offloading Map</cite>
          </div>
        </div>
      </section>

      {/* GAP */}
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
            Every existing fix traded one frustration for another.
          </h2>
          <p
            ref={addToRevealRefs}
            className={`${styles.secBody} ${styles.reveal}`}
          >
            CAPTCHAs are obsolete and infuriating. SMS 2FA is fragile and slow.
            App-based 2FA adds steps. None of them prove "I'm human" in a way
            that's <strong>fast, private, and actually pleasant</strong>. That
            was the opening.
          </p>
          <div className={styles.ba}>
            <div
              ref={addToRevealRefs}
              className={`${styles.col} ${styles.before} ${styles.reveal}`}
            >
              <h4>What existed</h4>
              <ul>
                <li>CAPTCHAs that fail and feel irrelevant</li>
                <li>2FA tied to a fragile, losable phone</li>
                <li>Extra apps and tab-switching to approve</li>
                <li>Six-digit codes entered over and over</li>
                <li>Security that erodes the trust it needs</li>
              </ul>
            </div>
            <div
              ref={addToRevealRefs}
              className={`${styles.col} ${styles.after} ${styles.reveal}`}
            >
              <h4>The opportunity</h4>
              <ul>
                <li>Prove humanity with something bots can't fake</li>
                <li>Keep verification on-device and private</li>
                <li>Use gestures Gen Z already does naturally</li>
                <li>Make the moment fast, playful, and clear</li>
                <li>Let the user start and consent to the check</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* IDEATION */}
      <section id="ideation" className={styles.section}>
        <div className={styles.wrap}>
          <div
            ref={addToRevealRefs}
            className={`${styles.secNum} ${styles.reveal}`}
          >
            04 — Ideation
          </div>
          <h2
            ref={addToRevealRefs}
            className={`${styles.secH} ${styles.reveal}`}
          >
            Three AI directions. I pressure-tested each against real friction.
          </h2>
          <div className={styles.concepts}>
            <div
              ref={addToRevealRefs}
              className={`${styles.concept} ${styles.reveal}`}
            >
              <div className={styles.ce}>📳</div>
              <h4>Haptic Signature</h4>
              <p>
                Mimic a personalized vibration pattern like a rhythm game — a
                tactile password.
              </p>
              <div className={styles.verdict}>
                Cut: needs supported hardware; hard to recall
              </div>
            </div>
            <div
              ref={addToRevealRefs}
              className={`${styles.concept} ${styles.reveal}`}
            >
              <div className={styles.ce}>📍</div>
              <h4>Adaptive Context</h4>
              <p>
                Auto-login from trusted locations, network patterns, and
                behavioral biometrics.
              </p>
              <div className={styles.verdict}>
                Cut: passive, opaque — fails the consent test
              </div>
            </div>
            <div
              ref={addToRevealRefs}
              className={`${styles.concept} ${styles.win} ${styles.reveal}`}
            >
              <div className={styles.badge}>Chosen</div>
              <div className={styles.ce}>✌️</div>
              <h4>Gesture Check</h4>
              <p>
                Verify with intuitive hand gestures recognized by on-device
                computer vision.
              </p>
              <div className={styles.verdict}>
                Won: human, playful, bot-resistant, private
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className={`${styles.band} ${styles.bandTan}`} id="solution">
        <div className={styles.wrap}>
          <div
            ref={addToRevealRefs}
            className={`${styles.secNum} ${styles.reveal}`}
          >
            05 — The Solution
          </div>
          <h2
            ref={addToRevealRefs}
            className={`${styles.secH} ${styles.reveal}`}
          >
            GestureCAPTCHA: a wave to prove you're real.
          </h2>
          <p
            ref={addToRevealRefs}
            className={`${styles.secBody} ${styles.reveal}`}
          >
            <strong style={{ color: "var(--navy)" }}>Why gestures?</strong> Gen
            Z communicates with them constantly — peace sign, thumbs up. They're
            playful and familiar, yet bots can't perform human gestures
            convincingly. So they solve the security problem and the frustration
            problem at once. The user performs a short sequence; on-device AI
            verifies it locally and never stores the image.
          </p>
        </div>
      </section>

      {/* MENTAL MODELS */}
      <section id="mental-models" className={styles.section}>
        <div className={styles.wrap}>
          <div
            ref={addToRevealRefs}
            className={`${styles.secNum} ${styles.reveal}`}
          >
            06 — Designing Around Trust
          </div>
          <h2
            ref={addToRevealRefs}
            className={`${styles.secH} ${styles.reveal}`}
          >
            Five user mental models shaped every screen.
          </h2>
          <p
            ref={addToRevealRefs}
            className={`${styles.secBody} ${styles.reveal}`}
          >
            Gesture input is novel, and novelty in a security flow breeds
            anxiety. I designed each decision against how users actually think
            about being watched, surprised, and asked to act.
          </p>
          <div className={styles.mm}>
            <div
              ref={addToRevealRefs}
              className={`${styles.mrow} ${styles.reveal}`}
            >
              <div className={styles.quoteS}>
                "If I'm using my camera for a security check, it could be
                recording me — that feels risky."
              </div>
              <div className={styles.impl}>
                <span>Design implication</span>
                <p>
                  A clear local-only disclaimer: "GestureCAPTCHA verifies your
                  gesture locally and never stores your image."
                </p>
              </div>
            </div>
            <div
              ref={addToRevealRefs}
              className={`${styles.mrow} ${styles.reveal}`}
            >
              <div className={styles.quoteS}>
                "I want to be the one to start the interaction — not have the
                system surprise me."
              </div>
              <div className={styles.impl}>
                <span>Design implication</span>
                <p>
                  An opt-in "Start Gesture Check" button instead of automatic
                  detection — giving the user agency and consent.
                </p>
              </div>
            </div>
            <div
              ref={addToRevealRefs}
              className={`${styles.mrow} ${styles.reveal}`}
            >
              <div className={styles.quoteS}>
                "If I don't know the name of a gesture, I can't be expected to
                perform it correctly."
              </div>
              <div className={styles.impl}>
                <span>Design implication</span>
                <p>
                  Pair every gesture name with a visual demo, and let users pick
                  gestures they already recognize.
                </p>
              </div>
            </div>
            <div
              ref={addToRevealRefs}
              className={`${styles.mrow} ${styles.reveal}`}
            >
              <div className={styles.quoteS}>
                "If it opens in a new tab, it looks like spam."
              </div>
              <div className={styles.impl}>
                <span>Design implication</span>
                <p>
                  Keep the entire verification embedded in the same tab to
                  preserve continuity and trust.
                </p>
              </div>
            </div>
            <div
              ref={addToRevealRefs}
              className={`${styles.mrow} ${styles.reveal}`}
            >
              <div className={styles.quoteS}>
                "I need to know what's about to happen before I'm asked to do
                something."
              </div>
              <div className={styles.impl}>
                <span>Design implication</span>
                <p>
                  A brief splash screen prepares the user for what's expected,
                  removing disorientation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className={`${styles.band} ${styles.bandPeri}`} id="process">
        <div className={styles.wrap}>
          <div
            ref={addToRevealRefs}
            className={`${styles.secNum} ${styles.reveal}`}
          >
            07 — How I Built It
          </div>
          <h2
            ref={addToRevealRefs}
            className={`${styles.secH} ${styles.reveal}`}
          >
            Two phases: design the trust, then train the model.
          </h2>
          <div className={styles.phases}>
            <div
              ref={addToRevealRefs}
              className={`${styles.phase} ${styles.reveal}`}
            >
              <div>
                <span className={styles.pn}>01</span>
                <div className={styles.ph}>Research</div>
              </div>
              <div>
                <h4>UX research & synthesis</h4>
                <p>
                  Interviews, Reddit sentiment analysis, and login observation,
                  synthesized through affinity and cognitive-offloading maps to
                  define where AI helps and where the human stays in control.
                </p>
              </div>
            </div>
            <div
              ref={addToRevealRefs}
              className={`${styles.phase} ${styles.reveal}`}
            >
              <div>
                <span className={styles.pn}>02</span>
                <div className={styles.ph}>Sketch</div>
              </div>
              <div>
                <h4>UI sketches & flow</h4>
                <p>
                  Mapped the splash → consent → gesture sequence → verified
                  flow, dividing clearly what the AI does from what the human
                  decides.
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
                <h4>High-fidelity prototype</h4>
                <p>
                  Designed the embedded, single-tab experience with
                  end-to-end-encryption cues, step counters, and gesture demos
                  baked into each step.
                </p>
              </div>
            </div>
            <div
              ref={addToRevealRefs}
              className={`${styles.phase} ${styles.reveal}`}
            >
              <div>
                <span className={styles.pn}>04</span>
                <div className={styles.ph}>Build</div>
              </div>
              <div>
                <h4>Working AI model</h4>
                <p>
                  Trained a gesture-recognition model in ML5.js and connected it
                  to the flow — a functional proof that the concept runs in a
                  real browser.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section id="impact" className={styles.section}>
        <div className={styles.wrap}>
          <div
            ref={addToRevealRefs}
            className={`${styles.secNum} ${styles.reveal}`}
          >
            08 — Impact
          </div>
          <h2
            ref={addToRevealRefs}
            className={`${styles.secH} ${styles.reveal}`}
          >
            A concept that runs — and a clear answer to the friction problem.
          </h2>
          <div className={styles.impact}>
            <div
              ref={addToRevealRefs}
              className={`${styles.ibox} ${styles.proven} ${styles.reveal}`}
            >
              <span className={styles.tag}>Built & working</span>
              <div className={styles.h}>Live ML model</div>
              <p>
                A functioning gesture-recognition model in ML5.js, proving the
                flow works end-to-end in a real browser — not just in mockups.
              </p>
            </div>
            <div
              ref={addToRevealRefs}
              className={`${styles.ibox} ${styles.proven} ${styles.reveal}`}
            >
              <span className={styles.tag}>Built & working</span>
              <div className={styles.h}>5 mental models → UI</div>
              <p>
                Every interaction decision maps to a documented user belief
                about privacy, consent, and control — design grounded in
                evidence.
              </p>
            </div>
            <div
              ref={addToRevealRefs}
              className={`${styles.ibox} ${styles.proj} ${styles.reveal}`}
            >
              <span className={styles.tag}>Projected at scale</span>
              <div className={styles.h}>No phone, no codes</div>
              <p>
                Removes the device-dependency that locks people out —
                verification needs only a camera the user already has.
              </p>
            </div>
            <div
              ref={addToRevealRefs}
              className={`${styles.ibox} ${styles.proj} ${styles.reveal}`}
            >
              <span className={styles.tag}>Projected at scale</span>
              <div className={styles.h}>Bot-resistant by design</div>
              <p>
                Human gestures are hard for bots to fake convincingly,
                addressing the AI-vs-CAPTCHA arms race head-on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LEARNINGS */}
      <section id="learnings" className={styles.section}>
        <div className={styles.wrap}>
          <div
            ref={addToRevealRefs}
            className={`${styles.secNum} ${styles.reveal}`}
          >
            09 — Reflections
          </div>
          <h2
            ref={addToRevealRefs}
            className={`${styles.secH} ${styles.reveal}`}
          >
            What I learned designing security people don't hate.
          </h2>
          <div className={styles.learn}>
            <div
              ref={addToRevealRefs}
              className={`${styles.lcard} ${styles.reveal}`}
            >
              <h4>Trust is the real UX</h4>
              <p>
                In security, perceived safety matters as much as actual safety.
                The disclaimer and opt-in mattered as much as the model.
              </p>
            </div>
            <div
              ref={addToRevealRefs}
              className={`${styles.lcard} ${styles.reveal}`}
            >
              <h4>Design with AI, not for it</h4>
              <p>
                The cognitive-offloading map kept the human in charge of consent
                while AI handled the repetitive verification — a balance worth
                defending.
              </p>
            </div>
            <div
              ref={addToRevealRefs}
              className={`${styles.lcard} ${styles.reveal}`}
            >
              <h4>Accessibility next</h4>
              <p>
                Gestures aren't universal. The next round needs gesture
                alternatives and testing with users who can't perform standard
                hand signs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.wrap}>
          <div className={styles.big}>
            Password-less security that feels human — fast, private, and a
            little bit playful.
          </div>
          <p>
            GestureCAPTCHA was an exercise in designing for trust: proving that
            the moment we resent most online can be made effortless.
          </p>
          <div className={styles.fcredit}>
            <span>Gesture Based Authentication · Deepali Babuta</span>
            <span>NYU · UX & AI Final Project</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
