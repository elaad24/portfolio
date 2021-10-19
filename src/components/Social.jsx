import React, { useContext } from "react";
import { ThemeContext } from "../App";
import Git from "../icons/github2.png";
import GithubInvert from "../icons/GithubInvert.png";
import Linkedin from "../icons/linkedin.png";
import LinkedinInvert from "../icons/LinkedinInvert.png";

const Social = () => {
  const darkTheme = useContext(ThemeContext);

  return (
    <div className="fullPage d-flex align-items-center justify-content-around">
      <div className="">
        <div>
          <h1 className={darkTheme ? "dark-large-title" : "large-title "}>
            Elad Dadon
          </h1>
        </div>
        <div className="">
          <h2 className={darkTheme ? "dark-title" : "title"}>
            Full stack Developer
          </h2>
        </div>
        <button
          className={darkTheme ? "btn btn-light" : "btn btn-dark mt-2"}
          onClick={() => window.location.replace("/#About")}
        >
          About me
        </button>
      </div>

      <div className="d-flex socialIconGap ">
        <a className="" href="https://github.com/elaad24" target="_blank">
          <img className="social-icons " src={darkTheme ? GithubInvert : Git} />
        </a>
        <a
          href="https://www.linkedin.com/in/elad-dadon-62772a1b3/"
          target="_blank"
        >
          <img
            className="social-icons"
            src={darkTheme ? LinkedinInvert : Linkedin}
          />
        </a>
      </div>
    </div>
  );
};

export default Social;
