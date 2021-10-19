import React from "react";
import DarkModeToggle from "react-dark-mode-toggle";

const NavBar = ({ darkMode, callback }) => {
  return (
    <div className=" navbar">
      <div className={darkMode ? "dark-navbar-bg" : "navbar-bg"}></div>
      <div className="logo"></div>

      <div className="navCategorys ">
        <div className="">
          <a className="navAncors" href="/#About">
            <h2 className={darkMode ? "dark-nav-titles" : "nav-titles"}>
              About
            </h2>
          </a>
        </div>
        <div className="">
          <a className="navAncors" href="/#Projects">
            <h2 className={darkMode ? "dark-nav-titles" : "nav-titles"}>
              Projects
            </h2>
          </a>
        </div>
        <div className="">
          <a className="navAncors" href="/#Contact">
            <h2 className={darkMode ? "dark-nav-titles" : "nav-titles"}>
              Contact
            </h2>
          </a>
        </div>

        <DarkModeToggle onChange={callback} checked={darkMode} />
      </div>
    </div>
  );
};

export default NavBar;
