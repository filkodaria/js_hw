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

const getEnterpriseInfo = companyArr => {
	companyArr.forEach(comp => {
		console.log(`${comp.name} (${countCompanyEmployees(comp.departments)} сотрудников)`);
		comp.departments.forEach(depart => {
			console.log(`- ${depart.name} (${depart.employees_count} сотрудников)`);
		})
	});
}

const countCompanyEmployees = depart => depart.reduce((total, dep) => 
	total + dep.employees_count, 0);

getEnterpriseInfo(enterprises);


/*
2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).
Пример:
getEnterpriseName(4) // Предприятие 1
getEnterpriseName("Отдел маркетинга") // Предприятие 2
*/

function getCompanyNameByDepartId(identifier) {
	let compName; 
	enterprises.find(comp => 
		comp.departments.find(depart => 
			depart.id === identifier ? compName = comp.name : false))
	return compName;
}


function getCompanyNameByDepartName(identifier) {
	let compName; 
	enterprises.find(comp => 
		comp.departments.find(depart =>
			depart.name === identifier ? compName = comp.name : false))
	return compName;
}


const getCompanyName = identifier => {
	if (getCompanyNameByDepartId(identifier)) {
		return `This identifier is valid for ${getCompanyNameByDepartId(identifier)}.`
	} else if (getCompanyNameByDepartName(identifier)) {
		return `This identifier is valid for ${getCompanyNameByDepartName(identifier)}.`
	} else return 'Enter valid data.'
}

console.log(getCompanyName('Отдел маркетинга'));
console.log(getCompanyName('Отдел электроники'));
console.log(getCompanyName(7));
console.log(getCompanyName(9));


/*
3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия
Пример:
addEnterprise("Название нового предприятия")
*/

function getMaxId(companyArr) {
	const idArr = [];
	companyArr.forEach(comp => {
		idArr.push(comp.id);
		comp.departments.forEach(depart => idArr.push(depart.id));
	});
	const maxId = Math.max(...idArr);
	return maxId;
}


const addNewCompany = companyName => {
	const newComp = {
		id: getMaxId(enterprises) + 1,
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

function getCompanyByCompanyId(compId) {
	let compObj; 
	enterprises.find(comp => comp.id === compId ? compObj = comp : false);
	return compObj;
}


const addNewDepartment = (compId, departName) => {
	const newDepart = {
		id: getMaxId(enterprises) + 1,
		name: departName,
		employees_count: 0,
	}
	getCompanyByCompanyId(compId).departments.push(newDepart);
}

addNewDepartment(11, 'Название нового отдела');
addNewDepartment(11, 'Название super отдела');
console.log(enterprises[3]);


/*
5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.
Пример:
editEnterprise(1, "Новое название предприятия")
*/

const editCompanyName = (compId, newCompName) => {
	getCompanyByCompanyId(compId).name = newCompName;
}

editCompanyName(11, 'Предприятие 4');
console.log(enterprises[3]);


/*
6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.
Пример:
editDepartment(7, "Новое название отдела")
*/

function getDepartByDepartId(departId) {
	let departObj; 
	enterprises.find(comp => comp.departments.find(depart => depart.id === departId ? departObj = depart : false));
	return departObj;
}


const editDepartName = (departId, newDepartName) => {
	getDepartByDepartId(departId).name = newDepartName;
}

editDepartName(12, 'Финансовый отдел');
editDepartName(13, 'Коммерческий отдел');
console.log(enterprises[3]);


/*
7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.
Пример:
deleteEnterprise(1)
*/

const deleteCompanyItem = compId => {
	const compIndex = enterprises.findIndex(comp => comp.id === compId);
	compIndex != -1 ? enterprises.splice(compIndex, 1) : false;
}

deleteCompanyItem(5);
console.log(enterprises);


/*
8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.
Пример:
deleteDepartment(3)
*/

const deleteDepartItem = departId => {
	enterprises.forEach(comp => {
		const departIndex = comp.departments.findIndex(depart => depart.id === departId && depart.employees_count == 0);
		departIndex != -1 ? comp.departments.splice(departIndex, 1) : false;
	})
}

deleteDepartItem(12);
console.log(enterprises[2]);


/*
9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).
Пример:
moveEmployees(2, 3)
*/

const moveEmployees = (startDepartId, endDepartId) => {
	getDepartByDepartId(endDepartId).employees_count += getDepartByDepartId(startDepartId).employees_count;
	getDepartByDepartId(startDepartId).employees_count -= getDepartByDepartId(startDepartId).employees_count;
}

moveEmployees(2, 4);
console.log(enterprises[0])
