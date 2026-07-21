// let arr = [1,2,3,4,5,6,7,8,9,10 , true , false , true]
// arr.copyWithin(4,10)
// console.log(arr);

// let arr1 = [1,2,3,4,5,6,7,8,9]
// let summa = arr.reduce((acc,cur)=>{
//     return acc * cur
// },1)
// console.log(summa);


// let data1 ={}
// let data2 = []
// console.log(typeof data1 === typeof data2);
// console.log(Array.isArray(data1));
// console.log(Array.isArray(data2));

// let str = "Oxford"

// let arr2 = Array.of("salom",true,false)
// let arr3 = ["salom",true,false]
// console.log(arr);


// let arr = ["a",1,"b",2,"c",3,"d",4]  
// let summa = arr.reduce((acc,cur)=>{
//    if(typeof cur === "number"){
//     return acc + cur
//    }
//     return acc

// },0)
// console.log(summa);

// let str ="as2da232dha23"
// let summa = str === arr((acc)) 

// 1-MASALA
// ========================================

// Vazifa:
// 10 ta elementdan iborat massiv yarating. 3-indeksdan 7-indeksgacha bo'lgan elementlarni 100 qiymati bilan almashtiring.

// Massiv:
// const arr = new Array(10).fill(0);

// Natijani quyidagi o'zgaruvchiga saqlang:
// const result = ?;

// Kutilayotgan natija:
// [0, 0, 0, 100, 100, 100, 100, 0, 0, 0]


// ========================================
// 2-MASALA
// ========================================

// Vazifa:
// 15 ta elementdan iborat massiv yarating. Birinchi 5 ta elementni "Booked" qiymati bilan to'ldiring.

// Massiv:
// const arr = new Array(15).fill("Empty");

// Natijani quyidagi o'zgaruvchiga saqlang:
// const result = ?;

// Kutilayotgan natija:
// [
// "Booked","Booked","Booked","Booked","Booked",
// "Empty","Empty","Empty","Empty","Empty",
// "Empty","Empty","Empty","Empty","Empty"
// ]


// ###########################################
// 3-MASALA
// ###########################################

// Vazifa:
// Massivning birinchi 3 ta elementini oxiriga nusxalang.

// Massiv:
// const arr = [10,20,30,40,50,60];

// Natijani quyidagi o'zgaruvchiga saqlang:
// const result = ?;

// Kutilayotgan natija:
// [10,20,30,40,10,20]


// ###########################################
// 4-MASALA
// ###########################################

// Vazifa:
// 4-indeksdan boshlab elementlarni 1-indeksdan boshlab nusxalang.

// Massiv:
// const arr = [1,2,3,4,5,6,7];

// Natijani quyidagi o'zgaruvchiga saqlang:
// const result = ?;

// Kutilayotgan natija:
// [1,2,3,4,2,3,4]


// ###########################################
// 5-MASALA
// ###########################################

// Vazifa:
// Quyidagi massivdagi barcha juft sonlarning yig'indisini hisoblang.

// Massiv:
// const numbers = [5, 12, 7, 8, 15, 20, 9];

// Natijani quyidagi o'zgaruvchiga saqlang:
// const sum = ?;

// Kutilayotgan natija:
// 40


// ###########################################
// 6-MASALA
// ###########################################

// Vazifa:
// Quyidagi mahsulotlarning umumiy narxini hisoblang.

// Massiv:
// const products = [
//   { name: "Book", price: 120 },
//   { name: "Pen", price: 30 },
//   { name: "Bag", price: 250 },
//   { name: "Notebook", price: 80 }
// ];

// Natijani quyidagi o'zgaruvchiga saqlang:
// const totalPrice = ?;

// Kutilayotgan natija:
// 480


// ###########################################
// 7-MASALA
// ###########################################

// Vazifa:
// Quyidagi massiv ichidan faqat Array bo'lgan elementlarni ajratib oling.

// Massiv:
// const values = [
//   [1,2],
//   "JavaScript",
//   50,
//   ["HTML","CSS"],
//   {},
//   true
// ];

// Natijani quyidagi o'zgaruvchiga saqlang:
// const arrays = ?;

// Kutilayotgan natija:
// [
//   [1,2],
//   ["HTML","CSS"]
// ]








// 1111111111111111111111111111111111111
// 1-MASALA
// ========================================

