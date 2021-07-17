// TODO: Include packages needed for this application
const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
{
    type: "input",
    name: "confirm",
    message: "Thank you for using the professional read me generator! Its important to When creating an open source project on GitHub, it’s important to have a high-quality README for the app. Just enter the inputs to get started. Put any input to get started",
    default: "y"
},
{
    type: "input",
    name: "title",
    message: "Title"
},
{
    type: "input",
    name: "info",
    message: "Description"
},
{
    type: "input",
    name: "install",
    message: "Installation steps?"
},
{
    type: "input",
    name: "delete",
    message: "Steps for deletion?"
},
{
    type: "input",
    name: "version",
    message: "version number?",
    default: "1.0.0"

},
{
    type: "input",
    name: "license",
    message: "License?",


},
{
    type: "input",
    name: "licenseLink",
    message: "license link? If you dont have it it will default?",
    default: "na"
},

{
    type: "input",
    name: "authors",
    message: "Including yourself, who are the contibuters?"
},
{
    type: "input",
    name: "test",
    message: "Your project tests."
},

{
    type: "input",
    name: "username",
    message: "What is your Github user name?",
    default: "Anonymous"
},
{
    type: "input",
    name: "contact",
    message: "Your contact info"
},];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const dataMarkDownVariable = generateMarkdown(data);
    try {
        /**
         * overwrite existing readme. if none exists it will be created
         */
        fs.writeFile(`./${fileName}`, dataMarkDownVariable);
    } catch (err) {
        console.log(err);
    }
    
}

// TODO: Create a function to initialize app
function init() {
    console.log("initialize app");
    inquirer
    .prompt(questions)
    .then((answers) => {
        
        writeToFile("README.md", answers);  
    }); 
}

// Function call to initialize app
init();
