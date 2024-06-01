import { Box, List, ListItem, ListItemText } from "@mui/material";
import "./ResumeBlock.css";
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const options = {
  renderNode: {
    [BLOCKS.UL_LIST]: (node, children) => <List>{children}</List>,
    [BLOCKS.LIST_ITEM]: (node, children) => {
      return (
        <ListItem disablePadding sx={{ paddingLeft: "1rem" }}>
          <ListItemText
            primary={`● ${children[0].props.children[0]}`}
          ></ListItemText>
        </ListItem>
      );
    },
  },
};

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
        <Box>{documentToReactComponents(resumePoints, options)}</Box>
      </Box>
    </Box>
  );
};

export default ResumeBlock;
