import { IAddress, IItEmployee, OCCUPATION } from './hw_11.1'

// Task 2.

/*
1. Создайте интерфейс IEmployee с полями name, surname, salary, address(типы для этих полей такие же как в ItEmployee из таск 1)
  Создайте функцию getEmployeeInfo(employee), выводящую в консоль всю информацию про employee (формат текста придумать самим)
  Создайте type guard isItEmployee, принимающий юнион типов IEmployee и ItEmployee. Используйте его в функции getEmployeeInfo. 
  Если на входе itEmployee - выводите в консоль все поля айтишника (а не только те, что в employee)
  Функция должна принимать union type между IEmployee и ItEmployee, и через тайпгвард определять что за объект и как работать с ним 
*/

interface IEmployee {
	name: string;
	surname: string;
	readonly salary: number;
	address?: IAddress;
}

function isItEmployee(obj: IEmployee | IItEmployee): obj is IItEmployee {
	return 'occupation' in obj;
}

function getEmployeeInfo(employee: IEmployee | IItEmployee): string {
	if (isItEmployee(employee)) {
		return `${employee.name} ${employee.surname} is IT employee. Personal info: \n  ${JSON.stringify(employee)}.`
	} else {
		return `${employee.name} ${employee.surname} isn't IT employee. Personal info: \n  ${JSON.stringify(employee)}.`
	}
}

const employee: IEmployee = {
	name: 'Max',
	surname: 'Miller',
	salary: 1000,
	address: {
		country: 'Italy',
		street: 'Piccoly',
		building: 7,
		appartment: 9,
		}
}

const itEmployee: IItEmployee = {
	name: 'Alex',
	surname: 'Smith',
	salary: 3000,
	grade: 'senior',
	occupation: OCCUPATION.DEVELOPER,
	projectNames: [],
}

console.log(getEmployeeInfo(employee));
console.log(getEmployeeInfo(itEmployee));


/*
2. Создайте функцию, которая подсчитает, сколько в объекте значений каждого типа. 
  Принимает на вход объект или массив таких же объектов, у которого ключ всегда string, а значение - string, number, boolean. 
  Возвращает же - объект с ключами string, number, boolean и количеством таких значений в объекте или в сумме у всех объектов в массиве. 
*/

type TInitialObject = { [key: string]: string | number | boolean } | TInitialObject[];

interface ITypesCounter {
	string: number;
	number: number;
	boolean: number;
}

function countDataTypes(initialObj: TInitialObject): ITypesCounter {
	let countedTypesInObj: ITypesCounter = {
		string: 0,
		number: 0,
		boolean: 0,
	};

	for (const value of Object.values(initialObj)) {
		if (typeof value === 'string') {
			countedTypesInObj.string++;
		} else if (typeof value === 'number') {
			countedTypesInObj.number++;
		} else {
			countedTypesInObj.boolean++;
		}
	}

	return countedTypesInObj
}

function getCountedDataTypes(initialData: TInitialObject): ITypesCounter {
	if (Array.isArray(initialData)) {
		let resultCounter: ITypesCounter = {
			string: 0,
			number: 0,
			boolean: 0,
		};

		initialData.forEach(obj => {
			let dataTypeCounterInObj = countDataTypes(obj);

			resultCounter.string += dataTypeCounterInObj.string;
			resultCounter.number += dataTypeCounterInObj.number;
			resultCounter.boolean += dataTypeCounterInObj.boolean;
		})

		return resultCounter;
	} else {
		return countDataTypes(initialData);
	}
}

const objOfDifferentTypes: TInitialObject = {
	item1: 'check',
	item2: 123,
	item3: 'true',
	item4: 2.25,
	item5: false,
	item6: 'try again',
}

const objOfDifferentTypes2: TInitialObject = [
	{
	item1: 'check',
	item2: false,
	},
	{
	item1: 987,
	item2: false,
	item3: 'try again',
	item4: true,
	},
	{
	item1: 123,
	item2: 'true',
	item3: false,
	item4: 'try again',
	}
]

console.log(getCountedDataTypes(objOfDifferentTypes));
console.log(getCountedDataTypes(objOfDifferentTypes2));


/*
3. Реализуйте функцию filter(), которая принимает на вход массив чисел и предикат (коллбэк), 
    который будет использоваться для проверки каждого числа на соответствие требованиям. 
    Помимо самой функции следует реализовать алиасы типов для функций и аттрибутов. 
    Пример функции:
    const numbers = [1, -5, 2, 3, 4, 133];
    filter(numbers, (n) => n > 3); // [4, 133]
    filter(numbers, (n) => n % 2 == 0); // [2, 4]
    Параметры функции: Массив чисел и Анонимная функция, принимающая на вход число и возвращающая логическое значение.
*/

type TCallBack = (num: number) => boolean;

function filter(array: number[], callback: TCallBack): number[] {
	return array.filter(callback);
}

const numArr: number[] = [1, -5, 2, 3, 4, 133];

console.log(filter(numArr, (n) => n > 3));            // [4, 133]
console.log(filter(numArr, (n) => n % 2 == 0));       // [2, 4]
