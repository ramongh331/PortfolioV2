import Coder from "../public/images/Coder_NoBG.png";
import Golfer from "../public/images/Golf_NoBG.png";
import Evil from "../public/images/EvilRobot_NoBG.png";
import Hero from "../public/images/SuperReact_NoBG.png";
import Vacay from "../public/images/Vacation_NoBG.png";
import Sleeper from "../public/images/Sleeping_NoBG.png";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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

  const [about, setAbout] = useState(false);
  const [paragraph, setParagraph] = useState(false);
  const [player, setPlayer] = useState(false);
 

  function handleClick() {
    setAbout(!about);
    setParagraph(!paragraph);
    setPlayer(!player);
   
  }

  // --------Pointer Tracking--------------

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [pointerMenu, setPointerMenu] = useState('hidden')

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress, true);
    document.addEventListener("keydown", handleHKeyPress, true);
    document.addEventListener("keydown", handleTKeyPress, true);
    window.addEventListener("mousemove", (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    });
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === "m") {
      console.log("Your Pressed m");
      setPointerMenu('visible')
    }
  };

  let navigate = useNavigate()
  const handleHKeyPress = (event) => {
    if (event.key === "h") {
     navigate('/')
    }
  };
  const handleTKeyPress = (event) => {
    if (event.key === "t") {
     navigate('/technology')
    }
  };
// I need to add the contact page key press when I create the contact page.


  const position = {
    left: mousePosition.x + 'px',
    top: mousePosition.y + 'px'
  }

  // --------------------------------------

  return (
    <>
      <main className="bg-yellow-1000 w-full h-screen font-display relative">
      
        <div className="flex justify-center h-24 font-bold">
        <button  className="" onClick={handleClick}>English/Español</button>
        </div>
        <div className="flex justify-evenly">
          <div className="w-3/12 h-8/12">
            <section className=" p-10 bg-[#362D28] text-white rounded-3xl">
            {about ? <h2 className="text-6xl mb-6 font-semibold">Sobre Mi</h2> : <h2 className="text-6xl mb-6 font-semibold">About</h2>}
              {paragraph ? <p className="text-2xl leading-[3rem]">
              Soy un creativo desarrollador delantero (front-end) con pasión por la tecnología y la accesibilidad con 5 años de experiencia. Mi experiencia en cine, educación e informática permite que mis habilidades creativas y analíticas se mezclen perfectamente. Soy adaptable a la tecnología que uso. Soy competente en HTML, CSS (y Sass) y Javascript (REACT JS, Node JS y bibliotecas y marcos REACT). Me impulso para desarrollar sitios web que creen una experiencia navegable. Cuando me acerco a los desafíos, diseño planes bien pensados, consulto a mi equipo si es necesario y luego hago un seguimiento con un producto final fácil de usar. Actualmente, estoy buscando desarrollar sitios web que puedan continuar brindando excelentes experiencias de usuario.
              </p> : <p className="text-2xl leading-[3rem]">
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
              </p>}
            </section>
          </div>
          <section className="">
            <section className="flex flex-col">
              <article className="text-center">
              {player ? <h2 className="text-5xl">Elige tu Ramón</h2> : <h2 className="text-5xl">Choose Your Ramón</h2>}
              </article>
              <div className="flex">
                <button className="text-8xl font-bold" onClick={handleBack}>
                  &lt;
                </button>
                <article className="max-w-[60rem] h-[60rem] overflow-hidden flex items-center">
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
                  &gt;
                </button>
              </div>
            </section>
          </section>
        </div>
        <div
        style={position}
        className={`w-72 h-fit flex bg-white justify-evenly absolute ${pointerMenu} -translate-x-2/4 -translate-y-10`}
      >
        <p>Home</p>
        <p>Technology</p>
        <p>Contact</p>
      </div>
      </main>
    </>
  );
}
