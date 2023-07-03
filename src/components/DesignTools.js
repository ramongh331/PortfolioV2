import { useState } from "react";
import nextBtn from "../public/images/next.png"
import backBtn from "../public/images/back.png"
import Procreate from "../public/images/designToolsImages/Procreate.jpg"
import Figma from "../public/images/designToolsImages/Figma.jpg"
import XD from "../public/images/designToolsImages/AdobeXD.jpg"
import PS from "../public/images/designToolsImages/Photoshop.jpg"
import AI from "../public/images/designToolsImages/Illustrator.jpg"
import AE from "../public/images/designToolsImages/AfterEffects.jpg"
import Premiere from "../public/images/designToolsImages/PremierePro.jpg"

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
      <h3 className="text-2xl text-white">Design Tools</h3>
      <section className="w-full relative">
        <div className="w-fit h-52 flex items-center duration-300 ease-in-out" style={designMoveStyle}>
          <div className="w-[19rem] h-[11rem] rounded-xl box-content mr-7 overflow-hidden duration-200 ease-in-out hover:border-4 hover:scale-110"><img className="" src={Figma} alt=""/></div>
          <div className="w-[19rem] h-[11rem] rounded-xl box-content mr-7 overflow-hidden duration-200 ease-in-out hover:border-4 hover:scale-110"><img className="" src={XD} alt=""/></div>
          <div className="w-[19rem] h-[11rem] rounded-xl box-content mr-7 overflow-hidden duration-200 ease-in-out hover:border-4 hover:scale-110"><img className="" src={PS} alt=""/></div>
          <div className="w-[19rem] h-[11rem] rounded-xl box-content mr-7 overflow-hidden duration-200 ease-in-out hover:border-4 hover:scale-110"><img className="" src={AI} alt=""/></div>
          <div className="w-[19rem] h-[11rem] rounded-xl box-content mr-7 overflow-hidden duration-200 ease-in-out hover:border-4 hover:scale-110"><img className="" src={AE} alt=""/></div>
          <div className="w-[19rem] h-[11rem] rounded-xl box-content mr-7 overflow-hidden duration-200 ease-in-out hover:border-4 hover:scale-110"><img className="" src={Premiere} alt=""/></div>
          <div className="w-[19rem] h-[11rem] rounded-xl box-content mr-7 overflow-hidden duration-200 ease-in-out hover:border-4 hover:scale-110"><img className="" src={Procreate} alt=""/></div>
        </div>
      </section>
    </section>
        <img className={`h-12 absolute top-1/2 left-2`} onClick={handleDesignBack} src={backBtn} alt="white back arrow"/>
        <img className={`h-12 absolute top-1/2 right-2`} onClick={handleDesignNext} src={nextBtn} alt="white next arrow"/>
  </section>

    
    </>
  );
}
