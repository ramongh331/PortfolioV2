import Coder from "../public/images/Coder_NoBG.png";
import Golfer from "../public/images/Golf_NoBG.png";
import Evil from "../public/images/EvilRobot_NoBG.png";
import Hero from "../public/images/SuperReact_NoBG.png";
import Vacay from "../public/images/Vacation_NoBG.png";
import Sleeper from "../public/images/Sleeping_NoBG.png";
import HKey from "../public/images/keyboard_key_h.png";
import NKey from "../public/images/keyboard_key_n.png";
import TKey from "../public/images/keyboard_key_t.png";
import PKey from "../public/images/keyboard_key_p.png";
import CKey from "../public/images/keyboard_key_c.png";
import ESCKey from "../public/images/keyboard_key_esc.png";
import Next from "../public/images/next.png"
import Back from "../public/images/back.png"

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
    document.addEventListener("keydown", handleNKeyPress, true);
    document.addEventListener("keydown", handleEscKeyPress, true);
    document.addEventListener("keydown", handleHKeyPress, true);
    document.addEventListener("keydown", handleTKeyPress, true);
    document.addEventListener("keydown", handlePKeyPress, true);
    document.addEventListener("keydown", handleCKeyPress, true);
    window.addEventListener("mousemove", (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    });
  }, []);

  const handleNKeyPress = (event) => {
    if (event.key === "n") {
      setPointerMenu('visible')
    }
  };
  const handleEscKeyPress = (event) => {
    if (event.key === "Escape") {
      setPointerMenu('hidden')
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
  const handlePKeyPress = (event) => {
    if (event.key === "p") {
     navigate('/projects')
    }
  };
  const handleCKeyPress = (event) => {
    if (event.key === "c") {
     navigate('/contact')
    }
  };
// I need to add the contact & Projects page key press when I create the both pages.


  const position = {
    left: mousePosition.x + 'px',
    top: mousePosition.y + 'px'
  }

  // --------------------------------------

  return (
    <>
      <main className="bg-yellow-1000 w-full h-screen font-display relative">
      
        <div className="flex flex-col justify-center items-center h-24 font-bold">
        <p className="flex items-center">Press <img className="w-6 mx-2" src={NKey} alt="N keyboard key"/> to open Navigation & <img className="w-8 mx-2" src={ESCKey} alt="escape keyboard key"/> to close Navigtation</p>
        <button onClick={handleClick}>English/Español</button>
        </div>
        <div className="flex justify-evenly items-center">
          <div className="w-[45rem] h-full">
            <section className=" p-10 bg-[#362D28] text-white rounded-3xl">
            {about ? <h3 className="text-6xl mb-6 font-semibold">Sobre Mi</h3> : <h3 className="text-6xl mb-6 font-semibold">About</h3>}
              {paragraph ? <p className="text-xl leading-[3rem]">
              Soy un creativo desarrollador delantero (front-end) con pasión por la tecnología y la accesibilidad con 5 años de experiencia. Mi experiencia en cine, educación e informática permite que mis habilidades creativas y analíticas se mezclen perfectamente. Soy adaptable a la tecnología que uso. Soy competente en HTML, CSS (y Sass) y Javascript (REACT JS, Node JS y bibliotecas y marcos REACT). Me impulso para desarrollar sitios web que creen una experiencia navegable. Cuando me acerco a los desafíos, diseño planes bien pensados, consulto a mi equipo si es necesario y luego hago un seguimiento con un producto final fácil de usar. Actualmente, estoy buscando desarrollar sitios web que puedan continuar brindando excelentes experiencias de usuario.
              </p> : <p className="text-xl leading-[3rem]">
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
        <div
        style={position}
        className={`w-[25rem] h-fit flex text-[#362D28] bg-white justify-evenly absolute ${pointerMenu} -translate-x-2/4 -translate-y-24 p-2 rounded-xl`}
      >
        <div className="flex flex-col items-center">
          <h2 className="font-bold">Home</h2>
          <img className="w-10" src={HKey} alt="H keyboard key"/>
          </div>
        <div className="flex flex-col items-center">
          <h2 className="font-bold">Technology</h2>
          <img className="w-10" src={TKey} alt="T keyboard key"/>
          </div>
        <div className="flex flex-col items-center">
          <h2 className="font-bold">Projects</h2>
          <img className="w-10" src={PKey} alt="P keyboard key"/>
          </div>
        <div className="flex flex-col items-center">
          <h2 className="font-bold">Contact</h2>
          <img className="w-10" src={CKey} alt="C keyboard key"/>
          </div>
        
      </div>
      </main>
    </>
  );
}
