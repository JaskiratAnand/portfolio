import Image from "next/image";
import { memo } from "react";

const ProjectCard = memo(({ project }: {
  project: {
    title: string,
    description: string,
    tech_tags: string[]
    github_repo: string,
    img?: string,
    live_link?: string,
  }
}) => {
  return (
    <div className="w-full border rounded-xl p-5 dark:border-neutral-700">
      <div className="flex flex-col-reverse md:grid grid-cols-11 grid-flow-col gap-3">

        <div className="flex flex-col md:grid col-span-6">
          <h1 className="text-xl font-semibold">{project.title}</h1>
          <p className="text-sm bg-red text-pretty pt-1 overflow-hidden line-clamp-2 leading-6">{project.description}</p>

          <div className="mt-1 py-2 overflow-scroll" >
            {project.tech_tags.map((tag, id) => (
              <span
                key={id}
                className="text-xs bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 px-2 py-1 rounded-md mr-1"
              >{tag}</span>
            ))}
          </div>

          <div className="flex flex-row gap-4 text-sm font-medium mt-3 text-blue-500">
            {project.github_repo &&
              <a
                href={project.github_repo}
                target="_blank"
                className="border flex flex-col justify-center items-center px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-700 dark:border-neutral-500 hover:bg-neutral-300 dark:hover:bg-neutral-800"
              >GitHub Repo</a>
            }
            {project.live_link &&
              <a
                href={project.live_link}
                target="_blank"
                className="border flex flex-col justify-center items-center px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-700 dark:border-neutral-500 hover:bg-neutral-300 dark:hover:bg-neutral-800"
              >Live Project</a>
            }
          </div>
        </div>

        <div className="flex flex-col md:grid col-span-5 justify-center items-center">
          {project.img ?
            <Image src={project.img} alt={project.title} width={300} height={200} />
            : <div className="flex flex-col w-full min-w-[300px] min-h-[200px] rounded-xl bg-neutral-200 dark:bg-neutral-700 justify-center items-center">
              <p className="text-neutral-500 dark:text-neutral-800">No Image Available</p>
            </div>
          }
        </div>

      </div>

    </div>
  )
});
ProjectCard.displayName = "ProjectCard";

export default ProjectCard;