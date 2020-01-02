//Встроенная функция setTimeout использует колбэк-функции.
//Создайте альтернативу, использующую промисы.

//Функция delay(ms) должна возвращать промис, который перейдёт в состояние 
//«выполнен» через ms миллисекунд, так чтобы мы могли добавить к нему .then:


let delay = ms =>{
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms)   
    })
} 

let promise1 = delay(2000);
promise1.then(()=> console.log("after 2 sec"));


//Эмуляция сервера


let newRequest = () => {
    return new Promise((resolve, reject) => {
        console.log("waiting...")
        const user = {
            name: "Hi",
            job: "Programmer"
        };
        setTimeout(resolve.bind(this, JSON.stringify(user)), 2000);
    });
}

let req = newRequest();

req.then(data =>{
    console.log("ready!");
    console.log(JSON.parse(data));
});