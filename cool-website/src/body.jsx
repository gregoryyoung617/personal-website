import "./stylesheets/App.css";
import { useRef, useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Projects from "./projects";
import Experience from "./experience";
import Contact from "./contact";
import Skills from "./skills";

function Body() {
  return (
    <main className="main">
      <svg
        id="visual"
        viewBox="0 0 960 540"
        width="960"
        height="540"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        className="peaks-svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M0 403L137 391L274 378L411 398L549 360L686 390L823 387L960 377L960 541L823 541L686 541L549 541L411 541L274 541L137 541L0 541Z"
          fill="#0c0c0c"
        ></path>
        <path
          d="M0 445L137 401L274 445L411 454L549 431L686 418L823 420L960 454L960 541L823 541L686 541L549 541L411 541L274 541L137 541L0 541Z"
          fill="#0f0f0f"
        ></path>
        <path
          d="M0 472L137 451L274 476L411 456L549 478L686 459L823 479L960 479L960 541L823 541L686 541L549 541L411 541L274 541L137 541L0 541Z"
          fill="#111111"
        ></path>
        <path
          d="M0 505L137 484L274 482L411 510L549 513L686 477L823 512L960 484L960 541L823 541L686 541L549 541L411 541L274 541L137 541L0 541Z"
          fill="#141414"
        ></path>
      </svg>
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
