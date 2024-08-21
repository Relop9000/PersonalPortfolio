import SectionHeader from "./SectionHeader";
const skills = [
  {
    id: 1,
    name: "Javascript",
  },
];

export default function Skills(props) {
  return (
    <section>
      <SectionHeader text={"Skills"} />
    </section>
  );
}
