// components
import NavBar from "./components/NavBar";
import Social from "./components/Social";
import About from "./components/About";
import Footer from "./components/Footer";

import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import Projects from "./components/Projects";

export const ThemeContext = React.createContext();

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const [scrollValue, setScrollValue] = useState(0);

  //let scrollY = window.scrollY;
  window.addEventListener("scroll", () => {
    setScrollValue(window.scrollY);
  });
  const moveSuperSlow = scrollValue;
  const moveSlow = scrollValue * 1.5;
  const moveFast = scrollValue * 2.5;
  // const moveSiperFast = scrollValue * 7;

  useEffect(() => {
    // check if the location ( x value ) of the ball is greater then the size of
    //the screen and if it does reimove it
    // and if it doesnt any more its set it to normal

    if (moveFast < window.screen.width) {
      document.querySelector("#circulToRight").style.top = `${moveSuperSlow}px`;
      document.querySelector("#circulToRight").style.left = `${moveFast}px`;
    }
    if (moveFast >= window.screen.width - 150) {
      document.querySelector("#circulToRight").style.display = "none";
    } else if (moveFast < window.screen.width) {
      document.querySelector("#circulToRight").style.display = "block";
    }

    if (scrollValue > window.screen.height * 2) {
      document.querySelector("#circulUp").style.display = "none";
    } else {
      document.querySelector("#circulUp").style.display = "block";
    }

    document.querySelector("#circulUp").style.top = `${moveSlow}px`;
    document.querySelector(
      "#circulUp"
    ).style.transform = `rotate(${moveSuperSlow}deg)`;

    document.querySelector(
      "#circulToRight"
    ).style.transform = `rotate(${moveSuperSlow}deg)`;
  }, [scrollValue]);

  return (
    <>
      <ThemeContext.Provider value={isDarkMode}>
        <div className={isDarkMode ? "DarkApp" : "App"}>
          <header className="App-header">
            <NavBar darkMode={isDarkMode} callback={setIsDarkMode} />
          </header>
          <div className="">
            <div
              id="circulUp"
              className={isDarkMode ? "dark-circulUp" : "circulUp"}
            ></div>
            <div
              id="circulToRight"
              className={isDarkMode ? "dark-circulToRight" : "circulToRight"}
            ></div>
          </div>
          <main>
            <Social />
            <About />
            <Projects />
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
