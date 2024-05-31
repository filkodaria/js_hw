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
let bytes =  1450_623_540_000_000;
const divider = 1024;
let counter = 0;

while (counter < 4) {
	if (bytes / divider >= 1) {
		bytes /= divider;
		counter++;
	} else break;
}

switch (counter) {
	case 0: {
		console.log(`You don't need converting. The result is ${bytes} bytes.`);
		break;
	}
	case 1: {
		console.log(`The result is ${bytes.toFixed(1)} Kb.`);
		break;
	}
	case 2: {
		console.log(`The result is ${bytes.toFixed(1)} Mb.`);
		break;
	}
	case 3: {
		console.log(`The result is ${bytes.toFixed(1)} Gb.`);
		break;
	}
	case 4: {
		console.log(`The result is ${bytes.toFixed(1)} Tb.`);
		break;
	}
}


// subtask 2
const star = '*';
const space = ' '
const rowsNum = 5;

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
for (let i = 1; i < rowsNum; i++) {
	let rhomb = '';
	rhomb += space.repeat(rowsNum - i) + star.repeat(sumRhomb);
	sumRhomb += 2;
	console.log(rhomb);
}
for (let i = rowsNum; i >= 1; i--) {
	let rhomb = '';
	rhomb += space.repeat(rowsNum - i) + star.repeat(sumRhomb);
	sumRhomb -= 2;
	console.log(rhomb);
}


// subtask 3
const initialNumber = 100;
const firstDivider = 3;
const secondDivider = 5;

for (let i = 1; i <= initialNumber; i++) {
	if (!(i % firstDivider) && !(i % secondDivider)) {
		console.log(`The number ${i} is divisible by ${firstDivider} and by ${secondDivider}.`)
	} else if (!(i % firstDivider)) {
		console.log(`The number ${i} is divisible by ${firstDivider}.`)
	} else if (!(i % secondDivider)) {
		console.log(`The number ${i} is divisible by ${secondDivider}.`)
	} else {
		console.log(`The number ${i} isn't divisible by specified dividers.`)
	}
}


// subtask 4
const str = 'I am super engineer';
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
