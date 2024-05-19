import { Box, Container, Divider } from "@mui/material";
import ResumeBlock from "../../components/ResumeBlock/ResumeBlock";
import "./Resume.css";

const Resume = () => {
  return (
    <Container>
      <Box
        sx={{
          paddingTop: "3em",
        }}
      >
        <h2>Work Experience</h2>
        <Divider></Divider>
        <ResumeBlock
          img={require("../../components/Assets/Indian_Institute_of_Management_Sirmaur_Logo.png")}
          alt="IIM Sirmaur Logo"
          instituteName="Indian Institute of Management, Sirmaur"
          position="Reasearch Assistant"
          experienceDuration="October 2023 - January 2024"
          experienceDurationSubtitle="Size 500+, Himachal Pradesh"
          resumePoints={[
            "Assisted professor Dr.Vikas Kumar on research project titled Consumer Perceived Brand Ethicality",
            "Developed surveys to collect data from 200+ consumers to study the impact of CPBE and its role in marketplace",
            "Performed meta-analysis on existing scales and literature to measure different constructs of the proposed model",
          ]}
        ></ResumeBlock>

        <ResumeBlock
          img={require("../../components/Assets/larsen-toubro-logo.webp")}
          alt="Larsen and Toubro Logo"
          instituteName="Larsen and Toubro"
          position="Graduate Commercial Trainee- F&A "
          experienceDuration="March 2023 - September 2023"
          experienceDurationSubtitle="Size 500+, Mumbai"
          resumePoints={[
            "Prepared financial summaries for 21 states valued >100 crore liability amount and managed tax returns",
            "Ideated in development of litigation management software (IRIS) through collaborations with tech consultants",
            "Prepared MIS reports including sales and HSN analysis report resulting to 15% increase in credit utilization",
          ]}
        ></ResumeBlock>
        <ResumeBlock
          img={require("../../components/Assets/clear-trip-logo.jpg")}
          alt="Cleartrip Logo"
          instituteName="Cleartrip"
          position="Finance Intern"
          experienceDuration="June 2021 - August 2021"
          experienceDurationSubtitle="Size 500+, Mumbai"
          resumePoints={[
            "Performed reconciliation of financial transactions at corporate level for total 10,000+ accounts",
            "Created an excel expense report to project travel reimbursement of 15+ clients",
          ]}
        ></ResumeBlock>
        <ResumeBlock
          img={require("../../components/Assets/tata-logo.jpg")}
          alt="Tata Logo"
          instituteName="TATA Institute of Social Science"
          position="Head Volunteer"
          experienceDuration="January 2021"
          experienceDurationSubtitle="Size 100, Mumbai"
          resumePoints={[
            "Conducted a survey on e-waste generation and recycling trends in organized and unorganized sectors - on-site visit",
            "Provided report for optimizing e-waste management method with expected 10% increase in recycling rates",
          ]}
        ></ResumeBlock>
      </Box>
    </Container>
  );
};

export default Resume;
