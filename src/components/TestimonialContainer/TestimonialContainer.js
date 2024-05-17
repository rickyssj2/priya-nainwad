import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import Avatar from "@mui/material/Avatar";
import "./TestimonialContainer.css";

const TestimonialContainer = ({ testimonial }) => (
  <div className="testimonial">
    <FormatQuoteIcon fontSize="large" sx={{ color: "var(--clr-primary)" }} />
    <p className="testimonial__description merriweather-regular">
      {testimonial.description}
    </p>

    <div className="testimonial_details">
      <Avatar
        alt={testimonial.name}
        src={testimonial.img}
        sx={{ width: 56, height: 56 }}
      />
      <div className="testimonial_personal_details">
        <h3 className="testimonial_name">{testimonial.name}</h3>
        {testimonial.title && (
          <p className="testimony_title">{testimonial.title}</p>
        )}
        {testimonial.designation && (
          <p className="testimony_designation">{testimonial.designation}</p>
        )}
      </div>
    </div>
  </div>
);

export default TestimonialContainer;
