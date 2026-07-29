"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./ToolPanel.module.css";

/* ==========================================================================
   Tokens taken from the project's Illustrator swatches
   ========================================================================== */

const TONE = {
  gaps: { tone: "#e3caeb", pale: "#f3e9f7", mid: "#ebdaf1", ink: "#714c8f" },
  newer: { tone: "#bccbea", pale: "#e3e9f6", mid: "#d0daf0", ink: "#4d5f86" },
  future: { tone: "#becfbc", pale: "#e4ebe3", mid: "#d2ddd0", ink: "#556354" },
  nudges: { tone: "#e7dcc8", pale: "#f5f0e8", mid: "#eee7d9", ink: "#866a2f" },
  find: { tone: "#dec2c2", pale: "#f1e5e5", mid: "#e8d4d4", ink: "#883737" },
};

const toneVars = (key) => ({
  "--tone": TONE[key].tone,
  "--tone-pale": TONE[key].pale,
  "--tone-mid": TONE[key].mid,
  "--tone-ink": TONE[key].ink,
});

const SECTIONS = [
  { id: "question", label: "The question" },
  { id: "process", label: "Process" },
  { id: "research", label: "Research" },
  { id: "insights", label: "Insights" },
  { id: "problem", label: "The real problem" },
  { id: "solution", label: "Solution" },
  { id: "panel", label: "Inside the panel" },
  { id: "proof", label: "The proof" },
  { id: "reflection", label: "Reflection" },
];

const STEPS = [
  {
    k: "General problem",
    t: "Extend the capabilities of shape tools",
    d: "An open brief with no target. Anything could be built, which meant nothing was justified yet.",
    tone: "gaps",
    w: "100%",
  },
  {
    k: "Specific problem",
    t: "Power exists, nobody can reach it",
    d: "Forty plus problems clustered into five pillars, and one of them turned out to sit under all the others.",
    tone: "newer",
    w: "64%",
  },
  {
    k: "Specific solution",
    t: "The Tool Properties Panel",
    d: "One discoverable home on the canvas that carries ten concepts inside it.",
    tone: "future",
    w: "32%",
  },
];

const PHASES = [
  { n: "Phase 01", label: "Research", tone: "gaps" },
  { n: "Phase 02", label: "Insights", tone: "newer" },
  { n: "Phase 03", label: "Ideation", tone: "future" },
  { n: "Phase 04", label: "Prototype", tone: "nudges" },
];

const TRACKS = [
  {
    tone: "gaps",
    title: "Audit",
    text: "I went through Illustrator's existing shape tools systematically to map what they could and could not do.",
    meta: "6 audit boards",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="3" y="4" width="17" height="17" rx="2" />
        <path d="M3 10h17M9 10v11" />
        <circle cx="22" cy="23" r="6" />
        <path d="M26.5 27.5 30 31" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    tone: "newer",
    title: "Competitive analysis",
    text: "I looked at how four other design tools approached shape creation, hunting for the moments they made easy that Illustrator made hard.",
    meta: "4 tools studied",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="2" y="6" width="18" height="14" rx="2" />
        <rect x="11" y="12" width="18" height="14" rx="2" />
        <path d="M6 11h6M15 17h6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    tone: "future",
    title: "Interviews",
    text: "I spoke with graphic designers and UX professionals about where shape creation actually broke down for them.",
    meta: "4 participants",
    people: [
      "/images/rethink-ai-shapes/rethink-ai-shapes-graphic-1.png",
      "/images/rethink-ai-shapes/rethink-ai-shapes-graphic-2.png",
      "/images/rethink-ai-shapes/rethink-ai-shapes-ux-1.png",
      "/images/rethink-ai-shapes/rethink-ai-shapes-ux-2.png",
    ],
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M3 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H10l-5 4v-4H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
        <path d="M24 12h5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-1v4l-4-4h-3" />
      </svg>
    ),
  },
];

const THEMES = [
  {
    n: "Theme 01",
    tone: "find",
    title: "Discoverability",
    text: "Users could not find or reach the tools they needed. Weak UI, missing tooltips and visual cues, and thin documentation left capable features sitting out of sight.",
  },
  {
    n: "Theme 02",
    tone: "newer",
    title: "Enhancement",
    text: "The tools that existed did not go far enough. Shape transformation was limited, there were no shape libraries, and the editing tools stayed basic.",
  },
  {
    n: "Theme 03",
    tone: "future",
    title: "Integration of intelligence",
    text: "There was clear room for automated shape generation, intelligent shape recognition, and smart suggestions inside the flow of drawing.",
  },
];

const STICKIES = [
  "Not discoverable.",
  "Complex method to make shapes. [Blend]",
  "No indication to create a triangle.",
  "Shaper tool can be better, like Procreate.",
  "No library of shapes.",
  "Confusing UI of the Properties Panel.",
  "Most used actions are not upfront.",
  "No smart suggestions for shapes.",
  "Shortcut indicators are not available for all the shapes.",
  "Difficulty while dividing the shape.",
  "Custom shapes are unresponsive.",
  "Limited awareness about transformation of shapes.",
  "No visual cues to understand effects and objects.",
  "Absence of snap on guides.",
  "No widgets with the Shaper tool.",
  "Brush like stroke options?",
  "Can we make doodles easily?",
  "No option to curve edges like in Canva.",
  "Adding pattern to shapes is not discoverable.",
  "Pattern tool? Irregular patterns?",
  "AI in the shapes panel?",
  "We cannot create elaborate shapes.",
  "Cumbersome shape creation process.",
  "No slider, values have to be typed in.",
];

const FIVE_PILLARS = [
  {
    tone: "find",
    h: "78%",
    title: "Discoverability",
    text: "Making existing shape creation tools more intuitive and easier to find.",
    flag: "The real one",
  },
  {
    tone: "gaps",
    h: "60%",
    title: "Bridging gaps in existing functionality",
    text: "Addressing shortcomings and limitations in the current tools.",
  },
  {
    tone: "newer",
    h: "53%",
    title: "Coming up with newer capabilities",
    text: "Introducing features that expand what shape creation can be.",
  },
  {
    tone: "future",
    h: "45%",
    title: "Future technologies",
    text: "Exploring trends so the solution stays relevant and adaptable.",
  },
  {
    tone: "nudges",
    h: "38%",
    title: "Small help and nudges",
    text: "Subtle assistance and delightful surprises during idle moments.",
  },
];

