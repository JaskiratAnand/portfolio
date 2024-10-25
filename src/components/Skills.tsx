import { skillsData } from "@/data";
import { memo } from "react";

const Skills = memo(() => {
  return (
    <div className="pt-5">
      <h1 className="text-xl md:text-3xl font-medium pb-3 md:pb-5">Skills</h1>

      <div className="mt-2 md:mt-0 mx-1">
        <SkillsList name={"Frontend"} list={skillsData.frontend} />
        <SkillsList name={"Backend"} list={skillsData.backend} />
        <SkillsList name={"Databases"} list={skillsData.databases} />
        <SkillsList name={"DevOps"} list={skillsData.devops} />
        <SkillsList name={"Architecture"} list={skillsData.architecture} />
        <SkillsList name={"Tools"} list={skillsData.tools} />
      </div>
    </div>
  )
});
Skills.displayName = "Skills";

const SkillsList = memo(({ name, list }: {
  name: string;
  list: string[];
}) => {
  return (
    <div className="md:flex flex-row items-center pb-2">
      {name}:
      <div className="w-full overflow-scroll py-1 mx-2">
        {list.map((skill, id) => (
          <span
            key={id}
            className="px-2 py-1 rounded-md mr-1 text-xs bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200"
          ><span>{skill}</span></span>
        ))}
      </div>
    </div>
  )
});
SkillsList.displayName = "SkillsList";

export default Skills;