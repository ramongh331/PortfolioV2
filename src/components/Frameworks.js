import { useState } from "react";
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
  <section className="pl-28 relative overflow-hidden mb-5">
    <section className="">
      <h3 className="text-2xl text-white mt-5">Libraries & Frameworks</h3>
      <section className="w-full relative">
        <div className="w-fit h-52 flex items-center duration-300 ease-in-out" style={frameWorksMoveStyle}>
          <div className="w-[19rem] h-[11rem] rounded-xl box-content mr-7 overflow-hidden duration-200 ease-in-out hover:border-4 hover:scale-110"><img className="" src={ReactImg} alt=""/></div>
          <div className="w-[19rem] h-[11rem] rounded-xl box-content mr-7 overflow-hidden duration-200 ease-in-out hover:border-4 hover:scale-110"><img className="" src={NextImg} alt=""/></div>
          <div className="w-[19rem] h-[11rem] rounded-xl box-content mr-7 overflow-hidden duration-200 ease-in-out hover:border-4 hover:scale-110"><img className="" src={NodeImg} alt=""/></div>
          <div className="w-[19rem] h-[11rem] rounded-xl box-content mr-7 overflow-hidden duration-200 ease-in-out hover:border-4 hover:scale-110"><img className="" src={TWImg} alt=""/></div>
          <div className="w-[19rem] h-[11rem] rounded-xl box-content mr-7 overflow-hidden duration-200 ease-in-out hover:border-4 hover:scale-110"><img className="" src={BSImg} alt=""/></div>
          <div className="w-[19rem] h-[11rem] rounded-xl box-content mr-7 overflow-hidden duration-200 ease-in-out hover:border-4 hover:scale-110"><img className="" src={MUIImg} alt=""/></div>
          <div className="w-[19rem] h-[11rem] rounded-xl box-content mr-7 overflow-hidden duration-200 ease-in-out hover:border-4 hover:scale-110"><img className="" src={ExpressImg} alt=""/></div>
        </div>
      </section>
    </section>
        <img className={`h-12 absolute top-1/2 left-2`} onClick={handleFrameWorksBack} src={backBtn} alt="white back arrow"/>
        <img className={`h-12 absolute top-1/2 right-2`} onClick={handleFrameWorksNext} src={nextBtn} alt="white next arrow"/>
  </section>
    
    </>
  );
}
