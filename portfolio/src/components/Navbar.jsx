import React from "react";
import { FaHome, FaUser, FaProjectDiagram, FaTools, FaCertificate, FaEnvelope, FaEllipsisH } from "react-icons/fa";

const navItems = [
  { name: "Home", icon: <FaHome />, link: "#home" },
  { name: "About", icon: <FaUser />, link: "#about" },
  { name: "Projects", icon: <FaProjectDiagram />, link: "#projects" },
  { name: "Skills", icon: <FaTools />, link: "#skills" },
  // { name: "Certificates", icon: <FaCertificate />, link: "#certificates" },
  { name: "Contact", icon: <FaEnvelope />, link: "#contact" },
  // { name: "More", icon: <FaEllipsisH />, link: "#more" },
];

const Navbar = () => {
  return (
    <nav
      style={{
        position: "fixed",
        top: "15px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "90%",
        maxWidth: "1200px",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "rgba(27,27,47,0.4)",
        backdropFilter: "blur(14px)",
        border: "2px solid #B86BFF", // subtle violet border
        borderRadius: "1px",
        boxShadow: "0 0 10px #B86BFF, 0 0 0px #E0B0FF",
        zIndex: 1000,
        transition: "all 0.4s ease",
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontWeight: "bold",
          fontSize: "1.6rem",
          color: "#B86BFF",
          textShadow: "0 0 px #B86BFF, 0 0 0px #E0B0FF",
        }}
      >
        Velmani
      </div>

      {/* Nav Links */}
      <ul
        style={{
          display: "flex",
          gap: "28px",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        {navItems.map((item) => (
          <li
            key={item.name}
            style={{ position: "relative", display: "flex", alignItems: "center", gap: "6px" }}
          >
            <a
              href={item.link}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                textDecoration: "none",
                color: "#B86BFF",
                fontWeight: "500",
                transition: "all 0.3s ease",
                textShadow: "0 0 0px #B86BFF, 0 0 0px #E0B0FF",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#E0B0FF";
                e.currentTarget.style.textShadow = "0 0 0px #E0B0FF, 0 0 0px #B86BFF";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#B86BFF";
                e.currentTarget.style.textShadow = "0 0 0px #B86BFF, 0 0 0px #E0B0FF";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {item.icon} {item.name}
            </a>

            {/* Underline */}
            <span
              style={{
                position: "absolute",
                bottom: "-3px",
                left: 0,
                width: "0%",
                height: "2px",
                backgroundColor: "#E0B0FF",
                transition: "width 0.4s ease",
              }}
            ></span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
