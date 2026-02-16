import React from "react";
import styles from "./NavigateStyles.module.css";

function Navigate() {
  return (
    <section id="navigate">
      <div className={styles.navigateContainer}>
        <div className={styles.navigateLogo}>NM.</div>
        <ul className={styles.navigateList}>
          <li className={styles.navigateItem}>Home</li>
          <li className={styles.navigateItem}>About Ntando</li>
          <li className={styles.navigateItem}>Projects</li>
          <li className={styles.navigateItem}>Contact Me</li>
        </ul>

        <div className={styles.navigateConnect}>Let's Chat!</div>
      </div>
    </section>
  );
}

export default Navigate;
