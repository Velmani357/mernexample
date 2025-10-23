// Contact.jsx
import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      style={{
        minHeight: "100vh",
        padding: "100px 50px",
        background: "linear-gradient(135deg, #1B1B2F, #2A1A2F)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "50px",
        color: "#fff",
      }}
    >
      <h2 style={{ fontSize: "3rem", color: "#B86BFF", marginBottom: "40px" }}>
        Contact Me
      </h2>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "100%",
          maxWidth: "500px",
          background: "rgba(255,255,255,0.03)",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0 0 10px #B86BFF, 0 0 20px #E0B0FF",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #B86BFF",
            background: "transparent",
            color: "#fff",
            fontSize: "1rem",
            outline: "none",
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #B86BFF",
            background: "transparent",
            color: "#fff",
            fontSize: "1rem",
            outline: "none",
          }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="6"
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #B86BFF",
            background: "transparent",
            color: "#fff",
            fontSize: "1rem",
            outline: "none",
            resize: "none",
          }}
        ></textarea>

        <button
          type="submit"
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            background: "#B86BFF",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "1.1rem",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 0 4px #B86BFF, 0 0 8px #E0B0FF",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#A55EFF";
            e.currentTarget.style.boxShadow = "0 0 4px #B86BFF, 0 0 20px #E0B0FF";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#B86BFF";
            e.currentTarget.style.boxShadow = "0 0 4px #B86BFF, 0 0 15px #E0B0FF";
          }}
        >
          Send Message
        </button>

        {submitted && (
          <p
            style={{
              color: "#A0FFB0",
              textAlign: "center",
              marginTop: "10px",
              fontWeight: "bold",
            }}
          >
            Message Sent Successfully!
          </p>
        )}
      </form>

      {/* Social & Contact Info */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          textAlign: "center",
        }}
      >
        <h3 style={{ color: "#B86BFF", fontSize: "2rem" }}>Or reach me at</h3>
        <div
          style={{
            display: "flex",
            gap: "25px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <a
            href="https://www.linkedin.com/in/velmani-r/"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#fff",
              textDecoration: "none",
              fontWeight: "bold",
              padding: "8px 12px",
              borderRadius: "8px",
              border: "1px solid #B86BFF",
              boxShadow: "0 0 8px #B86BFF",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#A55EFF";
              e.currentTarget.style.boxShadow = "0 0 12px #B86BFF, 0 0 20px #E0B0FF";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.boxShadow = "0 0 8px #B86BFF";
            }}
          >
            <FaLinkedin /> LinkedIn
          </a>

          <a
            href="https://github.com/Velmani357"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#fff",
              textDecoration: "none",
              fontWeight: "bold",
              padding: "8px 12px",
              borderRadius: "8px",
              border: "1px solid #B86BFF",
              boxShadow: "0 0 4px #B86BFF",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#A55EFF";
              e.currentTarget.style.boxShadow = "0 0 12px #B86BFF, 0 0 20px #E0B0FF";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.boxShadow = "0 0 8px #B86BFF";
            }}
          >
            <FaGithub /> GitHub
          </a>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 12px",
              borderRadius: "8px",
              border: "1px solid #B86BFF",
              boxShadow: "0 0 4px #B86BFF",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            <FaEnvelope /> velmani01.05.06@gmail.com
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 12px",
              borderRadius: "8px",
              border: "1px solid #B86BFF",
              boxShadow: "0 0 8px #B86BFF",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            <FaPhone /> +91 6369157357
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
