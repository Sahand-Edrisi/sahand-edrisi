import BackGroundImage from "@/components/BackGroundImage";
import Navbar from "@/components/Navbar";
import HomePage from "@/components/homePageComponents/HomePage";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <>
      <BackGroundImage />
      <HomePage />
      <Skills/>
      <Navbar />
    </>
  );
}
