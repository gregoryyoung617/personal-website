import "./App.css";

import chefmateimg from "./assets/chefmate.png";
import tmmcimg from "./assets/tmmc.png";

import python from "./svgs/python.svg";

function project(title, description, tools, columnStartEnd, key, image = null) {
  this.title = title;
  this.description = description;
  this.tools = tools;
  this.columnStartEnd = columnStartEnd;
  (this.key = key), (this.image = image);
}

function Projects() {
  const toolSvgs = new Map([["python", python]]);

  const project1 = new project(
    "Toyota Innovation Challenge",
    "A quality control Machine Vision program for use in Toyota vehicle production lines.",
    ["python"],
    ["1", "6"],
    "toyota",
    tmmcimg
  );

  const project2 = new project(
    "ChefMate WebApp",
    "A platform to create and share recipes, and a convenient way to keep all of your recipes in one place",
    ["firebase", "html", "css", "javascript"],
    ["3", "9"],
    "chefmate",
    chefmateimg
  );

  const projects = [project1, project2];

  return (
    <>
      <div className="section-title">My Projects</div>
      <section className="projects-section">
        {projects.map((project) => (
          <div
            className="section-paragraph section-background project"
            custom-grid-column-start={project.columnStartEnd[0]}
            custom-grid-column-end={project.columnStartEnd[1]}
            key={project.key + "-section"}
          >
            <img className="project-image" src={project.image}></img>

            <h1>{project.title}</h1>
            <h2 className="project-description">{project.description}</h2>
            <h2>Tools used:</h2>
            <div className="project-tool-container">
              {project.tools.map((tool) => {
                <img src={toolSvgs[tool]}></img>;
              })}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Projects;
