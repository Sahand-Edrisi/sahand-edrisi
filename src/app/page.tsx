import BackGroundImage from "../../components/BackGroundImage";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import AboutMe from "../../components/aboutMe/AboutMe";
import Skills from "../../components/skills/Skills";
import dynamic from "next/dynamic";

const Projects = dynamic(() => import("../../components/projects/Projects"));

const Experience = dynamic(() => import("../../components/experience/Experience"));

const ContactMe = dynamic(() => import("../../components/contactMe/ContactMe"));

export default function Home() {
  return (
    <div className="max-w-[1444px] m-auto border-4 border-green rounded ">
      <BackGroundImage />
      <SocialMedia />
      <AboutMe />
      <Skills />
      <Projects />
      <Experience />
      <ContactMe />
    </div>
  );
}
