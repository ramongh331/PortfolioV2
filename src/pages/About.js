import Coder from "../public/images/Coder_NoBG.png";
import Golfer from "../public/images/Golf_NoBG.png";
import Evil from "../public/images/EvilRobot_NoBG.png";
import Hero from "../public/images/SuperReact_NoBG.png";
import Vacay from "../public/images/Vacation_NoBG.png";
import Sleeper from "../public/images/Sleeping_NoBG.png";

import { useState } from "react";

export default function About() {
  const [imgInView, setImgInView] = useState(0);
  const [stats, setStats] = useState("hidden");

  const moveStyle = {
    transform: `translateX(-${imgInView}%)`,
  };

  function handleMouseEnter1() {
    setStats("absolute");
  }
  function handleMouseLeave1() {
    setStats("hidden");
  }

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
      <main className="bg-yellow-1000 w-full h-screen font-display">
        <div className="h-24"></div>
        <div className="flex justify-between">
          <section className="w-3/12 h-8/12 ml-24 p-10 bg-[#362D28] text-white rounded-3xl">
            <h2 className="text-6xl mb-6 font-semibold">About</h2>
            <p className="text-2xl leading-[3rem]">
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
          <section className="mr-96">
            <section className="flex flex-col">
              <article className="text-center">
                <h2 className="text-5xl">Choose Your Ramón</h2>
              </article>
              <div className="flex">
                <button className="text-8xl font-bold" onClick={handleBack}>
                  &lt;
                </button>
                <article className="w-[60rem] h-[60rem] overflow-hidden">
                  <div
                    className="flex duration-300 ease-in-out relative"
                    style={moveStyle}
                  >
                    <img
                      className=""
                      onMouseEnter={handleMouseEnter1}
                      onMouseLeave={handleMouseLeave1}
                      src={Coder}
                      alt=""
                    />
                    <div className={`${stats} w-80 h-80 bg-blue-50`}>Stats</div>
                    <img src={Golfer} alt="" />
                    <img src={Hero} alt="" />
                    <img src={Evil} alt="" />
                    <img src={Vacay} alt="" />
                    <img src={Sleeper} alt="" />
                  </div>
                </article>
                <button className="text-8xl font-bold" onClick={handleNext}>
                  &gt;
                </button>
              </div>
            </section>
          </section>
        </div>
      </main>
    </>
  );
}
