// Task 2.

// subtask 1
/*
1. На вход функции подаётся предложение, например “I am the best AQA ever!” Преобразуйте строку таким образом, чтобы вместо каждой буквы была цифра, показывающая сколько раз эта буква встречается в предложении. 
Пробелы и знаки препинания оставляем без изменения. Регистр не должен играть роли.
*/
const str = 'I am the best AQA ever!';

function transformToAppearanceTimes(string) {
	if (typeof string !== 'string') {
		throw new Error('Something went wrong! Only string type for entered data is valid.');
	} else {
		const arr = str.toLowerCase().split('');

		const transformedArray = arr.map((el, ind, arr) => {
			if (el.charCodeAt(0) >= 97 && el.charCodeAt(0) <= 122) {
				let counter = 0;

				for (let i = 0; i < arr.length; i++) {
					if (arr[ind] === arr[i]) {
						counter++;
					}
				}
				return counter;
			} else return el;
		})	

		return transformedArray.join('');
	}
}
console.log(transformToAppearanceTimes(str));


// sabtask 2
/*
2. У вас есть массив с ценами товаров в чеке. В консоль нужно вывести сумму всех цен и среднюю цену товара.
  Итого: 8495 $, средняя цена товара 700 $ - пример сообщения в консоле.  
  const prices = [64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421, 9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123];
*/

const prices = [64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421, 9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123];

function getPriceInfo(priceTotal, priceAverage) {
	return `Total price of all items is ${priceTotal}$. Average price of item is ${priceAverage}$.`;
}

function getTotalPrice(arr) {
	const sum = arr.reduce((total, value) => total + value, 0);
	return sum;
}

function getAveragePrice(arr) {
	const average = parseInt(getTotalPrice(arr) / arr.length);
	return average;
}

console.log(getPriceInfo(getTotalPrice(prices), getAveragePrice(prices)));


// sabtask 3
/*
3. Напишите функцию, которая принимает на вход массив слов и возвращает отсортированный массив по следующему критерию: количество гласных букв. 
Массив должен быть отсортирован по возврастанию количества гласных букв в слове.
*/

const words = ['learn', 'Javascript', 'no', 'sleep', 'night'];

function sortArrayByVowels(arr) {
	const sortedArray = arr.toSorted((a, b) => a[0] - b[0]);
	return sortedArray.map(el => el[1]);
}

function findVowelsAmount(arr) {
	const vowels = 'aeiouy';
	
	const amountVowelsArray = arr.map(el => {
		let counterForVowels = 0;

		for (let i = 0; i < el.length; i++) {
			if (vowels.includes(el[i].toLowerCase())) {
				counterForVowels++;
			}
		}
		return [counterForVowels, el];
	});

	return amountVowelsArray;
}

console.log(sortArrayByVowels(findVowelsAmount(words)));


// sabtask 4
/*
4. У вас есть массив со скобками, предположим [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’], количество элементов и последовательность может быть разной.
  Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая).
  Усложнение: в массиве могут быть вложены еще массивы на разной глубине. (ПОПРОБУЙТЕ МЕТОД .flat(), изучите как он работает с разными глубинами вложенности)
  Вернуть нужно всё также есть ли у каждой скобочки соответствующая пара. 
  Пример:
  const arr = [[['(']], ')', '(', ')', ')', ['(', ['('], [')']]]
*/

const brackets = [ '(', ')', '(', '(', '(', ')', ')', ')'];
const brackets2 = [ '(', '(', '(', '(', ')', ')', ')'];

function checkBracketsPair(arr) {
	let newString = arr.join(''); 

  while (newString.includes('()')) {
    newString = newString.replace('()', '');
  }

	if (!newString.length) {
		return 'Each bracket has its pair.' 
	} else {
		return 'Not all brackets have their pairs.'
	}
}

console.log(checkBracketsPair(brackets));
console.log(checkBracketsPair(brackets2));

