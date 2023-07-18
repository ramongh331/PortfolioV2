import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [content, setContent] = useState("Ramón Hernández");

  function handleMouseEnter() {
    setContent("Front-End Engineer");
  }

  function handleMouseLeave() {
    setContent("Ramón Hernández");
  }

  return (
    <>
      <main className="bg-yellow-1000 w-full h-screen flex flex-col justify-evenly items-center font-display font-bold">
        <p className="text-5xl bg-white">Under Construction, but you can see what is done so far.</p>
        <h1
          className="text-[220px] w-8/12 text-center ease-in-out duration-300"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {content}
        </h1>
        <section className="flex justify-evenly w-full text-5xl mb-20">
          <Link to="/about"><h2>About</h2></Link>
          <Link to="/technology"><h2>Technology</h2></Link>
          <Link to="/projects"><h2>Projects</h2></Link>
          <Link to="/contact"><h2>Contact</h2></Link>
        </section>
      </main>
    </>
  );
}
