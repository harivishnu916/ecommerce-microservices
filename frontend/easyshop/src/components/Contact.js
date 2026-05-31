import React from "react";
import "./styles.css";

function Contact() {
  return (
    <div className="contact">
      <h2>NEED ASSISTANCE?</h2>

      <input placeholder="First name" />
      <input placeholder="Last name" />
      <input placeholder="Email address" />
      <input placeholder="Phone number" />
      <textarea placeholder="Message"></textarea>

      <button>Send</button>
    </div>
  );
}

export default Contact;