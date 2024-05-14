import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

const ConsumerPerceivedBrandEthicality = () => {
  return (
    <Box>
      <Typography variant="h3" component="h2">
        Consumer Perceived Brand Ethicality
      </Typography>
      <Box
        sx={{
          marginY: "2rem",
        }}
      >
        <Typography variant="h4" component="h2">
          Introduction
        </Typography>
        <Typography variant="body2" component="p" marginTop={1}>
          The paper explores the origins of ethical company and brand
          perceptions from a consumer perspective, identifying three dimensions
          that influence consumer perceived ethicality, with a focus on the
          moderating and mediating role of personal interest.
        </Typography>
      </Box>
      <Box
        sx={{
          marginY: "2rem",
        }}
      >
        <Typography variant="h4" component="h2">
          Methodology
        </Typography>
        <Typography variant="body2" component="p" marginTop={1}>
          The project involved collecting data through a survey of 200+
          consumers which exhibits the impact of CPBE and its critical role in
          today's marketplace. A research questionnaire was formed based on the
          various constructs included in the study. First, the literature was
          accessed using online databases available as library e-resources.
          Confirmatory factor analysis was performed in AMOS.
        </Typography>
      </Box>
      <Box
        sx={{
          marginY: "2rem",
        }}
      >
        <Typography variant="h4" component="h2">
          The study answers the following questions:
        </Typography>
        <Typography variant="body2" component="p" marginTop={1}>
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
        </Typography>
      </Box>
      <Box
        sx={{
          marginY: "2rem",
        }}
      >
        <Typography variant="h4" component="h2">
          Key Insights
        </Typography>
        <List>
          <ListItem>
            <ListItemText>
              ● Consumer perception of brand ethicality significantly influences
              purchasing decisions and long-term brand relationships.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              ● There are six domains of corporate behavior that impact consumer
              perceived ethicality, which companies should address to enhance
              their ethical reputation.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              ● Customer perceived ethicality has a positive effect on brand
              equity in the services sector
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Multisensory marketing can effectively promote ethical consumption
              online, influencing consumers’ willingness to pay for ethical
              brands.
            </ListItemText>
          </ListItem>
        </List>
      </Box>
      <Box
        sx={{
          marginY: "2rem",
        }}
      >
        <Typography variant="h4" component="h2">
          Conclusion
        </Typography>
        <Typography variant="body2" component="p" marginTop={1}>
          The study concludes that addressing diverse sources of consumer
          perceived ethicality is crucial for enhancing trust and credibility,
          with implications for brand strategy, emotional connections, service
          quality, and ethical image.
        </Typography>
      </Box>
      <Box
        sx={{
          marginY: "2rem",
        }}
      >
        <Typography variant="h4" component="h2">
          Tools and Analysis
        </Typography>
        <List>
          <ListItem>
            <ListItemText>● CFS</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>● AMOS SPSS</ListItemText>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default ConsumerPerceivedBrandEthicality;
