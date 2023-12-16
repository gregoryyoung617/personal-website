import "./stylesheets/app.css";
import "./stylesheets/skills.css";

import csvg from "./svgs/c.svg";
import cppsvg from "./svgs/cpp.svg";
import pythonsvg from "./svgs/python.svg";

import htmlsvg from "./svgs/html.svg";
import csssvg from "./svgs/css.svg";
import javascriptsvg from "./svgs/javascript.svg";
import reactsvg from "./svgs/react.svg";
import firebasesvg from "./svgs/firebase.svg";

function Skills() {
  return (
    <>
      <section className="skills-container">
        <div className="section-title">My Skills</div>
        <div className="skills-section section-background">
          <div className="skill">
            <div className="skill-title">Web Development</div>
            <div className="skill-description">
              Experienced with Front-end web design as well as Back-end tools
              through various projects.
            </div>
            <div className="skill-svg-container">
              <img className="skill-svg" src={htmlsvg}></img>
              <div className="skill-separator"></div>
              <img className="skill-svg" src={csssvg}></img>
              <div className="skill-separator"></div>
              <img className="skill-svg" src={javascriptsvg}></img>
              <div className="skill-separator"></div>
              <img className="skill-svg" src={reactsvg}></img>
              <div className="skill-separator"></div>
              <img className="skill-svg" src={firebasesvg}></img>
            </div>
          </div>
          <div className="skill">
            <div className="skill-title">Other Programming Languages</div>
            <div className="skill-description">
              4 years of experience in Object-Oriented Programming, Data
              Structures and Algorithms.
            </div>
            <div className="skill-svg-container">
              <img className="skill-svg" src={csvg}></img>
              <div className="skill-separator"></div>
              <img className="skill-svg" src={cppsvg}></img>
              <div className="skill-separator"></div>
              <img className="skill-svg" src={pythonsvg}></img>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
