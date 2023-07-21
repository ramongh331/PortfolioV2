import { ContactUs } from "../components/Contact";
import TeamRamon from "../public/images/ContactImage/TeamRamon.png";

export default function Contact() {
  return (
    <>
      <main className="w-full h-full bg-[#132932] text-white">
        <nav>Nav</nav>
        <h2 className="bebas text-6xl text-center">Are you Team Ramón?</h2>
        <img className="mx-auto w-[40%]" src={TeamRamon} alt="" />
        <ContactUs />
      </main>
    </>
  );
}
