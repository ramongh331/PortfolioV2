import Coder from "../public/images/Coder_NoBG.png";
import Golfer from "../public/images/Golf_NoBG.png";
import Evil from "../public/images/EvilRobot_NoBG.png";
import Hero from "../public/images/SuperReact_NoBG.png";
import Vacay from "../public/images/Vacation_NoBG.png";
import Sleeper from "../public/images/Sleeping_NoBG.png";
import Next from "../public/images/next.png"
import Back from "../public/images/back.png"
import NavIcon from "../public/images/ProjectsImages/HamBurgMenu.png"

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";

export default function About() {
  const [imgInView, setImgInView] = useState(0);
  const [nav, setNav] = useState("-right-[100%]")
  const [topNav, setTopNav] = useState("-translate-y-20");
  const [carouselFade, setCarouselFade] = useState("opacity-0");
  const [aboutFade, setAboutFade] = useState("opacity-0");
  

  const moveStyle = {
    transform: `translateX(-${imgInView}%)`,
  };

  function handleNext() {
    if (imgInView < 500) {
      setImgInView((prevState) => prevState + 100);
      console.log(imgInView);
    }
  }
  function handleBack() {
    if (imgInView > 0) {
      setImgInView((prevState) => prevState - 100);
      console.log(imgInView);
    }
  }

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
      setTimeout(() => {setCarouselFade("opacity-100")}, 800)
      setTimeout(() => {setAboutFade("opacity-100")}, 1100)
  
  } 

  return (
    <>
      <main className="bg-[#132932]
      w-full 
      max-sm:h-fit sm:h-fit h-screen 
      font-display relative text-white overflow-hidden">
      
      <header className={`${topNav} ease-in-out duration-500
      border-b-2 border-[#58c7f9]
        w-full 
        max-sm:h-10 sm:h-14 2xl:h-20 
        flex 
        justify-between 
        items-center`}>
          <Link to="/about">
            <h1 className="font-bold 
            max-sm:text-lg sm:text-2xl 
            max-sm:ml-2 sm:ml-10 
            text-[#1be783] 
            ">
              About
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
            <Link to="/technology"><h2>Technology</h2></Link>
            <Link to="/projects"><h2>Projects</h2></Link>
            <Link to="/contact"><h2>Contact</h2></Link>
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
  <div className={`sm:hidden absolute z-10 top-[.45rem] right-2 flex justify-center items-center duration-[1500ms] ease-in-out cursor-pointer`} onClick={handleOpenNav}><img className="h-5" src={NavIcon} alt="Navigation Menu Button"/></div>

<div className={`lightBlueGlow w-[22rem] h-[102%] border-2 border-[#58c7f9] bg-[#132933] absolute duration-1000 ease-in-out top-0 z-10 p-5 flex flex-col gap-10 items-center ${nav}`}>
 <div className="text-white hover:text-black hover:bg-[#91dcff] font-bold text-xl text-center w-full cursor-pointer" onClick={handleCloseNav}>X</div>

 <Link className="cursor-pointer w-[95%] hover:border-2 border-[#58c7f9]" to="/">
   <h2 className="text-5xl text-white p-4">Home</h2>
 </Link>
 <Link className="cursor-pointer w-[100%] hover:border-2 border-[#58c7f9]" to="/technology">
   <h2 className="text-5xl text-white p-4">Technology</h2>
 </Link>
 <Link className="cursor-pointer w-[95%] hover:border-2 border-[#58c7f9]" to="/projects">
   <h2 className="text-5xl text-white p-4">Projects</h2>
 </Link>
 <Link className="cursor-pointer w-[95%] hover:border-2 border-[#58c7f9]" to="/contact">
   <h2 className="text-5xl text-white p-4">Contact</h2>
 </Link>
 
</div>
        <div className="flex flex-col-reverse
        justify-evenly items-center mt-10">
          <div className="max-sm:w-11/12 sm:w-11/12 lg:w-10/12 2xl:w-8/12 min-2xl:w-7/12
          h-full">
            <section className={`${aboutFade} ease-in-out duration-500 lightBlueGlow
            max-sm:mb-5 sm:mb-5
            max-sm:p-8 p-10 
            border-2 border-[#58c7f9] text-white`}>
            <h3 className="max-sm:text-3xl text-6xl 
            mb-6 
            font-semibold">About</h3>
              <p className="max-sm:text-base text-xl 
              leading-[3rem]">
                I am a creative Front-End Developer with a passion for technology
                and accessibility with 5 years of experience. My background in
                filmmaking, education, and computer science allows my creative and
                analytical traits to blend perfectly. I am adaptable to the
                technology I use. I am proficient in HTML, CSS (and Sass), and
                Javascript (REACT JS, Node JS, and React libraries and
                frameworks). I drive to develop websites that create a navigable
                experience. When approaching challenges, I devise well-thought-out
                plans, consult my team if needed, then follow up with a
                user-friendly end product. Currently, I am looking to develop
                websites that can continue to provide great user experiences.
              </p>
            </section>
          </div>
          <section className="">
            <section className={`flex flex-col ${carouselFade} ease-in-out duration-500`}>
              <article className="text-center">
                <h2 className={`max-sm:text-2xl text-5xl`}>Choose Your Ramón</h2>
              </article>
              <div className="flex mb-5 mt-5">
                <button onClick={handleBack}>
                <img src={Back} alt="Back button"/>
                </button>
                <article className="lightBlueGlow border-2 border-[#58c7f9]
                max-sm:w-full sm:w-full lg:w-9/12 max-w-[40rem] 
                max-sm:h-fit h-[45rem] 
                overflow-hidden 
                flex 
                items-center">
                  <div
                    className="flex duration-300 ease-in-out relative"
                    style={moveStyle}
                  >
                    <img
                      className=""
                      src={Coder}
                      alt="Ramon in black polo and blue jeans holding a wireless keyboard."
                    />
                    <img
                      src={Golfer}
                      alt="Ramon in teal polo with tiny plink flamingos on it and white shorts wearing a glove on right hand and holding a golf club over his right shoulder."
                    />
                    <img
                      src={Hero}
                      alt="Ramon with his hands out wearing a black t-shirt with the React logo and a red square, black pants, and a white cape."
                    />
                    <img
                      src={Evil}
                      alt="Ramon with his head atop a white and black robot body."
                    />
                    <img
                      src={Vacay}
                      alt="Ramon wearing an unbuttoned blue button-up with a white t-shirt underneath, salmon colored swim trunks, black sandals, holding a wireless keyboard. His facial expression is annoyed."
                    />
                    <img
                      src={Sleeper}
                      alt="Ramon in a teddy bear onesie sleeping on a gaming chair holdinf a bag of chips with his right hand and a wireless keyboard with his left."
                    />
                  </div>
                </article>
                <button onClick={handleNext}>
                  <img src={Next} alt="Next button"/>
                </button>
              </div>
            </section>
          </section>
        </div>
       
      </main>
    </>
  );
}
