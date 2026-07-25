// Weak Map

let map = new WeakMap()

let key ={}
map.set(key,"Eshmat")
console.log(map.get(key));


// Weak map ning kaliti doim OBJECT bo'lishi sahart.

console.log(map.has(key));

map.delete(key)
console.log(map);



// =---------------------------======

let set =new WeakSet()

let value = {id: 1 }
set.add(value)
console.log(set.has(value));
console.log(set);
set.delete(value)
console.log(set);
