import { useState, useEffect } from "react";
import nextBtn from "../public/images/next.png"
import backBtn from "../public/images/back.png"
import ReactImg from "../public/images/frameworkImages/ReactMovieCover.jpg"
import NextImg from "../public/images/frameworkImages/Next.jpg"
import NodeImg from "../public/images/frameworkImages/Node.jpg"
import TWImg from "../public/images/frameworkImages/Tailwind.jpg"
import BSImg from "../public/images/frameworkImages/Bootstrap.jpg"
import MUIImg from "../public/images/frameworkImages/MaterialUI.jpg"
import ExpressImg from "../public/images/frameworkImages/Express.jpg"

export default function FrameworksRow() {

  // Libraries & Frameworks
  const [frameWorksImgInView, setFrameWorksImgInView] = useState(0);
  const [hideBackNext, setHideBackNext] = useState("")
  const [frameworkFade, setFrameworkFade] = useState("opacity-0")

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
      setTimeout(() => {setFrameworkFade("opacity-100")}, 1400)
  
  } 

  const frameWorksMoveStyle = {
    transform: `translateX(-${frameWorksImgInView}%)`,
  };

  function handleFrameWorksNext() {
    // Desktop Screen
    if (width >= 2009 && width < 2462) {
      if (frameWorksImgInView < 10) {
      setFrameWorksImgInView((prevState) => prevState + 10);
      console.log(frameWorksImgInView)
    }}
    if (width >= 1920 && width < 2009) {
      if (frameWorksImgInView < 20) {
      setFrameWorksImgInView((prevState) => prevState + 10);
      console.log(frameWorksImgInView)
    }}
    if (width >= 1740 && width < 1920) {
      if (frameWorksImgInView < 30) {
      setFrameWorksImgInView((prevState) => prevState + 10);
      console.log(frameWorksImgInView)
    }}
    if (width >= 1536 && width < 1740) {
      if (frameWorksImgInView < 40) {
      setFrameWorksImgInView((prevState) => prevState + 10);
      console.log(frameWorksImgInView)
    }}
    if (width >= 1280 && width < 1536) {
      if (frameWorksImgInView < 50) {
      setFrameWorksImgInView((prevState) => prevState + 10);
      console.log(frameWorksImgInView)
    }}
    if (width >= 1024 && width < 1280) {
      if (frameWorksImgInView < 60) {
      setFrameWorksImgInView((prevState) => prevState + 10);
      console.log(frameWorksImgInView)
    }}
    if (width >= 768 && width < 1024) {
      if (frameWorksImgInView < 70) {
      setFrameWorksImgInView((prevState) => prevState + 10);
      console.log(frameWorksImgInView)
    }}
    if (width >= 320 && width < 768) {
      if (frameWorksImgInView < 80) {
      setFrameWorksImgInView((prevState) => prevState + 10);
      console.log(frameWorksImgInView)
    }}
  }
  function handleFrameWorksBack() {
    if (frameWorksImgInView > 0) {
      setFrameWorksImgInView((prevState) => prevState - 10);
      console.log(frameWorksImgInView)
    }
    
  }

  return (
    <>
  <section className={`${frameworkFade} ease-in-out duration-500 
  max-sm:pl-5 sm:pl-20 xl:pl-24 2xl:pl-28 
  mb-5
  relative 
  overflow-hidden 
  `}>
    <section className="">
      <h3 className="max-sm:text-base sm:text-2xl 
      text-white mt-5">Libraries & Frameworks</h3>
      <section className="w-full relative">
        <div className="w-fit
        max-sm:h-36 sm:h-52 flex items-center duration-300 ease-in-out" style={frameWorksMoveStyle}>
          <div className="max-sm:w-[13rem] sm:w-[19rem] 
          max-sm:h-[8rem] sm:h-[11rem] 
          rounded-xl mr-7 overflow-hidden duration-200 ease-in-out hover:border-4 hover:scale-110"><img className="" src={ReactImg} alt=""/></div>
          <div className="max-sm:w-[13rem] sm:w-[19rem] 
          max-sm:h-[8rem] sm:h-[11rem] rounded-xl mr-7 overflow-hidden duration-200 ease-in-out hover:border-4 hover:scale-110"><img className="" src={NextImg} alt=""/></div>
          <div className="max-sm:w-[13rem] sm:w-[19rem] 
          max-sm:h-[8rem] sm:h-[11rem] rounded-xl mr-7 overflow-hidden duration-200 ease-in-out hover:border-4 hover:scale-110"><img className="" src={NodeImg} alt=""/></div>
          <div className="max-sm:w-[13rem] sm:w-[19rem] 
          max-sm:h-[8rem] sm:h-[11rem] rounded-xl mr-7 overflow-hidden duration-200 ease-in-out hover:border-4 hover:scale-110"><img className="" src={TWImg} alt=""/></div>
          <div className="max-sm:w-[13rem] sm:w-[19rem] 
          max-sm:h-[8rem] sm:h-[11rem] rounded-xl mr-7 overflow-hidden duration-200 ease-in-out hover:border-4 hover:scale-110"><img className="" src={BSImg} alt=""/></div>
          <div className="max-sm:w-[13rem] sm:w-[19rem] 
          max-sm:h-[8rem] sm:h-[11rem] rounded-xl mr-7 overflow-hidden duration-200 ease-in-out hover:border-4 hover:scale-110"><img className="" src={MUIImg} alt=""/></div>
          <div className="max-sm:w-[13rem] sm:w-[19rem] 
          max-sm:h-[8rem] sm:h-[11rem] rounded-xl mr-7 overflow-hidden duration-200 ease-in-out hover:border-4 hover:scale-110"><img className="" src={ExpressImg} alt=""/></div>
        </div>
      </section>
    </section>
        <img className={`max-sm:h-10 sm:h-12 
        absolute top-1/2 left-2 cursor-pointer ${hideBackNext}`} onClick={handleFrameWorksBack} src={backBtn} alt="white back arrow"/>
        <img className={`max-sm:h-10 sm:h-12 
        absolute top-1/2 right-2 cursor-pointer ${hideBackNext}`} onClick={handleFrameWorksNext} src={nextBtn} alt="white next arrow"/>
  </section>
    
    </>
  );
}
