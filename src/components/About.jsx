import React, { useContext } from "react";
import { ThemeContext } from "../App";
import Dodel from "../iconsWEBP/dodle1.webp";
import Dodel2 from "../iconsWEBP/dodle2.webp";
import Army from "./Army";
import Education from "./Education";
import Experience from "./Experience";
import Title from "./Title";
const About = () => {
  const darkTheme = useContext(ThemeContext);
  return (
    <div
      className=" about 
      "
      id="About"
    >
      <div className="about-main  ">
        <div className=" d-flex flex-column mx-1 px-5">
          <div className="px-5" style={{paddingLeft:"rem!importent"}}> 
            <Title text={"About Me"} headerTag={2} />
          </div>
          <div
            className={
              darkTheme
                ? "dark-text about-main-text  "
                : "text  about-main-text"
            }
          >
            <span>
              Industrious and ambitious, a team player with excellent
              communication skills and a self-learner with passion to learn and
              always willing to face new challenges.
            </span>
          </div>

          <div
            className={
              darkTheme
                ? "dark-text about-main-text  "
                : "text  about-main-text"
            }
          >
          <Experience/>
          </div>

            
          <div className="about-section  ">
            <div className="d-flex flex-column">
              <Education />

              <Army />
            </div>

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
