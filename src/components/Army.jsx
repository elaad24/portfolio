import React, { useContext } from "react";
import { ThemeContext } from "../App";
import Title from "./Title";

const Army = () => {
  const darkTheme = useContext(ThemeContext);

  return (
    <div style={{ wordBreak: "break-word" }}>
      <Title text={"ARMY"} headerTag={3} />
      <div className={darkTheme ? "dark-small-Text" : "small-Text"}>
        <div>
          <b>March 2017 - November 2019</b>
          <br />
          <p className="intro ">
          Serving as a warrior in the Combat Engineering Corps, released as First Sergeant.
          </p>
          <ul>
            <li>
              Comprehend and analyze information in short periods of time.
            </li>
            <li>
              Experience in writing, plannig and delivering lessons, and
              standing in front of an audience.
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Army;
