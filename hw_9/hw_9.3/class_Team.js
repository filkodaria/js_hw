const ITSpecialist = require('./class_ITSpecialist.js');
const Task = require('./class_Task.js');

class Team {
	teammates = [];
	tasks = [];

	constructor(name, sprintDuration, releaseDate, dailyStandupTime) {
		this.name = name; 
		this.sprintDuration = sprintDuration;
		this.releaseDate = releaseDate;
		this.dailyStandupTime = dailyStandupTime;
	}

	get name() {
		return this._name;
	}

	set name(value) {
		if (typeof value !== 'string') throw new Error(`It passes only 'string' type for name field.`);
		this._name = value;
	}

	get sprintDuration() {
		return this._sprintDuration;
	}

	set sprintDuration(value) {
		if (typeof value !== 'number') throw new Error(`It passes only 'number' type for sprintDuration field.`);
		this._sprintDuration = value;
	}

	get releaseDate() {
		return this._releaseDate;
	}

	set releaseDate(value) {
		if (typeof value !== 'string') throw new Error(`It passes only 'string' type for release date field.`);
		this._releaseDate = value;
	}

	get dailyStandupTime() {
		return this._dailyStandupTime;
	}

	set dailyStandupTime(value) {
		if (typeof value !== 'string') throw new Error(`It passes only 'string' type for daily standup time field.`);
		this._dailyStandupTime = value;
	}

	// Teammates methods

	getTeammatesNumber() {
		return this.teammates.length;
	}

	addTeammate(newEmployee) {
		if (!(newEmployee instanceof ITSpecialist)) throw new Error (`Function passes only instance of class ITSpecialist.`);
		this.teammates.push(newEmployee);
	}

	removeTeammate(name, jobTitle) {
		const index = this.teammates.findIndex(employee => employee.name === name && employee.getSpesialization() === jobTitle);
		if (index === -1) throw new Error(`Employee not found.`);
		this.teammates.splice(index, 1);
	}

	editTeammate() {

	}

	showAllTeammates() {
		return this.teammates;
	}

	showTeammatesBySpecialization(jobTitle) {
		return this.teammates.filter(employee => employee.getSpesialization() === jobTitle);
	}

	// Tasks methods
	
	addTask(featureName, userStoryNumber, estimationHours) {
		const duplicates = this.tasks.find(task => task.getFeatureName() === featureName);
		if (duplicates) throw new Error('Such task exists.');
		
		const id = this.#getNewTaskId();
		const newTask = new Task(id, featureName, userStoryNumber, estimationHours);
		this.tasks.push(newTask);
	}

	#getNewTaskId() {
		let newId;
		if (this.tasks.length == 0) {
			return newId = 1;
		} else {
			const idArr = this.tasks.map(task => task.getId());
			return newId = Math.max(...idArr) + 1;
		}
	}

	removeTask(id, keyWord) {
		const regex = new RegExp(`${keyWord}`, 'gi');

		const index = this.tasks.findIndex(task => task.getId() === id && task.getFeatureName().match(regex));
		if (index === -1) throw new Error(`Task not found.`);
		
		this.tasks.splice(index, 1);
	}

	editTask() {

	}

	showAllTasks() {
		return this.tasks.map(task => {
			return {
				id: task.getId(),
				featureName: task.getFeatureName(),
				userStoryNumber: task.getUserStoryNumber(),
				estimationHours: task.getEstimationHours(),
			}
		});
	}

	showTasksByUserStory(userStoryNumber) {
		return this.tasks.filter(task => task.getUserStoryNumber() === userStoryNumber);
	}
}

module.exports = Team;