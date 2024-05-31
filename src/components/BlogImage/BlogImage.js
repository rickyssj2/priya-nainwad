import { Box } from "@mui/material";
import "./BlogImage.css";

const BlogImage = ({ src, alt }) => {
  return (
    <Box
      sx={{
        width: "100%",
        margin: "1rem 0",
      }}
    >
      <img src={src} className="blog-img" alt={alt}></img>
    </Box>
  );
};

export default BlogImage;
