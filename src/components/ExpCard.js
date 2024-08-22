import Upwork from "./icons/Upwork";
export default function ExpCard(props) {
  const { date, text } = props;
  return (
    <div>
      <Upwork />
      <p>{date}</p>
      <ul>
        <li>{text}</li>
        <li>{text}</li>
        <li>{text}</li>
        <li>{text}</li>
      </ul>
    </div>
  );
}
