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
      className="fullPage mt-5 d-flex flex-column justify-content-start  align-items-center
      "
      id="About"
    >
      <div className="">
        <h2 className={darkTheme ? "dark-title mt-5" : "title mt-5"}> About</h2>
      </div>

      <div className="d-flex text-justify  justify-content-center align-items-center  ">
        <div className=" d-flex flex-column px-5">
          <div className={darkTheme ? "dark-text  " : "text "}>
            Industrious worker, ambitious, responsible, team player with
            excellent communication skills, creative and self-motivated learner
            always willing to face new challenges.
          </div>

          <div className="d-flex gap-5 pt-5 ">
            <div className="d-flex flex-column ">
              <Education />
            </div>
            <div className="d-flex flex-column">
              <Army />
            </div>
          </div>
        </div>
        <div>
          <img className="dodel " src={darkTheme ? Dodel2 : Dodel} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
