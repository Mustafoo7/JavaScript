// Settimeout(callbakc,time)
// setTimeout(()=>{
//     console.log("SetTimeout");

// },1000)

// ========
// setInterval()

// setInterval(()=>{
//     console.log("SetInterval");

// },1000)

// clearinterval() 
// let count = 1 
// let a = setInterval(()=>{
//     console.log("Interval",count);
//     count++
// },1000)

// setTimeout(()=>{
//     clearInterval(a)
// },6000)

// Call
// function getdata(familya){
//     console.log(this.ism,familya);

// }

// getdata.call({ism:"Ali"},"Valiyev")
// call dan yuborilgan 1-argument Context ga birikadi.
// Context -bu this degaani. 


// apply
// function getdata(familya, yosh) {
//     console.log(this.ism, familya, yosh);

// }
// getdata.apply({ ism: "Ali" }, ["Valiyev", 100])

// bind
function getdata(familya, yosh) {
    console.log(this.ism, familya, yosh);

}
getdata.bind({ ism: "Ali" }, "Valiyev", 100)()
 
 