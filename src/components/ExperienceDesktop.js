export default function ExperienceDesktop(props) {
  const { icon, date, title, text } = props;
  return (
    <div className="w-[896px] h-[288px] bg-white p-8 rounded-xl mt-6 flex justify-between">
      <div>{icon}</div>
      <div className="w-[384px] h-[224px]">
        <p className="text-xl">{title}</p>
        <ul className="list-disc">
          <li>{text}</li>
        </ul>
      </div>
      <p>{date}</p>
    </div>
  );
}
