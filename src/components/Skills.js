import Skill from "./Skill";
import SectionHeader from "../components/SectionHeader";
import Javascript from "../components/icons/Javascrpit";
import TypeScript from "../components/icons/Typescript";

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
    icon: <TypeScript />,
  },
  {
    id: 4,
    name: "Typescript",
    icon: <TypeScript />,
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

function Skills() {
  return (
    <section className="flex flex-col items-center">
      <SectionHeader text={"Skills"} />
      <p className="text-center text-lg font-normal text-gray-600 mb-6">
        The skills, tools and technologies I am really good at:
      </p>
      <div className="flex flex-wrap gap-8 justify-center">
        {skills.map((skill) => {
          return <Skill key={skill.id} icon={skill.icon} name={skill.name} />;
        })}
      </div>
    </section>
  );
}
export default Skills;
