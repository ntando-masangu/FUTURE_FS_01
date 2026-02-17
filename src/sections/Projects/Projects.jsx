import React from "react";
import styles from "./ProjectsStyles.module.css";
import projects from "../../data/project.js";

function Projects() {
  return (
    <section id="projects">
      <div className={styles.projectsContainer}>
        <div className={styles.projectsHeading}>
          <h2>My Latest Work.</h2>
        </div>
        <div className={styles.projectSubHeading}>
          <p>Here are some of my recent projects.</p>
        </div>

        <div className={styles.projectsContent}>
          {" "}
          {/* add class for styling */}
          {projects.length === 0 ? (
            <p>No projects available yet.</p>
          ) : (
            projects.map((proj, index) => (
              <div key={index} className={styles.projectCard}>
                <div className={styles.projectTitle}>
                  <h3>{proj.title}</h3>
                </div>
                {proj.image && (
                  <img
                    src={proj.image}
                    alt={`${proj.title} screenshot`}
                    className={styles.projectImage}
                  />
                )}

                <p>{proj.description}</p>

                <div className={styles.projectTech}>
                  <p>{proj.technologies && proj.technologies.join(" | ")}</p>
                </div>
                <button
                  onClick={() => window.open(proj.liveDemoLink, "_blank")}
                  className={styles.projectBtnLiveDemo}
                >
                  {" "}
                  Live Demo
                </button>
                <button
                  onClick={() => window.open(proj.repositoryLink, "_blank")}
                  className={styles.projectBtnGitHub}
                >
                  {" "}
                  Source Code
                </button>

                {/* Optional: add tech tags, links, etc. */}
                {proj.tags && (
                  <div className={styles.tags}>
                    {proj.tags.map((tag, i) => (
                      <span key={i} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
