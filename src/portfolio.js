import vikasKumar from "./components/Assets/vikas-kumar.jpeg";
import vilasMore from "./components/Assets/vilas-more.jpeg";

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "/",
  title: "Priya Nainwad",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Priya Nainwad",
  role: "Graduate Student at UCR",
  description: `Incoming graduate student at UC Riverside studying Business Analytics with interests in Research, Sports and Movies.`,
  resume: "https://example.com",
  social: {
    linkedin: "http://www.linkedin.com/in/priya-nainwad-5485b4210",
    github: null,
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "Role of Price Perception",
    slug: "role-of-price-perception",
    highlight: "Presented at International Conference",
    description:
      "This research paper explores the significant role of price perception in consumer behavior. It studies the psychological, sociological, and economic factors that influence how consumers perceive and react to pricing strategies.",
    stack: ["SPSS", "Python SciPy", "Chi-Square Testing"],
    content: [
      {
        title: `Introduction`,
        content: `The paper highlights that consumers often use price as an indicator of product quality and that individual
        characteristics and cognitive biases play a crucial role in determining consumer responses to pricing. This
        study was intended to assist businesses in planning pricing strategies to match consumer perceptions and
        consider the ethical implications of pricing.`,
      },
      {
        title: `International Conference`,
        content: `Submitted and presented the research paper at International conference on
        Marketing innovation at Indian institute of Management Kashipur in collaboration with Whitman School of
        Management, Syracuse university, USA.`,
      },
      {
        title: `Data Gathering`,
        content: `To obtain primary data, an organized survey was built using Google Forms.
        This method was chosen for its simplicity, ease, and ability to assemble results fast.
        A total of 156 responses were obtained, guaranteeing a representative sample of the target population.
        Literature study: A thorough study of the literature on the research issue was conducted to get
        current information and ideas. A total of 30 relevant peer-reviewed articles were evaluated,
        providing a solid foundation for understanding the present state of the topic.`,
      },
      {
        title: `Data Examination`,
        content: [
          {
            li: `● Quantitative Analysis: The Google Form questionnaire results were quantitatively analyzed. Trends,
            correlations, and patterns in the data were discovered using statistical methods.
            `,
          },
          {
            li: `● Qualitative Analysis: Thematic evaluation of data from questionnaire questions was performed. This
            included categorizing relevant issues in order to obtain beneficial ideas and perspectives.`,
          },
        ],
      },
      {
        title: `Hypothesis`,
        content: `Data was analyzed using Cronbach alpha in SPSS to check the reliability of the measurement
        model, resulting at 0.81. Hypothesis test was performed using Chi-square test in python (Scipy) to study the
        correlation between brand perception and willingness to pay.`,
      },
      {
        title: `Conclusion`,
        content: `The conclusion highlighted that Price perception significantly influences consumer behavior by shaping their
        expectations of product quality, value, and the overall purchasing decision. Consumers often
        associate higher prices with better quality and are influenced by personal biases and external factors when
        perceiving prices. This perception can lead to decisions ranging from purchasing to brand loyalty.`,
      },
      {
        title: `Tools and Analysis`,
        content: `SPSS
        Python SciPY
        Chi Square Testing`,
      },
    ],
  },
  {
    name: "Consumer Perceived Brand Ethicality",
    slug: "consumer-perceived-brand-ethicality",

    description:
      "This paper studies the intricate relationship between consumer perception and brand ethicality, emphasizing the significance of aligning with consumer values for trust-building and fostering lasting relationships",
    stack: ["CFA", "AMOS SPSS"],
  },
];

const testimonials = [
  // testimonials can be added an removed
  // if there are no testimonials, Testimonials section won't show up
  {
    name: "Dr. Vikas Kumar",
    description: `Priya assisted me in a research paper in collecting well-structured content evident through her ability to articulate ideas coherently with minimal guidance.
     She helped with documentations and
      demonstrated good coding skills. She showcased her commitment and keen interest in business
      research and cognitive learning on consumer behavior.
      `,
    title: "Professor of Marketing Management",
    designation: "Indian Institue of Management Sirmaur",
    img: vikasKumar,
  },
  {
    name: "Vilas More",
    description: `
      Priya exhibits a strong commitment to learning and displayed good progress in complex tax
related tasks. She quickly grasped the variations of tax filing procedures and provided outcomes
to the compliance requirements. Priya excels at taking prompt actions and delivering impactful
results. She reflected a strong foundation in tax matters. Priya was a great addition to the team.
      `,
    title: "Deputy General Manager",
    designation: "Larsen & Toubro, Mumbai",
    img: vilasMore,
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "Python",
  "Advanced Excel",
  "Git",
  "SQL",
  "PowerPoint",
  "SPSS Proficiency",
  "Statistics",
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "pnain002@ucr.edu",
};

export { header, about, projects, testimonials, skills, contact };
