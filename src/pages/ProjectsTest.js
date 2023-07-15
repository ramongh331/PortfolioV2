import { useState, useEffect } from "react";






export default function ProjectsTest() {
    const [navMotion, setNavMotion] = useState("-translate-y-48")
    const [screen, setScreen] = useState("opacity-0")

    useEffect(() => {
        window.addEventListener("load", onLoad)
    }, [])
  
    const onLoad = () => {
        setTimeout(() => {setScreen("opacity-100")}, 500)
        setTimeout(() => {setNavMotion("-translate-y-2")}, 1500)
    } 
  

  return (
    <>
      <main className="w-full h-screen bg-[#132933] flex justify-center items-center relative overflow-hidden">

       <div className={`lightBlueGlow w-[95%] h-[95%] border-2 border-[#58c7f9] ${screen} duration-[1500ms] ease-in-out`}></div>

       <div className={`lightBlueGlow w-[30rem] h-[10rem] bg-[#132933]  border-2 border-[#58c7f9] absolute top-0 left-0 -skew-x-[30deg] -translate-x-12 ${navMotion} duration-1000 ease-in-out`}></div>

       <div className={`lightBlueGlow w-[30rem] h-[10rem] bg-[#132933]  border-2 border-[#58c7f9] absolute top-0 right-0 skew-x-[30deg] translate-x-12 ${navMotion} duration-1000 ease-in-out`}></div>

      </main>
    </>
  );
}
