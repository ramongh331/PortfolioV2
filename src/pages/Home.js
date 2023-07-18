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
        {/* <p className="text-3xl bg-white">Under Construction, but you can see what is done so far.</p> */}
        <h1
          className="max-sm:text-4xl sm:text-8xl 2xl:text-[190px] min-[1920px]:text-[220px] 
          max-sm:w-11/12 sm:w-11/12 lg:w-9/12 xl:w-8/12 2xl:w-11/12 
          text-center
          ease-in-out duration-300"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {content}
        </h1>
        <section className="flex justify-evenly w-full 
        max-sm:text-xs sm:text-3xl 2xl:text-6xl text-5xl 
        sm:mb-0 mb-20">
          <Link to="/about"><h2>About</h2></Link>
          <Link to="/technology"><h2>Technology</h2></Link>
          <Link to="/projects"><h2>Projects</h2></Link>
          <Link to="/contact"><h2>Contact</h2></Link>
        </section>
      </main>
    </>
  );
}
