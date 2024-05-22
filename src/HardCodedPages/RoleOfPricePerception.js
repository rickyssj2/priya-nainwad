import {
  Box,
  Breadcrumbs,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import "./blog.css";
import blogHeroImage from "../components/Assets/price-perception.jpg";
import consumerPreference from "../components/Assets/consumer-preference.jpeg";
import consumerOpinion from "../components/Assets/consumer-opinion.jpeg";
import reliabilityStatistics from "../components/Assets/reliability-statistics.jpeg";
import chiSquareTest from "../components/Assets/chi-square-test.jpeg";
import BlogImage from "../components/BlogImage/BlogImage";
import pdfFile from "../components/Assets/role-of-price-perception.pdf";
import DownloadButton from "../components/DownloadButton/DownloadButton";
import { useEffect } from "react";

const RoleOfPricePerception = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <Link underline="hover" color="inherit" href="/projects">
          Projects
        </Link>
        <Typography sx={{ fontSize: "small", color: "var(--clr-fg)" }}>
          Role Of Price Perception On Consumer Behaviour
        </Typography>
      </Breadcrumbs>
      <Box>
        <Box>
          <h1 className="heading dm-serif-display-regular ">
            Role Of Price Perception On Consumer Behaviour
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
            Have you ever stopped to think about how the price of a product or
            service can influence your decision to buy it? From psychological
            biases to social influence, our perception of price is shaped by a
            variety of factors. Understanding this can help businesses form
            effective pricing strategies and consumers make informed choices.
          </Typography>
          <Box
            sx={{
              marginY: "1rem",
            }}
          >
            <DownloadButton
              text="Download PDF"
              src={pdfFile}
              filename="role-of-price-perception.pdf"
            ></DownloadButton>
          </Box>
        </Box>
        <BlogImage src={blogHeroImage}></BlogImage>
        <Box
          sx={{
            marginY: "2rem",
          }}
        >
          <Typography variant="body2" component="p" marginTop={1}>
            Price perception is a fascinating aspect of consumer behavior that
            can't be overlooked. Whether you're a business looking to boost
            sales or a savvy shopper navigating the aisles, understanding the
            psychology behind price perception can make all the difference. In
            this paper we aimed to highlight that consumers often use price as
            an indicator of product quality and that individual characteristics
            and cognitive biases play a crucial role in determining consumer
            responses to pricing.
          </Typography>
        </Box>
        <Box
          sx={{
            marginY: "2rem",
          }}
        >
          <h2>Our Motive</h2>
          <Typography variant="body2" component="p" marginTop={1}>
            This study was intended to assist businesses in planning pricing
            strategies to match consumer perceptions and consider the ethical
            implications of pricing.
          </Typography>
        </Box>
        <Box
          sx={{
            marginY: "2rem",
          }}
        >
          <h2>Presented At An International Conference</h2>
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
          <h2>How Was the Data Gathered?</h2>
          <Typography variant="body2" component="p" marginTop={1}>
            To obtain primary data, an organized survey was built using Google
            Forms. This method was chosen for its simplicity, ease, and ability
            to assemble results fast. The questionnaire had 10 questions that
            addressed various areas of "What is the role of Price Perception on
            Consumer Behaviour?"
          </Typography>
          <List>
            <ListItem>
              <ListItemText>
                ● Sample Size: A total of 156 responses were obtained,
                guaranteeing a representative sample of the target population.
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                ● Distribution: To reach a large and varied audience, the
                questionnaire was circulated via social media, person to person.
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                ● Literature study: A thorough study of the literature on the
                research issue was conducted to get current information and
                ideas. A total of 30 relevant peer-reviewed articles were
                evaluated, providing a solid foundation for understanding the
                present state of the topic.
              </ListItemText>
            </ListItem>
          </List>
        </Box>
        <Box
          sx={{
            marginY: "2rem",
          }}
        >
          <h2>What Did We Discover from the Data?</h2>
          <List>
            <ListItem>
              <ListItemText>
                ● Quantitative Analysis: The Google Form questionnaire results
                were quantitatively analyzed. Trends, correlations, and patterns
                in the data were discovered using statistical methods.
              </ListItemText>
            </ListItem>
            <ListItem>
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <BlogImage src={consumerPreference}></BlogImage>
                <BlogImage src={consumerOpinion}></BlogImage>
              </Box>
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
          <h2>Reliability Check: Putting Our Measurement Model to the Test:</h2>
          <Box>
            <Typography variant="body2" component="p" marginTop={1}>
              Data was analyzed using Cronbach alpha in SPSS to check the
              reliability of the measurement model, resulting at 0.81.
            </Typography>
            <BlogImage src={reliabilityStatistics}></BlogImage>
          </Box>
        </Box>
        <Box
          sx={{
            marginY: "2rem",
          }}
        >
          <h2>What Did Our Hypothesis Reveal?</h2>
          <Typography variant="body2" component="p" marginTop={1}>
            Hypothesis test was performed using Chi-square test in python
            (Scipy) to study the correlation between brand perception and
            willingness to pay.
          </Typography>
          <BlogImage src={chiSquareTest}></BlogImage>
          <Typography variant="body2" component="p" marginTop={1}>
            Null hypothesis was rejected. Hence, there is association between if
            perception of brand affects willingness to pay higher price for a
            product and if consumer would choose an expensive product or service
            over cheaper one because consumer perceived it to be of better value
            or quality.
          </Typography>
        </Box>
        <Box
          sx={{
            marginY: "2rem",
          }}
        >
          <h2>What Have We Discovered?</h2>
          <Typography variant="body2" component="p" marginTop={1}>
            The conclusion highlighted that price perception significantly
            influences consumer behavior by shaping their expectations of
            product quality, value, and the overall purchasing decision.
          </Typography>
        </Box>
        <Box
          sx={{
            marginY: "2rem",
          }}
        >
          <h2>The Price-Quality Conundrum: Perception at Play</h2>
          <Typography variant="body2" component="p" marginTop={1}>
            Consumers often associate higher prices with better quality and are
            influenced by personal biases and external factors when perceiving
            prices. This perception can lead to decisions ranging from
            purchasing to brand loyalty.
          </Typography>
          <Typography variant="body2" component="p" marginTop={1}>
            So next time you're shopping, remember, the price tag is more than
            just a number—it's a reflection of perception!!
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
