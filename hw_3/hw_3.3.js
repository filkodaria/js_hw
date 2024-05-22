/*
Task3**. Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются
*/

let n = 9;
// let n = 15;
// let n = 1.5;
// let n = 'a';

let countSum = n + Number(String(n) + n) + Number(String(n) + n + n);

if (Number.isInteger(n) && n >=1 && n <=9) {
	console.log(countSum);
} else {
	console.log('Try again. Enter number from 1 to 9.');
}
