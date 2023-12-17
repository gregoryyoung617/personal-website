import "./stylesheets/App.css";
import "./stylesheets/experience.css";

import uwlogo from "./assets/uwlogo.png";
import ttclogo from "./assets/ttclogo.png";
import gtlogo from "./assets/gtlogo.png";

function Experience() {
  return (
    <>
      <section className="experience-section">
        <div className="section-title">My Experience</div>
        <div className="timeline-container">
          <div className="timeline"></div>
          <div className="card-container">
            <div className="section-background card">
              <img src={uwlogo} className="experience-logo"></img>
              <div className="item-info-container">
                <h1 className="item-title">University of Waterloo</h1>
                <h1 className="item-date">2022 - Present</h1>
                <h1 className="item-role">
                  Bachelor of Applied Science in Computer Engineering
                </h1>
              </div>
            </div>
            <div className="dot"></div>

            <div className="section-background card">
              <img src={ttclogo} className="experience-logo"></img>
              <div className="item-info-container">
                <h1 className="item-title">Toronto Transit Commission</h1>
                <h1 className="item-date">Jan. 2023 - Apr. 2023</h1>
                <h1 className="item-role">End User Devices Technician</h1>
              </div>
            </div>
            <div className="dot"></div>

            <div className="section-background card">
              <img src={gtlogo} className="experience-logo"></img>
              <div className="item-info-container">
                <h1 className="item-title">Grand & Toy</h1>
                <h1 className="item-date">Sep. 2023 - Dec. 2023</h1>
                <h1 className="item-role">PC Support Technician</h1>
              </div>
            </div>
            <div className="dot"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Experience;
