import React from "react";
import styles from "./ProjectsStyles.module.css";

function Projects() {
  return (
    <section id="Projects">
      <div className={styles.projectsContainer}>
        <div className={styles.projectsHeading}>
          <h2>My Latest Work</h2>
        </div>
        <div className={styles.projectsContent}></div>
      </div>
    </section>
  );
}
export default Projects;
