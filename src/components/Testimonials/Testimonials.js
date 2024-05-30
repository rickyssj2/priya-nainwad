import uniqid from "uniqid";
import TestimonialContainer from "../TestimonialContainer/TestimonialContainer";
import "./Testimonials.css";
import { useQuery, gql } from "@apollo/client";
import { Skeleton } from "@mui/material";

const TESTIMONIALS = gql`
  query {
    testimonyCollection {
      items {
        name
        testimony
        designation
        institution
        avatar {
          url
        }
      }
    }
  }
`;

const Testimonials = () => {
  const { loading, error, data } = useQuery(TESTIMONIALS);

  if (error) {
    console.log(`Error fetching data: ${error}`);
  }

  return (
    <section id="testimonials" className="section projects">
      <h2 className="section__title">Testimonials</h2>

      <div className="testimonials__grid">
        {data?.testimonyCollection.items.map((testimonial) =>
          loading ? (
            <Skeleton variant="rounded" width="100%" height={350}></Skeleton>
          ) : (
            <TestimonialContainer key={uniqid()} testimonial={testimonial} />
          )
        )}
      </div>
    </section>
  );
};

export default Testimonials;
