import "./stylesheets/App.css";
import "./stylesheets/experience.css";

function Experience() {
  return (
    <>
      <div className="section-title section-background">My Experience</div>
      <section className="experience-section">
        <div className="timeline-container">
          <div className="timeline"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </section>
    </>
  );
}

export default Experience;
