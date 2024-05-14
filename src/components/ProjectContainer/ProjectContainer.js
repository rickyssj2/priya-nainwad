import uniqid from "uniqid";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { Link } from "react-router-dom";
import "./ProjectContainer.css";

const ProjectContainer = ({ project }) => (
  <Link to={`Projects/${project.slug}`} state={{ project }} className="project">
    <h3>{project.name}</h3>
    {project.highlight && (
      <p className="project__highlight merriweather-regular">
        {project.highlight}
      </p>
    )}
    <p className="project__description merriweather-regular">
      {project.description}
    </p>
    {project.stack && (
      <ul className="project__stack">
        {project.stack.map((item) => (
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
