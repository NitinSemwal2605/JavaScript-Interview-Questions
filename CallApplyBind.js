// Call Method - It is used to call a method of an object with another object as an argument.

// The `call()` method allows you to specify the `this` value and pass arguments separately.
let userDetails = {
    name: "Nitin Semwal",
    age: 21,
    city: "Dehradun",
    Designation: "Software Developer",
    printDetails: function() {
        console.log(this.name); // Output: Nitin Semwal
    }
}

userDetails.printDetails(); // Output: Nitin Semwal

let userDetails2 = {
    name: "John Doe",
    age: 25,
    city: "New York",
    Designation: "Web Developer",
}

// `call()` allows passing the `this` value as a different object and invokes the method immediately.
userDetails.printDetails.call(userDetails2); // Output: John Doe

// Apply Method - It is used to call a method of an object with another object as an argument.
// The only difference between `call()` and `apply()` is that `apply()` takes arguments as an array, 
// whereas `call()` takes arguments separately.

// The `apply()` method is similar to `call()`, but takes arguments as an array or array-like object.
let userDetails3 = {
    name: "Nitin Semwal",
    age: 21,
    city: "Bangalore",
    Designation: "Software Developer",
    printDetails: function() {
        console.log(this.name); // Output: Nitin Semwal
    }
}

userDetails3.printDetails(); // Output: Nitin Semwal

let userDetails4 = {
    name: "John Doe",
    age: 25,
    city: "New York",
    Designation: "Web Developer",
}

// `apply()` passes arguments as an array, calling the method immediately.
userDetails3.printDetails.apply(userDetails4); // Output: John Doe

// Difference between call and apply method
// - The only difference is that `call()` takes arguments separately, whereas `apply()` takes arguments as an array.


// Bind Method - The `bind()` method is used to bind a function to a specific `this` value and returns a new function.
// It doesn't immediately invoke the function, but returns a new function that can be called later with the specified `this` value.

// The `bind()` method returns a **new function** that is bound to the specified `this` value and can be invoked later.
let userDetails5 = {
    name: "Nitin Semwal",
    age: 21,
    city: "Dehradun",
    Designation: "Software Developer",
    printDetails: function() {
        console.log(this.name); // Output: Nitin Semwal
    }
}

let userDetails6 = {
    name: "John Doe",
    age: 25,
    city: "New York",
    Designation: "Web Developer",
}

// `bind()` returns a new function bound to `userDetails6`, but doesn't invoke it immediately.
let boundPrintDetails = userDetails5.printDetails.bind(userDetails6);

// The function can be called later, and it will use `userDetails6` as `this`.
boundPrintDetails(); // Output: John Doe

/*
Summary of Differences between `call()`, `apply()`, and `bind()`:

`call()` is used to call a method of an object with another object as an argument.
`apply()` is used to call a method of an object with another object as an argument, but takes arguments as an array.
`bind()` is used to bind a function to a specific `this` value and returns a new function that can be called later.

*/