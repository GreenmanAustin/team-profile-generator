const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');
const { writeFile } = require('./utils/generate-site');
const testing = require('./utils/testing');

var done = 'false';
var team = [];

const employeeObjs = [Manager, Engineer, Intern];
const employeeTypes = ["team manager", 'engineer', 'intern'];
const uniqueQuestions = [
    "What is your team manager's office number?",
    "What is your engineer's GitHub Username?",
    "What is your intern's school affiliation"
];


// const optionMenu = () => {
//     return inquirer
//         .prompt({
//             type: 'list',
//             name: 'choice',
//             message: 'What would you like to do next?',
//             choices: ['Add an engineer', 'Add an intern', 'Finish team']
//         })
//         .then(({ choice }) => {
//             switch (choice) {

//                 case 'Add an engineer':
//                     enterEmployees(1);
//                     break;
//                 case 'Add an intern':
//                     enterEmployees(2);
//                     break;
//                 case 'Finish team':
//                     break;
//             }

//         })
// };

const enterEmployees = (no) => {
    if (no !== 0) {
        console.log('\n====================================\nEntering Employee Information\n====================================\n ');
    };
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


enterEmployees(0)
    .then(pageData => {
        return generatePage(pageData)
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    });