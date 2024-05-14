import About from "../../components/About/About.js";
import Projects from "../../components/Projects/Projects.js";
import Skills from "../../components/Skills/Skills.js";
import Testimonials from "../../components/Testimonials/Testimonials.js";
import Contact from "../../components/Contact/Contact.js";

const Home = () => {
  return (
    <>
      <main>
        <About />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
};

export default Home;
