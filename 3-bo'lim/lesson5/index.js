// let arr = [1,2,2,3,1,7,5,9,9]
// let arrr= arr.filter((value,index,a)=>{
//     if(a.slice(index +1).includes(value))return value
// })
// console.log(arrr);



// let str = "Men Oxford da o'qimoqdaman"
// let ss = Array.from(new Set(str.split(""))).join("")
// console.log(ss);



// new Map
let m = new Map()
m.set("ism","Laptop")

console.log(m.get("ism"));

 
let obj = {
    id: 1,
    name: "gulmat"
}

console.log(m.has("ism"));

console.log(m.size);


m.delete("ism")
console.log(m);


m.clear()
console.log(m);


// new Set()

let setArr = new Set()
setArr.add(10)
setArr.add(20)

setArr.forEach((value) => console.log(value));
setArr.add(`${30} ${40} `)

console.log(setArr);

console.log(setArr.has(100));

console.log(setArr.size);

setArr.delete(20)

setArr.clear()

console.log(setArr);
 
