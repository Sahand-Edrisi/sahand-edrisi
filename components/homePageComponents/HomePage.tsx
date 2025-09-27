import { AboutMeText } from "@/utils/Text";

const HomePage = () => {
  return (
    <div className="grid justify-self-end justify-items-end pl-2 pt-14 ">
      <span className="text-[1rem] font-bold">{AboutMeText.name}</span>
      <span className="text-[1rem] font-bold">{AboutMeText.titleWork}</span>
      <span className="text-[.8rem] font-bold">{AboutMeText.titleSkills}</span>
    </div>
  );
};

export default HomePage;
