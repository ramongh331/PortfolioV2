import { useState, useEffect } from "react";
import nextBtn from "../public/images/next.png"
import backBtn from "../public/images/back.png"
import HTML from "../public/images/languageImages/HTML.jpg"
import JS from "../public/images/languageImages/JavaScript.jpg"
import CSS from "../public/images/languageImages/CSS.jpg"
import Sass from "../public/images/languageImages/Sass.jpg"

export default function LanguagesRow() {


  // Languages
  const [languageImgInView, setLanguageImgInView] = useState(0);
  const [hideBackNext, setHideBackNext] = useState("")
  const [languageFade, setLanguageFade] = useState("opacity-0")
  let width = window.innerWidth

  useEffect(() => {
    if (width >= 1447) {
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
      setTimeout(() => {setLanguageFade("opacity-100")}, 1500)
  
  }
  
  
  const languagesMoveStyle = {
    transform: `translateX(-${languageImgInView}%)`,
  };
  
 
  function handleLanguageNext() {
    if (width >= 1280 && width < 1447) {
      if (languageImgInView < 10) {
      setLanguageImgInView((prevState) => prevState + 10);
      console.log(languageImgInView);
    }}
    if (width >= 1024 && width < 1280) {
      if (languageImgInView < 30) {
      setLanguageImgInView((prevState) => prevState + 10);
      console.log(languageImgInView);
    }}
    if (width >= 768 && width < 1024) {
      if (languageImgInView < 50) {
      setLanguageImgInView((prevState) => prevState + 10);
      console.log(languageImgInView);
    }}
    if (width >= 640 && width < 768) {
      if (languageImgInView < 60) {
      setLanguageImgInView((prevState) => prevState + 10);
      console.log(languageImgInView);
    }}
    if (width >= 320 && width < 640) {
      if (languageImgInView < 70) {
      setLanguageImgInView((prevState) => prevState + 10);
      console.log(languageImgInView);
    }}
  }
  function handleLanguageBack() {
    if (languageImgInView > 0) {
      setLanguageImgInView((prevState) => prevState - 10);
      console.log(languageImgInView);
    }
  }

  return (
    <>
  <section className={`${languageFade} ease-in-out duration-500
  max-sm:pl-5 sm:pl-20 xl:pl-24 2xl:pl-28 
  mb-5
  relative 
  overflow-hidden 
  `}>
    <section className="">
      <h3 className="max-sm:text-base sm:text-2xl text-white">Languages</h3>
      <section className="w-full relative">
        <div className="w-fit 
        max-sm:h-36 sm:h-52 flex items-center duration-300 ease-in-out" style={languagesMoveStyle}>
          <div className="max-sm:w-[13rem] sm:w-[19rem] 
          max-sm:h-[8rem] sm:h-[11rem] rounded-xl mr-7 overflow-hidden duration-200 ease-in-out hover:border-4 hover:scale-110"><img className="" src={HTML} alt="A man standing on the frame of a house with the word HTML to the right of him"/></div>
          <div className="max-sm:w-[13rem] sm:w-[19rem] 
          max-sm:h-[8rem] sm:h-[11rem] rounded-xl mr-7 overflow-hidden duration-200 ease-in-out hover:border-4 hover:scale-110"><img className="" src={JS} alt="A blurred computer with code behind a pair of eye-glasses with the word Java Script above"/></div>
          <div className="max-sm:w-[13rem] sm:w-[19rem] 
          max-sm:h-[8rem] sm:h-[11rem] rounded-xl mr-7 overflow-hidden duration-200 ease-in-out hover:border-4 hover:scale-110"><img className="" src={CSS} alt="A kid with paint covered hands holding a mechanical pencil and paint brush with the word CSS above"/></div>
          <div className="max-sm:w-[13rem] sm:w-[19rem] 
          max-sm:h-[8rem] sm:h-[11rem] rounded-xl mr-7 overflow-hidden duration-200 ease-in-out hover:border-4 hover:scale-110"><img className="" src={Sass} alt="Colored pencils in the top left, a hand holding a pencil in the bottom right, and the word Sass in the center"/></div>
        </div>
      </section>
    </section>
    {/* There are not enough cards to use the arrow function */}
        <img className={`max-sm:h-10 sm:h-12 absolute top-1/2 left-2 ${hideBackNext}`} onClick={handleLanguageBack} src={backBtn} alt="back arrow"/>
        <img className={`max-sm:h-10 sm:h-12 absolute top-1/2 right-2 ${hideBackNext}`} onClick={handleLanguageNext} src={nextBtn} alt="next arrow"/>
  </section>
    </>
  );
}
