//Closures


//example
function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

console.log( counter() ); // 0
console.log( counter() ); // 1

console.log(counter2()); // 0
console.log(counter2()); // 1


// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
//Да, именно таким образом, используя двойные круглые скобки (не опечатка).

function sum(a) {
  return function(b) {
    return a + b;
  }
}

console.log(sum(3)(4)) //7


//У нас есть встроенный метод arr.filter(f) для массивов.
//Он фильтрует все элементы с помощью функции f. 
//Если она возвращает true, то элемент добавится в возвращаемый массив.
//Сделайте набор «готовых к употреблению» фильтров:

//inBetween(a, b) – между a и b (включительно).
//inArray([...]) – находится в данном массиве.

function inBetween(a, b) {
  return function(x) {
    return x >= a && x <= b 
  }
}

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField (name) {
  return function(a, b) {
    a[name] > b[name] ? 1:-1;
  }
}

let arr = [1, 2 ,5, 9, 4, 6, 7, 8,];

arr.filter((x)=>console.log(x))
