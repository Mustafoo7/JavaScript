// let arr = ["Olma", "Uzum","Nok"]
// let check = arr.some(value => value.endsWith("m"))
// console.log(check);


// let arr1 = [ 1, 2, 3, 4, 5, "6", 7]
// let check1 = arr1.some(value => typeof value === "string")
// console.log(check1);



// let arr2 = ["Olma", "Uzum","Nok"]
// let check2 = arr2.every(value => value[0] === value[0].toUpperCase())

// console.log(check2);


// // judo
// // cwa
// // itzu
// // eric
// // ninja
// // bash


// ## 1-MASALA — Barcha sonlar musbatmi?

// ### Vazifa

// Quyidagi massiv berilgan:

// let nums = [5, 12, 8, 20, 1];

// Massivdagi barcha sonlar 0 dan katta ekanligini tekshiring.

// ### Kutilayotgan natija

// true


// ## 2-MASALA — Barcha ismlar kamida 4 harfdan iboratmi?

// ### Vazifa

// Quyidagi massiv berilgan:

// let names = ["Aliya", "Jasur", "Bekzod", "Malika"];

// Har bir ismning uzunligi kamida 4 ta belgidan iboratligini tekshiring.

// ### Kutilayotgan natija

// true



// ## 3-MASALA — Hech bo'lmaganda bitta juft son bormi?

// ### Vazifa

// Quyidagi massiv berilgan:

// let nums = [3, 7, 11, 18, 25];

// Massivda hech bo'lmaganda bitta juft son borligini tekshiring.

// ### Kutilayotgan natija

// true


// ## 4-MASALA — Hech bo'lmaganda bitta ism "A" harfi bilan boshlanadimi?

// ### Vazifa

// Quyidagi massiv berilgan:

// let names = ["Jasur", "Bekzod", "Ali", "Sardor"];

// Massivda "A" harfi bilan boshlanadigan hech bo'lmaganda bitta ism borligini tekshiring.

// ### Kutilayotgan natija

// true



// ## 5-MASALA — Ichki massivlarni bitta darajaga tekislang

// ### Vazifa

// Quyidagi massiv berilgan:

// let arr = [[1, 2], [3, 4], [5, 6]];

// Massivni bitta darajaga tekislang.

// ### Kutilayotgan natija

// [1, 2, 3, 4, 5, 6]


// ## 6-MASALA — Ikki darajali massivni to'liq tekislang

// ### Vazifa

// Quyidagi massiv berilgan:

// let arr = [1, [2, [3, 4]], 5];

// Massivni to'liq tekislang.

// ### Kutilayotgan natija

// [1, 2, 3, 4, 5]



// ## 7-MASALA — Har bir sonni ikki baravar qilib yangi massiv yarating

// ### Vazifa

// Quyidagi massiv berilgan:

// let nums = [1, 2, 3];

// Har bir son uchun [son, son * 2] ko'rinishidagi massiv hosil qiling va natijani bitta massivga aylantiring.

// ### Kutilayotgan natija

// [1, 2, 2, 4, 3, 6]


// ## 8-MASALA — So'zlarni harflarga ajrating

// ### Vazifa

// Quyidagi massiv berilgan:

// let words = ["hi", "js"];

// Har bir so'zni harflarga ajratib, natijani bitta massivga aylantiring.

// ### Kutilayotgan natija

// ["h", "i", "j", "s"]


// Quyidagi massiv berilgan:

// let nums = [5, 12, 8, 20, 1];

// Massivdagi barcha sonlar 0 dan katta ekanligini tekshiring.

// ### Kutilayotgan natija

// true

// let nums = [5, 12, 8, 20, 1];
// let result = nums.every(num => num > 0);
// console.log(result);

// let names = ["Aliya", "Jasur", "Bekzod", "Malika"];
// let result1 = names.every(name => name.length >= 4);
// console.log(result1); 


// let nums1 = [3, 7, 11, 18, 25];
// let result2 = nums1.some(num => num % 2 === 0);
// console.log(result2);


// let names1 = ["Jasur", "Bekzod", "Ali", "Sardor"];
// let result3 = names1.some(name => name.startsWith("A"));
// console.log(result3); 


// let arr = [[1, 2], [3, 4], [5, 6]];
// let result4 = arr.flat();
// console.log(result4); 



// let arr1 = [1, [2, [3, 4]], 5];
// let result5 = arr1.flat(Infinity);
// console.log(result5);



// let nums2 = [1, 2, 3];
// let result6 = nums2.flatMap(num => [num, num * 2]);
// console.log(result6); 


