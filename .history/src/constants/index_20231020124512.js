import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  // meta,
  // starbucks,
  tesla,
  // shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  lecturenotes,
  idemia,
  instaclone,
  cryptonews,
  dashbord,
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "FrontEnd Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Campus Ambassador",
    company_name: "LectureNotes",
    icon: lecturenotes,
    iconBg: "#e6e1e1",
    date: "june 2019 - Augest 2019",
    points: [
      "Organized private and public events on campus for college community.",
      "Utilized websites and social media to promote campus life, events and opportunities.",
      "Produced and distributed brochures, newsletters and press kits.",
      "Used various social media platforms for media and blogger outreach.",
    ],
  },
  {
    title: "Product Development Engineer",
    company_name: "IDEMIA",
    icon: idemia,
    iconBg: "#0f0f0f",
    date: "Feb 2022 - current ",
    points: [
      "Responsible for the in-house tools Development.",
      "Conducted regression testing, analyzed results, and submitted observations to development team.",
      "Worked closely with different departments to develop innovative solutions to functionality issues.",
      "Profile Development and Testing of SIM, and ESIM/eUICC using GSM and SAIP standards.",
      "Checked configuration files and logs to uncover root causes of problems.",
    ],
  },
 
 
];

const testimonials = [
  {
    testimonial:
      "Receaved High five awards from the team for the most contribution and support in a project ",
    name: "Team",
    company: "Idemia",
  },
  {
    testimonial:
      "Receaved appreciation for Working in different Timezone with other team members for the completions of high criticality project",
    name: "Team",
    company: "DEF Corp",
  },
  {
    testimonial:
      "   Receaved appreciation for optimizing Script, to decrease the time to run perticular script for the testing  ",
    name: "Lisa Wang",
    company: "456 Enterprises",
  },
];

const projects = [
  {
    name: "Dashbord",
    description:
      " created a Admin Dashboard. It is full responsive and also has theme mode/color and this web-app contains multiple charts an apps.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-icons",
        color: "green-text-gradient",
      },
      {
        name: "syncfusion",
        color: "red-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
     
    ],
    image: dashbord,
    source_code_link: "https://github.com/parichit21/Dashboard",
  },
  {
    name: "Crypto News",
    description:
      "creted cryptonews with the help of Crypto data API( free Api) and Crypto News API(free api) to get all the crypto details and the latest news.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Crypto-api",
        color: "green-text-gradient",
      },
      {
        name: "News-api",
        color: "red-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: cryptonews,
    source_code_link: "https://github.com/parichit21/CriptoNews",
  },
  {
    name: "Instagram Clone",
    description:
      "Created a Clone of a famous application Instagram, where you can upload photos and videos same a real Application in both post and story ",
    tags: [
      {
        name: "react JS",
        color: "blue-text-gradient",
      },
      {
        name: "Material ui",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: instaclone,
    source_code_link: "https://github.com/parichit21/instaclone-frontend",
  },
];

export { services, technologies, experiences, testimonials, projects };
