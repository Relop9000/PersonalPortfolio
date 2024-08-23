import Upwork from "./icons/Upwork";
import Experience from "./Experience";
const expData = [
  {
    id: 1,
    icon: <Upwork />,
    date: "Nov 2021 - Present",
    title: "Sr. Frontend Developer",
  },
  {
    id: 2,
    icon: <Upwork />,
    date: "Nov 2021 - Present",
    title: "Sr. Frontend Developer",
  },
  {
    id: 3,
    icon: <Upwork />,
    date: "Dec 2015 - May 2017",
    title: "Full Stack Developer",
  },
];
export default function ExpCard() {
  return (
    <section className="bg-gray-50 flex flex-col items-center">
      {expData.map((exp) => {
        return (
          <Experience
            key={exp.id}
            icon={exp.icon}
            date={exp.date}
            title={exp.title}
          />
        );
      })}
    </section>
  );
}
