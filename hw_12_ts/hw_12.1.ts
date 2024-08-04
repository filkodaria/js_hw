// Task 1.

/*
1. Создайте дженерик функцию getFirstElement, которая принимает массив элементов типа T, и возвращает первый элемент (типа T).\
*/

function getFirstElement<T>(array: T[]) {
  return array[0];
}
const arrayOfStrings = ['first', 'second', 'third'];
console.log(getFirstElement(arrayOfStrings));

const arrayOfNumbers = [1, 2, 3];
console.log(getFirstElement(arrayOfNumbers));


/*
2. Создайте интерфейс Person, абстрактный класс Employee, который реализует интерфейс Person, и конкретные классы Manager и Developer.
  - Интерфейс Person должен содержать:
      Стринговые поля: name, surname, experienceYears
      Метод, возвращающий строку: getDetails().

  - Абстрактный класс Employee должен:
      Реализовывать интерфейс Person.
      Содержать защищенное поле: salary, не передающееся в конструктор (по дефолту 0)
      Содержать защищенный абстрактный метод: calculateSalary().,
        который считает зарплату и вызывается в конструкторе, и будет реализован в наследниках
  
  - Конкретные классы Manager и Developer должны:
      Наследоваться от Employee.
      Класс менеджер должен на конструкторе получать поле prefered, которое может быть только 'scrum' или 'kanban'
      Класс девелопер должен на конструкторе получать поле programmingLanguage, который может быть 'js', 'ts', 'java', 'python'
      Метод calculateSalary должен для менеджера устанавливать зарплату по формуле: количество лет опыта * 500
      Метод calculateSalary должен для девелопера устанавливать зарплату по формуле: количество лет опыта * 1000
      Реализовывать метод getDetails(), который должен выводить полную информацию об объекте вида:
        'My name is Elena TSovna, I am software developer with 6 years of experience in TypeScript and 6000$ salary' (пример для девелопера)
*/

interface IPerson {
  name: string,
  surname: string,
  experienceYears: number,
  getDetails(): string,
}

abstract class Employee implements IPerson {
  protected salary: number = 0;

  constructor(
    public name: string,
    public surname: string,
    public experienceYears: number,
  ) {
    this.calculateSalary();
  }

  protected abstract calculateSalary(): number;

  abstract getDetails(): string;
}

type TAgileMethodology = 'scrum' | 'kanban';
type TProgrLang = 'js' | 'ts' | 'java' | 'python';

class Manager extends Employee {
  constructor(
    public name: string,
    public surname: string,
    public experienceYears: number,
    public prefered: TAgileMethodology,
  ) {
    super(name, surname, experienceYears);
    this.prefered;
  }

  protected calculateSalary(): number {
    return this.experienceYears * 500;
  }

  getDetails(): string {
    return `My name is ${this.name} ${this.surname}, I am ${this.constructor.name} with ${this.experienceYears} years of experience using ${this.prefered} Agily methodology and ${this.calculateSalary()}$ salary.`;
  }
}

class Developer extends Employee {
  constructor(
    public name: string,
    public surname: string,
    public experienceYears: number,
    public programmingLanguage: TProgrLang,
  ) {
    super(name, surname, experienceYears);
    this.programmingLanguage;
  }

  protected calculateSalary(): number {
    return this.experienceYears * 1000;
  }

  getDetails(): string {
    return `My name is ${this.name} ${this.surname}, I am ${this.constructor.name} with ${this.experienceYears} years of experience in ${this.programmingLanguage} and ${this.calculateSalary()}$ salary.`;
  }
}

const manager = new Manager('Helen', 'Brown', 5, 'scrum');
console.log(manager.getDetails());

const developer = new Developer('Mark', 'O`Neil', 4, 'ts');
console.log(developer.getDetails());
