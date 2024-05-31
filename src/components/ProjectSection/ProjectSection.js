import uniqid from "uniqid";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
import "./ProjectSection.css";
import { gql, useQuery } from "@apollo/client";

const PROJECTS = gql`
  query {
    projectCollection {
      items {
        title
        shortDescription
        highlightText
        techStack
        slug
      }
    }
  }
`;

const Projects = ({ isHome }) => {
  const { loading, error, data } = useQuery(PROJECTS);

  if (error) console.log(`Error fetching data: ${error}`);

  return (
    <section id="projects" className="section projects">
      <h2 className="section__title">Projects</h2>
      {loading ? (
        <span>loading ...</span>
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
