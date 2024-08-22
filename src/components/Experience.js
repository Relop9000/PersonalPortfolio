import SectionHeader from "../components/SectionHeader";
import ExpCard from "./ExpCard";

export default function Experience() {
  return (
    <section>
      <SectionHeader text={"Experience"} />
      <p>Here is a quick summary of my most recent experiences:</p>
      <ExpCard />
    </section>
  );
}
