import DesktopHeader from "../components/DesktopHeader";
import MobileHeader from "../components/MobileHeader";
import Intro from "../components/Intro";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import ExpCard from "@/components/ExpCard";

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <DesktopHeader />
      <MobileHeader />
      <Intro />
      <AboutMe />
      <Skills />
      {/* <ExpCard /> */}
    </div>
  );
}
