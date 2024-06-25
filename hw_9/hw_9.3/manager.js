const ITSpecialist = require('./class_ITSpecialist.js');

class Manager extends ITSpecialist {
	constructor (name, grade, experienceYears, age, country, salary, isScrumMaster) {
		super(name, grade, experienceYears, age, country, salary);
		this.isScrumMaster = isScrumMaster;
	}

	checkIsScrumMaster() {
		this.isScrumMaster ? `Manager is Scum Master.` : `Manager isn't Scum Master.` 
	}
	
}

module.exports = Manager;
