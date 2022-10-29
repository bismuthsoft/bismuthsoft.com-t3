import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>BismuthSoft</title>
        <meta name="description" content="software developers focused on delivering interactive experiences" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-5xl font-extrabold leading-normal text-gray-700 md:text-[5rem]">
          BismuthSoft
        </h1>
        <p className="text-2xl text-gray-700">Our Projects:</p>
        <div className="mt-3 grid gap-3 pt-3 text-center md:grid-cols-3 lg:w-2/3">
          <ProjectCard
            name="Fazeoid"
            description="fm synthesizer todo write better description"
            link="https://fazeoid.netlify.app/"
            code="https://github.com/bismuthsoft/fazeoid/"
          />
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
      <a
        className="m-auto mt-3 w-fit text-sm text-violet-500 underline decoration-dotted underline-offset-2"
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        Link
      </a>
      <a
        className="m-auto mt-3 w-fit text-sm text-violet-500 underline decoration-dotted underline-offset-2"
        href={code}
        target="_blank"
        rel="noreferrer"
      >
        Code
      </a>
    </section>
  );
};
