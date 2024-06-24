const ITSpecialist = require('./class_ITSpecialist.js');

class Developer extends ITSpecialist {
	constructor (name, grade, experienceYears, age, country, salary, isWritingUnitTests) {
		super(name, grade, experienceYears, age, country, salary);
		this.isWritingUnitTests = isWritingUnitTests;
	}

	checkIsAQA() {
		this.isWritingUnitTests ? `Dev writes Unit Tests.` : `Dev isn't able to write Unit Tests.` 
	}

	getSpesialization() {
		return 'Developer';
	}
}

module.exports = Developer;
