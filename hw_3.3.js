/*
Task3**. Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются
*/

let n = 9;
// let n = 15;
// let n = 1.5;
// let n = 'a';

let countSum = n + Number(String(n) + String(n)) + Number(String(n) + String(n) + String(n));

if (Number.isInteger(n) && n >=1 && n <=9) {
	console.log(countSum);
} else {
	console.log('Try again. Use number from 1 to 9.');
}