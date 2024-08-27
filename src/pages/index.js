import DesktopHeader from "../components/DesktopHeader";
import MobileHeader from "../components/MobileHeader";
import Intro from "../components/Intro";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import ExpCard from "../components/ExpCard";
import IntroDesktop from "../components/IntroDesktop";
import AboutMeDesktop from "../components/AboutMeDesktop";
import SkillsDesktop from "../components/SkillsDesktop";
import ExpCardDesktop from "../components/ExpCardDesktop";

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto w-full">
      <DesktopHeader />
      <MobileHeader />
      <IntroDesktop />
      <Intro />
      <AboutMeDesktop />
      <AboutMe />
      <SkillsDesktop />
      <Skills />
      <ExpCard />
      <ExpCardDesktop />
    </div>
  );
}
