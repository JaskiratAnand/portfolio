import { projects_list } from "@/projects"
import { memo } from "react";

const ListProjects = memo(() => {
  return (
    <div className="flex flex-col gap-4 items-center">

      {projects_list.map((project, index) => (
        <div key={index} className="w-full p-5 border rounded-xl dark:border-neutral-700">

          <h2 className="text-xl font-semibold">{project.title}</h2>
          <p className="text-sm text-neutral-800 dark:text-neutral-300 bg-red text-pretty pt-1 overflow-hidden line-clamp-2 leading-6">{project.description}</p>

          <div className="mt-1 py-2 overflow-scroll" >
            {project.tech_tags.map((tag, id) => (
              <span
                key={id}
                className="text-xs bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 px-2 py-1 rounded-md mr-1"
              >{tag}</span>
            ))}
          </div>

          <div className="flex flex-row gap-4 text-sm font-medium mt-3 text-blue-800 dark:text-blue-300">
            <a
              href={project.github_repo}
              target="_blank"
              className="h-7 border flex flex-col justify-center items-center px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-700 dark:border-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-900"
            >GitHub Repo</a>

            {project.live_link &&
              <a
                href={project.live_link}
                target="_blank"
                className="h-7 border flex flex-col justify-center items-center px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-700 dark:border-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-900"
              >Live Project</a>
            }
          </div>
        </div>
      ))}
    </div>
  )
});
ListProjects.displayName = "ListProjects";

export default ListProjects;