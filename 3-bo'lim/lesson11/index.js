// let obj = {
//     ism:"Ali"
// }

// let  obj3 = {
//     yosh:30
// }
// let obj2 ={
//     familya:"Valiyev",
//     __proto__:obj3
// }
// obj.__proto__=obj2
// console.log(obj);
// console.log(obj.familya);
// console.log(obj.yosh);

// class Person{
//     _firstname ='Toshmat'
//     constructor(ism,familya,yosh){
//         this.firstname =ism
//         this.lastname = familya
//         this.age =yosh
//     }

//     getname(){
//         return this._firstname
//     }
// }
// let obj=new Person("Ali","Valiyev",20)
// console.log(obj.getname());

// let a ="hi"
// let b ="say"
// class User{
//     constructor(ism){
//         this.name=ism
//     }
//     [a+b](){
//         return this.name
//     }
// }
// let obj = new User("Akmal")
// console.log(obj.hisay());

// class Car {
//     constructor(name){
//         this.name= name
//     }
//     speed(){
//         return this.name
//     }
// }

// class Matiz extends Car{
//     getname(){
//         return this.name
//     }

// }
// let obj = new Matiz ("Matiz")
// console.log(obj.getname());

class Parent{
    ism ="Salim"
    constructor(){
        this.status ="Ha bu usta"

    }
    getstatus(){
        return this.status
    }
}

class Child extends Parent{
    ism = "Alim"
    constructor(){
        super()
        this.status ="Quruvchi"
    }
    getstatus(){
        return this.status
    }
}
let obj =new Child()
console.log(obj.getstatus());
