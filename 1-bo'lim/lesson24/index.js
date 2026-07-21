// let user = {
//     id: 1,
//     ism:"Abubakr",
//     familya:"Turdaliyev",
//     yosh:13,
//     manzil:"Tayland"
// }

// for (let laptop in user){
//     console.log(laptop, user[laptop])
// }
let laptop = {
    model:"Macbook",
    color:"Silver",
    prise:1000,
    count:5,
};

for (let key in laptop){
    if (key === "prise"){
        let summa = laptop[key] - (laptop [key] * 10 * laptop.count)/100 ;
        console.log(summa);
        
    }
}


let copybook = {
    model:"MCHJ Print",
    color:"green",
    prise:15,
    count:5,
};

for (let key in copybook){
    if (key === "prise"){
        let summa = copybook[key] - (copybook [key] * 10 * copybook.count)/100 ;
        console.log(summa);
        
    }
}




let BMW = {
    model:"M5 F90",
    color:"Black",
    prise:100000,
    count:2,
};

for (let key in BMW){
    if (key === "prise"){
        let summa = BMW[key] - (BMW [key] * 10 * BMW.count)/100 ;
        console.log(summa);
        
    }
}



let car = {
    model:"chevrolet",
    color:"Blue",
    prise:15000,
    count:1,
};

for (let key in car){
    if (key === "prise"){
        let summa = car[key] - (car [key] * 10 * car.count)/100 ;
        console.log(summa);
        
    }
}



let TV = {
    model:"LG",
    color:"siliver",
    prise:1500,
    count:1,
};

for (let key in TV){
    if (key === "prise"){
        let summa = TV[key] - (TV [key] * 10 * TV.count)/100 ;
        console.log(summa);
        
    }
}