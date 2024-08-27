// Professional README Generator
// https://github.com/Nalipas/Professional-README-Generator

// Requirements:
// - npm install --save fs
// - npm install --save inquirer

// require fs and inquirer
const fs = require("fs");
const inquirer = require("inquirer");

// links to page where README is generated
const generateREADME = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the title of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project.',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'What kind of license should your project have?',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
            default: 'MIT',
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                } else {
                    console.log('Please select a license!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please enter the steps required to install your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What are the steps required to use your project?',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {    
                    console.log('Please enter the steps required to use your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'What are the steps required to test your project?',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {    
                    console.log('Please enter the steps required to test your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What are the steps required to contribute to your project?',
            validate: contributionInput => {
                if (contributionInput) {
                    return true;
                } else {    
                    console.log('Please enter the steps required to contribute to your project!');
                    return false;
                }
            }
        }
    ])
}

// function to write README file
const writeToFile = (fileName, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// function to initialize program
const init = () => {
    console.log('Welcome to the Professional README Generator!');
    return questions();
};

// function call to initialize program
init()
    .then(answers => {
        return generateREADME(answers);
    })
    .then(readmeData => {
        return writeToFile('./README.md', readmeData);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
    })
;