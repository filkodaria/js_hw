/*
Task 3.
5*. Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры. 
  Если сумма получилась больше 9 - снова сложите цифры. И так пока, сумма не станет меньше либо равной 9. 
  После окончания сложений возвращает полученное число. Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1

6*. Написать функцию, которая принимает на вход строку с текстом, и заменяет каждую пару идентичных букв на одну следующую в алфавите, 
    и так пока в тексте не останется двух одинаковых букв стоящих рядом (через пробел и другой знак препинания можно)
    Пример: aabc => bbc => cc => d
*/

// subtask 5
function countSum(num) {
	const transformedNum = num.toString().split('');
	let count = 0;

	for (let el of transformedNum) {
		count += +el;
	}
	if (count < 10) {
		return count;
	} else return countSum(count);
}
console.log(countSum(292));


// subtask 6
function shrinkString(string) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	let result = string.toLowerCase().split('').sort();

	while (result[0] === result[1]) {
	const index = alphabet.indexOf(result[0]);
	const indexOfNextAlphabet = index + 1 - alphabet.length;
	result.splice(0, 2, alphabet.at(indexOfNextAlphabet));
	}

	return `Shrinked string is \'${result.toString()}\'.`
}
console.log(shrinkString('aabcde'));
