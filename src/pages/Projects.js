import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactMan from "../public/images/ProjectsImages/ReactManLogo.png"
import NavIcon from "../public/images/back.png"






export default function ProjectsTest() {
    const [navMotion, setNavMotion] = useState("-translate-y-48")
    const [projectsPanel, setProjectsPanel] = useState("-bottom-52")
    const [screenOpacity, setScreenOpacity] = useState("opacity-0")
    const [screenWidth, setScreenWidth] = useState("w-[0.5%]")
    const [screenHeight, setScreenHeight] = useState("h-[0.5%]")
    const [logoFade, setLogoFade] = useState("opacity-0")
    const [navArrowFade, setNavArrowFade] = useState("opacity-0")
    const [nav, setNav] = useState("-right-[20%]")

    useEffect(() => {
      if (document.readyState === "complete") {
        onLoad();
      } else {
        window.addEventListener("load", onLoad)
      }
    }, [])
  
    const onLoad = () => {
        setTimeout(() => {setScreenOpacity("opacity-100")}, 500)
        setTimeout(() => {setScreenWidth("w-[95%]")}, 1000)
        setTimeout(() => {setScreenHeight("h-[95%]")}, 2200)
        setTimeout(() => {setNavMotion("-translate-y-2")}, 3400)
        setTimeout(() => {setProjectsPanel("-bottom-2")}, 3400)
        setTimeout(() => {setLogoFade("opacity-10")}, 4000)
        setTimeout(() => {setNavArrowFade("opacity-100")}, 4000)
    } 

  const handleOpenNav = () => {
    setNav("-right-2")
  }
  const handleCloseNav = () => {
    setNav("-right-[20%]")
  }
  

  return (
    <>
      <main className="w-full h-screen bg-[#132933] flex justify-center items-center relative overflow-hidden">

{/* Faded Background Logo */}
      <img className={`absolute ${logoFade} w-[40rem] -translate-x-[5%] z-0 duration-[1500ms] ease-in-out `} src={ReactMan} alt="React Man Logo" />

{/* Largest Div */}
       <div className={`lightBlueGlow ${screenWidth} ${screenHeight} border-2 border-[#58c7f9] ${screenOpacity}  duration-[1500ms] ease-in-out`}></div>

{/* Top Left Side Panel */}
       <div className={`lightBlueGlow w-[30rem] h-[10rem] bg-[#132933] border-2 border-[#58c7f9] absolute top-0 left-0 -skew-x-[30deg] -translate-x-12 ${navMotion} duration-1000 ease-in-out`}></div>

{/* Navigation */}
       <div className={`absolute z-10 top-[40%] right-0 flex justify-center items-center ${navArrowFade} duration-[1500ms] ease-in-out`} onClick={handleOpenNav}><img className="h-10" src={NavIcon} alt="Navigation Menu Button"/></div>

       <div className={`lightBlueGlow w-[22rem] h-[102%] border-2 border-[#58c7f9] bg-[#132933] absolute duration-1000 ease-in-out z-10 p-5 flex flex-col gap-10 items-center ${nav}`}>
        <div className="text-[#91dcff] hover:text-black hover:bg-[#91dcff] font-bold text-xl text-center w-full " onClick={handleCloseNav}>X</div>

        <Link className="cursor-pointer w-[95%] hover:border-2 border-[#58c7f9]" to="/">
          <h2 className="tektur text-5xl text-[#91dcff] p-4">Home</h2>
        </Link>
        <Link className="cursor-pointer w-[95%] hover:border-2 border-[#58c7f9]" to="/about">
          <h2 className="tektur text-5xl text-[#91dcff] p-4">About</h2>
        </Link>
        <Link className="cursor-pointer w-[100%] hover:border-2 border-[#58c7f9]" to="/technology">
          <h2 className="tektur text-5xl text-[#91dcff] p-4">Technology</h2>
        </Link>
        <Link className="cursor-pointer w-[95%] hover:border-2 border-[#58c7f9]" to="/contact">
          <h2 className="tektur text-5xl text-[#91dcff] p-4">Contact</h2>
        </Link>
        
       </div>

{/* Bottom Projects Panel */}
       <div className={`lightBlueGlow flex w-[102%] h-[10rem] border-2 border-[#58c7f9] bg-[#132933] absolute ${projectsPanel} duration-1000 ease-in-out`}>
        <div className="w-full tektur flex text-5xl text-[#91dcff] justify-around items-center ">
          <h3 className="px-7 py-2 hover:border-2 border-[#58c7f9]">Super</h3>
          <h3 className="px-7 py-2 hover:border-2 border-[#58c7f9]">Que Rico</h3>
          <h3 className="px-7 py-2 hover:border-2 border-[#58c7f9]">Cover Letter Writer</h3>
          <h3 className="px-7 py-2 hover:border-2 border-[#58c7f9]">Jobify</h3>
        </div>
       </div>

      </main>
    </>
  );
}
