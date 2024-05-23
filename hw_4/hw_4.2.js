/*
Task 2.
1.
Реализовать Task 1 через switch.

2. 
Преобразовать написанный код в task 1 так, чтобы сначала проверялся тип данных. И если он не number - кидалась ошибка в консоль. Проверить работу кода на следующих данных 17, 18, 61, "2", "aaa"

3.
Преобразовать Task 2 - 1 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, преобразовываясь в number.
*/

// subtask 1
const age = '2';
const age_2 = 18;
const age_3 = 60;

switch (true) {
	case age < age_2: {
		console.log(`You don\'t have access cause your age is ${age}. It\'s less then ${age_2}.`);
		break;
	}
	case age >= age_2 && age < age_3: {
		console.log('Welcome!');
		break;
	}
	case age >= age_3: {
		console.log('Keep calm and look Culture channel.');
		break;
	}
	default: {
		console.log('Technical work...1');
	}
}

// subtask 2
if (typeof age != 'number' || isNaN(age)) {
	console.log('Technical work...2');
} else if (age < age_2) {
	console.log(`You don\'t have access cause your age is ${age}. It\'s less then ${age_2}.`);
} else if (age >= age_2 && age < age_3) {
	console.log('Welcome!');
} else if (age >= age_3) {
	console.log('Keep calm and look Culture channel.');
}

// subtask 3
if (Boolean(+age) === false) {
	console.log('Technical work...3');
} else if (+age < age_2) {
	console.log(`You don\'t have access cause your age is ${age}. It\'s less then ${age_2}.`);
} else if (+age >= age_2 && age < age_3) {
	console.log('Welcome!');
} else if (+age >= age_3) {
	console.log('Keep calm and look Culture channel.');
}
