import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { about } from "../../portfolio";
import portrait from "../Assets/hero.png";
import "./About.css";
import { Box } from "@mui/material";
import DownloadButton from "../DownloadButton/DownloadButton";
import pdfFile from "../Assets/resume.pdf";

const About = () => {
  const { name, role, description, resume, social } = about;

  return (
    <Box className="about_box">
      <Box sx={{ width: "100%" }} className="about">
        <h2>Hi 👋🏻, I am</h2>
        {name && <h1 className="about__name">{name}.</h1>}

        {role && <h2 className="about__role">A {role} 👩🏻‍🎓.</h2>}
        <p className="about__desc merriweather-regular">
          {description && description}
        </p>

        <div className="about__contact center">
          {resume && (
            <DownloadButton
              text="Resume"
              src={pdfFile}
              filename="priya-nainwad-resume.pdf"
            ></DownloadButton>
          )}

          {social && (
            <>
              {social.github && (
                <a
                  href={social.github}
                  aria-label="github"
                  className="link link--icon"
                >
                  <GitHubIcon />
                </a>
              )}

              {social.linkedin && (
                <a
                  href={social.linkedin}
                  aria-label="linkedin"
                  className="link link--icon"
                >
                  <LinkedInIcon />
                </a>
              )}
            </>
          )}
        </div>
      </Box>
      <Box className="image_box">
        <img className="image" src={portrait} alt="Profile"></img>
      </Box>
    </Box>
  );
};

export default About;
