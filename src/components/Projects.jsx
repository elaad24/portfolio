import ProjectCard from "./ProjectCard";
import Data from "../carousel_DB";
import React, { useContext } from "react";
import { ThemeContext } from "../App";

const Projects = () => {
  const darkTheme = useContext(ThemeContext);
  return (
    <div
      className="  d-flex flex-column mt-5 px-5 align-items-center"
      id="Projects"
    >
      <div className="">
        <h2 className={darkTheme ? "dark-title my-5" : "title my-5"}>
          Projects
        </h2>
      </div>
      <div className=" d-flex justify-content-center flex-wrap Gap  ">
        {Data.projects.map((item) => (
          <ProjectCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
