import { Box, Container, Divider, Skeleton } from "@mui/material";
import ResumeBlock from "../../components/ResumeBlock/ResumeBlock";
import "./Resume.css";
import { gql, useQuery } from "@apollo/client";

const WORK_EXPERIENCE = gql`
  {
    workExperienceCollection {
      items {
        sys {
          id
        }
        instituteName
        position
        experienceDuration
        experienceDurationSubtitle
        resumePoints {
          json
        }
        image {
          title
          url
        }
      }
    }
  }
`;

const Resume = () => {
  const { loading, error, data } = useQuery(WORK_EXPERIENCE);

  if (error) console.log(`Error fetching data: ${error}`);
  return (
    <Container>
      {loading ? (
        <Box>
          <Box display="flex" alignItems="center">
            <Box>
              <Skeleton width={200} height={200}></Skeleton>
            </Box>
            <Box marginLeft={2}>
              <Skeleton width={500} height={100}></Skeleton>
              <Skeleton width="50%" height={25}></Skeleton>
              <Skeleton width="50%" height={25}></Skeleton>
            </Box>
          </Box>
          <Box display="flex" alignItems="center">
            <Box>
              <Skeleton width={200} height={200}></Skeleton>
            </Box>
            <Box marginLeft={2}>
              <Skeleton width={500} height={100}></Skeleton>
              <Skeleton width="50%" height={25}></Skeleton>
              <Skeleton width="50%" height={25}></Skeleton>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            paddingTop: "3em",
          }}
        >
          <h2>Work Experience</h2>
          <Divider></Divider>
          {data?.workExperienceCollection.items.map((experience) => {
            return (
              <ResumeBlock
                key={experience.sys.id}
                img={experience.image.url}
                alt={experience.image.title}
                instituteName={experience.instituteName}
                position={experience.position}
                experienceDuration={experience.experienceDuration}
                experienceDurationSubtitle={
                  experience.experienceDurationSubtitle
                }
                resumePoints={experience.resumePoints.json}
              ></ResumeBlock>
            );
          })}
        </Box>
      )}
    </Container>
  );
};

export default Resume;
