import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Home from "./pages/Home";
import Technology from "./pages/Technology";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectsTest from "./pages/ProjectsTest";


const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="technology" element={<Technology />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projectstest" element={<ProjectsTest />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </>
  )
);

export default Router;
