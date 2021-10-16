import React from "react";
import DarkModeToggle from "react-dark-mode-toggle";

const NavBar = ({ darkMode, callback }) => {
  return (
    <div className=" navbar">
      <div className="navbar-bg dark_mode"></div>
      <div className="logo"></div>

      <div className="navCategorys ">
        <div className="">
          <a className="navAncors" href="/#About">
            <h2 className="nav-titles dark_mode">About</h2>
          </a>
        </div>
        <div className="">
          <a className="navAncors" href="/#Projects">
            <h2 className="nav-titles dark_mode">Projects</h2>
          </a>
        </div>
        <div className="">
          <a className="navAncors" href="/#Contact">
            <h2 className="nav-titles dark_mode">Contact</h2>
          </a>
        </div>

        <DarkModeToggle onChange={callback} checked={darkMode} />
      </div>
    </div>
  );
};

export default NavBar;
