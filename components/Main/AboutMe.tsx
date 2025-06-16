import { AboutMeText } from "@/utils/Text";

const AboutMe = () => {
  return (
    <div className="grid justify-items-center ">
      <span className="text-[2rem] mt-8 border-b-[.5rem] border-green pr-5 pl-5">
        {AboutMeText.name}
      </span>
      <span className="text-[1.5rem] mt-8 border-b-[.5rem] border-green pr-5 pl-5">
        {AboutMeText.titleWork}
      </span>

      <div className="grid justify-items-center w-[18rem]  mb-4 border-b-[.5rem] border-green ">
        
        <div className="mt-8  mb-6">
          <span className="text-[1.5rem]  border-b-[.5rem] border-green pr-5 pl-5">
            {AboutMeText.title}
          </span>
        </div>

        <div className="pr-2 pl-2 pb-4">
          {AboutMeText.aboutMeText
            .split("/")
            .filter(Boolean)
            .map((sent, index) => (
              <p key={index}>{sent.trim()}</p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
