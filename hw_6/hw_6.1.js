/*
Task 1.
1. Создайте функцию getEmployeeInfo()
2. В функции создайте массив имен сотрудников 5шт (Имена придумать самим)
3. В функции создайте массив зарплат сотрудников 5 шт(цифры придумать самим)
4. Функция должна принимать 1 аргумент - имя сотрудника
5. Функция должна возвращать новый массив, где первый элемент - имя сотрудника, второй - его зарплата
6. Для поиска ответа функции нужно найти индекс сотрудника в массиве имен. Зарплату взять с ТЕМ ЖЕ индексом что и имя
7. Для возврата из функции создайте массив, методом .push поместите в него имя и зарплату, и через return верните созданный массив
8. Если такое имя сотрудника в массиве не найдется - вернуть null
*/

function getEmployeeInfo(name) {
	const employeeNames = ['Hanna', 'Alex', 'Bill', 'Jane', 'Bob'];
	const employeeSalary = [2000, 3000, 7000, 1000, 3000];
	const employeeInfo = [];

	for (let i = 0; i <= employeeNames.length; i++) {
		if (employeeNames[i] === name) {
			employeeInfo.push(employeeNames[i], employeeSalary[i]);
			return employeeInfo;
		}
	}
	return null;
}
console.log(getEmployeeInfo('Bill'));
console.log(getEmployeeInfo('Jane'));
console.log(getEmployeeInfo('Max'));