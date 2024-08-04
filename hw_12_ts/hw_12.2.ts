// Task 2.

/*
1. Напишите функцию, реализующую методы массивов map.Функции принимают на вход массив и колбэк.Используйте дженерик типы. 
   Затипизировать надо саму функцию и коллбэк.
   Создать реализацию функции map, принимающую массив чисел 1-5, возвращающую новый массив, 
   где каждый каждый элемент - это элемент исходного массива умноженный на его индекс
   Пример:
   map([1,2,3,4,5], callback) => [0,2,6,12,20]
*/

type TCallBack<T> = (value: T, index: number) => T;

function mapMethod<T>(array: T[], callback: TCallBack<T>): T[] {
  const newArr: T[] = [];

  for (let i = 0; i < array.length; i++) {
    newArr.push(callback(array[i], i));
  }
  return newArr;
};

const callbackFunc: TCallBack<number> = function (
	value: number,
	index: number,
): number {
  return value * index;
}

const arrForGeneric = [1, 2, 3, 4, 5];
console.log(mapMethod(arrForGeneric, callbackFunc));


/*
2. Напишите дженерик функцию generateObject, которая принимает массив пар [string, T] 
  и возвращает объект, где каждая пара ключ-значение из массива превращается в соответствующую пару ключ-значение в объекте. 
  В случае если ключи повторяются, значение в объекте должно быть последним из встречающихся.

  Требования:
    - Функция должна быть дженерик и работать с любыми типами значений.
    - Функция должна корректно обрабатывать массив пар, включая случаи, когда ключи повторяются.

  Пример:
  const result = generateObject([
  ["1", 1],
  ["2", 2],
  ["3", 3],
  ["4", 4],
  ["4", 5], // повторяющийся ключ, значит это значение должно быть в результирующем объекте
]);

console.log(result);   //{ '1': 1, '2': 2, '3': 3, '4': 5 }
*/

type TArrayPairs<T> = [string, T][];
type TObjectPairs<T> = { [key: string]: T };

function generateObject<T>(array: TArrayPairs<T>): TObjectPairs<T> {
  const resultObject: TObjectPairs<T> = {};

  for (const [key, value] of array) {
    resultObject[key] = value;
  }
  return resultObject;
}

const array1: TArrayPairs<number> = [ ['1', 1], ['2', 2], ['3', 3], ['4', 4], ['4', 5] ];
const array2: TArrayPairs<boolean>  = [["1", true], ["2", false], ["2", true], ["3", true], ["3", false]];

console.log(generateObject(array1));
console.log(generateObject(array2));
