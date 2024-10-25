import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import ProjectsListButton from "@/components/ProjectsListButton";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";

export default function Resume() {
  return <>
    <div className="max-w-screen-md mx-auto pt-10 pb-2 px-6">
      <h1 className="text-2xl pt-4 md:text-4xl md:pt-8 font-bold pb-5 md:pb-8">Resumé</h1>

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