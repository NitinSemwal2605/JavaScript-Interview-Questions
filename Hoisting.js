// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope before code execution.

// Example 1

console.log(x); // undefined
var x = 5;

// Example 2

var y;
console.log(y); // undefined
y = 10;

// Example 3

console.log(z); // ReferenceError: z is not defined
z = 15;

// Example with function

console.log(foo); // undefined
var foo = function() {
  console.log("foo");
};

