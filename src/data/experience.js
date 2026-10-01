// Newest-relevant first: the current full-time role, then the internship.
// Facts come from the owner's CV and profiles; dates confirmed by the owner 2026-10-01.
export const experience = [
  {
    org: 'Digital Labs AI',
    initial: 'D',
    role: 'Software Engineer',
    meta: 'Remote · Full-time',
    start: 'Jan 2026',
    end: 'Present',
    current: true,
    points: [
      'Own web features from frontend to deployment: Vue.js interfaces backed by PHP/Laravel APIs and MySQL.',
      'Containerized the full stack with Docker on VPS environments and set up automation pipelines so deployments stay clean and repeatable.',
      'Delivered e-commerce and custom portal projects across database design, server-side logic and front-end integration, and take part in code reviews and debugging.',
    ],
    tags: ['Vue.js', 'Laravel', 'PHP', 'MySQL', 'Docker', 'REST APIs'],
  },
  {
    org: 'FlyRank AI',
    initial: 'F',
    role: 'Machine Learning Intern',
    meta: 'Remote · Internship',
    start: 'Jul 2026',
    end: 'Sep 2026',
    current: false,
    points: [
      'Built an end-to-end ML pipeline that predicts which content pages will lose traffic, across 30+ clients and a 341,701-item dataset.',
      'Worked in Python, in structured notebooks and version-controlled workflows, on a fully remote async team.',
      'Audited a 36-page internal SEO research paper for gaps in method and analyzed 469M search impressions, work that fed a publicly deployed data report.',
    ],
    tags: ['Python', 'Data preparation', 'Feature selection', 'Model training', 'Evaluation metrics'],
  },
]

export const education = [
  {
    title: "Bachelor's in Software Engineering",
    place: 'University of Management and Technology, Lahore',
    years: '2021 – 2025',
  },
  {
    title: 'Intermediate of Computer Science',
    place: 'Pakistan School Muscat, Darsait',
    years: '2019 – 2021',
  },
]

export const certifications = [
  {
    title: 'Introduction to Model Context Protocol',
    issuer: 'Anthropic Academy',
    date: 'Aug 2026',
    href: 'https://verify.skilljar.com/c/42tdzhmr2t72',
  },
  {
    title: 'Developing Back-End Apps with Node.js and Express',
    issuer: 'IBM, Coursera',
    date: 'Jul 2026',
    href: 'https://www.coursera.org/account/accomplishments/verify/YEWMIFSNT7ZV',
  },
  {
    title: 'AWS AI Practitioner Challenge',
    issuer: 'Udacity',
    date: 'Jun 2026',
    href: 'https://www.udacity.com/certificate/e/796ad5a6-2fbe-11f1-9a56-6b95b1ffe4d0',
  },
]
