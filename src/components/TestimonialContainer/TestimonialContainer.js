import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import Avatar from "@mui/material/Avatar";
import "./TestimonialContainer.css";

const TestimonialContainer = ({ testimonial }) => (
  <div className="testimonial">
    <FormatQuoteIcon fontSize="large" />
    <p className="testimonial__description merriweather-regular">
      {testimonial.description}
    </p>

    <div className="testimonial_details">
      <Avatar alt="Remy Sharp" src="" />
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