const CONCEPTS = [
  {
    n: "01",
    pillar: "gaps",
    name: "Re-evaluating our primary shapes",
    text: "Fixing confusing icons for similar shapes, adding essential missing shapes like triangles, and reducing cognitive load in the row a designer reaches for first.",
  },
  {
    n: "02",
    pillar: "gaps",
    name: "Shape extensions",
    text: "Repeat with random, linear and radial divisions plus a randomize option. Offset for concentric shapes with slider controlled spacing. Grid for precision divisions that work on circles, polygons and 3D. Combine for Pathfinder options that build shapes.",
  },
  {
    n: "03",
    pillar: "gaps",
    name: "Magnetic edge widget",
    text: "Snapping support for cleaner edge manipulation, so precise edits stop depending on a steady hand.",
  },
  {
    n: "04",
    pillar: "newer",
    name: "Introducing secondary shapes",
    text: "Time saving variation presets in a dedicated, clutter free panel, one step away from the primary shape.",
  },
  {
    n: "05",
    pillar: "newer",
    name: "Polyhedron shapes",
    text: "2D shapes that visually represent 3D objects, breaking the 2D to 3D barrier creatively without leaving the shape tool.",
  },
  {
    n: "06",
    pillar: "newer",
    name: "Interactive physics",
    text: "Physics based simulation with material properties, so designers can experiment with realistic behaviour instead of faking it by hand.",
  },
  {
    n: "07",
    pillar: "newer",
    name: "Edge extensions",
    text: "Bend, skew, scale, zigzag, scallop and wave, applied through a simple widget for dynamic transformations.",
  },
  {
    n: "08",
    pillar: "future",
    name: "Shape generation through text prompts",
    text: "A text prompt panel that returns customizable results, so a described shape becomes a starting point rather than a search.",
  },
  {
    n: "09",
    pillar: "future",
    name: "Magic brush",
    text: "A context aware brush that automates shape application directly on the canvas, reading what is already there.",
  },
  {
    n: "10",
    pillar: "nudges",
    name: "Utilizing the idle time",
    text: "Turning Illustrator's wait moments into helpful nudges near the cursor: tips, shortcuts, context sensitive help, and the occasional joke to lift the mood during design pauses.",
  },
];

const PILLAR_LABEL = {
  gaps: "Bridging gaps in existing functionality",
  newer: "Coming up with newer capabilities",
  future: "Future technologies",
  nudges: "Small help and nudges",
};

const PILLAR_SHORT = {
  gaps: "Bridging gaps",
  newer: "Newer capabilities",
  future: "Future technologies",
  nudges: "Help and nudges",
};

const PANEL_NOTES = [
  {
    pillar: "gaps",
    k: "Bridging gaps",
    v: "The primary shape row and the Repeat, Offset, Grid and Combine modifiers sit at the top and bottom of the panel, where the old flyout menu used to hide them.",
  },
  {
    pillar: "newer",
    k: "Newer capabilities",
    v: "Extensions turn bend, scale, skew and zigzag into one widget, and the 3D toggle opens polyhedron shapes.",
  },
  {
    pillar: "future",
    k: "Future technologies",
    v: "Generative Shape takes a written description and returns variations that can be dropped straight onto the canvas.",
  },
  {
    pillar: "nudges",
    k: "Small help and nudges",
    v: "Idle moments become a quiet tip near the cursor instead of dead time.",
  },
];

const AUDIT_SHOTS = [1, 2, 3, 4, 5, 6].map((i) => ({
  src: `/images/rethink-ai-shapes/rethink-ai-shapes-audit-${i}.png`,
  alt: `Functionality review board ${i} from the shape tools audit`,
}));

const INTERVIEW_SHOTS = [1, 2, 3].map((i) => ({
  src: `/images/rethink-ai-shapes/rethink-ai-shapes-userinterview-${i}.png`,
  alt: `Interview synthesis board ${i}`,
}));

const WALL_SHOTS = [
  {
    src: "/images/rethink-ai-shapes/rethink-ai-shapes-finding-problems.png",
    alt: "Every problem found in research written onto sticky notes and put on a wall",
    cap: "Every problem from the audit, the competitive scan and the interviews, written out and put on one wall.",
  },
  {
    src: "/images/rethink-ai-shapes/rethink-ai-shapes-identifying-patterns.png",
    alt: "The same sticky note wall grouped into five clusters",
    cap: "The same wall, clustered. Discoverability, newer capabilities, future technologies, bridging the gaps, help.",
  },
];

const MOTION_SHOTS = [
  {
    src: "/images/rethink-ai-shapes/rethink-ai-shapes-concept-01.gif",
    alt: "Prototype recording of the Tool Properties Panel in use",
  },
  {
    src: "/images/rethink-ai-shapes/rethink-ai-shapes-concept-02.gif",
    alt: "Prototype recording of a shape extension being applied",
  },
  {
    src: "/images/rethink-ai-shapes/rethink-ai-shapes-concept-09.gif",
    alt: "Prototype recording of a panel concept in motion",
  },
];

const SIGNALS = [1, 2, 3, 4, 5, 6, 7, 8]
  .map((i) => `/images/rethink-ai-shapes/rethink-ai-shapes-reddit-${i}.png`)
  .concat(
    [1, 2, 3, 4, 5].map(
      (i) => `/images/rethink-ai-shapes/rethink-ai-shapes-yt-${i}.png`
    )
  );

function cx(...parts) {
  return parts.filter(Boolean).join(" ");
}

/* ==========================================================================
   Small building blocks
   ========================================================================== */

function Eyebrow({ children, accent }) {
  return (
    <p className={cx(styles.eyebrow, accent && styles.eyebrowInk, styles.reveal)}>
      {children}
    </p>
  );
}

