import React, { useContext } from "react";
import { ThemeContext } from "../App";
import Title from "./Title";

const Education = () => {
  const darkTheme = useContext(ThemeContext);

  return (
    <div>
      <Title text={"EDUCATION"} headerTag={3} />

      <div
        className={
          darkTheme
            ? "dark-small-Text educationBody"
            : " small-Text educationBody"
        }
      >
        <div className="">
          <p>
            <b>Aug 2020 - Apr 2021 &#9866; GPA: 100</b>
            <br />
            &#8226; Full Stack Development- Hackeru college.
            <br />
            <hr />
          </p>
        </div>
        <div className="">
          <p>
            <b>Sep 2013 - Jun 2016</b>
            <br />
            &#8226; High School Diploma - Gimnasia Realit
            <hr />
          </p>
        </div>

        <hr />
      </div>
    </div>
  );
};

export default Education;
