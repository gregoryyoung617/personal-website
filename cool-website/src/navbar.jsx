import "./stylesheets/App.css";
import logo from "./assets/logo.png";

function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-text">About</div>
        <div className="navbar-text">Projects</div>
        <div className="navbar-text">Experience</div>
        <div className="navbar-text">Contact</div>
        <img src={logo} className="logo"></img>
      </div>
    </>
  );
}

export default Navbar;
