import React, { useEffect } from "react";
import styles from "./NavigateStyles.module.css";

function Navigate() {
  const [activeSection, setActiveSection] = React.useState("hero");
  {
    /* track the active section for navigation highlighting */
  }
  const [menuOpen, setMenuOpen] = React.useState(false);

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
      } /* observer options triggers when 20% of the section is visible */,
    );
    sections.forEach((section) => observer.observe(section));
    // Clean up the observer on component unmount
    return () => observer.disconnect();
  }, []);

  const handleNavigation = (sectionId) => {
    const section = document.getElementById(sectionId);
    {
      /* scroll to the section when a nav name is clicked */
    }
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <section id="navigate">
      <nav className={styles.navigateContainer}>
        <div
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {" "}
          ={" "}
        </div>
        <div className={styles.navigateLogo}>NM.</div>
        <ul
          className={`${styles.navigateList} ${menuOpen ? styles.showMenu : ""}`}
          id={styles.navigateList}
        >
          <li
            className={`${styles.navigateItem} ${activeSection === "hero" ? styles.active : ""}`}
          >
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("hero"); // scroll to the hero section
                setMenuOpen(false); // close the menu if it was opend
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
                setMenuOpen(false);
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
                setMenuOpen(false);
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
                setMenuOpen(false);
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
