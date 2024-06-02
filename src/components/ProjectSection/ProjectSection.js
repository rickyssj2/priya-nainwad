import uniqid from "uniqid";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
import "./ProjectSection.css";
import { useQuery } from "@apollo/client";
import { PROJECTS } from "./ProjectsQuery";
import { Skeleton } from "@mui/material";

const Projects = ({ isHome }) => {
  const { loading, error, data } = useQuery(PROJECTS);

  if (error) console.log(`Error fetching data: ${error}`);

  return (
    <section id="projects" className="section projects">
      <h2 className="section__title">Projects</h2>
      {loading ? (
        <div className="projects__grid">
          <Skeleton variant="rounded" width="100%" height={350}></Skeleton>
          <Skeleton variant="rounded" width="100%" height={350}></Skeleton>
        </div>
      ) : (
        <div className="projects__grid">
          {data?.projectCollection.items.map((project) => (
            <ProjectContainer
              key={uniqid()}
              project={project}
              isHome={isHome}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
