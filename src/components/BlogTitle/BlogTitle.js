import { Box, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const BlogTitle = ({ title, readTime }) => {
  return (
    <Box marginBottom="2rem">
      <h1 className="heading dm-serif-display-regular ">{title}</h1>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <AccessTimeIcon fontSize="small"></AccessTimeIcon>
        <Typography fontSize="small" marginX="0.5em">
          {readTime} min read
        </Typography>
      </Box>
    </Box>
  );
};

export default BlogTitle;
