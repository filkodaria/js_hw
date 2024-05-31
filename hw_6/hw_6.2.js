/*
Task 2.
1. У вас есть массив названий пицц вашего конкурента. Создайте функцию, которая будет принимать ваш набор названий пицц (массив) 
  и возвращать только те, которых нет у конкурента (тоже массив). Если все ваши пиццы есть у конкурента - вернуть null
  Пиццы конкурента:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  
2. Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра и выводит в консоль слово с наибольшим количеством букв. 
  Если таких слов несколько - выводит их все.

3. Напишите функцию, которая принимает на вход массив чисел, убирает из него дубликаты и возвращает массив с только уникальными значениями.

4. Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

// subtask 1
const competitorPizza = ['Pepperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'Hawaiian'];
const pizzaList = ['Neapolitan', 'Margherita', 'Pepperoni', 'Hawaiian', 'BBQ Chicken', '4 cheeses'];

function getPizzaComparison(myList) {
	const extraPizza = [];

	for (let i = 0; i < myList.length; i++) {
		if (!competitorPizza.includes(myList[i])) {
			extraPizza.push(myList[i]);
		}
	}

	if (extraPizza.length === 0) {
		return null;
	} else {
		return extraPizza;
	}
}
console.log(getPizzaComparison(pizzaList));        // ['Neapolitan', 'Margherita', 'BBQ Chicken'];


// subtask 2
const initialString = 'New challenges for new Javascript learners';

function getMaxLengthWord(string) {
	const array = string.split(' ');
	const lengthArray = [];

	for (let el of array) {
		lengthArray.push(el.length);
	}

	maxLength = Math.max(...lengthArray);
	let result = [];

	for (let el of array) {
		if (el.length === maxLength) {
			result.push(el);
		}
	}
	return `The longest word(s): ${result.join(', ')}.`;
}
console.log(getMaxLengthWord(initialString));


// subtask 3
let numbers = [2, 7, 20, 4, 2, 5, 10, 7, 4];

function removeDuplicates(array) {
	let result = [];

	for (let el of array) {
		if (array.indexOf(el) === array.lastIndexOf(el)) {
			result.push(el);
		}
	}
	return result;
}
console.log(removeDuplicates(numbers));


// subtask 4
const initalWord = 'Madam';

function isPalindrome(str) {
	const array = str.toLowerCase().split('');
	const arrayReversed = array.slice().reverse();

	for (let i = 0; i <= array.length / 2; i++) {
		if (array[i] !== arrayReversed[i]) {
			return `\'${str}\' is not a palindrome.`
		}
	}
	return `\'${str}\' is a palindrome.`
}
console.log(isPalindrome(initalWord));
