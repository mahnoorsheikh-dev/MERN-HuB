import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollButton from "./components/ScrollButton";
import PageLoader from "./components/PageLoader";
import NotFound from "./components/NotFound";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Resources = lazy(() => import("./pages/Resources"));
const Roadmap = lazy(() => import("./pages/Roadmap"));
const Projects = lazy(() => import("./pages/Projects"));
const Topics = lazy(() => import("./pages/Topics"));
const TopicsDetail = lazy(() => import("./pages/TopicsDetail"));
const AIAssistant = lazy(() => import("./pages/AIAssistant"));

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/topics/:slug" element={<TopicsDetail />} />
          <Route path="/ai-assistant" element={<AIAssistant />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <ScrollButton />
      <Footer />
    </Router>
  );
}