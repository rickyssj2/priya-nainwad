import { Box, List, ListItem, ListItemText } from "@mui/material";
import uniqid from "uniqid";
import "./ResumeBlock.css";

const ResumeBlock = ({
  img,
  alt,
  instituteName,
  position,
  experienceDuration,
  experienceDurationSubtitle,
  resumePoints,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        alignItems: {
          xs: "center",
          md: "stretch",
        },
        justifyContent: {
          md: "center",
        },
        marginTop: "2em",
      }}
    >
      <Box>
        <img style={{ width: "200px" }} src={img} alt={alt}></img>
      </Box>
      <Box
        sx={{
          flexGrow: "1",
          marginLeft: {
            md: "2em",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            justifyContent: "space-between",
          }}
        >
          <Box>
            <h3>{instituteName}</h3>
            <h4>{position}</h4>
          </Box>
          <Box
            sx={{
              textAlign: {
                md: "right",
              },
            }}
          >
            <h4 className="experience-duration">{experienceDuration}</h4>
            <p>{experienceDurationSubtitle}</p>
          </Box>
        </Box>
        <List dense="true">
          {resumePoints.map((resumePoint) => {
            return (
              <ListItem
                sx={{
                  paddingY: "0",
                }}
              >
                <ListItemText key={uniqid()} className="resume-point">
                  ● {resumePoint}
                </ListItemText>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};

export default ResumeBlock;
