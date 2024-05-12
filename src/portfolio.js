const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "link to homepage",
  title: "Priya Nainwad",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Priya Nainwad",
  role: "Graduate Student at UCR",
  description: `I am an incoming graduate student at University of California, Riverside. I completed my
    Bachelor’s of commerce undergrad degree in 2022. During my 2nd year I interned at Cleartrip in
    the finance department. In 2023 I worked as a Graduate commercial trainee at Larsen and Toubro
    in the Accounting and finance department. Additionally I hold a keen interest in business
    research and cognitive learning on consumer behavior. I have worked on several research
    projects with consumer behavior and pricing concentration. I was a Research Assistant at Indian
    Institute of Management Sirmaur.`,
  resume: "https://example.com",
  social: {
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "Role of Price Perception",
    description:
      "This research paper explores the significant role of price perception in consumer behavior. It studies the psychological, sociological, and economic factors that influence how consumers perceive and react to pricing strategies.",
    stack: ["SPSS", "Python SciPy", "Chi-Square Testing"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
  },
  {
    name: "Consumer Perceived Brand Ethicality",
    description:
      "This paper studies the intricate relationship between consumer perception and brand ethicality, emphasizing the significance of aligning with consumer values for trust-building and fostering lasting relationships",
    stack: ["CFA", "AMOS SPSS"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
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
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "SPSS",
  "Python",
  
  
  
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "pnain002@ucr.edu",
};

export { header, about, projects, testimonials, skills, contact };
