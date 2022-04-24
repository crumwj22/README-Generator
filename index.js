// Declaring the dependancies and variables
const fs = require("fs");
const inquirer = require("inquirer");

// Prompts the user questions to populate the README.md
inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?:",
      name: "projectTitle",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the title of your project:");
          return false;
        }
      },
    },

    {
      type: "input",
      message: "Please write a short description of your project:",
      name: "projectDescription",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please write a short discription of your project:");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "What are the steps required to install your project?:",
      name: "installation",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter steps required to install your project:");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "What is this project used for?:",
      name: "usedFor",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter what this project will be used for:");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "List all of the contribution guidelines:",
      name: "contributers",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log(
            "Please list the people who contributed to this project:"
          );
          return false;
        }
      },
    },
    {
      type: "input",
      message: "What command should be run to run tests?:",
      name: "test",
      default: "npm test",
    },
    {
      type: "list",
      message: "Choose the appropriate license for this project:",
      name: "yourLicense",
      choices: ["MIT", "GPLv3", "GPL"],
    },
    {
      type: "input",
      message: "Please enter your GitHub username:",
      name: "userName",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your GitHub username:");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "Please enter your email address:",
      name: "email",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your email address:");
          return false;
        }
      },
    },
  ])
  .then((answers) => {
    const readmePageContent = generateReadme(answers);

    fs.writeFile("README.md", readmePageContent, (err) =>
      err ? console.log(err) : console.log("Successfully created README.md!")
    );
  });

// license badges
// const renderLicenseBadge = (license) => {
//   let licenseType = answers.license;
//   let yourLicense = ''
//   if(licenseType === 'MIT') {
//     yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
//   } else if (licenseType === 'GPLv3') {
//     yourLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
//   } else if (licenseType === 'GPL') {
//     yourLicense = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
//   }
//   return yourLicense;
// };

// Write new README.md to dist directory
const generateReadme = (answers) => {
  let result = `
# ${answers.projectTitle}
  

## Description ##
    
  ${answers.projectDescription}



  ### Table of Contents
---------------
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
  

## Installation ##
    
  ${answers.installation}
  


  ## Usage ##
    
  ${answers.usedFor}



  ---
### License: ${answers.yourLicense}
---
  


## Contributing ##
  
  ${answers.contributers}



---
### Tests: ${answers.test} 
---
  


## Questions ##

If you have additional questions about this project please contact me directly at <${answers.email}>. 
You can view more of my projects at <https://github.com/${answers.userName}>.
`;
  return result;
};
