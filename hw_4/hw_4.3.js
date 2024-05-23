/*
Task 3.
Преобразовать Task 2* таким образом, чтобы age принимался через prompt в привязанной вёрстке, а результат выводился в alert
*/

let age;
age = prompt('Enter your age.');

const age_2 = 18;
const age_3 = 60;

if (!Number.isInteger(+age) || age < 0 || Boolean(+age) === false) {
	alert('Please, enter your real age.');
} else if (age < age_2) {
	alert(`You don\'t have access cause your age is ${age}. It\'s less then ${age_2}.`);
} else if (age >= age_2 && age < age_3) {
	alert('Welcome!');
} else if (age >= age_3) {
	alert('Keep calm and look Culture channel.');
} else {
	alert('Technical work...');
}
