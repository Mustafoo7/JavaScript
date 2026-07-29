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







let str = "recurtion"
let unli ="aeoui"
let count = 0
function getCount(matn){
for(let i =0;i<matn.length;i++ ){
    if(!unli.includes(matn[[i]]))return getCount(matn.slice(i + 1))\
    count++
}
}
getCount(str)
console.log(count);






// function ole(n) {
//     if (n == 0) return 0;

//     return n % 10 + ole(Math.floor(n / 10));
// }

// console.log(ole(5839));



// function search(arr, x, i = 0) {
//     if (i == arr.length) return false;

//     if (arr[i] == x) return true;

//     return search(arr, x, i + 1);
// }

// console.log(search([7, 12, 5, 9, 20], 9));
// console.log(search([7, 12, 5, 9, 20], 15)); 



// let arr = [2, 5, 8, 3, 10, 7]
// let sum = 0
// function getsum(data) {
//     for (let i = 0; i < data.length; i++) {
//         if (data[i] % 2) return getsum(data.slice(i + 1));
//         sum += data[i];

//     }
// }
// getsum(arr)
// console.log(sum);

