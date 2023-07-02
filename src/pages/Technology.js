import { useRef, useEffect } from "react";
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
      <main className="bg-gray-800 w-full h-full relative">
        <header className="bg-gradient-to-b from-gray-800 w-full h-28 flex justify-between z-10 absolute">
          <h1 className="font-bold text-2xl ml-10 text-[#1be783] mt-6">
            Skills+
          </h1>
          <section className="w-[35rem] flex justify-between text-xl font-semibold text-white mt-6">
            <h2>Home</h2>
            <h2>About</h2>
            <h2>Projects</h2>
            <h2>Contact</h2>
          </section>
          <section className="mr-10 mt-6">
            <div className="w-10 h-10 rounded-3xl text-md flex justify-center items-center font-semibold border-white border-2 bg-blue-300">
              RH
            </div>
          </section>
        </header>
        <section className="w-full h-[45rem] overflow-hidden relative">
          <video className="" src={Skydive} ref={videoEl} muted/>
          <div className=" absolute bottom-0 w-full h-28 bg-gradient-to-t from-gray-800"></div>
          <img className="absolute bottom-20 w-[32rem] ml-28" src={Title} alt="Frontiers of Front End"/>
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
