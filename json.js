// JSON

const user = {
  name: "Dmitriy",
  age: 19,
  single: true,
  toJSON: function () {
    return {
      name: this.name,
      age: this.age,
    }
  }
}

let json = JSON.stringify(user);
console.log(typeof json);
console.log(json);

//Важное ограничение: не должно быть циклических ссылок.


const person = {
  name: "Soroka",
}


//Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

let User = {
  name: "Василий Иванович",
  age: 35
};

let uJSON = JSON.parse(JSON.stringify(User));

console.log(uJSON);

//Исключить обратные ссылки
let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
  place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

console.log( JSON.stringify(meetup, function replacer(key, value) {
   return (key != "" && value == meetup) ? undefined : value;
}));

/* в результате должно быть:
{
  "title":"Совещание",
  "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
  "place":{"number":23}
}
*/

