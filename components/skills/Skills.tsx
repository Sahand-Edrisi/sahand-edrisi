import { TitleText } from "../Common/TitleText"; 
import { icons } from "@/utils/data/SkillsData";
import Image from "next/image";
import Titles from "../Common/Titles";

const Skills = () => {
  return (
    <div className="grid pt-3">
      <Titles title={TitleText.titleSkills} />
      <div className="grid grid-cols-4 justify-items-center items-center justify-center ">
        {icons.map((icon) => (
          <div key={icon.id}>
            <Image
              width={icon.widthImg}
              height={icon.heightImg}
              alt={icon.alt}
              src={icon.src}
              className="object-cover p-2 m-2 text-white"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
