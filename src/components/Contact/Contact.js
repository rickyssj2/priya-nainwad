import "./Contact.css";

const Contact = () => {
  const contact = {
    email: "pnain002@urc.edu",
  };

  return (
    <section className="section contact center" id="contact">
      <h2 className="section__title">Contact</h2>
      <a href={`mailto:${contact.email}`}>
        <span type="button" className="btn btn--outline">
          {contact.email}
        </span>
      </a>
    </section>
  );
};

export default Contact;
