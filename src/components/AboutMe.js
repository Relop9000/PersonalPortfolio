import SectionHeader from "./SectionHeader";

export default function AboutMe() {
  return (
    <section className="bg-gray-50  md:hidden flex flex-col items-center px-4 py-16  ">
      <SectionHeader text={"About me"} />
      <img src="/profile.jpg" className="w-72 h-96" />
      <div className="text-gray-600 font-normal text-base">
        <p className="mt-6 text-gray-900 font-semibold text-2xl">
          Curious about me? Here you have it:
        </p>
        <p className="mt-6">
          I'm a designer turned full stack developer, passionate about React.js
          and Node.js. I excel in blending technical and visual aspects to craft
          exceptional digital products, prioritizing user experience, precise
          design, and optimized code.
        </p>
        <p className="mt-6">
          Since starting my web development journey in 2015, I've embraced
          challenges and kept up with the latest tech trends. Now in my early
          thirties, seven years in, I'm building cutting-edge web apps using
          Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and more.
        </p>
        <p className="mt-6">
          With a progressive mindset, I enjoy the entire product development
          process, from ideation to execution. Off duty, you'll find me on
          Twitter, tracking startup journeys, or unwinding. Follow me for tech
          insights and public project updates on Twitter or GitHub.
        </p>
        <p className="mt-6">Finally, some quick bits about me.</p>
        <ul className="mt-6 flex flex-wrap list-disc ml-4">
          <li className="w-40 h-11">B.E. in Computer Engineering</li>
          <li className="w-40 h-11">Avid learner</li>
          <li className="w-40 h-11">Full time freelancer</li>
        </ul>
        <p className="mt-6">
          One last thing, I'm available for freelance work, so feel free to
          reach out and say hello! I promise I don't bite 😉
        </p>
      </div>
    </section>
  );
}
