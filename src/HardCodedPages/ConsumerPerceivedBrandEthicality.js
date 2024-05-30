import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import "./blog.css";
import blogHeroImage from "../components/Assets/brand-ethicality.png";
import brandEthicality1 from "../components/Assets/brand-ethicality-1.jpg";
import BlogImage from "../components/BlogImage/BlogImage";
import DownloadButton from "../components/DownloadButton/DownloadButton";
import pdfFile from "../components/Assets/Consumer-Perceived-Brand-Ethicality.pdf";
import { useEffect } from "react";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";

const ConsumerPerceivedBrandEthicality = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <BreadCrumbs projectTitle="Consumer Perceived Brand Ethicality"></BreadCrumbs>

      <Box>
        <Box>
          <h1 className="heading dm-serif-display-regular ">
            Consumer Perceived Brand Ethicality
          </h1>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <AccessTimeIcon fontSize="small"></AccessTimeIcon>
            <Typography fontSize="small" marginX="0.5em">
              1 min read
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            marginY: "2rem",
          }}
        >
          <Typography variant="body2" component="p" marginTop={1}>
            This paper studies the intricate relationship between consumer
            perception and brand ethicality, emphasizing the significance of
            aligning with consumer values for trust-building and fostering
            lasting relationships.
          </Typography>
          <Box
            sx={{
              marginY: "1rem",
            }}
          >
            <DownloadButton
              text="Download PDF"
              src={pdfFile}
              filename="Consumer-Perceived-Brand-Ethicality.pdf"
            ></DownloadButton>
          </Box>
        </Box>
        <BlogImage src={blogHeroImage}></BlogImage>
        <Box
          sx={{
            marginY: "2rem",
          }}
        >
          <h2>What Defines Consumer Perceived Brand Ethicality?</h2>
          <Typography variant="body2" component="p" marginTop={1}>
            In this paper, we unravel the intricate relationship between
            consumer perception and brand ethicality. It's not just about
            selling a product; it's about embodying values that resonate with
            consumers on a deeper level. Identifying three dimensions that
            influence consumer perceptions of ethicality, with a focus on the
            moderating and mediating role of personal interest.
          </Typography>
        </Box>
        <Box
          sx={{
            marginY: "2rem",
          }}
        >
          <h2>The study answers the following questions:</h2>
          <List>
            <ListItem>
              <ListItemText>
                ● How does consumer perception of ethicality affect brand
                equity?
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                ● What role does brand passion play in consumer behavior?
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                ● How can multisensory marketing promote ethical consumption
                online?
              </ListItemText>
            </ListItem>
          </List>
        </Box>
        <Box
          sx={{
            marginY: "2rem",
          }}
        >
          <h2>How Did We Explore Consumer-Perceived Brand Ethicality?</h2>
          <Typography variant="body2" component="p" marginTop={1}>
            Let's take a peek behind the curtain and uncover the methodology
            driving our exploration into this critical aspect of the modern
            marketplace.
          </Typography>
        </Box>
        <Box
          sx={{
            marginY: "2rem",
          }}
        >
          <h2>Data Collection: Surveying Consumer Perspectives</h2>
          <Typography variant="body2" component="p" marginTop={1}>
            Our journey began by collecting data through a comprehensive survey
            involving 200+ consumers. This allowed us to gain valuable insights
            into the relationship between CPBE and its pivotal role in today's
            marketplace.
          </Typography>
          <Typography variant="body2" component="p" marginTop={1}>
            A research questionnaire was formed based on the various constructs
            included in the study.
          </Typography>
        </Box>
        <Box
          sx={{
            marginY: "2rem",
          }}
        >
          <h2>Analytical Tools: Confirmatory Factor Analysis in AMOS</h2>
          <Typography variant="body2" component="p" marginTop={1}>
            With the data in hand, confirmatory factor analysis (CFA) was
            conducted using AMOS to validate the constructs identified in our
            study. Through this methodology, we aimed to shed light on the
            intricate dynamics of CPBE and its implications for businesses
            operating in today's increasingly conscious marketplace
          </Typography>
        </Box>
        <Box
          sx={{
            marginY: "2rem",
          }}
        >
          <h2>What Have We Uncovered?</h2>
          <List>
            <ListItem>
              <ListItemText>
                ● Consumer perceptions of brand ethicality significantly
                influence purchasing decisions and long-term brand
                relationships.
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                ● There are six domains of corporate behavior that impact
                consumer perceptions of ethicality, which companies should
                address to enhance their ethical reputation.
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                ● Customer-perceived ethicality has a positive effect on brand
                equity in the services sector.
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                ● Multisensory marketing can effectively promote ethical
                consumption online, influencing consumers’ willingness to pay
                for ethical brands.
              </ListItemText>
            </ListItem>
          </List>
          <BlogImage src={brandEthicality1}></BlogImage>
        </Box>
        <Box
          sx={{
            marginY: "2rem",
          }}
        >
          <h2>What Have We Learned?</h2>
          <Typography variant="body2" component="p" marginTop={1}>
            Our study wraps up with a key finding: addressing diverse sources of
            consumer perceived ethicality is crucial for enhancing trust and
            credibility, with implications for brand strategy, emotional
            connections, service quality, and ethical image.
          </Typography>
        </Box>
        <Box
          sx={{
            marginY: "2rem",
          }}
        >
          <h2>Tools and Analysis</h2>
          <List>
            <ListItem>
              <ListItemText>● CFA</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>● AMOS SPSS</ListItemText>
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
};

export default ConsumerPerceivedBrandEthicality;
