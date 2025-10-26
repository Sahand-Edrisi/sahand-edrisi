import { IExperienceItemProps } from "../../../utils/data/ExperienceData";
import ProjectsItem from "./ProjectsItem";

const ExperienceItems = ({
  items,
  style,
}: {
  items: IExperienceItemProps;
  style: string;
}) => {
  return (
    <>
      <div
        className={`font-montserrat font-bold mr-2 ${
          style === "border-none" ? "border-none" : "border-b border-green"
        } pt-3 pb-3`}
      >
        <h1 className="text-base pt-1 text-green md:text-[1.5rem]">
          {items.title}
        </h1>
        <h2 className="text-sm md:text-[1.2rem] md:pt-1">{items.date}</h2>
        <ProjectsItem it={items.projects} />
      </div>
    </>
  );
};

export default ExperienceItems;
