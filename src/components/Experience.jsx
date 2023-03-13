import React, { useContext } from "react";
import { ThemeContext } from "../App";
import Title from "./Title";

const Experience = () => {
  const darkTheme = useContext(ThemeContext);

  return (
    <div style={{ wordBreak: "break-word" }}>
      <Title text={"Experience"} headerTag={3} />
      <div className={darkTheme ? "dark-small-Text" : "small-Text"}>
        <div>
          <b style={{ textDecoration: "underLine" }}> 2022 - Today</b>
          <br />
          <p className="intro">Bynet Software systems - Fullstack Developer</p>
          <ul>
            <li>
              The lead developer in the project, built from scratch a complex
              and large-scale full-stack platform that helps hundreds of people
              to do their jobs better and faster and helps to collect debts for
              the authorities.
            </li>
            <li>
              build and maintain a website, APIs, and databases that connect and
              work with Israeli banks and insurance companies.
            </li>
            <li>work with three different long distence developers teams that implement my platforms into their systems.</li>

          </ul>
        </div>

        <div className="mt-5">
          <b style={{ textDecoration: "underLine" }}> 2021 - 2022</b>
          <br />
          <p className="intro">Bynet Software systems - Frontend Developer</p>
          <ul>
            <li>
              Built from scratch complex and large scale responsive
              web-applications for major companies with React & JS.
              <ul>
                <li>
                  (even one of them won a mark of excellence in the digital
                  transformation category in an organizational portal project
                  for the new General Workers' Union)
                </li>
              </ul>
            </li>
            <li>
              Build and maintain software documentation, git repositories for
              version control.
            </li>
            <li>One of the teams mentors and sprints planner</li>
            <li>Interacting with project manager, QA and graphics designers</li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Experience;
