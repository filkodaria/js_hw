/*
Task 3.
1*. Создать программу, которая будет принимать на вход СЛОВО (создать переменную со словом), 
  и выводить в консоль количество гласных и согласных букв в этом слове. 
  Ответ должен выводиться шаблонным литералом вида word contains x vowels and y consonants

2**. Написать программу, которая видоизменяет принимаемое слово (переменная со словом) 
  шифром ЦЕЗАРЯ (посмотреть в википедии) со сдвигом на 1 в любую из сторон. 
  Направление шифрования задается переменной offset, которая может быть +1 и -1.
  Например let str = 'AbC'; let offset = -1, result = 'ZaB';
  Например let str = 'ZzZ'; let offset = 1, result = 'AaA';
*/


// subtask 1
const initialWord = 'Al-pha-bet';
const vowels = 'aeiouy';
const consonants = 'bcdfghjklmnpqrstvwxz';

let countVowels = 0;
let countConsonants = 0;

for (let i = 0; i < initialWord.length; i++) {
	if (vowels.includes(initialWord[i].toLowerCase())) {
		countVowels++;
	} else if (consonants.includes(initialWord[i].toLowerCase())) {
		countConsonants++;
	}
}
console.log(`The word \'${initialWord}\' contains ${countVowels} vowels and ${countConsonants} consonants.`);


// subtask 2
// ... in progress ... still working on it ...

const str = 'aAZzyZ';    // 'bBAazA' for +1 and 'zZYyxY' for -1
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const offset = 1;
let newString = '';

for (let i = 0; i < str.length; i++) {
	if (alphabet.includes(str[i].toLowerCase())) {
		let index = alphabet.indexOf(str[i].toLowerCase());
		let newIndex = index + offset - alphabet.length;

		if (str[i].toUpperCase() === str[i]) {
			newString += alphabet.at(newIndex).toUpperCase();
		} else {
			newString += alphabet.at(newIndex);
		}
	}
}
console.log(newString);
