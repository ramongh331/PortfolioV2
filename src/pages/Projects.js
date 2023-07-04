import { useState } from "react"

export default function Projects(){
    const [cart5Enter, setCart5Enter] = useState("hover:top-0 duration-500 ease-in-out")
    
    const [cart5On, setCart5On] = useState("")

    async function handleCart5Click(){
        setCart5Enter("translate-y-[25rem] translate-x-[40rem] duration-[1000ms] ease-in-out")
        setCart5On("z-10")
    }
    
    
    return <>
    <main className="w-full">
        <h1>Projects</h1>
        <div className="w-full h-28 bg-green-300"></div>

        <section>
            <div className="m-auto w-[60rem] h-[40rem] bg-blue-100 relative">
{/* Gray Game Console */}
                <div className="w-72 h-48 bg-gray-300 border-black border-2 absolute bottom-10 right-10"></div> 

{/* Cartridges */}
                <div className={`w-60 h-40 bg-blue-200 border-black border-2 absolute ${cart5Enter} top-6 left-4 `} onClick={handleCart5Click}></div>
                <div className="w-60 h-40 bg-red-200 border-black border-2 absolute top-8 left-8 duration-500 ease-in-out hover:top-0"></div>
                <div className="w-60 h-40 bg-yellow-200 border-black border-2 absolute top-10 left-12 duration-500 ease-in-out hover:top-0"></div>
                <div className="w-60 h-40 bg-orange-200 border-black border-2 absolute top-12 left-16 duration-500 ease-in-out hover:top-0"></div>
                <div className="w-60 h-40 bg-violet-200 border-black border-2 absolute top-14 left-20 duration-500 ease-in-out hover:top-0"></div>

{/* Example TV */}
                <div className={`w-60 h-40 bg-blue-200 border-black border-2 absolute ${cart5On} bottom-12 left-4 `} onClick={handleCart5Click}></div>
                <div className="w-60 h-40 bg-red-200 border-black border-2 absolute bottom-12 left-4 duration-500 ease-in-out hover:top-0"></div>
                <div className="w-60 h-40 bg-yellow-200 border-black border-2 absolute bottom-12 left-4 duration-500 ease-in-out hover:top-0"></div>
                <div className="w-60 h-40 bg-orange-200 border-black border-2 absolute bottom-12 left-4 duration-500 ease-in-out hover:top-0"></div>
                <div className="w-60 h-40 bg-violet-200 border-black border-2 absolute bottom-12 left-4 duration-500 ease-in-out hover:top-0"></div>
            </div>
        </section>
    </main>
    </>
}