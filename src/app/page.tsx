import BackGroundImage from "@/components/BackGroundImage";
// import Navbar from "@/components/Navbar";
import AboutMe from "@/components/aboutMe/AboutMe";
import Experience from "@/components/experience/Experience";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import SocialMedia from "@/components/socialMedia/SocialMedia";

export default function Home() {
  return (
    <>
      <BackGroundImage />
      <SocialMedia />
      <AboutMe />
      <Skills />
      <Experience/>
      <Projects/>
    </>
  );
}
