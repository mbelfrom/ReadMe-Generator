console.clear()
const inquirer = require("inquirer");
const fs = require("fs");

const generateReadMe = (inquiry) =>
  `# ${inquiry.title}
  ![badge](https://img.shields.io/badge/license-${inquiry.license}-blue)

## Description
---
${inquiry.description}

## Table of Contents
---
n
* [Technology](#technology)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Tests](#tests)
* [Contact](#contact)

## Technology
---

${inquiry.technology}

## Installation
---
${inquiry.installation}

## Usage
---
${inquiry.usage}


## License
---
${inquiry.license}


## Contributing
---
${inquiry.contribution}


## Tests
---
${inquiry.tests}


## Contact
Please contact me at ${inquiry.questions} or [Github](https://github.com/${inquiry.user}) with any questions or concerns regarding this or future projects.`;



// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Please provide a full description of your project.",
    },
    {
      type: "input",
      name: "technology",
      message: "What technologies were used during the creation of this project?",
    },
    {
      type: "input",
      name: "installation",
      message: "Please provide the steps taken to to install this project?",
    },
    {
      type: "input",
      name: "usage",
      message: "Provide an example of the usage for this project.",
    },
    {
      type: "checkbox",
      name: "license",
      message: "Chose from ",
      choices: ["MIT", "MPL", "EPL", "ISC", "MS-PL", "EUPL"],
    },
    {
      type: "input",
      name: "contribution",
      message: "If you would like to contribute to a github project provide a contact information.",
    },
    {
      type: "input",
      name: "tests",
      message: "What tests were performed during the creation of this project?",
    },
    {
      type: "input",
      name: "questions",
      message:
        "Please provide your email contact information on where you can be reached.",
    },
    {
      
      type: "input",
      name: "user",
      message:
        "Please provide your github user name on where you can be reached.",
    }
  ])
  .then((questions) => {
    const ReadMeContent = generateReadMe(questions);

    fs.writeFile("readme.md", ReadMeContent, (err) =>
    err ? console.log(err) : console.log(" Your README.md file has been generated!")
    );
  });
