const person = Object.create({nick: "ss"},
    {
        name: {
            value: "Dmitriy", // значение
            enumerable: true, //виден ли для перебора
            writable: true, //можно ли перезаписать поле
            configurable: true // можно ли удалять свойство
        },

        birthYear: {
            value: 2000,
            enumerable: true,
            writable: false,
            configurable: false

        },

        age: {
            get(){
                return new Date().getFullYear() - this.birthYear;
             },

            set(v) {
                this.birthYear = v;
                console.log(v);
            }
        }
    })

person.name = "DD";
person.birthYear = 8; //перезаписать нельзя!

console.log(delete person.name); //true
console.log(delete person.birthYear); // false

console.log("age " + person.age);
console.log("age " + (person.age = 2005));
console.log("age " + person.age)


for(let key in person){
    if(Object.hasOwnProperty(person)) { //тепепь не будет итерировать свойства прототипов!!!
        console.log("key: " + key);
        console.log("value: " + person[key]);
    }
}

