// Task 2.

class Animal {
	constructor(type, color, weight, height, placeOfOrigin) {
		this.type = type;
		this.color = color;
		this.weight = weight;
		this.height = height;
		this.placeOfOrigin = placeOfOrigin;
	}

	getInfo() {
		return `The properties of this ${this.type}: color - ${this.color}, weight - ${this.weight}, height - ${this.height}, place of origin - ${this.placeOfOrigin}.`
	}
}

class Snake extends Animal {
	#isPoisonous; 

	constructor(type, color, weight, height, placeOfOrigin, isPoisonous) {
		super (type, color, weight, height, placeOfOrigin);
		this.#isPoisonous = isPoisonous;
	}

	checkPoisonous() {
		if (this.#isPoisonous) return 'Be careful! It is poisonous.';
		else return `Dont't worry. It's not poisonous.`;
	}
}

// 1. Создайте класс Bird с приватным полем isFlying, отнаследовавшись от Animal

class Bird extends Animal {
	#isFlying;

	constructor(type, color, weight, height, placeOfOrigin, isFlying) {
		super (type, color, weight, height, placeOfOrigin);
		this.#isFlying = isFlying;
	}

	checkFlying() {
		if (this.#isFlying) return 'It is able to fly.';
		else return `Unfortunately, it can't fly.`;
	}
}


// 2. Создайте класс CatLike с публичным полем isSafeToPet, отнаследовавшись от Animal

class CatLike extends Animal {
	constructor(type, color, weight, height, placeOfOrigin, isSafeToPet) {
		super (type, color, weight, height, placeOfOrigin);
		this.isSafeToPet = isSafeToPet;
	}
}


/*
3. Создайте класс Worker, реализующий следующий интерфейс (набор полей и методов):
    class Worker
      firstName
      lastName
      phone
      getFullName()
*/

class Worker {
	constructor(firstName, lastName, phone) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.phone = phone;
	}

	getFullName() {
		return `Worker's fullname: ${this.firstName} ${this.lastName}.`
	}
}


/*
4. Создайте класс Zoo, реализующий следующий интерфейс:
    class Zoo
      address
      title
      ticket price
      workers: []
      animals: [],

5. Добавьте геттеры и сеттеры к полям address, title, ticket price

6. Добавьте метод addWorker(worker), добавляющий работника в массив workers. 
    На вход метод должен принимать объект класса Worker. 
    Если объект не является инстансом класса Worker - выкинуть ошибку

7. Добавьте метод addAnimal(animal), добавляющий животное в массив animals.
    На вход метод должен принимать объект класса Animal, как и любого из его наследников. 
    Если объект не является инстансом класса Animal - выкинуть ошибку
    ТАКЖЕ, если объект является инстансом класса Snake - выкинуть ошибку с тексом "There will be no snakes, mister Potter!" 
		
8. Добавьте методы removeWorker() и removeAnimal() // Подумайте, как будем удалять, по какому полю будем выбирать:)
*/

class Zoo {
	workers = [];
	animals = [];

	constructor(address, title, ticketPrice) {
		this.address = address;
		this.title = title;
		this.ticketPrice = ticketPrice;
	}

	get address() {
		return this._address;
	}

	set address(newValue) {
		this._address = newValue;
	}

	get title() {
		return this._title;
	}

	set title(newValue) {
		this._title = newValue;
	}

	get ticketPrice() {
		return this._ticketPrice;
	}

	set ticketPrice(newValue) {
		this._ticketPrice = newValue;
	}

	addWorker(worker) {
		if (!(worker instanceof Worker)) throw new Error (`Function passes only instance of class Worker`);
		this.workers.push(worker);
	}

	addAnimal(animal) {
		if (!(animal instanceof Animal)) throw new Error (`Function passes only instance of class Animal`);
		if (animal instanceof Snake) throw new Error (`There will be no snakes, mister Potter!`);
		this.animals.push(animal);
	}

	removeWorker(workerSurname, workerPhoneNumber) {
		const index = this.workers.findIndex(workerObj => 
			workerObj.lastName === workerSurname && workerObj.phone == workerPhoneNumber);
		return this.workers.splice(index, 1);
	}

	removeAnimal(animalType, animalColor) {
		this.animals.find((animalObj, index) => {
			if (animalObj.type === animalType && animalObj.color === animalColor) {
				return this.animals.splice(index, 1);
			}
		})
	}
}

const britishCat = new Animal('cat', 'grey', '6 kg', '25 cm', 'Great Britain');
console.log(britishCat.getInfo());

const cockatooParrot = new Bird('parrot', 'white', '0.9 kg', '60 cm', 'Australia', true);
console.log(cockatooParrot.getInfo());

const macawParrot = new Bird('parrot', 'multicolor', '1.5 kg', '102 cm', 'South America,', true);
console.log(macawParrot.getInfo());

const cobra = new Snake('snake', 'black', '10 kg', '3.5 m', 'India', true);
console.log(cobra.getInfo());

const worker1 = new Worker('Sarah', 'Brown', 12345);
console.log(worker1.getFullName());

const worker2 = new Worker('Alex', 'Smith', 23456);
console.log(worker2.getFullName());

const worker3 = new Worker('Max', 'Miller', 34567);
console.log(worker3.getFullName());

const nyZoo = new Zoo('New York', 'Central Park Zoo', 50);
console.log(nyZoo);

nyZoo.addWorker(worker1);
nyZoo.addWorker(worker2);
nyZoo.addWorker(worker3);
console.log(nyZoo.workers);

nyZoo.addAnimal(britishCat);
nyZoo.addAnimal(cockatooParrot);
nyZoo.addAnimal(macawParrot);
// nyZoo.addAnimal(cobra);
console.log(nyZoo.animals);

nyZoo.removeWorker('Smith', 23456);
console.log(nyZoo.workers);

nyZoo.removeAnimal('parrot', 'white');
console.log(nyZoo.animals);
