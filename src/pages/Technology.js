import { useEffect, useState } from "react";

export default function Technology() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [pointerMenu, setPointerMenu] = useState('hidden')

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress, true);
    window.addEventListener("mousemove", (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    });
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === "m") {
      console.log("Your Pressed m");
      setPointerMenu('visible')
    }
  };

  const position = {
    left: mousePosition.x + 'px',
    top: mousePosition.y + 'px'
  }

  return (
    <><div className="w-full h-screen bg-green-200 relative">
      <h2>Going to Try something</h2>
      <p>{`x: ${mousePosition.x}, y: ${mousePosition.y}`}</p>
      <div
        style={position}
        className={`w-96 h-fit bg-red-200 flex justify-evenly absolute ${pointerMenu} -translate-x-2/4 -translate-y-10`}
      >
        <p>Home</p>
        <p>About</p>
        <p>Technology</p>
        <p>Contact</p>
      </div>
   </div> </>
  );
}
