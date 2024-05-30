import uniqid from "uniqid";
import "./Skills.css";
import { gql, useQuery } from "@apollo/client";
import { Box, Skeleton } from "@mui/material";

const SKILLS = gql`
  query {
    skillsCollection {
      items {
        skills
      }
    }
  }
`;

const Skills = () => {
  const { loading, error, data } = useQuery(SKILLS);

  if (error) console.log(`Error fetching data: ${error}`);

  return (
    <section className="section skills" id="skills">
      <h2 className="section__title">Skills</h2>

      {loading ? (
        <Box>
          <Skeleton width="100%" height="5rem"></Skeleton>
          <Skeleton width="100%" height="5rem"></Skeleton>
        </Box>
      ) : (
        <ul className="skills__list">
          {data?.skillsCollection.items[0].skills.map((skill) => (
            <li key={uniqid()} className="skills__list-item btn btn--plain">
              {skill}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Skills;
