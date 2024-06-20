/* 
Task 2
Перед вами структура компании, и ниже представлены задания, относящиеся к ней. 
В заданиях по максимуму использовать методы массивов, создавать функции-помощники, выполняющие дополнительные действия,
чтобы ваши функции выполняли строго одну работу. ЭТО ОЧЕНЬ ВАЖНО!
*/ 

const enterprises = [
  {
    id: 1,
    name: "Предприятие 1",
    departments: [
      {
        id: 2,
        name: "Отдел тестирования",
        employees_count: 10,
      },
      {
        id: 3,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 4,
        name: "Администрация",
        employees_count: 15,
      },
    ]
  },
  {
    id: 5,
    name: "Предприятие 2",
    departments: [
      {
        id: 6,
        name: "Отдел разработки",
        employees_count: 50,
      },
      {
        id: 7,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 8,
        name: "Отдел охраны труда",
        employees_count: 5,
      },
    ]
  },
  {
    id: 9,
    name: "Предприятие 3",
    departments: [
      {
        id: 10,
        name: "Отдел аналитики",
        employees_count: 0,
      },
    ]
  }
]

/*
1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.
Пример:
Предприятие 1 (45 сотрудников)
- Отдел тестирования (10 сотрудников)
- Отдел маркетинга (20 сотрудников)
- Администрация (15 человек)
Предприятие 2 (75 сотрудников)
- Отдел разработки (50 сотрудников)
- Отдел маркетинга (20 сотрудников)
- Отдел охраны труда (5 сотрудников)
Предприятие 3 (нет сотрудников)
- Отдел аналитики (нет сотрудников)
*/ 
console.log('--------------- subtask_1 ---------------');

function countCompanyEmployees (depart) {
	return depart.reduce((total, dep) => total + dep.employees_count, 0);
} 


function addCorrectWordEnding (amount) {
	if (amount === 1) {
		return 'сотрудник';
	} else if (amount >= 2 && amount <= 4) {
		return 'сотрудника';
	} else return 'сотрудников';
}


const getEnterpriseInfo = companyArr => {
	companyArr.forEach(comp => {
		console.log(`${comp.name} (${countCompanyEmployees(comp.departments)} ${addCorrectWordEnding(countCompanyEmployees(comp.departments))})`);
		comp.departments.forEach(depart => {
			console.log(`- ${depart.name} (${depart.employees_count} ${addCorrectWordEnding(depart.employees_count)})`);
		})
	});
}

getEnterpriseInfo(enterprises);


/*
2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).
Пример:
getEnterpriseName(4) // Предприятие 1
getEnterpriseName("Отдел маркетинга") // Предприятие 2
*/
console.log('--------------- subtask_2 ---------------');

function getCompanyNameByDepartId(identifier) {
	let compName;
	enterprises.find(comp => 
		comp.departments.find(depart => {
			if (depart.id === identifier || depart.name === identifier) {
				compName = comp.name;
				return compName;
			}
		})
	)
	if (!compName) {
		throw new Error(`Department with identifier '${identifier}' was not found.`)
	} else return compName;
}

console.log(getCompanyNameByDepartId('Отдел маркетинга'));
// console.log(getCompanyNameByDepartId('Отдел электроники'));
console.log(getCompanyNameByDepartId(7));
// console.log(getCompanyNameByDepartId(9));


/*
3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия
Пример:
addEnterprise("Название нового предприятия")
*/
console.log('--------------- subtask_3 ---------------');

function getMaxId(companyArr) {
	const idArr = [];
	companyArr.forEach(comp => {
		idArr.push(comp.id);
		comp.departments.forEach(depart => idArr.push(depart.id));
	});
	const maxId = Math.max(...idArr);
	return maxId + 1;
}


const addNewCompany = companyName => {
	const newComp = {
		id: getMaxId(enterprises),
		name: companyName,
		departments: [],
	}
	enterprises.push(newComp);
}

addNewCompany('Название нового предприятия');
console.log(enterprises);


/*
4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.
Пример:
addDepartment(1, "Название нового отдела")
*/
console.log('--------------- subtask_4 ---------------');

function getCompanyById(compId) {
	return enterprises.find(comp => comp.id === compId);
}


const addNewDepartment = (compId, departName) => {
	const newDepart = {
		id: getMaxId(enterprises),
		name: departName,
		employees_count: 0,
	}
	getCompanyById(compId).departments.push(newDepart);
}

addNewDepartment(11, 'Название нового отдела');
addNewDepartment(11, 'Название super отдела');
console.log(enterprises[3]);


/*
5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.
Пример:
editEnterprise(1, "Новое название предприятия")
*/
console.log('--------------- subtask_5 ---------------');

const editCompanyName = (compId, newCompName) => getCompanyById(compId).name = newCompName;

editCompanyName(11, 'Предприятие 4');
console.log(enterprises[3]);


/*
6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.
Пример:
editDepartment(7, "Новое название отдела")
*/
console.log('--------------- subtask_6 ---------------');

function getDepartById(departId) {
	let departObj;
	enterprises.find(comp => 
		comp.departments.find(depart => {
			if (depart.id === departId) {
				departObj = depart;
				return departObj;
			}
		})
	)
	if (!departObj) {
		throw new Error(`Department with id '${departId}' was not found.`)
	} else return departObj;
}


const editDepartName = (departId, newDepartName) => {
	getDepartById(departId).name = newDepartName;
}

editDepartName(12, 'Финансовый отдел');
editDepartName(13, 'Коммерческий отдел');
console.log(enterprises[3]);


/*
7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.
Пример:
deleteEnterprise(1)
*/
console.log('--------------- subtask_7 ---------------');

const deleteCompanyItem = compId => {
	const compIndex = enterprises.findIndex(comp => comp.id === compId);
	if (compIndex !== -1) {
		enterprises.splice(compIndex, 1);
	} else throw new Error(`Company with id '${compId}' was not found.`)
}

deleteCompanyItem(5);
console.log(enterprises);


/*
8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.
Пример:
deleteDepartment(3)
*/
console.log('--------------- subtask_8 ---------------');

const deleteDepartItem = departId => {
	let departIndex;
	enterprises.find(comp => {
		departIndex = comp.departments.findIndex(depart => depart.id === departId && depart.employees_count == 0);
		if (departIndex !== -1) {
			return comp.departments.splice(departIndex, 1);
		}
	})
	if (departIndex === -1) throw new Error(`Department with id '${departId}' was not found or it's not empty.`)
}

deleteDepartItem(12);
console.log(enterprises[2]);


/*
9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).
Пример:
moveEmployees(2, 3)
*/
console.log('--------------- subtask_9 ---------------');

const moveEmployees = (startDepartId, endDepartId) => {
	if (getCompanyNameByDepartId(startDepartId) === getCompanyNameByDepartId(endDepartId)) {
		getDepartById(endDepartId).employees_count += getDepartById(startDepartId).employees_count;
		getDepartById(startDepartId).employees_count = 0;
	} else throw new Error(`Please, use this option within the one company.`)
}

moveEmployees(2, 4);
console.log(enterprises[0])
