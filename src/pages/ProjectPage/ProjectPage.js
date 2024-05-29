import { Container } from "@mui/material";
import Projects from "../../components/Projects/Projects";

const ProjectPage = () => {
  return (
    <Container>
      <Projects isHome={false}></Projects>
    </Container>
  );
};

export default ProjectPage;
