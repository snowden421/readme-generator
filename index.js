// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer'); 
const generateMarkdown = require('./Develop/utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () =>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your projects name? (Required)',
            validate: projectInput =>{
                if (projectInput){
                    return true;
                }else{
                    console.log('Please enter your projects name!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'description',
            message: 'Tell us a little about your project',
        },

        {
            type: 'input',
            name: 'github',
            message: 'Provide a link for your GitHub Profile',
        },

        {
        type: 'input',
        name: 'email',
        message: 'Provide your email adresss',
        },

        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project? (Required)',
            validate: instalInput =>{
                if (instalInput){
                    return true;
                }else{
                    console.log('Please enter your project steps!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions and examples for use. Include screenshots as needed (Required)',
            validate: useInput =>{
                if (useInput){
                    return true;
                }else{
                    console.log('Please enter your projects details!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'credits',
            message: 'List the collaborators, if any, with links to their Github profiles.',
            },

            {
                type: 'list',
                name: 'license',
                message: 'Choose what type of license you would like to use:',
                choices: ["MIT", "Apache", "Boost", "None"]
                }
    ])
    .then((answers)=>{
        fs.writeFile('./Develop/utils/ReadMe-generator.md', generateMarkdown(answers), err =>{
            if(err) throw err;
            console.log('ReadMe complete! Check out readMe.md to see the output!');
        });
    })
};

// TODO: Create a function to write README file

// fs.writeFile('./README.md', generateMarkdown(), err =>{
//     if(err) throw err;
//     console.log('ReadMe complete! Check out readMe.md to see the output!');
// });

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
questions()
