import "./projects.css";
import { ProjectsList } from "@/constants/projects";
import Project from "./Project";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-heading">WORK</h2>
      <div className="project__wrapper">
        {ProjectsList.map((project, idx) => (
          <Project key={idx} data={project} />
        ))}
      </div>
      <div className="view-more-btn">
        <Link href="https://www.behance.net/deepalibabuta" target="_blank">
          View More
        </Link>
      </div>
    </div>
  );
};

export default Projects;
