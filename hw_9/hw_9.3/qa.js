const ITSpecialist = require('./class_ITSpecialist.js');

class QA extends ITSpecialist {
	constructor (name, grade, experienceYears, age, country, salary, isAQA) {
		super(name, grade, experienceYears, age, country, salary);
		this.isAQA = isAQA;
	}

	checkIsAQA() {
		this.isAQA ? `Tester is AQA.` : `Tester is manual.` 
	}

}

module.exports = QA;
