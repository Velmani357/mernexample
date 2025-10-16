import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
     
      <nav>
        <Link to="/">Home</Link> 
         <Link to="/about">About</Link>
          <Link to="/Contact">Contact</Link>
           <Link to="/Product">Product</Link>
           {/* <Link to ="/State">State</Link> */}
      </nav>
    </header>
  );
}

export default Navbar;
