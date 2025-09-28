
import { IExperienceItemProps } from "@/utils/data/ExperienceData";
import ProjectsItem from "./ProjectsItem";

const ExperienceItems = ({ items }: { items: IExperienceItemProps }) => {
  return (
    <>
    <div className="font-montserrat font-bold border-b border-green pt-3 pb-3">
      <h1 className="text-base pt-1 text-green">{items.title}</h1>
      <h2 className="text-sm ">{items.date}</h2>
      <ProjectsItem it={items.projects} />
    </div>
    </>
  );
};

export default ExperienceItems;
