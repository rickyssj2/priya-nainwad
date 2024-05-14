import { Box, Typography } from "@mui/material";

const ContentSection = ({ section }) => {
  return (
    <Box
      sx={{
        marginY: "2rem",
      }}
    >
      <Typography variant="h4" component="h2">
        {section.title}
      </Typography>
      <Typography variant="body2" component="p" marginTop={1}>
        {section.content}
      </Typography>
    </Box>
  );
};

export default ContentSection;
