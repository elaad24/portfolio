import React from "react";
import Dodel from "../icons/dodle1.png";
import Linkedin from "../icons/linkedin.png";
import Army from "./Army";
import Education from "./Education";

const About = () => {
  return (
    <div
      className="fullPage mt-5 d-flex flex-column justify-content-start align-items-center
      "
      id="About"
    >
      <div className="">
        <h2 className="title dark_mode mt-5"> About</h2>
      </div>

      <div className="d-flex text-start  justify-content-around align-items-center">
        <div className=" d-flex flex-column px-5">
          <div className="text width-80">
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
          <img className="dodel" src={Dodel} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
