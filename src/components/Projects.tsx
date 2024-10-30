import { memo } from "react";
import ProjectCard from "./ProjectCard";
import ProjectsListButton from "./ProjectsListButton";
import { top_projects } from "@/projects";

const Projects = memo(() => {
  return (
    <div className="pt-8 px-4">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-xl md:text-4xl font-bold pt-5 pb-2 md:pb-3">Projects</h1>
        <ProjectsListButton />
      </div>
      <div className="text-sm md:text-lg pb-4 text-neutral-800 dark:text-neutral-400">
        Some of my side projects.
      </div>

      <div className="flex flex-col gap-4 items-center">
        {top_projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </div>
  )
});
Projects.displayName = "Projects";

export default Projects;