function Gallery({ items, title, caption, pad, lazy }) {
  const [i, setI] = useState(0);
  const active = items[i];

  return (
    <figure className={cx(styles.figure, styles.reveal)}>
      {title ? <div className={styles.capMono}>{title}</div> : null}
      <div
        className={cx(
          styles.frame,
          styles.frameZoom,
          pad && styles.framePad,
          pad && styles.frameCream
        )}
      >
        <div className={styles.galleryStage}>
          <img
            key={active.src}
            src={active.src}
            alt={active.alt}
            className={styles.galleryFade}
            loading={lazy ? "lazy" : "eager"}
          />
        </div>
      </div>
      {items.length > 1 ? (
        <div className={styles.thumbs}>
          {items.map((it, idx) => (
            <button
              key={it.src}
              type="button"
              className={cx(styles.thumb, idx === i && styles.thumbOn)}
              onClick={() => setI(idx)}
              aria-label={`Show image ${idx + 1} of ${items.length}`}
              aria-current={idx === i}
            >
              <img src={it.src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      ) : null}
      {(active.cap || caption) && (
        <figcaption className={styles.cap}>{active.cap || caption}</figcaption>
      )}
    </figure>
  );
}

/* Recordings run to tens of megabytes, so nothing downloads until asked for. */
function MotionGallery({ items, title, caption }) {
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(null);
  const active = items[i];
  const isPlaying = playing === i;

  return (
    <figure className={cx(styles.figure, styles.reveal)}>
      {title ? <div className={styles.capMono}>{title}</div> : null}
      <div className={cx(styles.frame, styles.framePad, styles.frameCream)}>
        <div className={styles.motionStage}>
          {isPlaying ? (
            <img key={active.src} src={active.src} alt={active.alt} />
          ) : (
            <button
              type="button"
              className={styles.motionPlay}
              onClick={() => setPlaying(i)}
            >
              <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M4 2.5 13 8l-9 5.5v-11Z" />
              </svg>
              Play recording {String(i + 1).padStart(2, "0")}
            </button>
          )}
        </div>
      </div>
      <div className={styles.motionTabs}>
        {items.map((it, idx) => (
          <button
            key={it.src}
            type="button"
            className={cx(styles.motionTab, idx === i && styles.motionTabOn)}
            onClick={() => setI(idx)}
            aria-current={idx === i}
          >
            {String(idx + 1).padStart(2, "0")}
          </button>
        ))}
      </div>
      {caption ? <figcaption className={styles.cap}>{caption}</figcaption> : null}
    </figure>
  );
}

/* ---------- the panel replica -------------------------------------------- */

const Ic = {
  square: (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.3">
      <rect x="3.5" y="3.5" width="13" height="13" />
    </svg>
  ),
  circle: (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.3">
      <circle cx="10" cy="10" r="6.5" />
    </svg>
  ),
  triangle: (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M10 3.5 17 16.5H3L10 3.5Z" />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M10 3l2.1 4.6 5 .5-3.7 3.4 1 4.9L10 14l-4.4 2.4 1-4.9L2.9 8.1l5-.5L10 3Z" />
    </svg>
  ),
  line: (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M4 16 16 4" />
    </svg>
  ),
  move: (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M10 2v16M2 10h16M10 2 8 4.5M10 2l2 2.5M10 18l-2-2.5M10 18l2-2.5M2 10l2.5-2M2 10l2.5 2M18 10l-2.5-2M18 10l-2.5 2" />
    </svg>
  ),
  cube: (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M10 2.5 17 6v8l-7 3.5L3 14V6l7-3.5Z" />
      <path d="M3 6l7 3.5L17 6M10 9.5v8" />
    </svg>
  ),
  wand: (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M3 17 13 7M12 3l.8 2.2L15 6l-2.2.8L12 9l-.8-2.2L9 6l2.2-.8L12 3Z" />
      <path d="M16.5 11l.5 1.3 1.3.5-1.3.5-.5 1.3-.5-1.3-1.3-.5 1.3-.5.5-1.3Z" />
    </svg>
  ),
  gen: (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.3">
      <rect x="2.5" y="4.5" width="15" height="11" rx="1.5" />
      <path d="M7 10h6M10 7v6" strokeLinecap="round" />
    </svg>
  ),
  repeat: (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="2" y="7" width="7" height="7" />
      <rect x="11" y="7" width="7" height="7" strokeDasharray="2 2" />
    </svg>
  ),
  offset: (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="10" cy="10" r="7" strokeDasharray="2 2" />
      <circle cx="10" cy="10" r="3.4" />
    </svg>
  ),
  grid: (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="3" y="3" width="14" height="14" />
      <path d="M8 3v14M13 3v14M3 8h14M3 13h14" />
    </svg>
  ),
  combine: (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="3" y="3" width="9" height="9" />
      <rect x="8" y="8" width="9" height="9" />
    </svg>
  ),
  chev: (
    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 2.5 8 6l-4 3.5" strokeLinecap="round" />
    </svg>
  ),
  bend: (
    <svg viewBox="0 0 30 20" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M4 16V8c0-4 22-4 22 0v8H4Z" />
    </svg>
  ),
  scale: (
    <svg viewBox="0 0 30 20" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M9 5h12l4 11H5L9 5Z" />
    </svg>
  ),
  skew: (
    <svg viewBox="0 0 30 20" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M9 5h18l-6 11H3L9 5Z" />
    </svg>
  ),
  zigzag: (
    <svg viewBox="0 0 30 20" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M4 16V8l3.5 3L11 8l3.5 3L18 8l3.5 3L25 8v8H4Z" />
    </svg>
  ),
};

const VARIATIONS = [
  "M6 4h18a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4Z",
  "M2 8a4 4 0 0 1 4-4h22v12H6a4 4 0 0 1-4-4V8Z",
  "M2 4h22a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H2V4Z",
  "M8 4h14l6 12H2L8 4Z",
  "M6 4h18l4 12H2L6 4Z",
  "M2 4h22l4 12H2V4Z",
  "M2 4h20l6 12H2V4Z",
  "M8 4h20v12H2L8 4Z",
  "M2 4h18c6 0 8 12 8 12H2V4Z",
];

function PanelMock() {
  const [lit, setLit] = useState(null);
  const [typed, setTyped] = useState("");
  const promptText = "A flower with 3 petals";

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTyped(promptText);
      return undefined;
    }
    let i = 0;
    let timer = null;
    const tick = () => {
      i += 1;
      setTyped(promptText.slice(0, i));
      if (i < promptText.length) timer = setTimeout(tick, 62);
    };
    timer = setTimeout(tick, 900);
    return () => clearTimeout(timer);
  }, []);

  const blockClass = (pillar) =>
    cx(
      styles.mockBlock,
      lit === pillar && styles.mockLit,
      lit && lit !== pillar && styles.mockDim
    );

  return (
    <>
      <div className={cx(styles.legend, styles.reveal)}>
        {Object.keys(PILLAR_LABEL).map((key) => (
          <button
            key={key}
            type="button"
            className={cx(styles.chip, lit === key && styles.chipOn)}
            style={toneVars(key)}
            onClick={() => setLit(lit === key ? null : key)}
            onMouseEnter={() => setLit(key)}
            onMouseLeave={() => setLit(null)}
            aria-pressed={lit === key}
          >
            <span className={styles.chipSwatch} />
            {PILLAR_SHORT[key]}
          </button>
        ))}
      </div>

      <div className={cx(styles.mockWrap, styles.reveal, styles.d1)}>
        <div className={styles.mock}>
          {/* primary shapes */}
          <div className={blockClass("gaps")} style={toneVars("gaps")}>
            <div className={styles.mockRowHead}>
              <span className={styles.mockLabel}>Shapes</span>
              <span className={styles.mockIcons}>
                {Ic.move}
                {Ic.cube}
              </span>
            </div>
            <div className={styles.mockShapes}>
              <span className={cx(styles.mockShape, styles.mockShapeOn)}>
                {Ic.square}
              </span>
              <span className={styles.mockShape}>{Ic.circle}</span>
              <span className={styles.mockShape}>{Ic.triangle}</span>
              <span className={styles.mockShape}>{Ic.star}</span>
              <span className={styles.mockShape}>{Ic.line}</span>
            </div>
          </div>

          {/* generative shape */}
          <div className={blockClass("future")} style={toneVars("future")}>
            <div className={styles.mockRowHead}>
              <span className={styles.mockLabel}>Generative Shape</span>
            </div>
            <div className={styles.mockPrompt}>
              Describe the shape you want:
              <br />
              <span className={styles.mockPromptType}>{typed}</span>
              <i className={styles.mockCaret} />
            </div>
            <div className={styles.mockBtnRow}>
              <span className={styles.mockBtn}>{Ic.wand}</span>
              <span className={styles.mockBtn}>
                {Ic.gen}
                Generate
              </span>
            </div>
          </div>

          {/* variations */}
          <div className={blockClass("future")} style={toneVars("future")}>
            <div className={styles.mockRowHead}>
              <span className={styles.mockLabel}>Variations</span>
            </div>
            <div className={styles.mockGrid}>
              {VARIATIONS.map((d, idx) => (
                <span className={styles.mockVar} key={idx}>
                  <svg viewBox="0 0 30 20" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d={d} />
                  </svg>
                </span>
              ))}
            </div>
          </div>

          {/* extensions */}
          <div className={blockClass("newer")} style={toneVars("newer")}>
            <div className={styles.mockRowHead}>
              <span className={styles.mockLabel}>Extensions</span>
            </div>
            <div className={styles.mockExt}>
              <span className={styles.mockExtItem}>
                {Ic.bend}
                <span>Bend</span>
              </span>
              <span className={styles.mockExtItem}>
                {Ic.scale}
                <span>Scale</span>
              </span>
              <span className={styles.mockExtItem}>
                {Ic.skew}
                <span>Skew</span>
              </span>
              <span className={styles.mockExtItem}>
                {Ic.zigzag}
                <span>Zigzag</span>
              </span>
            </div>
          </div>

          {/* modifiers */}
          <div
            className={cx(blockClass("gaps"), styles.mockList)}
            style={toneVars("gaps")}
          >
            {[
              ["Repeat", Ic.repeat],
              ["Offset", Ic.offset],
              ["Grid", Ic.grid],
              ["Combine", Ic.combine],
            ].map(([label, icon]) => (
              <div className={styles.mockListRow} key={label}>
                <span className={styles.mockChev}>{Ic.chev}</span>
                <span className={styles.mockDot}>{icon}</span>
                {label}
              </div>
            ))}
          </div>

          {/* idle nudge */}
          <div className={blockClass("nudges")} style={toneVars("nudges")}>
            <p className={styles.mockNudge}>
              <span className={styles.mockNudgeDot} />
              Waiting on a render? Shift while dragging keeps the shape true.
            </p>
          </div>

          <div className={styles.mockFoot}>
            <span>100%</span>
            <span>Artboard 1</span>
          </div>
        </div>

        <div className={styles.mockNotes}>
          {PANEL_NOTES.map((note) => (
            <div
              key={note.k}
              className={styles.mockNote}
              style={toneVars(note.pillar)}
              onMouseEnter={() => setLit(note.pillar)}
              onMouseLeave={() => setLit(null)}
            >
              <p className={styles.mockNoteK}>{note.k}</p>
              <p className={styles.mockNoteV}>{note.v}</p>
            </div>
          ))}
          <p className={styles.mockHint}>
            Hover a pillar to see where it lives in the panel
          </p>
        </div>
      </div>
    </>
  );
}

/* ---------- concept board ------------------------------------------------ */

function ConceptBoard() {
  return (
    <div className={cx(styles.reveal, styles.d1)}>
      <div className={styles.board}>
        {Object.keys(PILLAR_LABEL).map((key, idx) => {
          const items = CONCEPTS.filter((c) => c.pillar === key);
          return (
            <div className={styles.boardCol} key={key} style={toneVars(key)}>
              <div className={styles.boardHead}>
                <p className={styles.boardHeadN}>
                  Pillar {String(idx + 1).padStart(2, "0")}
                </p>
                <p className={styles.boardHeadTitle}>{PILLAR_LABEL[key]}</p>
              </div>
              <ul className={styles.boardList}>
                {items.map((c) => (
                  <li className={styles.boardItem} key={c.n}>
                    <span className={styles.boardItemN}>{c.n}</span>
                    <span className={styles.boardItemName}>{c.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <svg
        className={styles.brace}
        viewBox="0 0 1000 46"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M6 2c0 22 8 22 240 22 244 0 254 18 254 18s10-18 254-18c232 0 240 0 240-22"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <p className={styles.braceLabel}>Discoverability</p>
    </div>
  );
}

/* ---------- concept detail accordion ------------------------------------- */

function ConceptDetail() {
  const [open, setOpen] = useState("01");

  return (
    <div className={cx(styles.detail, styles.reveal)}>
      {CONCEPTS.map((c) => {
        const isOpen = open === c.n;
        return (
          <div
            key={c.n}
            className={cx(styles.detailRow, isOpen && styles.detailOpen)}
            style={toneVars(c.pillar)}
          >
            <button
              type="button"
              className={styles.detailBtn}
              onClick={() => setOpen(isOpen ? null : c.n)}
              aria-expanded={isOpen}
            >
              <span className={styles.detailN}>{c.n}</span>
              <span>
                <span className={styles.detailName}>{c.name}</span>
                <span className={styles.detailPill}>
                  {PILLAR_SHORT[c.pillar]}
                </span>
              </span>
              <span className={styles.detailPlus} aria-hidden="true" />
            </button>
            <div className={styles.detailBody}>
              <div className={styles.detailBodyInner}>
                <p className={styles.detailText}>{c.text}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ---------- before / after ---------------------------------------------- */

function BeforeAfter() {
  const [after, setAfter] = useState(false);

  return (
    <div className={cx(styles.reveal, styles.d1)}>
      <div className={styles.toggle} role="tablist" aria-label="Before and after">
        <span
          className={cx(styles.toggleGlide, after && styles.toggleGlideOn)}
          aria-hidden="true"
        />
        <button
          type="button"
          role="tab"
          aria-selected={!after}
          className={cx(styles.toggleBtn, !after && styles.toggleBtnOn)}
          onClick={() => setAfter(false)}
        >
          Before
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={after}
          className={cx(styles.toggleBtn, after && styles.toggleBtnOn)}
          onClick={() => setAfter(true)}
        >
          After
        </button>
      </div>
      <div className={styles.compareWrap}>
        <div
          className={cx(styles.compareStage, !after && styles.compareBefore)}
        >
          {after ? (
            <img
              key="after"
              src="/images/rethink-ai-shapes/rethink-ai-shapes-concepts-after.png"
              alt="The canvas with the Tool Properties Panel docked beside it"
            />
          ) : (
            <img
              key="before"
              src="/images/rethink-ai-shapes/rethink-ai-shapes-concepts-before.png"
              alt="The old shape tool flyout menu, a plain list of six tools"
            />
          )}
        </div>
      </div>
      <p className={styles.cap}>
        {after
          ? "After: one panel on the canvas, organized by pillar, everything visible without a menu."
          : "Before: six tools behind a flyout menu, no preview, no variations, nothing to discover."}
      </p>
    </div>
  );
}

/* ==========================================================================
   Page
   ========================================================================== */

export default function ToolPanel() {
  const rootRef = useRef(null);
  const barRef = useRef(null);
  const countRef = useRef(null);
  const [active, setActive] = useState("question");

  /* reveal on scroll + count up */
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealEls = Array.from(root.querySelectorAll(`.${styles.reveal}`));

    if (reduce) {
      revealEls.forEach((el) => el.classList.add(styles.in));
      if (countRef.current) countRef.current.textContent = "40+";
      return undefined;
    }

    root.classList.add(styles.enhanced);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add(styles.in);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -6% 0px" }
    );
    revealEls.forEach((el) => io.observe(el));

    let counted = false;
    const io2 = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting || counted) return;
          counted = true;
          const el = e.target;
          let t0 = null;
          const step = (ts) => {
            if (!t0) t0 = ts;
            const p = Math.min((ts - t0) / 1200, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = `${Math.round(40 * eased)}${p === 1 ? "+" : ""}`;
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          io2.unobserve(el);
        });
      },
      { threshold: 0.7 }
    );
    if (countRef.current) {
      countRef.current.textContent = "0";
      io2.observe(countRef.current);
    }

    return () => {
      io.disconnect();
      io2.disconnect();
      root.classList.remove(styles.enhanced);
    };
  }, []);

  /* scroll progress + active section */
  const onScroll = useCallback(() => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
    if (barRef.current) barRef.current.style.width = `${ratio * 100}%`;

    let current = SECTIONS[0].id;
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top < 220) current = id;
    });
    setActive(current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [onScroll]);

  return (
    <div className={styles.root} ref={rootRef}>
      <div className={styles.progress} aria-hidden="true">
        <div className={styles.progressBar} ref={barRef} />
      </div>

      <div className={styles.shell}>
        {/* ---------------- rail ---------------- */}
        <aside className={styles.rail}>
          <Link href="/#projects" className={styles.back}>
            <span className={styles.backArrow} aria-hidden="true">
              &#8592;
            </span>
            <span className={styles.backLabel}>Go back</span>
          </Link>
          <ul className={styles.railList}>
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={cx(
                    styles.railLink,
                    active === s.id && styles.railActive
                  )}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <p className={styles.railFoot}>
            Adobe Illustrator
            <br />
            2023
          </p>
        </aside>

        {/* ---------------- main ---------------- */}
        <main className={styles.main}>
          {/* HERO */}
          <header className={styles.section}>
            <Eyebrow accent>Adobe Illustrator · Internship case study</Eyebrow>
            <h1 className={cx(styles.h1, styles.reveal, styles.d1)}>
              The <span className={styles.h1Accent}>Tool Properties</span> Panel
            </h1>
            <p className={cx(styles.subtitle, styles.reveal, styles.d2)}>
              Extending the capabilities of Shape Tools in Adobe Illustrator.
            </p>

            <div className={cx(styles.metaGrid, styles.reveal, styles.d3)}>
              <div>
                <p className={styles.metaK}>Role</p>
                <p className={styles.metaV}>
                  UX Design Intern
                  <span>CC Illustrator Desktop Team</span>
                </p>
              </div>
              <div>
                <p className={styles.metaK}>Timeline</p>
                <p className={styles.metaV}>
                  10 weeks
                  <span>May to July 2023</span>
                </p>
              </div>
              <div>
                <p className={styles.metaK}>Team</p>
                <p className={styles.metaV}>
                  Rakesh Baidya
                  <span>Staff Experience Designer, mentor</span>
                  <span style={{ marginTop: 8 }}>Mrinalini Sardar</span>
                  <span>Design Leadership, manager</span>
                  <span style={{ marginTop: 8 }}>Deepali Babuta</span>
                  <span>UX Design Intern</span>
                </p>
              </div>
              <div>
                <p className={styles.metaK}>Location</p>
                <p className={styles.metaV}>
                  Adobe India
                  <span>Noida</span>
                </p>
              </div>
            </div>

            <hr className={styles.hr} />

            <figure className={cx(styles.figure, styles.reveal, styles.d1)}>
              <div className={cx(styles.frame, styles.frameZoom)}>
                <img
                  src="/images/extending-the-capabilities.png"
                  alt="The Tool Properties Panel docked in the Illustrator canvas"
                />
              </div>
              <figcaption className={styles.cap}>
                The outcome: one panel on the left of the canvas that holds every
                concept explored across ten weeks.
              </figcaption>
            </figure>
          </header>

          {/* THE STARTING QUESTION */}
          <section id="question" className={styles.section}>
            <Eyebrow>The starting question</Eyebrow>
            <h2 className={cx(styles.claim, styles.reveal, styles.d1)}>
              But why extend the capabilities of shape tools?
            </h2>
            <p className={cx(styles.lead, styles.reveal, styles.d2)}>
              My brief was open ended: explore how we could extend the
              capabilities of the existing shape tools in Illustrator. Before
              designing anything, I had to earn the right to, by proving there was
              a real problem worth solving.
            </p>
            <p className={cx(styles.lead, styles.reveal, styles.d3)}>
              Shapes are the foundation of most artwork in Illustrator, from a
              quick sketch to a finished illustration, and the tools behind them
              had barely moved in years. That made them either a non problem or a
              very quiet one.
            </p>
            <div className={cx(styles.quote, styles.reveal, styles.d3)}>
              So I started with the tools themselves.
            </div>
          </section>

          {/* PROCESS */}
          <section id="process" className={styles.section}>
            <Eyebrow>The process</Eyebrow>
            <h2 className={cx(styles.claim, styles.reveal, styles.d1)}>
              From a general problem to a specific solution.
            </h2>
            <p className={cx(styles.lead, styles.reveal, styles.d2)}>
              I structured the ten weeks as a funnel, moving from a broad, fuzzy
              brief toward one sharp, defensible solution. Underneath that ran the
              working phases: research, insights, ideation, prototype.
            </p>

            <div className={cx(styles.processWrap, styles.reveal, styles.d2)}>
              <div className={styles.steps}>
                {STEPS.map((s, i) => (
                  <div
                    className={cx(styles.step, styles.reveal, styles[`d${i + 1}`])}
                    key={s.k}
                    style={{ ...toneVars(s.tone), "--w": s.w }}
                  >
                    <span className={styles.stepBar} />
                    <p className={styles.stepK}>{s.k}</p>
                    <p className={styles.stepT}>{s.t}</p>
                    <p className={styles.stepD}>{s.d}</p>
                    {i < STEPS.length - 1 ? (
                      <span className={styles.stepArrow} aria-hidden="true">
                        &#8594;
                      </span>
                    ) : null}
                  </div>
                ))}
              </div>

              <div className={styles.phaseTrack}>
                {PHASES.map((p) => (
                  <div className={styles.phase} key={p.n} style={toneVars(p.tone)}>
                    <span className={styles.phaseDot} />
                    <p className={styles.phaseN}>{p.n}</p>
                    <p className={styles.phaseLabel}>{p.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <figure className={cx(styles.figure, styles.reveal)}>
              <div className={cx(styles.frame, styles.framePad, styles.frameCream)}>
                <img
                  src="/images/rethink-ai-shapes/rethink-ai-shapes-process-diagram.png"
                  alt="Process diagram: perceive, connecting the dots, formulate"
                  loading="lazy"
                />
              </div>
              <figcaption className={styles.cap}>
                The same funnel as I mapped it during the internship: perceive,
                connect the dots, formulate, run as a parallel brainstorming
                process.
              </figcaption>
            </figure>
          </section>

          {/* RESEARCH */}
          <section id="research" className={styles.section}>
            <Eyebrow>Phase 01 · Research</Eyebrow>
            <h2 className={cx(styles.claim, styles.reveal, styles.d1)}>
              I studied the tools, the competition, and the people.
            </h2>
            <p className={cx(styles.lead, styles.reveal, styles.d2)}>
              Research ran on three tracks at once, so a complaint from an
              interview could be checked against the interface the same afternoon.
            </p>

            <div className={styles.cards3}>
              {TRACKS.map((t, i) => (
                <article
                  className={cx(styles.card, styles.reveal, styles[`d${i + 1}`])}
                  key={t.title}
                  style={toneVars(t.tone)}
                >
                  <span className={styles.cardIcon}>{t.icon}</span>
                  <h3 className={styles.cardTitle}>{t.title}</h3>
                  <p className={styles.cardText}>{t.text}</p>
                  {t.people ? (
                    <div className={styles.people}>
                      {t.people.map((p) => (
                        <span className={styles.person} key={p}>
                          <img src={p} alt="" loading="lazy" />
                        </span>
                      ))}
                    </div>
                  ) : null}
                  <span className={styles.cardMeta}>{t.meta}</span>
                </article>
              ))}
            </div>

            <Gallery
              items={AUDIT_SHOTS}
              title="Audit · functionality review"
              caption="Six boards of the existing shape tools, annotated where the interaction breaks: six basic shapes, no triangle, flare sitting in the shapes panel, complex shapes only reachable through the Pathfinder."
              pad
              lazy
            />

            <p className={cx(styles.lead, styles.reveal)}>
              Before the interviews I went looking for the same complaints in
              public. Reddit threads and YouTube comments were full of people
              working around the shape tools, which told me this was not a small
              group of unusual users.
            </p>

            <div className={cx(styles.marquee, styles.reveal)} aria-hidden="true">
              <div className={styles.marqueeTrack}>
                {[...SIGNALS, ...SIGNALS].map((src, i) => (
                  <div className={styles.marqueeItem} key={`${src}-${i}`}>
                    <img src={src} alt="" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
            <p className={cx(styles.small, styles.reveal)}>
              Reddit and YouTube: designers describing the same workarounds, in
              their own words.
            </p>

            <Gallery
              items={INTERVIEW_SHOTS}
              title="Interviews · what came back"
              caption="Interview synthesis, including the inconsistency in discoverability and UI across Adobe's own software."
              pad
              lazy
            />
          </section>

          {/* INSIGHTS */}
          <section id="insights" className={styles.section}>
            <Eyebrow>Phase 02 · Insights</Eyebrow>
            <h2 className={cx(styles.claim, styles.reveal, styles.d1)}>
              Three themes explained where users were losing time.
            </h2>
            <p className={cx(styles.lead, styles.reveal, styles.d2)}>
              Clustering the research, the problems sorted themselves into three
              areas.
            </p>

            <div className={styles.themes}>
              {THEMES.map((t, i) => (
                <div
                  className={cx(styles.theme, styles.reveal, styles[`d${i + 1}`])}
                  key={t.title}
                  style={toneVars(t.tone)}
                >
                  <span className={styles.themeN}>{t.n}</span>
                  <div>
                    <h3 className={styles.themeTitle}>{t.title}</h3>
                    <p className={styles.themeText}>{t.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={cx(styles.quote, styles.reveal)}>
              One of these mattered more than the rest. I did not know that yet.
            </div>
          </section>

          {/* THE REAL PROBLEM */}
          <section id="problem" className={styles.section}>
            <Eyebrow>Finding the real problem</Eyebrow>
            <h2 className={cx(styles.claim, styles.reveal, styles.d1)}>
              Forty plus problems on a wall, clustered into five pillars.
            </h2>
            <p className={cx(styles.lead, styles.reveal, styles.d2)}>
              I wrote every problem I had found onto sticky notes, put them all on
              one wall, and looked for patterns. The mess resolved into five
              pillars that became the foundation for everything I designed next.
            </p>

            <div className={cx(styles.wallHead, styles.reveal)}>
              <span className={styles.count} ref={countRef}>
                40+
              </span>
              <span className={styles.countLabel}>
                problems written down
                <br />
                across audit, competitors and interviews
              </span>
            </div>

            <div className={cx(styles.wall, styles.reveal, styles.d1)}>
              {STICKIES.map((s, i) => (
                <div
                  className={styles.sticky}
                  key={s}
                  style={{ "--rot": `${((i % 5) - 2) * 0.9}deg` }}
                >
                  {s}
                </div>
              ))}
              <div className={styles.wallMore}>and more</div>
            </div>

            <Gallery items={WALL_SHOTS} title="The wall, before and after clustering" pad lazy />

            <p className={cx(styles.lead, styles.reveal)}>
              Grouped, they became five pillars: discoverability, bridging gaps in
              existing functionality, coming up with newer capabilities, future
              technologies, and small help and nudges.
            </p>

            <div className={styles.pillars}>
              {FIVE_PILLARS.map((p, i) => (
                <div
                  className={cx(styles.pillar, styles.reveal, styles[`d${i + 1}`])}
                  key={p.title}
                  style={{ ...toneVars(p.tone), "--h": p.h }}
                >
                  <h3 className={styles.pillarTitle}>{p.title}</h3>
                  <div className={styles.pillarBar}>
                    {p.flag ? (
                      <span className={styles.pillarFlag}>{p.flag}</span>
                    ) : null}
                    <p className={styles.pillarText}>{p.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className={cx(styles.lead, styles.reveal)} style={{ marginTop: 40 }}>
              One pillar kept surfacing underneath all the others. Illustrator was
              already powerful, users just could not find that power.{" "}
              <span className={styles.mark}>
                Discoverability was not one problem among five.
              </span>{" "}
              It was the problem the other four were hiding behind.
            </p>

            <p className={cx(styles.kicker, styles.reveal)}>
              Powerful tools nobody can find aren&apos;t powerful tools.
            </p>

            <Eyebrow>The specific problem</Eyebrow>
            <h2 className={cx(styles.claimSm, styles.reveal, styles.d1)}>
              How can we make all of this discoverable?
            </h2>
            <p className={cx(styles.lead, styles.reveal, styles.d2)}>
              Every promising idea I explored ran into the same wall: even if I
              built it, would a designer ever find it? That reframed the brief.
              The design challenge was not inventing more features, it was giving
              them a home users would actually see.
            </p>
          </section>

          {/* SOLUTION */}
          <section id="solution" className={styles.section}>
            <Eyebrow accent>The solution</Eyebrow>
            <h2 className={cx(styles.claim, styles.reveal, styles.d1)}>
              The Tool Properties Panel, one home for everything.
            </h2>
            <p className={cx(styles.lead, styles.reveal, styles.d2)}>
              A single panel that gathers every concept I explored into one
              discoverable place, organized by pillar, so designers never have to
              leave the canvas to find the right tool. It solves the major issue,
              discoverability, while carrying the other pillars inside it:
              bridging gaps in existing functionality, coming up with newer
              capabilities, and future technologies.
            </p>

            <BeforeAfter />

            <p className={cx(styles.kicker, styles.reveal)}>
              Ten scattered ideas don&apos;t help anyone. One place
              they&apos;ll actually see does.
            </p>
          </section>

          {/* INSIDE THE PANEL */}
          <section id="panel" className={styles.section}>
            <Eyebrow>Inside the panel</Eyebrow>
            <h2 className={cx(styles.claim, styles.reveal, styles.d1)}>
              Ten concepts, organized by pillar.
            </h2>
            <p className={cx(styles.lead, styles.reveal, styles.d2)}>
              Each pillar owns a region of the panel. Nothing is buried in a
              flyout, and nothing needs a tutorial to be noticed.
            </p>

            <PanelMock />

            <p className={cx(styles.lead, styles.reveal)} style={{ marginTop: 54 }}>
              Laid out as a map, the ten concepts sit under four pillars, and all
              four are held together by the fifth.
            </p>

            <ConceptBoard />

            <ConceptDetail />

            <figure className={cx(styles.figure, styles.reveal)}>
              <div className={cx(styles.frame, styles.framePad, styles.frameCream)}>
                <img
                  src="/images/rethink-ai-shapes/rethink-ai-shapes-concept-01.png"
                  alt="Concept 01: the old shape tool list next to the new primary shapes row"
                  loading="lazy"
                />
              </div>
              <figcaption className={styles.cap}>
                Concept 01 in detail. Six near identical icons in a list become
                five distinct shapes in a row, with the triangle that was never
                there.
              </figcaption>
            </figure>

            <MotionGallery
              items={MOTION_SHOTS}
              title="Concepts in motion"
              caption="Prototype recordings of the panel and its concepts. These files are large, so each one loads only when you play it."
            />
          </section>

          {/* PROOF */}
          <section id="proof" className={styles.section}>
            <Eyebrow>The proof</Eyebrow>
            <h2 className={cx(styles.claim, styles.reveal, styles.d1)}>
              Everything below was made with only this panel.
            </h2>

            <div className={styles.proof}>
              {[
                {
                  src: "/images/rethink-ai-shapes/rethink-ai-shapes-conclusion-1.png",
                  alt: "A night scene with a boat and lotus flowers, built with the panel",
                  tag: "Built with Repeat and Offset",
                },
                {
                  src: "/images/rethink-ai-shapes/rethink-ai-shapes-conclusion-2.png",
                  alt: "Pink cubes and sparkles on a blush background, built with the panel",
                  tag: "Built with Combine and the 3D toggle",
                },
              ].map((art, i) => (
                <div
                  className={cx(styles.proofItem, styles.reveal, styles[`d${i + 1}`])}
                  key={art.src}
                >
                  <img src={art.src} alt={art.alt} loading="lazy" />
                  <span className={styles.proofTag}>{art.tag}</span>
                </div>
              ))}
            </div>

            <p className={cx(styles.lead, styles.reveal)} style={{ marginTop: 26 }}>
              Both pieces were built using nothing but the Tool Properties Panel.
              No dialog box detours, no tutorials, no leaving the canvas.
            </p>
            {/*
              Outcome note: the deck shows the artwork as proof and states no
              metrics, so none are claimed here. If there is anything real from
              the internship (mentor feedback, a time to create observation,
              whether concepts were taken forward), add one honest line above.
            */}

            <p className={cx(styles.kicker, styles.reveal)}>
              The test of a shape tool isn&apos;t the features it lists.
              It&apos;s what someone can make with it.
            </p>
          </section>

          {/* REFLECTION */}
          <section id="reflection" className={cx(styles.section, styles.sectionTight)}>
            <Eyebrow>Reflection</Eyebrow>
            <h2 className={cx(styles.claim, styles.reveal, styles.d1)}>
              Discoverability was the whole problem in disguise.
            </h2>

            <div className={cx(styles.band, styles.reveal, styles.d2)}>
              <p className={styles.lead}>
                I came in expecting to add capability, and spent most of the ten
                weeks learning that the capability was already there. What was
                missing was a place to see it. That changed how I read a brief:
                when someone asks for more features, the honest first question is
                whether anyone can find the ones that already exist.
              </p>
              <p className={styles.lead} style={{ marginBottom: 0 }}>
                If I took this further, I would put the panel in front of real
                Illustrator users rather than my own assumptions, and measure
                whether the nudges actually cut the time it takes to get to the
                right shape.
              </p>

              <div className={styles.thanks}>
                <p className={styles.thanksText}>
                  A heartfelt thanks to the Adobe Design team, especially{" "}
                  <span className={styles.strong}>Rakesh Baidya</span> and{" "}
                  <span className={styles.strong}>Mrinalini Sardar</span>, who
                  kept asking me why until the answer was worth designing for.
                </p>
              </div>
            </div>

            <figure className={cx(styles.figure, styles.reveal)}>
              <div className={cx(styles.frame, styles.framePad)}>
                <img
                  src="/images/rethink-ai-shapes/team.png"
                  alt="The project team: Rakesh Baidya, Mrinalini Sardar and Deepali Babuta"
                  loading="lazy"
                />
              </div>
            </figure>
          </section>

          {/* CLOSING */}
          <section className={styles.closing}>
            <p className={cx(styles.closingLine, styles.reveal)}>
              Ten weeks, forty problems, five pillars, one panel.
            </p>
            <div className={cx(styles.nextRow, styles.reveal, styles.d1)}>
              <Link href="/#projects" className={cx(styles.nextLink, styles.nextBack)}>
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9.5 3.5 5 8l4.5 4.5M13 8H5" strokeLinecap="round" />
                </svg>
                All work
              </Link>
              <Link href="/work/soundscape-navigation" className={styles.nextLink}>
                Next: Soundscape Navigation
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6.5 3.5 11 8l-4.5 4.5M3 8h8" strokeLinecap="round" />
                </svg>
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
