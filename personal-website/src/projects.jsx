import "./stylesheets/app.css";
import "./stylesheets/projects.css";
import React, {useState, useEffect} from 'react';

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

const Project = ({github, tools, mainImage, link, title, description})=>{
  return (
    <div className="section-paragraph section-background project">
        <div className="tools-container">
          <div className="project-svg-container">
            {tools.map((tool, index)=>(
              <img key = {index} className="project-svg svg-grow-animation" src={tool}></img>
            ))}
          </div>
          <a target="_blank" href={github}>
            <img
              src={githubsvg}
              className="github-svg svg-grow-animation svg-up-animation"
            ></img>
          </a>
        </div>
        <div className="project-info-container">
          <div className="image-container">
            <a href={link? link:github}  target="_blank">
              <div className="project-image-div">
                <img className="project-image" src={mainImage}></img>
              </div>
            </a>
            {link&&
              <a href={link} target="_blank">
                <img
                  className="open-svg svg-grow-animation svg-up-animation"
                  src={opensvg}
                ></img>
              </a>
            }
          </div>

          <h1>{title}</h1>
          <h2 className="project-description">
            {description}
          </h2>
        </div>
      </div>
  )
}

function Projects() {
  const chefmateSvgs = ["hi", "bye"];

  return (
    <section className="projects-section">
      <div className="section-title">My Projects</div>
      <Project
        github = "https://github.com/Xoann/TheRecipeBook"
        mainImage = {chefmateimg}
        link = "https://chefmate.ca"
        tools = {[htmlsvg, csssvg, javascriptsvg, firebasesvg]}
        title = "ChefMate WebApp"
        description = "A platform to create and share recipes, and a convenient way to keep all of your recipes in one place."
      />

      <Project
        github="https://github.com/gregoryyoung617/TIC2023"
        mainImage = {tmmcimg}
        tools = {[pythonsvg]}
        title = "Toyota Innovation Challenge 2023"
        description = "A quality control Machine Vision program for use in Toyota vehicle production lines."
      />

      <Project
        github="https://github.com/gregoryyoung617/STM32-Environment-Project"
        mainImage={stm32img}
        tools = {[csvg]}
        title="STM32 Climate Change Project"
        description="STM32 Microcontroller program to interface with 2 temperature sensors to measure the insulation efficiency of windows."
      />

    </section>
  );
}

export default Projects;
