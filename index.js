const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'name of project',
      name: 'What the name of your project?',
    },
    {
        type: 'input',
        message: 'description',
        name: 'Project Description',
      },
      {
        type: 'input',
        message: 'installation',
        name: 'How to Install and Run the Project',
      },
      {
        type: 'input',
        message: 'Project Use',
        name: 'How to use the project',
      },
      {
        type: 'input',
        message: 'Credits',
        name: 'Project Credits',
      },
      {
        type: 'input',
        message: 'License',
        name: 'Project License',
      },
    
  ])
  .then(function (response){
    console.log(response);

  fs.writeFile("user-information.json", JSON.stringify(response), function (err){
  err ? console.error(err) : console.log("success!")
    }
  );
});