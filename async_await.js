const url = 'https://jsonplaceholder.typicode.com/todos/1';
const fetch = require('node-fetch');

const sleep  =  ms => {

    return new Promise(r => setTimeout(r, ms));
}

//Просто промисы...
// function fetchTodos() {
//     console.log("Starting...")
//     return sleep(2000).then(()=>{
//         return fetch(url)
//     }).then(response => response.json())
// }
//
// fetchTodos()
//     .then(data => console.log(data))
//     .catch(e => console.error(e))


//async await
async function fetching (){
    console.log("Starting...")
    try{
        await sleep(2000)
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        console.log("Done!");
    }catch (e) {
        console.error(e)
    }
    finally {
        console.log("---------------------")
    }

}
//fetching();

//Перепишите, используя async/await
// function loadJson(url) {
//     return fetch(url)
//         .then(response => {
//             if (response.status == 200) {
//                 return response.json();
//             } else {
//                 throw new Error(response.status);
//             }
//         })
// }
//
// loadJson('no-such-user.json') // (3)
//     .catch(alert)

async function loadJson(ur) {
    const response = await fetch(ur);
    if(response.status == 200) {
        const data = await response.json();
    }
    else {
        throw new Error(response.status)
    }
}

loadJson().catch(console.log);

//Есть «обычная» функция. Как можно внутри неё получить результат выполнения async–функции?

    async function wait() {
        await new Promise(resolve => setTimeout(resolve, 1000));

        return 10;
    }

    function f() {
        wait().then(res => console.log(res));
        // чтобы вызвать wait() и дождаться результата "10" от async–функции
        // не забывайте, здесь нельзя использовать "await"
    }