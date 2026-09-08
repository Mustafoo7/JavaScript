// // let sana = "03/09/2026T16:43:00, +0500"
// // sana =sana.split(",")[0].replaceAll("/","-").replaceAll("T",", ")
// // console.log(sana);


// // let ne = new Date()
// // console.log(ne.getUTCDate());//5chi kun
// // console.log(ne.getUTCDay());//hafta
// // console.log(ne.getUTCFullYear());//yil
// // console.log(ne.toLocaleDateString());kun hafta yil
// // console.log(ne.toLocaleString());05/09/2026, 13:41:06
// // console.log(ne.toLocaleTimeString());13:41:06
// // console.log(ne.toTimeString());13:41:06 GMT+0500 (O‘zbekiston standart vaqti)
// // console.log(ne.toISOString());2026-09-05T08:41:06.188Z


// let Mustafo ={
//     ism:"Mustafo",
//     familya:"Saidrahmonov",
//     yosh:13,
//     adres:{
//         manzil:"Jar",
//         Uy_raqam:37,
//         mahalla:"Bodomcha"
//     },
// Hobbi:[
// "VideoGame",
// "PlayFootball" 
// ]
// }
//=============================================================
// let jsn = JSON.stringify(Mustafo.Hobbi)
// console.log(jsn);

// let jsp = JSON.parse(Mustafo.ism)
// console.log(jsp);


// let setarr = new Set()
// let mapOBJ = new Map()
// mapOBJ.set("a",1)
// mapOBJ.set("b",2)
// mapOBJ.set("c",3)
// mapOBJ.set("d",4)
// mapOBJ.set("e",5)
// mapOBJ.set("f",6)
// mapOBJ.set("j",7)
// mapOBJ.forEach((value)=>{
//     setarr.add(value)
// })
// console.log(Array.from(setarr));


// let kopaytma = 1
// function getvalue(value){
// if(value){
//     kopaytma *=value
//  return getvalue(value - 1)
// }
// console.log(kopaytma);

// }
// getvalue(6)
// ===
// let newm = new Map()
// newm.set("ism","Mustafo")
// newm.set("yosh",12)
// console.log(newm.get("yosh"));
// console.log(newm.has("ism"));
// console.log(newm.size);
// newm.delete("ism")
// newm.clear()
// console.log(newm);
// console.log(Object.fromEntries(newm));
// ===

// let news =new Set()
// news.add("ism","Mustafo")
// news.add("yosh",12)
// console.log(news.has("ism"));
// console.log(news.size);
// console.log(news);
// =======







