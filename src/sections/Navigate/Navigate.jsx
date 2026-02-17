import React, { useEffect } from "react";
import styles from "./NavigateStyles.module.css";

function Navigate() {
  const [activeSection, setActiveSection] = React.useState("hero");
  {
    /* State to track the active section for navigation highlighting */
  }

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first section that is intersecting (most visible)
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-80px 0px -40px 0px",
        threshold: 0.2,
      } /* Observer options to trigger when 20% of the section is visible, with some margin for earlier detection */,
    );
    sections.forEach((section) => observer.observe(section));
    // Clean up the observer on component unmount
    return () => observer.disconnect();
  }, []);

  const handleNavigation = (sectionId) => {
    const section = document.getElementById(sectionId);
    {
      /* Scroll to the section when a navigation item is clicked */
    }
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId); // Update active section immediately on click for better UX, even before the observer updates it based on scroll position
    }
  };

  return (
    <section id="navigate">
      <nav className={styles.navigateContainer}>
        <div className={styles.navigateLogo}>NM.</div>
        <ul className={styles.navigateList}>
          <li
            className={`${styles.navigateItem} ${activeSection === "hero" ? styles.active : ""}`}
          >
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("hero");
              }}
            >
              Home
            </a>
          </li>
          <li
            className={`${styles.navigateItem} ${activeSection === "about" ? styles.active : ""}`}
          >
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("about");
              }}
            >
              About Ntando
            </a>
          </li>
          <li
            className={`${styles.navigateItem} ${activeSection === "projects" ? styles.active : ""}`}
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("projects");
              }}
            >
              Projects
            </a>
          </li>
          <li
            className={`${styles.navigateItem} ${activeSection === "contact" ? styles.active : ""}`}
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("contact");
              }}
            >
              Contact Me
            </a>
          </li>
        </ul>

        <div className={styles.navigateConnect}>Let's Chat!</div>
      </nav>
    </section>
  );
}

export default Navigate;
