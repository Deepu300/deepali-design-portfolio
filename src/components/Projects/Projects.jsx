import { avigeaFont } from "@/utils/fonts";
import "./projects.css";
import { ProjectsList } from "@/constants/projects";
import Project from "./Project";
import Link from "next/link";

const Projects = () => {
  return (
    <div
      className="w-11/12 m-auto my-12 md:my-32 projects-container max-w-screen-2xl"
      id="projects"
    >
      <h1
        className={`${avigeaFont.className} text-center text-3xl md:text-10xl leading-none mb-6 md:mb-12 relative w-fit mx-auto`}
      >
        {/* {" "}
        <img
          src="/tag.png"
          style={{ transform: "translateX(-100%)" }}
          className="absolute w-14 md:left-10 md:ā-top-1 md:w-auto "
        />{" "} */}
        Projects
      </h1>
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
