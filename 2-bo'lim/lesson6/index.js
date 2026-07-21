let tel1 = "+998 99 999 99 99"
let tel2 = "+7 9999 999 99 99"
let tel3 = "+1 9999 999 99 99"

console.log(tel1.startsWith("+998"));
console.log(tel2.startsWith("+998"));
console.log(tel3.startsWith("+998"));


let tel4 = "+998 88 888 88 88"
let tel5 = "+7 88 888 88 88"
let tel6 = "+1 88 888 88 88"

console.log(tel4.startsWith("+7"));
console.log(tel5.startsWith("+7"));
console.log(tel6.startsWith("+7"));



let tel7 = "+998 77 777 77 77"
let tel8 = "+7 77 777 77 77"
let tel9 = "+1 77 777 77 77"

console.log(tel7.startsWith("+1"));
console.log(tel8.startsWith("+1"));
console.log(tel9.startsWith("+1"));
// =========================================

let email1 = "eshmat@gmail.com";
let email2 = "toshmat@yandex.ru"
let email3 = "gulmat@icloud.com"


console.log(email1.endsWith("@gmail.com"));
console.log(email2.endsWith("@gmail.com"));
console.log(email3.endsWith("@gmail.com"));


let email5 = "eshmat@gmail.com";
let email6 = "toshmat@yandex.ru"
let email7 = "gulmat@icloud.com"


console.log(email5.endsWith("@icloud.com"));
console.log(email6.endsWith("@icloud.com"));
console.log(email7.endsWith("@icloud.com"));


let email8 = "eshmat@gmail.com";
let email9 = "toshmat@yandex.ru"
let email0 = "gulmat@icloud.com"


console.log(email8.endsWith("@yandex.ru"));
console.log(email9.endsWith("@yandex.ru"));
console.log(email0.endsWith("@yandex.ru"));

// ====================================


let matn = "Assaloms"
console.log(matn.search("s"));

let matn1 = "Alaykum"
console.log(matn.search("k"));

let matn2 = "Salom"
console.log(matn.search("o"));

let matn3 = "Matn"
console.log(matn.search("n"));
// ===================

let matn4 = "Qalay"
console.log(matn4.indexOf("a"));
console.log(matn4.indexOf("a",3));



console.log(matn4.indexOf("Q"));
console.log(matn4.indexOf("l",1));


console.log(matn4.indexOf("y"));
console.log(matn4.indexOf("Q",0));

// ==================================
let matn5 = "Smartphone"
console.log(matn5.lastIndexOf("S"));
console.log(matn5.lastIndexOf("h",1));

console.log(matn5.lastIndexOf("m"));
console.log(matn5.lastIndexOf("p",2));


console.log(matn5.lastIndexOf("a"));
console.log(matn5.lastIndexOf("e",6));

// ====================
// ====================

let tel = "99 999 99 99"
console.log(tel.padStart(tel.length + 5, "+998 "));

let tel0 = "99 999 99 99"
console.log(tel.padStart(tel.length + 3, "+1 "));


let tel12 = "99 999 99 99"
console.log(tel.padStart(tel.length + 3, "+7 "));
