import Skill from "./Skill";
import SectionHeader from "../components/SectionHeader";
import Javascript from "../components/icons/Javascrpit";
import TypeScript from "../components/icons/Typescript";
import Next from "./icons/NextIcon";
import React from "./icons/React";

const skills = [
  {
    id: 1,
    name: "Javascript",
    icon: <Javascript />,
  },
  {
    id: 2,
    name: "Typescript",
    icon: <TypeScript />,
  },
  {
    id: 3,
    name: "React",
    icon: <React />,
  },
  {
    id: 4,
    name: "Next",
    icon: <Next />,
  },
  {
    id: 5,
    name: "Typescript",
    icon: <TypeScript />,
  },
  {
    id: 6,
    name: "Typescript",
    icon: <TypeScript />,
  },
  {
    id: 7,
    name: "Typescript",
    icon: <TypeScript />,
  },
  {
    id: 8,
    name: "Typescript",
    icon: <TypeScript />,
  },
  {
    id: 8,
    name: "Typescript",
    icon: <TypeScript />,
  },
  {
    id: 9,
    name: "Typescript",
    icon: <TypeScript />,
  },
  {
    id: 10,
    name: "Typescript",
    icon: <TypeScript />,
  },
  {
    id: 11,
    name: "Typescript",
    icon: <TypeScript />,
  },
  {
    id: 12,
    name: "Typescript",
    icon: <TypeScript />,
  },
  {
    id: 13,
    name: "Typescript",
    icon: <TypeScript />,
  },
  {
    id: 14,
    name: "Typescript",
    icon: <TypeScript />,
  },
  {
    id: 15,
    name: "Typescript",
    icon: <TypeScript />,
  },
  {
    id: 16,
    name: "Typescript",
    icon: <TypeScript />,
  },
];

function DesktopSkills() {
  return (
    <section className="md:hidden py-16 px-4">
      <div className="flex justify-center">
        <SectionHeader text={"Skills"} />
      </div>
      <p className="text-center text-lg font-normal text-gray-600 mb-6">
        The skills, tools and technologies I am really good at:
      </p>
      <div className="flex flex-col flex-wrap gap-8 h-[760px] w-[343px]">
        {skills.map((skill) => {
          return <Skill key={skill.id} icon={skill.icon} name={skill.name} />;
        })}
      </div>
    </section>
  );
}
export default DesktopSkills;
