import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import { SlSocialGithub } from "react-icons/sl";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name.toUpperCase()}</h1>
      <img src={project.image} alt={project.name}/>
      <p>
        <b>SKILLS:</b> {project.skills.toUpperCase()}
      </p>
      <SlSocialGithub />
    </div>
  );
}

export default ProjectDisplay;
