import { gql } from "@apollo/client";

export const ABOUT = gql`
  {
    about(id: "10mBhNv3iKja7mVrhlqscn") {
      firstName
      lastName
      subHeading
      shortContent
      heroImage {
        url
      }
      resume {
        url
        fileName
        title
      }
      socials
    }
  }
`;
