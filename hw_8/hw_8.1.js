/*
Task 1.
Имеется массив объектов (ниже). Ваше задание:
1. Используя Object.keys и метод forEach вывести в консоль ключи каждого объекта
2. Используя Object.values и метод forEach вывести в консоль значения каждого объекта
3. Перебрать форычем массив. На каждой итерации вывести пары ключ-значнение в виде `key = ${ket}, value = ${value}`.
   Перебирать каждый объект циклом for..of вида for(const [key, value] of Object.entries)
4. Перебрать форычем массив. На каждой итерации вывести пары ключ-значнение в виде `key = ${key}, value = ${value}`.
   Перебирать каждый объект циклом for..in
5. Создайте объект qa с полями name, age, salary и методом getInfo, который будет возвращать строку вида: 
   `Hello, my name is ${name}, i'm ${age} and my salary is ${salary}`. Значения в строке должны ссылаться на контекст ЭТОГО ОБЪЕКТА, без подмен.
*/ 

const characters = [
	{ 'name': 'Barney', 'age': 36 },
	{ 'name': 'Fred', 'age': 40 },
	{ 'name': 'Jack', 'age': 50 },
];

characters.forEach((elem, ind) => console.log(Object.keys(elem)));

characters.forEach(elem => console.log(Object.values(elem)));

characters.forEach(elem => { 
	for (const [key, value] of Object.entries(elem)) {
		console.log(`Using loop <for of>: key = ${key}; value = ${value}`);
	}
});

characters.forEach(elem => { 
	for (const key in elem) {
		console.log(`Using loop <for in>: key = ${key}; value = ${elem[key]}`);
	}
});

const qa = {
	name: 'Max',
	age: 27,
	salary: 3000,

	getInfo() {
		return `Hello, my name is ${this.name}. I'm ${this.age} and my salary is $${this.salary}.`;
	},
};
console.log(qa.getInfo());
