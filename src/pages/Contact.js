import { useState, useEffect } from "react";
import { ContactUs } from "../components/Contact";
import { Link } from "react-router-dom";
import TeamRamon from "../public/images/ContactImage/TeamRamon.png";
import { ExternalLink } from "react-external-link";
import NavIcon from "../public/images/ProjectsImages/HamBurgMenu.png"

export default function Contact() {
  const [nav, setNav] = useState("-right-[100%]")
  const [topNav, setTopNav] = useState("-translate-y-20");
  const [topQuestionFade, setTopQuestionFade] = useState("opacity-0");
  const [ramonImgFade, setRamonImgFade] = useState("opacity-0");
  
  const handleOpenNav = () => {
    setNav("-right-2")
  }
  const handleCloseNav = () => {
    setNav("-right-[100%]")
  }

  useEffect(() => {
    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad)
    }
  }, [])

  const onLoad = () => {
      setTimeout(() => {setTopNav("")}, 200)
      setTimeout(() => {setTopQuestionFade("opacity-100")}, 800)
      setTimeout(() => {setRamonImgFade("opacity-100")}, 1100)
  
  } 
  
  return (
    <>
      <main className="w-full max-sm:h-full sm:h-full 2xl:h-screen min-[1920px]:h-full bg-[#132932] text-white relative overflow-hidden">
      <header className={`${topNav} ease-in-out duration-500
      border-b-2 border-[#58c7f9]
        w-full 
        max-sm:h-10 sm:h-14 2xl:h-20 
        flex 
        justify-between 
        items-center`}>
          <Link to="/contact">
            <h1 className="font-bold 
            max-sm:text-lg sm:text-2xl 
            max-sm:ml-2 sm:ml-10 
            text-[#1be783] 
            ">
              Contact
            </h1>
          </Link>
          <section className="max-sm:hidden sm:w-[20rem] xl:w-[25rem] 2xl:w-[35rem]
          flex 
          justify-between
          items-center 
          max-sm:text-xs sm:text-base 2xl:text-xl 
          font-semibold 
          text-white 
          mx-5">
            <Link to="/"><h2>Home</h2></Link>
            <Link to="/about"><h2>About</h2></Link>
            <Link to="/technology"><h2>Technology</h2></Link>
            <Link to="/projects"><h2>Projects</h2></Link>
          </section>
          <section className="max-sm:mr-2 sm:mr-10">
          <ExternalLink
            href="https://docs.google.com/document/d/1MJJ1Zp0emiOn1I9aolUsWSZ4OC0Z7B-AgSi0rxy2bb4/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
              <div className="max-sm:hidden sm:w-10 
              max-sm:h-7 sm:h-10 
              max-sm:text-xs sm:text-md
              rounded-3xl flex justify-center items-center font-semibold border-white border-2 bg-blue-300 text-black">
                RH
              </div>
            </ExternalLink>
          </section>
        </header>
        {/* Max Small (Mobile) Nav */}
  <div className={`sm:hidden absolute z-10 top-[.45rem] right-2 flex justify-center items-center duration-[1500ms] ease-in-out cursor-pointer`} onClick={handleOpenNav}><img className={`${topNav} ease-in-out duration-500 h-5`} src={NavIcon} alt="Navigation Menu Button"/></div>

<div className={`lightBlueGlow w-[22rem] h-[102%] border-2 border-[#58c7f9] bg-[#132933] absolute duration-1000 ease-in-out z-10 p-5 flex flex-col gap-10 items-center ${nav} top-0`}>
 <div className="text-white hover:text-black hover:bg-[#91dcff] font-bold text-xl text-center w-full cursor-pointer" onClick={handleCloseNav}>X</div>

 <Link className="cursor-pointer w-[95%] hover:border-2 border-[#58c7f9]" to="/">
   <h2 className="text-5xl text-white p-4">Home</h2>
 </Link>
 <Link className="cursor-pointer w-[95%] hover:border-2 border-[#58c7f9]" to="/about">
   <h2 className="text-5xl text-white p-4">About</h2>
 </Link>
 <Link className="cursor-pointer w-[100%] hover:border-2 border-[#58c7f9]" to="/technology">
   <h2 className="text-5xl text-white p-4">Technology</h2>
 </Link>
 <Link className="cursor-pointer w-[95%] hover:border-2 border-[#58c7f9]" to="/projects">
   <h2 className="text-5xl text-white p-4">Projects</h2>
 </Link>
 
</div>
        <h2 className={`${topQuestionFade} ease-in-out duration-500
        bebas max-sm:text-4xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl text-center 
        max-sm:mt-5 sm:mt-5 2xl:mt-10 mb-5`}>Are you Team Ramón?</h2>
        <img className={`${ramonImgFade} ease-in-out duration-500 mx-auto max-sm:w-[90%] sm:w-[90%] lg:w-[60%]`} src={TeamRamon} alt="The group of Ramons in a V-formation" />
        <ContactUs />
      </main>
    </>
  );
}
