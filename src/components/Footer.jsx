import Git from "../iconsWEBP/github2.webp";
import Linkedin from "../iconsWEBP/linkedin.webp";
import ResomePic from "../iconsWEBP/resomepic.webp";
import ResomePicInvert from "../iconsWEBP/resomepicInvert.webp";
import Whatsup from "../iconsWEBP/whatsup.webp";
import WhatsupInvert from "../iconsWEBP/WhatsupInvert.webp";
/* import Resome from "../Elad_Dadon_cv_v2.2.2.pdf";*/
import React, { useContext } from "react";
import { ThemeContext } from "../App";
import GithubInvert from "../iconsWEBP/GithubInvert.webp";

import LinkedinInvert from "../iconsWEBP/LinkedinInvert.webp";

const Footer = () => {
  const darkTheme = useContext(ThemeContext);
  return (
    <div id="Contact" className="  pt-4 mb-5">
      <div
        className={darkTheme ? "dark-navbar-bg-bottom" : "  navbar-bg-bottom"}
      ></div>
      <div className="navCategorys  d-flex flex-column text-center pt-3">
        <h1 className={darkTheme ? " dark-title" : "title"}>Elad Dadon</h1>
        <a
          className={
            darkTheme ? "navAncors dark-nav-titles" : "navAncors nav-titles"
          }
          href="mailto:elaad2408@gmail.com"
        >
          Elaad2408@gmail.com
        </a>
        <div className="d-flex justify-content-center gap-3 mt-2 dark_mode ">
          <a className="" href="https://github.com/elaad24" target="_blank">
            <img
              className="bottom-nav-icons "
              src={darkTheme ? GithubInvert : Git}
              alt="git-hub logo "
            />
          </a>
          <a
            href="https://www.linkedin.com/in/elad-dadon-62772a1b3/"
            target="_blank"
          >
            <img
              className="bottom-nav-icons"
              src={darkTheme ? LinkedinInvert : Linkedin}
              alt="Linkedin logo "
            />
          </a>
          {/*   <a href={Resome} download>
            <img
              className="bottom-nav-icons"
              src={darkTheme ? ResomePicInvert : ResomePic}
              alt="Resome logo "
            />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
