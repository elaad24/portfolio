import React from "react";
import ProjectCard from "./ProjectCard";
import Data from "../carousel_DB";
const Projects = () => {
  return (
    <div
      className="  d-flex flex-column mt-5 px-5 align-items-center"
      id="Projects"
    >
      <div className="">
        <h2 className="title dark_mode my-5"> Projects</h2>
      </div>
      <div className=" d-flex justify-content-center flex-wrap gap-5">
        {Data.projects.map((item) => (
          <ProjectCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
