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
const competitorPizza = ['Pepperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawaiian'];
const pizzaList = ['Neapolitan', 'Margherita', 'Pepperoni', 'Hawaiian', 'BBQ Chicken', '4 cheeses'];
const pizzaList2 = ['Pepperoni', 'Diablo', 'Hawaiian'];


function getPizzaComparison(myList) {
	if (!(Array.isArray(myList))) {
		return `Something went wrong! Only array type for entered data is valid.`
	} else {
		const extraPizza = [];
		const competitor = competitorPizza.map(a => a.toLowerCase());
		const myPizzaList = myList.map(a => a.toLowerCase());

		for (let i = 0; i < myPizzaList.length; i++) {
			if (!competitor.includes(myPizzaList[i])) {
				extraPizza.push(myList[i]);
			}
		}
		return extraPizza.length ? extraPizza : null;
	}
}
console.log(getPizzaComparison(pizzaList));        // ['Neapolitan', 'Margherita', 'BBQ Chicken'];
console.log(getPizzaComparison(pizzaList2));       // null
console.log(getPizzaComparison('pizzaList'));      // Error message


// subtask 2
const initialString = 'New challenges for new Javascript learners';

function getMaxLengthWord(string) {
	if (!(typeof string === 'string')) {
		return `Something went wrong! Only string type for entered data is valid.`
	} else {
		const array = string.split(' ');
    const result = [];

		for (const el of array) {
			if (!result.length) {
        result.push(el);
      } else {
        if (el.length > result[0].length) {
          result.length = 0;
          result[0] = el;
        } else if (el.length === result[0].length) {
          result.push(el);
        }
      }
		}
		return `The longest word(s): ${result.join(', ')}.`;
	}
}
console.log(getMaxLengthWord(initialString));
console.log(getMaxLengthWord(['new', 'challenges', 'learners']));


// subtask 3
let numbers = [2, 7, 20, 4, 2, 5, 10, 7, 4];

function removeDuplicates(array) {
	if (!(Array.isArray(array))) {
		return `Something went wrong! Only array type for entered data is valid.`
	} else {
		for (const el of array) {
			if (array.indexOf(el) !== array.lastIndexOf(el)) {
				array.splice(array.lastIndexOf(el), 1);
			}
		}
		return array;
	}
}
console.log(removeDuplicates(numbers));
console.log(removeDuplicates(1, 3, 1));


// subtask 4
const initialWord = 'Madam';

function isPalindrome(str) {
	if (!(typeof str === 'string')) {
		return `Something went wrong! Only string type for entered data is valid.`
	} else {
		const array = str.toLowerCase().split('');
		const arrayReversed = array.slice().reverse();

		for (let i = 0; i <= array.length / 2; i++) {
			if (array[i] !== arrayReversed[i]) {
				return `"${str}" is not a palindrome.`
			}
		}
		return `"${str}" is a palindrome.`
	}
}
console.log(isPalindrome(initialWord));
console.log(isPalindrome(1001));
