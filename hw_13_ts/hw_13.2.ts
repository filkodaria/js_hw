// Task 2.
/*
Создайте дженерик класс Storage<T>, где T должен быть ограничен объектом, имеющим КАК МИНИМУМ {id: number}.
Задача класса - хранить объекты типа Т в приватном массиве
Реализуйте в классе следующие методы:
  - constructor должен принимать необзятельный массив объектов соответствующего типа. 
    Если массив пришел - объекты запушить в хранилище.
  - add, принимающий либо объект типа Т, либо объект типа Т без id. Метод должен быть реализовать с помощью ПЕРЕГРУЗКИ.
    Если на вход подан объект без айди - айди надо сгенерировать, затем запушить обьект в хранилище
    Если на вход подан объект с айди - запушить его в хранилище
    Для типизации используйте Utility Types
  - update, принимающий объект с айди и любым набором остальных ключей из типа Т. 
  - remove, принимающий на вход id и удаляющий объект из массива
  - getById(id), возвращающий объект по айди если найден
  - getAll(), возвращает все объекты в хранилище
*/

class StorageData<T extends { id: number }> {
	private storage: T[] = [];

	constructor(data?: T[]) {
		if (data) {
			this.storage.push(...data);
		}
	}

	private getNewId(): number {
		let newId = 0;
		if (this.storage.length === 0) {
			newId = 1;
			return newId;
		} else {
			const idArr: number[] = this.storage.map(obj => obj.id);
			newId = Math.max(...idArr) + 1;
			return newId;
		}
	}

	addData(dataObj: T): void;
	addData(dataObj: Omit<T, 'id'>): void;

	addData(dataObj: T | Omit<T, 'id'>): void {
		if (!('id' in dataObj)) {
			const id = this.getNewId();
			const newObj = { id, ...dataObj };
			this.storage.push(newObj as T);
		} else {
			this.storage.push(dataObj);
		}
	}

	updateData(dataObj: Pick<T, 'id'> & Partial<T>): void {
		const objIndex = this.storage.findIndex(obj => obj.id === dataObj.id);

		if (objIndex !== -1) {
			const currentObject = this.storage[objIndex];
			this.storage[objIndex] = {...currentObject, ...dataObj};
		}
	}

	removeData(id: number): void {
		const objIndex = this.storage.findIndex(obj => obj.id === id);

		if (objIndex !== -1) {
			this.storage.splice(objIndex, 1);
		}
	}
	
	getById(id: number): T {
		const objById = this.storage.find(obj => obj.id === id);

		if (objById !== undefined){
			return objById;
    } else throw new Error (`Object with id #${id} not found`);  
	}

	getAll() {
		return this.storage;
	}
}

interface IUserData {
	id: number,
	name: string,
	age: number,
}

const myStorage = new StorageData<IUserData>();

myStorage.addData({ id: 1, name: 'Max', age: 33 });
myStorage.addData({ id: 2, name: 'Helen', age: 25 });
myStorage.addData({ name: 'Alex', age: 27 });
console.log(myStorage.getAll());

const user1ForUpdate = { id: 1, name: 'Max Junior' };
const user3ForUpdate = { id: 3, name: 'Alexander', age: 28 };
myStorage.updateData(user1ForUpdate);
myStorage.updateData(user3ForUpdate);

myStorage.removeData(2);
console.log(myStorage.getById(3));

console.log(myStorage.getAll());
