import { useState } from "react";
import nextBtn from "../public/images/next.png"
import backBtn from "../public/images/back.png"

export default function FrameworksRow() {

  // Libraries & Frameworks
  const [frameWorksImgInView, setFrameWorksImgInView] = useState(0);

  const frameWorksMoveStyle = {
    transform: `translateX(-${frameWorksImgInView}%)`,
  };

  function handleFrameWorksNext() {
    if (frameWorksImgInView < 30) {
      setFrameWorksImgInView((prevState) => prevState + 10);
      console.log(frameWorksImgInView)
    }
  }
  function handleFrameWorksBack() {
    if (frameWorksImgInView > 0) {
      setFrameWorksImgInView((prevState) => prevState - 10);
      console.log(frameWorksImgInView)
    }
    
  }

  return (
    <>


  {/* Libraries & Frameworks Row */}
  <section className="pl-28 relative overflow-hidden mb-5">
    <section className="">
      <h3 className="text-2xl text-white my-5">Libraries & Frameworks</h3>
      <section className="w-full relative">
        <div className="w-fit flex duration-300 ease-in-out" style={frameWorksMoveStyle}>
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
        <img className={`h-12 absolute top-1/2 left-2`} onClick={handleFrameWorksBack} src={backBtn} alt="white back arrow"/>
        <img className={`h-12 absolute top-1/2 right-2`} onClick={handleFrameWorksNext} src={nextBtn} alt="white next arrow"/>
  </section>
    
    </>
  );
}
