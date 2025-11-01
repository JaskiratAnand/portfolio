import { projects_list } from "@/projects";
import { memo } from "react";
import Card from "./ui/Card";
import Tag from "./ui/Tag";
import LinkButton from "./ui/LinkButton";

const ListProjects = memo(() => {
  return (
    <div className="flex flex-col gap-4 items-center">
      {projects_list.map((project, index) => (
        <Card key={index} className="p-5">
          <h2 className="text-xl font-semibold">{project.title}</h2>
          <p className="text-sm text-neutral-800 dark:text-neutral-300 bg-red text-pretty pt-1 overflow-hidden line-clamp-2 leading-6">
            {project.description}
          </p>

          <div className="mt-1 py-2 overflow-scroll scrollbar-hidden">
            {project.tech_tags.map((tag, id) => (
              <Tag key={id}>{tag}</Tag>
            ))}
          </div>

          <div className="flex flex-row gap-4 text-sm font-medium mt-3 text-blue-800 dark:text-blue-300">
            <LinkButton text="GitHub Repo" url={project.github_repo} />

            {project.live_link && (
              <LinkButton text="Live Project" url={project.live_link} />
            )}
          </div>
        </Card>
      ))}
    </div>
  );
});
ListProjects.displayName = "ListProjects";

export default ListProjects;
