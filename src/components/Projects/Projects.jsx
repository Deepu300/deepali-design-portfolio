import "./projects.css";
import { ProjectsList } from "@/constants/projects";
import Project from "./Project";
import Link from "next/link";

const Projects = () => {
  return (
    <div
      className="w-11/12 m-auto mt-6 mb-12 md:mt-10 md:mb-32 projects-container max-w-screen-2xl"
      id="projects"
    >
      <div className="flex flex-wrap w-4/5 grid-cols-1 m-auto border md:max-lg:w-11/12 md:grid-cols-2 md:border-2 project__wrapper">
        {ProjectsList.map((project, idx) => (
          <Project key={idx} data={project} />
        ))}
      </div>
      <div className="mt-12 text-center cursor-pointer  md:mt-32 view-more-btn md:text-xl">
        {" "}
        <Link href="https://www.behance.net/deepalibabuta" target="_blank">
          <u>View More</u>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
