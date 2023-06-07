import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Home from "./pages/Home";
import Technology from "./pages/Technology";


const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="technology" element={<Technology />} />
      </Route>
    </>
  )
);

export default Router;
