import React from "react";
import styles from "./AboutStyles.module.css";

function About() {
  return (
    <section id="about">
      <div className={styles.aboutContainer}>
        <div className={styles.aboutHeading}>
          <h2>About Ntando.</h2>
        </div>
        <div className={styles.aboutContent}>
          <p>
            I am an emerging, beginner frontend developer based in{" "}
            <strong>Johannesburg</strong>, South Africa. <br />
            <br />
            As a recent <strong>Diploma in IT</strong> graduate from{" "}
            <strong>Richfield Graduate Institute of Technology</strong>, I'm
            excited to build beautiful, responsive, and user-friendly websites.
            I love turning ideas into clean, intuitive interfaces and making
            sure every detail feels right for the people who use them. <br />
            <br /> I am eager to collaborate, contribute fresh energy, and work
            on meaningful projects. Let's build something great together!
          </p>
        </div>
        <div className={styles.aboutSkillsHeading}>
          <h2>My Skills</h2>
        </div>
        <div className={styles.aboutSkills}>
          <h3>Core Technologies</h3>
          <ul className={styles.aboutSkillList}>
            <div className={styles.aboutSkillName}>
              <li>HTML5</li>
              <hr style={{ width: "80%" }} />
            </div>
            <div className={styles.aboutSkillName}>
              <li>CSS3</li>
              <hr style={{ width: "60%" }} />
            </div>
            <div className={styles.aboutSkillName}>
              <li>JavaScript (ES6+)</li>
              <hr style={{ width: "20%" }} />
            </div>
          </ul>
          <h3>Frameworks</h3>
          <ul className={styles.aboutSkillList}>
            <div className={styles.aboutSkillName}>
              <li>React.js</li>
              <hr style={{ width: "8%" }} />
            </div>
          </ul>
          <h3>Tools & Libraries</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>VS Code</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
          </ul>
          <h3>Currently Learning</h3>
          <ul>
            <li>React.js</li>
            <li>CSS Animations & Transitions</li>
            <li>CSS Flexbox</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
