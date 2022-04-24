// Declaring the dependancies and variables
const fs = require("fs");
const inquirer = require("inquirer");

// Prompt the user questions to populate the README.md
inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "projectTitle",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the title of your project");
          return false;
        }
      },
    },

    {
      type: "input",
      message: "Please write a short description of your project",
      name: "projectDescription",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please write a short discription of your project");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "What are the steps required to install your project?",
      name: "installation",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter steps required to install your project");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "What is this project used for?",
      name: "usage",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter what this project will be used for");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "List your collaborators",
      name: "collaborators",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please list the people who contributed to this project");
          return false;
        }
      },
    },
    {
      type: "list",
      message: "Choose the appropriate license for this project: ",
      name: "license",
      choices: ["Apache", "Academic", "GNU", "ISC", "MIT", "Mozilla", "Open"],
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please choose a license from the list");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "Please enter your GitHub username",
      name: "userName",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your GitHub username");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "Please enter your email address",
      name: "email",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your email address");
          return false;
        }
      },
    },
  ])
  .then((answers) => {
    const readmePageContent = generateReadme(answers);

    fs.writeFile("testREADME.md", readmePageContent, (err) =>
      err
        ? console.log(err)
        : console.log("Successfully created testREADME.md!")
    );
  });

// Write new README.md to dist directory
const generateReadme = (answers) => {
  let result = `
  # ${answers.projectTitle}
  
  ## Project Description: 
  ${answers.projectDescription}
  
  ## Steps required to install your project:
  ${answers.installation}
  
  ## What will this project be used for:
  ${answers.usage}
  
  ## Project Collaborators:
  ${answers.collaborators}
  
  ## License:
  ${answers.license}
  
  ## GitHub username: 
  ${answers.userName}
  
  ## Email Address:
  ${answers.email}
    `;
  return result;
};
