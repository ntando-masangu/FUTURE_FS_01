import styles from "./HeroStyles.module.css";
import heroImage from "../../assets/hero-image.png";
import linkedInIcon from "../../assets/linkedin-light.svg";
import githubIcon from "../../assets/github-light.svg";
import linkedInIconDark from "../../assets/linkedin-dark.svg";
import githubIconDark from "../../assets/github-dark.svg";
import CV from "../../assets/NtandoMasangu_CV.pdf";
import { IonIcon } from "@ionic/react";
import { sunny, moon } from "ionicons/icons";

{
  /* Hero component */
}
function Hero({ isDarkMode }) {
  return (
    <section id="hero">
      <div className={styles.heroContainer}>
        <img
          className={styles.heroImg}
          src={heroImage}
          alt="Ntando Masangu's Hero Image"
        />
        <div className={styles.heroInfo}>
          <div className={styles.heading}>Hi, I'm</div>{" "}
          <h1 className={styles.heroName}>Ntando Masangu</h1>
          <h2>Novice Frontend Developer</h2>
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
          <p>
            Passionate about creating clean, efficient, and user-friendly web
            applications.
          </p>
          <a href={CV} download>
            <button className={styles.heroAction}>Download CV</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
