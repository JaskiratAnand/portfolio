"use client";
import { useRouter } from "next/navigation";
import { memo } from "react";

const ProjectsListButton = memo(() => {
  const router = useRouter();

  return (
    <button
      type="button"
      className="border py-2 px-3 md:px-4 text-sm md:text-base rounded-lg bg-black dark:bg-white text-white dark:text-black border-transparent hover:text-neutral-100 dark:hover:text-neutral-900 hover:bg-neutral-700 dark:hover:bg-neutral-400 dark:active:bg-neutral-800 active:bg-neutral-200 transition-all duration-100"
      onClick={() => router.push("/projects-list")}
    >
      See Projects List
    </button>
  );
});
ProjectsListButton.displayName = "ProjectsListButton";

export default ProjectsListButton;
