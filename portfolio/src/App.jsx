import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

import Contact from "./pages/Contact";
import "./index.css";

function App() {
  return (
    <div style={{ backgroundColor: "#121212", color: "#fff", fontFamily: "Arial, sans-serif" }}>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
     
      <Contact />
    </div>
  );
}

export default App;