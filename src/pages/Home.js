import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [content, setContent] = useState("Ramón Hernández");
  const [nameFade, setNameFade] = useState("opacity-0");
  const [aboutFade, setAboutFade] = useState("opacity-0 ");
  const [techFade, setTechFade] = useState("opacity-0");
  const [projectsFade, setProjectsFade] = useState("opacity-0");
  const [contactFade, setContactFade] = useState("opacity-0");

  function handleMouseEnter() {
    setContent("Front-End Engineer");
  }

  function handleMouseLeave() {
    setContent("Ramón Hernández");
  }

  useEffect(() => {
    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad)
    }
  }, [])

  const onLoad = () => {
      setTimeout(() => {setNameFade("opacity-100")}, 500)
      setTimeout(() => {setAboutFade("opacity-100")}, 1000)
      setTimeout(() => {setTechFade("opacity-100")}, 1100)
      setTimeout(() => {setProjectsFade("opacity-100")}, 1200)
      setTimeout(() => {setContactFade("opacity-100")}, 1300)
  } 

  return (
    <>

      <main className="bg-[#132932] w-full h-screen flex flex-col justify-evenly items-center font-display font-bold text-white">
        <h1
          className={`max-sm:text-4xl sm:text-8xl 2xl:text-[190px] min-[1920px]:text-[220px] 
          max-sm:w-11/12 sm:w-11/12 lg:w-9/12 xl:w-8/12 2xl:w-11/12 
          text-center
          ease-in-out duration-1000 ${nameFade}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {content}
        </h1>
        <section className="flex justify-evenly items-center w-full h-24 text-white font-semibold
        max-sm:text-xs sm:text-3xl 2xl:text-6xl text-5xl 
        sm:mb-0 mb-20">
          <Link to="/about"><h2 className={`p-3 hover:border-2 border-[#58c7f9] ${aboutFade}`}>About</h2></Link>
          <Link to="/technology"><h2 className={`p-3 hover:border-2 border-[#58c7f9] ${techFade}`}>Technology</h2></Link>
          <Link to="/projects"><h2 className={`p-3 hover:border-2 border-[#58c7f9] ${projectsFade}`}>Projects</h2></Link>
          <Link to="/contact"><h2 className={`p-3 hover:border-2 border-[#58c7f9] ${contactFade}`}>Contact</h2></Link>
        </section>
      </main>
    </>
  );
}
