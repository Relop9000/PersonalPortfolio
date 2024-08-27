import Upwork from "./icons/Upwork";
import DesktopExperience from "./ExperienceDesktop";
import SectionHeader from "./SectionHeader";

const expData = [
  {
    id: 1,
    icon: <Upwork />,
    date: "Nov 2021 - Present",
    title: "Sr. Frontend Developer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: 2,
    icon: <Upwork />,
    date: "Nov 2021 - Present",
    title: "Sr. Frontend Developer",
    text: "Sed quis justo ac magna.",
  },
  {
    id: 3,
    icon: <Upwork />,
    date: "Dec 2015 - May 2017",
    title: "Full Stack Developer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
export default function ExpCardDesktop() {
  return (
    <section className="bg-gray-50 md:flex flex-col items-center px-4 py-16 hidden">
      <div>
        <SectionHeader text="Experience" />
      </div>
      <p className="text-center text-lg font-normal text-gray-600 mb-6">
        Here is a quick summary of my most recent experiences:
      </p>
      {expData.map((exp) => {
        return (
          <DesktopExperience
            key={exp.id}
            icon={exp.icon}
            date={exp.date}
            title={exp.title}
            text={exp.text}
          />
        );
      })}
    </section>
  );
}
