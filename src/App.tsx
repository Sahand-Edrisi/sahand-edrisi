import { lazy, Suspense } from "react";

import BackGroundImage from "../src/components/BackGroundImage";
import SocialMedia from "../src/components/socialMedia/SocialMedia";
import AboutMe from "../src/components/aboutMe/AboutMe";
import Skills from "../src/components/skills/Skills";
const Projects = lazy(() => import("../src/components/projects/Projects"));
const Experience = lazy(
  () => import("../src/components/experience/Experience")
);
const ContactMe = lazy(() => import("../src/components/contactMe/ContactMe"));

function App() {
  return (
    <div className="max-w-[1444px] m-auto border-4 border-green rounded ">
      <BackGroundImage />
      <SocialMedia />
      <AboutMe />
      <Skills />
      <Suspense>
        <Projects />
        <Experience />
        <ContactMe />
      </Suspense>
    </div>
  );
}

export default App;
