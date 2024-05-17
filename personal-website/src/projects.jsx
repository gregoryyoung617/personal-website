import "./stylesheets/app.css";
import "./stylesheets/projects.css";

import chefmateimg from "./assets/chefmate.png";
import tmmcimg from "./assets/tmmc.png";
import stm32img from "./assets/stm32logo.png";

import opensvg from "./svgs/open.svg";
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
            <img className="project-svg svg-grow-animation" src={htmlsvg}></img>
            <img className="project-svg svg-grow-animation" src={csssvg}></img>
            <img
              className="project-svg svg-grow-animation"
              src={javascriptsvg}
            ></img>
            <img
              className="project-svg svg-grow-animation"
              src={firebasesvg}
            ></img>
          </div>
          <a target="_blank" href="https://github.com/Xoann/TheRecipeBook">
            <img
              src={githubsvg}
              className="github-svg svg-grow-animation svg-up-animation"
            ></img>
          </a>
        </div>
        <div className="project-info-container">
          <div className="image-container">
            <div className="project-image-div">
              <img className="project-image" src={chefmateimg}></img>
            </div>
            <a href="https://chefmate.ca" target="_blank">
              <img
                className="open-svg svg-grow-animation svg-up-animation"
                src={opensvg}
              ></img>
            </a>
          </div>

          <h1>ChefMate WebApp</h1>
          <h2 className="project-description">
            A platform to create and share recipes, and a convenient way to keep
            all of your recipes in one place.
          </h2>
        </div>
      </div>

      <div className="section-paragraph section-background project">
        <div className="tools-container">
          <div className="project-svg-container ">
            <img
              className="project-svg svg-grow-animation"
              src={pythonsvg}
            ></img>
          </div>
          <a href="https://github.com/gregoryyoung617/TIC2023" target="_blank">
            <img
              src={githubsvg}
              className="github-svg svg-grow-animation svg-up-animation"
            ></img>
          </a>
        </div>
        <div className="project-info-container">
          <div className="project-image-div">
            <img className="project-image" src={tmmcimg}></img>
          </div>

          <h1>Toyota Innovation Challenge 2023</h1>
          <h2 className="project-description">
            A quality control Machine Vision program for use in Toyota vehicle
            production lines.
          </h2>
        </div>
      </div>

      <div className="section-paragraph section-background project">
        <div className="tools-container">
          <div className="project-svg-container">
            <img className="project-svg svg-grow-animation" src={csvg}></img>
          </div>
          <a
            href="https://github.com/gregoryyoung617/STM32-Environment-Project"
            target="_blank"
          >
            <img
              src={githubsvg}
              className="github-svg svg-grow-animation svg-up-animation"
            ></img>
          </a>
        </div>
        <div className="project-info-container">
          <div className="project-image-div">
            <img className="project-image" src={stm32img}></img>
          </div>

          <h1>STM32 Climate Change Project</h1>
          <h2 className="project-description">
            STM32 Microcontroller program to interface with 2 temperature
            sensors to measure the insulation efficiency of windows.
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Projects;
