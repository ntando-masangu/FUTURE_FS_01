import "./App.css";
import Hero from "./sections/Hero/Hero";
import Navigate from "./sections/Navigate/Navigate";
import About from "./sections/AboutNtando/About";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/ContactMe/Contact";
import Footer from "./sections/Footer/Footer";

function App() {
  return (
    <>
      <Navigate /> {/*importing the navigate component from navigate.jsx*/}
      <Hero /> {/*importing the hero component from hero.jsx*/}
      <About /> {/*importing the about component from about.jsx*/}
      <Projects /> {/*importing the projects component from projects.jsx*/}
      <Contact /> {/*importing the contact component from contact.jsx*/}
      <Footer /> {/*importing the footer component from footer.jsx*/}
    </>
  );
}

export default App;
