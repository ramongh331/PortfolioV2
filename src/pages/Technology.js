import DesignRow from "../components/DesignTools";
import FrameworksRow from "../components/Frameworks";
import LanguagesRow from "../components/Languages";

export default function Technology() {
  return (
    <>
      <main className="bg-gray-800 w-full h-full relative">
        <header className="bg-gradient-to-b from-black w-full h-28 flex justify-between absolute">
          <h1 className="font-bold text-2xl ml-10 text-[#1be783] mt-6">
            Skills+
          </h1>
          <section className="w-[35rem] flex justify-between text-xl font-semibold text-white mt-6">
            <h2>Home</h2>
            <h2>About</h2>
            <h2>Projects</h2>
            <h2>Contact</h2>
          </section>
          <section className="mr-10 mt-6">
            <div className="w-10 h-10 rounded-3xl text-md flex justify-center items-center font-semibold border-white border-2 bg-blue-300">
              RH
            </div>
          </section>
        </header>
        <section className="w-full h-[35rem] bg-blue-400"></section>

        <section className="flex flex-col">
          <FrameworksRow />
          <LanguagesRow />
          <DesignRow />
        </section>
      </main>
    </>
  );
}
