import uniqid from "uniqid";
import { testimonials } from "../../portfolio";
import TestimonialContainer from "../TestimonialContainer/TestimonialContainer";
import "./Testimonials.css";

const Testimonials = () => {
  if (!testimonials.length) return null;

  return (
    <section id="testimonials" className="section projects">
      <h2 className="section__title">🙇🏻‍♀️ Testimonials</h2>

      <div className="testimonials__grid">
        {testimonials.map((testimonial) => (
          <TestimonialContainer key={uniqid()} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
