const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'link to homepage',
  title: 'Priya Nainwad',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Priya Nainwad',
  role: 'Graduate Student at UCR',
  description:
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Role of Price Perception',
    description:
      'This research paper explores the significant role of price perception in consumer behavior. It studies the psychological, sociological, and economic factors that influence how consumers perceive and react to pricing strategies.',
    stack: ['SPSS', 'Python SciPy', 'Chi-Square Testing'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Consumer Perceived Brand Ethicality',
    description:
      'This paper studies the intricate relationship between consumer perception and brand ethicality, emphasizing the significance of aligning with consumer values for trust-building and fostering lasting relationships',
    stack: ['CFA', 'AMOS SPSS'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'SPSS',
  'Python SciPy',
  'Chi-Square Testing',
  'CFA',
  'AMOS SPSS',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'priyanainwad123@gmail.com',
}

export { header, about, projects, skills, contact }
