import { useRef } from "react";
import emailjs from "@emailjs/browser";


export const ContactUs = () => {
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

  return (
    <section className="w-full h-[28rem] flex flex-col bg-yellow-1000">
      <h2 className="text-6xl my-5 ml-10 font-bold">Let's Connect</h2>
      <section className="w-full h-full flex justify-around">
        <section className="w-[25rem] flex flex-col gap-2">
          <h3 className="w-full border-b-2 border-black text-3xl font-semibold">Hire Me</h3>
          <p className="text-xl">Email: RamonGH331@gmail.com</p>
          <p className="text-xl">Location: Connecticut | Willing to Relocate</p>
          <a
            href="https://docs.google.com/document/d/1wiw12XV2FYtoqgWUFv-xZNhvhHL64YuPXFUGZoH5kQk/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <p className="text-xl">Resumè</p>
          </a>
        </section>
        <section className="w-[25rem]">
          <h3 className="w-full mb-2 border-b-2 border-black text-3xl font-semibold">Message Me</h3>
          <form className="flex flex-col gap-2" ref={form} onSubmit={sendEmail}>
            
              <input
                className="w-full h-[3rem] border-[1px] border-black p-2"
                type="text"
                name="user_name"
                placeholder="Name"
              />
            
              <input
                className="w-full h-[3rem] border-[1px] border-black p-2"
                type="email"
                name="user_email"
                placeholder="Email"
              />
            
              <textarea
                className="w-full h-[6rem] border-[1px] border-black p-2"
                name="message"
                placeholder="Message"
              />
            <section id="submit">
              <input className="border-[1px] border-black py-1 px-4" type="submit" value="Send" />
            </section>
          </form>
        </section>
        <section className="w-[25rem]">
          <h3 className="w-full mb-2 border-b-2 border-black text-3xl font-semibold">Keep Connected</h3>
          <section className="flex gap-5">
            <a
              href="https://www.linkedin.com/in/ramon-hernandez-web/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="w-10" src="https://i.imgur.com/9whU8k1.png" alt="LinkedIn Icon" />
            </a>
            <a
              href="https://github.com/ramongh331"
              target="_blank"
              rel="noreferrer"
            >
              <img className="w-10" src="https://i.imgur.com/Ye3Jxte.png" alt="GitHub Icon" />
            </a>
          </section>
        </section>
      </section>
    </section>
  );
};
