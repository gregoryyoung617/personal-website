import "./stylesheets/App.css";
import "./stylesheets/projects.css";

import chefmateimg from "./assets/chefmate.png";
import tmmcimg from "./assets/tmmc.png";

import githubsvg from "./svgs/github.svg";

import pythonsvg from "./svgs/python.svg";
import csvg from "./svgs/c.svg";
import cppsvg from "./svgs/cpp.svg";

import htmlsvg from "./svgs/html.svg";
import csssvg from "./svgs/css.svg";
import javascriptsvg from "./svgs/javascript.svg";
import reactsvg from "./svgs/react.svg";
import firebasesvg from "./svgs/firebase.svg";

function Projects() {
  return (
    <section className="projects-section">
      <div className="section-title">My Projects</div>
      <div className="section-paragraph section-background project">
        <div className="tools-container">
          <div className="project-svg-container">
            <img className="project-svg" src={htmlsvg}></img>
            <img className="project-svg" src={csssvg}></img>
            <img className="project-svg" src={javascriptsvg}></img>
            <img className="project-svg" src={firebasesvg}></img>
          </div>
          <a target="_blank" href="https://github.com/Xoann/TheRecipeBook">
            <img src={githubsvg} className="github-svg"></img>
          </a>
        </div>
        <div className="project-info-container">
          <img className="project-image" src={chefmateimg}></img>

          <h1>ChefMate WebApp</h1>
          <h2 className="project-description">
            A platform to create and share recipes, and a convenient way to keep
            all of your recipes in one place.
          </h2>
        </div>
      </div>

      <div className="section-paragraph section-background project">
        <div className="tools-container">
          <div className="project-svg-container">
            <img className="project-svg" src={pythonsvg}></img>
          </div>
          <a href="https://github.com/gregoryyoung617/TIC2023" target="_blank">
            <img src={githubsvg} className="github-svg"></img>
          </a>
        </div>
        <div className="project-info-container">
          <img className="project-image" src={tmmcimg}></img>

          <h1>Toyota Innovation Challenge 2023</h1>
          <h2 className="project-description">
            A quality control Machine Vision program for use in Toyota vehicle
            production lines.
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Projects;
