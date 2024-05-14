import Container from "@mui/material/Container";
import { useParams } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import RoleOfPricePerception from "../../HardCodedPages/RoleOfPricePerception";
import ConsumerPerceivedBrandEthicality from "../../HardCodedPages/ConsumerPerceivedBrandEthicality";

const theme = createTheme({
  typography: {
    fontFamily: "Merriweather",
  },
});

const ProjectDetail = () => {
  let params = useParams();
  if (params.slug === "role-of-price-perception") {
    return (
      <Container maxWidth="md">
        <ThemeProvider theme={theme}>
          <RoleOfPricePerception></RoleOfPricePerception>
        </ThemeProvider>
      </Container>
    );
  }
  if (params.slug === "consumer-perceived-brand-ethicality") {
    return (
      <Container maxWidth="md">
        <ThemeProvider theme={theme}>
          <ConsumerPerceivedBrandEthicality></ConsumerPerceivedBrandEthicality>
        </ThemeProvider>
      </Container>
    );
  }
};

export default ProjectDetail;
