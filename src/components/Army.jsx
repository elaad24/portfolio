import React, { useContext } from "react";
import { ThemeContext } from "../App";

const Army = () => {
  const darkTheme = useContext(ThemeContext);

  return (
    <div>
      <h3
        className={
          darkTheme ? "dark-mini-title text-center" : "mini-title text-center"
        }
      >
        ARMY
      </h3>
      <div className={darkTheme ? "dark-small-Text" : "small-Text"}>
        <div>
          <b>March 2017 - November 2019</b>
          <br />
          <p className="intro ">
            Warrior in the Combat Engineering Corps, released with the rank of
            First Sergeant.
          </p>
          <ul>
            <li>
              Comprehend and analyze information in short periods of time.
            </li>
            <li>
              Experience in writing lesson plans and delivering them, managing
              feedback and standing in front of an audience.
            </li>
            <li>
              Working with a variety of officials - from battalion commander to
              simple soldiers.
            </li>
            <li>
              Immediate preparation for the transition from routine to
              emergency.
            </li>
            <li>
              Filling in for the intelligence officer in his absence, various
              training sessions for soldiers work in short periods of time and
              working with various interfaces
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Army;
