import { skillsData } from "@/data";
import { memo } from "react";
import Tag from "./ui/Tag";

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
  );
});
Skills.displayName = "Skills";

const SkillsList = memo(({ name, list }: { name: string; list: string[] }) => {
  return (
    <div className="md:flex flex-row items-center pb-2">
      <span className="font-medium">{name}:</span>
      <div className="w-full overflow-scroll scrollbar-hidden py-1 mx-2">
        {list.map((skill, id) => (
          <Tag key={id}>
            <span>{skill}</span>
          </Tag>
        ))}
      </div>
    </div>
  );
});
SkillsList.displayName = "SkillsList";

export default Skills;
