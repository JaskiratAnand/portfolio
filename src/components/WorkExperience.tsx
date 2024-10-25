import { memo } from "react";
import { workExperienceData } from "@/data";

const WorkExperience = memo(() => {
  return (
    <div className="pt-5">
      <h1 className="text-xl md:text-3xl font-medium pb-3 md:pb-5">Work Experience</h1>

      <div className="mt-2 md:mt-0">
        {workExperienceData.map((workExp, index) => (
          <div key={index} className="border border-neutral-700 mb-3 p-2 px-4 rounded-xl">
            <div className="pt-1 md:flex flex-row justify-between items-center">
              <h1 className="text-xl font-medium">{workExp.role}</h1>
              <div className="text-sm">{`${workExp.from} - ${workExp.till}`}</div>
            </div>

            <div className="py-1 italic text-sm">{workExp.company}</div>
            <ul className="py-1 text-sm list-disc">
              {
                workExp.description.map((desc, index) => (
                  <li
                    key={index}
                    className="text-pretty pb-1 ml-4"
                  >{desc}</li>
                ))
              }
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
});
WorkExperience.displayName = "WorkExperience";

export default WorkExperience;