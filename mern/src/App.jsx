import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Resources from "./pages/Resources";
import Roadmap from "./pages/Roadmap";
import Projects from "./pages/Projects";
import Topics from "./pages/Topics";
import TopicsDetail from "./pages/TopicsDetail";
import AIAssistant from "./pages/AIAssistant";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/topics/:slug" element={<TopicsDetail />} />
        <Route path="/ai-assistant" element={<AIAssistant />} />
      </Routes>
      <Footer />
    </Router>
  );
}