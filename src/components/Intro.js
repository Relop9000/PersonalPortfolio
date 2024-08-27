export default function Intro() {
  return (
    <section className="px-4 py-16 text-base font-normal text-gray-600 md:hidden">
      <div className="flex justify-center">
        <img
          className="w-60 h-72 scale-125 border-8 border-white absolute z-10"
          src="/profile.jpg"
        />
        <div className="bg-gray-200 w-80 h-80 -z-0 mt-4"></div>
      </div>
      <div className="mt-12">
        <h3 className="text-4xl font-semibold text-gray-900">Hi, I'm Tom👋</h3>
        <p className="mt-2">
          I specialize in full stack development, particularly with React.js and
          Node.js. My main goal is to create exceptional digital experiences
          that are fast, visually appealing, and accessible to everyone. With
          over 7 years of experience in web development, I continue to find joy
          in crafting innovative solutions and designs
        </p>
      </div>
      <div className="my-12">
        <div className="flex">
          <img className="size-6" src="/locationMark.png" />
          <p>Ulaanbaatar, Mongolia</p>
        </div>
        <div className="flex">
          <div className="size-6 flex justify-center items-center">
            <div className="size-2 bg-emerald-500 rounded-lg"></div>
          </div>
          <p>Available for new projects</p>
        </div>
      </div>
      <div className="flex">
        <img src="/git.png" className="size-9 p-2" />
        <img src="/twitter.png" className="size-9 p-2" />
        <img src="figma.png" className="size-9 p-1" />
      </div>
    </section>
  );
}
