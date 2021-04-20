// Import require external files
const inquirer = require('inquirer');
const fs = require('fs');
const css = require('./ux/style');

const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');


let teamArr = [];

// Prompt Team Name
function TeamNamePromt() {
  inquirer.prompt([{
      message: 'Let get your team a name.',
      name: 'teamName'
    }])
    .then(data => {
      const teamName = data.teamName;
      teamArr.push(teamName) // Stored user input into teamArr Array
      Manager();
    })
}

// Add Manager to the result page
function Manager() {
  inquirer.prompt([{
        message: "What is your team manager's name?",
        name: "name"
      },
      {
        message: "What is your team manager's email address?",
        name: "email"
      },
      {
        type: "number",
        message: "What is your team manager's office number?",
        name: "officeNumber"
      },
    ])

    .then(data => {
      const name = data.name;
      const id = 1;
      const email = data.email;
      const officeNumber = data.officeNumber;
      const teamMember = new Manager(name, id, email, officeNumber);
      teamArr.push(teamMember);
      addTeamMembers();
    })
}

function addTeamMembers() {
  inquirer.prompt([{
      type: "list",
      message: "Would you like to add more team members?",
      choices: ["Yes, add an engineer", "Yes, add an intern", "No, my team is complete"],
      name: "addMemberData"
    }])

    .then(data => {

      switch (data.addMemberData) {
        case "Yes, add an engineer":
          addEngineer();
          break;

        case "Yes, add an intern":
          addIntern();
          break;
        case "No, my team is complete":
          compileTeam();
          break;
      }
    });
}

function addEngineer() {
  inquirer.prompt([{
        message: "What is this engineer's name?",
        name: "name"
      },
      {
        message: "What is this engineer's email address?",
        name: "email"
      },
      {
        message: "What is this engineer's Github profile?",
        name: "github"
      }
    ])

    .then(data => {
      const name = data.name
      const id = teamArr.length + 1
      const email = data.email
      const github = data.github
      const teamMember = new Engineer(name, id, email, github)
      teamArr.push(teamMember)
      addTeamMembers()
    });
}








teamArr();