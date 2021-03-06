import React, { useContext } from "react";
import { ThemeContext } from "../App";
import Git from "../icons/github2.png";
import GithubInvert from "../icons/GithubInvert.png";
import Linkedin from "../icons/linkedin.png";
import LinkedinInvert from "../icons/LinkedinInvert.png";
import Dodel from "../icons/dodle1.png";
import Dodel2 from "../icons/dodle2.png";

const Social = () => {
  const darkTheme = useContext(ThemeContext);

  return (
    <div className="fullPage social-upper">
      <div className=" social-main ">
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
            <img
              className="social-icons "
              src={darkTheme ? GithubInvert : Git}
              alt="Github logo "
            />
          </a>
          <a
            href="https://www.linkedin.com/in/elad-dadon-62772a1b3/"
            target="_blank"
          >
            <img
              className="social-icons"
              src={darkTheme ? LinkedinInvert : Linkedin}
              alt="Linkedin logo "
            />
          </a>
        </div>
      </div>
      <div className="d-flex align-self-center">
        <img
          className="dodel   "
          src={darkTheme ? Dodel2 : Dodel}
          alt="dodel"
        />
      </div>
    </div>
  );
};

export default Social;
