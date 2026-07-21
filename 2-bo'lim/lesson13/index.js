// // let arr = [1,10,1,7,41,20,28,-5]
// // let newArr = arr.filter((value)=>{
// //     if(value % 2 === 0){
// //         return value;
// //     }
// // })
// // console.log(newArr);

// // let newwArr = arr.filter((value)=> value > 9 && value <100 )
// // console.log(newwArr);



// // let neewArr = arr.filter((value) => value <= 9 && value >= -9)  
// // console.log(neewArr);


// // let data = [
// // { id:1,  ism:"Murodxon", yosh:15 },
// // { id:2,  ism:"Xasanxon", yosh:16 },
// // { id:3,  ism:"Mustafo", yosh:13 },
// // { id:4,  ism:"Sarvarbek", yosh:15 },
// // { id:5,  ism:"Olim", yosh:13 },
// // { id:6,  ism:"Ikromxon", yosh:14 },
// // { id:7,  ism:"Abubakr", yosh:13 },
// // { id:8,  ism:"Eshamt", yosh:12},
// // ];
// // let newData = data.filter((obj) => obj.yosh >=14)

// // let neewData = data.filter((obj) => obj.ism.length >=7 && obj.yosh >=15)
// // console.log(neewData);

// let data = [
//     { id: 1, ism: "Murodxon", yosh: 15 },
//     { id: 2, ism: "Xasanxon", yosh: 16 },
//     { id: 3, ism: "Mustafo", yosh: 13 },
//     { id: 4, ism: "Sarvarbek", yosh: 15 },
//     { id: 5, ism: "Olim", yosh: 13 },
//     { id: 6, ism: "Ikromxon", yosh: 14 },
//     { id: 7, ism: "Abubakr", yosh: 13 },
//     { id: 8, ism: "Eshamt", yosh: 12 },
// ];

// // let newdata = data.filter((obj)=> obj.ism.length % 2 === 1 )
// // console.log(newdata);


// let newDta = data.filter((obj) => {
//     if (obj.yosh % 2 === 1) {
//         obj.status = true
//     } else {
//         obj.status = false
//     }

//     return obj;

// })
// console.log(newDta);





// # 1-MASALA — Juft sonlarni ajrating

// Vazifa:
// numbers massivida faqat juft sonlarni ajratib oling.

// Massiv:
// const numbers = [3, 8, 11, 14, 17, 20, 25, 30];

// Natijani quyidagi o‘zgaruvchiga saqlang:
// const evenNumbers = ?;

// Kutilayotgan natija:
// [8, 14, 20, 30]


// --------------------
// const numbers = [3, 8, 11, 14, 17, 20, 25, 30];

// const evenNumbers = numbers.filter(num => num % 2 === 0);

// console.log(evenNumbers);


// ===================================================


// # 2-MASALA — 5 harfdan uzun so‘zlarni toping

// Vazifa:
// words massivida uzunligi 5 tadan katta bo‘lgan so‘zlarni ajratib oling.

// Massiv:
// const words = ["olma", "shaftoli", "anor", "banan", "uzum", "tarvuz"];

// Natijani quyidagi o‘zgaruvchiga saqlang:
// const longWords = ?;

// Kutilayotgan natija:
// ["shaftoli", "tarvuz"]

// -------------------------
//  const words = ["olma", "shaftoli", "anor", "banan", "uzum", "tarvuz"];
// const word = words.filter((obj) => obj.length >5 )
// console.log(word);
// ===================================================


// # 3-MASALA — Musbat sonlarni ajrating

// Vazifa:
// numbers2 massivida faqat 0 dan katta sonlarni ajratib oling.

// Massiv:
// const numbers2 = [-10, 15, 0, -3, 22, 7, -8];

// Natijani quyidagi o‘zgaruvchiga saqlang:
// const positiveNumbers = ?;

// Kutilayotgan natija:
// [15, 22, 7]


// const numbers1 = [-10, 15, 0, -3, 22, 7, -8];

// const positiveNumbers = numbers2.filter(num => num > 0);

// console.log(positiveNumbers);

// ===================================================


// # 4-MASALA — Narxi 100 dan yuqori mahsulotlarni toping

// Vazifa:
// products massivida narxi 100 dan katta bo‘lgan mahsulotlarni ajratib oling.

// Massiv:
// const products = [
//   { name: "Daftar", price: 25 },
//   { name: "Qalam", price: 10 },
//   { name: "Sumka", price: 180 },
//   { name: "Kitob", price: 120 },
//   { name: "O‘chirg‘ich", price: 8 }
// ];

// Natijani quyidagi o‘zgaruvchiga saqlang:
// const expensiveProducts = ?;

// Kutilayotgan natija:
// [
//   { name: "Sumka", price: 180 },
//   { name: "Kitob", price: 120 }
// ]

// const products = [
//     { name: "Daftar", price: 25 },
//     { name: "Qalam", price: 10 },
//     { name: "Sumka", price: 180 },
//     { name: "Kitob", price: 120 },
//     { name: "O‘chirg‘ich", price: 8 }
//   ];
  
//   const expensiveProducts = products.filter(product => product.price > 100);
  
//   console.log(expensiveProducts);
// ===================================================


// # 5-MASALA — Faol foydalanuvchilarni ajrating

// Vazifa:
// users massivida isActive qiymati true bo‘lgan foydalanuvchilarni ajratib oling.

// Massiv:
// const users = [
//   { id: 1, name: "Ali", isActive: true },
//   { id: 2, name: "Vali", isActive: false },
//   { id: 3, name: "Sardor", isActive: true },
//   { id: 4, name: "Madina", isActive: false }
// ];

// Natijani quyidagi o‘zgaruvchiga saqlang:
// const activeUsers = ?;

// Kutilayotgan natija:
// [
//   { id: 1, name: "Ali", isActive: true },
//   { id: 3, name: "Sardor", isActive: true }
// ]



// const users = [
//     { id: 1, name: "Ali", isActive: true },
//     { id: 2, name: "Vali", isActive: false },
//     { id: 3, name: "Sardor", isActive: true },
//     { id: 4, name: "Madina", isActive: false }
//   ];
  
//   const activeUsers = users.filter(user => user.isActive);
  
//   console.log(activeUsers);