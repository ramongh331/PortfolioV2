import Coder from "../public/images/Coder_NoBG.png";
import Golfer from "../public/images/Golf_NoBG.png";
import Evil from "../public/images/EvilRobot_NoBG.png";
import Hero from "../public/images/SuperReact_NoBG.png";
import Vacay from "../public/images/Vacation_NoBG.png";
import Sleeper from "../public/images/Sleeping_NoBG.png";
import Next from "../public/images/next.png"
import Back from "../public/images/back.png"

import { useState } from "react";
import { Link } from "react-router-dom";

export default function About() {
  const [imgInView, setImgInView] = useState(0);

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

  return (
    <>
      <main className="bg-yellow-1000 w-full h-screen font-display relative">
      
        <nav className="bg-[#362D28] w-full h-14">
          <section className="mx-auto flex justify-between items-center w-[40%] h-full text-xl text-white">
            <Link to="/">
              <h2>Home</h2>
            </Link>
            <Link to="/technology">
              <h2>Technology</h2>
            </Link>
            <Link to="/projects">
              <h2>Projects</h2>
            </Link>
            <Link to="/contact">
              <h2>Contact</h2>
            </Link>
          </section>
        </nav>
        
        <div className="flex justify-evenly items-center mt-10">
          <div className="w-[45rem] h-full">
            <section className=" p-10 bg-[#362D28] text-white rounded-3xl">
            <h3 className="text-6xl mb-6 font-semibold">About</h3>
              <p className="text-xl leading-[3rem]">
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
            <section className="flex flex-col">
              <article className="text-center">
             <h2 className="text-5xl">Choose Your Ramón</h2>
              </article>
              <div className="flex">
                <button className="text-8xl font-bold" onClick={handleBack}>
                <img src={Back} alt="Back button"/>
                </button>
                <article className="max-w-[40rem] h-[45rem] overflow-hidden flex items-center">
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
                <button className="text-8xl font-bold" onClick={handleNext}>
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
