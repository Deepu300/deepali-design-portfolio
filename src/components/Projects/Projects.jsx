import { avigeaFont } from "@/utils/fonts";
import "./projects.css";
import { ProjectsList } from "@/constants/projects";
import Project from "./Project";

const Projects = () => {
  return (
    <div className="w-11/12 m-auto my-10 md:my-20 projects-container max-w-screen-2xl">
      <h1 className={`${avigeaFont.className} text-center text-4xl md:text-10xl mb-6 md:mb-12`}>Projects</h1>
      <div className="grid w-4/5 grid-cols-1 m-auto border md:grid-cols-2 md:border-2 project__wrapper">
        {ProjectsList.map((project, idx) => (
          <Project key={idx} data={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
