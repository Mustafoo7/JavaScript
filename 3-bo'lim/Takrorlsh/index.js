// let sana = "03/09/2026T16:43:00, +0500"
// sana =sana.split(",")[0].replaceAll("/","-").replaceAll("T",", ")
// console.log(sana);


// let ne = new Date()
// console.log(ne.getUTCDate());//5chi kun
// console.log(ne.getUTCDay());//hafta
// console.log(ne.getUTCFullYear());//yil
// console.log(ne.toLocaleDateString());kun hafta yil
// console.log(ne.toLocaleString());05/09/2026, 13:41:06
// console.log(ne.toLocaleTimeString());13:41:06
// console.log(ne.toTimeString());13:41:06 GMT+0500 (O‘zbekiston standart vaqti)
// console.log(ne.toISOString());2026-09-05T08:41:06.188Z


let Mustafo ={
    ism:"Mustafo",
    familya:"Saidrahmonov",
    yosh:13,
    adres:{
        manzil:"Jar",
        Uy_raqam:37,
        mahalla:"Bodomcha"
    },
Hobbi:[
"VideoGame",
"PlayFootball" 
]
}

let jsn = JSON.stringify(Mustafo.ism)
console.log(jsn);





