let str = "Oxford"
console.log(str.split("f"));

let str1 = "Salom Nima Gap O'qishlar Yaxshimi"
let arr = str1.split("")
console.log(arr);

let str3 = "Salom Nima Gap "
let arr1 = str3.split("")
console.log(arr1);

let str4 = "Salom  Yaxshi"
let arr2 = str4.split("")
console.log(arr2);
// ==========================================
let str2 = "    Salom.   Alik.     "
console.log(str2);
console.log(str2.trim());
console.log(str2.trimStart());
console.log(str2.trimEnd());

let str5 = "    Qalay.  Tuzumi.     "
console.log(str5);

console.log(str5.trim());
console.log(str5.trimStart());
console.log(str5.trimEnd());

let str6 = "   Qonday. Yaxshimi.     "
console.log(str6);

console.log(str6.trim());
console.log(str6.trimStart());
console.log(str6.trimEnd());

let str7 = "  Assalom.   Alaykum.     "
console.log(str7);

console.log(str7.trim());
console.log(str7.trimStart());
console.log(str7.trimEnd());

// ================-------------------
let n = 2026;
console.log(n.toString());

let g = 20;
console.log(g.toString());

let w = 0.2;
console.log(w.toString());

let y = 26;
console.log(y.toString());

let s = 202;
console.log(s.toString());
// ===============================
let ism = "mustafo"
console.log(ism.toUpperCase());

let ism12 = "olim"
console.log(ism12.toUpperCase());

let ism2 = "abubakir"
console.log(ism2.toUpperCase());

let ism4 = "mustafo"
console.log(ism4.toUpperCase());
// ==========-------------------
let ism1 = "MUSTAFO"
console.log(ism1.toLowerCase());

let ism5 = "OLIM"
console.log(ism5.toLowerCase());

let ism7 = "ABUBAKIR"
console.log(ism7.toLowerCase());

let ism8 = "MUSTAFO"
console.log(ism8.toLowerCase());

// let ism3 = "mustafo"

// let newIsm = ism3.at(0).toUpperCase().concat(ism3.slice(1))
// console.log(newIsm);

let matn1 = "Oxford Learning"
let matn2 = "Oxford"
console.log(matn1.localeCompare(matn2));
console.log(matn2.localeCompare(matn1));

let matn3 = "Oxford Writing"
let matn4 = "Oxford Learning"
console.log(matn3.localeCompare(matn4));
console.log(matn4.localeCompare(matn3));


let matn5 = "Oxford Speaking"
let matn6 = "Algoritm Writing"
console.log(matn6.localeCompare(matn5));
console.log(matn5.localeCompare(matn6));
// ======--------
let summa = "10 / 5 - 5"
console.log(eval(summa));

let summa1 = "10 / 5 "
console.log(eval(summa1));

let summa2 = " 5 - 5"
console.log(eval(summa2));

let summa3 = "12 / 6 - 6"
console.log(eval(summa3));