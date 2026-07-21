// // let data = [
// //     {id:1, ism:"Murodxon", yosh:15},
// //     {id:2, ism:"Xasanxon", yosh:16},
// //     {id:3, ism:"Mustafo", yosh:13},
// //     {id:4, ism:"Sarvarbek", yosh:15},
// //     {id:5, ism:"Olim", yosh:13},
// //     {id:6, ism:"Ikramxon", yosh:14},
// //     {id:7, ism:"Abubakr", yosh:13},
// //     {id:8, ism:"Eshmat", yosh:12},
// // ]
// // let yoshlar = data.map((obj)=> obj.yosh)
// // let max = Math.max(...yoshlar)
// // let user = data.findIndex((obj)=>obj.yosh === max)
// // console.log(user);


    



// // let arr = [50, 7, 355, 7, 3, 63, 534, -1]
// // arr.sort((a,b) => a - b)
// // console.log(arr);


// // let arr1 = ['Olma',"Uzum","Nok","Mandarin" ]

// // arr1.sort((a ,b) => a.localeCompare(b.arr1))

// // console.log(arr1);

// let data = [
//     {id:1, ism:"Murodxon", yosh:15},
//     {id:2, ism:"Xasanxon", yosh:16},
//     {id:3, ism:"Mustafo", yosh:13},
//     {id:4, ism:"Sarvarbek", yosh:15},
//     {id:5, ism:"Olim", yosh:13},
//     {id:6, ism:"Ikramxon", yosh:14},
//     {id:7, ism:"Abubakr", yosh:13},
//     {id:8, ism:"Eshmat", yosh:12},
// ]

// data.sort((a,b)=> a.ism.length - b.ism.length)
// console.log(data);



let nums = [-5, -2, 0, 7, 10];
let result = nums.find(num => num > 0);
console.log(result); 




let words = ["olma", "banan", "shaftoli", "anor"];
let result1 = words.find(word => word.length > 5);
console.log(result1); 






let nums1 = [1, 3, 5, 8, 10];
let result2 = nums1.findIndex(num => num % 2 === 0);
console.log(result2); 





let nums3 = [10, 50, 90, 120, 150];
let result3 = nums3.findIndex(num => num > 100);
console.log(result3); 




let nums4 = [1, 4, 7, 8, 11, 12];
let result4 = nums4.findLastIndex(num => num % 2 === 0);
console.log(result4); 




let nums5 = [10, -5, 7, -3, 2, -1];
let result5 = nums5.findLastIndex(num => num < 0);
console.log(result5); 



let nums6 = [8, 3, 1, 10, 5];
nums6.sort((a, b) => a - b);
console.log(nums6); 



let fruits = ["anor", "olma", "banan", "shaftoli"];
fruits.sort();
console.log(fruits);












