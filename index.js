const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please add a description of your project',
        name: 'description',
    },
    {
        type: 'list',
        message: 'Select the license you would like your project to have',
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        message: 'What command to run to install dependencies',
        name: 'installation',
        default: 'Installation'
    },
    {
        type: 'input',
        message: 'What does the user need to know to use this repo',
        name: 'usage',
        default: 'Usage'
    },
    {
        type: 'input',
        message: 'How can the user contribute',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What command to run to for testing',
        name: 'tests',
    },
]

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), filename), data);
}

function init() {
    inquirer.prompt(questions)
    .then((inquirerResponses) => {
        console.log("Generating README");
        writeToFile("README.md", generateMarkdown({inquirerResponses}));
    })
}

init();