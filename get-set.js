let user = {
  name: "Soroka",
  next: "Sasha",
  get fullName (){
     return `${this.next} ${this.name}`;
  },

  set fullName (value){
    [this.next, this.name] = value.split(" ");
  }
}

console.log(user.fullName);

user.fullName = "Alice Cooper";

console.log(user.fullName);

