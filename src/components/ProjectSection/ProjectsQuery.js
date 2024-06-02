import { gql } from "@apollo/client";

export const PROJECTS = gql`
  query {
    projectCollection {
      items {
        title
        shortDescription
        highlightText
        techStack
        slug
      }
    }
  }
`;
