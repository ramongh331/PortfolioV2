import { useState, useEffect } from "react";
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
  const [hideBackNext, setHideBackNext] = useState("")
  const [designFade, setDesignFade] = useState("opacity-0")
  let width = window.innerWidth

  useEffect(() => {
    if (width >= 2462) {
      setHideBackNext("hidden")
    }
  }, [width])

  useEffect(() => {
    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad)
    }
  }, [])

  const onLoad = () => {
      setTimeout(() => {setDesignFade("opacity-100")}, 1600)
  
  }

  const designMoveStyle = {
    transform: `translateX(-${DesignImgInView}%)`,
  };

  function handleDesignNext() {
    if (width >= 2009 && width < 2462) {
      if (DesignImgInView < 10) {
        setDesignImgInView((prevState) => prevState + 10);
      console.log(DesignImgInView)
    }}
    if (width >= 1920 && width < 2009) {
      if (DesignImgInView < 20) {
        setDesignImgInView((prevState) => prevState + 10);
      console.log(DesignImgInView)
    }}
    if (width >= 1740 && width < 1920) {
      if (DesignImgInView < 30) {
        setDesignImgInView((prevState) => prevState + 10);
      console.log(DesignImgInView)
    }}
    if (width >= 1536 && width < 1740) {
      if (DesignImgInView < 40) {
        setDesignImgInView((prevState) => prevState + 10);
      console.log(DesignImgInView)
    }}
    if (width >= 1280 && width < 1536) {
      if (DesignImgInView < 50) {
        setDesignImgInView((prevState) => prevState + 10);
      console.log(DesignImgInView)
    }}
    if (width >= 1024 && width < 1280) {
      if (DesignImgInView < 60) {
        setDesignImgInView((prevState) => prevState + 10);
      console.log(DesignImgInView)
    }}
    if (width >= 768 && width < 1024) {
      if (DesignImgInView < 70) {
        setDesignImgInView((prevState) => prevState + 10);
      console.log(DesignImgInView)
    }}
    if (width >= 320 && width < 768) {
      if (DesignImgInView < 80) {
        setDesignImgInView((prevState) => prevState + 10);
      console.log(DesignImgInView)
    }}
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
  <section className={`${designFade} ease-in-out duration-500
  max-sm:pl-5 sm:pl-20 2xl:pl-28 
  relative overflow-hidden mb-10`}>
    <section className="">
      <h3 className="max-sm:text-base sm:text-2xl text-white">Design Tools</h3>
      <section className="w-full relative">
        <div className="w-fit 
        max-sm:h-36 sm:h-52 flex items-center duration-300 ease-in-out" style={designMoveStyle}>
          <div className="max-sm:w-[13rem] sm:w-[19rem] 
          max-sm:h-[8rem] sm:h-[11rem] rounded-xl mr-7 overflow-hidden duration-200 ease-in-out hover:border-4 hover:scale-110"><img className="" src={Figma} alt=""/></div>
          <div className="max-sm:w-[13rem] sm:w-[19rem] 
          max-sm:h-[8rem] sm:h-[11rem] rounded-xl mr-7 overflow-hidden duration-200 ease-in-out hover:border-4 hover:scale-110"><img className="" src={XD} alt=""/></div>
          <div className="max-sm:w-[13rem] sm:w-[19rem] 
          max-sm:h-[8rem] sm:h-[11rem] rounded-xl mr-7 overflow-hidden duration-200 ease-in-out hover:border-4 hover:scale-110"><img className="" src={PS} alt=""/></div>
          <div className="max-sm:w-[13rem] sm:w-[19rem] 
          max-sm:h-[8rem] sm:h-[11rem] rounded-xl mr-7 overflow-hidden duration-200 ease-in-out hover:border-4 hover:scale-110"><img className="" src={AI} alt=""/></div>
          <div className="max-sm:w-[13rem] sm:w-[19rem] 
          max-sm:h-[8rem] sm:h-[11rem] rounded-xl mr-7 overflow-hidden duration-200 ease-in-out hover:border-4 hover:scale-110"><img className="" src={AE} alt=""/></div>
          <div className="max-sm:w-[13rem] sm:w-[19rem] 
          max-sm:h-[8rem] sm:h-[11rem] rounded-xl mr-7 overflow-hidden duration-200 ease-in-out hover:border-4 hover:scale-110"><img className="" src={Premiere} alt=""/></div>
          <div className="max-sm:w-[13rem] sm:w-[19rem] 
          max-sm:h-[8rem] sm:h-[11rem] rounded-xl mr-7 overflow-hidden duration-200 ease-in-out hover:border-4 hover:scale-110"><img className="" src={Procreate} alt=""/></div>
        </div>
      </section>
    </section>
        <img className={`max-sm:h-10 sm:h-12 absolute top-1/2 left-2 cursor-pointer ${hideBackNext}`} onClick={handleDesignBack} src={backBtn} alt="white back arrow"/>
        <img className={`max-sm:h-10 sm:h-12 absolute top-1/2 right-2 cursor-pointer ${hideBackNext}`} onClick={handleDesignNext} src={nextBtn} alt="white next arrow"/>
  </section>

    
    </>
  );
}
