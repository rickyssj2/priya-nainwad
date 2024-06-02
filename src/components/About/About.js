import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import portrait from "../../assets/hero.jpg";
import "./About.css";
import { Box, Skeleton } from "@mui/material";
import DownloadButton from "../DownloadButton/DownloadButton";
import { useQuery } from "@apollo/client";
import { ABOUT } from "./AboutQuery";

const socialsHelper = (socials) => {
  const social = {
    linkedin: null,
    github: null,
  };
  socials.forEach((s) => {
    if (s.includes("linkedin")) {
      social.linkedin = s;
    }
    if (s.includes("github")) {
      social.github = s;
    }
  });
  return social;
};

const About = () => {
  const { loading, error, data } = useQuery(ABOUT);
  let socials;

  if (data) socials = socialsHelper(data.about.socials);

  if (error) {
    console.log(`Error fetching data: ${error}`);
    return <span>Error</span>;
  }

  return (
    <Box className="about_box">
      <Box sx={{ width: "100%" }} className="about">
        {loading ? (
          <Skeleton width="30%">
            <h2 className="about__role">.</h2>
          </Skeleton>
        ) : (
          <h2>Hi, I am</h2>
        )}

        {loading ? (
          <Skeleton width="50%" height="7rem">
            <h1 className="about__name">.</h1>
          </Skeleton>
        ) : (
          <h1 className="about__name">
            {data.about.firstName} {data.about.lastName}.
          </h1>
        )}
        {loading ? (
          <Skeleton width="70%">
            <h2 className="about__role">.</h2>
          </Skeleton>
        ) : (
          <h2 className="about__role">{data.about.subHeading}</h2>
        )}

        {loading ? (
          <Skeleton width="90%">
            <h1>.</h1>
          </Skeleton>
        ) : (
          <p className="about__desc merriweather-regular">
            {data.about.shortContent && data.about.shortContent}
          </p>
        )}

        {loading ? (
          <Skeleton width="60%">
            <DownloadButton></DownloadButton>
          </Skeleton>
        ) : (
          <Box>
            <div className="about__contact center">
              {data.about.resume && (
                <DownloadButton
                  text={data.about.resume.title}
                  src={data.about.resume.url}
                  filename={data.about.resume.fileName}
                ></DownloadButton>
              )}

              {data.about.socials && (
                <>
                  {socials.github && (
                    <a
                      href={socials.github}
                      aria-label="github"
                      className="link link--icon"
                    >
                      <GitHubIcon />
                    </a>
                  )}

                  {socials.linkedin && (
                    <a
                      href={socials.linkedin}
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
        )}
      </Box>

      <Box className="image_box">
        {loading ? (
          <Skeleton width="100%">
            <img className="image" src={portrait} alt="Profile"></img>
          </Skeleton>
        ) : (
          <img className="image" src={portrait} alt="Profile"></img>
        )}
      </Box>
    </Box>
  );
};

export default About;
