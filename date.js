// Date 

// 1.Создайте объект Date для даты:
// 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

console.log(new Date(2012, 1, 20, 3, 12));


// 2.В Европейских странах неделя начинается с понедельника (день номер 1),
// затем идёт вторник (номер 2) и так до воскресенья (номер 7).
// Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

let getLocalDay = (date) => {
  let week = ["BC", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
  return week[date.getDay()];
}

console.log(getLocalDay(new Date()));


// 3. Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.
// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1)
// вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.
// Функция должна надёжно работать при значении days=365 и больших значениях:

let getDateAgo = (date, days) => {
  let dateCopy = new Date(date);
  dateCopy.setDate(dateCopy.getDate() - days);
  return dateCopy.getDate();
}
//функция не должна изменять объект!!!!
console.log(getDateAgo(new Date, 2));


// 4. Напишите функцию getLastDayOfMonth(year, month),
// возвращающую последнее число месяца.
// Иногда это 30, 31 или даже февральские 28/29.

let getLastDayOfM = (year, month) => {
  let date = new Date(year, month) - new Date(year, month - 1);
  return date/1000/24/3600;
}

console.log(getLastDayOfM(2016, 2));

// 5. Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня

let getSecondsToday = () => {
  let cur = new Date();
  let now = new Date(cur.getFullYear(), cur.getMonth(), cur.getDate())

  return Math.round((cur - now) / 1000);
}

console.log(getSecondsToday());

// 6. Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

let getSecondsToTomorrow = () => {
  let now = new Date();
  let tom = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  console.log(tom)
  return Math.round((tom - now)/1000);
}

console.log(getSecondsToTomorrow());

//Напишите функцию formatDate(date), форматирующую date по следующему принципу:
//Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
//В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
//В противном случае, если меньше часа, вывести "m мин. назад".
//В противном случае, полная дата в формате "DD.MM.YY HH:mm".
// А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.


let formatDate = (date) => {
  let now = new Date ();
  let mili = now.getTime() - date.getTime();

  if(mili < 1000){
    return `just now`;
  }

  else if (mili < 1000 * 60){
    return `${Math.round(mili/1000)} second ago`;
  }

  else if(mili < 1000 * 60 * 60) {
    return `${Math.round(mili/1000/60)} minutes ago`;
  }

  else {
    let date = now.toString();
    return "was " + date.slice(0, 24)
  }
}

console.log(formatDate(new Date(2222)));

