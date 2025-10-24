import BackGroundImage from "@/components/BackGroundImage";
import SocialMedia from "@/components/socialMedia/SocialMedia";
import AboutMe from "@/components/aboutMe/AboutMe";
import Skills from "@/components/skills/Skills";
import Experience from "@/components/experience/Experience";
import Projects from "@/components/projects/Projects";
import ContactMe from "@/components/contactMe/ContactMe";

export default function Home() {
  return (
    <div className="max-w-[1444px] m-auto border-l-4 border-green border-r-4   border-b-4  ">
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
