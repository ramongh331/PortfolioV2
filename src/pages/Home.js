import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [content, setContent] = useState("Ramón Hernández");

  function handleMouseEnter() {
    setContent(headerHover);
  }

  function handleMouseLeave() {
    setContent("Ramón Hernández");
  }

  const [header, setHeader] = useState(false);
  const [about, setAbout] = useState(false);
  const [tech, setTech] = useState(false);
  const [projects, setProjects] = useState(false);
  const [contact, setContact] = useState(false);

  const headerHover = header ? (
    <h2>Ingeniero Front-End</h2>
  ) : (
    <h2>Front-End Engineer</h2>
  );

  function handleClick() {
    setHeader(!header);
    setAbout(!about);
    setTech(!tech);
    setProjects(!projects);
    setContact(!contact);
  }

  return (
    <>
      <main className="bg-yellow-1000 w-full h-screen flex flex-col justify-evenly items-center font-display font-bold">
        <button onClick={handleClick}>English/Español</button>
        <h1
          className="text-[220px] w-8/12 text-center ease-in-out duration-300"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {content}
        </h1>
        <section className="flex justify-evenly w-full text-5xl mb-20">
          <Link to="/about">{about ? <h2>Sobre Mi</h2> : <h2>About</h2>}</Link>
          {tech ? <h2>Tecnología</h2> : <h2>Technology</h2>}
          {projects ? <h2>Proyectos</h2> : <h2>Projects</h2>}
          {contact ? <h2>Contacto</h2> : <h2>Contact</h2>}
        </section>
      </main>
    </>
  );
}
