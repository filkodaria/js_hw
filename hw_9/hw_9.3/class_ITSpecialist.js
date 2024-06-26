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

	get age() {
		return this.#age;
	}

	set age(value) {
		if (typeof value !== 'number') throw new Error(`It passes only 'number' type for age field.`);
		this.#age = value;
	}

	get country() {
		return this._country;
	}
	
	set country(value) {
		if (typeof value !== 'string') throw new Error(`It passes only 'string' type for country field.`);
		this._country = value;
	}

	get salary() {
		return this.#salary;
	}

	set salary(value) {
		if (typeof value !== 'number') throw new Error(`It passes only 'number' type for salary field.`);
		this.#salary = value;
	}

	getName() {
		return this.name;
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

	getSpecialization() {
		return this.constructor.name;
	}

}

module.exports = ITSpecialist;
