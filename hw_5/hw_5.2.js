/* 
Task 2.
1. Написать скрипт, переводящий количество байт в нужные единицы
  bytes => kB Mb Gb Tb
  16 565 846 bytes (16,6 Mb)

  1 Kb = 1024 byte
  1 Mb = 1024 Kb
  1 Gb = 1024 Mb
  1 Tb = 1024 Gb

  // Пример: ~ 1000
  4 548 = 4,5 Kb (Real 4,4 Kb)
  454 548 = 454,5 Kb
  1 454 548 = 1,5 Mb

  Результат должен быть округлен до 1 знака после запятой методом .toFixed(), про который надо почитать самим ;)

2. Сделать из "*" в консоли равнобедренный треугольник и ромб

3.  Вам нужно вывести в консоль числа от 1 до 100.
    Если число делится без остатка на 3, то выведете в консоль “число - делится на 3”.
    Если число делится на 5 без остатка, то то выведете в консоль “число - делится на 5”.
    Если число делится и на 3 и на 5 без остатка, то то выведете в консоль “число - делится и на 3 на 5”.
    Число 15 делится без остатка на 3 и на 5 -- пример сообщения в консоле.

4. Написать скрипт, который преобразует любое предложение в camelCase. Первое слово должно начинаться с буквы в нижнем регистре, 
  у остальных -  верхнем. Пример: I am super engineer => iAmSuperEngineer
*/

// subtask 1
let initialBytes = 1456235400000;
let divider = 1024;
let result;

if (initialBytes < 1024) {
	result = initialBytes;
	console.log(`You don't need converting. The result is ${result} bytes.`);

} else if (initialBytes >= 1024 && initialBytes < 1024 * 10**3) {
	result = (initialBytes / divider).toFixed(1);
	console.log(`The result is ${result} Kb.`);

} else if (initialBytes >= 1024 * 10**3 && initialBytes < 1024 * 10**6) {
	result = (initialBytes / divider**2).toFixed(1);
	console.log(`The result is ${result} Mb.`);

} else if (initialBytes >= 1024 * 10**6 && initialBytes < 1024 * 10**9) {
	result = (initialBytes / divider**3).toFixed(1);
	console.log(`The result is ${result} Gb.`);

} else if (initialBytes >= 1024 * 10**9) {
	result = (initialBytes / divider**4).toFixed(1);
	console.log(`The result is ${result} Tb.`);
} 


// subtask 2
let star = '*';
let space = ' '
let rowsNum = 5;

// triangle
let sumTriang = 1;
for (let i = 1; i <= rowsNum; i++) {
	let triangle = '';
	triangle += space.repeat(rowsNum - i) + star.repeat(sumTriang);
	sumTriang += 2;
	console.log(triangle)
}

// rhomb
let sumRhomb = 1;
for (let i = 1; i <= rowsNum; i++) {
	let rhomb = '';
	rhomb += space.repeat(rowsNum - i) + star.repeat(sumRhomb);
	sumRhomb += 2;
	console.log(rhomb);
}
for (let i = rowsNum; i > 1; i--) {
	let rhomb = '';
	sumRhomb -= 2;
	rhomb += space.repeat(rowsNum - i + 1) + star.repeat(sumRhomb - 2);
	console.log(rhomb);
}


// subtask 3
let initialNumber = 100;
let firstDivider = 3;
let secondDivider = 5;

for (let i = 1; i <= initialNumber; i++) {
	if (i % firstDivider === 0 && i % secondDivider === 0) {
		console.log(`The number ${i} is divisible by ${firstDivider} and by ${secondDivider}.`)
	} else if (i % firstDivider === 0) {
		console.log(`The number ${i} is divisible by ${firstDivider}.`)
	} else if (i % secondDivider === 0) {
		console.log(`The number ${i} is divisible by ${secondDivider}.`)
	}
}


// subtask 4
let str = 'I am super engineer';
let newStr = '';

for (let i = 0; i < str.length; i++) {
	if (i === 0) {
		newStr += str[i].toLowerCase();
	} else if (str[i] === ' ') {
		newStr += str[i + 1].toUpperCase();
		i++;
	} else {
		newStr += str[i].toLowerCase();
	}
}
console.log(newStr);
