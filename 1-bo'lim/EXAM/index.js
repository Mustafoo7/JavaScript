
// let obj = {
//  id:1,
//  ism: "Ali",
//  Familya:"Valiyev",
//  yosh: 20,
//   manzil:"Namangan"


// };

// let obj2 = structuredClone(obj);
// obj2.ism = "Vali"
// obj2.Familya = "Aliyev"
// obj2.id = 2
// obj2.yosh = 21
// obj2.manzil = "Farg'ona"
// console.log(obj2);
// console.log(obj);

// let ob3 = structuredClone(obj);
// ob3.ism = "Eshmat"
// ob3.Familya = "Toshmatov"
// ob3.id = 3
// ob3.yosh = 22
// ob3.manzil = "Andijon"
// console.log(ob3);
// console.log(obj);














// let Ball = 76

// if(Ball>=0 && Ball<=59){
//     console.log("Yiqildi");
    
// }
// else if(Ball>=60 && Ball<=70){
//     console.log("O'rtacha");
    
// }
// else if(Ball>=71 && Ball<80){
//     console.log("Yaxshi");
    
// }
// else if(Ball>=81 && Ball<=90){
//     console.log("a`lo");
    
// }
// else if(Ball>91 && Ball<100){
//     console.log("Zo`r");
// }  

// else{
// console.log("error");

// }













// let yigindi = 0;

// for(let raqam =1; raqam <=10; raqam++){
//     if(raqam % 2 === 1){
//        yigindi+=raqam
//     }
// }

// console.log(yigindi)






// let p = 1, m = 0;
// while (p <= 10) {
//     if(p % 2===1){
//         m += p;
//     }
  
//   p++;
// }
// console.log(m);







// let i = 1;
// let e = 0;
// do {
//   if (i % 2 === 1){
//     e+=i
//   }
//   i++;
// } while (i <= 10);
// console.log(e);





// let yy = Number(prompt("Sonni kiriting"));
// if (yy % 2 === 0) {
//     alert("Bu Juft son");
// }
// else if(yy % 2 === 1){
//     alert("Bu toq son")
// }
// else{
//     console.log("Error");
    
// }























let obj = {
    id:1,
    name:"Anor",
    price:5000,
}
for (let key in obj){
    if (key === "price")
        obj[key] = obj[key] - (obj[key] * 15) / 100 ;

}
console.log(obj);




























