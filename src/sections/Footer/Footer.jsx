import React from "react";
import styles from "./FooterStyles.module.css";
import linkedInIcon from "../../assets/linkedin-light.svg";
import githubIcon from "../../assets/github-light.svg";
import linkedInIconDark from "../../assets/linkedin-dark.svg";
import githubIconDark from "../../assets/github-dark.svg";
import { useState, useEffect } from "react";

function Footer({ isDarkMode }) {
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    if (newTheme) {
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  };
  return (
    <section id="footer">
      <hr styles={{ margin: "50px 170px" }} />
      <div className={styles.footerContainer}>
        <div className={styles.footerContentRight}>
          <h2>NM.</h2>
          <span>
            <a
              href="https://www.linkedin.com/in/ntando-masangu-9b1a4b1b3/"
              target="_blank"
            >
              <img
                src={isDarkMode ? linkedInIconDark : linkedInIcon}
                alt="LinkedIn icon"
              />
            </a>
            <a href="https://github.com/ntando-masangu" target="_blank">
              <img
                src={isDarkMode ? githubIconDark : githubIcon}
                alt="GitHub icon"
              />
            </a>
          </span>
        </div>
        <div className={styles.footerContentLeft}>
          <p>Copyright © 2026 Ntando Masangu</p>
        </div>
      </div>
    </section>
  );
}
export default Footer;
