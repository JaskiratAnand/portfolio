"use client";
import { useRouter } from "next/navigation";
import { memo } from "react";

const ProjectsListButton = memo(() => {
  const router = useRouter();

  return (
    <button
      type="button"
      className="text-blue-500 hover:font-medium text-base border rounded-full px-3 py-1 bg-neutral-100 dark:bg-neutral-700 dark:border-neutral-500 hover:bg-neutral-300 dark:hover:bg-neutral-800"
      onClick={() => router.push("/projects-list")}
    >See Projects List</button>
  )
});
ProjectsListButton.displayName = "ProjectsListButton";

export default ProjectsListButton;