import SectionHeader from "./SectionHeader";

export default function AboutMeDesktop() {
  return (
    <section className="bg-gray-50 hidden md:block px-20 py-24">
      <div className="flex flex-col items-center">
        <SectionHeader text={"About me"} />
      </div>
      <div className="flex gap-11">
        <div className="w-[584px] h-[558px]">
          <img src="/profile.jpg" className="w-[400px] h-[480px] border-8" />
        </div>
        <div className="text-gray-600 font-normal text-base w-[584px] h-[558px] flex flex-col gap-3">
          <p className="mt-6 text-gray-900 font-semibold text-2xl">
            Curious about me? Here you have it:
          </p>
          <p>
            I'm a designer turned full stack developer, passionate about
            React.js and Node.js. I excel in blending technical and visual
            aspects to craft exceptional digital products, prioritizing user
            experience, precise design, and optimized code.
          </p>
          <p>
            Since starting my web development journey in 2015, I've embraced
            challenges and kept up with the latest tech trends. Now in my early
            thirties, seven years in, I'm building cutting-edge web apps using
            Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and more.
          </p>
          <p>
            With a progressive mindset, I enjoy the entire product development
            process, from ideation to execution. Off duty, you'll find me on
            Twitter, tracking startup journeys, or unwinding. Follow me for tech
            insights and public project updates on Twitter or GitHub.
          </p>
          <p>Finally, some quick bits about me.</p>
          <ul className="flex flex-wrap list-disc ml-4">
            <li className="w-40 h-11">B.E. in Computer Engineering</li>
            <li className="w-40 h-11">Avid learner</li>
            <li className="w-40 h-11">Full time freelancer</li>
          </ul>
          <p>
            One last thing, I'm available for freelance work, so feel free to
            reach out and say hello! I promise I don't bite 😉
          </p>
        </div>
      </div>
    </section>
  );
}
