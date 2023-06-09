import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <br />
      <div className="projectList">
        {ProjectList.map((project, index) => {
          return (
            <ProjectItem id={index} name={project.name} image={project.image} skills={project.skills}/>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
