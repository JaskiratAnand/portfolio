import { memo } from "react";
import { certificationsData } from "@/data";

const Certifications = memo(() => {
  return (
    <div className="pt-5">
      <h1 className="text-xl md:text-3xl font-medium pb-3 md:pb-5">Certifications</h1>

      <div className="mt-2 md:mt-0">
        {certificationsData.map((certification, index) => (
          <div key={index} className="mb-2 md:mb-3">
            <div className="border border-neutral-700 mb-3 p-2 px-4 rounded-xl">
              <div className="pt-1 flex flex-col md:flex-row justify-between md:items-center">
                <span
                  className="flex flex-col md:flex-row text-base md:gap-1"
                >
                  <a 
                    href={certification.link}
                    target="_blank"
                    className="text-blue-500 font-medium hover:underline"
                  >{certification.certificate}</a>
                  
                  <span className="hidden md:block">|</span>

                  <span className="flex flex-row items-center justify-between">
                    <span className="italic">{certification.organization}</span>
                    <span className="text-sm font-medium md:hidden">{certification.date}</span>
                  </span>
                </span>

                <span className="hidden md:flex text-sm font-medium">{certification.date}</span>
              </div>
            </div>
          </div>
        ))
        }
      </div>
    </div>
  )
});
Certifications.displayName = "Certifications";

export default Certifications;