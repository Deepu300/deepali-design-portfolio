"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./SoundscapeNav.module.css";

const SECTION_IDS = ["problem", "research", "insight", "solution"];

const PROCESS_STEPS = [
  { n: "01", label: "Secondary research", color: "var(--blue)" },
  { n: "02", label: "Survey & quant data", color: "var(--red)" },
  { n: "03", label: "Competitive scan", color: "var(--yellow)" },
  { n: "04", label: "Insights & HMW", color: "var(--green)" },
  { n: "05", label: "Ideation · Crazy 8s", color: "var(--blue)" },
  { n: "06", label: "Hi-Fi prototype", color: "var(--red)" },
  { n: "07", label: "Usability testing", color: "var(--green)" },
];

function cx(...parts) {
  return parts.filter(Boolean).join(" ");
}

function UserFlowSvg() {
  return (
    <svg
      viewBox="0 0 1140 450"
      className={styles.flowSvg}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Soundscape user flow: standard Google Maps path branching into Soundscape path"
    >
      <text
        x="20"
        y="34"
        fontFamily="Nunito Sans, sans-serif"
        fontWeight="800"
        fontSize="12"
        letterSpacing="1.5"
        fill="#8A8F86"
      >
        STANDARD GOOGLE MAPS FLOW
      </text>
      <rect x="20" y="52" width="190" height="62" rx="14" fill="#ffffff" stroke="#DEE0D9" strokeWidth="2" />
      <text x="115" y="79" textAnchor="middle" fontFamily="Nunito Sans, sans-serif" fontWeight="600" fontSize="12.5" fill="#201C2E">
        Open
      </text>
      <text x="115" y="94" textAnchor="middle" fontFamily="Nunito Sans, sans-serif" fontWeight="600" fontSize="12.5" fill="#201C2E">
        Google Maps
      </text>
      <rect x="247" y="52" width="190" height="62" rx="14" fill="#ffffff" stroke="#DEE0D9" strokeWidth="2" />
      <text x="342" y="79" textAnchor="middle" fontFamily="Nunito Sans, sans-serif" fontWeight="600" fontSize="12.5" fill="#201C2E">
        Enter or choose
      </text>
      <text x="342" y="94" textAnchor="middle" fontFamily="Nunito Sans, sans-serif" fontWeight="600" fontSize="12.5" fill="#201C2E">
        a destination
      </text>
      <rect x="474" y="52" width="190" height="62" rx="14" fill="#ffffff" stroke="#DEE0D9" strokeWidth="2" />
      <text x="569" y="72" textAnchor="middle" fontFamily="Nunito Sans, sans-serif" fontWeight="600" fontSize="12.5" fill="#201C2E">
        Select mode —
      </text>
      <text x="569" y="86" textAnchor="middle" fontFamily="Nunito Sans, sans-serif" fontWeight="600" fontSize="12.5" fill="#201C2E">
        Drive · Walk
      </text>
      <text x="569" y="102" textAnchor="middle" fontFamily="Nunito Sans, sans-serif" fontWeight="600" fontSize="12.5" fill="#201C2E">
        Transit · Bike
      </text>
      <rect x="701" y="52" width="190" height="62" rx="14" fill="#ffffff" stroke="#DEE0D9" strokeWidth="2" />
      <text x="796" y="79" textAnchor="middle" fontFamily="Nunito Sans, sans-serif" fontWeight="600" fontSize="12.5" fill="#201C2E">
        Review
      </text>
      <text x="796" y="94" textAnchor="middle" fontFamily="Nunito Sans, sans-serif" fontWeight="600" fontSize="12.5" fill="#201C2E">
        destination info
      </text>
      <rect x="928" y="52" width="190" height="62" rx="14" fill="#ffffff" stroke="#DEE0D9" strokeWidth="2" />
      <text x="1023" y="79" textAnchor="middle" fontFamily="Nunito Sans, sans-serif" fontWeight="600" fontSize="12.5" fill="#201C2E">
        Start
      </text>
      <text x="1023" y="94" textAnchor="middle" fontFamily="Nunito Sans, sans-serif" fontWeight="600" fontSize="12.5" fill="#201C2E">
        navigation
      </text>
      <line x1="210" y1="83" x2="239" y2="83" stroke="#B7B2C2" strokeWidth="2" />
      <path d="M239,78 L247,83 L239,88 z" fill="#B7B2C2" />
      <line x1="437" y1="83" x2="466" y2="83" stroke="#B7B2C2" strokeWidth="2" />
      <path d="M466,78 L474,83 L466,88 z" fill="#B7B2C2" />
      <line x1="664" y1="83" x2="693" y2="83" stroke="#B7B2C2" strokeWidth="2" />
      <path d="M693,78 L701,83 L693,88 z" fill="#B7B2C2" />
      <line x1="891" y1="83" x2="920" y2="83" stroke="#B7B2C2" strokeWidth="2" />
      <path d="M920,78 L928,83 L920,88 z" fill="#B7B2C2" />
      <path d="M569,114 L569,176 L149,176 L149,306" fill="none" stroke="#34A853" strokeWidth="2.5" />
      <path d="M149,306 l-5,-9 l10,0 z" fill="#34A853" />
      <text x="300" y="169" fontFamily="Nunito Sans, sans-serif" fontWeight="800" fontSize="12" fill="#34A853">
        User selects Soundscape
      </text>
      <rect x="6" y="270" width="1128" height="150" rx="18" fill="#EAF5EE" stroke="#CDE9D6" />
      <text x="24" y="292" fontFamily="Nunito Sans, sans-serif" fontWeight="800" fontSize="12" letterSpacing="1.5" fill="#34A853">
        SOUNDSCAPE PATH
      </text>
      <rect x="20" y="306" width="258" height="74" rx="14" fill="#ffffff" stroke="#34A853" strokeWidth="2" />
      <rect x="20" y="306" width="6" height="74" rx="3" fill="#34A853" />
      <text x="149" y="339" textAnchor="middle" fontFamily="Nunito Sans, sans-serif" fontWeight="800" fontSize="12.5" fill="#201C2E">
        Select
      </text>
      <text x="149" y="354" textAnchor="middle" fontFamily="Nunito Sans, sans-serif" fontWeight="600" fontSize="12.5" fill="#201C2E">
        Soundscape feature
      </text>
      <rect x="300" y="306" width="258" height="74" rx="14" fill="#ffffff" stroke="#34A853" strokeWidth="2" />
      <rect x="300" y="306" width="6" height="74" rx="3" fill="#34A853" />
      <text x="429" y="332" textAnchor="middle" fontFamily="Nunito Sans, sans-serif" fontWeight="800" fontSize="12.5" fill="#201C2E">
        Live narrations of
      </text>
      <text x="429" y="346" textAnchor="middle" fontFamily="Nunito Sans, sans-serif" fontWeight="600" fontSize="12.5" fill="#201C2E">
        nearby landmarks —
      </text>
      <text x="429" y="362" textAnchor="middle" fontFamily="Nunito Sans, sans-serif" fontWeight="600" fontSize="12.5" fill="#201C2E">
        environmental learning
      </text>
      <rect x="580" y="306" width="258" height="74" rx="14" fill="#ffffff" stroke="#34A853" strokeWidth="2" />
      <rect x="580" y="306" width="6" height="74" rx="3" fill="#34A853" />
      <text x="709" y="339" textAnchor="middle" fontFamily="Nunito Sans, sans-serif" fontWeight="800" fontSize="12.5" fill="#201C2E">
        Follow guided narration
      </text>
      <text x="709" y="354" textAnchor="middle" fontFamily="Nunito Sans, sans-serif" fontWeight="600" fontSize="12.5" fill="#201C2E">
        with live navigation
      </text>
      <rect x="860" y="306" width="258" height="74" rx="14" fill="#DFF3E6" stroke="#34A853" strokeWidth="2" />
      <rect x="860" y="306" width="6" height="74" rx="3" fill="#34A853" />
      <text x="989" y="339" textAnchor="middle" fontFamily="Nunito Sans, sans-serif" fontWeight="800" fontSize="12.5" fill="#201C2E">
        Arrive at
      </text>
      <text x="989" y="354" textAnchor="middle" fontFamily="Nunito Sans, sans-serif" fontWeight="600" fontSize="12.5" fill="#201C2E">
        destination
      </text>
      <line x1="278" y1="343" x2="292" y2="343" stroke="#34A853" strokeWidth="2" />
      <path d="M292,338 L300,343 L292,348 z" fill="#34A853" />
      <line x1="558" y1="343" x2="572" y2="343" stroke="#34A853" strokeWidth="2" />
      <path d="M572,338 L580,343 L572,348 z" fill="#34A853" />
      <line x1="838" y1="343" x2="852" y2="343" stroke="#34A853" strokeWidth="2" />
      <path d="M852,338 L860,343 L852,348 z" fill="#34A853" />
    </svg>
  );
}

