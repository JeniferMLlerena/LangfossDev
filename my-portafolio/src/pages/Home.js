import React from "react";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialGithub } from "react-icons/sl";
import { SlEnvolope } from "react-icons/sl";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h1> Hello, World!_</h1>
        <h2> My Name is Jenifer</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <SlSocialLinkedin /> { " " }
          <SlEnvolope /> { " " }
          <SlSocialGithub /> 
        </div>
        <br />
        <br />
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM,
              Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C#, C, C++, TypeScript, Go</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;