/*
Task 1.
1. Создайте функцию getOnlyNumbers, принимающую на вход массив arrayOnAnyValues
2. Внутри функции создайте переменную result, в которую упадет результат работы метода .filter()
3. В метод filter передайте callback функцию, проверяющую является ли значение числом.
4. В переменной result должны остаться только те элементы массива arrayOnAnyValues, которые являются числами ('2' - не число)
5. Вернуть result из функции
6. Проверить с массивом const arr = [NaN, 1, true, 5, "hello", undefined, 15.5, {}, []];
*/

function getOnlyNumbers(arrayOnAnyValues) {
	if (!(Array.isArray(arrayOnAnyValues))) {
		throw new Error(`Something went wrong! Only array format for entered data is valid.`);
	} else {
		const result = arrayOnAnyValues.filter(el => typeof el === 'number' && !isNaN(el));
		return result; 
	}
}

const arr = [NaN, 1, true, 5, "hello", undefined, 15.5, {}, []];
console.log(getOnlyNumbers(arr));
console.log(getOnlyNumbers('arr'));

