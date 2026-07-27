// // let arr = [1,2,"3",4,5,"6","7","8",9]
// // sum = 0
// // function getsum(data){
// //     for (let i =0;i<data.length;i++){
// //         if(typeof data[i] === "string")return getsum(data.slice(i +1))
// //             sum +=data[i]
// //     }
// // }
// // getsum(arr)
// // console.log(sum);


// let str = "16dts63bc94hs826vjf39d939"
// let sum = 0;
// function getsum(str) {
//     for (let i = 0; i < str.length; i++) {
//         if (isNaN(str[i])) return getsum(str.slice(i + 1))
//         sum += Number(str[i])
//     }
// }
// getsum(str)
// console.log(sum);




// 11111111111111111
// function summa(arr, i = 0) {
//     if (i == arr.length) return 0;

//     if (arr[i] % 2 == 0) {
//         return arr[i] + summa(arr, i + 1);
//     }

//     return summa(arr, i + 1);
// }

// console.log(summa([2, 5, 8, 3, 10, 7]));

// 222222222222222222222222222222222
// function coun(str, i = 0) {
//     if (i == str.length) return 0;

//     let v = "aeiou";

//     if (v.includes(str[i])) {
//         return 1 + coun(str, i + 1);
//     }

//     return coun(str, i + 1);
// }

// console.log(coun("recursion")); 
// 33333333333333333333333333333333333

// function min(arr, i = 0) {
//     if (i == arr.length - 1) return arr[i];

//     let m = min(arr, i + 1);

//     if (arr[i] < m) return arr[i];

//     return m;
// }

// console.log(min([15, 3, 28, 1, 9]));\




// 444444444444444444444444444444444444444444444

// function ole(n) {
//     if (n == 0) return 0;

//     return n % 10 + ole(Math.floor(n / 10));
// }

// console.log(ole(5839));

// 55555555555555555555555555555555555555555
// function search(arr, x, i = 0) {
//     if (i == arr.length) return false;

//     if (arr[i] == x) return true;

//     return search(arr, x, i + 1);
// }

// console.log(search([7, 12, 5, 9, 20], 9));
// console.log(search([7, 12, 5, 9, 20], 15)); 