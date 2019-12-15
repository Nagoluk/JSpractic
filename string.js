let ucFirst = (str) => {
  return str[0].toUpperCase() + str.slice(1);
}

let checkSpam = (str) => {
  let temp = str.toLowerCase();
  return temp.includes("viagra") || temp.includes("xxx");
}

let truncate = (str, maxlength) => {
  if(str.length > maxlength){
    return str.slice(0, maxlength) + "...";
  }
  else {
    return str;
  }
}

let extractCurrencyValue = (str) => {
  if(str.includes("$")){
     return +str.slice(1);
  }
  else {
    return 0
  }
}

console.log(ucFirst("kkk"));
console.log(checkSpam("XXX"));
console.log(truncate("fsdafdfsdaf", 4));
console.log(extractCurrencyValue("$9"));