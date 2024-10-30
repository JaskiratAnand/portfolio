import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import ProjectsListButton from "@/components/ProjectsListButton";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";

export default function Resume() {
  return <>
    <div className="max-w-screen-md mx-auto pt-10 pb-2 px-6">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-2xl pt-4 md:text-4xl md:pt-8 font-bold pb-5 md:pb-8">Resumé</h1>

        <a
          href="https://drive.google.com/file/d/1L3d7peVCRA5AIwJ0X10_GrUxI5vVszow/view?usp=sharing"
          target="_blank"
          className="border py-2 text-sm md:text-base px-4 rounded-lg bg-black dark:bg-white text-white dark:text-black border-transparent hover:text-neutral-100 hover:dark:text-neutral-900 hover:bg-neutral-700 hover:dark:bg-neutral-400 dark:hover:text-white active:dark:bg-neutral-800 active:bg-neutral-200 transition-all duration-100"
        >
          Download Resumé
        </a>
      </div>

      <WorkExperience />
      <Education />
      <Certifications />
      <Skills />

      <div className="pt-8 flex justify-center">
        <ProjectsListButton />
      </div>
    </div>
  </>
}