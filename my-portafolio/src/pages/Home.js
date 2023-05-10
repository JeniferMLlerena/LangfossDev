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
        <div className="list">
          <h2> Front-End</h2>
          <div class="frontend">
              <div class="skillIcon"><img src={require("../assets/html-5.png")} alt="html-5"/><div>HTML</div></div>
              <div class="skillIcon"><img src={require("../assets/css3.png")} alt="css3"/><div>CSS3</div></div>
              <div class="skillIcon"><img src={require("../assets/sass.png")} alt="sass"/><div>SASS</div></div>
              <div class="skillIcon"><img src={require("../assets/jquery.png")} alt="jquery"/><div>jQuery</div></div>
              <div class="skillIcon"><img src={require("../assets/git.png")} alt="git"/><div>GIT</div></div>
              <div class="skillIcon"><img src={require("../assets/github.png")} alt="github"/><div>Github</div></div>
              <div class="skillIcon"><img src={require("../assets/react-native.png")} alt="react-native"/><div>React</div></div>
              <div class="skillIcon"><img src={require("../assets/angularjs.png")} alt="angularjs"/><div>Angular</div></div>
              <div class="skillIcon"><img src={require("../assets/rest-api.png")} alt="rest-api"/><div>Rest API</div></div>
              <div class="skillIcon"><img src={require("../assets/javascript.png")} alt="javascript"/><div>Javascript</div></div>
              <div class="skillIcon"><img src={require("../assets/typescript.png")} alt="typescript"/><div>Typescript</div></div>
              <div class="skillIcon"><img src={require("../assets/woocommerce.png")} alt="woocommerce "/><div>WooCommerce</div></div>
              <div class="skillIcon"><img src={require("../assets/w3c.png")} alt="w3c "/><div>W3C</div></div>
              <div class="skillIcon"><img src={require("../assets/wordpress.png")} alt="wordpress "/><div>Wordpress</div></div>
              <div class="skillIcon"><img src={require("../assets/console.png")} alt="console"/><div>Command Line</div></div>
              <div class="skillIcon"><img src={require("../assets/performance.png")} alt="web-performance"/><div>Web Performance</div></div>
              <div class="skillIcon"><img src={require("../assets/web-accessibility.png")} alt="web-accessibility"/><div>Web Accessibility</div></div>
              <div class="skillIcon"><img src={require("../assets/web-design.png")} alt="web-design "/><div>Responsive Web Design </div></div>
          </div>
        </div>
        <br /><br /><br />
        
        <div className="list">
          <h2>Back-End</h2>            
          <div class="backend">
            <div class="skillIcon"><img src={require("../assets/node-js.png")} alt="NodeJS"/><div>NodeJS</div></div>
            <div class="skillIcon"><img src={require("../assets/mongodb.png")} alt="MongoDB"/><div>MongoDB</div></div>
            <div class="skillIcon"><img src={require("../assets/postgresql.png")} alt="PostgreSQL"/><div>PostgreSQL</div></div>
            <div class="skillIcon"><img src={require("../assets/mysql.png")} alt="MySQL"/><div>MySQL</div></div>
            <div class="skillIcon"><img src={require("../assets/amazon-s3.png")} alt="AWS S3"/><div>AWS S3</div></div>
          </div>
        </div>
        <br /><br /><br />

        <div className="list">
          <h2>Languages</h2>            
          <div class="backend">
            <div class="skillIcon"><img src={require("../assets/php.png")} alt="PHP"/><div>PHP</div></div>
              <div class="skillIcon"><img src={require("../assets/javascript.png")} alt="javascript"/><div>Javascript</div></div>
              <div class="skillIcon"><img src={require("../assets/typescript.png")} alt="typescript"/><div>Typescript</div></div>
            <div class="skillIcon"><img src={require("../assets/java.png")} alt="Java"/><div>Java</div></div>
            <div class="skillIcon"><img src={require("../assets/python.png")} alt="Python"/><div>Python</div></div>
            <div class="skillIcon"><img src={require("../assets/c-sharp.png")} alt="C#"/><div>C#</div></div>
            <div class="skillIcon"><img src={require("../assets/c++.png")} alt="C++"/><div>C++</div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;