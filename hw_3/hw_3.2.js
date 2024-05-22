/*
Task2*. Решить квадратные уравнения. Переменные называть по правилам.
Вывести в консоль ответы в виде "Ответ к уравнению 1: <корень>", "Ответ к уравнению 2: <корень> и <корень>"
1.  x2 - 6x + 9 = 0. - один корень
2.  x2 - 4x - 5 = 0. - два корня
*/

// quadraticEquation1 -> x2 - 6x + 9 = 0; 
let x1;
let x2;

let a1 = 1;
let b1 = -6;
let c1 = 9;

let discriminant1 = b1 ** 2 - 4 * a1 * c1;

if (discriminant1 < 0) {
	console.log('The Quadratic Equation doesn\'t have any real solutions');

} else if (discriminant1 == 0) {
	x1 = (-b1 + Math.sqrt(discriminant1)) / (2 * a1);
	console.log(`Solution for equation #1: x = ${x1}`);

} else if (discriminant1 > 0) {
	x1 = (-b1 + Math.sqrt(discriminant1)) / (2 * a1);
	x2 = (-b1 - Math.sqrt(discriminant1)) / (2 * a1);
	console.log(`Solutions for equation #1: x1 = ${x1}, x2 = ${x2}`);

} else {
	console.log('Something went wrong');
}


// quadraticEquation2 -> x2 - 4x - 5 = 0;

let a2 = 1;
let b2 = -4;
let c2 = -5;

let discriminant2 = b2 ** 2 - 4 * a2 * c2;

if (discriminant2 < 0) {
	console.log('The Quadratic Equation doesn\'t have any real solutions');

} else if (discriminant2 == 0) {
	x1 = (-b2 + Math.sqrt(discriminant2)) / (2 * a2);
	console.log(`Solution for equation #2: x = ${x1}`);

} else if (discriminant2 > 0) {
	x1 = (-b2 + Math.sqrt(discriminant2)) / (2 * a2);
	x2 = (-b2 - Math.sqrt(discriminant2)) / (2 * a2);
	console.log(`Solutions for equation #2: x1 = ${x1}, x2 = ${x2}`);
	
} else {
	console.log('Something went wrong');
}