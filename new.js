//New constructor 


function User(name, admin = false) {
  this.name = name;
  this.isAdmin = admin;
}

let user1 = new User("Soroka");

console.log(user1);

let user2 = new User("Dmitriy", true);

console.log(user2);


