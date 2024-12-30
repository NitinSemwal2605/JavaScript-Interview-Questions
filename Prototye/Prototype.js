// Protoype is a JavaScript framework that extends the language with a lot of useful features.
// It is a library of pre-built functions that can be used to extend the functionality of JavaScript.
// It is an open-source library that is used to create AJAX applications.

const obj = {
    name: "John",
    age: 30,
    city: "New York",

    getName: function(){
        return this.name;
    }
};

const obj2 ={
    name : "Robert",
    mobile : "Samsung",
    Card : "9212 1234 1234 1234",
    __proto__ : obj
};

console.log(obj2.name); // Robert
console.log(obj2.getName());  // Robert
console.log(obj.name);  // John


const obj3 = {
    company : "Google",
    location : "California",
    __proto__ : obj2 // obj2 is the prototype of obj3
}


console.log(obj3.name); // Robert
console.log(obj3.getName());  // Robert

// The prototype chain is used to access the properties of an object that is not present in the object itself.


// Prototype Inheritance with Arrays

const arr = [1,2,3,4,5];
console.log(arr.__proto__); // Array []
console.log(arr.__proto__.__proto__); // Object {}

// The prototype of an array is an object and the prototype of an object is null.


// Prototype Inheritance with Functions

function fun(){
    console.log("Hello");
}

console.log(fun.__proto__); // [Function]
console.log(fun.__proto__.__proto__); // Object {}
console.log(fun.__proto__.__proto__.__proto__); // null

// The prototype of a function is a function and the prototype of a function is an object and the prototype of an object is null.