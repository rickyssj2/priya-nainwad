import uniqid from "uniqid";
import { projects } from "../../portfolio";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
import "./ProjectSection.css";

const Projects = ({ isHome }) => {
  if (!projects.length) return null;

  return (
    <section id="projects" className="section projects">
      <h2 className="section__title">Projects</h2>

      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} isHome={isHome} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
