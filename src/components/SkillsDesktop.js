import Skill from "./Skill";
import SectionHeader from "./SectionHeader";
import Javascript from "./icons/Javascrpit";
import TypeScript from "./icons/Typescript";

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

function SkillsDesktop() {
  return (
    <section className="md:flex flex-col items-center hidden px-20 py-24 gap-4">
      <SectionHeader text={"Skills"} />
      <p className="text-center text-lg font-normal text-gray-600 mb-6">
        The skills, tools and technologies I am really good at:
      </p>
      <div className="flex flex-wrap gap-12 justify-center h-[248px]">
        {skills.map((skill) => {
          return <Skill key={skill.id} icon={skill.icon} name={skill.name} />;
        })}
      </div>
    </section>
  );
}
export default SkillsDesktop;
