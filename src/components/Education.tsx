import { memo } from "react";
import { educationData } from "@/data";

const Education = memo(() => {
  return (
    <div className="pt-5">
      <h1 className="text-xl md:text-3xl font-medium pb-3 md:pb-5">
        Education
      </h1>

      <div className="mt-2 md:mt-0">
        {educationData.map((education, index) => (
          <div key={index} className="mb-3 md:mb-5">
            <div className="border border-neutral-100 dark:border-neutral-900 bg-neutral-100 dark:bg-neutral-900 shadow p-2 px-4 rounded-xl">
              <div className="pt-1 md:flex flex-row justify-between items-center">
                <h1 className="text-lg font-medium">{`${education.degree} - ${education.specialization}`}</h1>
                <span className="flex flex-row justify-between items-center">
                  <span className="text-sm font-medium">{`${education.from} - ${education.till}`}</span>
                  <span className="flex md:hidden text-sm font-medium">{`CGPA ${education.cgpa}`}</span>
                </span>
              </div>

              <div className="py-1 flex flex-col md:flex-row justify-between md:items-center gap-1">
                <span className="text-sm italic">{education.college}</span>
                <span className="hidden md:flex text-sm font-medium">{`CGPA ${education.cgpa}`}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});
Education.displayName = "Education";

export default Education;
