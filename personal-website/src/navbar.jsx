import "./stylesheets/app.css";
import { useEffect, useState } from "react";
import logo from "./svgs/logo.svg";

function scrollTo(element) {
  if (!element) {
    return;
  }
  element.scrollIntoView({ behavior: "smooth" });
  return;
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (selector) => {
    scrollTo(document.querySelector(selector));
    setIsMenuOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <div className="navbar-container">
        <img
          src={logo}
          className="logo"
          onClick={() => handleNavClick(".main-div")}
        ></img>

        <button
          className={`burger-button ${isMenuOpen ? "is-open" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div
          className={`mobile-menu-overlay ${isMenuOpen ? "is-open" : ""}`}
          onClick={() => setIsMenuOpen(false)}
        ></div>

        <div className={`mobile-side-menu ${isMenuOpen ? "is-open" : ""}`}>
          <button
            className="mobile-nav-item"
            onClick={() => handleNavClick(".skills-container")}
          >
            Skills
          </button>
          <button
            className="mobile-nav-item"
            onClick={() => handleNavClick(".projects-section")}
          >
            Projects
          </button>
          <button
            className="mobile-nav-item"
            onClick={() => handleNavClick(".experience-section")}
          >
            Experience
          </button>
          <button
            className="mobile-nav-item"
            onClick={() => handleNavClick(".contact-section")}
          >
            Contact
          </button>
        </div>

        <div className="navbar-desktop-links">
          <div className="navbar-button-container">
            <div
              className="navbar-text"
              onClick={function () {
                scrollTo(document.querySelector(".skills-container"));
              }}
            >
              Skills
            </div>
            <span className="navbar-text-underline"></span>
          </div>
          <div className="navbar-button-container">
            <div
              className="navbar-text"
              onClick={() => scrollTo(document.querySelector(".projects-section"))}
            >
              Projects
            </div>
            <div className="navbar-text-underline"></div>
          </div>

          <div className="navbar-button-container">
            <div
              className="navbar-text"
              onClick={() =>
                scrollTo(document.querySelector(".experience-section"))
              }
            >
              Experience
            </div>
            <div className="navbar-text-underline"></div>
          </div>

          <div className="navbar-button-container">
            <div
              className="navbar-text"
              onClick={() => scrollTo(document.querySelector(".contact-section"))}
            >
              Contact
            </div>
            <div className="navbar-text-underline"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
