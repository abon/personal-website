import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Abdullah Samadov | Software Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my personal website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://docs.google.com/open?id=1Y7oDhtIwBRngXx4qNZaP-NDOHKhUkqWD', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'color.png',
    title: '🎨 Color Palette',
    info:
      'A simple web app for creating beautiful color palettes. Easily find HTML color codes for your website using my color picker, color chart and HTML color names with Hex color codes, RGB and RGBA values.',
    info2: '🛠 Tools: React, Material-UI, Chroma.js ',
    url: 'https://colorpickr.netlify.app/',
    repo: 'https://github.com/abon/color-picker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'blog.png',
    title: '🧪 Developers Lab',
    info:
      'My tech blog where I publish different articles and tutorials mainly about JavaScript, Python and web design. The blog aims to support Uzbek-speaking learners with free programming videos and other kinds of materials.',
    info2: '🛠 Tools: React, Gatsby, Sass, Moment.js',
    url: 'https://www.devslab.tech/',
    repo: 'https://github.com/abon/code-lab', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'covid.png',
    title: '🦠 GoCOVID',
    info:
      'Track the spread of the Coronavirus COVID-19 epidemic, browse an interactive map, view fatality rate and recoveries, check affected regions in real-time and other related data',
    info2: '🛠 Tools: React, MaterialUI, Chart.js, Leaflet',
    url: 'https://gocovid.netlify.app/',
    repo: 'https://github.com/abon/covid-19-tracker', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/iam_abdulloh',
    },
    {
      id: nanoid(),
      name: 'feed',
      url: 'https://www.devslab.tech/',
    },
    {
      id: nanoid(),
      name: 'youtube',
      url: 'https://www.youtube.com/channel/UCTez9BrKDCRXT29DB7n9mzQ?view_as=subscriber',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codesandbox.io/u/abon',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/samadovabdullah/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/abon',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
