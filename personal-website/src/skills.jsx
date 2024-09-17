import "./stylesheets/app.css";
import "./stylesheets/skills.css";
import React, {useEffect} from 'react';
import anime from "animejs/lib/anime.es.js";

import csvg from "./svgs/c.svg";
import cppsvg from "./svgs/cpp.svg";
import pythonsvg from "./svgs/python.svg";

import htmlsvg from "./svgs/html.svg";
import csssvg from "./svgs/css.svg";
import javascriptsvg from "./svgs/javascript.svg";
import reactsvg from "./svgs/react.svg";
import firebasesvg from "./svgs/firebase.svg";
import armsvg from "./svgs/arm.svg"

const SkillSvg = ({svg}) =>{
  return <>
    <img
      className="skill-svg svg-grow-animation"
      src={svg}
    ></img>
  </>
}

function Skills() {

  return (
    <>
      <section className="skills-container">
        <div className="section-title">My Skills</div>
        <div className="skills-section">
          <div className="offset-border section-background">
            <div className="skill">
              <div className="skill-title">Web Development</div>
              <div className="skill-description">
                Experienced with Front-end web design as well as Back-end tools
                through various projects.
              </div>
              <div className="skill-svg-container">
                <SkillSvg svg = {htmlsvg}/>
                <div className="skill-separator"></div>
                <SkillSvg svg = {csssvg}/>
                <div className="skill-separator"></div>
                <SkillSvg svg = {javascriptsvg}/>
                <div className="skill-separator"></div>
                <SkillSvg svg = {reactsvg}/>
                <div className="skill-separator"></div>
                <SkillSvg svg = {firebasesvg}/>
              </div>
            </div>
            <div className="skill">
              <div className="skill-title">Embedded Programming</div>
              <div className="skill-description">
                2 years of experience in Low-level programming through FPGA, Cortex M3 and custom PCB projects.
              </div>
              <div className="skill-svg-container">
                <SkillSvg svg = {csvg}/>
                <div className="skill-separator"></div>
                <SkillSvg svg = {cppsvg}/>
                <div className="skill-separator"></div>
                <SkillSvg svg = {pythonsvg}/>
                <div className="skill-separator"></div>
                <SkillSvg svg = {armsvg}/>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
