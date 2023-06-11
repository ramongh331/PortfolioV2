import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Technology() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [pointerMenu, setPointerMenu] = useState('hidden')

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress, true);
    document.addEventListener("keydown", handleHKeyPress, true);
    document.addEventListener("keydown", handleAKeyPress, true);
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

  let navigate = useNavigate()
  const handleHKeyPress = (event) => {
    if (event.key === "h") {
     navigate('/')
    }
  };
  const handleAKeyPress = (event) => {
    if (event.key === "a") {
     navigate('/about')
    }
  };
// I need to add the contact & Projects page key press when I create the both pages.


  const position = {
    left: mousePosition.x + 'px',
    top: mousePosition.y + 'px'
  }

  return (
    <><div className="w-full h-screen bg-green-200 relative">
      <h2>Press m to Open Menu</h2>
      <p>{`x: ${mousePosition.x}, y: ${mousePosition.y}`}</p>
      <div
        style={position}
        className={`w-96 h-fit bg-red-200 flex justify-evenly absolute ${pointerMenu} -translate-x-2/4 -translate-y-10`}
      >
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>
   </div> </>
  );
}
