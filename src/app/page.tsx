type Project = {
  name: String,
  description: String,
  link: String,
  code: String,
};

const Home = () => {
  const projects: Project[] = [
    {
      name: "Fazeoid",
      description: `
web based fm synthesizer with visualization tools for easy design of custom sounds
      `,
      link: "https://fazeoid.netlify.app/",
      code: "https://github.com/bismuthsoft/fazeoid/",
    },
    {
      name: "Svelte DJ Knob",
      description: `
A knob Svelte component designed for audio software
      `,
      link: "https://svelte-dj-knob.netlify.app/",
      code: "https://github.com/bismuthsoft/svelte-dj-knob/"
    },
  ];
  return (
    <>
      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-5xl font-extrabold leading-normal text-gray-700 md:text-[5rem]">
          BismuthSoft
        </h1>
        <p className="text-2xl text-gray-700">Our Projects:</p>
        <div className="mt-3 grid gap-3 pt-3 text-center md:grid-cols-3 lg:w-2/3">
          {projects.map(props => (
            <ProjectCard {...props} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;

type ProjectCardProps = {
  name: string;
  description: string;
  link: string;
  code: string;
};

const ProjectCard = ({
  name,
  description,
  link,
  code,
}: ProjectCardProps) => {
  return (
    <section className="flex flex-col justify-center rounded border-2 border-gray-500 p-6 shadow-xl duration-500 motion-safe:hover:scale-105">
      <h2 className="text-lg text-gray-700">{name}</h2>
      <p className="text-sm text-gray-600">{description}</p>
      <div className="flex">
        <a
          className="m-auto mt-3 text-sm text-violet-500 underline decoration-dotted underline-offset-2"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          Link
        </a>
        <a
          className="m-auto mt-3 text-sm text-violet-500 underline decoration-dotted underline-offset-2"
          href={code}
          target="_blank"
          rel="noreferrer"
        >
          Code
        </a>
      </div>
    </section>
  );
};
