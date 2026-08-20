"use client";
import Link from "next/link";
import { useState } from "react";
import { motion as m } from "framer-motion";

const Project = ({ data }) => {
  const [isHovered, setHovered] = useState(false);

  const isExternal = data.link.endsWith(".html") || data.link.includes("http");
  const opensInNewTab =
    data.link.includes("behance") || data.link.includes("http");
  const linkRel = data.link.includes("http") ? "noopener noreferrer" : undefined;
  const linkTarget = opensInNewTab ? "_blank" : undefined;

  const projectImage = (
    <div className="project-image" data-aos="fade-up">
      <div className="project-image__frame">
        <img src={`/${data.thumbnail[0]}`} alt={data.projectTitle} />
        <m.img
          src={`/${data.thumbnail[1]}`}
          alt=""
          className="project-image__hover"
          initial="hidden"
          whileHover="visible"
          onTouchStart={() => setHovered(true)}
          onTouchEnd={() => setHovered(false)}
          animate={isHovered ? "visible" : ""}
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
            },
          }}
        />
      </div>
    </div>
  );

  return (
    <article className="project-card">
      {isExternal ? (
        <a
          href={data.link}
          target={linkTarget}
          rel={linkRel}
          className="project-thumb-link"
        >
          {projectImage}
        </a>
      ) : (
        <Link href={data.link} className="project-thumb-link">
          {projectImage}
        </Link>
      )}

      {data.tags?.length ? (
        <div className="project-tags">
          {data.tags.map((tag, idx) => (
            <span key={`${tag.label}-${idx}`} className="project-tag">
              {tag.label}
            </span>
          ))}
        </div>
      ) : null}

      {isExternal ? (
        <a
          href={data.link}
          target={linkTarget}
          rel={linkRel}
          className="project-title"
        >
          {data.projectTitle}
        </a>
      ) : (
        <Link href={data.link} className="project-title">
          {data.projectTitle}
        </Link>
      )}

      <p className="project-desc">{data.projectDesc}</p>
    </article>
  );
};

export default Project;
