const inquirer = require("inquirer")
const fs= require ("fs")

function generateBadgeForLicense(license){
    if (license === "MIT"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"};

    if (license === "IBM"){
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"};

    if (license === "Eclipse Public License"){
    return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"};
   
}


let readMeText = (data)=>{
return`
# ${generateBadgeForLicense(data.license)}
# [repoName](#repoName)
${data.repoName}
## Table of Contents  
* [description](#description)  
* [installation](#installation) 
* [usage](#usage)  
* [contributers](#contributers) 
* [license](#license)
* [test](#test)
* [github](#github)  
* [email](#email)  
## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## Contributers
${data.contribution}
## License
${data.license}
## Test
${data.testInstructions}
# Questions
#### for more information please contact me on github or email
## Github
    ${[data.github]}
## Email
    ${[data.email]}
`
}


const questions = [
    {
        type: 'input',
        name: 'repoName',
        message: 'Repository name?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project description?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Instructions for installation',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage information?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Contributing parties',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Licesne used on project?',
        choices: ["MIT", "IBM", "Eclipse Public License","N/A",],
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'Test instructions? ',
        
    },
    {
        type: 'input',
        name: 'github',
        message: 'GitHub link?',
        
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email address?',
    },
    
];


inquirer.prompt(questions).then((data)=>{
    console.log(data)
    fs.writeFile("generatedReadMe.md", readMeText(data), function(err){
        if(err) 
        console.log(err);
        
        
    })
    
})
