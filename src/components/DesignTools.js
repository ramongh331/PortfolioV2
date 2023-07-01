import { useState } from "react";
import nextBtn from "../public/images/next.png"
import backBtn from "../public/images/back.png"

export default function DesignRow() {

  // Design
  const [DesignImgInView, setDesignImgInView] = useState(0);

  const designMoveStyle = {
    transform: `translateX(-${DesignImgInView}%)`,
  };

  function handleDesignNext() {
    if (DesignImgInView < 30) {
        setDesignImgInView((prevState) => prevState + 10);
      console.log(DesignImgInView)
    }
  }
  function handleDesignBack() {
    if (DesignImgInView > 0) {
        setDesignImgInView((prevState) => prevState - 10);
      console.log(DesignImgInView)
    }
    
  }

  return (
    <>

  {/* Design Tools Row */}
  <section className="pl-28 relative overflow-hidden mb-10">
    <section className="">
      <h3 className="text-2xl text-white my-5">Design Tools</h3>
      <section className="w-full relative">
        <div className="w-fit flex duration-300 ease-in-out" style={designMoveStyle}>
          <div className="bg-green-600 p-4 w-[19rem] h-[11rem] rounded-xl box-border mr-7 overflow-hidden">Figma</div>
          <div className="bg-green-600 p-4 w-[19rem] h-[11rem] rounded-xl box-border mr-7 overflow-hidden">Adobe XD</div>
          <div className="bg-green-600 p-4 w-[19rem] h-[11rem] rounded-xl box-border mr-7 overflow-hidden">Adobe Photoshop</div>
          <div className="bg-green-600 p-4 w-[19rem] h-[11rem] rounded-xl box-border mr-7 overflow-hidden">Adobe Illustrator</div>
          <div className="bg-green-600 p-4 w-[19rem] h-[11rem] rounded-xl box-border mr-7 overflow-hidden">Adobe After Effects</div>
          <div className="bg-green-600 p-4 w-[19rem] h-[11rem] rounded-xl box-border mr-7 overflow-hidden">Adobe Premiere Pro</div>
          <div className="bg-green-600 p-4 w-[19rem] h-[11rem] rounded-xl box-border mr-7 overflow-hidden">Procreation (iPad)</div>
        </div>
      </section>
    </section>
        <img className={`h-12 absolute top-1/2 left-2`} onClick={handleDesignBack} src={backBtn} alt="white back arrow"/>
        <img className={`h-12 absolute top-1/2 right-2`} onClick={handleDesignNext} src={nextBtn} alt="white next arrow"/>
  </section>

    
    </>
  );
}
