import { useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import Static from "../public/images/static.gif";
import GameBoy from "../public/images/ProjectsImages/GameBoyColor.png";
import Jobify from "../public/images/ProjectsImages/JobifyCart.png";
import CoverLetter from "../public/images/ProjectsImages/CoverLetterWriterCart.png";
import QueRico from "../public/images/ProjectsImages/QueRicoCart.png";
import Super from "../public/images/ProjectsImages/SuperCart.png";
import SuperScreen from "../public/images/ProjectsImages/SuperScreen.png";
import QueRicoScreen from "../public/images/ProjectsImages/QueRicoScreen.png";

export default function Projects() {
  const [enterCart4, setEnterCart4] = useState("hover:top-0 duration-500 ease-in-out");
  const [turnONCart4, setTurnONCart4] = useState("");

  const [enterCart3, setEnterCart3] = useState("hover:top-[3rem] duration-500 ease-in-out");
  const [turnONCart3, setTurnONCart3] = useState("");

  const [enterCart2, setEnterCart2] = useState("hover:top-[6rem] duration-500 ease-in-out");
  const [turnONCart2, setTurnONCart2] = useState("");

  const [enterCart1, setEnterCart1] = useState("hover:top-[9rem] duration-500 ease-in-out");
  const [turnONCart1, setTurnONCart1] = useState("");

  const [bButton, setBButton] = useState("")
  const [aButton, setAButton] = useState("")

  function handleCart4Click() {
    setEnterCart4(
      "translate-y-[24.5rem] translate-x-[39rem] duration-[1000ms] ease-in-out"
    );
    setEnterCart3("hover:top-0 duration-500 ease-in-out");
    setEnterCart2("hover:top-0 duration-500 ease-in-out");
    setEnterCart1("hover:top-0 duration-500 ease-in-out");
    setTimeout(() => {
      setTurnONCart4("z-10");
    }, 2500);
    setTimeout(() => {
      setTurnONCart3("z-0");
    }, 2500);
    setTimeout(() => {
      setTurnONCart2("z-0");
    }, 2500);
    setTimeout(() => {
      setTurnONCart1("z-0");
    }, 2500);
  }
  function handleCart3Click() {
    setEnterCart3(
      "translate-y-[24rem] translate-x-[38rem] duration-[1000ms] ease-in-out"
    );
    setEnterCart4("hover:top-0 duration-500 ease-in-out");
    setEnterCart2("hover:top-0 duration-500 ease-in-out");
    setEnterCart1("hover:top-0 duration-500 ease-in-out");
    setTimeout(() => {
      setTurnONCart3("z-10");
    }, 2500);
    setTimeout(() => {
      setTurnONCart4("z-0");
    }, 2500);
    setTimeout(() => {
      setTurnONCart2("z-0");
    }, 2500);
    setTimeout(() => {
      setTurnONCart1("z-0");
    }, 2500);
  }
  function handleCart2Click() {
    setEnterCart2(
      "-translate-y-[11rem] -translate-x-[60rem] duration-[1000ms] ease-in-out z-0"
    );
    setEnterCart3("hover:top-0 duration-500 ease-in-out");
    setEnterCart4("hover:top-0 duration-500 ease-in-out");
    setEnterCart1("hover:top-0 duration-500 ease-in-out");
    setTimeout(() => {
      setTurnONCart2("z-20");
    }, 2500);
    setTimeout(() => {
      setTurnONCart3("z-10");
    }, 2500);
    setTimeout(() => {
      setTurnONCart4("z-10");
    }, 2500);
    setTimeout(() => {
      setTurnONCart1("z-10");
    }, 2500);
    setAButton("https://allergy-free-cookbook-9efx.onrender.com/")
    setBButton("https://github.com/ramongh331/Allergy-Free-Cookbook")
  }
  function handleCart1Click() {
    setEnterCart1(
      "-translate-y-[14rem] -translate-x-[60rem] duration-[1000ms] ease-in-out z-0"
    );
    setEnterCart2("hover:top-0 duration-500 ease-in-out");
    setEnterCart3("hover:top-0 duration-500 ease-in-out");
    setEnterCart4("hover:top-0 duration-500 ease-in-out");
    setTimeout(() => {
      setTurnONCart1("z-20");
    }, 2500);
    setTimeout(() => {
      setTurnONCart2("z-10");
    }, 2500);
    setTimeout(() => {
      setTurnONCart3("z-10");
    }, 2500);
    setTimeout(() => {
      setTurnONCart4("z-10");
    }, 2500);
    setAButton("https://super-app-nine.vercel.app/")
    setBButton("https://github.com/ramongh331/super-frontend")
  }
  function handleReset() {
    setEnterCart1("hover:top-0 duration-500 ease-in-out");
    setEnterCart2("hover:top-0 duration-500 ease-in-out");
    setEnterCart3("hover:top-0 duration-500 ease-in-out");
    setEnterCart4("hover:top-0 duration-500 ease-in-out");
    setTimeout(() => {
      setTurnONCart1("z-0");
    }, 300);
    setTimeout(() => {
      setTurnONCart2("z-0");
    }, 300);
    setTimeout(() => {
      setTurnONCart3("z-0");
    }, 300);
    setTimeout(() => {
      setTurnONCart4("z-0");
    }, 300);
  }

  

  return (
    <>
      <main className="w-full h-screen">
        <h2>Projects</h2>
        <div className="w-full h-14 bg-green-300 text-center">
          <p className="text-3xl">Still Under construction</p>
        </div>

        <div className="w-full h-full flex justify-around bg-blue-100">
          <div className="w-11/12 h-fit bg-gray-300 border-black border-2 relative">
{/* GameBoy */}
            <div className="w-fit h-fit relative">
              <img
                className="relative z-10"
                src={GameBoy}
                alt="Yellow Gameboy Color Device"
              />
              <ExternalLink className="absolute w-20 h-20  rounded-full top-[31.15rem] right-[7.35rem] z-20 hover:border-8 border-red-500" href={bButton} target="_blank">
                <span></span>
              </ExternalLink>
              <ExternalLink className="absolute w-20 h-20  rounded-full top-[29.45rem] right-[1.92rem] z-20 hover:border-8 border-red-500" href={aButton} target="_blank">
                <span></span>
              </ExternalLink>

{/* Game Screens */}
              <img
                className={`absolute ${turnONCart1} w-[16rem] h-[14.3rem] top-[5.1rem] left-[7rem]`}
                src={SuperScreen}
                alt=""
              />
              <img
                className={`absolute ${turnONCart2} w-[16rem] h-[14.3rem] top-[5.1rem] left-[7rem]`}
                src={QueRicoScreen}
                alt=""
              />
              <div className="w-[16rem] h-[14.3rem] absolute top-[5.1rem] left-[7rem] duration-500 ease-in-out z-10">
                <img className="w-full h-full" src={Static} alt="" />
              </div>
            </div>

{/* Cartridges */}

            <img
              className={`absolute top-[6rem] right-[32rem] ${enterCart4}`}
              src={CoverLetter}
              alt=""
            />
            <img
              className={`absolute top-[9rem] right-[28rem] ${enterCart3}`}
              src={Jobify}
              alt=""
            />
            <img
              className={`absolute top-[12rem] right-[24rem] ${enterCart2}`}
              src={QueRico}
              alt=""
              onClick={handleCart2Click}
            />
            <img
              className={`absolute top-[15rem] right-[20rem] ${enterCart1}`}
              src={Super}
              alt=""
              onClick={handleCart1Click}
            />

            {/* Example TV */}
            {/* <img className={`absolute ${turnONCart4} bottom-12 left-4`}></img>
                <div className={`absolute ${turnONCart3} bottom-12 left-4`}></div>
                <div className={`absolute ${turnONCart2} bottom-12 left-4`}></div> */}

            {/* <button className={`border-2 border-black px-2 absolute bottom-2 right-60`} onClick={handleReset}>Reset</button> */}
          </div>
        </div>
      </main>
    </>
  );
}
