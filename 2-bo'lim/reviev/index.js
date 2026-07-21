// // // let arr = [1,2,3,4,5,6,7,8 ,9]
// // // let rr = arr.splice(0,2)
// // // let a = arr.splice(-2)
// // // console.log(arr);
// // // console.log(rr.concat(a));


// // let email ="salom_@gmail.com"
// // let a = email.endsWith("@gmail.com")
// // let s = email.length < 15
// // if(a,s === true){
// //     console.log("To'g'ri");
// // }else{console.log("Noto'g'ri");
// // }




// function accum(str) {
//     str = str.toLowerCase();
//     let newStr = ""
//     for (let i = 0; i < str.length; i++) {
//         newStr += str[i].repeat(i + 1)[0].toUpperCase() +
//             str[i].repeat(i + 1).slice() +
//             "-"
//     }
//     return newStr.slice(0, newStr.length - 1)
// }

// console.log(accum("abcd"));
// console.log(accum("RqaEzty"));




const input = {
    Ali:{
        tasks:{
            task1:{ completed : true},
            task2:{ completed : true},
            task3:{ completed : false},
        },
    },
    Vali:{
        tasks:{
            task1:{ completed : false},
            task2:{ completed : false},
         
        },
    },
    Sami:{
        tasks:{
            task1:{ completed : true},
            task2:{ completed : true},
            task3:{ completed : true},
         
        },
    },
    Abubakr:{
        tasks:{
            task1:{ completed : false},
            task2:{ completed : true},
            task3:{ completed : true},
         
        },
    },
   Xasanxon:{
        tasks:{
            task1:{ completed : true},
            task2:{ completed : true},
            task3:{ completed : true},
            task4:{ completed : true}
         
        },
    },

}

function getdta(Data){
let result= {}
for(let key in Data){
    let obj =Data[key].tasks;
    let count = 0;
    for(let key2 in obj){
        if(obj[key2].completed) count++;
    }
    if(count >= 2)result[key] = count
}
console.log(result);
}

getdta(input)



let arr = [5,2,9,8,1,4]
function mm(b){
arr = b.filter((value)=> value % 2 === 0).sort((a,b)=>a-b)
console.log(arr);}
mm(arr)
































// let str = "Oxford va algoritm 2026.";

// let j = "";
// let m = "";
// let l = "";

// for (let i = 0; i < str.length; i++) {
//   let c = str[i];

//   if ((c >= "A" && c <= "Z") || (c >= "a" && c <= "z")) {
//     j += c;

//   } else if (c >= "0" && c <= "9") {
//     m += c;
//   } else {
//     l += c;
//   }
// }

// console.log(j);
// console.log(m);
// console.log(l);




