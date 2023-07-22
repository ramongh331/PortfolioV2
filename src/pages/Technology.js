import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import DesignRow from "../components/DesignTools";
import FrameworksRow from "../components/Frameworks";
import LanguagesRow from "../components/Languages";
import Skydive from "../public/videos/Skydiving.mp4"
import Title from "../public/images/VidTitle.png"

export default function Technology() {

  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);
  
  return (
    <>
      <main className="bg-[#132932] w-full h-full relative">
        <header className="bg-gradient-to-b from-[#132932] 
        w-full 
        max-sm:h-10 sm:h-14 2xl:h-20 
        flex 
        justify-between 
        items-center
        z-10 fixed">
          <Link to="/technology">
            <h1 className="font-bold 
            max-sm:text-lg sm:text-2xl 
            max-sm:ml-2 sm:ml-10 
            text-[#1be783] 
            ">
              Skills+
            </h1>
          </Link>
          <section className="max-sm:w-[25rem] sm:w-[20rem] xl:w-[25rem] 2xl:w-[35rem]
          flex 
          justify-between
          items-center 
          max-sm:text-xs sm:text-base 2xl:text-xl 
          font-semibold 
          text-white 
          mx-5">
            <Link to="/"><h2>Home</h2></Link>
            <Link to="/about"><h2>About</h2></Link>
            <Link to="/projects"><h2>Projects</h2></Link>
            <Link to="/contact"><h2>Contact</h2></Link>
          </section>
          <section className="max-sm:mr-2 sm:mr-10">
          <ExternalLink
            href="https://docs.google.com/document/d/1MJJ1Zp0emiOn1I9aolUsWSZ4OC0Z7B-AgSi0rxy2bb4/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
              <div className="max-sm:w-7 sm:w-10 
              max-sm:h-7 sm:h-10 
              max-sm:text-xs sm:text-md
              rounded-3xl flex justify-center items-center font-semibold border-white border-2 bg-blue-300 text-black">
                RH
              </div>
            </ExternalLink>
          </section>
        </header>
        <section className="w-full 
        max-sm:h-full sm:h-full lg:h-[30rem] 2xl:h-[45rem] 
        overflow-hidden 
        relative">
          <video className="" src={Skydive} ref={videoEl} muted playsInline/>
          <div className="absolute bottom-0 w-full h-28 bg-gradient-to-t from-[#132932]"></div>
          <img className="absolute 
          max-sm:bottom-5 sm:bottom-10 2xl:bottom-20 
          max-sm:w-[9rem] sm:w-[15rem] lg:w-[20rem] 2xl:w-[32rem] 
          max-sm:ml-5 sm:ml-20 xl:ml-24 2xl:ml-28" src={Title} alt="Frontiers of Front End"/>
        </section>
        <section className="flex flex-col">
          <FrameworksRow />
          <LanguagesRow />
          <DesignRow />
        </section>
      </main>
    </>
  );
}
