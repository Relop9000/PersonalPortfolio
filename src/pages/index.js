import DesktopHeader from "../components/DesktopHeader";
import MobileHeader from "../components/MobileHeader";
import Intro from "../components/Intro";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <div className="flex-col container">
      <DesktopHeader />
      <MobileHeader />
      <Intro />
      <AboutMe />
      <Skills />
      {/* <Experience /> */}
    </div>
  );
}
