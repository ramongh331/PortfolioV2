import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactMan from "../public/images/ProjectsImages/ReactManLogo.png"
import NavIcon from "../public/images/ProjectsImages/HamBurgMenu.png"
import { ExternalLink } from "react-external-link";






export default function ProjectsTest() {
    const [navMotion, setNavMotion] = useState("-translate-y-48")
    const [projectsPanel, setProjectsPanel] = useState("-bottom-52")
    const [screenOpacity, setScreenOpacity] = useState("opacity-0")
    const [screenWidth, setScreenWidth] = useState("w-[0.5%]")
    const [screenHeight, setScreenHeight] = useState("h-[0.5%]")
    const [logoFade, setLogoFade] = useState("opacity-0")
    const [navArrowFade, setNavArrowFade] = useState("opacity-0")
    const [nav, setNav] = useState("-right-[100%]")
    
    // Show Different Projects States
    const [superOpen, setSuperOpen] = useState("hidden")
    const [queRicoOpen, setQueRicoOpen] = useState("hidden")
    const [clwOpen, setCLWOpen] = useState("hidden")
    const [jobifyOpen, setJobifyOpen] = useState("hidden")

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
        setTimeout(() => {setNavArrowFade("opacity-100")}, 5000)
    } 

  const handleOpenNav = () => {
    setNav("-right-2")
  }
  const handleCloseNav = () => {
    setNav("-right-[100%]")
  }

  const handleSuperOpen = () => {
    setSuperOpen("visible")
    setQueRicoOpen("hidden")
    setCLWOpen("hidden")
    setJobifyOpen("hidden")
  }
  const handleQueRicoOpen = () => {
    setSuperOpen("hidden")
    setQueRicoOpen("visible")
    setCLWOpen("hidden")
    setJobifyOpen("hidden")
  }
  const handleCLWOpen = () => {
    setSuperOpen("hidden")
    setQueRicoOpen("hidden")
    setCLWOpen("visible")
    setJobifyOpen("hidden")
  }
  const handleJobifyOpen = () => {
    setSuperOpen("hidden")
    setQueRicoOpen("hidden")
    setCLWOpen("hidden")
    setJobifyOpen("visible")
  }
  

  return (
    <>
      <main className="w-full h-screen bg-[#132933] font-display flex justify-center items-center relative overflow-hidden">

{/* Faded Background Logo */}
      <img className={`absolute ${logoFade} 
      sm:w-[30rem] 2xl:w-[70%] 
      -translate-x-[5%] z-0 duration-[1500ms] ease-in-out `} src={ReactMan} alt="React Man Logo" />


     

{/* Largest Div */}
       <div className={`lightBlueGlow ${screenWidth} ${screenHeight} border-2 border-[#58c7f9] ${screenOpacity} duration-[1500ms] ease-in-out flex justify-center items-start`}>

{/* Projects Info */}         
          <div className={`w-[90%] h-[86%] flex flex-col items-center justify-center ${navArrowFade} duration-[1500ms] ease-in-out absolute`}>
            <div className="border-2 border-[#58c7f9] 
            sm:w-[90%] 2xl:w-[80%] 
            sm:h-fit lg:h-[40%] 2xl:h-fit min-[1920px]:h-[50%]
            overflow-auto">
              <img className={`w-full ${superOpen} `} src="https://i.imgur.com/cXvJHdf.png" alt="Home Page of Super Website"/>
              <img className={`w-full ${queRicoOpen} `} src="https://i.imgur.com/RU3HQ2c.png" alt="Home Page of Que Rico Website"/>
              <img className={`w-full ${clwOpen} `} src="https://i.imgur.com/bPwqnek.png" alt="Home Page of Cover Letter Writer Website"/>
              <img className={`w-full ${jobifyOpen} `} src="https://i.imgur.com/Rfbv60O.png" alt="Home Page of Jobify Website"/>
            </div>
            <div className="border-x-2 border-b-2 border-[#58c7f9] 
            sm:w-[90%] 2xl:w-[80%] 
            sm:h-[13rem] lg:h-[10rem] 2xl:h-[20rem] min-[1920px]:h-[15rem]
            overflow-auto">
              {/* Super */}
              <div className={`w-full h-full text-white px-4 ${superOpen}`}>
                <div className="w-full h-fit  flex justify-between items-center">
                  <p className="text-5xl mb-2 mt-2">Super</p>
                  <div className="w-48 flex justify-between box-border">
                    <ExternalLink href="https://super-app-nine.vercel.app/" target="_blank" className="hover:bg-[#58c7f9] hover:text-black px-2"><button>Live Site</button></ExternalLink>
                    <ExternalLink href="https://github.com/ramongh331/super-frontend" target="_blank" className="hover:bg-[#58c7f9] hover:text-black px-2"><button>GitHub</button></ExternalLink>
                  </div>
                </div>
                <p className="text-2xl mb-5">Next.js | Next-Auth | Tailwind CSS | MongoDB | MongoClient</p>
                <p className="text-xl">Super is made to be a social platform where users can create a profile as a super being, view, edit, and delete their profiles, and view other people's profiles. The website uses Google Provider for easy sign-in with Gmail accounts. Although messaging and image uploads are not yet available, they will be added in the future. The website ensures user security by only displaying edit and delete buttons on a user's own profile. Super was made for superhero enthusiasts to connect and share their love for all things super.</p>
              </div>
              {/* ¡Qué Rico! Personal Cookbook */}
              <div className={`w-full h-full text-white px-4 ${queRicoOpen}`}>
              <div className="w-full h-fit  flex justify-between items-center">
                  <p className="text-5xl mb-2 mt-2">¡Qué Rico!</p>
                  <div className="w-48 flex justify-between box-border">
                    <ExternalLink href="https://allergy-free-cookbook-9efx.onrender.com/" target="_blank" className="hover:bg-[#58c7f9] hover:text-black px-2"><button>Live Site</button></ExternalLink>
                    <ExternalLink href="https://github.com/ramongh331/Allergy-Free-Cookbook" target="_blank" className="hover:bg-[#58c7f9] hover:text-black px-2"><button>GitHub</button></ExternalLink>
                  </div>
                </div>
                <p className="text-2xl mb-5">Javascript | CSS | Express | EJS | MongoDB | Render.com</p>
                <p className="text-xl">¡Qué Rico!, the personal cookbook allows users to input recipes into their account. Users will be able to add the recipe's name, level of difficulty, ingredients, and steps, and they can check off boxes to indicate which allergens are not included.</p>
              </div>
              {/* Cover Letter Writer*/}
              <div className={`w-full h-full text-white px-4 ${clwOpen}`}>
              <div className="w-full h-fit  flex justify-between items-center">
                  <p className="text-5xl mb-2 mt-2">Cover Letter Writer</p>
                  <div className="w-48 flex justify-between box-border">
                    <ExternalLink href="https://cover-letter-writer.vercel.app/" target="_blank" className="hover:bg-[#58c7f9] hover:text-black px-2"><button>Live Site</button></ExternalLink>
                    <ExternalLink href="https://github.com/ramongh331/coverLetter-frontend" target="_blank" className="hover:bg-[#58c7f9] hover:text-black px-2"><button>GitHub</button></ExternalLink>
                  </div>
                </div>
                <p className="text-2xl mb-5">React | Javascript | Tailwind CSS | CSS | Vercel.com</p>
                <p className="text-xl">The Cover Letter Writer is a full-stack app I built using Python, Django, React, and Tailwind CSS. It allows users to generate a cover letter from their input. The backend is hosted on Render.com and the frontend on Vercel.com. A main challenge was setting the height using Tailwind on the show page, which I resolved by adjusting the height setting based on screen size. A lesson I learned was to use conditional background colors based on page URLs to avoid hard coding colors and height. Please allow time for the backend to turn on.</p>
              </div>
              {/* Cover Letter Writer*/}
              <div className={`w-full h-full text-white px-4 ${jobifyOpen}`}>
              <div className="w-full h-fit  flex justify-between items-center">
                  <p className="text-5xl mb-2 mt-2">Jobify</p>
                  <div className="w-48 flex justify-between box-border">
                    <ExternalLink href="https://effortless-cajeta-61b011.netlify.app/" target="_blank" className="hover:bg-[#58c7f9] hover:text-black px-2"><button>Live Site</button></ExternalLink>
                    <ExternalLink href="https://github.com/ramongh331/Jobify_Frontend" target="_blank" className="hover:bg-[#58c7f9] hover:text-black px-2"><button>GitHub</button></ExternalLink>
                  </div>
                </div>
                <p className="text-2xl mb-5">React | HTML | CSS | Javascript | Express</p>
                <p className="text-xl">A full CRUD app that allows users to enter in specific job application information and save it in one central location.</p>
              </div>
            </div>
          </div>
       
       </div>

{/* Navigation */}
       <div className={`lightBlueGlow w-[101%] bg-[#132933] border-2 border-[#58c7f9] absolute top-0 ${navMotion} duration-1000 ease-in-out flex justify-center items-center`}>
       <header className={`
        w-full 
        max-sm:h-10 sm:h-20 2xl:h-20 
        flex 
        justify-between 
        items-center`}>
          <Link to="/projects">
            <h1 className="font-bold 
            max-sm:text-lg sm:text-2xl 
            max-sm:ml-2 sm:ml-10 
            text-[#1be783]
            ">
              Projects
            </h1>
          </Link>
          <section className="max-sm:hidden sm:w-[20rem] lg:w-[25rem] xl:w-[25rem] 2xl:w-[35rem]
          flex 
          justify-between
          items-center 
          max-sm:text-xs sm:text-base 2xl:text-xl 
          font-semibold 
          text-white 
          mx-5">
            <Link to="/"><h2>Home</h2></Link>
            <Link to="/about"><h2>About</h2></Link>
            <Link to="/technology"><h2>Technology</h2></Link>
            <Link to="/contact"><h2>Contact</h2></Link>
          </section>
          <section className="max-sm:hidden max-sm:mr-2 sm:mr-10">
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
       </div>
  {/* Max Small (Mobile) Nav */}
  <div className={`sm:hidden absolute z-10 top-[.45rem] right-2 flex justify-center items-center ${navArrowFade} duration-[1500ms] ease-in-out cursor-pointer`} onClick={handleOpenNav}><img className="h-5" src={NavIcon} alt="Navigation Menu Button"/></div>

<div className={`lightBlueGlow w-[22rem] h-[102%] border-2 border-[#58c7f9] bg-[#132933] absolute duration-1000 ease-in-out z-10 p-5 flex flex-col gap-10 items-center ${nav}`}>
 <div className="text-white hover:text-black hover:bg-[#91dcff] font-bold text-xl text-center w-full cursor-pointer" onClick={handleCloseNav}>X</div>

 <Link className="cursor-pointer w-[95%] hover:border-2 border-[#58c7f9]" to="/">
   <h2 className="text-5xl text-white p-4">Home</h2>
 </Link>
 <Link className="cursor-pointer w-[95%] hover:border-2 border-[#58c7f9]" to="/about">
   <h2 className="text-5xl text-white p-4">About</h2>
 </Link>
 <Link className="cursor-pointer w-[100%] hover:border-2 border-[#58c7f9]" to="/technology">
   <h2 className="text-5xl text-white p-4">Technology</h2>
 </Link>
 <Link className="cursor-pointer w-[95%] hover:border-2 border-[#58c7f9]" to="/contact">
   <h2 className="text-5xl text-white p-4">Contact</h2>
 </Link>
 
</div>


{/* Bottom Projects Panel */}
       <div className={`lightBlueGlow flex w-[102%] 
       sm:h-[8rem] lg:h-[5rem] 2xl:h-[10rem] 
       border-2 border-[#58c7f9] bg-[#132933] absolute ${projectsPanel} duration-1000 ease-in-out`}>
        <div className="w-full flex text-white justify-around items-center  
        sm:text-2xl 2xl:text-5xl
        text-center">
          <h3 className="px-7 py-2 hover:border-2 border-[#58c7f9] cursor-pointer" onClick={handleSuperOpen}>Super</h3>
          <h3 className="px-7 py-2 hover:border-2 border-[#58c7f9] cursor-pointer" onClick={handleQueRicoOpen}>¡Qué Rico!</h3>
          <h3 className="px-7 py-2 hover:border-2 border-[#58c7f9] cursor-pointer" onClick={handleCLWOpen}>Cover Letter Writer</h3>
          <h3 className="px-7 py-2 hover:border-2 border-[#58c7f9] cursor-pointer" onClick={handleJobifyOpen}>Jobify</h3>
        </div>
       </div>

      </main>
    </>
  );
}
