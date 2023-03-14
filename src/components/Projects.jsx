import ProjectCard from "./ProjectCard";
import Data from "../carousel_DB";
import React, { useContext } from "react";
import { ThemeContext } from "../App";
import Title from "./Title";

const Projects = () => {
  const darkTheme = useContext(ThemeContext);
  return (
    <div style={{ width: "90%", margin: "auto" }} className="" id="Projects">
      <div className="">
        <Title headerTag={2} text={"Projects"} />
      </div>
      {console.log("Data", Data)}
      <div className=" d-flex justify-content-center flex-wrap Gap  ">
        {Data?.map((item,index) => (
          <ProjectCard item={item}  />
        ))}
      </div>
    </div>
  );
};

export default Projects;
