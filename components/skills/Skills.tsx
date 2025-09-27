import { SkillsText } from "@/utils/Text";
import { icons } from "@/utils/data/iconsData";
import Image from "next/image";
const Skills = () => {
  return (
    <div className="grid">
      <span className="flex text-[1rem]  justify-center p-1 m-2 border-4 border-green rounded-lg ">
        {SkillsText.title}
      </span>
      <div className="grid grid-cols-5 justify-items-center items-center justify-center ">
        {icons.map((icon) => (
          <div key={icon.id}>
            <Image width={50} height={50} alt="" src={icon.src} 
            className="rounded-full object-cover p-2 m-2"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
