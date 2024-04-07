import GithubPinnedRepos from "@/components/GithubPinnedRepos";
import TagColor from "@/components/TagColor";

export default function Home() {
  return (
      <section className={"p-4 max-w-4xl mx-auto"}>
          <div className={"mb-4 md:mb-8"}>
              <p className={"mb-3 text-base sm:text-lg indent"}>
                  {/* eslint-disable-next-line */}
                  Pleased to meet you, my name is <TagColor>Gabriel Messias</TagColor> and I'm a <TagColor>Back-end Developer</TagColor>.
              </p>
              <p className={"mb-3 text-base sm:text-lg indent"}>
                  I love all areas of technology. My professional experience is <TagColor>full-stack</TagColor> but most of the time I develop the back-end, and I love it.
              </p>
              <p className={"mb-3 text-base sm:text-lg indent"}>
                  I have more knowledge in <TagColor>C#</TagColor>, <TagColor>.NET</TagColor>, <TagColor>ASP.NET MVC</TagColor>, <TagColor>Angular</TagColor> and <TagColor>SQL Server</TagColor>. However, I play with and test other technologies, currently I really like <TagColor>Rust</TagColor> and <TagColor>Go</TagColor>.
              </p>
              <p className={"mb-3 text-base sm:text-lg indent"}>
                  Constant study and practice are my paths to becoming more assertive in problem-solving, aiming to be an expert and a reference within my team.
              </p>
              <p className={"mb-3 text-base sm:text-lg indent"}>
                  {/* eslint-disable-next-line */}
                  My education began with a <TagColor>bachelor's degree in computer science</TagColor> from the Universidade Federal de Goiás. I was part of some volunteer groups, but I stood out in the robotics group and was recognized by the university and CONSUNI. I'm very proud of that.
              </p>
          </div>
          <h1 className={"text-lg text-[rgb(var(--soft-accent-rgb))] mb-4"}><strong>Projects Github</strong></h1>
          <GithubPinnedRepos username={"gmessias"}></GithubPinnedRepos>
      </section>
  );
}
