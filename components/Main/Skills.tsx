import { SkillsText } from "@/utils/Text";
import { icons } from "@/utils/data/iconsData";
import Image from "next/image";
const Skills = () => {
  return (
    <div className="grid justify-items-center">
      <span className="text-[1.5rem] mt-8 border-b-[.5rem] border-green pr-5 pl-5">
        {SkillsText.title}
      </span>
      <div className="grid grid-cols-3 justify-items-center items-center justify-center ">
        {icons.map((icon) => (
          <div key={icon.id}>
            <Image width={80} height={80} alt="" src={icon.src} 
            className="rounded-full object-cover p-2 m-2"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
