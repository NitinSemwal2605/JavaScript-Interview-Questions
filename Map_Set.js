// Set means a collection of unique values.

let set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.delete(2);
set.has(1); // true
set.size; // 2
set.clear();

// 2. Iterate over a Set

set.forEach((value) => {
    console.log(value);
    }
);

// Convert Set to Array
let arr = Array.from(set);


let myarr = [1, 2, 3, 2, 5, 6, 7, 1, 9, 10, 10];
let myset = new Set(myarr);
myset.add("nitinsemwal"); 
myset.add("nitinsemwal");
myset.delete("nitinsemwal");
console.log(myset);



// ----------------------------------------------

// Map in JavaScript = Key-Value Pair

let map = new Map();
map.set("name", "Nitin Semwal");
map.set("age", 24);
map.set("Address", "Delhi");
map.set("Designation", "Software Engineer");
map.set("Company", "Samsung");
map.set("Company2", "Vivo");
map.set("Company3", "Apple");
map.delete("Company");
console.log(map);
console.log(map.get("name"));
console.log(map.has("name"));

// 2. Iterate over a Map

map.forEach((value, key) => {
    console.log(key, value);
    }
);

// Convert Map to Array example 
let arr = Array.from(map);
console.log(arr);


// ----------------------------------------------

// WeakSet and WeakMap

// WeakSet - It is a collection of objects only. It holds weakly held objects.

let weakset = new WeakSet();
let obj = {};
weakset.add(obj);
console.log(weakset.has(obj));

// WeakMap - It is a collection of key-value pairs only. It holds weakly held objects.

let weakmap = new WeakMap();
let key = {};
let value = "Hello World";
weakmap.set(key, value);
console.log(weakmap.get(key));


