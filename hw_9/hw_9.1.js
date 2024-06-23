// Task 1
/*
1. Создайте класс Animal
2. В конструкторе класс должен принимать следующие параметры:     
  - type
  - color
  - weight
  - height
  - place of origin
3. Добавьте в класс метод: getInfo, который возвращает в строке полную информацию о животном (используйте шаблонные строки с `${}` синтаксисом)
4. Создайте геттер для поля color (get color), не забывая что при этом поле должно быть _color
5. Создайте сеттер для поля color (set color(newColor)). В сеттере проверяйте, является ли цвет одним из следующих:
  - Красный
  - Черный
  - Белый
  - Синий
Если не является - кидаем ошибку через throw new Error('текст ошибки')
6. Создайте класс Snake, который будет наследовать класс Animal
7. Создайте конструктор в классе Snake, который будет принимать все необходимые поля из класса Animal, а также поле isPoisonous
8. С помощью super() вызовите конструктор родителя, передав необходимые параметры
9. В классе Snake создать метод checkPoisonous(), который возвращает true/false
10. Сделайте поле isPoisonous приватным в классе Snake
*/

class Animal {
	constructor(type, color, weight, height, placeOfOrigin) {
		this.type = type;
		this.color = color;
		this.weight = weight;
		this.height = height;
		this.placeOfOrigin = placeOfOrigin;
	}

	getInfo() {
		return `The properties of this ${this.type}: color - ${this.color}, weight - ${this.weight}, height - ${this.height}, place of origin - ${this.placeOfOrigin}.`
	}

	get color() {
		return this._color
	}

	set color(newColor) {
		if (newColor !== 'red' && newColor !== 'black' && newColor !== 'white' && newColor !== 'blue') {
			throw new Error(`It is possible to set one of these colors: red, black, white, blue.`)
		}
		this._color = newColor;
	}
}

const goldenRetriever = new Animal('dog', 'white', '30 kg', '75 cm', 'Scotland');
// console.log(goldenRetriever.getInfo());
// console.log(goldenRetriever);

goldenRetriever.color = 'black';
// console.log(goldenRetriever.getInfo());

// goldenRetriever.color = 'sandy';


class Snake extends Animal {
	#isPoisonous; 

	constructor(type, color, weight, height, placeOfOrigin, isPoisonous) {
		super (type, color, weight, height, placeOfOrigin);
		this.#isPoisonous = isPoisonous;
	}

	checkPoisonous() {
		if (this.#isPoisonous) return 'Be careful! It is poisonous.';
		else return `Dont't worry. It's not poisonous.`;
	}
}

const cobra = new Snake('snake', 'black', '10 kg', '3.5 m', 'India', true);
console.log(cobra.getInfo());
console.log(cobra.checkPoisonous());
