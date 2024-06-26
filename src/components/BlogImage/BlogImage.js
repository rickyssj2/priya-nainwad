import { Box } from "@mui/material";
import "./BlogImage.css";

const BlogImage = ({ src }) => {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <img src={src} className="blog-img" alt="hero-blog"></img>
    </Box>
  );
};

export default BlogImage;
