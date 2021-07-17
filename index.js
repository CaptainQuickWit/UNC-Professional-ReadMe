// TODO: Include packages needed for this application
const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const getUserInputPath = require('./utils/getPath.js');
//file/directory user wants readme written to as default if user doesn't want any speacial filename/path
const defaultPath = "./README/README.md";
// TODO: Create an array of questions for user input
const questions = [
{
    type: "input",
    name: "confirm",
    message: "Thank you for using the professional read me generator! Its important to When creating an open source project on GitHub, it’s important to have a high-quality README for the app. Just enter the inputs to get started. Press any key to continue.",
    default: "y"
},
{
    type: "input",
    name: "title",
    message: "Title:"
},
{
    type: "input",
    name: "info",
    message: "Description:"
},
{
    type: "input",
    name: "install",
    message: "Installation steps:"
},
{
    type: "input",
    name: "delete",
    message: "Steps for deletion:"
},
{
    type: "input",
    name: "version",
    message: "version number:",
    default: "1.0.0"

},
{
    type: "input",
    name: "dependencies",
    message: "dependencies: ",
    default: ""

},

{
    type: 'list',
    name: 'license',
    message: 'License choices:',
    choices: ["MIT", "GPLv3", "GNU 3.0", "Apache", "none"],
    default: "none",
},
{
    type: "input",
    name: "authors",
    message: "Including yourself, list the contirbuters:"
},
{
    type: "input",
    name: "test",
    message: "Your project tests."
},

{
    type: "input",
    name: "username",
    message: "What is your Github user name:",
    default: "Anonymous"
},
{
    type: "input",
    name: "contact",
    message: "Your contact info:"
},
{
    type: "input",
    name: "directory",
    message: `File& Path you want written. Enter nothing for default path, note if default exists it will be overwritten. Default: ${defaultPath}`,
    default: defaultPath
}
];

// TODO: Create a function to write README file
function writeToFile(data) {
    const dataMarkDownVariable = generateMarkdown(data);
    const thePathUserEntered = getUserInputPath(data);

    try {

        fs.writeFile(thePathUserEntered, dataMarkDownVariable, function (err) {
            console.log("an Error with the writeToFile method line 98. this error is normal and likely not significant to the functionality of the program");
        });
        console.log("READ ME GENERATED!");
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
        
        writeToFile(answers);
    }); 
}

// Function call to initialize app
init();
