import { useState, useEffect } from "react";
import "./App.css";
import Hero from "./sections/Hero/Hero";
import Navigate from "./sections/Navigate/Navigate";
import About from "./sections/AboutNtando/About";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/ContactMe/Contact";
import Footer from "./sections/Footer/Footer";

import { IonIcon } from "@ionic/react";
import { sunny, moon } from "ionicons/icons";

import styles from "./sections/Hero/HeroStyles.module.css"; // ← correct import

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      const isDark = savedTheme === "dark";
      setIsDarkMode(isDark);
      document.body.classList.toggle("dark-theme", isDark);
    }
    // Optional: fallback to system preference if no saved theme
    else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDarkMode(true);
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.body.classList.toggle("dark-theme", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  return (
    <>
      <IonIcon
        className={styles.themeIcon} // ← fixed: use styles.themeIcon
        icon={isDarkMode ? moon : sunny}
        onClick={toggleTheme}
      />

      <Navigate />
      <Hero isDarkMode={isDarkMode} />
      <About />
      <Projects />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}

export default App;
