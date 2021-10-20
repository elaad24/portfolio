import React, { useContext } from "react";
import { ThemeContext } from "../App";
import Dodel from "../icons/dodle1.png";
import Dodel2 from "../icons/dodle2.png";
import Army from "./Army";
import Education from "./Education";
const About = () => {
  const darkTheme = useContext(ThemeContext);
  return (
    <div
      className="fullPage about 
      "
      id="About"
    >
      <div className="">
        <h2 className={darkTheme ? "dark-title mt-5" : "title mt-5"}> About</h2>
      </div>

      <div className="about-main  ">
        <div className=" d-flex flex-column mx-1 px-5">
          <div
            className={
              darkTheme
                ? "dark-text about-main-text  "
                : "text  about-main-text"
            }
          >
            Industrious worker, ambitious, responsible, team player with
            excellent communication skills, creative and self-motivated learner
            always willing to face new challenges.
          </div>

          <div className="about-section  ">
            <Education />

            <Army />

            <div>
              <img
                className="dodel-about "
                src={darkTheme ? Dodel2 : Dodel}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
