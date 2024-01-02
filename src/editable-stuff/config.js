// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Rachit",
  middleName: "",
  lastName: "Garg",
  message: "Contributing to the world with Tech.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/RachitGarg-12",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/Rachitivity/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/rachitivity_/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/rachit-garg-2616a1200/",
    },
  ],
};

// ABOUT SECTION
const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/rachit.jpg"),
  imageSize: 375,
  message:
    "My name is Rachit Garg. I am a 2024 graduate pursuing my BTech from IIIT Jabalpur. I am a competitive programmer and a Web developer.",
  resume:
    "https://drive.google.com/file/d/1zvpmgqNOZOJVOnVv43c5tBiz3_qjh9jy/view?usp=sharing",
};

// PROJECTS SECTION
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "RachitGarg-12", 
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Leadership",
  message:
    "As a seasoned React developer with a leadership background, my professional profile is characterized by a blend of technical prowess, adept project management skills, and strong communication acumen. My track record boasts successful endeavors in constructing large-scale applications, fine-tuning code for optimal performance, and implementing industry best practices. Beyond technical prowess, my leadership experience extends to guiding teams and projects, crafting and maintaining comprehensive project plans, managing timelines and budgets, and ensuring the punctual delivery of top-notch work.",
  images: [
    {
      img: require("../editable-stuff/1.jpg"),
      label: "First slide label",
      paragraph:
        "Homepage of Mess Management System",
    },
    {
      img: require("../editable-stuff/2.jpg"),
      label: "Second slide label",
      paragraph: "User can login using their gmail id",
    },
    {
      img: require("../editable-stuff/3.jpg"),
      label: "Third slide label",
      paragraph:
        "User can add the meals which they need",
    },
    {
      img: require("../editable-stuff/4.jpg"),
      label: "Payment",
      paragraph: "User can pay the amount for tokens",
    },
    {
      img: require("../editable-stuff/5.jpg"),
      label: "Calendar",
      paragraph: "Users can see all the buyed tokens here",
    },
    {
      img: require("../editable-stuff/6.jpg"),
      label: "QR",
      paragraph: "Using this QR user can go and eat the meal",
    },
    {
      img: require("../editable-stuff/7.jpg"),
      label: "Admin page",
      paragraph: "Admin can change the timings of the meal",
    },
    {
      img: require("../editable-stuff/8.jpg"),
      label: "Admin page",
      paragraph: "Admin can see the total number of people for each meal",
    },
    {
      img: require("../editable-stuff/9.jpg"),
      label: "QR",
      paragraph: "Scanned QR",
    },
  ],
  imageSize: {
    width: "620",
    height: "440",
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "React", value: 90 },
    { name: "JavaScript", value: 90 },
    { name: "Data Structures", value: 85 },
    { name: "HTML/CSS", value: 50 },
    { name: "TypeScript", value: 70 },
    { name: "SQL", value: 75 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 90 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 85 },
    { name: "Adaptability", value: 80 },
    { name: "Problem Solving", value: 80 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time React Developer opportunities! If you know of any positions available, you can contact me at rachitgarg146@gmail.com or my social handles.",
  email: "rachitgarg146@gmail.com",
};


export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
};
