/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Avish Mehta",
  title: "Hi all, I'm Avish",
  subTitle: emoji(
    "A passionate Tech Enthusiast 🚀 looking for solving real life problems with technology. "
  ),
  resumeLink:
    "https://drive.google.com/file/d/1GBQu-qmBuXgnWw7iypjQu7rNnrIWfhN7/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/avishmehta68710",
  linkedin: "https://www.linkedin.com/in/avishmehta",
  gmail: "avishmehta68710@gmail.com",
  twitter: "https://twitter.com/AvishMehta4",
  phone: "+91-6377216865",
  // gitlab: "https://gitlab.com/avishmehta68710",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "CRAZY EXPLORER WHO WANTS TO GET HIS HANDS DIRTY ON EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Full Stack User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Developing solutions to real life problems"),
    emoji(
      "⚡ Integration of third party services such as Google API, Firbase, Github"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node-js"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Django",
      fontAwesomeClassname: "fab fa-django"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Pandit Deendayal Energy University",
      logo: require("./assets/images/pdeu_logo.png"),
      subHeader: "Bachelor of Technology",
      duration: "August 2019- August 2023",
      desc: "Tech Enthusiast who loves to solve real life problems",
      descBullets: [
        "Made a App in Google Developer Solution Challenge for acheveing 17 suistainable development goals set by UN.We Managed to acheive 4 goals (Peace, Justice and Strong Institutions; Partnerships for the goals; Quality Education) ",
        "Achieved a global rank of 439 in codechef challenge",
        "University topper in geeksforgeeks",
        "Current CPI : 9.05"
      ]
    },
    {
      schoolName: "MDS Senior Secondary School",
      logo: require("./assets/images/mds_logo.png"),
      subHeader: "Senior Secondary Education (Class XII) ",
      duration: "2018 - 2019",
      desc: "Acheived 77% in CBSE Class XII"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "DevOps ",
      progressPercentage: "50%"
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "Tartan",
      data:"August 2022 - December 2022",
      companylogo: require("./assets/images/tartan.png"),
      desc:"August 2022 - December 2022",
      descBullets: [
          "Developed and implemented an analytics framework forBatik (employer benefits marketplace)",
          "Created a framework for daily scanning of production logs and sending customized daily and weekly reports on errors and vulnerabilities in the system via Slack",
          "Upgraded and maintained the Batik platform",
          "Developed and enhanced the Grafana platform for monitoring,analytics and alerting purposes."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Mensa Brands",
      data:"February 2022 - July 2022",
      desc:"February 2022 - July 2022",
      companylogo: require("./assets/images/mensa_brands.png"),
        descBullets: [
            "Central data aggregation and ETL engine to pull data from multiple brand seller accounts across marketplaces through API processing more than 4M records per day.",
            "Worked on creating the Catalog Management System to centralize and streamline SKU master database, cataloging, and CatOps.",
            "Worked on creating a Central data scraping engine to aggregate track and analyze the 170 brands' performance across 6 marketplaces, 4 geographies, and 4 languages. Engine scraped 20k pages per day"
        ]
    },
    {
      role: "Software Engineer Intern",
      company: "PredictiVu",
      data: "October 2021 - January 2022",
      desc:"October 2021 - January 2022",
        companylogo: require("./assets/images/predictivu.png"),
      descBullets: [
          "Worked on creating audience measurement, audience segmentation and customer journey for web and mobile.",
          "Created a mobile application in android and React Native for eight passive data collection methods such as all apps installed, app usage details, and location details etc.Created a NodeJS API for sending data from android and React Native to NodeJS and from NodeJS to MongoDB.",
          "Worked on creating a Scrapper from Amazon and big basket to handle IP blocking and lazy loading through various methods such as IP rotation and proxies, Honey Pots, User Agents and request headers etc."
        ]
    },
    {
      role: "Software Engineer Intern",
      company: "Aztlan",
      companylogo: require("./assets/images/aztlan.png"),
      data: "",
      desc: "September 2021 - October 2021",
      descBullets: [
        "Worked on making the user Flows and Dashboard for Ola Electric, which enables users to buy electric vehicles from Ola and also reduces the number of physical visits to RTO using Nodejs",
        "Worked on various other projects such as startup investor meet and tapeit which connects entrepreneurs and investors together and the dashboard to order tapes for different vehicles using Supabase(Open Source for Firebase), SQL and JavaScript"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "LogicWind",
      companylogo: require("./assets/images/logicwind.png"),
      date: "",
      desc: "June 2021 - September 2021",
      descBullets: [
        "Worked on Building and authenticating Webhooks across 10 different platforms such as Sentry, Bitbucket, GitLab, GitHub, ClickUp, Jira, etc. using NodeJS+Express and Sequelize with Postgres",
        // "Alert Members of the Team about all the different activities happening across all the platforms such as in Sentry alert members for bugs and errors, in Bitbucket alert members for changes in the code files and keep track on commits and merge requests",
        "Made a Web Scrapping Tool For Extracting details from other websites using NodeJS + Express and deployed it on AWS Lambda"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Molmeh-Technolabs",
      companylogo: require("./assets/images/molmeh.png"),
      date: "",
      desc: "February 2022 - April 2022",
      descBullets: [
        "Gained Knowledge of Django framework and  worked on projects using Django, Python, JavaScript, HTML and CSS.",
        "I worked on projects such as Scheduling the IPL matches between various teams, deciding the date and the location of the match",
        "Making Custom User Validation and authentication in Django"
      ]
    }
  ]
};
const bigProjects = {
  title: "Recent Projects",
  subtitle: "SOME OF MY SPOTLIGHT PROJECTS",
  projects: [
    {
      image: require("./assets/images/linkedin.png"),
      projectName: "Linkedin Bot",
      projectDesc:
        "Automating the process of getting referrals and cold mailing people on linkedin",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/avishmehta68710/linkedinBot"
        }
      ]
    },
    {
      image: require("./assets/images/project1.png"),
      projectName: "Engage For Change",
      projectDesc:
        "A platform where people could connect and post about social work and help in uplift the community.",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/avishmehta68710/Engage_For_Change"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/musicplayer.png"),
      projectName: "Music Player",
      projectDesc:
        "Music Player Using Python. Some of the Unique Features include Visualization of the audio signals, saving and recording of the songs,conversion of songs from one format to another (eg from .wav to mp3 or vice-versa)  ",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/avishmehta68710/Music-Player"
        }
      ]
    },
    {
      image: require("./assets/images/mlmodel.png"),
      projectName:
        "Machine Learning Model on Gender predictions based on Twitter user dataset",
      projectDesc:
        "Naive Bayes algorithm gives the best accuracy of around 69% if the feature extraction method used is Bag of Words. For More Details Check the project link below",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/avishmehta68710/ML07B1"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements 🏆 "),
  subtitle: "Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "CodeChef Profile",
      subtitle: "Actively Taking Part in codechef challenges",
      image: require("./assets/images/codechef.png"),
      footerLink: [
        {
          name: "Profile",
          url: "https://www.codechef.com/users/avishmehta"
        }
      ]
    },

    {
      title: "GeeksforGeeks",
      subtitle: "GeeksforGeeks Profile",
      image: require("./assets/images/geeksforgeeks.png"),
      footerLink: [
        {
          name: "Profile",
          url: "https://auth.geeksforgeeks.org/user/avishmehta2001/practice/"
        }
      ]
    },
    {
      title: "LeetCode",
      subtitle: "LeetCode Profile",
      image: require("./assets/images/LeetCode.png"),
      footerLink: [
        {
          name: "Profile",
          url: "https://leetcode.com/pythonleaves/"
        }
      ]
    },
    {
      title: "Hackerrank",
      subtitle: "Hackerrank Profile",
      image: require("./assets/images/hackerrank.png"),
      footerLink: [
        {
          name: "Profile ",
          url: "https://www.hackerrank.com/avishmehta2001"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Publications",
  subtitle: "I love to do explore new things and solve problems",

  blogs: [
    {
      title: " Ground temperature estimation using Machine Learning ",
      description: "Publisher: World Geothermal Congress, Reykjavik"
    },
    {
      title:
        "A Comprehensive Study on Amalgamation of Sustainable Solar Powered Distillation for Arsenic and Fluoride Removal from Groundwater",
      description: "Publisher: Elsiever"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Current Activities",
  subtitle: emoji("More About Myself 😅"),

  talks: [
    {
      title: "Techical Member at Robotics and Automation Club of PDEU",
      subtitle:
        "We Conduct Webinars and Teach Students technologies like Arduino,Opencv,ROS etc",
      event_url: "https://cretus-pdpu.github.io/"
    },
    {
      title: "Core Member at TechnoEconomics Club of PDEU",
      subtitle: "We Conduct Events Related to Finance and Technology",
      event_url: "https://anirveda.club/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Extra Curricular Activities "),
  subtitle: "Things I Love to do",

  // Please Provide with Your Podcast embeded Link
  podcast: ["Robotics and Gaming"],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9461669137",
  email_address: "avishmehta68710@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
