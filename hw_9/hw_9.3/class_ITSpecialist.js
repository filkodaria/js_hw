class ITSpecialist {
	#age;
	#salary;

	constructor(name, grade, experienceYears, age, country, salary) {
		this.name = name;
		this.grade = grade; 
		this.experienceYears = experienceYears;
		this.#age = age;
		this.country = country;
		this.#salary = salary;
	}

	get country() {
		return this._country;
	}
	
	set country(value) {
		if (typeof value !== 'string') throw new Error(`It passes only 'string' type for country field.`);
		this._country = value;
	}

	getGeneralInfo() {
		return `Employee ${this.name} has grade ${this.grade} with total experience ${this.experienceYears} years.`
	}

	getAge() {
		return this.#age;
	}

	getSalary() {
		return this.#salary;
	}
}

module.exports = ITSpecialist;
