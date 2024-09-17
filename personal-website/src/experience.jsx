import "./stylesheets/app.css";
import "./stylesheets/experience.css";

import uwlogo from "./assets/uwlogo.png";
import ttclogo from "./assets/ttclogo.png";
import gtlogo from "./assets/gtlogo.png";
import aafclogo from "./assets/aafclogo.png";
import globalsparklogo from "./assets/globalspark.png";

const ExperienceCard = ({location, date, role, image, index})=>{

  return(
    <>
      <div className="section-background card" style={{gridRow:`${index*7+2}/${(index+1)*7+2}`}}>
          <img src={image} className="experience-logo"></img>
        <div className="item-info-container">
          <h1 className="item-title">{location}</h1>
          <h1 className="item-date">{date}</h1>
          <h1 className="item-role">{role}</h1>
        </div>
      </div>
      <div className="dot" style={{gridRow:`${index * 7 + 5}/${index*7+6}`}}></div>
    </>
  )
}

function Experience() {
  const experiences = [
    {location:"Global Spark", date :"May. 2024 - Aug. 2024", role:"Software Developer", image:globalsparklogo},
    {location:"AAFC Canada", date :"May. 2024 - Aug. 2024", role:"Testing Analyst", image:aafclogo},
    {location:"Grand & Toy", date :"Sep. 2023 - Dec. 2023", role:"IT Infrastructure & Operations", image:gtlogo},
    {location:"Toronto Transit Commission", date :"Jan. 2023 - Apr. 2023", role:"End User Devices Technician", image:ttclogo},
    {location:"University of Waterloo", date :"Sept. 2022 - Present", role:"Bachelor of Applied Science in Computer Engineering", image:uwlogo},
  ];
  return (
    <>
      <section className="experience-section">
        <div className="section-title">My Experience</div>
        <div className="timeline-container">
          <div className="card-container">
            <div className="media-timeline" style={{gridRow:`1/${experiences.length*7 + 5}`}}></div>
            {experiences.map((experience, index)=>(
              <ExperienceCard
                location={experience.location}
                date = {experience.date}
                role = {experience.role}
                image = {experience.image}
                index={index}
                key={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Experience;
