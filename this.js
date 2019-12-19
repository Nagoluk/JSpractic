//this

let calculator = {
  num1: null,
  num2: null,
  read(a, b) {
    this.num1 = a;
    this.num2 = b;
  },

  sum(){
    return this.num1 + this.num2
  },

  mul(){
    return this.num1 * this.num2
  }
};

calculator.read(3, 5);
console.log( calculator.sum() );
console.log( calculator.mul() );


//Измените код методов up, down и showStep 
//таким образом, чтобы их вызов можно было сделать по цепочке

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // показывает текущую ступеньку
    console.log( this.step );
    return this;
  }
};

ladder.up().up().down().showStep(); // 1


function show(){
  console.log(this.name);
}

let user = {
  name: "Jon",
  info: {
    show
  }
}

user.info.show.call(user); //контекст вызова


