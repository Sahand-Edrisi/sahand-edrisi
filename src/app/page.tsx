// import Navbar from "@/components/Navbar";
import BackGroundImage from "@/components/BackGroundImage";
import SocialMedia from "@/components/socialMedia/SocialMedia";
import AboutMe from "@/components/aboutMe/AboutMe";
import Skills from "@/components/skills/Skills";
import Experience from "@/components/experience/Experience";
import Projects from "@/components/projects/Projects";
import ContactMe from "@/components/contactMe/ContactMe";

export default function Home() {
  return (
    <div className="max-w-[47rem] m-auto">
      <BackGroundImage />
      <SocialMedia />
      <AboutMe />
      <Skills />
      <Projects/>
      <Experience/>
      <ContactMe/>
    </div>
  );
}
