"use client";

import { useEffect, useState } from "react";
import "./play.css";

const PLAY_ITEMS = [
  {
    id: "fidgeting",
    src: "/play/fidgeting.mp4",
    caption: "A visual representation of fidgeting.",
  },
];

export default function Play() {
  const [openId, setOpenId] = useState(null);
  const openItem = PLAY_ITEMS.find((item) => item.id === openId) || null;

  useEffect(() => {
    if (!openItem) return undefined;

    const onKey = (event) => {
      if (event.key === "Escape") setOpenId(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [openItem]);

  return (
    <div className="play-page">
      <div className="play-grid">
        {PLAY_ITEMS.map((item) => (
          <article key={item.id} className="play-card">
            <button
              type="button"
              className="play-thumb"
              aria-label={`Open video: ${item.caption}`}
              onClick={() => setOpenId(item.id)}
            >
              <div className="play-thumb__frame">
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                />
              </div>
            </button>
            <p className="play-caption">{item.caption}</p>
          </article>
        ))}
      </div>

      {openItem ? (
        <div
          className="play-modal"
          role="dialog"
          aria-modal="true"
          aria-label={openItem.caption}
          onClick={() => setOpenId(null)}
        >
          <button
            type="button"
            className="play-modal__close"
            aria-label="Close video"
            onClick={() => setOpenId(null)}
          >
            ×
          </button>
          <div
            className="play-modal__frame"
            onClick={(event) => event.stopPropagation()}
          >
            <video
              src={openItem.src}
              autoPlay
              loop
              muted
              playsInline
              controls
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
