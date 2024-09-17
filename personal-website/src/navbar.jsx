import "./stylesheets/app.css";
import logo from "./svgs/logo.svg";

function scrollTo(element) {
  element.scrollIntoView({ behavior: "smooth" });
  return;
}

function Navbar() {
  return (
    <>
      <div className="navbar-container">
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
            onClick={() =>
              scrollTo(document.querySelector(".projects-section"))
            }
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
