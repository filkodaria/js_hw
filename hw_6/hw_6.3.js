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
	if (typeof num !== 'number') {
		return `Something went wrong! Only number type for entered data is valid.`
	} else {
		const transformedNum = num.toString().split('');
		let count = 0;

		for (const el of transformedNum) {
			count += +el;
		}
		if (count < 10) {
			return count;
		} else return countSum(count);
	}
}
console.log(countSum(292));
console.log(countSum(8997));
console.log(countSum('num'));


// subtask 6
function shrinkString(string) {
  if (typeof string !== 'string') {
		return `Something went wrong! Only string type for entered data is valid.`
	} else {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = string.split('');

    for (let i = 0; i < result.length; i++) {
      if (result[i] === result[i + 1]) {
        const replacedIndex = alphabet.indexOf(result[i]) + 1 - alphabet.length;
        result.splice(i, 2, alphabet.at(replacedIndex));

        return shrinkString(result.join(''));
      }
    }
    return `Shrinked string is "${result.join('')}".`
  }
}
console.log(shrinkString('aabcde'));          // f
console.log(shrinkString('edaabczz'));        // fa
console.log(shrinkString(11223));             // Error
