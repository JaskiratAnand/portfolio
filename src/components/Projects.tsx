import { memo } from "react";
import ProjectCard from "./ProjectCard";
import ProjectsListButton from "./ProjectsListButton";

const proj = {
  title: "Full Stack Application Development Capstone Project",
  description: "This project was built as the final submission for the IBM Full Stack Web Development Professional Certificate program on Coursera. It demonstrates the skills and knowledge acquired throughout the 12-course series, focusing on front-end, back-end, databases, and deployment.",
  // img: "Image",
  github_repo: "repo",
  live_link: "live link",
  tech_tags: ["Next.js", "Typescript", "TailwindCSS", "Firebase", "Vercel", "Github"]
}

const Projects = memo(() => {
  return (
    <div className="pt-8 px-4">
      <h1 className="text-xl md:text-4xl font-bold pt-5 pb-2 md:pb-3">Projects</h1>
      <div className="text-sm md:text-lg pb-4 text-neutral-800 dark:text-neutral-400">
        Some of my side projects.
        <a
          href="https://github.com/JaskiratAnand?tab=repositories"
          target="_blank"
          className="text-blue-500 hover:font-medium"
        > see more.</a>
      </div>

      <div className="flex flex-col gap-4 items-center">
        <ProjectCard project={proj} />
        <ProjectCard project={proj} />
        <ProjectCard project={proj} />

        <ProjectsListButton />
      </div>
    </div>
  )
});
Projects.displayName = "Projects";

export default Projects;