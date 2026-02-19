import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";   
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Resources from "./pages/Resources";
import Roadmap from "./pages/Roadmap";
import Projects from "./pages/Projects";
import Topic from "./pages/Topic";  


export default function App () {

  return(
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/roadmap" element={<Roadmap />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/topic" element={<Topic />} />
    </Routes>
    <Footer />

    </>

  )}

  