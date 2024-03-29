import { useRef,useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ExternalLink } from "react-external-link";
import GitHub from "../public/images/ContactImage/GitHub.png"
import LinkedIn from "../public/images/ContactImage/LinkedIn.png"


export const ContactUs = () => {
const [connectFade, setConnectFade] = useState("opacity-0")
const [hireMeFade, setHireMeFade] = useState("opacity-0")
const [messageMeFade, setMessageMeFade] = useState("opacity-0")
const [socialsFade, setSocialsFade] = useState("opacity-0")

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xbgxy8k",
        "contact_form",
        form.current,
        "OgxW0hZZelLj-CDZI"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  useEffect(() => {
    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad)
    }
  }, [])

  const onLoad = () => {
      setTimeout(() => {setConnectFade("opacity-100")}, 1200)
      setTimeout(() => {setHireMeFade("opacity-100")}, 1300)
      setTimeout(() => {setMessageMeFade("opacity-100")}, 1400)
      setTimeout(() => {setSocialsFade("opacity-100")}, 1500)
  
  } 

  return (
    <section className="w-full 
    max-sm:h-full sm:h-full xl:h-[28rem] 2xl:h-full min-[1920px]:h-[28rem] 
    flex flex-col bg-[#132932] text-white mb-10"> 
      <h2 className={`${connectFade} ease-in-out duration-500
      max-sm:text-3xl sm:text-5xl 2xl:text-6xl min-[1920px]:text-6xl 
      my-5 
      font-bold
      text-center`}>Let's Connect</h2>
      <section className="w-full h-full 
      flex max-sm:flex-col sm:flex-col lg:flex-row
      max-sm:gap-5 sm:gap-5
      max-sm:items-center sm:items-center lg:items-start
      justify-around">
      {/* Hire Me Section */}
        <section className={`${hireMeFade} ease-in-out duration-500
        max-sm:w-[90%] sm:w-[25rem] lg:w-[15rem] xl:w-[20rem] min-[1920px]:w-[25rem] 
        flex flex-col max-sm:gap-2 sm:gap-4`}>
          <h3 className="w-full border-b-2 border-white 
          max-sm:text-2xl sm:text-3xl
          font-semibold">Hire Me</h3>
          <p className="sm:text-xl lg:text-base xl:text-xl">Email: RamonGH331@gmail.com</p>
          <p className="sm:text-xl lg:text-base xl:text-xl">Location: Connecticut | Willing to Relocate</p>
          <ExternalLink
            href="https://docs.google.com/document/d/1MJJ1Zp0emiOn1I9aolUsWSZ4OC0Z7B-AgSi0rxy2bb4/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <p className="sm:text-xl lg:text-base xl:text-xl"><span className="hover:text-blue-500 underline">Resumè</span></p>
          </ExternalLink>
        </section>

        {/* Message Me Section */}
        <section className={`${messageMeFade} ease-in-out duration-500
        max-sm:w-[90%] sm:w-[25rem] lg:w-[20rem] min-[1920px]:w-[30rem]`}>
          <h3 className="w-full mb-2 border-b-2 border-white max-sm:text-2xl sm:text-3xl font-semibold">Message Me</h3>
          <form className="flex flex-col gap-2" ref={form} onSubmit={sendEmail}>
            
              <input
                className="w-full h-[3rem] border-[1px] border-black p-2 text-black"
                type="text"
                name="user_name"
                placeholder="Name"
              />
            
              <input
                className="w-full h-[3rem] border-[1px] border-black p-2 text-black"
                type="email"
                name="user_email"
                placeholder="Email"
              />
            
              <textarea
                className="w-full h-[6rem] border-[1px] border-black p-2 text-black"
                name="message"
                placeholder="Message"
              />
            <section id="submit">
              <input className="border-[1px] border-black hover:border-[#58c7f9] py-1 px-4 cursor-pointer" type="submit" value="Send" />
            </section>
          </form>
        </section>

        {/* Keep Connected Section */}
        <section className={`${socialsFade} ease-in-out duration-500
        max-sm:w-[90%] sm:w-[25rem] lg:w-[15rem] xl:w-[20rem] min-[1920px]:w-[25rem]`}>
          <h3 className="w-full mb-2 border-b-2 border-white max-sm:text-2xl sm:text-3xl font-semibold">Keep Connected</h3>
          <section className="flex gap-5">
            <a
              href="https://www.linkedin.com/in/ramon-hernandez-web/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="w-10" src={LinkedIn} alt="LinkedIn Icon" />
            </a>
            <a
              href="https://github.com/ramongh331"
              target="_blank"
              rel="noreferrer"
            >
              <img className="w-10" src={GitHub} alt="GitHub Icon" />
            </a>
          </section>
        </section>
      </section>
    </section>
  );
};
