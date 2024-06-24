const Team = require('./class_Team.js');
const Manager = require('./manager.js');
const Developer = require('./developer.js');
const QA = require('./qa.js');


// Create a team
const dreamTeam = new Team('The best team', 3, '07-16-2024', '10am');
// console.log(dreamTeam);

// Add/show/remove teammates
dreamTeam.addTeammate(new Manager('Max', 'TechLead', 8, 35, 'Ukraine', 3000, true));
dreamTeam.addTeammate(new Developer('Alex', 'Senior', 6, 32, 'Spain', 3500, true));
dreamTeam.addTeammate(new Developer('Anna', 'Middle', 3, 29, 'Ukraine', 2700, true));
dreamTeam.addTeammate(new Developer('Mike', 'Middle', 3, 30, 'Poland', 2500, false));
dreamTeam.addTeammate(new QA('Maria', 'Middle', 3, 31, 'Ukraine', 1800, false));
dreamTeam.addTeammate(new QA('Peter', 'Junior', 1, 25, 'Ukraine', 800, false));
console.log(dreamTeam.showAllTeammates());
console.log(dreamTeam.getTeammatesNumber());
console.log(dreamTeam.showTeammatesBySpecialization('Developer'));

dreamTeam.removeTeammate('Mike', 'Developer');
dreamTeam.removeTeammate('Peter', 'QA');
console.log(dreamTeam.getTeammatesNumber());

// Add/show/remove tasks
dreamTeam.addTask('Login form validation', 101, 8);
dreamTeam.addTask('Login form. UI implementation', 101, 4);

dreamTeam.addTask('Create Listing form validation', 201, 16);
dreamTeam.addTask('Create Listing form. UI implementation', 201, 8);
console.log(dreamTeam.showAllTasks());

dreamTeam.removeTask(3, 'list');
dreamTeam.addTask('Create Listing form. Redesign.', 201, 16);
console.log(dreamTeam.showAllTasks());
console.log(dreamTeam.showTasksByUserStory(201));
