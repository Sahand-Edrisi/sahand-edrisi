import { AboutMeText } from "@/utils/data/AboutMeData"; 

const AboutMe = () => {
  return (
    <div className="grid  pl-2 pt-3 ">
      <h1 className="font-mono text-[1.5rem] font-bold text-green">{AboutMeText.name}</h1>
      <h1 className="font-mono text-[1rem] font-bold">
        {AboutMeText.titleWork}
      </h1>
      <h1 className="inline font-montserrat text-[.9rem] font-bold text-green">
        {AboutMeText.titleSkills}
      </h1>
      <h1 className="font-montserrat text-[.8rem] font-bold">
        {AboutMeText.titleLocation}
      </h1>
    </div>
  );
};

export default AboutMe;
