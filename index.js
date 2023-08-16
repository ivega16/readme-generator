// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

/*
WHEN I enter my project title
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
WHEN I choose a license for my application from a list of options

THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
*/

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title",
        message: "What is the title of your project?",
        type: "input"
    },
    {
        name: "description",
        message: "Describe your project",
        type: "input"
    },
    {
        name: "installation",
        message: "What are the installation instructions?",
        type: "input"
    },
    {
        name: "usage",
        message: "What is the usage information?",
        type: "input"
    },
    {
        name: "constribution",
        message: "What are the contribution guidelines?",
        type: "input"
    },
    {
        name: "tests",
        message: "What are the test instructions?",
        type: "input"
    },
    {
        name: "license",
        message: "Choose a license from this list:",
        type: "list",
        choices:["Mozilla Public License 2.0", "Eclipse Public License 2.0", "MIT License"]
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        console.log(data)
    })
}

// Function call to initialize app
init();
