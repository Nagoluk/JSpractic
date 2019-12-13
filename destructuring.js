//destructuring

let user = {
  name: "John",
  years: 30
};

let {name, years: age, isAdmin = false} = user;

console.log(name, age, isAdmin);


let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

let topSalary = (obj) => {
  
  let topSalary = 0, topName = null;
  for (let [key, value] of Object.entries(obj)) {
      if(topSalary < value) {
        topSalary = value;
        topName = key;
      }
  }

  return  topName;
}

console.log(topSalary(salaries));

//rest / spread
let userCopy = {...user};
let {...userCopy2} = user;

userCopy.name = "k"
console.log(userCopy);
console.log(user);
console.log(userCopy2);


//deep destructuring 

let person = {
  name: "Soroka",
  job: "Student",
  age: 17,
  skills: ["C++", "Java"],
  info: {
    privet: "ggg"
  }
}

let destructuring = (obj = {}) =>{
    let {name, job, age, skills: [a, b], info: {privet}} = obj;
    console.log(name, job, age, a, b, privet);
}

destructuring(person);


