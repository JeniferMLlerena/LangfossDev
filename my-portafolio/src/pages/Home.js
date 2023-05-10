import React from "react";
import { SlSocialLinkedin, SlSocialGithub, SlEnvolope } from "react-icons/sl";
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
            <div class="frontend">
              <div><img src={require("../assets/html-5.png")} alt="html-5"/></div>
              <div><img src={require("../assets/css3.png")} alt="css3"/></div>
              <div><img src={require("../assets/sass.png")} alt="sass"/></div>
              <div><img src={require("../assets/javascript.png")} alt="javascript"/></div>
              <div><img src={require("../assets/typescript.png")} alt="typescript"/></div>
              <div><img src={require("../assets/jquery.png")} alt="jquery"/></div>
              <div><img src={require("../assets/rest-api.png")} alt="rest-api"/></div>
              <div><img src={require("../assets/git.png")} alt="git"/></div>
              <div><img src={require("../assets/github.png")} alt="github"/></div>
              <div><img src={require("../assets/react-native.png")} alt="react-native"/></div>
              <div><img src={require("../assets/angularjs.png")} alt="angularjs"/></div>
            </div>
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