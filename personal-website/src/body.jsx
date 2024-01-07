import "./stylesheets/App.css";
import { useRef, useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Projects from "./projects";
import Experience from "./experience";
import Contact from "./contact";
import Skills from "./skills";

import background from "./svgs/transition.svg";

function Body() {
  return (
    <main className="main">
      <img className="transition-svg" src={background}></img>
      <div className="section-container">
        <Skills></Skills>

        <Projects></Projects>

        <Experience></Experience>

        <Contact></Contact>
      </div>
    </main>
  );
}

export default Body;
