import DesktopHeader from "../components/DesktopHeader";
import MobileHeader from "../components/MobileHeader";
import Intro from "../components/Intro";
import AboutMe from "../components/AboutMe";

export default function Home() {
  return (
    <div className="flex-col">
      <MobileHeader />
      <Intro />
      <AboutMe />
    </div>
  );
}
