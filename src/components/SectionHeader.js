export default function SectionHeader(props) {
  const { text } = props;
  return (
    <div className="bg-gray-200 w-28 h-7 flex justify-center items-center text-sm rounded-xl my-6">
      {text}
    </div>
  );
}
