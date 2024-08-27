export default function Experience(props) {
  const { icon, date, title, text } = props;
  return (
    <div className="w-80 h-96 bg-white p-8 rounded-xl mt-6">
      {icon}
      <p>{date}</p>
      <p>{title}</p>
      <ul className="list-disc">
        <li>{text}</li>
      </ul>
    </div>
  );
}
