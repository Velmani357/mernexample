import React from "react";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <p>📞 Phone: +91 98765 43210</p>
        <p>📧 Email: velu@gmail.com</p>
        <p>💼 LinkedIn: <a href="#">linkedin.com/in/velu</a></p>
      </div>
    </section>
  );
};

export default ContactSection;
