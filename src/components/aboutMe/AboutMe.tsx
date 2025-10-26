import { AboutMeData } from "../../utils/data/AboutMeData";

const AboutMe = () => {
  return (
    <div className="grid  pl-2 pt-2 md:pt-14 ">
      <h1 className="font-mono text-[1.5rem] md:text-[2rem] font-bold text-green">
        {AboutMeData.name}
      </h1>
      <h1 className="font-mono text-[1rem] md:text-[1.8rem] font-bold">
        {AboutMeData.titleWork}
      </h1>
      <h1 className="inline font-montserrat text-[.9rem] md:text-[1.5rem] font-bold text-green">
        {AboutMeData.titleSkills}
      </h1>
      <h1 className="font-montserrat text-[.8rem] md:text-[1.4rem] font-bold">
        {AboutMeData.titleLocation}
      </h1>
      <h1 className="flex  mt-1 font-montserrat text-[.6rem] xm:text-[.8rem] md:text-[1.4rem] font-bold">
        <img
          width={AboutMeData.widthImage}
          height={AboutMeData.heightImg}
          alt=""
          src={AboutMeData.src}
          className="mr-2 w-auto h-auto xs:w-[.8rem] xs:h-[.8rem] xm:w-[1rem] xm:h-[1rem] md:w-[2rem] md:h-[2rem]"
        />
        {AboutMeData.university}
      </h1>
    </div>
  );
};

export default AboutMe;
