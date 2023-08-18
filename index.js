// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require('inquirer');
const fs = require('fs'); //fs is needed to create a file

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
        name: "contribution",
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
        choices:["Eclipse Public License 2.0", "MIT License", "Apache 2.0 License", "No License"]
    },
    {
        name: "username",
        message: "What is your GitHub username?",
        type: "input"
    },
    {
        name: "email",
        message: "What is your email?",
        type: "input",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err =>{
        if(err) throw err
        console.log("success")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data => {
        writeToFile("./output/README.md", data)
    })
}

// Function call to initialize app
init();
