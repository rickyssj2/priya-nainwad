import { Breadcrumbs, Typography, Link } from "@mui/material";

const BreadCrumbs = ({ projectTitle }) => {
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      sx={{ marginTop: "3em", fontSize: "small", color: "var(--clr-fg)" }}
    >
      <Link underline="hover" color="inherit" href="/">
        Home
      </Link>
      <Link underline="hover" color="inherit" href="/projects">
        Projects
      </Link>
      <Typography sx={{ fontSize: "small", color: "var(--clr-fg)" }}>
        {projectTitle}
      </Typography>
    </Breadcrumbs>
  );
};

export default BreadCrumbs;
