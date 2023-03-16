
//letters numbers symbols

let string = "hari234@gmail.com";
let letter = /[^a-z]/g;
let letter1 = string.replaceAll(letter,"")
console.log(letter1);
let number = /[^0-9]/g;
let num = string.replaceAll(number,"");
console.log(num);
let spac = /[a-z0-9]/g;
let sp1 = string.replaceAll(spac,"");
console.log(sp1);
