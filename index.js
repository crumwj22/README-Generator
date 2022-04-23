const fs = require("fs");
const inquirer = require("inquirer");

// how to generate README

inquirer
  .prompt([
    {
      type: "input",
      message: "<Your-Project-Title>",
      name: "projectTitle",
    },

    {
      type: "input",
      message: "Project Description",
      name: "projectDescription",
    },
    {
      type: "input",
      message: "Table of Contents",
      name: "tableOfContents",
    },
    {
      type: "input",
      message: "What are the steps required to install your project?",
      name: "installation",
    },
    {
      type: "input",
      message:
        "Provide instructions and examples for use. Include screenshots as needed.",
      name: "usage",
    },
    {
      type: "input",
      message: "List your collaborators",
      name: "collaborators",
    },
    {
      type: "input",
      message: "List your license",
      name: "license",
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
const generateReadme = (answers) => {
  let result = `
    # ${answers.projectTitle}
    ## ${answers.projectDescription}
    ## ${answers.tableOfContents}
    ## ${answers.installation}
    ## ${answers.usage}
    ## ${answers.collaborators}
    ## ${answers.license}
    
    `;
  return result;
};
