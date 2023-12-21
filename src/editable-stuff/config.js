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
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/shahid.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

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
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "RachitGarg-12", //i.e."johnDoe12Gh"
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
      img: require("../editable-stuff/home.png"),
      label: "First slide label",
      paragraph:
        "Home page of Task Management system where a user can manage all their tasks",
    },
    {
      img: require("../editable-stuff/add.png"),
      label: "Second slide label",
      paragraph: "User can add his task from this page",
    },
    {
      img: require("../editable-stuff/edit.png"),
      label: "Second slide label",
      paragraph:
        "If user Write somethings wrong then here he can edit the task ",
    },
    {
      img: require("../editable-stuff/1.png"),
      label: "Dashboards",
      paragraph: "Dashboard with charts ",
    },
    {
      img: require("../editable-stuff/2.png"),
      label: "Users Module",
      paragraph: "Users can be managed from here ",
    },
    {
      img: require("../editable-stuff/3.png"),
      label: "Products",
      paragraph: "All the Products Are listed here ",
    },
    {
      img: require("../editable-stuff/4.png"),
      label: "Add Zone",
      paragraph: "A Zone can be Added from here ",
    },
    {
      img: require("../editable-stuff/5.png"),
      label: "Transactions",
      paragraph: "All the Transactions Are listed here",
    },
    {
      img: require("../editable-stuff/6.png"),
      label: "Vending Machine List",
      paragraph: "All the Vending machines are listed here",
    },
    {
      img: require("../editable-stuff/7.png"),
      label: "Overview",
      paragraph: "Vending Machine Overview ",
    },
    {
      img: require("../editable-stuff/8.png"),
      label: "Refill Vending Machine",
      paragraph: "User can refill machine from here ",
    },
  ],
  imageSize: {
    width: "615",
    height: "450",
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "React", value: 90 },
    { name: "JavaScript", value: 90 },
    { name: "Data Structures", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "TypeScript", value: 80 },
    { name: "SQL", value: 75 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
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
