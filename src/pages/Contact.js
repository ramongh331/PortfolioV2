import { ContactUs } from "../components/Contact";
import { Link } from "react-router-dom";
import TeamRamon from "../public/images/ContactImage/TeamRamon.png";
import { ExternalLink } from "react-external-link";

export default function Contact() {
  return (
    <>
      <main className="w-full h-full bg-[#132932] text-white">
      <header className="border-b-2 border-[#58c7f9]
        w-full 
        max-sm:h-10 sm:h-14 2xl:h-20 
        flex 
        justify-between 
        items-center">
          <Link to="/contact">
            <h1 className="font-bold 
            max-sm:text-lg sm:text-2xl 
            max-sm:ml-2 sm:ml-10 
            text-[#1be783] 
            ">
              Contact
            </h1>
          </Link>
          <section className="max-sm:w-[25rem] sm:w-[20rem] xl:w-[25rem] 2xl:w-[35rem]
          flex 
          justify-between
          items-center 
          max-sm:text-xs sm:text-base 2xl:text-xl 
          font-semibold 
          text-white 
          mx-5">
            <Link to="/"><h2>Home</h2></Link>
            <Link to="/about"><h2>About</h2></Link>
            <Link to="/technology"><h2>Technology</h2></Link>
            <Link to="/projects"><h2>Projects</h2></Link>
          </section>
          <section className="max-sm:mr-2 sm:mr-10">
          <ExternalLink
            href="https://docs.google.com/document/d/1MJJ1Zp0emiOn1I9aolUsWSZ4OC0Z7B-AgSi0rxy2bb4/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
              <div className="max-sm:w-7 sm:w-10 
              max-sm:h-7 sm:h-10 
              max-sm:text-xs sm:text-md
              rounded-3xl flex justify-center items-center font-semibold border-white border-2 bg-blue-300 text-black">
                RH
              </div>
            </ExternalLink>
          </section>
        </header>
        <h2 className="bebas text-6xl text-center mt-10">Are you Team Ramón?</h2>
        <img className="mx-auto w-[40%]" src={TeamRamon} alt="" />
        <ContactUs />
      </main>
    </>
  );
}
