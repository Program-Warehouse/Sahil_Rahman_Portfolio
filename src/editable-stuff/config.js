// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Sahil",
  middleName: "",
  lastName: "Rahman",
  message: "",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/sahilrahman12/",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/srjordon/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/sahilrahman12/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/sahilrahman/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/srjordon414",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/person.png"),
  imageSize: 375,
  message:
    "",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "sahilrahman12", 
  reposLength: 2,
  specificRepos: ["Terrorism-Analysis-with-Insights", "Price_prediction_of_used_Cars_-Predictive_Analysis-"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/person.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/person.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "Machine Learning", value: 80 },
    { name: "Data Science", value: 70 },
    { name: "Data Analysis", value: 80 },
    { name: "Flutter Development", value: 60 },
    { name: "Django", value: 60 },
    { name: "HTML/CSS", value: 90 },
    { name: "Web-Scraping", value: 80 },
    { name: "Selenium", value: 80 },
    { name: "Bootstrap", value: 80 },
  ],
  softSkills: [
    { name: "Communication", value: 90 },
    { name: "Organization", value: 80 },
    { name: "Teamwork Skills", value: 80 },
    { name: "Punctuality", value: 70 },
    { name: "Critical Thinking", value: 70 },
    { name: "Social Skills", value: 60 },
    { name: "Creativity", value: 80 },
    { name: "Interpersonal Communication", value: 80 },
    { name: "Adaptability", value: 80 },
    { name: "Friendly Personality", value: 80 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "",
  email: "srjordon414@gmail.com",
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch };
