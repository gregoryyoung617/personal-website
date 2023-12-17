import "./stylesheets/App.css";
import logo from "./assets/logo.png";

function scrollTo(element) {
  element.scrollIntoView({ behavior: "smooth" });
  return;
}

function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <div
          className="navbar-text"
          onClick={() => scrollTo(document.querySelector(".skills-container"))}
        >
          Skills
        </div>
        <div
          className="navbar-text"
          onClick={() => scrollTo(document.querySelector(".projects-section"))}
        >
          Projects
        </div>
        <div
          className="navbar-text"
          onClick={() =>
            scrollTo(document.querySelector(".experience-section"))
          }
        >
          Experience
        </div>
        <div
          className="navbar-text"
          onClick={() => scrollTo(document.querySelector(".contact-section"))}
        >
          Contact
        </div>
        <img
          src={logo}
          className="logo"
          onClick={() => scrollTo(document.querySelector(".main-div"))}
        ></img>
      </div>
    </>
  );
}

export default Navbar;
