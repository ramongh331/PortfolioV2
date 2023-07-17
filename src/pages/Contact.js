import { ContactUs } from "../components/Contact";
import TeamRamon from "../public/images/ContactImage/TeamRamon.png";
import HeroBG from "../public/images/ContactImage/background.jpeg";

export default function Contact() {
  return (
    <>
      <main className="w-full h-full">
        <nav>Nav</nav>
        <h2 className="bebas text-6xl text-center">Are you Team Ramón?</h2>
        <img className="mx-auto w-[40%]" src={TeamRamon} alt="" />
        <ContactUs />
      </main>
    </>
  );
}
