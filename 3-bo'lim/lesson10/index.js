// let obj = {
//     id:1,
//     ism:"Eshmat"
//  }
// console.log(Object.getOwnPropertyDescriptor(obj,"ism"));

//  let clone = Object.getOwnPropertyDescriptors(obj)
//  console.log(clone);

// Object.defineProperty(obj,"ism",{writable:false})
// obj.ism = "Toshmat"
// console.log(Object.getOwnPropertyDescriptor(obj,"ism"));
// Object.defineProperty(obj,"ism",{enumerable:false})
// for(let key in obj){
//     console.log(key,obj[key]);

// }


// Object.defineProperty(obj,"ism",{configurable:false})
// delete obj.ism
// console.log(obj);


// ==================================================
// let obj = {
//     id: 1,
//     ism: "Eshmat"
// }
// Object.preventExtensions(obj)
// obj.yosh = 20
// console.log(obj);

// console.log(Object.isExtensible(obj));

// Object.seal(obj)
// delete obj.ism
// obj.yosh =20
// console.log(obj);
// console.log(Object.isSealed(obj));

// Object.freeze(obj)
// obj.yosh =20
// delete obj.ism
// console.log(obj);

// console.log(Object.isFrozen(obj));


// let obj = {
//     id: 1,
//     ism: "Eshmat",
//     get m(){
//         return obj.ism
//     },
//     set m(param){
//         this.ism = param
//     }
    
// }
// obj.m ="Uxlamanglar"
// console.log(obj.m);
