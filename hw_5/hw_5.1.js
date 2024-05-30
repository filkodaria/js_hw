/*
Task 1.
1. Создайте цикл, который выведет в консоль цифры от 10 до 0
2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
  Пример в консоли:
  :)
  :):)
  :):):)
  :):):):)
  :):):):):)

  Для Оксаны и ее друзей: также реализовать циклом while
  Рекоммендация: попробуйте метод .repeat()
*/

// subtask 1
const counter = 10;
for (let i = counter; i >= 0; i--) {
	console.log(i);
}

// subtask 2
const rowAmount = 5;
const pattern = ':)';
let output = '';

for (let i = 0; i < rowAmount; i++) {
	output += pattern;
	console.log(output);
}

// subtask 2 with <repeat()> method
const rowNumber = 5;
const template = ':)';
let count = 1;

do {
	console.log(template.repeat(count));
	count++;
} while (count <= rowNumber);