// Vazifa:
// 10 ta elementdan iborat massiv yarating. 3-indeksdan 7-indeksgacha bo'lgan elementlarni 100 qiymati bilan almashtiring.

// Massiv:
// const arr = new Array(10).fill(0);

// Natijani quyidagi o'zgaruvchiga saqlang:
// const result = ?;

// Kutilayotgan natija:
// [0, 0, 0, 100, 100, 100, 100, 0, 0, 0]

const arr1 = new Array(10).fill(0);
const result1 = arr1.fill(100, 3, 7);
// 222222222222222222222222222222222222
// ========================================
// 2-MASALA
// ========================================

// Vazifa:
// 15 ta elementdan iborat massiv yarating. Birinchi 5 ta elementni "Booked" qiymati bilan to'ldiring.

// Massiv:
// const arr = new Array(15).fill("Empty");

// Natijani quyidagi o'zgaruvchiga saqlang:
// const result = ?;

// Kutilayotgan natija:
// [
// "Booked","Booked","Booked","Booked","Booked",
// "Empty","Empty","Empty","Empty","Empty",
// "Empty","Empty","Empty","Empty","Empty"
// ]
2
const arr2 = new Array(15).fill("Empty");
const result2 = arr2.fill("Booked", 0, 5);
// 3333333333333333333333333333333333333333333333

// ###########################################
// 3-MASALA
// ###########################################

// Vazifa:
// Massivning birinchi 3 ta elementini oxiriga nusxalang.

// Massiv:
// const arr = [10,20,30,40,50,60];

// Natijani quyidagi o'zgaruvchiga saqlang:
// const result = ?;

// Kutilayotgan natija:
// [10,20,30,40,10,20]
3
const arr3 = [10, 20, 30, 40, 50, 60];
const result3 = arr3.copyWithin(4, 0, 2);
// 444444444444444444444444444444444
// Vazifa:
// 4-indeksdan boshlab elementlarni 1-indeksdan boshlab nusxalang.

// Massiv:
// const arr = [1,2,3,4,5,6,7];

// Natijani quyidagi o'zgaruvchiga saqlang:
// const result = ?;

// Kutilayotgan natija:
// [1,2,3,4,2,3,4]

4
const arr4 = [1, 2, 3, 4, 5, 6, 7];
const result4 = arr4.copyWithin(4, 1, 4);
// 5555555555555555555555555555555555555555555555

// Vazifa:
// Quyidagi massivdagi barcha juft sonlarning yig'indisini hisoblang.

// Massiv:
// const numbers = [5, 12, 7, 8, 15, 20, 9];

// Natijani quyidagi o'zgaruvchiga saqlang:
// const sum = ?;

// Kutilayotgan natija:
// 40
5
const n = [5, 12, 7, 8, 15, 20, 9];
const sum = n
  n.filter(num => num % 2 === 0)
  n.reduce((acc, num) => acc + num, 0);

6
// 6666666666666666666666666666666666

// Vazifa:
// Quyidagi mahsulotlarning umumiy narxini hisoblang.

// Massiv:
// const products = [
//   { name: "Book", price: 120 },
//   { name: "Pen", price: 30 },
//   { name: "Bag", price: 250 },
//   { name: "Notebook", price: 80 }
// ];

// Natijani quyidagi o'zgaruvchiga saqlang:
// const totalPrice = ?;

// Kutilayotgan natija:
// 480

const products = [
  { name: "Book", price: 120 },
  { name: "Pen", price: 30 },
  { name: "Bag", price: 250 },
  { name: "Notebook", price: 80 }
];
const totalPrice = products.reduce((sum, item) => sum + item.price, 0);

7
// 777777777777777777777777777
// Vazifa:
// Quyidagi massiv ichidan faqat Array bo'lgan elementlarni ajratib oling.

// Massiv:
// const values = [
//   [1,2],
//   "JavaScript",
//   50,
//   ["HTML","CSS"],
//   {},
//   true
// ];

// Natijani quyidagi o'zgaruvchiga saqlang:
// const arrays = ?;

// Kutilayotgan natija:
// [
//   [1,2],
//   ["HTML","CSS"]
// ]
const values1 = [
  [1, 2],
  "JavaScript",
  50,
  ["HTML", "CSS"],
  {},
  true
];

const arrays = values1.filter(Array.isArray);
