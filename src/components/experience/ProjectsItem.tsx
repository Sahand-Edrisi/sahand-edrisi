import { IExperienceProjectProps } from "../../utils/data/ExperienceData";

const ProjectsItem = ({ it }: { it: IExperienceProjectProps[] }) => {
  return (
    <>
      {it.map((item) => (
        <div key={item.id} className="p-1">
          <h2 className="text-sm md:text-[1.2rem] font-montserrat pt-1 md:pt-3 pb-1 text-green">
            {item.projectName}
          </h2>
          <p className="text-sm md:text-[1.2rem] font-montserrat pt-1 pb-1 ">
            {item.projectExplain}
          </p>
        </div>
      ))}
    </>
  );
};

export default ProjectsItem;
