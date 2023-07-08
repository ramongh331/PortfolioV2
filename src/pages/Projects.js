import { useState } from "react"
import Static from "../public/images/static.gif"


export default function Projects(){
    const [enterCart5, setEnterCart5] = useState("hover:top-0 duration-500 ease-in-out")
    const [turnONCart5, setTurnONCart5] = useState("")
    
    const [enterCart4, setEnterCart4] = useState("hover:top-0 duration-500 ease-in-out")
    const [turnONCart4, setTurnONCart4] = useState("")
    
    const [enterCart3, setEnterCart3] = useState("hover:top-0 duration-500 ease-in-out")
    const [turnONCart3, setTurnONCart3] = useState("")
    
    const [enterCart2, setEnterCart2] = useState("hover:top-0 duration-500 ease-in-out")
    const [turnONCart2, setTurnONCart2] = useState("")
    
    const [enterCart1, setEnterCart1] = useState("hover:top-0 duration-500 ease-in-out")
    const [turnONCart1, setTurnONCart1] = useState("")

    function handleCart5Click(){
        setEnterCart5("translate-y-[25rem] translate-x-[40rem] duration-[1000ms] ease-in-out")
        setEnterCart4("hover:top-0 duration-500 ease-in-out")
        setEnterCart3("hover:top-0 duration-500 ease-in-out")
        setEnterCart2("hover:top-0 duration-500 ease-in-out")
        setEnterCart1("hover:top-0 duration-500 ease-in-out")
        setTimeout(() => {setTurnONCart5("z-10")}, 2500)
        setTimeout(() => {setTurnONCart4("z-0")}, 2500)
        setTimeout(() => {setTurnONCart3("z-0")}, 2500)
        setTimeout(() => {setTurnONCart2("z-0")}, 2500)
        setTimeout(() => {setTurnONCart1("z-0")}, 2500)
    }
    function handleCart4Click(){
        setEnterCart4("translate-y-[24.5rem] translate-x-[39rem] duration-[1000ms] ease-in-out")
        setEnterCart5("hover:top-0 duration-500 ease-in-out")
        setEnterCart3("hover:top-0 duration-500 ease-in-out")
        setEnterCart2("hover:top-0 duration-500 ease-in-out")
        setEnterCart1("hover:top-0 duration-500 ease-in-out")
        setTimeout(() => {setTurnONCart4("z-10")}, 2500)
        setTimeout(() => {setTurnONCart5("z-0")}, 2500)
        setTimeout(() => {setTurnONCart3("z-0")}, 2500)
        setTimeout(() => {setTurnONCart2("z-0")}, 2500)
        setTimeout(() => {setTurnONCart1("z-0")}, 2500)
    }
    function handleCart3Click(){
        setEnterCart3("translate-y-[24rem] translate-x-[38rem] duration-[1000ms] ease-in-out")
        setEnterCart4("hover:top-0 duration-500 ease-in-out")
        setEnterCart5("hover:top-0 duration-500 ease-in-out")
        setEnterCart2("hover:top-0 duration-500 ease-in-out")
        setEnterCart1("hover:top-0 duration-500 ease-in-out")
        setTimeout(() => {setTurnONCart3("z-10")}, 2500)
        setTimeout(() => {setTurnONCart4("z-0")}, 2500)
        setTimeout(() => {setTurnONCart5("z-0")}, 2500)
        setTimeout(() => {setTurnONCart2("z-0")}, 2500)
        setTimeout(() => {setTurnONCart1("z-0")}, 2500)
    }
    function handleCart2Click(){
        setEnterCart2("translate-y-[23.5rem] translate-x-[37rem] duration-[1000ms] ease-in-out")
        setEnterCart3("hover:top-0 duration-500 ease-in-out")
        setEnterCart4("hover:top-0 duration-500 ease-in-out")
        setEnterCart5("hover:top-0 duration-500 ease-in-out")
        setEnterCart1("hover:top-0 duration-500 ease-in-out")
        setTimeout(() => {setTurnONCart2("z-10")}, 2500)
        setTimeout(() => {setTurnONCart3("z-0")}, 2500)
        setTimeout(() => {setTurnONCart4("z-0")}, 2500)
        setTimeout(() => {setTurnONCart5("z-0")}, 2500)
        setTimeout(() => {setTurnONCart1("z-0")}, 2500)
    }
    function handleCart1Click(){
        setEnterCart1("translate-y-[23rem] translate-x-[36rem] duration-[1000ms] ease-in-out")
        setEnterCart2("hover:top-0 duration-500 ease-in-out")
        setEnterCart3("hover:top-0 duration-500 ease-in-out")
        setEnterCart4("hover:top-0 duration-500 ease-in-out")
        setEnterCart5("hover:top-0 duration-500 ease-in-out")
        setTimeout(() => {setTurnONCart1("z-10")}, 2500)
        setTimeout(() => {setTurnONCart2("z-0")}, 2500)
        setTimeout(() => {setTurnONCart3("z-0")}, 2500)
        setTimeout(() => {setTurnONCart4("z-0")}, 2500)
        setTimeout(() => {setTurnONCart5("z-0")}, 2500)
    }
    function handleReset(){
        setEnterCart1("hover:top-0 duration-500 ease-in-out")
        setEnterCart2("hover:top-0 duration-500 ease-in-out")
        setEnterCart3("hover:top-0 duration-500 ease-in-out")
        setEnterCart4("hover:top-0 duration-500 ease-in-out")
        setEnterCart5("hover:top-0 duration-500 ease-in-out")
        setTimeout(() => {setTurnONCart1("z-0")}, 300)
        setTimeout(() => {setTurnONCart2("z-0")}, 300)
        setTimeout(() => {setTurnONCart3("z-0")}, 300)
        setTimeout(() => {setTurnONCart4("z-0")}, 300)
        setTimeout(() => {setTurnONCart5("z-0")}, 300)
    }


    
    
    return <>
    <main className="w-full">
        <h2>Projects</h2>
        <div className="w-full h-28 bg-green-300"><p className="text-5xl">This is just a concept I was testing. Still Under construction</p></div>

        <section>
            <div className="m-auto w-[60rem] h-[40rem] bg-blue-100 relative">
{/* Gray Game Console */}
                <div className="w-72 h-48 bg-gray-300 border-black border-2 absolute bottom-10 right-10"></div> 

{/* Cartridges */}
                <div className={`w-60 h-40 bg-blue-200 border-black border-2 absolute ${enterCart5} top-6 left-4`} onClick={handleCart5Click}></div>
                <div className={`w-60 h-40 bg-red-200 border-black border-2 absolute ${enterCart4} top-8 left-8`} onClick={handleCart4Click}></div>
                <div className={`w-60 h-40 bg-yellow-200 border-black border-2 absolute ${enterCart3} top-10 left-12`} onClick={handleCart3Click}></div>
                <div className={`w-60 h-40 bg-orange-200 border-black border-2 absolute ${enterCart2} top-12 left-16`} onClick={handleCart2Click}></div>
                <div className={`w-60 h-40 bg-violet-200 border-black border-2 absolute ${enterCart1} top-14 left-20`} onClick={handleCart1Click}></div>

{/* Example TV */}
                <div className={`w-60 h-40 bg-blue-200 border-black border-2 absolute ${turnONCart5} bottom-12 left-4`}></div>
                <div className={`w-60 h-40 bg-red-200 border-black border-2 absolute ${turnONCart4} bottom-12 left-4`}></div>
                <div className={`w-60 h-40 bg-yellow-200 border-black border-2 absolute ${turnONCart3} bottom-12 left-4`}></div>
                <div className={`w-60 h-40 bg-orange-200 border-black border-2 absolute ${turnONCart2} bottom-12 left-4`}></div>
                <div className={`w-60 h-40 bg-violet-200 border-black border-2 absolute ${turnONCart1} bottom-12 left-4`}></div>
                <div className="w-60 h-40 absolute bottom-12 left-4 duration-500 ease-in-out hover:top-0">
                    <img className="w-full h-full" src={Static} alt=""/>
                </div>
                <button className={`border-2 border-black px-2 absolute bottom-2 right-60`} onClick={handleReset}>Reset</button>
            </div>
        </section>
    </main>
    </>
}