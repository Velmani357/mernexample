import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar"
import Props from "./components/Props"
import Contact  from "./pages/Contact";
import Product from "./pages/Product";
import State from "./Hooks/State"
function App() {
  return (
    <Router>
      <Navbar/>
      {/* <Props/> */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Product" element={<Product />} />
        <Route path ="/State" element ={<State/>}/>
      </Routes>
    </Router>
  );
}

export default App;
