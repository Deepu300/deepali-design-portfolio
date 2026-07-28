"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./GestureAuth.module.css";

const RAIL_LINKS = [
  { id: "scenario", label: "Scenario" },
  { id: "problem", label: "Problem" },
  { id: "research", label: "Research" },
  { id: "solution", label: "Solution" },
  { id: "decisions", label: "Design decisions" },
  { id: "testing", label: "Testing" },
  { id: "impact", label: "Impact" },
  { id: "reflection", label: "Reflection" },
];

/* 21 hand landmarks from the trained ML5 model — bones then joints. */
const HAND_BONES = [
  [150, 340, 112, 308, 0.0],
  [112, 308, 84, 282, 0.04],
  [84, 282, 62, 258, 0.09],
  [62, 258, 44, 236, 0.14],
  [150, 340, 122, 258, 0.18],
  [122, 258, 116, 198, 0.22],
  [116, 198, 112, 158, 0.27],
  [112, 158, 108, 122, 0.32],
  [122, 258, 152, 250, 0.36],
  [152, 250, 153, 184, 0.4],
  [153, 184, 154, 138, 0.45],
  [154, 138, 155, 98, 0.49],
  [152, 250, 184, 254, 0.54],
  [184, 254, 190, 196, 0.58],
  [190, 196, 194, 156, 0.63],
  [194, 156, 197, 122, 0.67],
  [184, 254, 212, 266, 0.72],
  [150, 340, 212, 266, 0.77],
  [212, 266, 226, 222, 0.81],
  [226, 222, 233, 192, 0.85],
  [233, 192, 239, 164, 0.9],
];

const HAND_JOINTS = [
  [150, 340, 0.25],
  [112, 308, 0.29],
  [84, 282, 0.33],
  [62, 258, 0.37],
  [44, 236, 0.41],
  [122, 258, 0.45],
  [116, 198, 0.49],
  [112, 158, 0.53],
  [108, 122, 0.57],
  [152, 250, 0.61],
  [153, 184, 0.65],
  [154, 138, 0.69],
  [155, 98, 0.73],
  [184, 254, 0.77],
  [190, 196, 0.81],
  [194, 156, 0.85],
  [197, 122, 0.89],
  [212, 266, 0.93],
  [226, 222, 0.97],
  [233, 192, 1.01],
  [239, 164, 1.05],
];

const FRICTION_STEPS = [
  { ic: "🔑", fl: "Enter your password", fp: "done", d: styles.d1 },
  { ic: "📱", fl: "Wait for a text code", fp: "+30s", d: styles.d1 },
  { ic: "🏃", fl: "Phone is in the other room", fp: "detour", d: styles.d2 },
  { ic: "⌛", fl: "The code expired", fp: "✗", d: styles.d3 },
  { ic: "🧩", fl: "Now solve a CAPTCHA", fp: "bicycle?", d: styles.d3 },
  { ic: "😩", fl: "Still not in", fp: "stuck", d: styles.d4, stuck: true },
];

const THEMES = [
  { e: "🔁", t: "Over-friction", s: "logins feel like a chore", d: styles.d1 },
  { e: "📱", t: "Device fragility", s: "lose the phone, lose access", d: styles.d1 },
  { e: "🧩", t: "CAPTCHA frustration", s: "outdated & often fails first try", d: styles.d2 },
  { e: "🔐", t: "Security paradox", s: "want safety, distrust the methods", d: styles.d2 },
  { e: "⚠️", t: "Reliability gaps", s: "delays, fails, broken “remember me”", d: styles.d3 },
];

const JOURNEY = [
  { je: "😐", n: "Stage 1", t: "Normal login", f: "“Let me quickly log in.”", d: styles.d1 },
  { je: "😟", n: "Stage 2", t: "2FA challenge", f: "“Oh no… my phone's at home.”", d: styles.d1 },
  { je: "😕", n: "Stage 3", t: "Tries a workaround", f: "“Is there no other way?”", d: styles.d2 },
  { je: "😣", n: "Stage 4", t: "Alternative devices", f: "“Maybe I'm still logged in somewhere…”", d: styles.d2 },
  { je: "😠", n: "Stage 5", t: "Stuck", f: "“This is wasting so much time.”", d: styles.d3 },
  { je: "😩", n: "Stage 6", t: "Abandonment", f: "“I can't access my work.”", d: styles.d3 },
];

function cx(...parts) {
  return parts.filter(Boolean).join(" ");
}

