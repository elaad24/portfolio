import React, { useContext } from "react";
import { ThemeContext } from "../App";

const Education = () => {
  const darkTheme = useContext(ThemeContext);

  return (
    <div>
      <h3 className={darkTheme ? "dark-mini-title" : " mini-title "}>
        EDUCATION
      </h3>

      <div className={darkTheme ? "dark-small-Text" : " small-Text"}>
        <p>
          <b>Aug 2020 - Apr 2021</b>
          <br />
          &#8226; Full Stack Development- Hackeru college.
          <br />
          &#9866; GPA: 100
          <br />
          <br />
          <b>Sep 2013 - Jun 2016</b>
          <br />
          &#8226; High School Diploma - Gimnasia Realit
        </p>
        <br />
        <hr />
      </div>
    </div>
  );
};

export default Education;
