import "./App.css";
import { useRef, useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Projects from "./projects";
import Experience from "./experience";
import Contact from "./contact";

function Body() {
  gsap.registerPlugin(ScrollTrigger);

  let aboutRef = useRef(null);
  useEffect(() => {
    let el = aboutRef.current;
    let aboutTl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top center",
        end: "bottom center",
        scrub: true,
        markers: true,
      },
    });
    aboutTl.to(el, {
      rotation: 180,
      duration: 1,
    });

    // aboutRef.addEventListener("mousemove", (e) => {
    //   const rect = aboutRef.getBoundingClientRect();
    //   let x = e.clientX - rect.left;
    //   let y = e.clientY - rect.top;

    //   rect.style.setProperty("--mouse-x", `${x}px`);
    //   rect.style.setProperty("--mouse-y", `${y}px`);
    // });
  }, []);

  return (
    <main className="main">
      <div className="section-title">About Me</div>
      <section className="about-container">
        <div
          className="section-paragraph section-background"
          ref={(el) => {
            aboutRef = el;
          }}
        >
          Hi there! I'm a fan of all things programming and technology, and I
          love learning new skills and taking on different challenges.
        </div>
      </section>

      <Projects></Projects>

      <Experience></Experience>

      <Contact></Contact>
    </main>
  );
}

export default Body;
