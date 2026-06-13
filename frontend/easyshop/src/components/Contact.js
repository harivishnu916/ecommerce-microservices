import React, { useState } from "react";
import "./styles.css";

function Contact() {
  const [success, setSuccess] = useState("");

  const handleSubmit = () => {
    setSuccess(
      "✅ Thank you for contacting us. Our support team will get back to you soon."
    );
  };

  return (
    <div className="contact">
      <h2>NEED ASSISTANCE?</h2>

      <input placeholder="First name" />
      <input placeholder="Last name" />
      <input placeholder="Email address" />
      <input placeholder="Phone number" />
      <textarea placeholder="Message"></textarea>

      <button onClick={handleSubmit}>Send</button>

      {success && (
        <p
          style={{
            color: "green",
            marginTop: "15px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {success}
        </p>
      )}
    </div>
  );
}

export default Contact;