// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
    {
                type: 'input',
        name: 'projectTitle',
        message: 'What is the project title?',
        validate: projectTitles => {
            if (projectTitles){
                return true; 

            } else {
                console.log ('Please enter a project title');
                return false;
            }
        }


    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github user?',
        validate: githubs => {
            if (githubs) {
                return true;

            } else {
                console.log ('Please enter a github username');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate: emails => {
            if (emails){
                return true;

            } else {
                console.log ('Please enter your email');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what,why and how of your project.',
        validate : descriptions => {
            if(descriptions){
                return true;

            } else {
                console.log ('Please enter a short description');
                return false;
            }
        }

    },
    {
     type: 'input',
     name: 'installation',
     message: 'What are the steps needed to install your project?',
     validate: installations => {
        if (installations){
            return true;

        } else {
            console.log ('Please enter steps for installation!');
            return false;
        }
     }
    },
    { 
    type: 'input',
    name: 'usage',
    message: 'What are the instruction for usage?',
    validate: usages => {
        if (usages) {
            return true;

        } else { 
            console.log ('Please enter instruction for usage');
            return false;
        }
    }
    },
   
{
    type: 'list',
    name: 'license',
    message: 'What license would you like to use?',
    choices: ['MIT', 'GNU'],
    
},
{
    type: 'input',
    name: 'credits',
    message: 'list collaborators',
    validate: credit => {
        if (credit) {
            return true;

        } else {
            return false;
        }
    }
},

];

// TODO: Create a function to write README file
function writeToFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', data, err => {
          
            if (err) {
                reject (err);
               
                return;
            }
        
            resolve({
                ok: true,
                message: console.log('Success! Navigate to the "dist" folder to see your README!')
            });
        })
    })
}

// TODO: Create a function to initialize app


const init = () => {


//function init() {
return inquirer.prompt(questions);
}
// Function call to initialize app
init()
.then(userInput => {
    return generateMarkdown(userInput);
})
.then(readmeInfo => {
    return writeToFile(readmeInfo);
})
.catch(err => {
    console.log(err);
})
