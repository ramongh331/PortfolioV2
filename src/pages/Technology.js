import { useState } from "react";

export default function Technology() {

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

  return (
    <>
    <main className="bg-yellow-1000 w-full h-screen relative">
    <header className="bg-gradient-to-b from-black w-full h-28 flex justify-between absolute">
      <h1 className="font-bold text-2xl ml-10 text-[#1be783] mt-6">Skills+</h1>
      <section className="w-[35rem] flex justify-between text-xl font-semibold text-white mt-6">
        <h2>Home</h2>
        <h2>About</h2>
        <h2>Projects</h2>
        <h2>Contact</h2>
      </section>
      <section className="mr-10 mt-6">
        <div className="w-10 h-10 rounded-3xl text-md flex justify-center items-center font-semibold border-white border-2 bg-blue-300">RH</div>
      </section>
    </header>
<section className="w-full h-[35rem] bg-blue-400"></section>

{/* Libraries & Frameworks Row */}
<section className="ml-28">
  <section>
    <h3>Libraries & Frameworks</h3>
    <section className="w-full overflow-hidden bg-red-200">
      <div className="w-fit flex">
        <div className="bg-green-600 p-4 w-[19rem] h-[11rem] rounded-xl box-border mr-7 overflow-hidden">React</div>
        <div className="bg-green-600 p-4 w-[19rem] h-[11rem] rounded-xl box-border mr-7 overflow-hidden">Next</div>
        <div className="bg-green-600 p-4 w-[19rem] h-[11rem] rounded-xl box-border mr-7 overflow-hidden">Node.js</div>
        <div className="bg-green-600 p-4 w-[19rem] h-[11rem] rounded-xl box-border mr-7 overflow-hidden">Tailwind CSS</div>
        <div className="bg-green-600 p-4 w-[19rem] h-[11rem] rounded-xl box-border mr-7 overflow-hidden">Bootstrap</div>
        <div className="bg-green-600 p-4 w-[19rem] h-[11rem] rounded-xl box-border mr-7 overflow-hidden">Material-UI</div>
        <div className="bg-green-600 p-4 w-[19rem] h-[11rem] rounded-xl box-border mr-7 overflow-hidden">Express.js</div>
      </div>
    </section>
  </section>
</section>
{/* Languages Row */}
{/* <section className="ml-28">
  <section>
    <h3>Languages</h3>
    <section className="w-full overflow-hidden bg-red-200">
      <div className="w-fit flex">
        <div className="bg-green-600 p-4 w-[19rem] h-[11rem] rounded-xl box-border mr-7 overflow-hidden">HTML</div>
        <div className="bg-green-600 p-4 w-[19rem] h-[11rem] rounded-xl box-border mr-7 overflow-hidden">JavaScript/jQuery</div>
        <div className="bg-green-600 p-4 w-[19rem] h-[11rem] rounded-xl box-border mr-7 overflow-hidden">EJS</div>
        <div className="bg-green-600 p-4 w-[19rem] h-[11rem] rounded-xl box-border mr-7 overflow-hidden">CSS</div>
        <div className="bg-green-600 p-4 w-[19rem] h-[11rem] rounded-xl box-border mr-7 overflow-hidden">Sass</div>
      </div>
    </section>
  </section>
</section> */}
    </main>
    
    </>
  );
}
