import React from "react";
import styles from "./ContactStyles.module.css";
import emailIcon from "../../assets/mail.svg";
import callIcon from "../../assets/call.svg";

function Contact() {
  return (
    <section id="Contact" className={styles.contactContainer}>
      <div className={styles.contactHeading}>
        <h2 style={{ textAlign: "left" }}>Contact Me.</h2>
      </div>
      <div className={styles.contactContent}>
        <div className={styles.contactContentLeft}>
          <h2>Let's talk!</h2>
          <p>
            I am currently available to taking on new projects and
            opportunities. Feel free to send me a message.
          </p>
          <div className={styles.contactDetails}>
            <div className={styles.contactDetail}>
              <img src={emailIcon} alt="Email icon" />
              <p>ntandomasangu@gmail.com</p>
            </div>
            <div className={styles.contactDetail}>
              <img src={callIcon} alt="Call icon" />
              <p>+27 78 195 0319</p>
            </div>
          </div>
        </div>
        <form className={styles.contactForm}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name."
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter your email."
            name="email"
            id="email"
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message."
            id="message"
            required
          ></textarea>
          <button type="submit" className={styles.contactFormBtn}>
            Submit Now
          </button>
        </form>
      </div>
    </section>
  );
}
export default Contact;
