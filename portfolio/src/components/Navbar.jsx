import React from "react";
import "./Navbar.css";

function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <ul>
        <li onClick={() => scrollTo("hero")}>Home</li>
        <li onClick={() => scrollTo("about")}>About</li>
        <li onClick={() => scrollTo("projects")}>Projects</li>
      </ul>
    </nav>
  );
}

export default Navbar;