export default function SoundscapeNav() {
  const [activeSection, setActiveSection] = useState("");
  const rootRef = useRef(null);
  const uiVideoRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // GIF-like autoplay for UI overview (must stay muted for browser policies)
    const kickAutoplay = (video) => {
      if (!video || reduce) return;
      video.muted = true;
      const playAttempt = video.play();
      if (playAttempt && typeof playAttempt.catch === "function") {
        playAttempt.catch(() => {});
      }
    };
    kickAutoplay(uiVideoRef.current);
    const revealEls = Array.from(root.querySelectorAll(`.${styles.reveal}`));
    const countEls = Array.from(root.querySelectorAll(`.${styles.count}[data-count]`));

    const countUp = (el) => {
      const target = Number(el.getAttribute("data-count"));
      let t0 = null;
      const dur = 1100;
      const step = (ts) => {
        if (!t0) t0 = ts;
        const p = Math.min((ts - t0) / dur, 1);
        el.textContent = String(Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    if (reduce) {
      revealEls.forEach((el) => el.classList.add(styles.in));
      countEls.forEach((c) => {
        c.textContent = c.getAttribute("data-count");
      });
    } else {
      // Enable hide-until-reveal only when JS is running
      root.classList.add(styles.enhanced);
      countEls.forEach((c) => {
        c.textContent = "0";
      });

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add(styles.in);
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.16 }
      );
      revealEls.forEach((el) => io.observe(el));

      const seen = new WeakSet();
      const io2 = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting && !seen.has(e.target)) {
              seen.add(e.target);
              countUp(e.target);
              io2.unobserve(e.target);
            }
          });
        },
        { threshold: 0.6 }
      );
      countEls.forEach((c) => io2.observe(c));

      return () => {
        io.disconnect();
        io2.disconnect();
        root.classList.remove(styles.enhanced);
      };
    }

    return undefined;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      SECTION_IDS.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top < 200) current = id;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.bodyContainer} ref={rootRef}>
      <nav className={styles.nav} aria-label="Case study sections">
        <div className={styles.navInner}>
          <div className={styles.navlinks}>
            <a href="#problem" className={activeSection === "problem" ? styles.active : ""}>
              Problem
            </a>
            <a href="#research" className={activeSection === "research" ? styles.active : ""}>
              Research
            </a>
            <a href="#insight" className={activeSection === "insight" ? styles.active : ""}>
              Insights
            </a>
            <a href="#solution" className={activeSection === "solution" ? styles.active : ""}>
              Solution
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className={styles.hero}>
        <div className={styles.wrap}>
          <div className={cx(styles.dots, styles.reveal)} aria-hidden="true">
            <i /><i /><i /><i />
          </div>
          <h1 className={cx(styles.reveal, styles.d1)}>
            <span className={styles.g1}>Sound</span>
            <span className={styles.g2}>scape</span>
            <br />
            <span className={styles.g3}>Naviga</span>
            <span className={styles.g4}>tion</span>
          </h1>
          <div className={cx(styles.eq, styles.reveal, styles.d2)} aria-hidden="true">
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} />
            ))}
          </div>
          <p className={cx(styles.tag, styles.reveal, styles.d2)}>
            A mindful new way to walk — guided by sound, not just a screen.
          </p>
          <p className={cx(styles.sub, styles.reveal, styles.d3)}>
            A concept feature for Google Maps that adds a subtle, customizable
            audio layer to walking navigation — helping people look up from the
            blue dot, learn their surroundings, and rebuild the spatial
            instincts GPS has quietly eroded.
          </p>
          <div className={cx(styles.videoSlot, styles.reveal, styles.d3)}>
            <video
              ref={uiVideoRef}
              className={styles.videoAuto}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="Soundscape UI overview"
            >
              <source src="/Soundscapes_portfolio.mp4" type="video/mp4" />
            </video>
          </div>
          <div className={cx(styles.metabar, styles.reveal, styles.d4)}>
            <div>
              <div className={styles.k}>My Role</div>
              <div className={styles.v}>UX Research &amp; Design</div>
            </div>
            <div>
              <div className={styles.k}>Timeline</div>
              <div className={styles.v}>End-to-end concept</div>
            </div>
            <div>
              <div className={styles.k}>Platform</div>
              <div className={styles.v}>iOS · Walking Nav</div>
            </div>
            <div>
              <div className={styles.k}>Scope</div>
              <div className={styles.v}>Research → Hi-Fi Prototype</div>
            </div>
          </div>
        </div>
      </header>

      {/* THE PROBLEM */}
      <section id="problem" className={styles.section}>
        <div className={styles.wrap}>
          <div className={cx(styles.eyebrow, styles.reveal)}>The problem</div>
          <h2 className={cx(styles.claim, styles.reveal, styles.d1)}>
            We&apos;re outsourcing our sense of direction — and our brains feel it.
          </h2>
          <p className={cx(styles.lead, styles.reveal, styles.d2)}>
            Turn-by-turn GPS is so convenient that we&apos;ve stopped building our
            own mental maps. Researchers call it{" "}
            <b className={styles.bold}>spatial cognitive deskilling</b>: the more
            we lean on the app, the less our brains engage with the world.
            There&apos;s even a word for it — the Japanese <i>hōkō onchi</i>,
            &quot;deaf to direction.&quot;
          </p>
          <div className={styles.stats3}>
            <div className={cx(styles.stat, styles.reveal, styles.d1)}>
              <div className={styles.statBar} style={{ background: "var(--red)" }} />
              <div className={styles.statBig}>
                <span className={styles.count} data-count="20">
                  20
                </span>
                %
              </div>
              <div className={styles.statT}>Worse recall</div>
              <div className={styles.statD}>
                GPS users remembered fewer details of their surroundings than
                paper-map users (Ishikawa).
              </div>
            </div>
            <div className={cx(styles.stat, styles.reveal, styles.d2)}>
              <div className={styles.statBar} style={{ background: "var(--blue)" }} />
              <div className={styles.statBig}>Larger</div>
              <div className={styles.statT}>Hippocampi in map-users</div>
              <div className={styles.statD}>
                London cab-driver studies: rich mental maps grow the brain&apos;s
                spatial-memory center (Griesbauer, 2022).
              </div>
            </div>
            <div className={cx(styles.stat, styles.reveal, styles.d3)}>
              <div className={styles.statBar} style={{ background: "var(--yellow)" }} />
              <div className={styles.statBig}>↓</div>
              <div className={styles.statT}>Spatial memory</div>
              <div className={styles.statD}>
                Heavier GPS habits predict poorer wayfinding once the app is
                taken away (Dahmani &amp; Bohbot).
              </div>
            </div>
          </div>
          <p className={cx(styles.body, styles.reveal)}>
            Spatial thinking isn&apos;t just navigation — it&apos;s a foundational
            skill that helps us structure ideas, integrate new information, and
            recall memories in context. When GPS does the work, that muscle
            weakens.
          </p>
        </div>
      </section>

      {/* PROBLEM STATEMENT + PROCESS */}
      <section className={styles.sectionCard}>
        <div className={styles.wrap}>
          <div className={cx(styles.eyebrow, styles.reveal)}>Problem statement</div>
          <h2 className={cx(styles.claim, styles.reveal, styles.d1)}>
            Convenience came at the cost of how we know a place.
          </h2>
          <p className={cx(styles.lead, styles.reveal, styles.d2)}>
            Maps have guided human movement for millennia, helping people read
            landscapes and build their own sense of direction. Today, GPS-based
            navigation systems like Google Maps do most of that work for us.
            This convenience comes with a cost of weakening spatial memory and
            wayfinding skills. Visual-first maps reduce the city to a line on a
            screen, leaving little room for the textures, rhythms, and sounds of
            a place that help people orient themselves, feel present, and form
            lasting connections to their environment.
          </p>
          <div className={cx(styles.eyebrow, styles.reveal, styles.processEy)}>
            The process
          </div>
          <div className={styles.timeline}>
            {PROCESS_STEPS.map((step, i) => (
              <div
                key={step.n}
                className={cx(
                  styles.tstep,
                  styles.reveal,
                  styles[`d${Math.min(Math.floor(i / 2) + 1, 4)}`]
                )}
              >
                <span className={styles.tdot} style={{ background: step.color }} />
                <div className={styles.tn}>{step.n}</div>
                <div className={styles.tl}>{step.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUANTITATIVE DATA */}
      <section id="research" className={styles.section}>
        <div className={styles.wrap}>
          <div className={cx(styles.eyebrow, styles.reveal)}>Quantitative data</div>
          <h2 className={cx(styles.claim, styles.reveal, styles.d1)}>
            Google Maps owns the walk — so it&apos;s the right place to fix this.
          </h2>
          <p className={cx(styles.lead, styles.reveal, styles.d2)}>
            To change how people navigate on foot, go where they already are.
            Google Maps has roughly{" "}
            <b className={styles.bold}>50% US smartphone penetration</b>, opened
            ~30 times a month, ~3 minutes at a time — far more than any
            competitor.
          </p>
          <div className={cx(styles.framed, styles.reveal, styles.d1)}>
            <div className={styles.htitle}>Adoption &amp; Usage</div>
            <img
              src="/quant-adoption-usage.jpg"
              alt="Adoption and usage of leading mapping apps by downloads and monthly usage"
            />
            <div className={styles.framedCap}>
              Leading mapping apps by downloads and monthly usage · one in four
              owners choose their app for &quot;better directions&quot; (The
              Manifest, 2018).
            </div>
          </div>
        </div>
      </section>

      {/* COMPETITIVE */}
      <section className={styles.sectionCard}>
        <div className={styles.wrap}>
          <div className={cx(styles.eyebrow, styles.reveal)}>
            Strength &amp; inspiration in the wild
          </div>
          <h2 className={cx(styles.claim, styles.reveal, styles.d1)}>
            Borrow the best of Waze and Apple Maps — without the car-first noise.
          </h2>
          <div className={styles.cards3}>
            <div
              className={cx(styles.ccard, styles.reveal, styles.d1)}
              style={{ borderTopColor: "var(--blue)" }}
            >
              <div className={styles.ccardNm}>Google Maps</div>
              <div className={styles.ccardTag}>The baseline</div>
              <p>
                Unmatched data and reach — but visual-first and cluttered for
                walking.
              </p>
            </div>
            <div
              className={cx(styles.ccard, styles.reveal, styles.d2)}
              style={{ borderTopColor: "var(--yellow)" }}
            >
              <div className={styles.ccardNm}>Waze</div>
              <div className={styles.ccardTag}>Borrowed: real-time awareness</div>
              <p>
                User-generated alerts, focus on what&apos;s ahead, bold
                at-a-glance icons, a clear route-focused layout.
              </p>
            </div>
            <div
              className={cx(styles.ccard, styles.reveal, styles.d3)}
              style={{ borderTopColor: "var(--green)" }}
            >
              <div className={styles.ccardNm}>Apple Maps</div>
              <div className={styles.ccardTag}>Borrowed: spatial calm</div>
              <p>
                Low-clutter interface, custom saved walking routes, consistent
                elevation, immersive Look Around.
              </p>
            </div>
          </div>
          <p className={cx(styles.body, styles.reveal)} style={{ marginTop: 34 }}>
            <b className={styles.bold}>The design question:</b> how do we bring
            real-time awareness and spatial calm together — without inheriting
            the visual overload or the car-first bias?
          </p>
        </div>
      </section>

      {/* SURVEY FINDINGS */}
      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={cx(styles.eyebrow, styles.reveal)}>What users told us</div>
          <h2 className={cx(styles.claimSm, styles.reveal, styles.d1)}>
            Four findings.
          </h2>
          <div className={styles.survey}>
            <div className={cx(styles.donut, styles.reveal, styles.d1)}>
              <svg width="300" height="300" viewBox="0 0 300 300" aria-hidden="true">
                <circle cx="150" cy="150" r="118" fill="none" stroke="#E7E4EE" strokeWidth="34" />
                <circle
                  cx="150"
                  cy="150"
                  r="118"
                  fill="none"
                  stroke="var(--blue)"
                  strokeWidth="34"
                  strokeDasharray="185 556"
                />
                <circle
                  cx="150"
                  cy="150"
                  r="118"
                  fill="none"
                  stroke="var(--yellow)"
                  strokeWidth="34"
                  strokeDasharray="205 556"
                  strokeDashoffset="-185"
                />
                <circle
                  cx="150"
                  cy="150"
                  r="118"
                  fill="none"
                  stroke="var(--green)"
                  strokeWidth="34"
                  strokeDasharray="123 556"
                  strokeDashoffset="-390"
                />
                <circle
                  cx="150"
                  cy="150"
                  r="118"
                  fill="none"
                  stroke="var(--red)"
                  strokeWidth="34"
                  strokeDasharray="143 556"
                  strokeDashoffset="-513"
                />
              </svg>
              <div className={styles.donutMid}>
                <b>4</b>
                <span>key findings</span>
              </div>
            </div>
            <div className={styles.slist}>
              <div className={cx(styles.srow, styles.reveal, styles.d1)}>
                <div className={styles.pct} style={{ color: "var(--blue)" }}>
                  75%
                </div>
                <div className={styles.stxt}>
                  <b>Use GPS even for places they know.</b>
                  <span>
                    Rec: let users prioritize arrival time or a shorter route.
                  </span>
                </div>
              </div>
              <div className={cx(styles.srow, styles.reveal, styles.d2)}>
                <div className={styles.pct} style={{ color: "var(--yellow)" }}>
                  83%
                </div>
                <div className={styles.stxt}>
                  <b>Struggle with calibration &amp; orientation.</b>
                  <span>
                    Rec: during nav, occasionally confirm a nearby landmark.
                  </span>
                </div>
              </div>
              <div className={cx(styles.srow, styles.reveal, styles.d3)}>
                <div className={styles.pct} style={{ color: "var(--green)" }}>
                  50%
                </div>
                <div className={styles.stxt}>
                  <b>Navigate by landmarks.</b>
                  <span>
                    Rec: build landmark recognition into the guidance itself.
                  </span>
                </div>
              </div>
              <div className={cx(styles.srow, styles.reveal, styles.d4)}>
                <div className={styles.pct} style={{ color: "var(--red)" }}>
                  58%
                </div>
                <div className={styles.stxt}>
                  <b>Fall back on paper / screenshots offline.</b>
                  <span>
                    Rec: proactively prompt users to save an offline route.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEY INSIGHTS */}
      <section id="insight" className={styles.sectionCard}>
        <div className={styles.wrap}>
          <div className={cx(styles.eyebrow, styles.reveal)}>Key Insights</div>
          <h2 className={cx(styles.claim, styles.reveal, styles.d1)}>
            Navigation needs to be more than a blue dot.
          </h2>
          <div className={styles.probs}>
            <div
              className={cx(styles.prob, styles.reveal, styles.d1)}
              style={{ background: "var(--blue)" }}
            >
              <div className={styles.probN}>01</div>
              <h4>Screen fatigue</h4>
              <p>
                People feel forced to stare at their phones while walking —
                hurting safety and the journey itself.
              </p>
            </div>
            <div
              className={cx(styles.prob, styles.reveal, styles.d2)}
              style={{ background: "var(--red)" }}
            >
              <div className={styles.probN}>02</div>
              <h4>Limited audio</h4>
              <p>
                Voice guidance is purely functional turn-by-turn; it doesn&apos;t
                support spatial awareness or atmosphere.
              </p>
            </div>
            <div
              className={cx(styles.prob, styles.reveal, styles.d3)}
              style={{ background: "var(--green)" }}
            >
              <div className={styles.probN}>03</div>
              <h4>Missed context</h4>
              <p>
                People arrive without knowing the neighborhood they moved
                through. They miss the feel of the place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HMW */}
      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={cx(styles.eyebrow, styles.reveal)}>How might we</div>
          <h2 className={cx(styles.claim, styles.reveal, styles.d1)}>
            Three questions to design against.
          </h2>
          <div className={styles.hmw}>
            <div
              className={cx(styles.hcard, styles.reveal, styles.d1)}
              style={{ borderColor: "var(--blue)" }}
            >
              <div className={styles.hcardLbl}>Screens</div>
              <div className={styles.hcardQ}>
                How might we help users navigate without blind dependence on
                their device screens?
              </div>
            </div>
            <div
              className={cx(styles.hcard, styles.reveal, styles.d2)}
              style={{ borderColor: "var(--yellow)" }}
            >
              <div className={styles.hcardLbl}>Learning</div>
              <div className={styles.hcardQ}>
                How might we encourage users to learn more about the
                environment they&apos;re navigating?
              </div>
            </div>
            <div
              className={cx(styles.hcard, styles.reveal, styles.d3)}
              style={{ borderColor: "var(--green)" }}
            >
              <div className={styles.hcardLbl}>Confidence</div>
              <div className={styles.hcardQ}>
                How might we build wayfinding confidence while strengthening
                mental maps?
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IDEATION */}
      <section className={styles.sectionCard}>
        <div className={styles.wrap}>
          <div className={cx(styles.eyebrow, styles.reveal)}>Ideation</div>
          <h2 className={cx(styles.claim, styles.reveal, styles.d1)}>
            We bet on audio.
          </h2>
          <p className={cx(styles.lead, styles.reveal, styles.d2)}>
            Mapping our thinking: audio kept surfacing as the modality with the
            most untapped room — and landmarks as the thing people trust when
            the screen fails.{" "}
            <b className={styles.bold}>Audio + Landmarks</b> is where the idea
            landed.
          </p>
          <div className={cx(styles.mind, styles.reveal, styles.d1)}>
            <div className={styles.mlabel}>3 Modalities</div>
            <div className={styles.mrow}>
              <span className={styles.mpillMut}>Visual</span>
              <span className={styles.mpillOn}>Auditory</span>
              <span className={styles.mpill}>Touch</span>
            </div>
            <div className={styles.mrow} style={{ marginTop: 22 }}>
              <span className={styles.mpillQ}>
                Is audio the problem — or the <i>sound</i> of it?
              </span>
              <span className={styles.marrow}>→</span>
              <span className={styles.mpillQ}>Calming sound?</span>
              <span className={styles.marrow}>→</span>
              <span
                className={styles.mpillQ}
                style={{ background: "#E9F5ED", color: "var(--green)" }}
              >
                <b>Audio + Landmarks</b>
              </span>
              <span className={styles.marrow}>→</span>
              <span className={styles.mpillFinal}>Soundscapes</span>
            </div>
            <div className={styles.minsights}>
              <div className={cx(styles.mins, styles.reveal, styles.d1)}>
                <div className={styles.minsK}>User insight</div>
                <p>
                  50% of users said they liked the audio feature — and 50% said
                  they didn&apos;t.
                </p>
              </div>
              <div className={cx(styles.mins, styles.reveal, styles.d2)}>
                <div className={styles.minsK} style={{ color: "var(--green)" }}>
                  User insight
                </div>
                <p>
                  Landmarks are the tool people most commonly use when
                  navigating without their phones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USER FLOW */}
      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={cx(styles.eyebrow, styles.reveal)}>User flow</div>
          <h2 className={cx(styles.claim, styles.reveal, styles.d1)}>
            One feature, placed where you&apos;ll actually find it.
          </h2>
          <p className={cx(styles.lead, styles.reveal, styles.d2)}>
            Google Maps is already robust, so I mapped a user flow to place
            Soundscape within reach every time the app opens. Mid-fidelity
            testing pushed us multi-modal: someone new to a city wants
            storytelling; a daily commuter wants a quiet tonal cue. Different
            priorities, different modes.
          </p>
          <div className={cx(styles.framed, styles.reveal, styles.d1)}>
            <div className={styles.htitle}>Soundscape user flow</div>
            <div className={styles.flowScroll}>
              <UserFlowSvg />
            </div>
            <div className={styles.framedCap}>
              Where Soundscape plugs into the Google Maps journey — reachable
              the moment a route begins.
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION + MODES */}
      <section id="solution" className={styles.sectionCard}>
        <div className={styles.wrap}>
          <div className={cx(styles.eyebrow, styles.reveal)}>The solution</div>
          <h2 className={cx(styles.claim, styles.reveal, styles.d1)}>
            Walk by Ear, Not Just by Screen.
          </h2>
          <p className={cx(styles.lead, styles.reveal, styles.d2)}>
            A light, optional audio layer — with your phone in your pocket, you
            can follow the route by ear, stay present in the neighborhood, and
            feel the city instead of just watching the screen. Four modes let
            people match the guidance to how they want to move through a place.
          </p>
          <div className={cx(styles.videoSlot, styles.reveal)}>
            <video
              className={styles.videoPlayer}
              controls
              playsInline
              preload="metadata"
              aria-label="Soundscape prototype walkthrough"
            >
              <source
                src="/Slide%2016_9%20-%205.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className={styles.modes}>
            <div className={cx(styles.mode, styles.reveal, styles.d1)}>
              <div className={styles.modeIdx} style={{ color: "var(--blue)" }}>
                01
              </div>
              <div>
                <div className={styles.modeNm}>Minimal</div>
                <p>
                  A no-frills cue system: brief, customizable tones at turns and
                  key moments — no commentary, no ambient sound. The goal is
                  quiet directional vigilance.
                </p>
                <div className={styles.hear}>
                  &quot;A soft ping at Smith St every morning, so you learn to
                  turn right there.&quot;
                </div>
              </div>
              <div className={styles.shots}>
                <img
                  src="/minimal-1.png"
                  alt="Minimal mode tone selection screen"
                />
                <img
                  src="/minimal-2.png"
                  alt="Minimal mode start navigation screen"
                />
              </div>
            </div>
            <div className={cx(styles.mode, styles.reveal, styles.d1)}>
              <div className={styles.modeIdx} style={{ color: "var(--green)" }}>
                02
              </div>
              <div>
                <div className={styles.modeNm}>Landmark</div>
                <p>
                  Guided narration keeps you informed about the area and its
                  landmarks, so you understand where you are in relation to what
                  you pass.
                </p>
                <div className={styles.hear}>
                  &quot;You&apos;re passing Trader Joe&apos;s at Atlantic Ave
                  &amp; Court St. Continue along Atlantic toward your
                  destination.&quot;
                </div>
              </div>
              <div className={styles.shots}>
                <img
                  src="/landmark-1.png"
                  alt="Landmark mode narration interface"
                />
                <img
                  src="/landmark-2.png"
                  alt="Landmark mode start screen"
                />
              </div>
            </div>
            <div className={cx(styles.mode, styles.reveal, styles.d1)}>
              <div className={styles.modeIdx} style={{ color: "var(--yellow)" }}>
                03
              </div>
              <div>
                <div className={styles.modeNm}>Immersive</div>
                <p>
                  Ambient sound and storytelling become the navigation cue.
                  On-screen visuals mirror what you see in real life, so
                  landmarks are easy to recognize — building a mental map as you
                  go. Sounds tied to a place <i>fade in</i> as you approach.
                </p>
                <div className={styles.hear}>
                  Nearing a pier, gentle water sounds rise to signal your
                  destination is close.
                </div>
              </div>
              <div className={styles.shots}>
                <img
                  src="/immersive-1.png"
                  alt="Immersive mode map view with place-based cues"
                />
                <img
                  src="/immersive-2.png"
                  alt="Immersive mode narration timeline"
                />
              </div>
            </div>
            <div className={cx(styles.mode, styles.reveal, styles.d1)}>
              <div className={styles.modeIdx} style={{ color: "var(--red)" }}>
                04
              </div>
              <div>
                <div className={styles.modeNm}>Accessible</div>
                <p>
                  Navigation you can feel, not just hear. Every cue works across
                  text and haptics; sound is optional and never masks real-world
                  audio. Spoken info is always captioned; tones are simple,
                  low-to-mid, one clear meaning each.
                </p>
                <div className={styles.hear}>
                  One sound, one meaning — clear, low-to-mid tones with no
                  overlap.
                </div>
              </div>
              <div className={cx(styles.shots, styles.shotsOne)}>
                <img
                  src="/accessible-1.png"
                  alt="Accessible mode settings with haptic and caption options"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USABILITY */}
      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={cx(styles.eyebrow, styles.reveal)}>Usability feedback</div>
          <h2 className={cx(styles.claim, styles.reveal, styles.d1)}>Findings.</h2>
          <div className={styles.qlist}>
            <div className={cx(styles.quote, styles.reveal, styles.d1)}>
              &quot;The soundscape icon blends in with the other icons on the
              page. I wouldn&apos;t have known it was there.&quot;
              <span className={styles.quoteM}>Discoverability</span>
            </div>
            <div className={cx(styles.quote, styles.reveal, styles.d1)}>
              &quot;Do I have to use these tones? Can I change them?&quot;
              <span className={styles.quoteM}>Minimal mode</span>
            </div>
            <div className={cx(styles.quote, styles.reveal, styles.d2)}>
              &quot;Can I still have my music playing while using these
              features?&quot;
              <span className={styles.quoteM}>Audio conflict</span>
            </div>
            <div className={cx(styles.quote, styles.reveal, styles.d2)}>
              &quot;It would be nice to look ahead and see what narrations are
              coming up.&quot;
              <span className={styles.quoteM}>Immersive mode</span>
            </div>
            <div className={cx(styles.quote, styles.reveal, styles.d3)}>
              &quot;Can font size be changed in accessible mode?&quot;
              <span className={styles.quoteM}>Accessible mode</span>
            </div>
            <div className={cx(styles.quote, styles.reveal, styles.d3)}>
              &quot;Live navigation on Google Maps can struggle at night — would
              the camera still struggle during immersive mode?&quot;
              <span className={styles.quoteM}>Immersive mode</span>
            </div>
          </div>
          <div className={cx(styles.gifwrap, styles.reveal)}>
            <img
              src="/walking-demo.gif"
              alt="Testing Soundscape while walking in the neighborhood"
            />
            <div className={styles.gifCap}>
              Testing Soundscape on a real walking route in the neighborhood.
            </div>
          </div>
        </div>
      </section>

      {/* REFLECTION */}
      <section className={styles.band}>
        <div className={styles.wrap}>
          <div className={cx(styles.eyebrow, styles.reveal)}>Reflection</div>
          <h2 className={cx(styles.reveal, styles.d1)}>What I&apos;d do next.</h2>
          <p className={cx(styles.reveal, styles.d2)}>
            I&apos;d build out the detailed UI of each mode, and go deeper on
            the Accessible mode specifically — by talking directly to users with
            disabilities, so the experience is shaped by the people it&apos;s
            meant to serve rather than assumptions about them.
          </p>
          <p className={cx(styles.thanks, styles.reveal, styles.d3)}>
            Honestly? This was so much fun to build and work on. Special thanks
            to Sana Maqsood — Lead UX Designer @ Amazon.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.wrap}>
          <p className={cx(styles.kick, styles.reveal)}>
            Navigation you can feel your way through — not just stare at.
          </p>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.wrap}>
          <div className={styles.footerLogo}>Deepali</div>
          <div className={styles.refs}>
            References — Fabrikant (2024) · Grabar (2014) · Ishikawa ·
            Griesbauer et al. (2022) · Dahmani &amp; Bohbot (2020) · The
            Manifest (2018) · Insider Intelligence.
          </div>
          <div className={styles.disc}>
            A concept project · not affiliated with Google.
          </div>
        </div>
      </footer>
    </div>
  );
}
