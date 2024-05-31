import uniqid from "uniqid";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { Link } from "react-router-dom";
import "./ProjectContainer.css";

const ProjectContainer = ({ project, isHome }) => (
  <Link
    to={isHome ? `projects/${project.slug}` : `${project.slug}`}
    state={{ project }}
    className="project"
  >
    <h3>{project.title}</h3>
    {project.highlightText && (
      <p className="project__highlight merriweather-regular">
        {project.highlightText}
      </p>
    )}
    <p className="project__description merriweather-regular">
      {project.shortDescription}
    </p>
    {project.techStack && (
      <ul className="project__stack">
        {project.techStack.map((item) => (
          <li key={uniqid()} className="project__stack-item">
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label="source code"
        className="link link--icon"
      >
        <GitHubIcon />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label="live preview"
        className="link link--icon"
      >
        <LaunchIcon />
      </a>
    )}
  </Link>
);

export default ProjectContainer;
