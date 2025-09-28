"use client";

import { IExperienceProjectProps } from "@/utils/data/ExperienceData";

const ProjectsItem = ({ it }: { it: IExperienceProjectProps[] }) => {
  return (
    <>
      {it.map((item) => (
        <div key={item.id} className="text-sm font-geist p-1">
          <h2 className="text-sm font-montserrat pt-1 pb-1 text-green">
            {item.projectName}
          </h2>
          <p className="text-sm font-montserrat pt-1 pb-1 ">{item.projectExplain}</p>
        </div>
      ))}
    </>
  );
};

export default ProjectsItem;
