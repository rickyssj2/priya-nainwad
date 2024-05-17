import {
  Box,
  Breadcrumbs,
  Divider,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import "./blog.css";
import blogImage from "../components/Assets/price-perception.jpg";
import BlogImage from "../components/BlogImage/BlogImage";

const RoleOfPricePerception = () => {
  return (
    <>
      <Breadcrumbs
        aria-label="breadcrumb"
        sx={{
          marginTop: "3em",
          fontSize: "small",
          color: "var(--clr-fg)",
        }}
      >
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Typography sx={{ fontSize: "small", color: "var(--clr-fg)" }}>
          Role Of Price Perception
        </Typography>
      </Breadcrumbs>
      <Box>
        <Box>
          <h1 className="heading dm-serif-display-regular ">
            Role Of Price Perception
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
            The paper highlights that consumers often use price as an indicator
            of product quality and that individual characteristics and cognitive
            biases play a crucial role in determining consumer responses to
            pricing. This study was intended to assist businesses in planning
            pricing strategies to match consumer perceptions and consider the
            ethical implications of pricing.
          </Typography>
        </Box>
        <BlogImage src={blogImage}></BlogImage>
        <Box
          sx={{
            marginY: "2rem",
          }}
        >
          <h2>International Conference</h2>
          <Typography variant="body2" component="p" marginTop={1}>
            Submitted and presented the research paper at International
            conference on Marketing innovation at Indian institute of Management
            Kashipur in collaboration with Whitman School of Management,
            Syracuse university, USA.
          </Typography>
        </Box>
        <Box
          sx={{
            marginY: "2rem",
          }}
        >
          <h2>Data Gathering</h2>
          <Typography variant="body2" component="p" marginTop={1}>
            To obtain primary data, an organized survey was built using Google
            Forms. This method was chosen for its simplicity, ease, and ability
            to assemble results fast. A total of 156 responses were obtained,
            guaranteeing a representative sample of the target population.
            Literature study: A thorough study of the literature on the research
            issue was conducted to get current information and ideas. A total of
            30 relevant peer-reviewed articles were evaluated, providing a solid
            foundation for understanding the present state of the topic.
          </Typography>
        </Box>
        <Box
          sx={{
            marginY: "2rem",
          }}
        >
          <h2>Data Examination</h2>
          <List>
            <ListItem>
              <ListItemText>
                ● Quantitative Analysis: The Google Form questionnaire results
                were quantitatively analyzed. Trends, correlations, and patterns
                in the data were discovered using statistical methods.
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                ● Qualitative Analysis: Thematic evaluation of data from
                questionnaire questions was performed. This included
                categorizing relevant issues in order to obtain beneficial ideas
                and perspectives.
              </ListItemText>
            </ListItem>
          </List>
        </Box>
        <Box
          sx={{
            marginY: "2rem",
          }}
        >
          <h2>Hypothesis</h2>
          <Typography variant="body2" component="p" marginTop={1}>
            Data was analyzed using Cronbach alpha in SPSS to check the
            reliability of the measurement model, resulting at 0.81. Hypothesis
            test was performed using Chi-square test in python (Scipy) to study
            the correlation between brand perception and willingness to pay.
          </Typography>
        </Box>
        <Box
          sx={{
            marginY: "2rem",
          }}
        >
          <h2>Conclusion</h2>
          <Typography variant="body2" component="p" marginTop={1}>
            The conclusion highlighted that Price perception significantly
            influences consumer behavior by shaping their expectations of
            product quality, value, and the overall purchasing decision.
            Consumers often associate higher prices with better quality and are
            influenced by personal biases and external factors when perceiving
            prices. This perception can lead to decisions ranging from
            purchasing to brand loyalty.
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
              <ListItemText>● SPSS</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>● Python SciPY</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>● Chi Square Testing</ListItemText>
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
};

export default RoleOfPricePerception;
