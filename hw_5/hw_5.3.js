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
let initialWord = 'Alphabet';
let vowels = 'aeiouy';
let countVowels = 0;

for (let i = 0; i < initialWord.length; i++) {
	if (vowels.includes(initialWord[i].toLowerCase())) {
		countVowels++;
	}
}
console.log(`The word ${initialWord} contains ${countVowels} vowels and ${initialWord.length - countVowels} consonants.`);

// subtask 2
