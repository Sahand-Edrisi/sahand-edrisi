import Titles from "../Common/Titles";
import { experience } from "../../utils/data/ExperienceData";
import ExperienceItems from "./ExperienceItems";
import { TitleText } from "../Common/TitleText";

const Experience = () => {
  return (
    <div className="pt-3">
      <Titles title={TitleText.titleExperience} />
      <div className=" pl-2 ">
        {experience.map((item, index) => (
          <ExperienceItems
            items={item}
            key={item.id}
            style={index === experience.length - 1 ? "border-none" : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
