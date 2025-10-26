import { TitleText } from "../Common/TitleText";
import { icons } from "../../utils/data/SkillsData";
import Image from "next/image";
import Titles from "../Common/Titles";

const Skills = () => {
  return (
    <div className="grid pt-3">
      <Titles title={TitleText.titleSkills} />
      <div className="grid grid-cols-3 justify-items-center items-center justify-center ">
        {icons.map((icon) => (
          <div key={icon.id}>
            <Image
              width={icon.widthImg}
              height={icon.heightImg}
              alt={icon.alt}
              src={icon.src}
              className="object-contain p-2 m-2  md:w-[8rem] md:h-[8rem]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