function HandSvg() {
  return (
    <svg
      className={styles.hand}
      viewBox="0 0 300 380"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="A hand skeleton drawn from the 21 landmarks the computer-vision model tracks"
    >
      <defs>
        <linearGradient id="hg" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#5B8DEF" />
          <stop offset="1" stopColor="#5FB07B" />
        </linearGradient>
      </defs>
      {HAND_BONES.map(([x1, y1, x2, y2, delay]) => (
        <line
          key={`bone-${x1}-${y1}-${x2}-${y2}`}
          className={styles.hc}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          style={{ animationDelay: `${delay}s` }}
        />
      ))}
      {HAND_JOINTS.map(([cxp, cyp, delay]) => (
        <circle
          key={`joint-${cxp}-${cyp}`}
          className={styles.hp}
          cx={cxp}
          cy={cyp}
          r={6.5}
          style={{ animationDelay: `${delay}s` }}
        />
      ))}
    </svg>
  );
}

export default function GestureBased() {
  const rootRef = useRef(null);
  const [activeSection, setActiveSection] = useState("");
  const [navSolid, setNavSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavSolid(window.scrollY > 60);

      // Highlight the last rail section whose top has passed 160px down-page.
      let current = "";
      RAIL_LINKS.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 160) current = id;
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const revealEls = Array.from(root.querySelectorAll(`.${styles.reveal}`));
    const countEls = Array.from(
      root.querySelectorAll(`.${styles.count}[data-count]`),
    );

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
      return;
    }

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
      { threshold: 0.15 },
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
      { threshold: 0.7 },
    );
    countEls.forEach((c) => io2.observe(c));

    return () => {
      io.disconnect();
      io2.disconnect();
    };
  }, []);

  return (
    <div className={styles.bodyContainer} ref={rootRef}>
      {/* Narrow screens get this bar; ≥1080px gets the side rail below. */}
      <nav className={cx(styles.nav, navSolid && styles.solid)}>
        <Link href="/" className={styles.logo}>
          Deepali
        </Link>
      </nav>

      <aside className={styles.siderail}>
        <Link href="/" className={styles.rlogo}>
          Deepali
        </Link>
        <nav className={styles.rnav}>
          {RAIL_LINKS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={cx(
                styles.rlink,
                activeSection === id && styles.active,
              )}
            >
              {label}
            </a>
          ))}
        </nav>
      </aside>

      {/* HERO */}
      <header className={styles.hero}>
        <div className={styles.wrap}>
          <div className={styles.hgrid}>
            <div>
              <div className={cx(styles.ey, styles.reveal)}>
                Gesture-Based Human Verification
              </div>
              <h1 className={cx(styles.reveal, styles.d1)}>
                Prove you&apos;re human with a{" "}
                <span className={styles.cGreen}>wave</span> — not another
                CAPTCHA.
              </h1>
              <p className={cx(styles.reveal, styles.d2)}>
                A gesture-based way to prove a real person is there — swapping
                the CAPTCHA-and-2FA gauntlet for one quick hand sign, read by a
                computer-vision model.
              </p>
              <div className={cx(styles.metarow, styles.reveal, styles.d3)}>
                <div>
                  <div className={styles.k}>Role</div>
                  <div className={styles.v}>
                    UX Research, Interaction Design &amp; CV model
                  </div>
                </div>
                <div>
                  <div className={styles.k}>Context</div>
                  <div className={styles.v}>NYU · UX &amp; AI final project</div>
                </div>
                <div>
                  <div className={styles.k}>Scope</div>
                  <div className={styles.v}>Research → working prototype</div>
                </div>
                <div>
                  <div className={styles.k}>Built with</div>
                  <div className={styles.v}>ML5.js · 21 landmarks</div>
                </div>
              </div>
            </div>

            <div className={styles.stack}>
              <div
                className={cx(styles.tix, styles.r, styles.reveal, styles.d1)}
                style={{ transform: "rotate(-3deg) translateX(-6px)" }}
              >
                <div className={styles.thead}>
                  <span>Password</span>
                  <span>11:47 PM</span>
                </div>
                <div className={styles.trow}>
                  <span className={styles.pill}>entered</span>
                  <div className={styles.tt}>Type your password</div>
                  <div className={styles.ts}>•••••••••••</div>
                </div>
              </div>

              <div
                className={cx(styles.tix, styles.p, styles.reveal, styles.d2)}
                style={{ transform: "rotate(2.5deg) translateX(10px)" }}
              >
                <div className={styles.thead}>
                  <span>2FA</span>
                  <span>+45s</span>
                </div>
                <div className={styles.trow}>
                  <span className={styles.pill}>expired</span>
                  <div className={styles.tt}>Text me a code</div>
                  <div className={styles.ts}>phone&apos;s in the other room…</div>
                </div>
              </div>

              <div
                className={cx(styles.tix, styles.b, styles.reveal, styles.d3)}
                style={{ transform: "rotate(-1.5deg) translateX(-4px)" }}
              >
                <div className={styles.thead}>
                  <span>CAPTCHA</span>
                  <span>try again</span>
                </div>
                <div className={styles.trow}>
                  <span className={styles.pill}>✗</span>
                  <div className={styles.tt}>Select all buses</div>
                  <div className={styles.ts}>…is that a bicycle?</div>
                </div>
              </div>

              <div
                className={cx(
                  styles.tix,
                  styles.g,
                  styles.pass,
                  styles.reveal,
                  styles.d4,
                )}
                style={{ transform: "rotate(1.5deg) translateX(8px)" }}
              >
                <div className={styles.thead}>
                  <span>
                    <b>GestureCAPTCHA</b>
                  </span>
                  <span>0.4s</span>
                </div>
                <div className={styles.trow}>
                  <span className={styles.pill}>✓</span>
                  <div className={styles.tt}>✌️ Peace sign</div>
                  <div className={styles.ts}>Verified human.</div>
                </div>
              </div>

              <div className={styles.cursor} aria-hidden="true">
                👆
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* UI OVERVIEW */}
      <div className={styles.wrap}>
        <div className={cx(styles.uiframe, styles.reveal)}>
          <div className={styles.uibar}>
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.u}>gesturecaptcha · overview</span>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className={styles.uimedia}
            src="/images/gesture-based-authentication/cover.gif"
            alt="GestureCAPTCHA overview: a hand gesture being recognised live by the model"
          />
        </div>
      </div>

      {/* SCENARIO + FRICTION FLOW */}
      <section id="scenario" className={styles.section}>
        <div className={styles.wrap}>
          <div className={cx(styles.ey, styles.reveal)}>Scenario</div>
          <h2 className={cx(styles.claim, styles.reveal, styles.d1)}>
            You just want to check your bank balance.
          </h2>
          <p className={cx(styles.lead, styles.reveal, styles.d2)}>
            It should take five seconds. Here is what actually happens.
          </p>
          <div className={styles.fricflow}>
            {FRICTION_STEPS.map((s, i) => (
              <React.Fragment key={s.fl}>
                {i > 0 && (
                  <div
                    className={cx(styles.farr2, styles.reveal, s.d)}
                    aria-hidden="true"
                  >
                    →
                  </div>
                )}
                <div
                  className={cx(
                    styles.fnode,
                    s.stuck && styles.stuck,
                    styles.reveal,
                    s.d,
                  )}
                >
                  <div className={styles.ic} aria-hidden="true">
                    {s.ic}
                  </div>
                  <div className={styles.fl}>{s.fl}</div>
                  <span className={styles.fp}>{s.fp}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
          <p className={cx(styles.lead, styles.mt34, styles.reveal)}>
            You were not hacked or careless. You just wanted{" "}
            <span className={styles.cGreen}>in</span>.
          </p>
        </div>
      </section>

      {/* PROBLEM */}
      <section id="problem" className={styles.section}>
        <div className={styles.wrap}>
          <div className={cx(styles.ey, styles.reveal)}>Problem</div>
          <h2 className={cx(styles.claim, styles.reveal, styles.d1)}>
            We prove we&apos;re human dozens of times a day. It&apos;s
            exhausting.
          </h2>
          <p className={cx(styles.lead, styles.reveal, styles.d2)}>
            Work accounts. University portals. Recipe sites. Every login throws
            up the same gates: passwords, codes, CAPTCHAs. Each one is a small
            tax on your attention. Stack them across a day and security stops
            feeling like safety — it starts feeling like a chore.
          </p>
          <div className={cx(styles.pull, styles.reveal)}>
            Security is supposed to feel safe. Instead it feels like a chore.
          </div>
        </div>
      </section>

      {/* GAP */}
      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={cx(styles.ey, styles.reveal)}>The gap</div>
          <h2 className={cx(styles.claim, styles.reveal, styles.d1)}>
            Every check is built to stop bots — not to work for people.
          </h2>
          <p className={cx(styles.lead, styles.reveal, styles.d2)}>
            Each fix defends against the machine by handing more work to the
            human:
          </p>
          <div className={styles.tgrid}>
            <div className={cx(styles.tix, styles.r, styles.reveal, styles.d1)}>
              <div className={styles.thead}>
                <span>2FA</span>
                <span>✗</span>
              </div>
              <div className={styles.trow}>
                <div className={styles.tt}>One fragile object</div>
                <div className={styles.ts}>
                  Lose your phone and your whole life locks — bank, email, even
                  the laundry app.
                </div>
              </div>
            </div>
            <div className={cx(styles.tix, styles.b, styles.reveal, styles.d2)}>
              <div className={styles.thead}>
                <span>CAPTCHA</span>
                <span>✗</span>
              </div>
              <div className={styles.trow}>
                <div className={styles.tt}>Harder for people</div>
                <div className={styles.ts}>
                  They barely slow bots. AI now solves them faster than we do.
                </div>
              </div>
            </div>
            <div className={cx(styles.tix, styles.p, styles.reveal, styles.d3)}>
              <div className={styles.thead}>
                <span>“Remember me”</span>
                <span>✗</span>
              </div>
              <div className={styles.trow}>
                <div className={styles.tt}>It never does</div>
                <div className={styles.ts}>
                  So you log in again. And again. And again.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section id="research" className={styles.section}>
        <div className={styles.wrap}>
          <div className={cx(styles.ey, styles.reveal)}>Research</div>
          <h2 className={cx(styles.claim, styles.reveal, styles.d1)}>
            I dug into why these checks fail — especially the CAPTCHA.
          </h2>
          <p className={cx(styles.lead, styles.reveal, styles.d2)}>
            I didn&apos;t start with gestures. I started by mapping the CAPTCHA
            problem space and listening to people describe logging in — in
            interviews, in observation during real logins, and across Reddit
            threads where the frustration is raw.
          </p>
          <div className={cx(styles.methods, styles.reveal, styles.d2)}>
            <div className={styles.method}>
              <span className={styles.mn}>01</span> [N] user interviews
            </div>
            <div className={styles.method}>
              <span className={styles.mn}>02</span> Observation during real
              logins
            </div>
            <div className={styles.method}>
              <span className={styles.mn}>03</span> Reddit sentiment analysis
            </div>
          </div>
          <div className={cx(styles.todo, styles.reveal)}>
            <b>Fill in:</b> your exact interview / participant counts. Replace
            “[N]” above and in Testing below.
          </div>

          <div
            className={cx(
              styles.tix,
              styles.b,
              styles.mt40,
              styles.reveal,
              styles.d1,
            )}
          >
            <div className={styles.thead}>
              <span>
                <b>What a CAPTCHA actually is</b>
              </span>
              <span>problem map</span>
            </div>
            <div className={styles.trow}>
              <div className={cx(styles.ts, styles.trowNote)}>
                A <b>C</b>ompletely <b>A</b>utomated <b>P</b>ublic <b>T</b>uring
                test to tell Computers and Humans Apart — it leans entirely on{" "}
                <b>sensory perception</b> (seeing distorted text, spotting
                buses). That&apos;s the flaw: the audio alternative is so
                degraded that even people without hearing loss struggle with it{" "}
                <span className={styles.cite}>(Lazar et al., 2007)</span>, and
                few sites ship a truly accessible option at all{" "}
                <span className={styles.cite}>(Gadepally et al., 2018)</span>. A
                test meant to include humans quietly excludes many of them.
              </div>
            </div>
          </div>

          <div className={cx(styles.ey, styles.mt56, styles.reveal)}>
            What people told me
          </div>
          <div className={styles.quotes}>
            <div className={cx(styles.quote, styles.reveal, styles.d1)}>
              “Those text CAPTCHAs with distorted characters are hit or miss.
              Bots probably solve these better than I can at this point.”
              <span className={styles.src}>— Interview participant</span>
            </div>
            <div className={cx(styles.quote, styles.reveal, styles.d2)}>
              “The ‘select all traffic lights’ ones… I end up clicking extra
              squares just in case. I feel like I&apos;m in CAPTCHA jail, doing
              it over and over.”
              <span className={styles.src}>— Interview participant</span>
            </div>
          </div>

          <div className={cx(styles.ey, styles.mt56, styles.reveal)}>
            What I saw them do
          </div>
          <ul className={styles.obs}>
            <li className={cx(styles.reveal, styles.d1)}>
              Blurry, low-quality images caused hesitation and second-guessing.
            </li>
            <li className={cx(styles.reveal, styles.d1)}>
              Every failed attempt re-triggered the CAPTCHA — repeats drove the
              frustration, not the first try.
            </li>
            <li className={cx(styles.reveal, styles.d2)}>
              Tiny targets were painful on phones; people pinch-zoomed just to
              read them.
            </li>
            <li className={cx(styles.reveal, styles.d2)}>
              When a check felt unnecessary or invasive, people distrusted — or
              abandoned — the site.
            </li>
          </ul>
          <div
            className={cx(styles.callout, styles.calloutPink, styles.reveal)}
          >
            <b>Most surprising finding:</b> the audio CAPTCHAs available today
            are so distorted they “sound like ghost voices” — the supposed
            accessible fallback is barely usable.
          </div>
        </div>
      </section>

      {/* THEMES */}
      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={cx(styles.ey, styles.reveal)}>Affinity mapping</div>
          <h2 className={cx(styles.claim, styles.reveal, styles.d1)}>
            Everything clustered into five themes.
          </h2>
          <div className={styles.themes}>
            {THEMES.map((t) => (
              <div
                key={t.t}
                className={cx(styles.theme, styles.reveal, t.d)}
              >
                <span aria-hidden="true">{t.e}</span> {t.t}{" "}
                <em>{t.s}</em>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY MAP */}
      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={cx(styles.ey, styles.reveal)}>Journey map</div>
          <h2 className={cx(styles.claim, styles.reveal, styles.d1)}>
            One blocked login, mapped start to finish.
          </h2>
          <p className={cx(styles.lead, styles.reveal, styles.d2)}>
            Following a user through a 2FA lockout showed exactly where the
            experience falls off a cliff — and where it never recovers.
          </p>
          <div className={styles.jmap}>
            {JOURNEY.map((s) => (
              <div
                key={s.n}
                className={cx(styles.jstage, styles.reveal, s.d)}
              >
                <div className={styles.je} aria-hidden="true">
                  {s.je}
                </div>
                <div className={styles.jn}>{s.n}</div>
                <div className={styles.jt}>{s.t}</div>
                <div className={styles.jf}>{s.f}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TENSION / HMW */}
      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={cx(styles.ey, styles.reveal)}>Insight</div>
          <h2 className={cx(styles.claim, styles.reveal, styles.d1)}>
            People want strong protection. They just hate friction that feels
            pointless.
          </h2>
          <p className={cx(styles.lead, styles.reveal, styles.d2)}>
            Under every theme sat the same conflict — and it&apos;s the conflict
            behind every auth product:
          </p>
          <div className={cx(styles.tension, styles.reveal, styles.d1)}>
            <div className={styles.h}>
              Convenience vs. security.
              <br />
              Nobody should have to pick.
            </div>
            <div className={styles.s}>
              So I reframed the brief as one question
            </div>
          </div>
          <div className={cx(styles.reframe, styles.reveal)}>
            How do we prove a real human is present —{" "}
            <span className={styles.cBlue}>
              without making that human do the work?
            </span>
          </div>
        </div>
      </section>

      {/* IDEATION */}
      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={cx(styles.ey, styles.reveal)}>Ideation</div>
          <h2 className={cx(styles.claim, styles.reveal, styles.d1)}>
            I explored three ways to prove a human is there.
          </h2>
          <p className={cx(styles.lead, styles.reveal, styles.d2)}>
            I sketched three ways to prove a human is present, then weighed each
            against friction, privacy, and how convincingly it separates a
            person from a bot.
          </p>
          <div className={styles.opts}>
            <div className={cx(styles.opt, styles.win)}>
              <span className={styles.op}>✓ chosen</span>
              <span className={styles.ot}>Gesture</span>A quick hand sign read
              by a computer-vision model. Human, playful, on-device — and a bot
              can&apos;t perform a live gesture convincingly.
            </div>
            <div className={styles.opt}>
              <span className={styles.op}>✗</span>
              <span className={styles.ot}>Haptic rhythm</span>A
              vibration-pattern “signature.” Needed special hardware and was
              hard to remember.
            </div>
            <div className={styles.opt}>
              <span className={styles.op}>✗</span>
              <span className={styles.ot}>AI adaptive</span>Silent location /
              behavioral signals. Powerful, but it happens <i>to</i> you — no
              consent, no transparency.
            </div>
          </div>
          <div className={cx(styles.callout, styles.reveal)}>
            <b>Fitts List thinking:</b> I mapped human vs. machine strengths (de
            Winter &amp; Dodou, 2011; Google&apos;s People + AI Guidebook). Let
            the machine do the repetitive verification it&apos;s good at; keep
            the human in charge of the one thing they should own — <b>consent</b>
            .
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section id="solution" className={styles.section}>
        <div className={styles.wrap}>
          <div className={cx(styles.ey, styles.reveal)}>Solution</div>
          <h2 className={cx(styles.claim, styles.reveal, styles.d1)}>
            GestureCAPTCHA: wave to prove you&apos;re human.
          </h2>
          <div className={styles.solgrid}>
            <div
              className={cx(
                styles.tix,
                styles.handcard,
                styles.reveal,
                styles.d1,
              )}
            >
              <div className={styles.thead}>
                <span>The model</span>
                <span>21 points</span>
              </div>
              <HandSvg />
              <div className={styles.cap}>
                A CV model I trained reads 21 tracked points on your hand — live,
                in the browser.
              </div>
            </div>
            <div className={cx(styles.reveal, styles.d2)}>
              <p className={cx(styles.lead, styles.mt0)}>
                Instead of squinting at a distorted grid, you make one quick hand
                gesture — a peace sign, a thumbs up — in front of your camera.
                The model checks it&apos;s a real, live hand and waves you
                through.
              </p>
              <p className={styles.bodyText}>
                It replaces the <b>CAPTCHA</b>, and can stand in as a friendlier{" "}
                <b>second factor</b>. The camera feed is processed on-device and
                never saved.
              </p>
              <div className={styles.chips}>
                <div className={styles.chip}>
                  <span className={styles.gi} aria-hidden="true">
                    ✌️
                  </span>{" "}
                  Peace sign
                </div>
                <div className={styles.chip}>
                  <span className={styles.gi} aria-hidden="true">
                    👍
                  </span>{" "}
                  Thumbs up
                </div>
                <div className={styles.chip}>
                  <span className={styles.gi} aria-hidden="true">
                    👋
                  </span>{" "}
                  Wave
                </div>
              </div>
              {/* TODO: point this at the live ML5 demo once it has a public URL */}
              <a className={styles.btn} href="#">
                Try the live model →
              </a>
            </div>
          </div>

          <div className={styles.flow}>
            <div
              className={cx(
                styles.tix,
                styles.b,
                styles.fstep,
                styles.reveal,
                styles.d1,
              )}
            >
              <div className={styles.thead}>
                <span>Step 1</span>
                <span>splash</span>
              </div>
              <div className={styles.stepTitle}>Start gesture check</div>
              <div className={cx(styles.lock, styles.lockGap)}>
                You&apos;re always in control.
              </div>
              <div className={styles.mini}>Start gesture check</div>
            </div>
            <div className={cx(styles.farr, styles.reveal, styles.d1)} aria-hidden="true">
              →
            </div>
            <div
              className={cx(
                styles.tix,
                styles.b,
                styles.fstep,
                styles.reveal,
                styles.d2,
              )}
            >
              <div className={styles.thead}>
                <span>Step 2</span>
                <span>🔒</span>
              </div>
              <div className={cx(styles.prev, styles.trowBlue)} aria-hidden="true">
                📷
              </div>
              <div className={styles.lock}>Checked on device · never saved.</div>
            </div>
            <div className={cx(styles.farr, styles.reveal, styles.d2)} aria-hidden="true">
              →
            </div>
            <div
              className={cx(
                styles.tix,
                styles.g,
                styles.fstep,
                styles.reveal,
                styles.d3,
              )}
            >
              <div className={styles.thead}>
                <span>Step 3</span>
                <span>gesture</span>
              </div>
              <div className={cx(styles.prev, styles.trowGreen)} aria-hidden="true">
                ✌️
              </div>
              <div className={styles.lock}>
                Shown as an icon — never guess.
              </div>
            </div>
            <div className={cx(styles.farr, styles.reveal, styles.d3)} aria-hidden="true">
              →
            </div>
            <div
              className={cx(
                styles.tix,
                styles.g,
                styles.fstep,
                styles.reveal,
                styles.d4,
              )}
            >
              <div className={styles.thead}>
                <span>Step 4</span>
                <span>done</span>
              </div>
              <div className={styles.ok} aria-hidden="true">
                ✓
              </div>
              <div className={styles.stepTitleC}>Verified human.</div>
              <div className={cx(styles.lock, styles.lockC)}>
                No code. No grid.
              </div>
            </div>
          </div>

          <div className={cx(styles.pull, styles.reveal)}>
            A wave, instead of a{" "}
            <span className={styles.cGreen}>CAPTCHA</span>.
          </div>
        </div>
      </section>

      {/* MENTAL MODELS */}
      <section id="decisions" className={styles.section}>
        <div className={styles.wrap}>
          <div className={cx(styles.ey, styles.reveal)}>Design decisions</div>
          <h2 className={cx(styles.claim, styles.reveal, styles.d1)}>
            Each design choice came from a user mental model.
          </h2>
          <p className={cx(styles.lead, styles.reveal, styles.d2)}>
            I mapped the assumptions people bring to a camera-based check, then
            designed against each one.
          </p>
          <div className={styles.mmgrid}>
            <div
              className={cx(styles.tix, styles.mm, styles.reveal, styles.d1)}
            >
              <div className={styles.thead}>
                <span>Mental model 01</span>
                <span>clarity</span>
              </div>
              <div className={styles.mq}>
                <span className={styles.qi}>“</span>If I don&apos;t know a
                gesture&apos;s name, I can&apos;t perform it.
                <span className={styles.qi}>”</span>
              </div>
              <div className={styles.imp}>
                <b>→</b> Show gestures as <b>icons and demos</b>, and let people
                pick a gesture they already recognize.
              </div>
            </div>
            <div
              className={cx(styles.tix, styles.mm, styles.reveal, styles.d1)}
            >
              <div className={styles.thead}>
                <span>Mental model 02</span>
                <span>privacy</span>
              </div>
              <div className={styles.mq}>
                <span className={styles.qi}>“</span>The camera could be
                recording me.<span className={styles.qi}>”</span>
              </div>
              <div className={styles.imp}>
                <b>→</b> Say the quiet part out loud: an{" "}
                <b>on-device disclaimer</b> that the image is verified locally
                and never stored.
              </div>
            </div>
            <div
              className={cx(styles.tix, styles.mm, styles.reveal, styles.d2)}
            >
              <div className={styles.thead}>
                <span>Mental model 03</span>
                <span>consent</span>
              </div>
              <div className={styles.mq}>
                <span className={styles.qi}>“</span>I want to start it — not be
                surprised by it.<span className={styles.qi}>”</span>
              </div>
              <div className={styles.imp}>
                <b>→</b> No auto-detection. A clear, opt-in{" "}
                <b>“Start gesture check”</b> button hands control to the person.
              </div>
            </div>
            <div
              className={cx(styles.tix, styles.mm, styles.reveal, styles.d2)}
            >
              <div className={styles.thead}>
                <span>Mental model 04</span>
                <span>trust</span>
              </div>
              <div className={styles.mq}>
                <span className={styles.qi}>“</span>A pop-up in a new tab looks
                like spam.<span className={styles.qi}>”</span>
              </div>
              <div className={styles.imp}>
                <b>→</b> Keep the whole check <b>in the same tab</b>, embedded in
                the flow the user already trusts.
              </div>
            </div>
          </div>
          <div
            className={cx(styles.tix, styles.mm, styles.mmWide, styles.reveal)}
          >
            <div className={styles.thead}>
              <span>Mental model 05</span>
              <span>readiness</span>
            </div>
            <div className={styles.mq}>
              <span className={styles.qi}>“</span>I need to know what&apos;s
              about to happen.<span className={styles.qi}>”</span>
            </div>
            <div className={styles.imp}>
              <b>→</b> A short <b>splash screen</b> previews the gesture step, so
              the camera never turns on cold.
            </div>
          </div>
        </div>
      </section>

      {/* TESTING */}
      <section id="testing" className={styles.section}>
        <div className={styles.wrap}>
          <div className={cx(styles.ey, styles.reveal)}>Testing</div>
          <h2 className={cx(styles.claim, styles.reveal, styles.d1)}>
            I put the gesture check in front of real people.
          </h2>
          <p className={cx(styles.lead, styles.reveal, styles.d2)}>
            The mental models above didn&apos;t come from a whiteboard — they
            came from watching people meet a camera-based check for the first
            time.
          </p>
          <div className={styles.tgrid}>
            <div className={cx(styles.tix, styles.g, styles.reveal, styles.d1)}>
              <div className={styles.thead}>
                <span>Tested with</span>
                <span>sessions</span>
              </div>
              <div className={styles.trow}>
                <div className={cx(styles.numB, styles.cGreen)}>[N]</div>
                <div className={cx(styles.tt, styles.ttGap)}>Participants</div>
                <div className={styles.ts}>
                  Watched them attempt the gesture flow cold, with no coaching.
                </div>
              </div>
            </div>
            <div className={cx(styles.tix, styles.b, styles.reveal, styles.d2)}>
              <div className={styles.thead}>
                <span>Result</span>
                <span>first-try</span>
              </div>
              <div className={styles.trow}>
                <div className={cx(styles.numB, styles.cBlue)}>[__]%</div>
                <div className={cx(styles.tt, styles.ttGap)}>
                  Passed on the first gesture
                </div>
                <div className={styles.ts}>
                  Your first-try success rate — the number to beat the CAPTCHA
                  with.
                </div>
              </div>
            </div>
            <div className={cx(styles.tix, styles.p, styles.reveal, styles.d3)}>
              <div className={styles.thead}>
                <span>Iteration</span>
                <span>changed</span>
              </div>
              <div className={styles.trow}>
                <div className={styles.tt}>What broke → what I fixed</div>
                <div className={styles.ts}>
                  e.g. “people didn&apos;t notice the start button, so I added a
                  splash screen.”
                </div>
              </div>
            </div>
          </div>
          <div className={cx(styles.todo, styles.reveal)}>
            <b>Fill in:</b> your real testing numbers and one concrete “this
            broke → I changed it” example. This section is where they turn the
            study from a concept into evidence, so it&apos;s worth being
            specific.
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section id="impact" className={styles.section}>
        <div className={styles.wrap}>
          <div className={cx(styles.ey, styles.reveal)}>Impact</div>
          <h2 className={cx(styles.claim, styles.reveal, styles.d1)}>
            It&apos;s a working concept — here&apos;s what&apos;s real, and the
            bar it&apos;s aiming at.
          </h2>
          <div
            className={cx(
              styles.tix,
              styles.g,
              styles.mt12,
              styles.reveal,
              styles.d1,
            )}
          >
            <div className={styles.thead}>
              <span>
                <b>What&apos;s real today</b>
              </span>
              <span>✓ working model</span>
            </div>
            <div className={styles.trow}>
              <div className={cx(styles.ts, styles.trowNoteLg)}>
                This isn&apos;t a mockup. The gesture check runs on an actual
                computer-vision model I trained with <b>ML5.js</b>, reading a
                live hand from <b>21 tracked points</b>, right in the browser. A
                working thing — not a pretty picture of one.
              </div>
            </div>
          </div>
          <p
            className={cx(
              styles.bodyText,
              styles.mt38,
              styles.leadStrong,
              styles.reveal,
            )}
          >
            The bar to beat (today&apos;s CAPTCHA, for context):
          </p>
          <div className={cx(styles.tgrid, styles.mt20)}>
            <div className={cx(styles.tix, styles.b, styles.reveal, styles.d1)}>
              <div className={styles.thead}>
                <span>Background</span>
                <span>Baymard</span>
              </div>
              <div className={styles.trow}>
                <div className={cx(styles.numB, styles.cBlue)}>
                  <span className={styles.count} data-count="29">
                    29
                  </span>
                  %
                </div>
                <div className={cx(styles.tt, styles.ttGap)}>
                  Fail a CAPTCHA first try
                </div>
                <div className={styles.ts}>
                  Industry benchmark — not my result. It&apos;s the failure rate
                  a gesture check has to beat.
                </div>
              </div>
            </div>
            <div className={cx(styles.tix, styles.p, styles.reveal, styles.d2)}>
              <div className={styles.thead}>
                <span>Background</span>
                <span>Forrester</span>
              </div>
              <div className={styles.trow}>
                <div className={cx(styles.numB, styles.cPink)}>
                  <span className={styles.count} data-count="19">
                    19
                  </span>
                  %
                </div>
                <div className={cx(styles.tt, styles.ttGap)}>
                  Abandon a site over one
                </div>
                <div className={styles.ts}>
                  Industry benchmark — the business cost of getting verification
                  wrong.
                </div>
              </div>
            </div>
            <div className={cx(styles.tix, styles.g, styles.reveal, styles.d3)}>
              <div className={styles.thead}>
                <span>Mine</span>
                <span>to add</span>
              </div>
              <div className={styles.trow}>
                <div className={cx(styles.numB, styles.cGreen, styles.sm)}>
                  [__]%
                </div>
                <div className={cx(styles.tt, styles.ttGap)}>
                  My first-try success
                </div>
                <div className={styles.ts}>
                  Pull this from Testing once filled in — this is the number
                  that&apos;s actually yours.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIMITATIONS */}
      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={cx(styles.ey, styles.reveal)}>Limitations</div>
          <h2 className={cx(styles.claim, styles.reveal, styles.d1)}>
            What this does — and pointedly doesn&apos;t — solve.
          </h2>
          <div className={styles.limgrid}>
            <div className={cx(styles.tix, styles.reveal, styles.d1)}>
              <div className={styles.thead}>
                <span>Scope</span>
                <span>humanness</span>
              </div>
              <div className={cx(styles.trow, styles.trowBlue)}>
                <div className={styles.tt}>Human, not identity</div>
                <div className={styles.ts}>
                  A gesture proves a live person is present — not <i>who</i> they
                  are. So it&apos;s a CAPTCHA / second-factor, not a password
                  replacement. Naming it “GestureCAPTCHA” keeps that honest.
                </div>
              </div>
            </div>
            <div className={cx(styles.tix, styles.reveal, styles.d2)}>
              <div className={styles.thead}>
                <span>Security</span>
                <span>spoofing</span>
              </div>
              <div className={cx(styles.trow, styles.trowRed)}>
                <div className={styles.tt}>A video could fake it</div>
                <div className={styles.ts}>
                  A replayed clip of a hand could fool a naïve check. A
                  production version needs <b>liveness detection</b> — the
                  obvious next research question.
                </div>
              </div>
            </div>
            <div className={cx(styles.tix, styles.reveal, styles.d3)}>
              <div className={styles.thead}>
                <span>Accessibility</span>
                <span>fallback</span>
              </div>
              <div className={cx(styles.trow, styles.trowGreen)}>
                <div className={styles.tt}>Gestures aren&apos;t for everyone</div>
                <div className={styles.ts}>
                  They exclude some motor abilities — the same trap CAPTCHAs fall
                  into. Every flow keeps a <b>“Try another method”</b> path, so
                  the check is never the only door.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REFLECTION */}
      <section id="reflection" className={styles.section}>
        <div className={styles.wrap}>
          <div className={cx(styles.ey, styles.reveal)}>Reflection</div>
          <h2 className={cx(styles.claim, styles.reveal, styles.d1)}>
            Trust isn&apos;t a feature you add at the end.
          </h2>
          <p className={cx(styles.lead, styles.reveal, styles.d2)}>
            Training the model to recognize a hand was the easy half. The real
            work was getting someone to feel safe letting a camera watch them for
            a second — and making sure the people a CAPTCHA already fails
            aren&apos;t failed again. That flipped how I design: the feeling comes
            first, the feature serves it.
          </p>
          <div className={cx(styles.kicker, styles.mt44, styles.reveal)}>
            The best security might not feel like security at all.
            <br />
            It might just feel like{" "}
            <span className={styles.cGreen}>waving hello.</span>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.wrap}>
          <div className={styles.logo}>Deepali</div>
          <div className={styles.refs}>
            Computer-vision concept · gesture recognition built with ML5.js.
            &nbsp;Sources: Lazar et al. (2007) · Gadepally et al. (2018) · de
            Winter &amp; Dodou (2011) · Google People + AI Guidebook · Baymard
            Institute · Forrester.
          </div>
        </div>
      </footer>
    </div>
  );
}
