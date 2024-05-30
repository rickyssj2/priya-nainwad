import { Container } from "@mui/material";
import ProjectSection from "../../components/ProjectSection/ProjectSection";

const ProjectPage = () => {
  return (
    <Container>
      <ProjectSection isHome={false}></ProjectSection>
    </Container>
  );
};

export default ProjectPage;
