// Task 2.

/*
1. Создайте функцию delay, принимающую на вход коллбэк функцию и количество милисекунд.
    Функция должна исполнить колбэк строго через переданное количество миллисекунд
    Пример: delay(() => console.log('hello'), 2000) // Через 2 секунды в консоли появится слово hello
*/   

function delay(callback, timeout) {
	setTimeout(callback, timeout);
}

const printName = () => console.log('My name is Daria');
delay(printName, 2000);


/*
2. Создайте два промиса:
  - promise1 должен резолвать "After 3 seconds" через 3 секунды
  - promise2 должен резолвать "After 5 seconds" через 5 секунд
  Резолвните оба промиса параллельно используя Promise.All и Promise.allSettled двумя способами:
    1. Обработайте результат Promise.All и Promise.allSettled в .then блоке. Выведите в консоль резолвы обоих промисов по очереди
    2. Обработайте результат await Promise.All и Promise.allSettled в асинхронной функции в try..catch блоке. 
        Используйте деструктуризацию, чтобы создать переменные promise1Result и promise2Result с резолвами соответствующих промисов
        Вывести в консоль результат обоих промисов по очереди
*/

const promise1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('After 3 seconds');
	}, 3000);
});

const promise2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('After 5 seconds');
	}, 5000);
});

// variant_1
Promise.all( [promise1, promise2] )
.then(result => result.forEach(elem => console.log(elem)));

Promise.allSettled( [promise1, promise2] )
.then(result => result.forEach(elem => {
	console.log(elem.status);
	console.log(elem.value);
}));

// variant_2
async function promiseHandling1(prom1, prom2) {
	try {
		const [promise1Result, promise2Result] = await Promise.all( [prom1, prom2] );
		console.log(promise1Result);
		console.log(promise2Result);
	} catch (error) {
		console.log(`Something went wrong. Error: ${error}.`);
	} finally {
		console.log('Operation completed!');
	}
}
promiseHandling1(promise1, promise2);

async function promiseHandling2(prom1, prom2) {
	try {
		const [promise1Result, promise2Result] = await Promise.allSettled( [prom1, prom2] );
		console.log(promise1Result);
		console.log(promise2Result);
	} catch (error) {
		console.log(`Something went wrong. Error: ${error}.`);
	} finally {
		console.log('Operation completed!');
	}
}
promiseHandling2(promise1, promise2);


/*
3. Напишите функцию, которая возвращает Promise, который резолвается в сумму двух чисел. 
  Функция должна принимать два аргумента (a и b) и возвращать Promise, который резолвает в a+b. 
  Если какой-либо из аргументов не является числом, Promise должен быть rejected с сообщением об ошибке. 
  Протестируйте свою функцию, вызвав ее с допустимыми и недопустимыми аргументами, 
  и обработайте любые ошибки с помощью метода .catch(), а также в блоке try/catch
*/

async function sumNumbers(num1, num2) {
	return new Promise((resolve, reject) => {
		if (typeof num1 === 'number' && typeof num2 === 'number') {
			resolve(num1 + num2);
		} else {
			reject(`It passes only 'number' type`);
		}
	});
}

// variant_1
sumNumbers(3, 6)
	.then(response => console.log(response))
	.catch(error => console.log(error));

sumNumbers('3', 6)
	.then(response => console.log(response))
	.catch(error => console.log(error));

// variant_2
async function promiseHandling(promise) {
	try {
		const response = await promise;
		console.log(response);
	} catch (error) {
		console.log(`Something went wrong. Error: ${error}.`);
	}
}
promiseHandling(sumNumbers(2, 5));
promiseHandling(sumNumbers(2, '5'));


/*
4. С помощью fetch отправьте GET запрос на адрес "https://jsonplaceholder.typicode.com/todos". 
    Преобразуйте респонс в объект (.json()), выведите в консоль все объекты из респонса, где userId === 1. Решить с помощью try/cath и then (обоими способами)
*/

// variant_1
const testUrl1 = 'https://jsonplaceholder.typicode.com/todos';

async function getObjectsById(url, id) {
	try {
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error(`Response status code: ${response.status}`);
		} 
		const data = await response.json();
		console.log(data.filter(obj => obj.userId === id));

	} catch (error) {
		console.log(error);
	}
}
getObjectsById(testUrl1, 1);


// variant_2
const testUrl2 = 'https://jsonplaceholder.typicode.com/todos';

fetch(testUrl2)
	.then(response => response.json())
	.then(data => console.log(data.filter(obj => obj.userId === 1)))
	.catch(error => console.log(error));
