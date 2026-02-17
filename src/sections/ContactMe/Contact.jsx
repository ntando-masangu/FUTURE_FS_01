import React, { useState, useRef } from "react";
import styles from "./ContactStyles.module.css";
import emailIcon from "../../assets/email-light.png";
import callIcon from "../../assets/phone-light.png";
import emailIconDark from "../../assets/email-dark.png";
import callIconDark from "../../assets/phone-dark.png";
import emailjs from "@emailjs/browser";

function Contact({ isDarkMode }) {
  // receive from App
  const form = useRef();
  const [status, setStatus] = useState(""); // "" | "sending" | "success" | "error"

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      () => {
        setStatus("success");
        form.current.reset();
      },
      (error) => {
        console.error("Email failed:", error);
        setStatus("error");
      },
    );
  };

  return (
    <section id="contact" className={styles.contactContainer}>
      <div className={styles.contactHeading}>
        <h2>Contact Me.</h2>
      </div>

      <div className={styles.contactContent}>
        <div className={styles.contactContentLeft}>
          <h2>Let's talk!</h2>
          <p>
            I am currently available for new projects and opportunities. Feel
            free to send me a message.
          </p>
          <div className={styles.contactDetail}>
            <img
              src={isDarkMode ? emailIconDark : emailIcon} // dark mode → dark/white icon
              alt="Email icon"
            />
            <p>ntandomasangu@gmail.com</p>
          </div>

          <div className={styles.contactDetail}>
            <img
              src={isDarkMode ? callIconDark : callIcon} // dark mode → dark/white icon
              alt="Phone icon"
            />
            <p>+27 78 195 0319</p>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            rows="8"
            placeholder="Enter your message"
            required
          />

          <button
            type="submit"
            className={styles.contactFormBtn}
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Submit Now"}
          </button>

          {status === "success" && (
            <p className={styles.successMessage}>
              Message sent successfully! I'll get back to you soon.
            </p>
          )}

          {status === "error" && (
            <p className={styles.errorMessage}>
              Failed to send message. Please try again or email me directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
