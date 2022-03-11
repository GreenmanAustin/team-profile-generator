// Adds packages for this application
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');
const { writeFile } = require('./utils/generate-site');

// initializes the team array
var team = [];

// this is an array of objects of the different employee types
const employeeObjs = [Manager, Engineer, Intern];

// array of strings for each emplpyee type, which is used in the inquirer prompts below to reduce the amount of code
const employeeTypes = ["team manager", 'engineer', 'intern'];

// this is an array of questions for use in the inquirer questions below
const uniqueQuestions = [
    "What is your team manager's office number?",
    "What is your engineer's GitHub Username?",
    "What is your intern's school affiliation"
];


// this is the main function which takes an argument the index of the employeeTypes array and uses that to produce user prompts for the specified employee type
const enterEmployees = (no) => {

    // this is the console log show before entering every employee after the Manager
    if (no !== 0) {
        console.log('\n====================================\nEntering Employee Information\n====================================\n ');
    };

    // these are the user prompts, which vary based on the employee type specifed by the argument to this function
    return inquirer
        .prompt([
            {
                type: 'text',
                name: 'name',
                message: `What is your ${employeeTypes[no]}'s name?`,
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('\n', '\n', "Response is required.  Please try again.", '\n');
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'employeeId',
                message: `What is your ${employeeTypes[no]}'s employee ID?`,
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log('\n', '\n', "Response is required.  Please try again.", '\n');
                        return false;
                    }
                }

            },
            {
                type: 'text',
                name: 'email',
                message: `What is your ${employeeTypes[no]}'s email address?`,
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('\n', '\n', "Response is required.  Please try again.", '\n');
                        return false;
                    }
                }

            },
            {
                type: 'text',
                name: 'uniqueQuestion',
                message: uniqueQuestions[no],
                validate: questionInput => {
                    if (questionInput) {
                        return true;
                    } else {
                        console.log('\n', '\n', "Response is required.  Please try again.", '\n');
                        return false;
                    }
                }
            }
        ]).then(({ name, employeeId, email, uniqueQuestion }) => {
            var newEmployee = new employeeObjs[no](name, employeeId, email, uniqueQuestion);
            console.log('\n', newEmployee, '\n');
            team.push(newEmployee);
            return inquirer.prompt({
                type: 'list',
                name: 'choice',
                message: 'What would you like to do next?',
                choices: ['Add an engineer', 'Add an intern', 'Finish team']
            })
                // Based on the user's input above, the enterEmployee function is either called again, with the index of the employee type the user wants to enter being, or the function ends
                .then(({ choice }) => {
                    switch (choice) {

                        case 'Add an engineer':
                            return enterEmployees(1);
                            break;
                        case 'Add an intern':
                            return enterEmployees(2);
                            break;
                        case 'Finish team':
                            console.log(team);
                            return team
                            break;
                    }

                })
        })
};



// this calls the function with the index number for the manager type
enterEmployees(0)
    // the array of objects generated from the user prompts is passed to generatePage to produce the HTML
    .then(pageData => {
        return generatePage(pageData)
    })

    // the HTML page from the prior function is passed to writeFile to be saved as index.html inside the "dist" folder
    .then(pageHTML => {
        return writeFile(pageHTML);
    });