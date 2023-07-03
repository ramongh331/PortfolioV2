import { useState } from "react";
// import nextBtn from "../public/images/next.png"
// import backBtn from "../public/images/back.png"
import HTML from "../public/images/languageImages/HTML.jpg"
import JS from "../public/images/languageImages/JavaScript.jpg"
import CSS from "../public/images/languageImages/CSS.jpg"
import Sass from "../public/images/languageImages/Sass.jpg"

export default function LanguagesRow() {


  // Languages
//   const [languageImgInView, setLanguageImgInView] = useState(0);

//   const languagesMoveStyle = {
//     transform: `translateX(-${languageImgInView}%)`,
//   };
//  There are not enough cards to use the arrow function
  // function handleLanguageNext() {
  //   if (languageImgInView < 30) {
  //     setLanguageImgInView((prevState) => prevState + 10);
  //     console.log(languageImgInView);
  //   }
  // }
  // function handleLanguageBack() {
  //   if (languageImgInView > 0) {
  //     setLanguageImgInView((prevState) => prevState - 10);
  //     console.log(languageImgInView);
  //   }
  // }

  return (
    <>
  <section className="pl-28 relative overflow-hidden mb-5">
    <section className="">
      <h3 className="text-2xl text-white">Languages</h3>
      <section className="w-full relative">
        <div className="w-fit h-52 flex items-center duration-300 ease-in-out">
          <div className="bg-green-600 w-[19rem] h-[11rem] rounded-xl box-content mr-7 overflow-hidden duration-200 ease-in-out hover:border-4 hover:scale-110"><img className="" src={HTML} alt=""/></div>
          <div className="bg-green-600 w-[19rem] h-[11rem] rounded-xl box-content mr-7 overflow-hidden duration-200 ease-in-out hover:border-4 hover:scale-110"><img className="" src={JS} alt=""/></div>
          <div className="bg-green-600 w-[19rem] h-[11rem] rounded-xl box-content mr-7 overflow-hidden duration-200 ease-in-out hover:border-4 hover:scale-110"><img className="" src={CSS} alt=""/></div>
          <div className="bg-green-600 w-[19rem] h-[11rem] rounded-xl box-content mr-7 overflow-hidden duration-200 ease-in-out hover:border-4 hover:scale-110"><img className="" src={Sass} alt=""/></div>
        </div>
      </section>
    </section>
    {/* There are not enough cards to use the arrow function */}
        {/* <img className="h-14 absolute top-1/2 left-2" onClick={handleLanguageBack} src={backBtn} alt="white back arrow"/>
        <img className="h-14 absolute top-1/2 right-2" onClick={handleLanguageNext} src={nextBtn} alt="white next arrow"/> */}
  </section>
    </>
  );
}
