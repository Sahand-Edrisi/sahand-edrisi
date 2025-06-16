import Image from "next/image";
import AboutMe from "./AboutMe";
import ProfilePic from "./ProfilePic";
import Projects from "./Projects";
import Skills from "./Skills";
import bgImage from "@/public/img/wallhaven-d5xq63.jpg";
const Main = () => {
  return (
    <>
      <Image
        width={550}
        height={550}
        alt=""
        src={bgImage}
        className="fixed z-0 w-full h-full object-cover opacity-20"
      />
      <div className="relative pt-20 w-[20rem] grid justify-center z-10">
        <ProfilePic />
        <AboutMe />
        <Skills />
        <Projects />
      </div>
    </>
  );
};

export default Main;
