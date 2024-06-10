// Task 3.

// subtask 5
/*
5*. Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
  и возвращает пропущенное число. Массив не отсортирован и может содержать дубликаты. 
  Решите эту задачу, используя эффективные методы массива.
*/

const numbers = [1, 4, 7, 9, 3, 4, 9, 10, 11, 2, 6, 6, 8, 12]        // 5 is excluded

function findMissingNumber(arr) {
	const arrUniqueSorted = Array.from(new Set(arr)).sort((a, b) => a - b);

	const uniqueNum = arrUniqueSorted
	.filter((el, ind, arr) => !arr.includes(el + 1) && el !== arr.at(-1))
	.map(el => el + 1);
	
	return `Excluded number is ${uniqueNum}.`
}

console.log(findMissingNumber(numbers));


// subtask 6
/*
6**. В файле вы найдете массив карточек юзеров. Задача - создать функцию, которая уберет из массива дубликаты. 
  Вернуть массив с сугубо уникальными карточками. Реализовать методом SET. 
  Разобраться, как считать данные из файла КОДОМ, а не копировать ручками.
*/